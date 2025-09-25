// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Navigation links smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Add dynamic typing effect to hero
const heroTitle = document.querySelector('.hero h1');
const roles = ['Desarrollador Frontend', 'Desarrollador Backend', 'Full Stack Developer', 'UI/UX Designer'];
let roleIndex = 0;

function typeWriter() {
    const currentRole = roles[roleIndex];
    heroTitle.textContent = `Hola, soy ${currentRole}`;
    roleIndex = (roleIndex + 1) % roles.length;
}

// Change role every 3 seconds
setInterval(typeWriter, 3000);

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add project filter functionality
const techTags = document.querySelectorAll('.tech-tag');
techTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tech = this.textContent;
        const allCards = document.querySelectorAll('.project-card');
        
        allCards.forEach(card => {
            const cardTechs = card.querySelectorAll('.tech-tag');
            let hasMatch = false;
            
            cardTechs.forEach(cardTech => {
                if (cardTech.textContent === tech) {
                    hasMatch = true;
                }
            });
            
            if (hasMatch) {
                card.style.opacity = '1';
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 300);
            } else {
                card.style.opacity = '0.3';
            }
        });
        
        // Reset after 2 seconds
        setTimeout(() => {
            allCards.forEach(card => {
                card.style.opacity = '1';
            });
        }, 2000);
    });
});
