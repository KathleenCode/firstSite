
const catalogSelectList = document.querySelector('.custom-select__list--grid');



catalogSelectList.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('custom-select__item--grid')) {
    const self = e.target;
    const data = self.dataset.value;
        // console.log(data)


    sortingValue(data);
  }
});


function sortingValue (data) {

  const sorted = data === 'price' ? ascendingSort(data) : descendingSort(data);
}








// const ascendingSort = (data) => {
//   return products.sort((a, b) => {
//     if (a[data] < b[data]) return -1;
//     if (a[data] > b[data]) return 1;
//     return 0;
//   });
// };

// const descendingSort = (data) => {
//   return products.sort((a, b) => {
//     if (a[data] < b[data]) return 1;
//     if (a[data] > b[data]) return -1;
//     return 0;
//   });
// };



// const container = document.querySelector(".products");

// const displayProducts = (products) => {
//   let result = "";

//   products.forEach(({ name, price, ram }) => {
//     result += `
//      <div class="product">
//       <div><strong>Name:</strong><span>${name}</span></div>
//       <div><strong>Price:</strong><span>${price}</div>
//       <div><strong>Ram:</strong><span>${ram} GB</div>
//      </div>
//     `;
//   });

//   container.innerHTML = result;
// };

// displayProducts(products);


