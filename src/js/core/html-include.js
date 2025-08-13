// js/core/html-include.js

export async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  const loadTasks = Array.from(elements).map(async (el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Include failed:", err);
      el.innerHTML = "<!-- Failed to load -->";
    }
  });

  await Promise.all(loadTasks); // 🟢 Bắt buộc phải có
}
