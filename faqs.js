document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".unique-faq-item");

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
      ".unique-faq-header, .unique-faq-accordion, .unique-faq-cta"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Accordion functionality
  faqItems.forEach((item) => {
    const question = item.querySelector(".unique-faq-question");
    const answer = item.querySelector(".unique-faq-answer");

    // Ensure answer-inner exists
    const answerContent = answer.innerHTML;
    answer.innerHTML = "";
    const answerInner = document.createElement("div");
    answerInner.className = "unique-faq-answer-inner";
    answerInner.innerHTML = answerContent;
    answer.appendChild(answerInner);

    question.addEventListener("click", () => {
      // Close other open items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".unique-faq-answer").style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // Preload animations
  setTimeout(() => {
    document.querySelector(".unique-faq-header").style.animationPlayState =
      "running";
    document.querySelector(".unique-faq-accordion").style.animationPlayState =
      "running";
    document.querySelector(".unique-faq-cta").style.animationPlayState =
      "running";
  }, 300);
});
