import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';


const heroSlider = new Swiper(vars.$mainHeroSlider, {
    effect: 'fade',
    // autoplay: {
    //     delay: 2500,
    // },  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    pagination: {
        el: '.hero__slide-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' - ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
});

const featureSlider = new Swiper(vars.$mainFeatureSlider, {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplayDisableOnInteraction: true,
    autoplay: {
        delay: 2500,
    },    
    pagination: {
        el: '.feature__slider-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
});

const recommSlider = new Swiper(vars.$productRecommSlider, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        576: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 15,
        }
    }
});

// sliderOne.controller.control = [sliderTwo, sliderThree];