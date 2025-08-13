// animation.js – Tự động gắn hiệu ứng khi scroll đến

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // ✅ Animate 1 lần duy nhất
      }
    });
  },
  { threshold: 0.3 }
);

// Gắn observer cho các class animation
document
  .querySelectorAll(".fade-in, .glow-on-scroll, .slide-up, .zoom-in, .blur-in")
  .forEach((el) => {
    observer.observe(el);
  });

// Glow + Slide In on Scroll for section-heading__title
const headingTitle = document.querySelector(".section-heading__title");

if (headingTitle) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("glow-in");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  observer.observe(headingTitle);
}
