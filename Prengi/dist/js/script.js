window.addEventListener('DOMContentLoaded', (e) => {
  const btn = document.querySelector('.promo__hamburger');
  const menu = document.querySelector('.promo__menu');
  const menuItem = document.querySelectorAll('.promo__menu-item');
  const body = document.querySelector('body');

  btn.addEventListener('click', (e) => {
    menu.classList.toggle('promo__menu_active');
    btn.classList.toggle('promo__hamburger_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', (e) => {
      menu.classList.toggle('promo__menu_active');
      btn.classList.toggle('promo__hamburger_active');
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target == menu) {
      console.log('wow');
      menu.classList.toggle('promo__menu_active');
      btn.classList.toggle('promo__hamburger_active');
    }
  });

  const button = document.querySelectorAll('.button');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('[data-close]');


  function closeModal () {
      overlay.style.display = 'none';
  }

  function openModal () {
      overlay.style.display = 'block';
  }

  button.forEach(item => {
      item.addEventListener('click', openModal);
  });

  btnCloseModal.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if( e.target === overlay) {
        closeModal();
    }
  }); 

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModal();
    }
  });



  


  // window.onscroll = function showHeader() {
  //   if (window.pageYOffset > 750) {
  //     nav.classList.add("promo__fixed");
  // } else {
  //     nav.classList.remove("promo__fixed");
  // }
  // };


});


$('input[name=phone]').mask("+38 (099) 999-99-99");


$(document).ready(function(){
    $('.decisions__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });

 