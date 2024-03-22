$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.header .mopen button').on('click', () => {
        $('#header .gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    });


    $('.main_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 400,
        fade: true,
        cssEase: 'linear'
    });

    $('.a_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
 if ($(window).width() <= 500) {
            $('.MainArchive .tit_area .tab_wrap span').css({
                left: (120 * idx) + 'px',
            });
        } else {
            $('.MainArchive .tit_area .tab_wrap span').css({
                left: (200 * idx) + 'px',
            });
        }
    });

    $('.MainContent .con_area .itm').on('click', function () {
        $('.MainContent .con_area .itm').removeClass('on');
        $(this).addClass('on');
        $('.MainContent .con_area .itm .txt').removeClass('on');
        $('.MainContent .con_area').addClass('on');
    });



    $('.MainArchive .tab_inner').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

         $(window).resize(function(){
        if($(window).width() <= 500){ // 화면 너비가 500px 이하인 경우
            $('.MainArchive .tab_inner').slick('slickSetOption', 'slidesToShow', 1, true);
        } else {
            $('.MainArchive .tab_inner').slick('slickSetOption', 'slidesToShow', 3, true);
        }
    });


    $('.archive_arrow .arch_prev').on('click', function () {
        $('.MainArchive .tab_inner').slick('slickPrev');
    });

    $('.archive_arrow .arch_next').on('click', function () {
        $('.MainArchive .tab_inner').slick('slickNext');
    });




    $('.notice_slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,
    });

    $('.notice_arrow .prev').on('click', function () {
        $('.MainIntro .notice_slide').slick('slickPrev');
    });

    $('.notice_arrow .next').on('click', function () {
        $('.MainIntro .notice_slide').slick('slickNext');
    });


})