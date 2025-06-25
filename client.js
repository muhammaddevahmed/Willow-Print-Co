
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



document.addEventListener('DOMContentLoaded', function() {
  // Add another address field
  const addAnotherBtn = document.getElementById('addAnother');
  const guestAddresses = document.getElementById('guestAddresses');
  
  if (addAnotherBtn && guestAddresses) {
    addAnotherBtn.addEventListener('click', function() {
      const newAddress = document.createElement('div');
      newAddress.className = 'guest-address';
      newAddress.innerHTML = `
        <div class="form-group">
          <label>Guest Name(s)</label>
          <input type="text" name="guestName[]" required>
        </div>
        <div class="form-group">
          <label>Street Address</label>
          <input type="text" name="streetAddress[]" required>
        </div>
        <div class="form-group-group">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city[]" required>
          </div>
          <div class="form-group">
            <label>State/Province</label>
            <input type="text" name="state[]" required>
          </div>
          <div class="form-group">
            <label>ZIP/Postal Code</label>
            <input type="text" name="zip[]" required>
          </div>
          <div class="form-group">
            <label>Country</label>
            <input type="text" name="country[]" required>
          </div>
        </div>
        <button type="button" class="remove-address submit-btn" style="background-color: #d32f2f;">
          Remove Address <i class="fas fa-trash"></i>
        </button>
      `;
      
      guestAddresses.appendChild(newAddress);
      
      newAddress.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    guestAddresses.addEventListener('click', function(e) {
      if (e.target.classList.contains('remove-address') || e.target.closest('.remove-address')) {
        const addressToRemove = e.target.closest('.guest-address');
        if (addressToRemove) {
          addressToRemove.remove();
        }
      }
    });
  } else {
    console.error('addAnotherBtn or guestAddresses not found');
  }
})

  const scriptURL = "https://script.google.com/macros/s/AKfycbxKKBJd8_yjp5WSDOvx2LH5tyoUWxqao0q387MxqEqRz-LXdyAdg9h6F1ANe6awI00jKA/exec";
  const form = document.getElementById('addressForm'); 

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    
  });