

const btns = document.querySelectorAll('.catalog-filter__btn');
const catalogItem = document.querySelectorAll('.catalog-grid__item');
const arrCatalogItem = [... catalogItem];


for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;

    arrCatalogItem.forEach((product) => {
      const category = product.dataset.category;
      if (filter === 'All') {
        product.style.display = 'block'
      } else {
        if (filter === category) {
          product.style.display = 'block'
        } else {
          product.style.display = 'none'
        }
      }
    });

  });
};




