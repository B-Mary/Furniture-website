 $(function () {

    $('.header__btn').on('click', function () {
     $('.rightside-menu').removeClass('rightside-menu--close')
    });

    $('.rightside-menu__close').on('click', function () {
     $('.rightside-menu').addClass('rightside-menu--close')
    });

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
