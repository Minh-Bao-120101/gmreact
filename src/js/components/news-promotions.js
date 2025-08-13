// NEWS & PROMOTIONS – JSON feed + Filters + Sort + Pagination + Deep-link
(function () {
  const page = document.querySelector('[data-page="news-promotions"]');
  if (!page) return;

  const grid = document.getElementById("np-grid");
  const empty = document.getElementById("np-empty");
  const pills = [...document.querySelectorAll(".np__pill")];
  const searchInput = document.getElementById("np-search");
  const sortSelect = document.getElementById("np-sort");
  const btnPrev = document.querySelector('.np__page-btn[data-page="prev"]');
  const btnNext = document.querySelector('.np__page-btn[data-page="next"]');
  const pageInfo = document.querySelector(".np__page-info");

  const PAGE_SIZE = 6;
  let state = { cat: "all", q: "", sort: "newest", page: 1 };

  let allCards = []; // HTML elements after render from JSON

  // --- Helpers ---
  const parseDate = (iso) => new Date(iso).getTime();
  const normalize = (s) => (s || "").toString().trim().toLowerCase();

  const matchCard = (card, { cat, q }) => {
    const c = card.dataset.cat || "news";
    if (cat !== "all" && c !== cat) return false;
    if (!q) return true;
    const title = normalize(card.dataset.title);
    const text = normalize(card.textContent);
    return title.includes(q) || text.includes(q);
  };

  const sortFns = {
    newest: (a, b) => parseDate(b.dataset.date) - parseDate(a.dataset.date),
    oldest: (a, b) => parseDate(a.dataset.date) - parseDate(b.dataset.date),
    alpha: (a, b) =>
      (a.dataset.title || "").localeCompare(b.dataset.title || "", "vi", {
        sensitivity: "base",
      }),
  };

  const applyStateToURL = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("cat", state.cat);
    url.searchParams.set("q", state.q);
    url.searchParams.set("sort", state.sort);
    url.searchParams.set("page", String(state.page));
    history.replaceState({}, "", url.toString());
  };

  const readStateFromURL = () => {
    const url = new URL(window.location.href);
    state.cat = url.searchParams.get("cat") || state.cat;
    state.q = url.searchParams.get("q") || state.q;
    state.sort = url.searchParams.get("sort") || state.sort;
    state.page =
      parseInt(url.searchParams.get("page") || String(state.page), 10) || 1;
  };

  const renderControlsFromState = () => {
    pills.forEach((p) => {
      const active =
        p.dataset.cat === state.cat ||
        (state.cat === "all" && p.dataset.cat === "all");
      p.classList.toggle("is-active", active);
      p.setAttribute("aria-selected", active ? "true" : "false");
    });
    searchInput.value = state.q;
    sortSelect.value = state.sort;
  };

  const paginate = (items, page, size) => {
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / size));
    const clamped = Math.min(Math.max(page, 1), pages);
    const start = (clamped - 1) * size;
    const slice = items.slice(start, start + size);
    return { slice, total, pages, page: clamped };
  };

  // --- Load JSON feed ---
  async function loadFeed() {
    const src = grid?.dataset?.source;
    if (!src) return;
    try {
      const res = await fetch(src, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const items = await res.json();

      grid.innerHTML = items
        .map((item) => {
          const cat = (item.category || "news").toLowerCase();
          const dt = item.date;
          const title = item.title || "";
          const pillClass =
            cat === "promotions"
              ? "gm-pill gm-pill--promo"
              : cat === "platform"
              ? "gm-pill gm-pill--platform"
              : "gm-pill gm-pill--news";

          const dateFmt = new Date(dt)
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
            .replace(/ /g, " ");

          return `
<article class="gm-card"
         data-cat="${cat}"
         data-date="${dt}"
         data-title="${title.replace(/"/g, "&quot;")}">
  <a class="gm-card__link" href="${item.href || "#"}">
    <figure class="gm-card__media">
      <img loading="lazy" src="${item.image}" alt="${item.alt || title}" />
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
        <time datetime="${dt}">${dateFmt}</time>
      </div>
      <h3 class="gm-card__title">${title}</h3>
      <p class="gm-card__excerpt">${item.excerpt || ""}</p>
    </div>
  </a>
</article>`;
        })
        .join("");

      allCards = [...grid.querySelectorAll(".gm-card")];
    } catch (e) {
      console.warn("[GM] Load JSON feed failed:", e);
    }
  }

  // --- Main render ---
  const render = () => {
    const filtered = allCards.filter((c) =>
      matchCard(c, { cat: state.cat, q: state.q })
    );
    filtered.sort(sortFns[state.sort] || sortFns.newest);

    const { slice, total, pages, page } = paginate(
      filtered,
      state.page,
      PAGE_SIZE
    );
    state.page = page;

    allCards.forEach((c) => (c.hidden = true));
    slice.forEach((c) => (c.hidden = false));

    empty.hidden = total > 0;
    btnPrev.disabled = page <= 1;
    btnNext.disabled = page >= pages;
    pageInfo.textContent = `Page ${page}${pages > 1 ? ` / ${pages}` : ""}`;

    // Cập nhật URL theo state
    applyStateToURL();

    // Lưu query string để trang chi tiết có thể "Quay lại" giữ đúng filter/paging
    try {
      const qs = new URL(location.href).search.replace(/^\?/, "");
      sessionStorage.setItem("gm_np_qs", qs);
    } catch (e) {
      /* noop */
    }
  };

  // --- Events ---
  pills.forEach((p) =>
    p.addEventListener("click", () => {
      state.cat = p.dataset.cat;
      state.page = 1;
      renderControlsFromState();
      render();
    })
  );

  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.q = normalize(searchInput.value);
      state.page = 1;
      render();
    }, 200);
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    state.page = 1;
    render();
  });

  btnPrev.addEventListener("click", () => {
    state.page -= 1;
    render();
  });
  btnNext.addEventListener("click", () => {
    state.page += 1;
    render();
  });

  // --- Init ---
  (async () => {
    await loadFeed();
    readStateFromURL();
    renderControlsFromState();
    render();
  })();
})();
