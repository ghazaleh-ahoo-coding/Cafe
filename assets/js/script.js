// Select the elements by their ids. Keep the original text until a click.
const heroTitle = document.querySelector('#hero-title');
const heroDescription = document.querySelector('#hero-description');
const changeWelcomeButton = document.querySelector('#change-welcome');

// Run this function only when the button is clicked.
changeWelcomeButton.addEventListener('click', () => {
    // textContent replaces plain text.
    heroTitle.textContent = 'A Little Coffee. A Little Conversation. A Lot of Heart.';

    // innerHTML adds HTML formatting. Use only trusted HTML here.
    heroDescription.innerHTML =
        'Welcome to <strong>CaFe</strong> in Herat — where every coffee break is an invitation to <em>slow down and connect</em>.';
});
