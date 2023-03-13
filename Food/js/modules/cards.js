// const { module } = require("../../webpack.config");
import {getResource} from '../services/services';

function cards () {
    class MenuCard {
        constructor(img, altimg, title, descr, price, parentSelector) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.altimg}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }


    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(obj => {
                obj.parentSelector = '.menu .container';
                new MenuCard(...Object.values(obj)).render();
            });
        });

    // function createCard(data) {
    //     data.forEach(({img,altimg,title,descr,price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML =
    //         ` <img src="${img}" alt="${altimg}">
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>`;
    //     document.querySelector('.menu .container').append(element);
    //     });
    // }

    // getResource('http://localhost:3000/menu')
    // .then(data => createCard(data));
}

export default cards;