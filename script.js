// NAVBAR START //

// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("active");
  });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// NAVBAR END //

// HERO SECTION CAROUSEL START //

document.addEventListener("DOMContentLoaded", function () {
  // Carousel Functionality
  const slides = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentIndex = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Auto-rotate every 5 seconds
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length);
  }

  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    document
      .querySelectorAll(".carousel-dot")
      [currentIndex].classList.remove("active");

    currentIndex = index;
    slides[currentIndex].classList.add("active");
    document
      .querySelectorAll(".carousel-dot")
      [currentIndex].classList.add("active");

    // Update theme color based on slide
    const theme = slides[currentIndex].dataset.theme;
    document.documentElement.style.setProperty(
      "--theme-color",
      theme === "gold" ? "#c4a86f" : theme === "sage" ? "#a4b8a4" : "#e8c8c8"
    );
  }

  // Scroll Hint Functionality
  const scrollHint = document.getElementById("scrollHint");
  scrollHint.addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  // Pause carousel on hover
  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", () => clearInterval(slideInterval));
  carousel.addEventListener(
    "mouseleave",
    () => (slideInterval = setInterval(nextSlide, 5000))
  );
});

// HERO SECTION CAROUSEL END //
