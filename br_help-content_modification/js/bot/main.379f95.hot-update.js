webpackHotUpdatederiv_bot("main",{

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_market.js":
/*!*******************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_market.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/helpers */ "./src/services/api/helpers/index.js");





Blockly.Blocks.trade_definition_market = {
  init: function init() {
    this.jsonInit({
      message0: 'Market: %1 Submarket: %2 Symbol: %3',
      args0: [{
        type: 'field_dropdown',
        name: 'MARKET_LIST',
        options: [['', '']]
      }, {
        type: 'field_dropdown',
        name: 'SUBMARKET_LIST',
        options: [['', '']]
      }, {
        type: 'field_dropdown',
        name: 'SYMBOL_LIST',
        options: [['', '']]
      }],
      colour: Blockly.Colours.BinaryLessPurple.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessPurple.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    this.enforceLimitations();
    var active_symbols = _services_api_helpers__WEBPACK_IMPORTED_MODULE_4__["default"].instance.active_symbols;
    var market_field = this.getField('MARKET_LIST');
    var submarket_field = this.getField('SUBMARKET_LIST');

    if (event.type === Blockly.Events.CREATE && event.ids.includes(this.id)) {
      active_symbols.retrieveActiveSymbols().then(function () {
        var markets = active_symbols.getMarketDropdownOptions();
        market_field.updateOptions(markets, null, true);
      });
    } else if (event.type === Blockly.Events.CHANGE) {
      if (event.name === 'MARKET_LIST') {
        active_symbols.retrieveActiveSymbols().then(function () {
          var submarkets = active_symbols.getSubmarketDropdownOptions(market_field.getValue());
          submarket_field.updateOptions(submarkets, null, true);
        });
      } else if (event.name === 'SUBMARKET_LIST') {
        var symbol_field = this.getField('SYMBOL_LIST');
        active_symbols.retrieveActiveSymbols().then(function () {
          var symbols = active_symbols.getSymbolDropdownOptions(submarket_field.getValue());
          symbol_field.updateOptions(symbols, null, true);
        });
      }
    }
  },
  enforceLimitations: function enforceLimitations() {
    if (!this.isDescendantOf('trade_definition')) {
      Blockly.Events.disable();
      this.unplug(false); // Unplug without reconnecting siblings

      var top_blocks = this.workspace.getTopBlocks();
      var trade_definition_block = top_blocks.find(function (block) {
        return block.type === 'trade_definition';
      }); // Reconnect self to trade definition block.

      if (trade_definition_block) {
        var connection = trade_definition_block.getLastConnectionInStatement('TRADE_OPTIONS');
        connection.connect(this.previousConnection);
      } else {
        this.dispose();
      }

      Blockly.Events.enable();
    } // These blocks cannot be disabled.


    if (this.disabled) {
      this.setDisabled(false);
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_market = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/services/api/helpers/active-symbols.js":
/*!****************************************************!*\
  !*** ./src/services/api/helpers/active-symbols.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveSymbols; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_pending_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/pending-promise */ "./src/utils/pending-promise.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var ActiveSymbols =
/*#__PURE__*/
function () {
  function ActiveSymbols(ws, trading_times) {
    this.active_symbols = {};
    this.disabled_markets = [];
    this.disabled_symbols = ['frxGBPNOK', 'frxUSDNOK', 'frxUSDNEK', 'frxUSDSEK']; // These are only forward-starting.

    this.disabled_submarkets = ['energy']; // These are only forward-starting.

    this.init_promise = new _utils_pending_promise__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this.is_initialised = false;
    this.processed_symbols = {};
    this.trading_times = trading_times;
    this.ws = ws;
  }

  var _proto = ActiveSymbols.prototype;

  _proto.retrieveActiveSymbols =
  /*#__PURE__*/
  function () {
    var _retrieveActiveSymbols = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this = this;

      var _ref, active_symbols;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.trading_times.initialise();

            case 2:
              if (!this.is_initialised) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return this.init_promise;

            case 5:
              return _context.abrupt("return", this.active_symbols);

            case 6:
              this.is_initialised = true;
              _context.next = 9;
              return this.ws.activeSymbols();

            case 9:
              _ref = _context.sent;
              active_symbols = _ref.active_symbols;
              this.active_symbols = active_symbols;
              this.processed_symbols = this.processActiveSymbols();

              this.trading_times.onMarketOpenCloseChanged = function (changes) {
                Object.keys(changes).forEach(function (symbol_name) {
                  var symbol_obj = _this.active_symbols[symbol_name];

                  if (symbol_obj) {
                    symbol_obj.exchange_is_open = changes[symbol_name];
                  }
                });
                _this.changes = changes;

                _this.processActiveSymbols();
              };

              this.init_promise.resolve();
              return _context.abrupt("return", this.active_symbols);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function retrieveActiveSymbols() {
      return _retrieveActiveSymbols.apply(this, arguments);
    }

    return retrieveActiveSymbols;
  }();

  _proto.processActiveSymbols = function processActiveSymbols() {
    var _this2 = this;

    return this.active_symbols.reduce(function (processed_symbols, symbol) {
      if (_this2.disabled_markets.includes(symbol.market) || _this2.disabled_symbols.includes(symbol.symbol) || _this2.disabled_submarkets.includes(symbol.submarket)) {
        return processed_symbols;
      }

      var isExistingValue = function isExistingValue(object, prop) {
        return Object.keys(object).findIndex(function (a) {
          return a === symbol[prop];
        }) !== -1;
      };

      if (!isExistingValue(processed_symbols, 'market')) {
        processed_symbols[symbol.market] = {
          display_name: symbol.market_display_name,
          submarkets: {}
        };
      }

      var submarkets = processed_symbols[symbol.market].submarkets;

      if (!isExistingValue(submarkets, 'submarket')) {
        submarkets[symbol.submarket] = {
          display_name: symbol.submarket_display_name,
          symbols: {}
        };
      }

      var symbols = submarkets[symbol.submarket].symbols;

      if (!isExistingValue(symbols, 'symbol')) {
        symbols[symbol.symbol] = {
          display_name: symbol.display_name,
          pip_size: ("" + symbol.pip).length - 2,
          is_active: !symbol.is_trading_suspended && symbol.exchange_is_open
        };
      }

      return processed_symbols;
    }, {});
  };

  _proto.getMarketDropdownOptions = function getMarketDropdownOptions() {
    var _this3 = this;

    var market_options = [];
    Object.keys(this.processed_symbols).forEach(function (market_name) {
      var submarkets = _this3.getSubmarketDropdownOptions(market_name);

      var is_closed = submarkets.every(function (submarket_option) {
        var symbol_options = _this3.getSymbolDropdownOptions(submarket_option[1]);

        return symbol_options.every(function (symbol_option) {
          return !_this3.trading_times.isMarketOpened(symbol_option[1]);
        });
      });

      if (!is_closed) {
        var market = _this3.processed_symbols[market_name];
        market_options.push([market.display_name, market_name]);
      }
    });
    return market_options.length === 0 ? _constants__WEBPACK_IMPORTED_MODULE_10__["default"].NOT_AVAILABLE_DROPDOWN_OPTIONS : market_options;
  };

  _proto.getSubmarketDropdownOptions = function getSubmarketDropdownOptions(market) {
    var _this4 = this;

    var submarket_options = [];
    var market_obj = this.processed_symbols[market];

    if (market_obj) {
      var submarkets = market_obj.submarkets;
      Object.keys(submarkets).forEach(function (submarket_name) {
        var symbols = _this4.getSymbolDropdownOptions(submarket_name);

        var is_closed = symbols.every(function (symbol_option) {
          return !_this4.trading_times.isMarketOpened(symbol_option[1]);
        });

        if (!is_closed) {
          submarket_options.push([submarkets[submarket_name].display_name, submarket_name]);
        }
      });
    }

    return submarket_options.length === 0 ? _constants__WEBPACK_IMPORTED_MODULE_10__["default"].NOT_AVAILABLE_DROPDOWN_OPTIONS : submarket_options;
  };

  _proto.getSymbolDropdownOptions = function getSymbolDropdownOptions(submarket) {
    var _this5 = this;

    var symbol_options = Object.keys(this.processed_symbols).reduce(function (accumulator, market_name) {
      var submarkets = _this5.processed_symbols[market_name].submarkets;
      Object.keys(submarkets).forEach(function (submarket_name) {
        if (submarket_name === submarket) {
          var symbols = submarkets[submarket_name].symbols;
          Object.keys(symbols).forEach(function (symbol_name) {
            if (_this5.trading_times.isMarketOpened(symbol_name)) {
              accumulator.push([symbols[symbol_name].display_name, symbol_name]);
            }
          });
        }
      });
      return accumulator;
    }, []);
    return symbol_options.length === 0 ? _constants__WEBPACK_IMPORTED_MODULE_10__["default"].NOT_AVAILABLE_DROPDOWN_OPTIONS : symbol_options;
  };

  return ActiveSymbols;
}();



/***/ }),

/***/ "./src/services/api/helpers/index.js":
/*!*******************************************!*\
  !*** ./src/services/api/helpers/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-time */ "./src/services/api/helpers/server-time.js");
/* harmony import */ var _trading_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trading-times */ "./src/services/api/helpers/trading-times.js");
/* harmony import */ var _contracts_for__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts-for */ "./src/services/api/helpers/contracts-for.js");
/* harmony import */ var _active_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-symbols */ "./src/services/api/helpers/active-symbols.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ApiHelpers =
/*#__PURE__*/
function () {
  function ApiHelpers(root_store) {
    this.root_store = root_store;
    this.server_time = new _server_time__WEBPACK_IMPORTED_MODULE_0__["default"](this.root_store.ws);
    this.trading_times = new _trading_times__WEBPACK_IMPORTED_MODULE_1__["default"](this.root_store.ws, this.server_time);
    this.contracts_for = new _contracts_for__WEBPACK_IMPORTED_MODULE_2__["default"](this.root_store.ws, this.server_time);
    this.active_symbols = new _active_symbols__WEBPACK_IMPORTED_MODULE_3__["default"](this.root_store.ws, this.trading_times);
  }

  ApiHelpers.setInstance = function setInstance(root_store) {
    if (!this.singleton) {
      this.singleton = new ApiHelpers(root_store);
    }
  };

  _createClass(ApiHelpers, null, [{
    key: "instance",
    get: function get() {
      return this.singleton;
    }
  }]);

  return ApiHelpers;
}();

ApiHelpers.singleton = null;
/* harmony default export */ __webpack_exports__["default"] = (ApiHelpers);

/***/ }),

/***/ "./src/services/api/helpers/server-time.js":
/*!*************************************************!*\
  !*** ./src/services/api/helpers/server-time.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerTime; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_pending_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pending-promise */ "./src/utils/pending-promise.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ServerTime =
/*#__PURE__*/
function () {
  function ServerTime(ws) {
    this.clock_started = false;
    this.init_promise = new _utils_pending_promise__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.ws = ws;
    this.init();
  }

  var _proto = ServerTime.prototype;

  _proto.init =
  /*#__PURE__*/
  function () {
    var _init = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.clock_started) {
                _context.next = 6;
                break;
              }

              this.clock_started = true;
              clearInterval(this.getTimeInterval);
              _context.next = 5;
              return this.requestTime();

            case 5:
              this.getTimeInterval = setInterval(this.requestTime.bind(this), 30000);

            case 6:
              return _context.abrupt("return", this.init_promise);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.requestTime =
  /*#__PURE__*/
  function () {
    var _requestTime = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var time_response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.client_time_at_request = this.getUTCEpoch(new Date());
              _context2.next = 3;
              return this.ws.sendRequest({
                time: 1
              });

            case 3:
              time_response = _context2.sent;
              this.processTimeResponse(time_response);
              this.init_promise.resolve();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function requestTime() {
      return _requestTime.apply(this, arguments);
    }

    return requestTime;
  }();

  _proto.processTimeResponse = function processTimeResponse(response) {
    var _this = this;

    if (response.error) {
      this.clock_started = false;
    }

    if (!this.clock_started) {
      this.init();
      return;
    }

    var server_time = response.time;
    var client_time_at_response = this.getUTCEpoch(new Date());
    this.server_time_at_response = server_time + (client_time_at_response - this.client_time_at_request) / 2;

    var updateTime = function updateTime() {
      _this.server_time_at_response += 1;
    };

    clearInterval(this.updateTimeInterval);
    this.updateTimeInterval = setInterval(updateTime, 1000);
  };

  _proto.getEpoch = function getEpoch() {
    if (this.server_time_at_response) {
      return this.server_time_at_response;
    }

    throw new Error('Server time is undefined');
  };

  _proto.getLocalDate = function getLocalDate() {
    return this.getLocalDateByEpoch(this.getEpoch());
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.getLocalDateByEpoch = function getLocalDateByEpoch(epoch) {
    return new Date(epoch * 1000);
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.getUTCEpoch = function getUTCEpoch(date) {
    return date.getTime() / 1000 - date.getTimezoneOffset() * 60;
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.getUTCDate = function getUTCDate(epoch) {
    var utc_date = new Date(epoch * 1000).toISOString();
    return utc_date.substring(0, 19);
  };

  return ServerTime;
}();



/***/ })

})
//# sourceMappingURL=main.379f95.hot-update.js.map