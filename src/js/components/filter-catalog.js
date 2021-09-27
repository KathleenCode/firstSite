

const filterArr = () => {
  const filterBtns = document.querySelectorAll('.catalog-filter__btn');
  const catalogItem = document.querySelectorAll('.grid__item-catalog');
  const btns = [...filterBtns];
  const arrCatalogItem = [...catalogItem];

  

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      filterArrCatalogItem(filter);
    });    
  }

  function filterArrCatalogItem(filter) {
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
  }

}

export { filterArr };






