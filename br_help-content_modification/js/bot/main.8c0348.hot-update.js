webpackHotUpdatederiv_bot("main",{

/***/ "./src/scratch/help-content/flyout-help-base.jsx":
/*!*******************************************************!*\
  !*** ./src/scratch/help-content/flyout-help-base.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _help_content_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help-content.config */ "./src/scratch/help-content/help-content.config.js");
/* harmony import */ var _help_content_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_help_content_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _help_components_flyout_video_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help-components/flyout-video.jsx */ "./src/scratch/help-content/help-components/flyout-video.jsx");
/* harmony import */ var _help_components_flyout_text_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help-components/flyout-text.jsx */ "./src/scratch/help-content/help-components/flyout-text.jsx");
/* harmony import */ var _help_components_flyout_img_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help-components/flyout-img.jsx */ "./src/scratch/help-content/help-components/flyout-img.jsx");
/* harmony import */ var _components_flyout_block_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/flyout-block.jsx */ "./src/components/flyout-block.jsx");
/* harmony import */ var _components_Icons_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Icons.jsx */ "./src/components/Icons.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/tools */ "./src/utils/tools.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }












var HelpBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HelpBase, _React$PureComponent);

  function HelpBase(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.getHelpString = function (block_nodes) {
      var block_type = block_nodes[0].getAttribute('type');
      var title = Blockly.Blocks[block_type].meta().display_name;
      __webpack_require__("./src/scratch/help-content/help-string lazy recursive ^\\.\\/.*\\.json$")("./" + block_type + ".json").then(function (help_string) {
        _this.setState({
          help_string: help_string,
          has_help_content: true
        });
      }).catch(function () {
        return _this.setState({
          has_help_content: false
        });
      });

      _this.setState({
        title: title,
        block_type: block_type
      });
    };

    var onSequenceClick = props.onSequenceClick,
        _block_nodes = props.block_nodes;
    _this.state = {
      onSequenceClick: onSequenceClick,
      block_nodes: _block_nodes,
      help_string: null,
      has_help_content: true
    };
    return _this;
  }

  var _proto = HelpBase.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var block_nodes = this.props.block_nodes;
    this.getHelpString(block_nodes);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prev_state) {
    var block_nodes = this.props.block_nodes;

    if (prev_state !== this.props) {
      this.setState(_objectSpread({}, this.props));
      this.getHelpString(block_nodes);
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        onSequenceClick = _this$state.onSequenceClick,
        block_type = _this$state.block_type,
        title = _this$state.title,
        block_nodes = _this$state.block_nodes,
        help_string = _this$state.help_string,
        has_help_content = _this$state.has_help_content;
    var block_help_component = help_string && _help_content_config__WEBPACK_IMPORTED_MODULE_8__[block_type];
    var text_count = 0;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "flyout__help-header"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "flyout__button flyout__button-back",
      onClick: function onClick() {
        return Blockly.derivWorkspace.reshowFlyout();
      }
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Icons_jsx__WEBPACK_IMPORTED_MODULE_13__["Arrow2Icon"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "flyout__help-title"
    }, title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "flyout__help-content"
    }, block_help_component && block_help_component.map(function (component) {
      var type = component.type,
          url = component.url;

      switch (type) {
        case 'text':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_text_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
            text: help_string[text_count++]
          });

        case 'video':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_video_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            url: url
          });

        case 'image':
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_img_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
            url: url
          });

        case 'block':
          {
            return Object.keys(block_nodes).map(function (key) {
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_flyout_block_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
                key: key,
                should_center_block: true,
                block_node: block_nodes[key]
              });
            });
          }

        default:
          return null;
      }
    }), !has_help_content && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "flyout__item"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Coming soon..."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "flyout__help-footer"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "flyout__button flyout__button-previous",
      onClick: function onClick() {
        return onSequenceClick(block_type, false);
      }
    }, Object(_utils_tools__WEBPACK_IMPORTED_MODULE_15__["translate"])('Previous')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "flyout__button flyout__button-next",
      onClick: function onClick() {
        return onSequenceClick(block_type, true);
      }
    }, Object(_utils_tools__WEBPACK_IMPORTED_MODULE_15__["translate"])('Next'))));
  };

  return HelpBase;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

HelpBase.propTypes = {
  block_nodes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  onSequenceClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_14__["connect"])(function (_ref) {
  var flyout = _ref.flyout;
  return {
    onSequenceClick: flyout.onSequenceClick
  };
})(HelpBase));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.8c0348.hot-update.js.map