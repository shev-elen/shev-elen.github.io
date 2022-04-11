window.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('.header__menu'),
    headerMenuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        headerMenu.classList.toggle('header__menu-active');
    });

    headerMenuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            headerMenu.classList.toggle('header__menu-active');
        })
    })
})