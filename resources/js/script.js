// Navbar transition
$(document).ready(function () {
    // $('html,body').animate({ scrollTop: 0 }, 500);
    $(window).scroll(function () {
        var sticky = $('img.navbar-logo'),
            position = $(window).scrollTop();

        if (position >= 40) {
            sticky.addClass('navbar-transition');
        } else {
            sticky.removeClass('navbar-transition');
        }
    })
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $('#scroll-top').css({ 'display': 'none' });
    // Scroll top
    var offset = 25;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#scroll-top').fadeIn(duration);
        } else {
            $('#scroll-top').fadeOut(duration);
        }
    })
    $('#scroll-top').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, duration);
        return false;
    })

    $("#photoshop").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 95,
        foregroundColor: '#ffc107'
    });
    $("#light-room").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 75,
        foregroundColor: 'tomato'
    });
    $("#illustrator").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 85,
    });
    $("#indesign").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 80,
        foregroundColor: 'rgb(168, 198, 74)'
    });

    // Carousel JS
    $('.carousel').carousel({
        interval: 3000
    })

    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})