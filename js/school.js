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

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

// Smooth scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleBio(element) {
    const bio = element.querySelector('.teacher-bio');
    if (bio.style.display === 'none') {
        bio.style.display = 'block';
    } else {
        bio.style.display = 'none';
    }
}
