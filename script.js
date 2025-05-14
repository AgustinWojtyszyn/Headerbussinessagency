// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-item, .hero-image, footer');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animated elements
document.querySelectorAll('.service-item, .hero-image, footer').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on page load
window.addEventListener('load', animateOnScroll);

// Form validation for future implementation
const forms = document.querySelectorAll('form');
if (forms.length > 0) {
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add form validation logic here
    });
  });
}
