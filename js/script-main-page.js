'use strict'

//+ Реализация добавления карточек в корзину:
const cards = document.querySelectorAll('.card__wrapper-card');

let products = JSON.parse(localStorage.getItem('products')) || [];

cards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('[data-description]').textContent,
              productSrc = card.querySelector('.card__img').src;
        
        const neuProduct = {
            productID: products.length + 1,
            productName,
            productSrc: productSrc,
        };
        
        products.push(neuProduct);
        localStorage.setItem('products', JSON.stringify(products));
        showMessage(neuProduct.productName);
        updateCounter();
    });

});

function showMessage(product) {
    const message = document.createElement('div');
    message.classList.add('cart-message');
    message.textContent = `${product} добавлен в корзину!`;

    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add('cart-message--hide');
        setTimeout(() => message.remove(), 500);
    }, 1500);
}