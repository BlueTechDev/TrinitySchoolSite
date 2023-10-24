const mobileNavIcon = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-menu');
const backToTopButton = document.getElementById('back-to-top');

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});


const resources = document.querySelectorAll('.resources-title');
const resourceContents = document.querySelectorAll('.resource-content');

resources.forEach((resource, index) => {
    resource.addEventListener('click', () => {
        const target = resource.getAttribute('data-target'); // Get the target identifier
        const content = document.querySelector(`[data-id="${target}"]`);

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});



// Add smooth scrolling for all anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust the scroll position to control when the button appears
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});