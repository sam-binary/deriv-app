webpackHotUpdatederiv_bot("main",{

/***/ "./src/assets/icons/ic-close.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/ic-close.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "ic-close-usage",
      viewBox: "0 0 16 16",
      url: __webpack_require__.p + "bot-sprite.svg#ic-close-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/components/Icons.jsx":
/*!**********************************!*\
  !*** ./src/components/Icons.jsx ***!
  \**********************************/
/*! exports provided: Icon, LogoIcon, TradeActive, ArrowIcon, Stage1Icon, Stage2Icon, Stage3Icon, Stage4Icon, BlueInfoIcon, StartIcon, SearchIcon, RenameIcon, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoIcon", function() { return LogoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeActive", function() { return TradeActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowIcon", function() { return ArrowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage1Icon", function() { return Stage1Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage2Icon", function() { return Stage2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage3Icon", function() { return Stage3Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage4Icon", function() { return Stage4Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueInfoIcon", function() { return BlueInfoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartIcon", function() { return StartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameIcon", function() { return RenameIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_ic_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/ic-arrow.svg */ "./src/assets/icons/ic-arrow.svg");
/* harmony import */ var _assets_icons_ic_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ic-logo.svg */ "./src/assets/icons/ic-logo.svg");
/* harmony import */ var _assets_icons_ic_trade_active_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ic-trade-active.svg */ "./src/assets/icons/ic-trade-active.svg");
/* harmony import */ var _assets_icons_ic_stage_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/ic-stage-1.svg */ "./src/assets/icons/ic-stage-1.svg");
/* harmony import */ var _assets_icons_ic_stage_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/ic-stage-2.svg */ "./src/assets/icons/ic-stage-2.svg");
/* harmony import */ var _assets_icons_ic_stage_3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/ic-stage-3.svg */ "./src/assets/icons/ic-stage-3.svg");
/* harmony import */ var _assets_icons_ic_stage_4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/ic-stage-4.svg */ "./src/assets/icons/ic-stage-4.svg");
/* harmony import */ var _assets_icons_icon_info_blue_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/icon-info-blue.svg */ "./src/assets/icons/icon-info-blue.svg");
/* harmony import */ var _assets_icons_ic_start_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/ic-start.svg */ "./src/assets/icons/ic-start.svg");
/* harmony import */ var _assets_icons_ic_search_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/ic-search.svg */ "./src/assets/icons/ic-search.svg");
/* harmony import */ var _assets_icons_ic_rename_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/ic-rename.svg */ "./src/assets/icons/ic-rename.svg");
/* harmony import */ var _assets_icons_ic_close_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/ic-close.svg */ "./src/assets/icons/ic-close.svg");














/* eslint-disable react/display-name */

var Icon = function Icon(svgItem) {
  return function (props) {
    var className = props.className;
    var vb = svgItem.viewBox.split(' ').slice(2);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: vb[0],
      height: vb[1],
      className: "icon " + className
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
      xlinkHref: __webpack_require__.p + "bot-sprite.svg#" + svgItem.id
    }));
  };
};
var LogoIcon = Icon(_assets_icons_ic_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var TradeActive = Icon(_assets_icons_ic_trade_active_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ArrowIcon = Icon(_assets_icons_ic_arrow_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var Stage1Icon = Icon(_assets_icons_ic_stage_1_svg__WEBPACK_IMPORTED_MODULE_5__["default"]);
var Stage2Icon = Icon(_assets_icons_ic_stage_2_svg__WEBPACK_IMPORTED_MODULE_6__["default"]);
var Stage3Icon = Icon(_assets_icons_ic_stage_3_svg__WEBPACK_IMPORTED_MODULE_7__["default"]);
var Stage4Icon = Icon(_assets_icons_ic_stage_4_svg__WEBPACK_IMPORTED_MODULE_8__["default"]);
var BlueInfoIcon = Icon(_assets_icons_icon_info_blue_svg__WEBPACK_IMPORTED_MODULE_9__["default"]);
var StartIcon = Icon(_assets_icons_ic_start_svg__WEBPACK_IMPORTED_MODULE_10__["default"]);
var SearchIcon = Icon(_assets_icons_ic_search_svg__WEBPACK_IMPORTED_MODULE_11__["default"]);
var RenameIcon = Icon(_assets_icons_ic_rename_svg__WEBPACK_IMPORTED_MODULE_12__["default"]);
var CloseIcon = Icon(_assets_icons_ic_close_svg__WEBPACK_IMPORTED_MODULE_13__["default"]);

/***/ })

})
//# sourceMappingURL=main.5930ef.hot-update.js.map