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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_requestCallModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/requestCallModal.js */ \"./js/modules/requestCallModal.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./js/modules/timer.js\");\n\r\n\r\n\r\n(0,_modules_requestCallModal_js__WEBPACK_IMPORTED_MODULE_0__.requestCallModal)()\r\n;(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__.timer)('8 march 2026 12:40:00')\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./js/index.js?\n}");

/***/ },

/***/ "./js/modules/requestCallModal.js"
/*!****************************************!*\
  !*** ./js/modules/requestCallModal.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requestCallModal: () => (/* binding */ requestCallModal)\n/* harmony export */ });\nconst requestCallModal = () => {\r\n    // Кнопка \"Заказать звонок\"\r\n    const requestCallBtn = document.querySelector('#request-call-btn')\r\n    // Модальное окно \"Заказ звонка\"\r\n    const modal = document.querySelector('.header-modal')\r\n    // и его подложка\r\n    const modalOverlay = document.querySelector('.overlay')\r\n\r\n    console.log(requestCallBtn);\r\n\r\n\r\n    // Слушатель нажатия на кнопку \"Заказать звонок\"\r\n    requestCallBtn.addEventListener('click', (e) => {\r\n        // Отображение диалогового окна \"Заказ звонка\"\r\n        modalOverlay.style.display = 'block'\r\n        // и его подложки\r\n        modal.style.display = 'block'\r\n    })\r\n\r\n    // Слушатель событий модального окна \"Заказ звонка\"\r\n    modal.addEventListener('click', (e) => {\r\n        console.log('333');\r\n\r\n        if (e.target.classList.contains('header-modal__close')) {\r\n            // Закрытие диалогового окна \"Заказ звонка\"\r\n            modalOverlay.style.display = 'none'\r\n            // и его подложки\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://middle_diplom/./js/modules/requestCallModal.js?\n}");

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