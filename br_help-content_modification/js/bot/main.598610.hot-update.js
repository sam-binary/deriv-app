webpackHotUpdatederiv_bot("main",{

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
              console.log(this.is_initialised); // eslint-disable-line

              if (!this.is_initialised) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return this.init_promise;

            case 6:
              return _context.abrupt("return", this.active_symbols);

            case 7:
              this.is_initialised = true;
              _context.next = 10;
              return this.ws.activeSymbols();

            case 10:
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

            case 17:
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



/***/ })

})
//# sourceMappingURL=main.598610.hot-update.js.map