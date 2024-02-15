// Находим кнопку "Order Service"
const orderButton = document.querySelector('.button');

// Находим кнопку закрытия модального окна
const closeButton = document.querySelector('.modal-close-btn');

// Находим модальное окно
const modalContainer = document.querySelector('.backdrop');

// Функция для открытия модального окна
function openModal() {
    modalContainer.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal() {
    modalContainer.style.display = 'none';
}

// Добавляем обработчик события клика на кнопку "Order Service"
orderButton.addEventListener('click', openModal);

// Добавляем обработчик события клика на кнопку закрытия модального окна
closeButton.addEventListener('click', closeModal);