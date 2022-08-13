 $(function () {

    $('.header__btn').on('click', function () {
     $('.rightside-menu').removeClass('rightside-menu--close')
    });

    $('.rightside-menu__close').on('click', function () {
     $('.rightside-menu').addClass('rightside-menu--close')
    });


    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open')
    });

    if($(window).width() < 651){
        $('.works-path__item--measurements').appendTo($('.works-path__items-box'))
    }
   
 

    $('.top__slider').slick({
        dots: true,
        arrows:false,
        autoplay: true,
        fade:true
    });

    $('.contact-slider').slick({
        slidesToShow:10,
        slidesToScroll:10,
        dots: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow:8,
                    slidesToScroll:8,
                }
            },
            {
                breakpoint:1511,
                settings: {
                    slidesToShow:6,
                    slidesToScroll:6,
                }
            },
            {
                breakpoint:1000,
                settings: {
                    slidesToShow:5,
                    slidesToScroll:5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow:4,
                    slidesToScroll:4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:4,
                    slidesToScroll:4,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            }
        ]
    });

    $('.article-slider__box').slick({
        prevArrow:'<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/svg/slider-left.svg" alt="arrow left"></button>',
        nextArrow:'<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/svg/slider-right.svg" alt="arrow right"></button>'
    });

    var containerEl = document.querySelector('.gallery__inner')
    var mixer;

    if(containerEl) {
        var mixer = mixitup(containerEl, {
            load: {
                filter: '.category-living'
            }
        });
    }
  

})
