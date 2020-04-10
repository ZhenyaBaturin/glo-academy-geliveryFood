const cartButton = document.getElementById('cart-button');
const modal = document.querySelector(".modal"),
    close = document.querySelector('.close')

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
};
// активизация WOW
new.WOW().init();