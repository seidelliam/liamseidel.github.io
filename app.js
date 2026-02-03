// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Layered scroll animation with GSAP ScrollTrigger
window.addEventListener('DOMContentLoaded', () => {
    if (window.gsap && window.ScrollTrigger) {
        const experienceSection = document.querySelector('#experience');
        const experienceItems = document.querySelectorAll('.experience-item');
        
        // Ensure all experience items are visible
        if (experienceItems.length >= 4) {
            gsap.set(experienceItems[0], { opacity: 1, y: 0 });
            gsap.set(experienceItems[1], { opacity: 1, y: 0 });
            gsap.set(experienceItems[2], { opacity: 1, y: 0 });
            gsap.set(experienceItems[3], { opacity: 1, y: 0 });
        }
        
        gsap.utils.toArray('section').forEach((section, i) => {
            if (section.id === 'contact') {
                // Lock contact section with footer included
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    scrub: false,
                    end: () => `+=${section.offsetHeight}`
                });
            } else {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    scrub: false,
                    end: () => `+=${section.offsetHeight}`
                });
            }
        });
    }
}); 