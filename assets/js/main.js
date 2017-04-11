$(document).ready(function() {

var toggleBtn = document.querySelector(".toggle-btn");
var menu = document.querySelector(".menu__flex-inner--closed");

toggleBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("menu__flex-inner--opened")) {
    menu.classList.remove("menu__flex-inner--opened");
  } else {
    menu.classList.add("menu__flex-inner--opened");
  }
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
      if (menu.classList.contains("menu__flex-inner--opened")) {
        menu.classList.remove("menu__flex-inner--opened");
      }
  }
});



  $('.js-slider').slick({
    fade:true,
        infinite:true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
  });

});
