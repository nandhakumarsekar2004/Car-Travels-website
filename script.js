// Function to show a welcome message on the first visit
function showWelcomeMessage() {
    const welcomeMessage = localStorage.getItem('welcomeMessageShown');
    if (!welcomeMessage) {
        alert("Welcome to SMR Car Travels! Enjoy your ride!");
        localStorage.setItem('welcomeMessageShown', 'true');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Call the welcome message function on page load
window.onload = showWelcomeMessage;
