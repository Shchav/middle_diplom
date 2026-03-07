import { timer } from "./modules/timer.js";
import modals from "./modules/modals.js";
import leaveRequest from "./modules/leaveRequest.js";
import { calc } from "./modules/calc.js";
import { scrolling } from "./modules/scrolling.js";
import { sertificates } from "./modules/sertificates.js";

// Задача 6.
// Время, когда закончатся скидки
timer('8 march 2026 12:40:00')
// Задача 2.
// Работа с модальным окном "Заказать звонок"
modals({
    openModalBtnSlct: '#request-call-btn',
    modalSlct: '.header-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.header-modal__close'
})
// Задача 5.
// Работа с модальным окном "Вызвать замерщика"
modals({
    openModalBtnSlct: '#services',
    modalSlct: '.services-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.services-modal__close'
})
// Задача 7.
// Надо установить валидный url для отправки заявки
leaveRequest('https://jsonplaceholder.typicode.com/posts')
// Задача 10.
calc()
// Задача 9.
// Плавная прокрутка страницы
scrolling({
    smoothScrollCls: '.smooth-scroll', // Кнопка прокрутки страницы на самый верх
    timeScrol: 1000 // Время плавной прокрутки
})
// Задача 8.
// Сертификаты
sertificates()

