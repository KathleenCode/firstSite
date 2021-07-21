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






// if (!e.target.classList.contains('mini-cart') && e.target.closest('.mini-cart') && !e.target.classList.contains('cart__btn')) {
//   miniCart.classList.remove('mini-cart--visible');
// }
