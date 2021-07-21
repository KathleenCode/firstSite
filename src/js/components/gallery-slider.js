import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';

const productSlider = vars.$productSlider;
let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 576 && productSlider.dataset.mobile == 'false') {
        mySwiper = new Swiper(productSlider, {
            slidesPerView: 1,
            spaceBetween: 5,//          
            slideClass: 'gallery__slide'
        });

        productSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 576) {
        productSlider.dataset.mobile = 'false';

        if (productSlider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}


mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});