const front = {
    MobileMenuOpenClose: function () {
        let toggleBtn = document.querySelector(".toggle-btn");
        let menu = document.querySelector(".menu__flex-inner--closed");

        toggleBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (menu.classList.contains("menu__flex-inner--opened")) {
                menu.classList.remove("menu__flex-inner--opened");
            } else {
                menu.classList.add("menu__flex-inner--opened");
            }
        });

        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                if (menu.classList.contains("menu__flex-inner--opened")) {
                    menu.classList.remove("menu__flex-inner--opened");
                }
            }
        });
    },
    Slider:{
        mainSlider:{
            fade: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        },
        SLICK:function (params) {
            $('.js-slider').slick(params);
        },
        init:function () {
            this.SLICK(this.mainSlider);
        }
    },
    init: function () {
        this.MobileMenuOpenClose();
        this.Slider.init();
    }
};


document.addEventListener('DOMContentLoaded',function(){
    front.init();
});
