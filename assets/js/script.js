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

// Lesson 07: toggle the mobile menu with a CSS class.
const navBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");

navBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    navBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu when a link is clicked.
const links = nav.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navBtn.setAttribute("aria-expanded", "false");
    });
});

// Lesson 07: two reusable functions open and close the booking popup.
const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#open-btn");
const closeBtn = modal.querySelector(".close-btn");

function openModal() {
    modal.classList.add("is-open");
    closeBtn.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    openBtn.focus();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Only a click on the dark overlay closes the popup.
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});



// form controls
document.addEventListener("keydown", (event) => {
    const shown = modal.classList.contains("is-open");
    if (event.key === "Escape" && shown) {
        closeModal();
    }

    // Let Tab move through the form, keeping focus inside the popup.
    if (event.key === "Tab" && shown) {
        const controls = modal.querySelectorAll("button, input, select, textarea");
        const firstControl = controls[0];
        const lastControl = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === firstControl) {
            event.preventDefault();
            lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
            event.preventDefault();
            firstControl.focus();
        }
    }
});

// Lesson 08: show a friendly error beside each booking field.
const bookingForm = document.querySelector("#booking-form");
const bookingStatus = document.querySelector("#booking-status");
const bookingInputs = bookingForm.querySelectorAll("input");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = message;
    input.classList.toggle("invalid", message !== "");
    input.setAttribute("aria-invalid", message !== "");
}

function validateField(input) {
    const value = input.value.trim();
    let message = "";

    if (value === "") {
        message = "Please fill in this field.";
    } else if (input.name === "name" && value.length < 2) {
        message = "Please enter at least 2 characters.";
    } else if (input.name === "phone" &&
        (!/^\+?[\d\s()-]+$/.test(value) ||
        value.replace(/\D/g, "").length < 7 ||
        value.replace(/\D/g, "").length > 15)) {
        message = "Enter a phone number with 7–15 digits.";
    } else if (input.name === "email" && !emailPattern.test(value)) {
        message = "Enter an email like name@mail.com.";
    } else if (input.name === "date") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(`${value}T00:00:00`);
        if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
            message = "Choose today or a future date.";
        }
    } else if (input.name === "time") {
        const date = document.querySelector("#booking-date").value;
        if (date && new Date(`${date}T${value}`) <= new Date()) {
            message = "Choose a time in the future.";
        }
    } else if (input.name === "guests" &&
        (!Number.isInteger(Number(value)) || Number(value) < 1)) {
        message = "Enter a whole number of guests, at least 1.";
    }

    showError(input, message);
    return message === "";
}

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    let firstInvalid = null;

    bookingInputs.forEach((input) => {
        if (!validateField(input)) {
            isValid = false;
            if (!firstInvalid) firstInvalid = input;
        }
    });

    bookingStatus.classList.toggle("success", isValid);
    if (isValid) {
        bookingStatus.textContent = "Thank you! Your details passed validation. This is a preview; no booking has been sent.";
        bookingForm.reset();
    } else {
        bookingStatus.textContent = "Please correct the highlighted fields.";
        firstInvalid.focus();
    }
});

// Recheck fields with errors as the visitor corrects them.
bookingForm.addEventListener("input", (event) => {
    bookingStatus.classList.remove("success");
    bookingStatus.textContent = "This form is a preview. Bookings are not sent yet.";
    if (event.target.classList.contains("invalid")) {
        validateField(event.target);
    }
    if (event.target.name === "date") {
        const timeInput = document.querySelector("#booking-time");
        if (timeInput.value) validateField(timeInput);
    }
});
