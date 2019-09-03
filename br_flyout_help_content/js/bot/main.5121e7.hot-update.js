webpackHotUpdatederiv_bot("main",{

/***/ "./src/stores/flyout-store.js":
/*!************************************!*\
  !*** ./src/stores/flyout-store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlyoutStore; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
/* harmony import */ var core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");







var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

/* eslint-disable no-underscore-dangle */


var FlyoutStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec5 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function FlyoutStore() {
    this.block_listeners = [];
    this.block_workspaces = [];
    this.flyout_min_width = 400;

    _initializerDefineProperty(this, "flyout_content", _descriptor, this);

    _initializerDefineProperty(this, "flyout_width", _descriptor2, this);

    _initializerDefineProperty(this, "is_visible", _descriptor3, this);

    _initializerDefineProperty(this, "is_search_flyout", _descriptor4, this);
  }

  var _proto = FlyoutStore.prototype;

  /**
   * Parses XML contents passed by Blockly.Toolbox. Supports all default
   * Blockly.Flyout elements i.e. <block>, <label>, <button> in their
   * original format, e.g. <label text="Hello World" />
   * @param {Element[]} xml_list list of XML nodes
   * @memberof FlyoutStore
   */
  _proto.setContents = function setContents(xml_list) {
    var _this$flyout_content;

    var processed_xml = xml_list;
    this.block_listeners.forEach(function (listener) {
      return Blockly.unbindEvent_(listener);
    });
    this.block_workspaces.forEach(function (workspace) {
      return workspace.dispose();
    });
    this.block_listeners = [];
    this.block_workspaces = [];

    if (this.is_search_flyout) {
      var no_result = !xml_list.length;
      processed_xml = [];

      if (no_result) {
        var label = document.createElement('label');
        label.setAttribute('text', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_7__["translate"])('No Block Found'));
        processed_xml.push(label);
      } else {
        var _label = document.createElement('label');

        _label.setAttribute('text', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_7__["translate"])('Result(s)'));

        processed_xml.push(_label);
      }

      processed_xml = processed_xml.concat(xml_list);
    }

    this.flyout_content = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])([]);

    (_this$flyout_content = this.flyout_content).push.apply(_this$flyout_content, processed_xml);

    this.setFlyoutWidth(processed_xml);
    this.setVisibility(true);
  }
  /**
   * Sets whether the flyout is visible or not.
   * @param {boolean} is_visible
   * @memberof FlyoutStore
   */
  ;

  _proto.setVisibility = function setVisibility(is_visible) {
    this.is_visible = is_visible;

    if (!is_visible) {
      this.flyout_content = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])([]);
    }
  }
  /**
   * Sets whether the flyout is search or not.
   * @param {boolean} is_search
   * @memberof FlyoutStore
   */
  ;

  _proto.setIsSearchFlyout = function setIsSearchFlyout(is_search) {
    this.is_search_flyout = is_search;
  }
  /**
   * Intialises a workspace unique to the passed block_node
   * @param {Element} el_block_workspace Element where Blockly.Workspace will be mounted on
   * @param {Element} block_node DOM of a Blockly.Block
   * @memberof FlyoutStore
   */
  ;

  _proto.initBlockWorkspace = function initBlockWorkspace(el_block_workspace, block_node) {
    var workspace = Blockly.inject(el_block_workspace, {
      css: false,
      media: __webpack_require__.p + "media/",
      // eslint-disable-line
      move: {
        scrollbars: false,
        drag: true,
        wheel: false
      },
      sounds: false
    });
    workspace.isFlyout = true;
    workspace.targetWorkspace = Blockly.derivWorkspace;
    var block = Blockly.Xml.domToBlock(block_node, workspace);
    block.isInFlyout = true; // Some blocks have hats, consider their height.

    var extra_spacing = block.startHat_ ? Blockly.BlockSvg.START_HAT_HEIGHT : 0;
    var block_workspace_height = Number.parseInt(block_node.getAttribute('height')) + extra_spacing + 10; // Update block workspace widths to accommodate block widths.

    el_block_workspace.style.height = block_workspace_height + "px";
    el_block_workspace.style.width = this.flyout_width - 55 + "px"; // Move block away from side so it's displayed completely.

    var dx = 1;
    var dy = 5 + extra_spacing;
    block.moveBy(dx, dy); // Use original Blockly flyout functionality to create block on drag.

    var blockly_flyout = Blockly.derivWorkspace.toolbox_.flyout_;
    this.block_listeners.push(Blockly.bindEventWithChecks_(block.getSvgRoot(), 'mousedown', null, function (event) {
      blockly_flyout.blockMouseDown_(block)(event);
    }));
    this.block_workspaces.push(workspace);
    this.block_workspaces.forEach(Blockly.svgResize);
  }
  /**
   * Walks through xmlList and finds width of the longest block while setting
   * height and width (in workspace pixels) attributes on each of the block nodes.
   * @param {Element[]} xmlList
   * @memberof FlyoutStore
   */
  ;

  _proto.setFlyoutWidth = function setFlyoutWidth(xmlList) {
    var longest_block_width = 0;
    xmlList.forEach(function (node) {
      var tag_name = node.tagName.toUpperCase();

      if (tag_name === Blockly.Xml.NODE_BLOCK) {
        var block_hw = Blockly.Block.getDimensions(node);
        node.setAttribute('width', block_hw.width);
        node.setAttribute('height', block_hw.height);
        longest_block_width = Math.max(longest_block_width, block_hw.width);
      }
    });
    this.flyout_width = Math.max(this.flyout_min_width, longest_block_width + 60);
  };

  return FlyoutStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "flyout_content", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "flyout_width", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return this.flyout_min_width;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "is_visible", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "is_search_flyout", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setContents", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setContents"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setVisibility", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setVisibility"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setIsSearchFlyout", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "setIsSearchFlyout"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initBlockWorkspace", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "initBlockWorkspace"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFlyoutWidth", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setFlyoutWidth"), _class.prototype)), _class));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.5121e7.hot-update.js.map