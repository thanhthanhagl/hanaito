$(document).ready(function () {
    //header
    //----------slick slider------------
    $('.c-mainvisual__list').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    //---------------menu mobile -------//
    $('.c-header__iconmenu').click(function (e) {
        e.stopPropagation();
        $(this).addClass('is-open');
        $('.c-navmb').addClass('is-open');
        $('body').addClass('is-overlay');
    })
    $('.c-navmb__close').click(function (e) {
        e.stopPropagation();
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
    })
    $('.c-navmb__item').click(function (e) {
        e.stopPropagation();
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
    })
    $('body,html').click(function () {
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
    });
    //-----------table of content-----------
    $('.c-icon').click(function () {
        $(this).toggleClass('is-open');
        if ($(this).hasClass('is-open')) {
            $('.c-faq__toc').addClass('is-open');
        }
    })
    $('.c-toc__item a').click(function () {
        $('.c-icon').removeClass('is-open');
        $('.c-faq__toc').removeClass('is-open');
    })
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 700) {
            $('.c-icon').addClass("is-scroll");
        }
        else {
            $('.c-icon').removeClass("is-scroll is-open");
            $('.c-faq__toc').removeClass('is-open');
        }
    }).scroll();
})