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


//PreventDefault checkbox.
document.getElementById('myLabel').addEventListener('click', function(event) {
    event.preventDefault();
});


/*// Checkbox status.
function checkCheckboxStatus() {
    let checkbox = document.getElementsByClassName('modal__form__checkbox')[0];
    let submitButton = document.getElementsByClassName('modal__form__button')[0];

    submitButton.disabled = !checkbox.checked;
}*/

// Impressum modal window.
const modalCall = document.getElementsByClassName("modal__call")[0];
const impressumBackground = document.getElementsByClassName("impressum__background")[0];
const impressumModal = document.getElementsByClassName("modal_impressum")[0];
const impressumActive = document.getElementsByClassName("impressum_link")[0];
const impressumClose = document.getElementsByClassName("impressum_cross")[0];

modalCall.addEventListener("click", function () {
    impressumBackground.style.display = "block";
    impressumModal.style.display = "block";
    document.body.style.cssText = 'height: 100vh; overflow-y: hidden;';
});

impressumActive.addEventListener("click", function () {
    impressumBackground.style.display = "block";
    impressumModal.style.display = "block";
    document.body.style.cssText = 'height: 100vh; overflow-y: hidden;';
});

impressumClose.addEventListener("click", function () {
    impressumBackground.style.display = "none";
    impressumModal.style.display = "none";
    document.body.style.cssText = 'height: 100%; overflow-y: visible;';
})

impressumBackground.addEventListener("click", function (event) {
    if (event.target === impressumBackground) {
        impressumBackground.style.display = "none";
        document.body.style.cssText = 'height: 100%; overflow-y: visible;';
    }
});