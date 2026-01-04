// Scroll effect para navbar
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Active link on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navMenuLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

navMenuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
