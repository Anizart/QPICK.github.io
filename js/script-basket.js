'use strict'

const empty = document.querySelector('.empty'),
      btnOrder = document.querySelector('.btn-order');

let products = JSON.parse(localStorage.getItem('products')) || [];

//+ Проверка на наличие выбранных товаров:
if (products.length > 0) {
    empty.classList.add('delete-elem');
    btnOrder.classList.remove('delete-elem');
    showSards();
} else {
    empty.classList.remove('delete-elem');
    btnOrder.classList.add('delete-elem');
}

//? Удаление карточек:
const deleteCard = document.querySelectorAll('.cards__btn');

deleteCard.forEach(btn => btn.addEventListener('click', (e) => {
    const itemIndex = parseInt(e.target.getAttribute('data-index'), 10); // Особенно тут...

    // document.querySelector('.cards').classList.add('fade-out'); // это почемуто ломает
    
    // setTimeout(() => {
        products.splice(itemIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));
        
        e.target.closest('.cards').remove();

        if (products.length === 0) {
            empty.classList.remove('delete-elem');
            btnOrder.classList.add('delete-elem');
        }

        updateCounter();
    // }, 500);
}));

//+ Загрузка карточек:
function showSards() {
    products.forEach(product => {
        const cards = document.createElement('div'),
              trimmedText = trimToWord(product.productSrc, "img");
        cards.classList.add('cards');
        cards.innerHTML = `
            <div class="cards__card">
                <img src="../${trimmedText}" alt="картинка товара" class="cards__img"></img>
                <div class="cards__description">Выранный товар: "${product.productName}"</div>
                <button class="cards__btn">Убрать 🗑</button>
            </div>
        `;
        document.querySelector('[data-container]').prepend(cards);
    });
}

//+ Обрезка текста до указанного слова:
function trimToWord(text, word) {    
    const wordIndex = text.indexOf(word);
    return wordIndex !== -1 ? text.substring(wordIndex) : text;
}