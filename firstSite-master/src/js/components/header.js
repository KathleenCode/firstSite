const header = document.querySelector('.header');

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.style.background = "#fff";
  }
  else {
    header.style.background = "transparent";
  }  
}