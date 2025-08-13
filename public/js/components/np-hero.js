// NP HERO – pick featured campaign from /assets/data/news.json & render hero.
// Điều kiện: chỉ hoạt động trên trang data-page="news-promotions".
(function () {
  const isNP = document.body?.dataset?.page === "news-promotions";
  if (!isNP) return;

  const hero = document.getElementById("np-hero");
  if (!hero) return;

  const grid = document.getElementById("np-grid");
  const source = grid?.dataset?.source || "/assets/data/news.json";

  const el = {
    bg: hero.querySelector(".np-hero__bg"),
    title: hero.querySelector(".np-hero__title"),
    excerpt: hero.querySelector(".np-hero__excerpt"),
    pill: hero.querySelector(".np-hero__pill"),
    cta: hero.querySelector(".np-hero__cta"),
    countdown: hero.querySelector(".np-hero__countdown"),
  };

  // Helpers
  const within = (start, end, now = new Date()) => {
    const s = start ? new Date(start) : null;
    const e = end ? new Date(end) : null;
    return (!s || now >= s) && (!e || now <= e);
  };

  const fmtCountdown = (end) => {
    const t = new Date(end) - new Date();
    if (isNaN(t) || t <= 0) return "";
    const d = Math.floor(t / 86400000);
    const h = Math.floor((t % 86400000) / 3600000);
    const m = Math.floor((t % 3600000) / 60000);
    return `${d}d ${h}h ${m}m remaining`;
  };

  async function initHero() {
    try {
      const res = await fetch(source, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const items = await res.json();

      // pick: featured first, then tagged "campaign", must be in time window if provided
      const candidates = items
        .filter((it) => it.featured || (it.tags || []).includes("campaign"))
        .filter((it) => within(it.start, it.end))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      const pick = candidates[0];
      if (!pick) {
        hero.hidden = true;
        return;
      }

      // ---------- UPDATE: ưu tiên heroImage, fallback image ----------
      const heroImg = pick.heroImage || pick.image;
      if (el.bg && heroImg) el.bg.style.backgroundImage = `url("${heroImg}")`;

      // Title / excerpt
      if (el.title) el.title.textContent = pick.title || "";
      if (el.excerpt) el.excerpt.textContent = pick.excerpt || "";

      // Pill chiến dịch
      if (el.pill) {
        el.pill.textContent = pick.campaignLabel || "Campaign";
        if (pick.campaignColor)
          el.pill.style.backgroundColor = pick.campaignColor;
      }

      // CTA: href + ---------- UPDATE: text từ ctaText nếu có ----------
      if (el.cta) {
        el.cta.setAttribute("href", pick.ctaHref || pick.href || "#");
        if (pick.ctaText) el.cta.textContent = pick.ctaText;
      }

      // Countdown (optional, chỉ hiển thị khi có end)
      if (el.countdown && pick.end) {
        const tick = () => {
          const txt = fmtCountdown(pick.end);
          el.countdown.textContent = txt;
          if (!txt) clearInterval(timer);
        };
        tick();
        var timer = setInterval(tick, 60000); // update mỗi phút
      } else if (el.countdown) {
        el.countdown.textContent = ""; // không hiển thị nếu không có end
      }

      hero.hidden = false;
    } catch (e) {
      console.warn("[GM] np-hero load failed:", e);
      hero.hidden = true;
    }
  }

  initHero();
})();
