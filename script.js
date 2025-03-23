// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 480) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};

// Added proper event listener for mobile menu button
document.querySelector('.mobile-menu-button').addEventListener('click', toggleMobileMenu);

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

// Initial animation trigger
window.addEventListener('load', () => {
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

// Animation trigger on scroll
window.addEventListener('scroll', animateOnScroll);

// Interactive elements
document.querySelectorAll('.case-study').forEach(study => {
    study.addEventListener('mouseenter', () => {
        study.style.boxShadow = '0 10px 20px rgba(30, 144, 255, 0.3)';
    });
    
    study.addEventListener('mouseleave', () => {
        study.style.boxShadow = 'none';
    });
});

// Counter animation for stats
const stats = document.querySelectorAll('.stat');
let counted = false;

const animateCounter = (element, target) => {
    let count = 0;
    const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        
        if (count >= target) {
            element.textContent = target + 'mln views';
            clearInterval(interval);
        } else {
            element.textContent = count + 'mln views';
        }
    }, 20);
};

window.addEventListener('scroll', () => {
    if (!counted && window.scrollY > 300) {
        stats.forEach(stat => {
            animateCounter(stat, 200);
        });
        counted = true;
    }
});