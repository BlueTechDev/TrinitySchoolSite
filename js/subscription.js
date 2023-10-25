document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate the email address using a regular expression
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(emailValue);

        if (isValidEmail) {
            // Successful submission
            emailError.textContent = '';
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            // Display an error message
            emailError.textContent = 'Please enter a valid email address.';
        }
    });
});
