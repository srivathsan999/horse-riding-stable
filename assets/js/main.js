/* Main JS */

// Sticky Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        // Add more background opacity if needed
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// Mobile Menu Toggle (Bootstrap handles this mostly, but ensure smooth close)
const navLinks = document.querySelectorAll('.nav-item .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            // Bootstrap's collapse method would be ideal here if BS JS is loaded
            // But we might just let BS handle it or manually remove show
            // new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

console.log("Equestrian Center Website Loaded");
