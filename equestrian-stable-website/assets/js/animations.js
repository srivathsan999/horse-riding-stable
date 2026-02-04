/* Animations JS */
/* Setup GSAP Animations */

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Sections
    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Staggered Lists (like cards)
    const staggerContainers = document.querySelectorAll(".stagger-grid");
    staggerContainers.forEach(container => {
        gsap.fromTo(container.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%"
                }
            }
        );
    });

    // Hero Animation
    const heroText = document.querySelector(".hero-text");
    if(heroText) {
        gsap.fromTo(heroText,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power3.out" }
        );
    }
    
    // Image Reveals
    const revealImages = document.querySelectorAll(".reveal-img");
    revealImages.forEach(img => {
        gsap.fromTo(img,
            { scale: 1.1, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 1.5, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 90%"
                }
            }
        );
    });
});
