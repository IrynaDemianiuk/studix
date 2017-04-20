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
    UniversityOpenClose: function () {
        let toggleBtnList = document.querySelector(".toggle-btn-list");
        let asideList = document.querySelector(".aside__inner");

        toggleBtnList.addEventListener("click", function (event) {
            event.preventDefault();
            if (asideList.classList.contains("aside__inner--opened")) {
                asideList.classList.remove("aside__inner--opened");
            } else {
                asideList.classList.add("aside__inner--opened");
              }
        });
    },

    toggleOpenClose: function(link) {
        link.on('click', function(e){
            e.preventDefault();
            $(this).parent().next().stop().slideToggle();

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
            speed:300
        },

        secondSlider: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1
       },


        //ініціалізація слайдера куда ми передаємо /params/ обєкт з параметрами
        SLICK: function (block,params) {
            // initialize slider
            block.slick(params);
        },

        // ініціалізація всіх слайдерів
        init: function () {
            if( $('.js-slider').length ){
              this.SLICK( $('.js-slider') , this.mainSlider);
            }
            if( $('.second-slider').length ) {
              this.SLICK( $('.second-slider') , this.secondSlider);
            }
        }

    },
    fadeIn:function (el, time , display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        time = time || 500;

        var stepTime =  time/100;

        (function fadeIna(){
            var opacity = parseFloat(el.style.opacity);
            if (opacity == 1) return;
            el.style.opacity = opacity + 0.1;
            setTimeout(fadeIna, stepTime);
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
                   el.style.opacity = 0;
                   el.style.display = 'none';
               });
               //faddeIn new content
               front.fadeIn(nodeListCont[index],1000);
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
    setEqualHeight:function(columns){
        var tallestcolumn = 0,
            columns = document.querySelectorAll(columns),
            currentHeight;

        [].forEach.call(columns, function(el){
          currentHeight = el.clientHeight;
          console.log('calc',currentHeight,tallestcolumn);
          if(currentHeight > tallestcolumn){
            tallestcolumn = currentHeight;
          }
        });

        [].forEach.call(columns, function(el){
          console.log('set');
          el.style.height = tallestcolumn + 'px';
        });

        // columns.each(
        //     function() {
        //         currentHeight = $(this).height();
        //         if (currentHeight > tallestcolumn) {
        //             tallestcolumn = currentHeight;
        //         }
        //     }
        // );
        // columns.height(tallestcolumn);
    },
    init: function () {
        this.MobileMenuOpenClose();
        this.UniversityOpenClose();
        this.Slider.init();
        this.toggleOpenClose($(".aside-block__title"));

        if ($('.tabs-books__link').length && $('.tabs-box').length ) {
          this.classicTabs( ".tabs-books__link", ".tabs-box", 0);
        }

        if ( $(".feedback__item > div").length ) {
          this.setEqualHeight( ".feedback__item > div" );
        }
        // виклик
        // this.classicTabs( ".tab-li", ".tab-cont", 2);
    }
};


document.addEventListener('DOMContentLoaded', function () {
    front.init();
});

// function setEqualHeight(columns) {
//  var tallestcolumn = 0;
// columns.each(
//     function() {
//         currentHeight = $(this).height();
//         if (currentHeight > tallestcolumn) {
//             tallestcolumn = currentHeight;
//         }
//     }
// );
// columns.height(tallestcolumn);
// }
// $(document).ready(function() {
//   setEqualHeight($(".feedback__item > div"));
// });
