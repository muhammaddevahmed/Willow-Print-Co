
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to your server
      // For this example, we'll just show the success message
      
      // Hide form and show success message
      contactForm.style.display = 'none';
      successMessage.classList.add('show');
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    function resetForm() {
      // Reset form and show it again
      contactForm.reset();
      contactForm.style.display = 'block';
      successMessage.classList.remove('show');
      
      // Scroll back to form
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }