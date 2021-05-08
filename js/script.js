$(function () {
    // 내비
    $('nav>ul>li').click(function () {
        var $taget_idx = $(this).index();
        var $target_scrollTop = $('section').eq($taget_idx).offset().top;
        console.log($target_scrollTop);
        $('html, body').animate({
            scrollTop: $target_scrollTop
        }, 500, 'swing')
    })

    // 화살표
    $(".arrow").click(function (e) {
        e.preventDefault();
        var $target_scrollTop = $('#section2').offset().top;
        console.log($target_scrollTop);
        $('html, body').animate({
            scrollTop: $target_scrollTop
        }, 500, 'swing')
    });

    // 클래스 슬라이드
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });

    // 클래스 패럴렉스
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop() + $(window).height() * 4 / 10;
        if (scrollTop > $(".class_list").offset().top) {
            $(".class_list").addClass("show");
        } else {
            $(".class_list").removeClass("show");
        }
    })





});
