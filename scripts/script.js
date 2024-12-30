// Example: Simple form validation for the contact page
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            if (!name || !email) {
                event.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }
});
