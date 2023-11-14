const btttt = document.querySelectorAll('.btttt');
const bg = document.querySelectorAll('.bg');
const box = document.querySelectorAll('.box');
const clost = document.querySelectorAll('.clost')

btttt.forEach((bt, index) => {
    const bgg = bg[index];
    const boxx = box[index];
    bt.onclick = function () {
        bgg.setAttribute('style', 'display: flex');
        boxx.setAttribute('style', 'display: flex');
        document.querySelector('body').setAttribute('style','overflow: hidden;')
    }
});

bg.forEach((btt, index) => {
    const boxx = box[index];
    btt.onclick = function () {
        btt.setAttribute('style', 'display: none');
        boxx.setAttribute('style', 'display: none');
        document.querySelector('body').setAttribute('style','overflow: auto;')
    }
});

clost.forEach((bttt, index) => {
    const bggg = bg[index];
    const boxxx = box[index];
    bttt.onclick = function () {
        boxxx.setAttribute('style', 'display: none');
        bggg.setAttribute('style','display: none');
        document.querySelector('body').setAttribute('style','overflow: auto;')
    }
});


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);


