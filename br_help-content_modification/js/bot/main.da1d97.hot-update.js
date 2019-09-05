webpackHotUpdatederiv_bot("main",{

/***/ "./src/stores/toolbar-store.js":
/*!*************************************!*\
  !*** ./src/stores/toolbar-store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToolbarStore; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/observer */ "./src/utils/observer.js");
/* harmony import */ var _scratch_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../scratch/utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");













var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _temp;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }







var ToolbarStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec5 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec6 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec7 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec8 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec9 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec10 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec11 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec12 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec13 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec14 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec15 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, _dec16 = mobx__WEBPACK_IMPORTED_MODULE_13__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function ToolbarStore(ws) {
    var _this = this;

    _initializerDefineProperty(this, "has_flyout_open", _descriptor, this);

    _initializerDefineProperty(this, "load_modal_open", _descriptor2, this);

    _initializerDefineProperty(this, "save_modal_open", _descriptor3, this);

    _initializerDefineProperty(this, "saveload_type", _descriptor4, this);

    _initializerDefineProperty(this, "file_name", _descriptor5, this);

    _initializerDefineProperty(this, "onStartClick", _descriptor6, this);

    _initializerDefineProperty(this, "onSaveLoadTypeChange", _descriptor7, this);

    _initializerDefineProperty(this, "onResetClick", _descriptor8, this);

    _initializerDefineProperty(this, "onBrowseClick", _descriptor9, this);

    _initializerDefineProperty(this, "onLoadClick", _descriptor10, this);

    _initializerDefineProperty(this, "handleFileChange", _descriptor11, this);

    _initializerDefineProperty(this, "closeLoadModal", _descriptor12, this);

    _initializerDefineProperty(this, "onSaveClick", _descriptor13, this);

    _initializerDefineProperty(this, "onConfirmSave", _descriptor14, this);

    _initializerDefineProperty(this, "closeSaveModal", _descriptor15, this);

    _initializerDefineProperty(this, "onGoogleDriveClick", _descriptor16, this);

    _initializerDefineProperty(this, "onUndoClick", _descriptor17, this);

    _initializerDefineProperty(this, "onRedoClick", _descriptor18, this);

    _initializerDefineProperty(this, "onZoomInClick", _descriptor19, this);

    _initializerDefineProperty(this, "onZoomOutClick", _descriptor20, this);

    _initializerDefineProperty(this, "onSortClick", _descriptor21, this);

    this.zoomOnPlusMinus = function (zoomIn) {
      var metrics = Blockly.derivWorkspace.getMetrics();

      if (zoomIn) {
        Blockly.derivWorkspace.zoom(metrics.viewWidth / 2, metrics.viewHeight / 2, 1);
      } else {
        Blockly.derivWorkspace.zoom(metrics.viewWidth / 2, metrics.viewHeight / 2, -1);
      }
    };

    this.loadBlocks = function (xml, dropEvent) {
      if (dropEvent === void 0) {
        dropEvent = {};
      }

      if (!Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["strategyHasValidTradeTypeCategory"])(xml)) return;
      if (_this.marketsWereRemoved(xml)) return;
      var variables = xml.getElementsByTagName('variables');

      if (variables.length > 0) {
        Blockly.Xml.domToVariables(variables[0], Blockly.mainWorkspace);
      }

      Blockly.Events.setGroup('load');
      Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["addLoadersFirst"])(xml).then(function (loaders) {
        var addedBlocks = [].concat(loaders, Array.from(xml.children).map(function (block) {
          return Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["addDomAsBlock"])(block);
        }).filter(function (b) {
          return b;
        }));
        Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["cleanUpOnLoad"])(addedBlocks, dropEvent);
        Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["fixCollapsedBlocks"])();
        _utils_observer__WEBPACK_IMPORTED_MODULE_15__["observer"].emit('ui.log.success', Object(_utils_tools__WEBPACK_IMPORTED_MODULE_17__["translate"])('Blocks are loaded successfully'));
      }, function (e) {
        throw e;
      });
    };

    this.loadWorkspace = function (xml) {
      if (!Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["strategyHasValidTradeTypeCategory"])(xml)) return;
      if (_this.marketsWereRemoved(xml)) return;
      Blockly.Events.setGroup('load');
      Blockly.mainWorkspace.clear();
      Array.from(xml.children).forEach(function (block) {
        Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["backwardCompatibility"])(block);
      });
      Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["fixArgumentAttribute"])(xml);
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
      Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["addLoadersFirst"])(xml).then(function () {
        Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["fixCollapsedBlocks"])();
        Blockly.Events.setGroup(false);
        _utils_observer__WEBPACK_IMPORTED_MODULE_15__["observer"].emit('ui.log.success', Object(_utils_tools__WEBPACK_IMPORTED_MODULE_17__["translate"])('Blocks are loaded successfully'));
      }, function (e) {
        Blockly.Events.setGroup(false);
        throw e;
      });
    };

    this.marketsWereRemoved = function (xml) {
      if (!Array.from(xml.children).every(function (block) {
        return !Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["removeUnavailableMarkets"])(block);
      })) {
        if (window.trackJs) {
          trackJs.track('Invalid financial market');
        }

        alert('This strategy is not available in your country');
        return true;
      }

      return false;
    };

    this.readFile = function (f, dropEvent) {
      if (dropEvent === void 0) {
        dropEvent = {};
      }

      var reader = new FileReader();

      reader.onload = function (e) {
        return _this.load(e.target.result, dropEvent);
      };

      reader.readAsText(f);
    };

    this.ws = ws;
  }

  var _proto = ToolbarStore.prototype;

  /* eslint-disable class-methods-use-this */
  _proto.load = function load(blockStr, dropEvent) {
    if (blockStr === void 0) {
      blockStr = '';
    }

    if (dropEvent === void 0) {
      dropEvent = {};
    }

    var unrecognisedMsg = function unrecognisedMsg() {
      return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_17__["translate"])('Unrecognized file format');
    };

    try {
      var xmlDoc = new DOMParser().parseFromString(blockStr, 'application/xml');

      if (xmlDoc.getElementsByTagName('parsererror').length) {
        throw new Error();
      }
    } catch (err) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["createErrorAndEmit"])('FileLoad', unrecognisedMsg());
    }

    var xml;

    try {
      xml = Blockly.Xml.textToDom(blockStr);
    } catch (e) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["createErrorAndEmit"])('FileLoad', unrecognisedMsg());
    }

    var blocklyXml = xml.querySelectorAll('block');

    if (!blocklyXml.length) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["createErrorAndEmit"])('FileLoad', 'XML file contains unsupported elements. Please check or modify file.');
    }

    blocklyXml.forEach(function (block) {
      var blockType = block.getAttribute('type');

      if (!Object.keys(Blockly.Blocks).includes(blockType)) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["createErrorAndEmit"])('FileLoad', 'XML file contains unsupported elements. Please check or modify file');
      }
    });

    try {
      if (xml.hasAttribute('collection') && xml.getAttribute('collection') === 'true') {
        this.loadBlocks(xml, dropEvent);
      } else {
        this.loadWorkspace(xml);
      }
    } catch (e) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["createErrorAndEmit"])('FileLoad', Object(_utils_tools__WEBPACK_IMPORTED_MODULE_17__["translate"])('Unable to load the block file'));
    }
  };

  _createClass(ToolbarStore, [{
    key: "openLoadModal",
    get: function get() {
      return this.load_modal_open;
    }
  }, {
    key: "openSaveModal",
    get: function get() {
      return this.save_modal_open;
    }
  }]);

  return ToolbarStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "has_flyout_open", [mobx__WEBPACK_IMPORTED_MODULE_13__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "load_modal_open", [mobx__WEBPACK_IMPORTED_MODULE_13__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "save_modal_open", [mobx__WEBPACK_IMPORTED_MODULE_13__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "saveload_type", [mobx__WEBPACK_IMPORTED_MODULE_13__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'local';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "file_name", [mobx__WEBPACK_IMPORTED_MODULE_13__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'binary-bot';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "onStartClick", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.has_flyout_open = !_this2.has_flyout_open;
      var toolbox = Blockly.derivWorkspace.toolbox_;

      if (_this2.has_flyout_open) {
        toolbox.removeStyle('hidden');
      } else {
        toolbox.addStyle('hidden');
      }
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "onSaveLoadTypeChange", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (e) {
      var value = e.target.value;
      _this3.saveload_type = value;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "onResetClick", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return (
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var workspace;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                workspace = Blockly.derivWorkspace; // eslint-disable-next-line

                Blockly.Events.setGroup('reset');
                workspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(workspace.blocksXmlStr), workspace);
                Blockly.Events.setGroup(false);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    );
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "onBrowseClick", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.load_modal_open = true;
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "onLoadClick", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      if (_this5.saveload_type === 'google-drive') {// TO DO
      } else if (_this5.saveload_type === 'local') {
        var upload = document.getElementById('files');
        upload.click();
      }
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "handleFileChange", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (e) {
      var files, dropEvent;

      if (e.type === 'drop') {
        e.stopPropagation();
        e.preventDefault();
        files = e.dataTransfer.files;
        dropEvent = e;
      } else {
        files = e.target.files;
      }

      files = Array.from(files);
      files.forEach(function (file) {
        if (file.type.match('text/xml')) {
          _this6.readFile(file, dropEvent);
        } else {
          _utils_observer__WEBPACK_IMPORTED_MODULE_15__["observer"].emit('ui.log.info', Object(_utils_tools__WEBPACK_IMPORTED_MODULE_17__["translate"])('File is not supported:') + " " + file.name);
        }
      });
      e.target.value = '';

      _this6.closeLoadModal();
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "closeLoadModal", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function () {
      _this7.load_modal_open = false;
    };
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "onSaveClick", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function () {
      _this8.save_modal_open = true;
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "onConfirmSave", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      if (_this9.saveload_type === 'google-drive') {// TO DO
      } else if (_this9.saveload_type === 'local') {
        var file_name = document.getElementById('save-filename').value || 'binary-bot';
        var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        Object(_scratch_utils__WEBPACK_IMPORTED_MODULE_16__["cleanBeforeExport"])(xml);
        var data = Blockly.Xml.domToPrettyText(xml);
        var blob = new Blob([data], {
          type: 'text/xml;charset=utf-8'
        });
        file_saver__WEBPACK_IMPORTED_MODULE_12___default.a.saveAs(blob, file_name);
      }

      _this9.closeSaveModal();
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "closeSaveModal", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function () {
      _this10.save_modal_open = false;
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "onGoogleDriveClick", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function () {
      var symbol = _this11.ws.activeSymbols({
        skip_cache_update: true
      }); // eslint-disable-next-line


      console.log(symbol);
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "onUndoClick", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function () {
      Blockly.Events.setGroup('undo');
      Blockly.mainWorkspace.undo();
      Blockly.Events.setGroup(false);
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "onRedoClick", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function () {
      Blockly.mainWorkspace.undo(true);
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "onZoomInClick", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function () {
      _this12.zoomOnPlusMinus(true);
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "onZoomOutClick", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function () {
      _this13.zoomOnPlusMinus(false);
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "onSortClick", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function () {
      Blockly.Events.setGroup(true);
      var topBlocks = Blockly.derivWorkspace.getTopBlocks(true);
      var cursorY = 0;
      topBlocks.forEach(function (block) {
        if (block.getSvgRoot().style.display !== 'none') {
          var xy = block.getRelativeToSurfaceXY();
          block.moveBy(-xy.x, cursorY - xy.y);
          block.snapToGrid();
          cursorY = block.getRelativeToSurfaceXY().y + block.getHeightWidth().height + Blockly.BlockSvg.MIN_BLOCK_Y;
        }
      });
      Blockly.Events.setGroup(false); // Fire an event to allow scrollbars to resize.

      Blockly.derivWorkspace.resizeContents();
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "openLoadModal", [mobx__WEBPACK_IMPORTED_MODULE_13__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "openLoadModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openSaveModal", [mobx__WEBPACK_IMPORTED_MODULE_13__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "openSaveModal"), _class.prototype)), _class));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.da1d97.hot-update.js.map