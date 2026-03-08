import { timer } from "./modules/timer.js";
import modals from "./modules/modals.js";
import leaveRequest from "./modules/leaveRequest.js";
import { calc } from "./modules/calc.js";
import { scrolling } from "./modules/scrolling.js";
import { sertificates } from "./modules/sertificates.js";
import { sliderCarousel } from "./modules/sliderCarousel.js";
import { comments } from "./modules/comments.js";

// Задача 2.
// Работа с модальным окном "Заказать звонок"
modals({
    openModalBtnSlct: '#request-call-btn',
    modalSlct: '.header-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.header-modal__close'
})
// Задача 3.
// Слайдер-карусель "Выгоды для клиентов"
sliderCarousel({
    items: '.benefits__item',
    itemsWrap: '.benefits-wrap',
    arrowsWrap: '.benefits-arrows',
    arrowCls: '.benefits__arrow',
    arrowLeft: 'benefits__arrow--left',
    arrowRight: 'benefits__arrow--right',
    numItems: [
        {
            num: 3,
            betweenWidth: [1576, Infinity]
        },
        {
            num: 2,
            betweenWidth: [0, 1576]
        }
    ]
})
// Задача 4.
// Слайдер-карусель "Наши услуги"
sliderCarousel({
    items: '.col-md-12.col-lg-6',
    itemsWrap: '.service-block-wrap',
    arrowsWrap: '.services-arrows',
    arrowCls: '.services__arrow',
    arrowLeft: 'services__arrow--left',
    arrowRight: 'services__arrow--right',
    numItems: [
        {
            num: 2,
            betweenWidth: [1576, Infinity]
        },
        {
            num: 1,
            betweenWidth: [0, 1576]
        }
    ]
})
// Задача 5.
// Работа с модальным окном "Вызвать замерщика"
modals({
    openModalBtnSlct: '#services',
    modalSlct: '.services-modal',
    overlayModalSlct: '.overlay',
    closeModalBtnSlct: '.services-modal__close'
})
// Задача 6.
// Время, когда закончатся скидки
timer('8 march 2026 12:40:00')
// Задача 7.
// Надо установить валидный url для отправки заявки
leaveRequest('https://jsonplaceholder.typicode.com/posts')
// Задача 8.
// Сертификаты
sertificates()
// Задача 9.
// Плавная прокрутка страницы
scrolling({
    smoothScrollCls: '.smooth-scroll', // Кнопка прокрутки страницы на самый верх
    timeScrol: 1000 // Время плавной прокрутки
})
// Задача 10.
// Калькулятор
calc()
// Дополнительное задание.
try {
    comments('comments.json')
} catch (error) {
}




