// js/components/modal.js

export function initModal() {
  const modal = document.getElementById("register-modal");

  if (!modal) {
    console.warn("⚠️ Modal not found in DOM");
    return;
  }

  // Nút mở modal
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  });

  // Nút đóng modal
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
}
