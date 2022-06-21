// alert ();
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'linear'
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/red_left_btn.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/red_right_btn.png"></button>',
        // variableWidth: true,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
            // {
            //     breakpoint: 768,
            //     settings: {
            //     }
            // }
            // {
            //     breakpoint: 575,
            //     settings: {
            //     }
            // }
        ]
    });
});