$(function () {

    // $('html').smoothScroll({

    // });

    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (y > 0) {
            $('.header').addClass('on');

        } else {
            $('.header').removeClass('on');
        }
    });

    $('.mainVisual .main_slide .list').slick({
        // dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });


    $('.event_slide_wrap').slick({
        //arrows: false,
        autoplay: false,
        slidesToShow: 4,
    });

    $('.slider_img_cont .list').slick({});


    $('.main_dining .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $('.dining_slide_wrap .dining_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.main_special .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $('.special_slide_wrap .special_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_room .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $('.room_slide_wrap .room_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });

















})