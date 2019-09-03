webpackHotUpdatederiv_bot("main",{

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/*! exports provided: flyout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyout", function() { return flyout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootStore; });
/* harmony import */ var _bot_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot-store */ "./src/stores/bot-store.js");
/* harmony import */ var _flyout_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flyout-store */ "./src/stores/flyout-store.js");
/* harmony import */ var _toolbar_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar-store */ "./src/stores/toolbar-store.js");


 // Single instance so we can use it outside React.

var flyout = new _flyout_store__WEBPACK_IMPORTED_MODULE_1__["default"]();

var RootStore = function RootStore(core, ws) {
  this.bot = new _bot_store__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.toolbar = new _toolbar_store__WEBPACK_IMPORTED_MODULE_2__["default"](flyout);
  this.flyout = flyout;
  this.core = core;
  this.ws = ws;
};



/***/ })

})
//# sourceMappingURL=main.dd020c.hot-update.js.map