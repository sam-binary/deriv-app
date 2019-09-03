webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/toolbar.jsx":
/*!************************************!*\
  !*** ./src/components/toolbar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deriv-components/lib/button */ "../components/lib/button.js");
/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deriv-components/lib/button.css */ "../components/lib/button.css");
/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deriv-components/lib/input */ "../components/lib/input.js");
/* harmony import */ var deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var deriv_components_lib_input_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deriv-components/lib/input.css */ "../components/lib/input.css");
/* harmony import */ var deriv_components_lib_input_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_input_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! deriv-components/lib/form */ "../components/lib/form.js");
/* harmony import */ var deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var deriv_components_lib_form_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! deriv-components/lib/form.css */ "../components/lib/form.css");
/* harmony import */ var deriv_components_lib_form_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_form_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Icons_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons.jsx */ "./src/components/Icons.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");





        



        



        



var initial_search_value = {
  search: ''
};

var Toolbar = function Toolbar(props) {
  var onStartClick = props.onStartClick,
      onSearch = props.onSearch,
      onSearchFocus = props.onSearchFocus; // const toolbar_element = [
  //     { id: 'start', type: 'button', text: 'Start', action: onStartClick },
  //     {
  //         id      : 'toolbar-action', type    : 'button-group', children: [
  //             { id: 'reset-button', text: 'reset', action: onResetClick },
  //             { id: 'load-xml', text: 'browse', action: onBrowseClick },
  //             { id: 'save-xml', text: 'save', action: onSaveClick },
  //             { id: 'integration', text: 'google drive', action: onGoogleDriveClick },
  //             { type: 'divider' },
  //             { id: 'undo', text: 'undo', action: onUndoClick },
  //             { id: 'redo', text: 'redo', action: onRedoClick },
  //             { type: 'divider' },
  //             { id: 'zoomIn', text: 'zoom in', action: onZoomInClick },
  //             { id: 'zoomOut', text: 'zoom out', action: onZoomOutClick },
  //             { id: 'sort', text: 'sort', action: onSortClick },
  //         ],
  //     },
  // ];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "toolbar",
    className: "toolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: 'start',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('toolbar__btn', 'btn--primary', 'btn--icon'),
    has_effect: true,
    onClick: onStartClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["ArrowIcon"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn--icon-text')
  }, Object(_utils_tools__WEBPACK_IMPORTED_MODULE_10__["translate"])('Start'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
    initialValues: initial_search_value,
    onSubmit: function onSubmit(values) {
      return onSearch(values);
    }
  }, function (_ref) {
    var submitForm = _ref.submitForm;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "toolbar__search-field",
      type: "text",
      name: "search",
      label: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_10__["translate"])('Search'),
      placeholder: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_10__["translate"])('Search block...'),
      onKeyUp: submitForm,
      onClick: submitForm,
      onFocus: onSearchFocus,
      trailing_icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["ArrowIcon"], null)
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (_ref2) {
  var toolbar = _ref2.toolbar;
  return {
    onStartClick: toolbar.onStartClick,
    onSearch: toolbar.onSearch,
    onSearchFocus: toolbar.onSearchFocus,
    onResetClick: toolbar.onResetClick,
    onBrowseClick: toolbar.onBrowseClick,
    onSaveClick: toolbar.onSaveClick,
    onGoogleDriveClick: toolbar.onGoogleDriveClick,
    onUndoClick: toolbar.onUndoClick,
    onRedoClick: toolbar.onRedoClick,
    handleFileChange: toolbar.handleFileChange,
    onConfirmSave: toolbar.onConfirmSave,
    onZoomInClick: toolbar.onZoomInClick,
    onZoomOutClick: toolbar.onZoomOutClick,
    onSortClick: toolbar.onSortClick
  };
})(Toolbar));

/***/ })

})
//# sourceMappingURL=main.f388ab.hot-update.js.map