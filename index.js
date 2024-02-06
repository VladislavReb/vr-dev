// Home page mobile header menu.
const menuButton = document.querySelector(".mob_header__dash");
menuButton.addEventListener('click', () => {
    document.querySelector(".mob_header__content").style.animation = 'header 1s forwards';
})

const crossButton = document.querySelector(".mobile__links__cross");
crossButton.addEventListener('click', () =>{
    document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
})

const mobileLinks = document.querySelectorAll(".mobile__link");
mobileLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
    })
})


// Slider library logic.
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 3,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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


// Scale images by click.
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


// Modal window.
const modalBackground = document.getElementsByClassName("modal__background")[0];
const modal = document.getElementsByClassName("modal")[0];
const modalActive = document.getElementsByClassName("footer__wrapper__bt")[0];
const modalClose = document.getElementsByClassName("modal__cross")[0];

modalActive.addEventListener("click", function () {
    modalBackground.style.display = "block";
    modal.style.display = "block";
    document.body.style.cssText = 'height: 100vh; overflow-y: hidden;';
});

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    modal.style.display = "none";
    document.body.style.cssText = 'height: 100%; overflow-y: visible;';
})

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        document.body.style.cssText = 'height: 100%; overflow-y: visible;';
    }
});