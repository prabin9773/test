// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector('form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const contact = form.querySelector('input[type="tel"]').value; // Change 'int' to 'tel'
        const message = form.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !contact || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Display a success message (you can replace this with a more sophisticated action)
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Optionally, reset the form after submission
        form.reset();
    });
});