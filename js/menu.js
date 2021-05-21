const btnMenu = document.querySelector('.menu-mobile')
const nav = document.querySelector('[data-js="menu"]')

const toggleMenu = ( ) => nav.classList.toggle('active')

btnMenu.addEventListener('click', toggleMenu)