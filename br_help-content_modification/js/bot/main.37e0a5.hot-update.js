webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/flyout.jsx":
/*!***********************************!*\
  !*** ./src/components/flyout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _flyout_block_group_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flyout-block-group.jsx */ "./src/components/flyout-block-group.jsx");
/* harmony import */ var _scratch_help_content_flyout_help_base_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scratch/help-content/flyout-help-base.jsx */ "./src/scratch/help-content/flyout-help-base.jsx");
/* harmony import */ var _scratch_help_content_help_content_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scratch/help-content/help-content.config */ "./src/scratch/help-content/help-content.config.js");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/sass/scratch/flyout.scss */ "./src/assets/sass/scratch/flyout.scss");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_10__);












var Flyout = function Flyout(_ref) {
  var is_help_content = _ref.is_help_content,
      block_nodes = _ref.block_nodes,
      flyout_content = _ref.flyout_content,
      flyout_width = _ref.flyout_width,
      is_visible = _ref.is_visible,
      showHelpContent = _ref.showHelpContent;
  console.log(_scratch_help_content_help_content_config__WEBPACK_IMPORTED_MODULE_8__); // eslint-disable-line

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "flyout" + (!is_visible ? ' hidden' : '') + (is_help_content ? ' flyout__help' : ' flyout__content'),
    style: {
      width: flyout_width + "px"
    }
  }, is_help_content ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_scratch_help_content_flyout_help_base_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    block_nodes: block_nodes
  }) : Object.keys(flyout_content).map(function (key, index) {
    var nodes = flyout_content[key];
    var node = nodes[0];
    var tag_name = node.tagName.toUpperCase();

    switch (tag_name) {
      case Blockly.Xml.NODE_BLOCK:
        {
          var block_type = node.getAttribute('type');
          var flyout_block_key = block_type + " " + index;

          if (Blockly.Block.isDynamic(block_type) || is_help_content) {
            flyout_block_key = block_type + " " + Math.random();
          }

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_flyout_block_group_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: flyout_block_key,
            id: "flyout__item-workspace--" + index,
            block_nodes: nodes,
            onInfoClick: _scratch_help_content_help_content_config__WEBPACK_IMPORTED_MODULE_8__[block_type] && function () {
              return showHelpContent(nodes);
            }
          });
        }

      case Blockly.Xml.NODE_LABEL:
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          key: node.getAttribute('text') + index,
          className: "flyout__item-label"
        }, node.getAttribute('text'));

      case Blockly.Xml.NODE_BUTTON:
        {
          var callback_key = node.getAttribute('callbackKey');

          var callback = Blockly.derivWorkspace.getButtonCallback(callback_key) || function () {};

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
            key: "" + callback_key + index,
            className: "flyout__button flyout__button-new",
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
  block_nodes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  flyout_content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  flyout_width: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  is_help_content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showHelpContent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (_ref2) {
  var flyout = _ref2.flyout;
  return {
    is_help_content: flyout.is_help_content,
    block_nodes: flyout.block_nodes,
    flyout_content: flyout.flyout_content,
    flyout_width: flyout.flyout_width,
    is_visible: flyout.is_visible,
    showHelpContent: flyout.showHelpContent
  };
})(Flyout));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.37e0a5.hot-update.js.map