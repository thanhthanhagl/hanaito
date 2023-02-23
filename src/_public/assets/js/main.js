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
    $('body,html').click(function(){
        $('.c-header__iconmenu').removeClass('is-open');
        $('.c-navmb').removeClass('is-open');
        $('body').removeClass('is-overlay');
 });
})