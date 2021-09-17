const cartBtn = document.querySelector('.cart-header__btn');
const cartOverlay = document.querySelector('.cart-overlay');
const cartSidebar = document.querySelector('.cart-sidebar');

cartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('transparentBcg');
  cartSidebar.classList.add('showCart');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-sidebar__close') || e.target.classList.contains('cart-overlay')) {
    cartOverlay.classList.remove('transparentBcg');
    cartSidebar.classList.remove('showCart');
  }
});

// работа корзины

let price = 0;
const cartSidebarList = document.querySelector('.cart-sidebar__list');
const fullPrice = document.querySelector('.cart-sidebar__fullprice');
const cartCount = document.querySelector('.cart-header__count');

const normalPrice = (str) => {
  return String(str).replace(/\D/g, '');
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const plusFullPrice = (currentPrice) => {
  return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
  return price -= currentPrice;
};

const printFullPrice = (currentPrice) => {
  fullPrice.textContent = ` $${price}`;
};


const loadCartData = (id = 1) => {
  fetch('../data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let dataItem of data) {
        if (dataItem.id == id) {
          console.log(dataItem);
          cartSidebarList.insertAdjacentHTML('afterbegin',
            `<div class="cart-sidebar__item" data-id="${dataItem.id}">
                      <article class="cart-sidebar__product cart-product">
                          <div class="cart-product__img">
                              <img src="${dataItem.image}" alt="${dataItem.title}">
                          </div>
                          <div class="cart-product__content">
                              <div class="cart-product__info">
                                  <h3 class="cart-product__title">${dataItem.title}</h3>
                                  <span class="cart-product__price">$${dataItem.price}</span>
                                  <h3 class="cart-product__size">size:<span>large</span></h3>
                                  <div class="cart-product__quantity"></div>
                              </div>
                              <button class="cart-product__delete btn btn-reset">remove</button>
                          </div>                            
                      </article>
                  </div>  
`);
          return dataItem;
        }
      }
    })
    .then((item) => {
      plusFullPrice(item.price);
      printFullPrice();

      let num = document.querySelectorAll('.cart-sidebar__item').length;

      if (num > 0) {
        cartCount.classList.add('cart-header__count--visible');
      }

      printQuantity(num);
    });
};

const cartLogic = () => {
  const productBtn = document.querySelectorAll('.product__btn');


  productBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      loadCartData(id);

      e.currentTarget.classList.add('product__btn--disabled');
    });
  });

  cartSidebarList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-product__delete')) {
      const self = e.target;
      const parent = self.closest('.cart-sidebar__item');
      const price = parseInt(normalPrice(parent.querySelector('.cart-product__price').textContent));

      console.log(price);

      parent.remove();

      minusFullPrice(price);
      printFullPrice();

      let num = document.querySelectorAll('.cart-sidebar__item').length;

      if (num == 0) {
        cartCount.classList.remove('cart-header__count--visible');
      }

      printQuantity(num);
    }
  });

};

const printQuantity = (num) => {
  cartCount.textContent = num;
};


export {cartLogic};








// if (!e.target.classList.contains('mini-cart') && e.target.closest('.mini-cart') && !e.target.classList.contains('cart__btn')) {
//   miniCart.classList.remove('mini-cart--visible');
// }
