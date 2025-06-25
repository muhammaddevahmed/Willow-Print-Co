document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(
      ".unique-about-header, .unique-about-content, .unique-about-values, .unique-about-cta"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Preload animations
  setTimeout(() => {
    document.querySelector(".unique-about-header").style.animationPlayState =
      "running";
    document.querySelector(".unique-about-content").style.animationPlayState =
      "running";
    document.querySelector(".unique-about-values").style.animationPlayState =
      "running";
    document.querySelector(".unique-about-cta").style.animationPlayState =
      "running";
  }, 300);
});
