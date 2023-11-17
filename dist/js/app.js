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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\nvar setupSlider = function setupSlider(slider) {\n  var container = slider.querySelector(\".slider__container\");\n  var prev = slider.querySelector(\".slider__prev\");\n  var next = slider.querySelector(\".slider__next\");\n  var cards = Array.from(slider.querySelectorAll(\"li\"));\n  var cardsLeftOffset = cards.map(function (card) {\n    return card.offsetLeft;\n  });\n  var cardsRightOffset = cardsLeftOffset.map(function (offset) {\n    return offset + cards[0].offsetWidth;\n  });\n  var prevCard, nextCard;\n\n  // on scroll calculations\n  var onScroll = function onScroll() {\n    var maxScroll = container.scrollWidth - container.offsetWidth;\n    var scrollLeft = container.scrollLeft;\n    prev.disabled = scrollLeft <= 0;\n    next.disabled = scrollLeft >= maxScroll;\n    prevCard = cardsLeftOffset.findIndex(function (offset) {\n      return offset >= scrollLeft;\n    }) - 1;\n    nextCard = cardsRightOffset.findIndex(function (offset) {\n      return offset > scrollLeft + container.offsetWidth;\n    });\n  };\n  container.addEventListener(\"scroll\", onScroll);\n  onScroll();\n\n  // on buttons click\n  var onNextClick = function onNextClick() {\n    return container.scrollTo({\n      left: cardsLeftOffset[nextCard],\n      behavior: \"smooth\"\n    });\n  };\n  next.addEventListener(\"click\", onNextClick);\n  var onPrevClick = function onPrevClick() {\n    container.scrollTo({\n      left: cardsRightOffset[prevCard] - container.offsetWidth,\n      behavior: \"smooth\"\n    });\n  };\n  prev.addEventListener(\"click\", onPrevClick);\n};\nvar setup = function setup() {\n  var slider = document.querySelector(\"#slider\");\n  setupSlider(slider);\n};\nsetup();\n\n//# sourceURL=webpack://slider/./src/js/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://slider/./src/scss/app.scss?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;