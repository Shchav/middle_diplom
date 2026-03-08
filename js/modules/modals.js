const modal = ({ openModalBtnSlct, modalSlct, overlayModalSlct, closeModalBtnSlct }) => {

    // Кнопка отображения модального окна
    const openModalBtn = document.querySelector(openModalBtnSlct)
    // Модальное окно 
    const modal = document.querySelector(modalSlct)
    // и его подложка
    const overlayModal = document.querySelector(overlayModalSlct)

    // Слушатель нажатия на кнопку отображения модального окна
    openModalBtn.addEventListener('click', (e) => {
        if (e.target.closest(openModalBtnSlct) &&
            e.target.classList.contains('btn')) {
            // Отображение модального окна
            modal.style.display = 'block'
            // и его подложки
            overlayModal.style.display = 'block'
        }
    })

    // Слушатель событий модального окна
    modal.addEventListener('click', (e) => {
        if (e.target.closest(closeModalBtnSlct)) {
            // Закрытие модального окна
            modal.style.display = 'none'
            // и его подложки
            overlayModal.style.display = 'none'
        }
    })
}

export default modal