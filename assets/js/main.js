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
    fadeIn:function (el,display) {
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            let val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    },
    fadeOut:function (el) {
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    },
    // classic Tabs
    // link - елемент яким переключатимеш таби !Важливо щоб були всі в одному блоці!
    // сontent - конент (блок) важливо щоб всі були в одному блоці)
    // active - номер таба який буде першим (від 0) по дефолту 0
    // scroll - truе/false при по дефолту фолс, при тру скролитиме до верху (початку) контенту

    classicTabs: function (link, content, active) {
        active = typeof active !== 'undefined' ? active : 0;

        const nodeListLink = document.querySelectorAll(link);
        const nodeListCont = document.querySelectorAll(content);

        [].forEach.call(nodeListLink, function(el){
           el.addEventListener('click',function (e) {
               e.preventDefault();
               //index of clicked element
               let index = Array.prototype.indexOf.call(nodeListLink,el);
               //remove active class from all
               [].forEach.call(nodeListLink, function(el){ el.classList.remove('active'); });
               //add class active to clicked element
               this.classList.add('active');
               // fadeOut active content
               [].forEach.call(nodeListCont, function(el){
                   front.fadeOut(el);
               });
               //faddeIn new content
               front.fadeIn(nodeListCont[index]);
           })
        });

        //hide all contents
        [].forEach.call(nodeListCont, function(el){
            el.style.display = 'none';
        });
        //fadeIn first element and add class active to link
        nodeListLink[active].classList.add('active');
        nodeListCont[active].style.display='block';

    },
    init: function () {
        this.MobileMenuOpenClose();
        this.Slider.init();

        // виклик
        this.classicTabs( ".tab-li", ".tab-cont", 2);
    }
};


document.addEventListener('DOMContentLoaded', function () {
    front.init();
});
