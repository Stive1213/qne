// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});

// Smooth scrolling
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    navMenu.classList.remove('active');
    menuToggle.textContent = '☰';
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection(this.getAttribute('href'));
    });
});

// Form submission - Redirect to iMail app
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name'); // Assuming there's an input field with name="name"
    const email = formData.get('email'); // Assuming there's an input field with name="email"
    const message = formData.get('message'); // Assuming there's a textarea with name="message"

    // Construct the mailto link
    const mailtoLink = `mailto:qnetech01@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;

    // Redirect to email client (iMail or default email app)
    window.location.href = mailtoLink;

    // Reset form after submission
    this.reset();
});


// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ['#22d3ee', '#ec4899'] },
        shape: { type: 'polygon', polygon: { nb_sides: 6 } },
        opacity: { value: 0.7, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: true, distance: 130, color: '#ffffff', opacity: 0.3, width: 1.5 },
        move: { enable: true, speed: 4, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'repulse' } },
        modes: { bubble: { distance: 200, size: 8, duration: 2 }, repulse: { distance: 150 } }
    },
    retina_detect: true
});

// Tilt effect on service cards
VanillaTilt.init(document.querySelectorAll('.service-card'), {
    max: 20,
    speed: 300,
    glare: true,
    'max-glare': 0.6,
    perspective: 1200,
    gyroscope: true // Mobile tilt support
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dynamic portfolio loading
let projectCount = 2;
function loadMoreProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const newProjects = [
        { title: 'Galactic Portal', desc: 'AI-driven dashboard for analytics.', img: 'https://via.placeholder.com/600x350' },
        { title: 'Orbit Market', desc: 'Multi-vendor marketplace solution.', img: 'https://via.placeholder.com/600x350' }
    ];

    newProjects.slice(0, 2).forEach(project => {
        projectCount++;
        const item = document.createElement('div');
        item.classList.add('portfolio-item');
        item.innerHTML = `
            <img src="${project.img}" alt="Project ${projectCount}" loading="lazy">
            <div class="overlay">
                <span class="project-title">${project.title}</span>
                <p>${project.desc}</p>
                <a href="#" class="view-link">View Project</a>
            </div>
        `;
        portfolioGrid.appendChild(item);
    });

    if (projectCount >= 4) document.querySelector('.load-more').style.display = 'none';
}

// Parallax effect on hero hologram
window.addEventListener('mousemove', (e) => {
    const holoBox = document.querySelector('.holo-box');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    holoBox.style.transform = `translate(-50%, -50%) rotate(45deg) translate(${x}px, ${y}px)`;
});