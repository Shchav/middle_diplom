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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals.js */ \"./js/modules/modals.js\");\n/* harmony import */ var _modules_leaveRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/leaveRequest.js */ \"./js/modules/leaveRequest.js\");\n\r\n\r\n\r\n\r\n// Время, когда закончатся скидки\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer)('8 march 2026 12:40:00')\r\n// Работа с модальным окном \"Заказать звонок\"\r\n;(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    openModalBtnSlct: '#request-call-btn',\r\n    modalSlct: '.header-modal',\r\n    overlayModalSlct: '.overlay',\r\n    closeModalBtnSlct: '.header-modal__close'\r\n})\r\n// Работа с модальным окном \"Вызвать замерщика\"\r\n;(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    openModalBtnSlct: '#services',\r\n    modalSlct: '.services-modal',\r\n    overlayModalSlct: '.overlay',\r\n    closeModalBtnSlct: '.services-modal__close'\r\n})\r\n// Надо установить валидный url для отправки заявки\r\n;(0,_modules_leaveRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://jsonplaceholder.typicode.com/posts')\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/index.js?\n}");

/***/ },

/***/ "./js/modules/leaveRequest.js"
/*!************************************!*\
  !*** ./js/modules/leaveRequest.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst leaveRequest = (\r\n    url = 'https://jsonplaceholder.typicode.com/posts'\r\n) => {\r\n\r\n    const forms = document.querySelectorAll('.order-form.rf form')\r\n    forms.forEach(form => {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n            submit(form)\r\n        })\r\n    })\r\n\r\n    // Валидация данных формы\r\n    const validate = (formData) => {\r\n        return (\r\n            formData.fio && // Проверка пустого значения\r\n            /^[а-яА-Яa-zA-Z]*$/.test(formData.fio) &&\r\n            formData.phone &&\r\n            /^\\+?\\d{1,16}$/.test(formData.phone)\r\n        )\r\n    }\r\n\r\n    // Мигание красным цветом рамки элемента, куда входит форма\r\n    let idInterval;\r\n    const alarm = (form) => {\r\n        clearInterval(idInterval)\r\n        const alarm = form.closest('div.order-form.rf')\r\n        alarm.style.borderColor = ''\r\n        const currentAlarmColor = window.getComputedStyle(alarm).borderColor\r\n        let countAlarm = 0\r\n        idInterval = setInterval(() => {\r\n            countAlarm % 2 ? alarm.style.borderColor = currentAlarmColor :\r\n                alarm.style.borderColor = \"red\"\r\n            if (countAlarm++ >= 5) {\r\n                alarm.style.borderColor = ''\r\n                clearInterval(idInterval)\r\n            }\r\n        }, 250);\r\n    }\r\n\r\n    // Отправка данных формы\r\n    const sendData = (formData) => {\r\n        return fetch(url, {\r\n            method: 'POST',\r\n            Data: JSON.stringify(formData),\r\n            headers: {\r\n                \"Content-type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submit = (form) => {\r\n        // Инпуты формы, значения которых необходимо обрабатывать и отправлять\r\n        const formInputs = {\r\n            fio: form.querySelector('input[name=\"fio\"]'),\r\n            phone: form.querySelector('input[name=\"phone\"]')\r\n        }\r\n        // Формирование объекта с данными формы\r\n        let formData = {}\r\n        Object.entries(formInputs).forEach(([key, val]) => {\r\n            formData[key] = val.value;\r\n        })\r\n        // Валидация данных формы\r\n        if (!validate(formData)) {\r\n            // Мигание красным цветом рамки элемента, куда входит форма\r\n            alarm(form)\r\n            return;\r\n        }\r\n        sendData(formData)\r\n            .then(formData => {\r\n                formInputs.forEach(input => {\r\n                    input.value = ''; // Очистка input-ов формы после отправки\r\n                })\r\n            })\r\n            .catch(error => {\r\n                alert('Ошибка отправки заявки');\r\n            })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaveRequest);\n\n//# sourceURL=webpack://middle_diplom/./js/modules/leaveRequest.js?\n}");

/***/ },

/***/ "./js/modules/modals.js"
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = ({ openModalBtnSlct, modalSlct, overlayModalSlct, closeModalBtnSlct }) => {\r\n\r\n    // Кнопка отображения модального окна\r\n    const openModalBtn = document.querySelector(openModalBtnSlct)\r\n    // Модальное окно \r\n    const modal = document.querySelector(modalSlct)\r\n    // и его подложка\r\n    const overlayModal = document.querySelector(overlayModalSlct)\r\n\r\n    // Слушатель нажатия на кнопку отображения модального окна\r\n    openModalBtn.addEventListener('click', (e) => {\r\n        if (e.target.closest(openModalBtnSlct) &&\r\n            e.target.classList.contains('btn')) {\r\n            // Отображение модального окна\r\n            modal.style.display = 'block'\r\n            // и его подложки\r\n            overlayModal.style.display = 'block'\r\n        }\r\n    })\r\n\r\n    // Слушатель событий модального окна\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target.closest(closeModalBtnSlct)) {\r\n            // Закрытие модального окна\r\n            modal.style.display = 'none'\r\n            // и его подложки\r\n            overlayModal.style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./js/modules/modals.js?\n}");

/***/ },

/***/ "./js/modules/timer.js"
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('div.count_1>span');\r\n    const timerHours = document.querySelector('div.count_2>span');\r\n    const timerMinutes = document.querySelector('div.count_3>span');\r\n    const timerSeconds = document.querySelector('div.count_4>span');\r\n\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let days = Math.floor((timeRemaining / 60 / 60 / 24));\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        if (timeRemaining <= 1) {\r\n            clearInterval(idInterval);\r\n            return { timeRemaining: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }\r\n        }\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (num) => {\r\n        let strNum = String(num);\r\n        if (strNum.length < 2) {\r\n            strNum = `0${strNum}`;\r\n        }\r\n        return strNum;\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        timerDays.textContent = addZero(getTime.days);\r\n        timerHours.textContent = addZero(getTime.hours);\r\n        timerMinutes.textContent = addZero(getTime.minutes);\r\n        timerSeconds.textContent = addZero(getTime.seconds);\r\n    }\r\n\r\n    idInterval = setInterval(updateClock, 1000);\r\n}\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/modules/timer.js?\n}");

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