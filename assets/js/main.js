document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && nav.classList.contains('active')) {
                nav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
        if (linkPath === currentPath) {
            link.setAttribute('aria-current', 'page');
        }

        link.addEventListener('click', () => {
            if (nav) {
                nav.classList.remove('active');
            }
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
