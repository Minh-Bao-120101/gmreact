// /js/components/marketLive.js
let tvLoaderPromise = null;

function loadTradingView() {
  if (window.TradingView?.widget) return Promise.resolve();
  if (tvLoaderPromise) return tvLoaderPromise;

  tvLoaderPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://s3.tradingview.com/tv.js';
    s.async = true;
    s.onload = () => (window.TradingView?.widget ? resolve() : reject(new Error('TradingView loaded but widget missing')));
    s.onerror = () => reject(new Error('Failed to load TradingView tv.js'));
    document.head.appendChild(s);
  });
  return tvLoaderPromise;
}

// ---- Theme helpers ----
function detectTheme(el, overrideTheme) {
  // Ưu tiên: opts.theme -> data-theme -> .dark class -> prefers-color-scheme
  if (overrideTheme) return overrideTheme;
  if (el?.dataset?.theme) return el.dataset.theme; // "dark" | "light"
  const root = document.documentElement;
  const body = document.body;
  if (root.classList.contains('dark') || body.classList.contains('dark')) return 'dark';
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'dark';
}

/**
 * Khởi tạo TradingView chart cho #tv_chart_container / .tv-chart-container
 * @param {Object} opts
 *  - symbol: "BINANCE:BTCUSDT" ...
 *  - interval: "60" | "240" | "D" ...
 *  - theme: "dark" | "light"
 */
export async function initMarketLive(opts = {}) {
  const containers = Array.from(document.querySelectorAll('#tv_chart_container, .tv-chart-container'));
  if (!containers.length) return;

  try {
    await loadTradingView();

    containers.forEach((el, idx) => {
      if (!el.id) el.id = `tv_chart_container_${idx + 1}`;

      const symbol   = opts.symbol   || el.dataset.symbol   || 'BINANCE:BTCUSDT';
      const interval = opts.interval || el.dataset.interval || '60';
      const theme    = detectTheme(el, opts.theme);

      // cleanup cũ nếu có
      if (el.__tvWidget?.remove) {
        try { el.__tvWidget.remove(); } catch {}
      }

      // khởi tạo widget (dark-ready)
      el.__tvWidget = new window.TradingView.widget({
        container_id: el.id,
        autosize: true,
        symbol,
        interval,
        theme,                 // <-- "dark" | "light"
        style: '1',
        locale: 'en',
        hide_top_toolbar: false,
        save_image: false,
        studies: []
      });

      // lưu state để đổi theme runtime
      el.__tvState = { symbol, interval, theme };
    });
  } catch (err) {
    console.error('[MarketLive] TradingView init failed:', err);
  }
}

/**
 * Đổi theme runtime: gọi setMarketTheme('dark') hoặc 'light'
 */
export async function setMarketTheme(theme = 'dark') {
  const containers = Array.from(document.querySelectorAll('#tv_chart_container, .tv-chart-container'));
  if (!containers.length) return;
  await loadTradingView();

  containers.forEach((el) => {
    const state = el.__tvState || {};
    // giữ symbol/interval cũ
    initMarketLive({ symbol: state.symbol, interval: state.interval, theme });
    // đồng bộ data-theme cho container (tuỳ bạn có dùng CSS kèm theo)
    el.dataset.theme = theme;
  });
}
