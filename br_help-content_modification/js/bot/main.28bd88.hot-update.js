webpackHotUpdatederiv_bot("main",{

/***/ "./src/services/api/helpers/index.js":
/*!*******************************************!*\
  !*** ./src/services/api/helpers/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-time */ "./src/services/api/helpers/server-time.js");
/* harmony import */ var _trading_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trading-times */ "./src/services/api/helpers/trading-times.js");
/* harmony import */ var _contracts_for__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts-for */ "./src/services/api/helpers/contracts-for.js");
/* harmony import */ var _active_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-symbols */ "./src/services/api/helpers/active-symbols.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ApiHelpers =
/*#__PURE__*/
function () {
  function ApiHelpers(root_store) {
    console.log("HELPER CONSTRUCTOR"); // eslint-disable-line

    this.root_store = root_store;
    this.server_time = new _server_time__WEBPACK_IMPORTED_MODULE_0__["default"](this.root_store.ws);
    this.trading_times = new _trading_times__WEBPACK_IMPORTED_MODULE_1__["default"](this.root_store.ws, this.server_time);
    this.contracts_for = new _contracts_for__WEBPACK_IMPORTED_MODULE_2__["default"](this.root_store.ws, this.server_time);
    this.active_symbols = new _active_symbols__WEBPACK_IMPORTED_MODULE_3__["default"](this.root_store.ws, this.trading_times);
  }

  ApiHelpers.setInstance = function setInstance(root_store) {
    if (!this.singleton) {
      this.singleton = new ApiHelpers(root_store);
    }
  };

  _createClass(ApiHelpers, null, [{
    key: "instance",
    get: function get() {
      return this.singleton;
    }
  }]);

  return ApiHelpers;
}();

ApiHelpers.singleton = null;
/* harmony default export */ __webpack_exports__["default"] = (ApiHelpers);

/***/ })

})
//# sourceMappingURL=main.28bd88.hot-update.js.map