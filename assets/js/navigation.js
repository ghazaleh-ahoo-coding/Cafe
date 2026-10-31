const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const mobileViewport = window.matchMedia('(max-width: 768px)');

function setMenuOpen(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mainNav.classList.toggle('is-open', open);
}

header.classList.add('nav-ready');

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mainNav.addEventListener('click', (event) => {
    if (mobileViewport.matches && event.target.closest('a')) {
        setMenuOpen(false);
        menuToggle.focus({ preventScroll: true });
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

mobileViewport.addEventListener('change', () => {
    const focusWasInNav = mainNav.contains(document.activeElement);
    const focusWasOnToggle = document.activeElement === menuToggle;
    setMenuOpen(false);
    if (mobileViewport.matches && focusWasInNav) menuToggle.focus();
    if (!mobileViewport.matches && focusWasOnToggle) mainNav.querySelector('a').focus();
});
