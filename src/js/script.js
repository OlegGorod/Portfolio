const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const hamburger = document.querySelector('.hamburger');
const menuBlock = document.querySelector('.menu__block');
const overlay = document.querySelector('.menu__overlay');
const languages = document.querySelectorAll('.promo__languages_link')



changeLanguage()
function changeLanguage() {
    const defaultLang = document.querySelector('a[language="en"]').getAttribute('language');
    for (let key in langObj) {
        const element = document.querySelector('#lng_'+ key);
        element.innerHTML = langObj[key][defaultLang]
    }

    languages.forEach(lang => {
        lang.addEventListener('click', (e) => {
            document.querySelector('.promo__languages').querySelector('.active').classList.remove('active');
            lang.classList.add('active')
            e.preventDefault();
            const language = lang.getAttribute('language');
            for (let key in langObj) {
                const element = document.querySelector('#lng_' + key);
                element.innerHTML = langObj[key][language];
            }
        })
    })
}



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