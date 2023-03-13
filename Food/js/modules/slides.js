function slides({container, nextArrow, prevArrow, slide, totalCounter, currentCounter, wrapper, field}) {
    
    const slides = document.querySelectorAll(slide),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesField = document.querySelector(field),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.classList.add = 'inner';
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slider.style.position = 'relative';
    const carousel = document.createElement('carousel');
    const dots = [];

    carousel.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(carousel);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('dot');
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
         `;
        dot.setAttribute('data-indicator', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        carousel.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {

        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
            current.textContent = `0${slideIndex}`;
        } else {
            slideIndex++;
            current.textContent = `0${slideIndex}`;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });
    prev.addEventListener('click', () => {

        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
            current.textContent = `0${slideIndex}`;
        } else {
            slideIndex--;
            current.textContent = `0${slideIndex}`;
        }

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-indicator');
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        });
    });
}

export default slides;