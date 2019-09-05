webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/status-progress.jsx":
/*!********************************************!*\
  !*** ./src/components/status-progress.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");




var renderStatusText = function renderStatusText(status) {
  switch (status) {
    case 'buy':
      return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Attempting to Buy');

    case 'succeed':
      return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Buy Succeeded');

    case 'closed':
      return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Contract Closed');

    default:
      return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Bot is not running');
  }
};

var StatusProgress = function StatusProgress(_ref) {
  var status = _ref.status;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__group toolbar__group-progress"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "toolbar__group-text"
  }, renderStatusText(status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress-line"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress-bar toolbar__progress-" + status
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress-stage"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress-stage"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__progress-stage"
  })));
};

StatusProgress.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (StatusProgress);

/***/ })

})
//# sourceMappingURL=main.e31a10.hot-update.js.map