$(document).ready(function () {
    //header

    var child = $('.c-nav__item a').next();
    if (child) {
        child.parent().addClass('is-parent');
    }
    $('.is-parent a').click(function () {
        $('.c-nav__submenu').not($(this).next()).slideUp();
        $(this).next(".c-nav__submenu").slideToggle();
        return false;
    })
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".is-parent").length) {
            $(".c-nav__submenu").slideUp();
        }
    });
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
    $('.c-header__iconmenu').click(function () {
        $(this).addClass('is-open');
        $('.c-navmb').addClass('is-open');
        $('body').addClass('is-overlay');
    })
    $('.c-navmb__close').click(function () {
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
    })
    $('.c-navmb__item').click(function () {
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
    })
})