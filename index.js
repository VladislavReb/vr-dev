//Start animation.
function removeBackground() {
    document.getElementsByClassName('start_background')[0].style.display = 'none';
}

window.onload = function() {
    setTimeout(removeBackground, 30);
};


document.addEventListener("DOMContentLoaded", function() {
    let delay = 0;
    document.querySelectorAll('.block').forEach(function(block, index) {
        setTimeout(function() {
            block.style.animationDelay = delay + 's';
            delay += 0.2;
        },  0);
    });
});


// Home page mobile header menu.
const menuButton = document.querySelector(".mob_header__dash");
menuButton.addEventListener('click', () => {
    document.querySelector(".mob_header__content").style.animation = 'header 1s forwards';
})

const crossButton = document.querySelector(".mobile__links__cross");
crossButton.addEventListener('click', () =>{
    document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
})

const mobileLinks = document.getElementsByClassName("mob_header__link");
Array.from(mobileLinks).forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
    });
});


// Active language link.
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    console.log("Current Page:", currentPage);

    if (currentPage === "index.html" || currentPage === "") {
        const deLinks = document.querySelectorAll(".link-de");
        console.log("DE Links Found:", deLinks.length);
        deLinks.forEach(link => {
            console.log("Adding active class to DE link:", link);
            link.classList.add("active");
        });
    } else if (currentPage === "en.html") {
        const enLinks = document.querySelectorAll(".link-en");
        console.log("EN Links Found:", enLinks.length);
        enLinks.forEach(link => {
            console.log("Adding active class to EN link:", link);
            link.classList.add("active");
        });
    }
});