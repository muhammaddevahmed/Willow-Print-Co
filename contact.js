// Form Validation
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Regex patterns
const nameRegex = /^[a-zA-Z\s-]{5,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    // Here you would typically send the form data to your server
    // For this example, we'll just show the success message

    // Hide form and show success message
    contactForm.style.display = "none";
    successMessage.classList.add("show");

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// Real-time validation
["name", "email", "interest", "message"].forEach((field) => {
  document.getElementById(field).addEventListener("input", validateForm);
});

function resetForm() {
  // Reset form and show it again
  contactForm.reset();
  contactForm.style.display = "block";
  successMessage.classList.remove("show");

  // Clear all error states
  ["name", "email", "interest", "message"].forEach((field) => {
    document.getElementById(field).parentElement.classList.remove("error");
  });

  // Scroll back to form
  contactForm.scrollIntoView({ behavior: "smooth" });
}
