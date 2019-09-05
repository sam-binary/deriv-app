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

/***/ }),

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
/* harmony import */ var _help_components_flyout_video_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help-components/flyout-video.jsx */ "./src/scratch/help-content/help-components/flyout-video.jsx");
/* harmony import */ var _help_components_flyout_text_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help-components/flyout-text.jsx */ "./src/scratch/help-content/help-components/flyout-text.jsx");
/* harmony import */ var _help_components_flyout_img_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help-components/flyout-img.jsx */ "./src/scratch/help-content/help-components/flyout-img.jsx");
/* harmony import */ var _components_flyout_block_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/flyout-block.jsx */ "./src/components/flyout-block.jsx");
/* harmony import */ var _components_Icons_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Icons.jsx */ "./src/components/Icons.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/tools */ "./src/utils/tools.js");
/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/const */ "./src/constants/const.js");







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
    }, block_help_component && block_help_component.map(function (component, index) {
      var type = component.type,
          url = component.url;
      var text = help_string.text;

      switch (type) {
        case _constants_const__WEBPACK_IMPORTED_MODULE_16__["default"].help.TEXT:
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_text_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: block_type + "_" + index,
            text: text[text_count++]
          });

        case _constants_const__WEBPACK_IMPORTED_MODULE_16__["default"].help.VIDEO:
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_video_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: block_type + "_" + index,
            url: url
          });

        case _constants_const__WEBPACK_IMPORTED_MODULE_16__["default"].help.IMAGE:
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_help_components_flyout_img_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: block_type + "_" + index,
            url: url
          });

        case _constants_const__WEBPACK_IMPORTED_MODULE_16__["default"].help.BLOCK:
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

/***/ }),

/***/ "./src/scratch/help-content/help-content.config.js":
/*!*********************************************************!*\
  !*** ./src/scratch/help-content/help-content.config.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/const */ "./src/constants/const.js");

var _config$help = _constants_const__WEBPACK_IMPORTED_MODULE_0__["default"].help,
    TEXT = _config$help.TEXT,
    VIDEO = _config$help.VIDEO,
    IMAGE = _config$help.IMAGE,
    BLOCK = _config$help.BLOCK;
exports = {
  math_change: [{
    type: TEXT
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/Bb0HnaYNUx4'
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: TEXT
  }, {
    type: BLOCK
  }],
  math_arithmetic: [{
    type: VIDEO,
    url: 'https://www.youtube.com/embed/Bb0HnaYNUx4'
  }, {
    type: TEXT
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: BLOCK
  }],
  math_number: [{
    type: VIDEO,
    url: 'https://www.youtube.com/embed/Bb0HnaYNUx4'
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: BLOCK
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }],
  math_random_float: [{
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: BLOCK
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }],
  math_random_int: [{
    type: TEXT
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: BLOCK
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }],
  variables_get: [{
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }, {
    type: TEXT
  }, {
    type: VIDEO,
    url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0'
  }, {
    type: BLOCK
  }, {
    type: TEXT
  }, {
    type: IMAGE,
    url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false'
  }]
};

/***/ })

})
//# sourceMappingURL=main.c08c0a.hot-update.js.map