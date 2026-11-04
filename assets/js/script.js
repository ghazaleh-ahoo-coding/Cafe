// // Select the elements by their ids. Keep the original text until a click.
// const heroTitle = document.querySelector('#hero-title');
// const heroDescription = document.querySelector('#hero-description');
// const changeWelcomeButton = document.querySelector('#change-welcome');

// // Run this function only when the button is clicked.
// changeWelcomeButton.addEventListener('click', () => {
//     // textContent replaces plain text.
//     heroTitle.textContent = 'A Little Coffee. A Little Conversation. A Lot of Heart.';

//     // innerHTML adds HTML formatting. Use only trusted HTML here.
//     heroDescription.innerHTML =
//         'Welcome to <strong>CaFe</strong> in Herat — where every coffee break is an invitation to <em>slow down and connect</em>.';
// });

// An array stores our services. Each object describes one service.
const services = [
    {
        title: 'Coffee at Your Own Pace',
        description: 'A place to sit down, enjoy a drink, and take a moment out of your day.',
        icon: '☕'
    },
    {
        title: 'A Cup to Go',
        description: 'A takeaway option for those who want to bring their coffee along.',
        icon: '🥤'
    },
    {
        title: 'Time Together',
        description: 'A welcoming setting for catching up with friends and sharing conversation over coffee or tea.',
        icon: '💬'
    }
];

const servicesList = document.querySelector('#services-list');

// forEach creates and appends a card for every object in the array.
services.forEach((service) => {
    const card = document.createElement('article');
    card.classList.add('service-card');

    const icon = document.createElement('span');
    icon.classList.add('service-icon');
    icon.textContent = service.icon;
    // icon.setAttribute('aria-hidden', 'true');

    const title = document.createElement('h3');
    title.classList.add('service-title');
    title.textContent = service.title;

    const description = document.createElement('p');
    description.classList.add('service-description');
    description.textContent = service.description;

    card.append(icon, title, description);
    servicesList.append(card);
});
