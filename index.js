document.addEventListener('DOMContentLoaded', function() {
    // Get Started button functionality
    const getStartedBtn = document.querySelector('.cta-btn');
    const toolsSection = document.querySelector('#tools');

    if (getStartedBtn && toolsSection) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toolsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for all navigation links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});