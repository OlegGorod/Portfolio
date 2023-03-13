const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const hamburger = document.querySelector('.hamburger');
const menuBlock = document.querySelector('.menu__block');
const overlay = document.querySelector('.menu__overlay');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});

window.addEventListener('click', (e) => {
    if (e.target === menuBlock || e.target === overlay) {
        menu.classList.remove('active');
    }
});



const counter = document.querySelectorAll('.skills__ratings-counter');
const line = document.querySelectorAll('.skills__ratings-line span');

counter.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});