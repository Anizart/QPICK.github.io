//+ MODAL WINDOW:
const authorization = document.querySelector('.header__authorization'),
      registration = document.querySelector('.header__registration'),
      clickArea1 = document.querySelector('#modal-registration'),
      clickArea2 = document.querySelector('#modal-authorization'),
      modal = document.querySelectorAll('.modal__wrapper');

authorization.addEventListener('click', () => {
    showModalAuthorization();
});
registration.addEventListener('click', () => {
    showModalRegistration();
});

clickArea1.addEventListener('click', () => {
    removeModalAuthorization()
});
clickArea2.addEventListener('click', () => {
    removeModalRegistration()
});

modal.forEach(modalWindow => {
    modalWindow.addEventListener('click', (event) => {
        event.stopPropagation();
    });
})

function showModalAuthorization() {
    clickArea2.classList.add('show');
    document.body.style.overflow = 'hidden';
}
function showModalRegistration() {
    clickArea1.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function removeModalAuthorization() {
    clickArea1.classList.remove('show');
    document.body.style.overflow = '';
}
function removeModalRegistration() {
    clickArea2.classList.remove('show');
    document.body.style.overflow = '';
}