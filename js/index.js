import { timer } from "./modules/timer.js";
import modals from "./modules/modals.js";
import leaveRequest from "./modules/leaveRequest.js";

// Время, когда закончатся скидки
timer('8 march 2026 12:40:00')
// Работа с модальным окном "Заказать звонок"
modals({
    openModalBtnSlct: '#request-call-btn',
    modalSlct: '.header-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.header-modal__close'
})
// Работа с модальным окном "Вызвать замерщика"
modals({
    openModalBtnSlct: '#services',
    modalSlct: '.services-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.services-modal__close'
})
// Надо установить валидный url для отправки заявки
leaveRequest('https://jsonplaceholder.typicode.com/posts')

