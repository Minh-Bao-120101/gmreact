// =========================================================
// MAIN.JS – Entry point sau khi includeHTML() hoàn tất
// Vị trí file: /grand-root/js/main.js
// =========================================================

import { includeHTML } from "./core/html-include.js";
import { initAccordion } from "./components/accordion.js";
import { initModal } from "./components/modal.js";
import { initTabs } from "./components/account-types-tabs.js";
import { initMobileMenu } from "./components/togMenu.js";
import { initMarketLive } from "./components/marketLive.js";

function safe(fn, name) {
  try { fn?.(); } catch (e) { console.error(`[GM] ${name} failed:`, e); }
}

(async function boot() {
  // 1) Chắc chắn include xong mọi fragment (header, sections…)
  await includeHTML();
  console.log("✅ HTML loaded");

  // 2) Init sau khi DOM đã có header/menu
  safe(initMobileMenu, "initMobileMenu");
  safe(initAccordion, "initAccordion");
  safe(initModal, "initModal");
  safe(initTabs, "initTabs");
  safe(initMarketLive, "initMarketLive");

  // 3) Page-specific theo body[data-page]
  const page = document.body?.dataset?.page;

  if (page === "news-promotions") {
    import("./components/np-hero.js").catch(e =>
      console.warn("[GM] np-hero lazy import:", e)
    );
    import("./components/news-promotions.js").catch(e =>
      console.warn("[GM] news-promotions lazy import:", e)
    );
  }

  if (["news-detail","promotion-detail","platform-detail","article-detail"].includes(page)) {
    import("./components/article-detail.js").catch(e =>
      console.warn("[GM] article-detail lazy import:", e)
    );
  }

  // 4) Hiệu ứng chung
  import("./effects/animation.js").catch(e =>
    console.warn("[GM] animation lazy import:", e)
  );
})();
