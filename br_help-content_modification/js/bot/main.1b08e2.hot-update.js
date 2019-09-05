webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/flyout.jsx":
/*!***********************************!*\
  !*** ./src/components/flyout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flyout_block_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flyout-block.jsx */ "./src/components/flyout-block.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sass/scratch/flyout.scss */ "./src/assets/sass/scratch/flyout.scss");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4__);






var Flyout = function Flyout(_ref) {
  var flyout_content = _ref.flyout_content,
      flyout_width = _ref.flyout_width,
      is_visible = _ref.is_visible,
      is_search_flyout = _ref.is_search_flyout;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flyout" + (!is_visible ? ' hidden' : '') + (is_search_flyout ? ' flyout__search' : ''),
    style: {
      width: flyout_width + "px"
    }
  }, flyout_content.map(function (node, index) {
    var tag_name = node.tagName.toUpperCase();

    switch (tag_name) {
      case Blockly.Xml.NODE_BLOCK:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_flyout_block_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: node.getAttribute('type') + Math.random(),
          id: "flyout__item-workspace--" + index,
          block_node: node
        });

      case Blockly.Xml.NODE_LABEL:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: node.getAttribute('text') + index,
          className: "flyout__item-label"
        }, node.getAttribute('text'));

      case Blockly.Xml.NODE_BUTTON:
        {
          var callback_key = node.getAttribute('callbackKey');

          var callback = Blockly.derivWorkspace.getButtonCallback(callback_key) || function () {};

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "" + callback_key + index,
            className: "flyout__button",
            onClick: function onClick(button) {
              var flyout_button = button; // Workaround for not having a flyout workspace.
              // eslint-disable-next-line no-underscore-dangle

              flyout_button.targetWorkspace_ = Blockly.derivWorkspace; // eslint-disable-next-line no-underscore-dangle

              flyout_button.getTargetWorkspace = function () {
                return flyout_button.targetWorkspace_;
              };

              callback(flyout_button);
            }
          }, node.getAttribute('text'));
        }

      default:
        return null;
    }
  }));
};

Flyout.propTypes = {
  flyout_content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  flyout_width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  is_search_flyout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref2) {
  var flyout = _ref2.flyout;
  return {
    flyout_content: flyout.flyout_content,
    flyout_width: flyout.flyout_width,
    is_visible: flyout.is_visible,
    is_search_flyout: flyout.is_search_flyout
  };
})(Flyout));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.1b08e2.hot-update.js.map