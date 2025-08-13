// ARTICLE DETAIL – Hero banner + Copy link + Back state + Related posts
(function () {
  const bodyPage = document.body?.dataset?.page || "";
  const isDetail = [
    "news-detail",
    "promotion-detail",
    "platform-detail",
    "article-detail",
  ].includes(bodyPage);
  if (!isDetail) return;

  const hero = document.getElementById("article-hero");
  const relatedWrap = document.getElementById("related");
  const relatedGrid = relatedWrap?.querySelector(".related__grid");

  // --- HERO: inject background + text ---
  if (hero) {
    const bg = hero.querySelector(".article-hero__bg");
    const titleEl = hero.querySelector(".article-hero__title");
    const excerptEl = hero.querySelector(".article-hero__excerpt");
    const timeEl = hero.querySelector("time");

    const heroImg = hero.dataset.hero || "";
    const title = hero.dataset.title || document.title || "";
    const excerpt = hero.dataset.excerpt || "";
    const dateISO = hero.dataset.date || "";
    const category = (hero.dataset.category || "").toLowerCase();

    if (heroImg && bg) bg.style.backgroundImage = `url("${heroImg}")`;
    if (titleEl) titleEl.textContent = title;
    if (excerptEl) excerptEl.textContent = excerpt;

    if (timeEl && dateISO) {
      const dateFmt = new Date(dateISO)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, " ");
      timeEl.setAttribute("datetime", dateISO);
      timeEl.textContent = dateFmt;
    }

    // Đổi pill theo category
    const pill = hero.querySelector(".gm-pill");
    if (pill) {
      if (category === "promotions") {
        pill.className = "gm-pill gm-pill--promo";
        pill.textContent = "Promotions";
      } else if (category === "platform") {
        pill.className = "gm-pill gm-pill--platform";
        pill.textContent = "Platform Update";
      } else {
        pill.className = "gm-pill gm-pill--news";
        pill.textContent = "News";
      }
    }
  }

  // --- Back to list: giữ query state đã lưu ở list ---
  const backLinks = document.querySelectorAll("[data-back-to-list]");
  backLinks.forEach((a) => {
    try {
      const params = new URLSearchParams(
        sessionStorage.getItem("gm_np_qs") || ""
      );
      if ([...params.keys()].length === 0) return;
      const url = new URL(a.getAttribute("href"), location.origin);
      params.forEach((v, k) => url.searchParams.set(k, v));
      a.setAttribute("href", url.pathname + "?" + url.searchParams.toString());
    } catch (e) {
      /* noop */
    }
  });

  // --- Copy link ---
  const copyBtn = document.querySelector("[data-copy-link]");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const old = copyBtn.textContent;
        copyBtn.textContent = "Đã copy liên kết";
        setTimeout(() => (copyBtn.textContent = old || "Copy link"), 1600);
      } catch (e) {
        console.warn("[GM] copy link failed", e);
      }
    });
  }

  // --- Related posts (3 bài) ---
  async function renderRelated() {
    if (!relatedWrap || !relatedGrid) return;
    const src = relatedWrap.dataset.source;
    if (!src) return;
    const currentId = hero?.dataset?.id || "";
    const currentCat = (hero?.dataset?.category || "").toLowerCase();

    try {
      const res = await fetch(src, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const items = (await res.json()) || [];

      // filter cùng category, loại trừ current, sắp xếp mới->cũ
      const filtered = items
        .filter(
          (it) =>
            (it.category || "").toLowerCase() === currentCat &&
            it.id !== currentId
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

      if (filtered.length === 0) {
        relatedWrap.style.display = "none";
        return;
      }

      relatedGrid.innerHTML = filtered
        .map((item) => {
          const cat = (item.category || "news").toLowerCase();
          const pillClass =
            cat === "promotions"
              ? "gm-pill gm-pill--promo"
              : cat === "platform"
              ? "gm-pill gm-pill--platform"
              : "gm-pill gm-pill--news";

          const dateFmt = new Date(item.date)
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
            .replace(/ /g, " ");

          return `
<article class="gm-card">
  <a class="gm-card__link" href="${item.href || "#"}">
    <figure class="gm-card__media">
      <img loading="lazy" src="${item.image}" alt="${item.alt || item.title}" />
    </figure>
    <div class="gm-card__body">
      <div class="gm-card__meta">
        <span class="${pillClass}">${
            cat === "promotions"
              ? "Promotions"
              : cat === "platform"
              ? "Platform Update"
              : "News"
          }</span>
        <time datetime="${item.date}">${dateFmt}</time>
      </div>
      <h3 class="gm-card__title">${item.title}</h3>
    </div>
  </a>
</article>`;
        })
        .join("");
    } catch (e) {
      console.warn("[GM] related load failed:", e);
      relatedWrap.style.display = "none";
    }
  }

  renderRelated();
})();
