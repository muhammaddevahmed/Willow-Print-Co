// Form Validation
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const termsModal = document.getElementById("termsModal");
const acceptTermsBtn = document.getElementById("acceptTerms");
const declineTermsBtn = document.getElementById("declineTerms");
const closeTermsBtn = document.querySelector(".close-terms");

// Regex patterns
const nameRegex = /^[a-zA-Z\s-]{5,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Track if terms are accepted
let termsAccepted = false;
(function () {
  emailjs.init("lBXKmaqS0cCwXgIlA"); // Replace with your EmailJS public key
})();
// Validation function
function validateForm() {
  let isValid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const name = nameInput.value.trim();
  if (!nameRegex.test(name)) {
    nameInput.parentElement.classList.add("error");
    isValid = false;
  } else {
    nameInput.parentElement.classList.remove("error");
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();
  if (!emailRegex.test(email)) {
    emailInput.parentElement.classList.add("error");
    isValid = false;
  } else {
    emailInput.parentElement.classList.remove("error");
  }

  // Interest validation
  const interestInput = document.getElementById("interest");
  const interestError = document.getElementById("interestError");
  const interest = interestInput.value;
  if (!interest || interest === "") {
    interestInput.parentElement.classList.add("error");
    isValid = false;
  } else {
    interestInput.parentElement.classList.remove("error");
  }

  // Message validation
  const messageInput = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  const message = messageInput.value.trim();
  if (message.length < 10 || message.length > 1000) {
    messageInput.parentElement.classList.add("error");
    isValid = false;
  } else {
    messageInput.parentElement.classList.remove("error");
  }

  return isValid;
}

// Form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    // Show terms modal instead of submitting directly
    termsModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  }
});

// Accept terms
acceptTermsBtn.addEventListener("click", function () {
  termsAccepted = true;
  termsModal.style.display = "none";
  document.body.style.overflow = "auto";

  // Now actually submit the form
  submitForm();
});

// Decline terms or close modal
declineTermsBtn.addEventListener("click", closeTermsModal);
closeTermsBtn.addEventListener("click", closeTermsModal);

function closeTermsModal() {
  termsModal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
termsModal.addEventListener("click", function (e) {
  if (e.target === termsModal) {
    closeTermsModal();
  }
});

// Function to actually submit the form
function submitForm() {
  const contactFormData = new FormData(contactForm);

  const name = contactFormData.get("name");
  const email = contactFormData.get("email");
  const interest = contactFormData.get("interest");
  const message = contactFormData.get("message");

  console.log(name, email, interest, message); // should now show correct values

  // Send with EmailJS
  emailjs
    .send("service_23cfr3n", "template_xxy6jal", {
      name,
      email,
      interest,
      message,
    })
    .then(() => {
      contactForm.style.display = "none";
      successMessage.classList.add("show");
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send email.");
    });
}
// Real-time validation
["name", "email", "interest", "message"].forEach((field) => {
  document.getElementById(field).addEventListener("input", validateForm);
});

function resetForm() {
  // Reset form and show it again
  contactForm.reset();
  contactForm.style.display = "block";
  successMessage.classList.remove("show");
  termsAccepted = false;

  // Clear all error states
  ["name", "email", "interest", "message"].forEach((field) => {
    document.getElementById(field).parentElement.classList.remove("error");
  });

  // Scroll back to form
  contactForm.scrollIntoView({ behavior: "smooth" });
}


