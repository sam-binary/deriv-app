webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/flyout-block.jsx":
/*!*****************************************!*\
  !*** ./src/components/flyout-block.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var FlyoutBlock =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FlyoutBlock, _React$PureComponent);

  function FlyoutBlock() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FlyoutBlock.prototype;

  _proto.render = function render() {
    var _this = this;

    var block_node = this.props.block_node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item-buttons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "flyout__button flyout__button-add",
      onClick: function onClick() {
        return Blockly.derivWorkspace.addBlockNode(block_node);
      }
    }, Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Add'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: function ref(el) {
        return _this.el_block_workspace = el;
      },
      className: "flyout__block-workspace"
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        initBlockWorkspace = _this$props.initBlockWorkspace,
        block_node = _this$props.block_node,
        should_center_block = _this$props.should_center_block;
    initBlockWorkspace(this.el_block_workspace, block_node, should_center_block);
  };

  return FlyoutBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

FlyoutBlock.propTypes = {
  block_node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  initBlockWorkspace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  should_center_block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var flyout = _ref.flyout;
  return {
    initBlockWorkspace: flyout.initBlockWorkspace
  };
})(FlyoutBlock));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.1468b2.hot-update.js.map