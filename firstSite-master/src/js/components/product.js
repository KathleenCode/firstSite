const catalogList = document.querySelector('.collezione__list');
const prodInner = document.querySelector('.product-information__container .product-information__inner');
const prodInnerGallery = document.querySelector('.product-information__gallery');
let prodQuantity = 8;
let dataLength = null;

const normalPrice = (str) => {
  return String(str).replace(/\D/g, '');
};


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
            <div class="grid__item ${item.child}">
            <article class="product">
                <div class="product__img" >
                    <img src="${item.image}" alt="${item.title}">
                    <div class="product__btns">
                        <button type="submit" class="product__link open-to-product-page" data-id="${item.id}" aria-label="Показать информацию о товаре">
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
                <h3 class="product__title">${item.title}</h3>
                <span class="product__price">$${item.price}</span>
            </article>
        </div>
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
        getProduct();
      });
  };
  loadProducts(prodQuantity);
}



const getProduct = () => {
  const productLink = document.querySelectorAll('.open-to-product-page');

  productLink.forEach(el => {
    el.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      loadProdData(id);

    });
  });
}

const loadProdData = (id = 1) => {
  fetch('../data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      // prodInnerGallery.innerHTML = '';
      //       prodInnerInfo.innerHTML = '';
      //       prodInnerDescr.innerHTML = '';
      //       prodInnerSizing.innerHTML = '';
      //       prodInnerChars.innerHTML = '';

      for (let dataProd of data)
        if (dataProd.id == id) {
          console.log(dataProd);

          // const galleryProduct = dataProd.gallery.map((image, idx) => {
          //   return `
          //                   <div class="gallery__img" data-index="${idx}">
          //                       <img src="${image}" alt="#">
          //                   </div>               
          //             `;
          // });

          // prodInnerGallery.innerHTML = galleryProduct.join('');
        }
    });
  //           const galleryProduct = dataItem.gallery.map((image, idx) => {
  //             return `
  //                 <div class="gallery__img" data-index="${idx}">
  //                     <img src="${image}" alt="#">
  //                 </div>               
  //           `;
  //           });

  //           const colors = dataItem.colors.map((color, idx) => {
  //             return `
  //           <li class="custom-select__item">${color}</li>
  //           `;
  //           });

  //           const sizes = dataItem.sizes.map((size, idx) => {
  //             return `
  //           <li class="custom-select__item">${size}</li>
  //           `;
  //           });

  //           const chars = dataItem.chars.map((char, idx) => {
  //             return `
  //           <li class="product-info__item">${char}</li>
  //           `;
  //           });

  //           prodInnerGallery.innerHTML = galleryProduct.join('');

  //           prodInnerInfo.innerHTML = `                   
  //         <div class="product-info">
  //         <h2 class="product-info__title">${dataItem.title}</h2>
  //         <span class="product-info__price">${dataItem.price}</span>
  //         <div class="product-info__selects">
  //             <div class="product-info__select color-select">
  //                 <div class="custom-select custom-select--info">
  //                     <span class="product-info__caption">COLOR:<span class="custom-select__top">LIGHT
  //                             GREY</span>
  //                     </span>
  //                     <svg class="custom-select__icon" width="24" height="24" viewBox="0 0 24 24"
  //                         fill="none" xmlns="http://www.w3.org/2000/svg">
  //                         <path
  //                             d="M3.51501 8.465L12 16.95L20.485 8.465L19.071 7.05L12 14.122L4.92901 7.05L3.51501 8.465Z"
  //                             fill="#2E3A59" />
  //                     </svg>
  //                     <div class="custom-select__dropdown">
  //                         <ul class="custom-select__list">
  //                         ${color.join('')} 
  //                         </ul>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div class="product-info__select size-select">
  //                 <div class="custom-select custom-select--info">
  //                     <span class="product-info__caption">SIZE:<span
  //                             class="custom-select__top">SMALL</span></span>
  //                     <svg class="custom-select__icon" width="24" height="24" viewBox="0 0 24 24"
  //                         fill="none" xmlns="http://www.w3.org/2000/svg">
  //                         <path
  //                             d="M3.51501 8.465L12 16.95L20.485 8.465L19.071 7.05L12 14.122L4.92901 7.05L3.51501 8.465Z"
  //                             fill="#2E3A59" />
  //                     </svg>
  //                     <div class="custom-select__dropdown">
  //                         <ul class="custom-select__list">
  //                         ${sizes.join('')}
  //                         </ul>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>`;

  //           prodInnerDescr.innerHTML = `
  //     <p class="product-info__first-descr">${dataItem.description}</p>
  // <ul class="product-info__second-descr product-info__chars">
  // ${chars.join('')} 
  // </ul>
  // `;

  //           if (dataItem.sizing) {
  //             prodInnerSizing.style.display = 'block';
  //             prodInnerSizing.innerHTML = `
  //       <h3>SIZING</h3>
  //       <p>${dataItem.sizing}</p>
  //       `;
  //           } else {
  //             prodInnerSizing.style.display = 'none';
  //           }

  //         }
  //       }

};


//работа  корзины


let price = 0;
const cartSidebarList = document.querySelector('.cart-sidebar__list');
const fullPrice = document.querySelector('.cart-sidebar__fullprice');
const cartCount = document.querySelector('.cart-header__count');


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




