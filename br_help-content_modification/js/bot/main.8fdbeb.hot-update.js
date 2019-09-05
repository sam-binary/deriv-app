webpackHotUpdatederiv_bot("main",{

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
              console.log(this.init_promise); // eslint-disable-line

              return _context.abrupt("return", this.init_promise);

            case 8:
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
//# sourceMappingURL=main.8fdbeb.hot-update.js.map