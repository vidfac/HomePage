// Videofac - Minimal JS

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    toggle?.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close nav on link click
    navList?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 72;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Form submit
    const form = document.querySelector('.contact-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡いたします。');
        form.reset();
    });
});
