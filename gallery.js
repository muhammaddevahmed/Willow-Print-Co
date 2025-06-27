// Gallery Modal Functionality
const modal = document.getElementById("unique-gallery-modal");
const modalImg = document.getElementById("unique-modal-image");
const closeBtn = document.querySelector(".unique-modal-close");

// Get all gallery items
const galleryItems = document.querySelectorAll(".unique-gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;
    modal.style.display = "block";
    modalImg.src = imgSrc;
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
