// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('show');
});

// Close mobile menu when a link is clicked
navbarUl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarUl.classList.remove('show');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skill cards hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ffffff';
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Typing effect for the home section
const typingEffect = (element, text, speed) => {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Apply typing effect to home subtitle
window.addEventListener('load', () => {
    const homeSubtitle = document.querySelector('#home h2');
    typingEffect(homeSubtitle, 'Web Developer and Data Scientist', 100);
});

// Responsive image loading
const loadResponsiveImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
};

window.addEventListener('load', loadResponsiveImages);
window.addEventListener('resize', loadResponsiveImages);

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('h3').style.color = '#ffd700';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('h3').style.color = '#0f4c81';
    });
});