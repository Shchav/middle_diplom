/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js"
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals.js */ \"./js/modules/modals.js\");\n/* harmony import */ var _modules_leaveRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/leaveRequest.js */ \"./js/modules/leaveRequest.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc.js */ \"./js/modules/calc.js\");\n/* harmony import */ var _modules_scrolling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrolling.js */ \"./js/modules/scrolling.js\");\n/* harmony import */ var _modules_sertificates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sertificates.js */ \"./js/modules/sertificates.js\");\n/* harmony import */ var _modules_sliderCarousel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderCarousel.js */ \"./js/modules/sliderCarousel.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/comments.js */ \"./js/modules/comments.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Задача 2.\r\n// Работа с модальным окном \"Заказать звонок\"\r\n(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    openModalBtnSlct: '#request-call-btn',\r\n    modalSlct: '.header-modal',\r\n    overlayModalSlct: '.overlay',\r\n    closeModalBtnSlct: '.header-modal__close'\r\n})\r\n// Задача 3.\r\n// Слайдер-карусель \"Выгоды для клиентов\"\r\n;(0,_modules_sliderCarousel_js__WEBPACK_IMPORTED_MODULE_6__.sliderCarousel)({\r\n    items: '.benefits__item',\r\n    itemsWrap: '.benefits-wrap',\r\n    arrowsWrap: '.benefits-arrows',\r\n    arrowCls: '.benefits__arrow',\r\n    arrowLeft: 'benefits__arrow--left',\r\n    arrowRight: 'benefits__arrow--right',\r\n    numItems: [\r\n        {\r\n            num: 3,\r\n            betweenWidth: [1576, Infinity]\r\n        },\r\n        {\r\n            num: 2,\r\n            betweenWidth: [0, 1576]\r\n        }\r\n    ]\r\n})\r\n// Задача 4.\r\n// Слайдер-карусель \"Наши услуги\"\r\n;(0,_modules_sliderCarousel_js__WEBPACK_IMPORTED_MODULE_6__.sliderCarousel)({\r\n    items: '.col-md-12.col-lg-6',\r\n    itemsWrap: '.service-block-wrap',\r\n    arrowsWrap: '.services-arrows',\r\n    arrowCls: '.services__arrow',\r\n    arrowLeft: 'services__arrow--left',\r\n    arrowRight: 'services__arrow--right',\r\n    numItems: [\r\n        {\r\n            num: 2,\r\n            betweenWidth: [1576, Infinity]\r\n        },\r\n        {\r\n            num: 1,\r\n            betweenWidth: [0, 1576]\r\n        }\r\n    ]\r\n})\r\n// Задача 5.\r\n// Работа с модальным окном \"Вызвать замерщика\"\r\n;(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    openModalBtnSlct: '#services',\r\n    modalSlct: '.services-modal',\r\n    overlayModalSlct: '.overlay',\r\n    closeModalBtnSlct: '.services-modal__close'\r\n})\r\n// Задача 6.\r\n// Время, когда закончатся скидки\r\n;(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer)('9 march 2026 12:40:00')\r\n// Задача 7.\r\n// Надо установить валидный url для отправки заявки\r\n;(0,_modules_leaveRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://jsonplaceholder.typicode.com/posts')\r\n// Задача 8.\r\n// Сертификаты\r\n;(0,_modules_sertificates_js__WEBPACK_IMPORTED_MODULE_5__.sertificates)()\r\n// Задача 9.\r\n// Плавная прокрутка страницы\r\n;(0,_modules_scrolling_js__WEBPACK_IMPORTED_MODULE_4__.scrolling)({\r\n    smoothScrollCls: '.smooth-scroll', // Кнопка прокрутки страницы на самый верх\r\n    timeScrol: 1000 // Время плавной прокрутки\r\n})\r\n// Задача 10.\r\n// Калькулятор\r\n;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_3__.calc)()\r\n// Дополнительное задание.\r\ntry {\r\n    ;(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_7__.comments)('comments.json', 2000)\r\n} catch (error) {\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/index.js?\n}");

/***/ },

/***/ "./js/modules/calc.js"
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calc: () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\r\n\r\n    // Блок рассчета\r\n    const calcBlock = document.querySelector('#calc')\r\n    // Не на всех страницах есть калькулятор\r\n    if (!calcBlock) return\r\n    // Тип балкона\r\n    const type = document.querySelector('#calc-type')\r\n    // Материал\r\n    const material = document.querySelector('#calc-type-material')\r\n    // Площадь\r\n    const square = document.querySelector('#calc-input')\r\n    // Итого\r\n    const total = document.querySelector('#calc-total')\r\n\r\n    square.addEventListener('input', (e) => {\r\n        if (square.value <= 0) {\r\n            square.value = '';\r\n        }\r\n        calcTotal()\r\n    });\r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n        calcTotal()\r\n    })\r\n\r\n    const calcTotal = () => {\r\n        if (\r\n            parseFloat(type.value) &&\r\n            parseInt(material.value) &&\r\n            parseFloat(square.value)\r\n        ) {\r\n            total.value = Math.round(\r\n                square.value * type.value * material.value\r\n                * 100) / 100\r\n        } else {\r\n            total.value = ''\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/calc.js?\n}");

/***/ },

/***/ "./js/modules/comments.js"
/*!********************************!*\
  !*** ./js/modules/comments.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = async (url, pause) => {\r\n\r\n    const commentsBlock = document.querySelector('.comments-container')\r\n    const commentItemLeft = commentsBlock.querySelectorAll('.comment-item')[0]\r\n    const commentItemRight = commentsBlock.querySelectorAll('.comment-item')[1]\r\n\r\n    // Загрузить комментарии\r\n    const getComments = async () => {\r\n        try {\r\n            const res = await fetch(url)\r\n            return await res.json()\r\n        } catch (error) {\r\n            commentsBlock.innerHTML = '<p style=\"display: block; margin-left: 34%;\">Отзывы не доступны ...</p>'\r\n            throw new Error(\"\");\r\n        }\r\n    }\r\n\r\n    // Сформировать новый комментарий на основе исходного \r\n    const fillData = (srcCommentItem, commentIndex) => {\r\n        let commentItem\r\n\r\n        const colorComment = srcCommentItem.querySelector('.review-arrow').className\r\n            .replace('review-inner', '')\r\n            .replace('review-arrow-right', '')\r\n            .replace('review-arrow-left', '')\r\n            .replace('review-arrow', '')\r\n            .trim()\r\n            .replace(/\\s+/g, '')\r\n\r\n        if (commentIndex % 2) {\r\n            commentItem = commentItemLeft.cloneNode(true)\r\n            commentItem.querySelector('.review-arrow').className =\r\n                commentItem.querySelector('.review-arrow').className\r\n                    .replace('review-green', colorComment)\r\n        } else {\r\n            commentItem = commentItemRight.cloneNode(true)\r\n            commentItem.querySelector('.review-arrow').className =\r\n                commentItem.querySelector('.review-arrow').className\r\n                    .replace('review-gray', colorComment)\r\n        }\r\n\r\n        commentItem.querySelector('.avatar')\r\n            .setAttribute('src', `images/users/${comments.comments[commentIndex].image != '' ?\r\n                comments.comments[commentIndex].image : '../logotype.png'\r\n                }`)\r\n        const authorAndComment = commentItem.querySelectorAll('p')\r\n        authorAndComment[0].textContent = comments.comments[commentIndex].author\r\n        authorAndComment[1].textContent = comments.comments[commentIndex].comment\r\n\r\n        return commentItem\r\n    }\r\n\r\n    const commentsBlockClone = commentsBlock.cloneNode(true)\r\n    commentsBlock.innerHTML = '<img style=\"display: block; margin-left: 29%;\" src=\"images/loader.gif\"></img>'\r\n    const comments = await getComments()\r\n    commentsBlock.textContent = ''\r\n    let i = 0\r\n    for (i; i < 3; i++) {\r\n        commentsBlock.append(fillData(commentsBlockClone.querySelectorAll('.comment-item')[i], i))\r\n    }\r\n    let commentIndex = i;\r\n\r\n    setInterval(() => {\r\n        const commentsItem = commentsBlock.querySelectorAll('.comment-item')\r\n\r\n        const filledCommentItem = fillData(commentsItem[0], commentIndex)\r\n        commentsItem[0].remove()\r\n\r\n        commentIndex++\r\n        if (commentIndex >= comments.comments.length)\r\n            commentIndex = 0\r\n\r\n        commentsBlock.append(filledCommentItem)\r\n\r\n    }, pause)\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/comments.js?\n}");

/***/ },

/***/ "./js/modules/helpers.js"
/*!*******************************!*\
  !*** ./js/modules/helpers.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/helpers.js?\n}");

/***/ },

/***/ "./js/modules/leaveRequest.js"
/*!************************************!*\
  !*** ./js/modules/leaveRequest.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst leaveRequest = (\r\n    url = 'https://jsonplaceholder.typicode.com/posts'\r\n) => {\r\n\r\n    // На странице таких одинаковых форм оставления заявки как минимум 2\r\n    const forms = document.querySelectorAll('.order-form.rf form')\r\n    forms.forEach(form => {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            submit(form)\r\n        })\r\n    })\r\n\r\n    // Валидация данных формы\r\n    const validate = (formData) => {\r\n        return (\r\n            formData.fio && // Проверка пустого значения\r\n            /^[а-яА-Яa-zA-Z]*$/.test(formData.fio) &&\r\n            formData.phone &&\r\n            /^\\+?\\d{1,16}$/.test(formData.phone)\r\n        )\r\n    }\r\n\r\n    // Мигание красным цветом рамки элемента, куда входит форма\r\n    let idInterval;\r\n    const alarm = (form) => {\r\n        clearInterval(idInterval)\r\n        const alarm = form.closest('div.order-form.rf')\r\n        alarm.style.borderColor = ''\r\n        const currentAlarmColor = window.getComputedStyle(alarm).borderColor\r\n        let countAlarm = 0\r\n        idInterval = setInterval(() => {\r\n            countAlarm % 2 ? alarm.style.borderColor = currentAlarmColor :\r\n                alarm.style.borderColor = \"red\"\r\n            if (countAlarm++ >= 5) {\r\n                alarm.style.borderColor = ''\r\n                clearInterval(idInterval)\r\n            }\r\n        }, 250);\r\n    }\r\n\r\n    // Отправка данных формы\r\n    const sendData = (formData) => {\r\n        return fetch(url, {\r\n            method: 'POST',\r\n            Data: JSON.stringify(formData),\r\n            headers: {\r\n                \"Content-type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submit = (form) => {\r\n        // Инпуты формы, значения которых необходимо обрабатывать и отправлять\r\n        const formInputs = {\r\n            fio: form.querySelector('input[name=\"fio\"]'),\r\n            phone: form.querySelector('input[name=\"phone\"]')\r\n        }\r\n        // Формирование объекта с данными формы\r\n        let formData = {}\r\n        Object.entries(formInputs).forEach(([key, val]) => {\r\n            formData[key] = val.value;\r\n        })\r\n        // Не на всех страницах есть калькулятор\r\n        const calcTotal = document.querySelector('#calc-total')\r\n        formData['total'] = calcTotal ? calcTotal.value : '';\r\n\r\n        // Валидация данных формы\r\n        if (!validate(formData)) {\r\n            // Мигание красным цветом рамки элемента, куда входит форма\r\n            alarm(form)\r\n            return;\r\n        }\r\n        sendData(formData)\r\n            .then(formData => {\r\n                formInputs.forEach(input => {\r\n                    input.value = ''; // Очистка input-ов формы после отправки\r\n                })\r\n            })\r\n            .catch(error => {\r\n                alert('Ошибка отправки заявки');\r\n                console.log(formData);\r\n            })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaveRequest);\n\n//# sourceURL=webpack://middle_diplom/./js/modules/leaveRequest.js?\n}");

/***/ },

/***/ "./js/modules/modals.js"
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = ({ openModalBtnSlct, modalSlct, overlayModalSlct, closeModalBtnSlct }) => {\r\n\r\n    // Кнопка отображения модального окна\r\n    const openModalBtn = document.querySelector(openModalBtnSlct)\r\n    // Модальное окно \r\n    const modal = document.querySelector(modalSlct)\r\n    // и его подложка\r\n    const overlayModal = document.querySelector(overlayModalSlct)\r\n\r\n    // Слушатель нажатия на кнопку отображения модального окна\r\n    openModalBtn.addEventListener('click', (e) => {\r\n        if (e.target.closest(openModalBtnSlct) &&\r\n            e.target.classList.contains('btn')) {\r\n            // Отображение модального окна\r\n            modal.style.display = 'block'\r\n            // и его подложки\r\n            overlayModal.style.display = 'block'\r\n        }\r\n    })\r\n\r\n    // Слушатель событий модального окна\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target.closest(closeModalBtnSlct)) {\r\n            // Закрытие модального окна\r\n            modal.style.display = 'none'\r\n            // и его подложки\r\n            overlayModal.style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./js/modules/modals.js?\n}");

/***/ },

/***/ "./js/modules/scrolling.js"
/*!*********************************!*\
  !*** ./js/modules/scrolling.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrolling: () => (/* binding */ scrolling)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./js/modules/helpers.js\");\n\r\n\r\nconst scrolling = ({\r\n    smoothScrollCls,\r\n    timeScroll = 3000\r\n}) => {\r\n\r\n    // Кнопка прокрутки страницы на самый верх\r\n    const smoothScrollBtn = document.querySelector(smoothScrollCls)\r\n\r\n    // Слушатель прокрутки страницы\r\n    window.addEventListener('scroll', (e) => {\r\n        // Отоббражение/скрытие кнопки прокрутки страницы \r\n        // на самый верх в зависимости от текущего положения страницы\r\n        hideIfNecessary()\r\n    })\r\n\r\n    // Слушатель нажатия на кнопку прокрутки страницы на самый верх\r\n    smoothScrollBtn.addEventListener('click', (e) => {\r\n        animation(0)\r\n    })\r\n\r\n    // Скрыть или отобразить кнопку прокрутки страницы на самый верх\r\n    //  в зависимости от текущего положения страницы\r\n    const hideIfNecessary = () => {\r\n        smoothScrollBtn.style.display = document.documentElement.scrollTop ?\r\n            'block' :\r\n            'none' // Кнопка скрывается, если смещение страницы равно 0\r\n    }\r\n    hideIfNecessary()\r\n\r\n    const animation = (finishTop) => {\r\n        let currentTop = document.documentElement.scrollTop;\r\n\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: timeScroll,\r\n            timing(timeFraction) {\r\n                return 1 - Math.pow(1 - timeFraction, 10);\r\n            },\r\n            draw(progress) {\r\n                document.documentElement.scrollTop =\r\n                    Math.floor(currentTop + (finishTop - currentTop) * progress);\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/scrolling.js?\n}");

/***/ },

/***/ "./js/modules/sertificates.js"
/*!************************************!*\
  !*** ./js/modules/sertificates.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sertificates: () => (/* binding */ sertificates)\n/* harmony export */ });\nconst sertificates = () => {\r\n\r\n    // Содержимое блока \"Сертификаты и документы\"\r\n    const sertificateBlock = document.querySelector('a.sertificate-document').closest('.text-center')\r\n    // Модальное окно отображения оригинального изображения сертификата\r\n    const sertificateModal = document.getElementById('sertificate-modal')\r\n    // Оригинальное изображение сертификата в модальном окне\r\n    const sertificateOriginalImage = document.getElementById('sertificate-original-image')\r\n\r\n    // Слушатель клика мыши на содержимом блока \"Сертификаты и документы\"\r\n    sertificateBlock.addEventListener('click', (e) => {\r\n        // Модальное окно отображение оригинального изображения сертификата отображено и\r\n        // клик мыши вне оригинального изображения в этом модальном окне скрывает это \r\n        // модальное окно\r\n        if (e.target.id == 'sertificate-modal') {\r\n            sertificateModal.style.display = 'none'\r\n            // Модальное окно отображение оригинального изображения сертификата отображено и\r\n            // при клике мыши на самом оригинальном изображении ничего не происходит\r\n        } else if (e.target.id == 'sertificate-original-image') {\r\n            return\r\n            // Модальное окно отображение оригинального изображения сертификата скрыто и\r\n            // клик мыши на иконке сертификата приводит к отображению этого модального окна\r\n        } else {\r\n            e.preventDefault()\r\n            // Оригинальное изображение сертификата\r\n            // sertificateOriginalImage.src = e.target.parentElement.href\r\n            sertificateOriginalImage.src = e.target.closest('a').href\r\n            // Отображение модального окна с изображением оригинального изображения \r\n            // сертификата\r\n            sertificateModal.style.display = 'flex'\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/sertificates.js?\n}");

/***/ },

/***/ "./js/modules/sliderCarousel.js"
/*!**************************************!*\
  !*** ./js/modules/sliderCarousel.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderCarousel: () => (/* binding */ sliderCarousel)\n/* harmony export */ });\nconst sliderCarousel = (\r\n    {\r\n        items = '.benefits__item',\r\n        itemsWrap = '.benefits-wrap',\r\n        arrowsWrap = '.benefits-arrows',\r\n        arrowCls = '.benefits__arrow',\r\n        arrowLeft = 'benefits__arrow--left',\r\n        arrowRight = 'benefits__arrow--right',\r\n\r\n        // Кол-во одновременно отображаемых выгод для клиентов в карусели\r\n        numItems\r\n    }) => {\r\n\r\n    // Все выгоды для клиентов\r\n    const benefitsItems = document.querySelectorAll(items)\r\n    // Блок-обертка надо выгодами для клиентов\r\n    const benefitsWrap = document.querySelector(itemsWrap)\r\n    // Блок с кнопками слайдера, используется для делегировоания события\r\n    const benefitsArrows = document.querySelector(arrowsWrap)\r\n\r\n    // Слушатель изменения размера страницы \r\n    window.addEventListener('resize', () => {\r\n        displayBenefitsItems(calcDisplayedPositions(getNumsItems()))\r\n    });\r\n\r\n    // Начальный номер выгоды для клиента, который будет отображаться первым \r\n    // в карусели из всех выгод для клиента в benefitsItems\r\n    let startPosition = 0\r\n\r\n    // Слушатель нажатия на кнопки перемещения по карусели\r\n    benefitsArrows.addEventListener('click', (e) => {\r\n        // Изменение начального номера выгоды для клиента\r\n        const benefitsArrow = e.target.closest(arrowCls);\r\n        if (benefitsArrow.classList.contains(arrowLeft)) {\r\n            startPosition--\r\n        } else if (benefitsArrow.classList.contains(arrowRight)) {\r\n            startPosition++\r\n        }\r\n        // Начальный номер не может быть меньше нуля и больше общего кол-ва выгод\r\n        if (startPosition < 0) startPosition = benefitsItems.length + startPosition\r\n        if (startPosition >= benefitsItems.length) startPosition = 0\r\n\r\n        displayBenefitsItems(calcDisplayedPositions(getNumsItems()))\r\n    })\r\n\r\n    // Расчитать номера и правильную последовательность выгод для клиента на основе\r\n    // начальной позиции и заданного кол-во одновременно отображаемых выгод\r\n    const calcDisplayedPositions = (num) => {\r\n        // Значения и последовательность позиций, которые должны отображаться в карусели\r\n        const positions = []\r\n        // Цикл от текущей позиции выгоды и до следующей позиции на расстоянии установленного кол-ва\r\n        for (let index = startPosition; index < startPosition + num; index++) {\r\n            // Если расчитываемая текущая позиция больше общего кол-ва выгод,\r\n            if (index >= benefitsItems.length)\r\n                // то расчитываемая позиция должна начинаться с начала общего кол-ва выгод\r\n                positions.push(index - benefitsItems.length)\r\n            else\r\n                positions.push(index)\r\n        }\r\n        return positions\r\n    }\r\n\r\n    // Отображение выгод для клиента в заданном кол-ве в нужном порядке\r\n    const displayBenefitsItems = (positions) => {\r\n        // Перед отображением очищаем все ранее отображенные выгоды\r\n        benefitsItems.forEach(item => {\r\n            item.remove()\r\n        })\r\n        positions.forEach(index => {\r\n            // Выгоды должны отображаться только те, позиции которых рассчитаны\r\n            // и должны отображаться в правильной последовательности\r\n            benefitsWrap.append(benefitsItems[index])\r\n        })\r\n    }\r\n\r\n    // Получение кол-во одновременно отображаемых элементов карусели\r\n    // в зависимости от ширины страницы\r\n    const getNumsItems = () => {\r\n        let i = 0\r\n        for (i = 0; i < numItems.length; i++) {\r\n            if (document.documentElement.clientWidth >= numItems[i].betweenWidth[0] &&\r\n                document.documentElement.clientWidth < numItems[i].betweenWidth[1]) {\r\n                break\r\n            }\r\n        }\r\n        return numItems[i].num;\r\n    }\r\n\r\n    displayBenefitsItems(calcDisplayedPositions(getNumsItems()))\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/sliderCarousel.js?\n}");

/***/ },

/***/ "./js/modules/timer.js"
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    // На странице несколько таймеров, как минимум 2\r\n    const timerDays = document.querySelectorAll('div.count_1>span');\r\n    const timerHours = document.querySelectorAll('div.count_2>span');\r\n    const timerMinutes = document.querySelectorAll('div.count_3>span');\r\n    const timerSeconds = document.querySelectorAll('div.count_4>span');\r\n\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let days = Math.floor((timeRemaining / 60 / 60 / 24));\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        if (timeRemaining <= 1) {\r\n            clearInterval(idInterval);\r\n            return { timeRemaining: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }\r\n        }\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (num) => {\r\n        let strNum = String(num);\r\n        if (strNum.length < 2) {\r\n            strNum = `0${strNum}`;\r\n        }\r\n        return strNum;\r\n    }\r\n\r\n    const updateTimer = (arr, value) => {\r\n        arr.forEach(elem => {\r\n            elem.textContent = value;\r\n        })\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        updateTimer(timerDays, addZero(getTime.days))\r\n        updateTimer(timerHours, addZero(getTime.hours))\r\n        updateTimer(timerMinutes, addZero(getTime.minutes))\r\n        updateTimer(timerSeconds, addZero(getTime.seconds))\r\n    }\r\n\r\n    idInterval = setInterval(updateClock, 1000);\r\n}\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;