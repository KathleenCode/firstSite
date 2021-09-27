import { cartLogic } from './cart.js';
import { filterArr } from './filter-catalog.js';


const catalogList = document.getElementById('catalog-list');
let prodQuantity = 8;
let dataLength = null;


if (catalogList) {

  const loadProducts = (quantity = 8) => {
    fetch('../data/data.json')
      .then((response) => {
        return response.json();
      })

      .then((data) => {

        

        dataLength = data.length;

        let result = '';

        for (let i = 0; i < dataLength; i++) {
          if (i < quantity) {
            let item = data[i];
            result += `
            <li class="product__item" data-category="${item.category}">
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

        catalogList.innerHTML = result;

        return data;

      })

      .then((products) => {

        if (document.querySelector('.catalog')) {
          const catalogSelectList = document.querySelector('.custom-select__list--grid');
          const customSelectText = document.querySelector('.custom-select__text');

          function ascendingSort(value) {
            return products.sort((a, b) => {
              if (a[value] < b[value]) return -1;
              if (a[value] > b[value]) return 1;
              return 0;
            });
          }

          catalogSelectList.addEventListener('click', (e) => {
            e.stopPropagation();

            if (e.target.classList.contains('custom-select__item')) {
              const self = e.target;
              customSelectText.textContent = self.textContent;
              const selectValue = self.dataset.value;
              const sorted = ascendingSort(selectValue);               
            }    
          });         

        }


      })

      .then(() => {
        const productItem = document.querySelectorAll('.product__item');
        const productImg = document.querySelectorAll('.product__img');
        const productArr = [...productItem];
        const productImgArr = [...productImg];

        if (catalogList.classList.contains('collezione-list')) {
          productArr.forEach(el => {
            el.classList.add('grid__item-collezione');
          });
        } else {
          productArr.forEach(el => {
            el.classList.add('grid__item-catalog');
          });
          productImgArr.forEach(el => {
            el.style.height = '419px';
          });
        }

        const productsBtns = document.querySelectorAll('.product__btn');

        productsBtns.forEach(el => {

          el.addEventListener('focus', (e) => {
            let parent = e.currentTarget.closest('.product__btns');
            parent.classList.add('product__btns--active');
          }, true);

          el.addEventListener('blur', (e) => {
            let parent = e.currentTarget.closest('.product__btns');
            parent.classList.remove('product__btns--active');
          }, true);
        });

        cartLogic();

        filterArr();

      });
  };

  loadProducts(prodQuantity);

}







