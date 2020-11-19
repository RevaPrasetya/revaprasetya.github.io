jQuery(function($){
    //Header scroll effect
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 50){
            $("header").addClass("header-animation");
        }else{
            $("header").removeClass("header-animation");
        }
    });  
});
//Service swipe effect
var swiper1 = new Swiper('.swiper-container1', {
    grabCursor: true,
    watchSlidesVisibility: true,
    loop: true,
    hashNavigation: {
        watchState: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

//clients img swiper
var swiper2 = new Swiper('.clients-img', {
    grabCursor: true,
    height: 10,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 10,
            autoplay: {
                delay: 2000,
            },
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
            },
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
            },
        },
    },
})
console.log();