// Slider library logic.
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        nextArrow: '.arrow',
        prevArrow: '.arrow_2',
        dots: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 412,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    });
});


// Scale portfolio images by click.
let images = document.getElementsByClassName('example');

Array.from(images).forEach(function (image) {
    image.addEventListener('click', function () {
        Array.from(images).forEach(function (otherImage) {
            if (otherImage !== image) {
                otherImage.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('example')) {
        Array.from(images).forEach(function (image) {
            image.classList.remove('active');
        });
    }
});