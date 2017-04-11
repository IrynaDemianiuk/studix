var front = {
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
    Slider: {

        //це параметри слайдера, так само як всі привикли писати.
        mainSlider: {
            fade: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        },

        //ініціалізація слайдера куда ми передаємо /params/ обєкт з параметрами
        SLICK: function (params) {
            $('.js-slider').slick(params);
        },

        // ініціалізація всіх слайдерів
        init: function () {
            this.SLICK(this.mainSlider);
        }

    },
    // classic Tabs
    // link - елемент яким переключатимеш таби !Важливо щоб були всі в одному блоці!
    // сontent - конент (блок) важливо щоб всі були в одному блоці)
    // active - номер таба який буде першим (від 0) по дефолту 0
    // scroll - truе/false при по дефолту фолс, при тру скролитиме до верху (початку) контенту

    classicTabs: function (link, content, active, scroll) {
        active = typeof active !== 'undefined' ? active : 0;
        scroll = typeof scroll !== 'undefined' ? scroll : false;

        link.on('click', function (e) {
            e.preventDefault();
            link.removeClass("active").eq($(this).index()).addClass("active");
            content.hide().eq($(this).index()).fadeIn(500);
        }).eq(active).addClass("active");

        content.hide().eq(active).show();

        if (scroll) {
            link.on('click', function () {
                let top = content.parent().offset().top - 20;
                $('body,html').animate({'scrollTop': top}, 500);
            })
        }

    },
    init: function () {
        this.MobileMenuOpenClose();
        this.Slider.init();

        // виклик
        // this.classicTabs( $('.link'), $('.content'), 0, false)
    }
};


document.addEventListener('DOMContentLoaded', function () {
    front.init();
});
