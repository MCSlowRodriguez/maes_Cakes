'use strict';

const dropdown = document.querySelector('[data-dropdown]');
const navLinks = document.querySelector('[data-links]');


dropdown.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})