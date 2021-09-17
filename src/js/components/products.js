import {cartLogic} from './cart.js';

const catalogList = document.querySelector('.catalog__list');
let prodQuantity = 8;
let dataLength = null;


if (catalogList) {
  const loadProducts = (quantity = 8) => {
    fetch('../data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dataLength = data.length;

        catalogList.innerHTML = '';

        for (let i = 0; i < dataLength; i++) {
          if (i < quantity) {
            let item = data[i];
            console.log(item);
            catalogList.innerHTML += `
            <li class="grid__item">
            <article class="product">
                <div class="product__img card__image" >
                    <img src="${item.image}" alt="${item.title}">
                    <div class="product__btns">
                        <button class="product__link open-to-product-page" data-id="${item.id}" aria-label="Показать информацию о товаре">
                            <svg>
                                <use xlink:href="img/sprite.svg#show"></use>
                            </svg>
                        </button>
                        <button class="btn-reset product__btn add-to-cart-btn" data-id="${item.id}" aria-label="Добавить товар в корзину">
                            <svg>
                                <use xlink:href="img/sprite.svg#add"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <h3 class="product__title card__title"><a href="#">${item.title}</a></h3>
                <span class="product__price card__price">$${item.price}</span>
            </article>
        </li>
        `;
          }
        }

      })
      .then(() => {

        const productsBtns = document.querySelectorAll('.product__btn');

        productsBtns.forEach(el => {
          console.log(el)
          el.addEventListener('focus', (e) => {
            let parent = e.currentTarget.closest('.product__btns');
            console.log(parent)
            parent.classList.add('product__btns--active');
          }, true);

          el.addEventListener('blur', (e) => {
            let parent = e.currentTarget.closest('.product__btns');
            console.log(parent)
            parent.classList.remove('product__btns--active');
          }, true);
        });

        cartLogic();

      });
  };
  loadProducts(prodQuantity);
}







