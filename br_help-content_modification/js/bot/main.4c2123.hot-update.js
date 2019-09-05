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
/* harmony import */ var _status_progress_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-progress.jsx */ "./src/components/status-progress.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");





        



        



        




var initial_search_value = {
  search: ''
};
var initial_botname_value = {
  botname: 'Untitled Bot'
};

var Toolbar = function Toolbar(props) {
  var onStartClick = props.onStartClick,
      onSearch = props.onSearch,
      onSearchBlur = props.onSearchBlur,
      isSearchFocus = props.isSearchFocus,
      onBotnameTyped = props.onBotnameTyped,
      onResetClick = props.onResetClick,
      onBrowseClick = props.onBrowseClick,
      onSaveClick = props.onSaveClick,
      onUndoClick = props.onUndoClick,
      onRedoClick = props.onRedoClick,
      onZoomInClick = props.onZoomInClick,
      onZoomOutClick = props.onZoomOutClick,
      onSortClick = props.onSortClick; // const toolbar_element = [
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: 'start',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('toolbar__btn', 'btn--primary', 'btn--icon'),
    has_effect: true,
    onClick: onStartClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["StartIcon"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn--icon-text')
  }, Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__["translate"])('Start'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
    initialValues: initial_search_value,
    onSubmit: function onSubmit(values) {
      return onSearch(values);
    }
  }, function (_ref) {
    var submitForm = _ref.submitForm;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "toolbar__form-field",
      type: "text",
      name: "search",
      label: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__["translate"])('Search block...'),
      placeholder: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__["translate"])('Search block...'),
      onKeyUp: submitForm,
      onFocus: submitForm,
      onBlur: onSearchBlur,
      trailing_icon: isSearchFocus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["CloseIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["SearchIcon"], null)
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
    initialValues: initial_botname_value,
    onSubmit: function onSubmit(values) {
      return onBotnameTyped(values);
    }
  }, function (_ref2) {
    var submitForm = _ref2.submitForm;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "toolbar__form-field",
      type: "text",
      name: "botname",
      onKeyUp: submitForm,
      label: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__["translate"])('Bot name'),
      trailing_icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["RenameIcon"], null)
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__group toolbar__group-btn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onBrowseClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["OpenIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onResetClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["NewFileIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onSaveClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["SaveIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vd"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onUndoClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["UndoIcon"], null), "\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onRedoClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["RedoIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vd"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["PerformIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onSortClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["ReaarangeIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onZoomInClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["ZoomInIcon"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toolbar__btn-icon",
    onClick: onZoomOutClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["ZoomOutIcon"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "toolbar__section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_status_progress_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    status: "closed"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: 'run',
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('toolbar__btn', 'btn--primary', 'btn--icon'),
    has_effect: true,
    onClick: onStartClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_8__["StartIcon"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn--icon-text')
  }, Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__["translate"])('Run bot')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (_ref3) {
  var toolbar = _ref3.toolbar;
  return {
    isSearchFocus: toolbar.isSearchFocus,
    onStartClick: toolbar.onStartClick,
    onSearch: toolbar.onSearch,
    onSearchBlur: toolbar.onSearchBlur,
    onBotnameTyped: toolbar.onBotnameTyped,
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
//# sourceMappingURL=main.4c2123.hot-update.js.map