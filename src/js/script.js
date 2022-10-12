'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuLinks = document.querySelectorAll('.menu__link'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
    });

    menuLinks.forEach(menuLink => 
        menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.toggle('hamburger_active');
        })
    );
});