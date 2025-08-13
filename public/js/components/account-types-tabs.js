// /js/components/account-types-tabs.js
export function initTabs(opts = {}) {
  const container = document.getElementById("account-types-tabs");
  if (!container) return;

  const tabs = Array.from(container.querySelectorAll(".gm-tab"));
  const panels = Array.from(container.querySelectorAll(".gm-panel"));
  if (!tabs.length || !panels.length) return;

  const keyOf = (el) =>
    (
      el.getAttribute(
        el.classList.contains("gm-tab") ? "data-tab" : "data-panel"
      ) || ""
    ).toLowerCase();

  // ---- URL sync (hash) ----
  function syncURL(key) {
    try {
      const url = new URL(window.location.href);
      url.hash = `tab=${key}`;
      history.replaceState(null, "", url);
    } catch {}
  }

  // ---- Activate by key ----
  function activate(key) {
    const target = (key || "").toLowerCase();
    let matched = false;

    tabs.forEach((t) => {
      const hit = keyOf(t) === target;
      t.classList.toggle("is-active", hit);
      t.setAttribute("aria-selected", hit ? "true" : "false");
      t.setAttribute("tabindex", hit ? "0" : "-1");
      if (hit) matched = true;
    });

    panels.forEach((p) => {
      const on = keyOf(p) === target;
      p.classList.toggle("is-active", on);
      p.hidden = !on;
    });

    return matched;
  }

  // ---- A11y (idempotent) ----
  container.setAttribute("role", "tablist");
  tabs.forEach((t, i) => {
    const key = keyOf(t) || `tab-${i}`;
    const panel = panels.find((p) => keyOf(p) === key);
    t.setAttribute("role", "tab");
    t.id ||= `gm-tab-${key}`;
    t.setAttribute(
      "aria-selected",
      t.classList.contains("is-active") ? "true" : "false"
    );
    t.setAttribute("tabindex", t.classList.contains("is-active") ? "0" : "-1");
    if (panel) {
      panel.setAttribute("role", "tabpanel");
      panel.id ||= `gm-panel-${key}`;
      panel.setAttribute("aria-labelledby", t.id);
      panel.hidden = !panel.classList.contains("is-active");
      t.setAttribute("aria-controls", panel.id);
    }
  });

  // ---- Click + Keyboard (← →) ----
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      const key = keyOf(tab);
      if (!key) return;
      activate(key);
      syncURL(key);
    });

    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? (idx + 1) % tabs.length
          : (idx - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  });

  // ---- Load more per panel ----
  panels.forEach((panel) => {
    const btn = panel.querySelector("[data-load-more]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      panel
        .querySelectorAll("tbody tr[data-more]")
        .forEach((row) => (row.hidden = false));
      btn.remove();
    });
  });

  // ---- Initial (opts.initial > #tab=xxx > ?tab=xxx > current/first) ----
  const url = new URL(window.location.href);
  const hashTab = (url.hash.match(/tab=([\w-]+)/i) || [])[1];
  const queryTab = url.searchParams.get("tab");
  const initial = (opts.initial || hashTab || queryTab || "").toLowerCase();

  if (initial) {
    if (!activate(initial)) {
      const current =
        tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
      current && activate(keyOf(current));
    }
  } else {
    const current =
      tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
    current && activate(keyOf(current));
  }
}
