// Get references to the elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Function to hide the mobile menu
function hideMenu() {
    menu.style.display = 'none';
}


// Add a click event listener to the mobile menu toggle button
menuToggle.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust the scroll position to control when the button appears
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
