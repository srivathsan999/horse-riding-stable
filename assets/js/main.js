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

// Active Menu Highlighting
document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = location.pathname.split("/").pop(); // Get filename
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    navItems.forEach(link => {
        const href = link.getAttribute('href');

        // Check if href matches current location (handling root / as index.html if needed)
        // Also handle the case where href is just the filename or a relative path
        if (href === currentLocation || (currentLocation === "" && href === "index.html")) {
            link.classList.add('active');

            // If it's a dropdown item, also highlight the parent dropdown toggle
            if (link.classList.contains('dropdown-item')) {
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const toggle = parentDropdown.querySelector('.dropdown-toggle');
                    if (toggle) toggle.classList.add('active');
                }
            }
        }
    });

    // Special case for dropdowns where the parent link is '#' but children are pages
    // We need to check dropdown items too
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentLocation || (currentLocation === "" && itemHref === "index.html")) {
            item.classList.add('active'); // Bootstrap active class for dropdown items

            // Highlight parent dropdown toggle
            const parentDropdown = item.closest('.dropdown');
            if (parentDropdown) {
                const toggle = parentDropdown.querySelector('.dropdown-toggle');
                if (toggle) toggle.classList.add('active');
            }
        }
    });
});
