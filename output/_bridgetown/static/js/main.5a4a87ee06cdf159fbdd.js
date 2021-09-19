/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/styles/index.scss":
/*!************************************!*\
  !*** ./frontend/styles/index.scss ***!
  \************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: unmatched \"}\".\n   ╷\n21 │ }\n   │ ^\n   ╵\n  /Users/bagelandballoon/GitSource/kwpa.github.io/frontend/styles/index.scss 21:1  root stylesheet\n    at processResult (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/webpack/lib/NormalModule.js:721:19)\n    at /Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/webpack/lib/NormalModule.js:827:5\n    at /Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at /Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/sass-loader/dist/index.js:73:7\n    at Function.call$2 (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/sass/sass.dart.js:95807:16)\n    at _render_closure1.call$2 (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/sass/sass.dart.js:83844:12)\n    at _RootZone.runBinary$3$3 (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/sass/sass.dart.js:28038:18)\n    at _FutureListener.handleError$1 (/Users/bagelandballoon/GitSource/kwpa.github.io/node_modules/sass/sass.dart.js:26568:21)");

/***/ }),

/***/ "./src/_components sync recursive .js$":
/*!************************************!*\
  !*** ./src/_components/ sync .js$ ***!
  \************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/_components sync recursive .js$";
module.exports = webpackEmptyContext;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./frontend/javascript/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! index.scss */ "./frontend/styles/index.scss");

const componentsContext = __webpack_require__("./src/_components sync recursive .js$");
componentsContext.keys().forEach(componentsContext);
console.info("Bridgetown is loaded!");

})();

/******/ })()
;
//# sourceMappingURL=main.5a4a87ee06cdf159fbdd.js.map