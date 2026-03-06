export const requestCallModal = () => {
    // Кнопка "Заказать звонок"
    const requestCallBtn = document.querySelector('#request-call-btn')
    // Модальное окно "Заказ звонка"
    const modal = document.querySelector('.header-modal')
    // и его подложка
    const modalOverlay = document.querySelector('.overlay')

    console.log(requestCallBtn);


    // Слушатель нажатия на кнопку "Заказать звонок"
    requestCallBtn.addEventListener('click', (e) => {
        // Отображение диалогового окна "Заказ звонка"
        modalOverlay.style.display = 'block'
        // и его подложки
        modal.style.display = 'block'
    })

    // Слушатель событий модального окна "Заказ звонка"
    modal.addEventListener('click', (e) => {
        console.log('333');

        if (e.target.classList.contains('header-modal__close')) {
            // Закрытие диалогового окна "Заказ звонка"
            modalOverlay.style.display = 'none'
            // и его подложки
            modal.style.display = 'none'
        }
    })
}