// js/components/accordion.js

export function initAccordion() {
  const items = document.querySelectorAll(".accordion__item");

  if (!items.length) {
    console.warn("Không tìm thấy accordion__item nào");
    return;
  }

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion__trigger");
    const content = item.querySelector(".accordion__content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = null;
        content.style.opacity = 0;
      }
    });
  });

  console.log("✅ Accordion initialized");
}
