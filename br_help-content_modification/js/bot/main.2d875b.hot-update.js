webpackHotUpdatederiv_bot("main",{

/***/ "./src/constants/const.js":
/*!********************************!*\
  !*** ./src/constants/const.js ***!
  \********************************/
/*! exports provided: updateConfigCurrencies, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigCurrencies", function() { return updateConfigCurrencies; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");
/* harmony import */ var _utils_lang_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/lang/lang */ "./src/utils/lang/lang.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



Object(_utils_lang_lang__WEBPACK_IMPORTED_MODULE_4__["load"])();
var CRYPTO_CURRENCIES = ['BTC', 'ETH', 'LTC', 'BCH'];
var config = {
  lists: {
    PAYOUTTYPE: [// [translate('Payout'), 'payout'],
    [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Stake'), 'stake']],
    CRYPTO_CURRENCIES: CRYPTO_CURRENCIES,
    DETAILS: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('statement'), '1'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('ask price'), '2'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('payout'), '3'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('profit'), '4'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('contract type'), '5'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('entry spot'), '6'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('entry value'), '7'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('exit spot'), '8'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('exit value'), '9'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('barrier'), '10'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('result'), '11']],
    CHECK_RESULT: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Win'), 'win'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Loss'), 'loss']],
    CHECK_DIRECTION: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Rise'), 'rise'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Fall'), 'fall'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('No Change'), '']],
    BALANCE_TYPE: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('string'), 'STR'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('number'), 'NUM']],
    NOTIFICATION_TYPE: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('green'), 'success'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('blue'), 'info'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('yellow'), 'warn'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('red'), 'error']],
    NOTIFICATION_SOUND: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Silent'), 'silent'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Announcement'), 'announcement'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Earned money'), 'earned-money'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Job done'), 'job-done'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Error'), 'error'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Severe error'), 'severe-error']]
  },
  opposites: {
    RISEFALL: [{
      CALL: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Rise')
    }, {
      PUT: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Fall')
    }],
    RISEFALLEQUALS: [{
      CALLE: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Rise Equals')
    }, {
      PUTE: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Fall Equals')
    }],
    HIGHERLOWER: [{
      CALL: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Higher')
    }, {
      PUT: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Lower')
    }],
    TOUCHNOTOUCH: [{
      ONETOUCH: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Touch')
    }, {
      NOTOUCH: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('No Touch')
    }],
    ENDSINOUT: [{
      EXPIRYRANGE: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Ends In')
    }, {
      EXPIRYMISS: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Ends Out')
    }],
    STAYSINOUT: [{
      RANGE: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Stays In')
    }, {
      UPORDOWN: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Goes Out')
    }],
    ASIANS: [{
      ASIANU: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Asian Up')
    }, {
      ASIAND: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Asian Down')
    }],
    MATCHESDIFFERS: [{
      DIGITMATCH: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Matches')
    }, {
      DIGITDIFF: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Differs')
    }],
    EVENODD: [{
      DIGITEVEN: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Even')
    }, {
      DIGITODD: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Odd')
    }],
    OVERUNDER: [{
      DIGITOVER: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Over')
    }, {
      DIGITUNDER: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Under')
    }],
    HIGHLOWTICKS: [{
      TICKHIGH: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('High Tick')
    }, {
      TICKLOW: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Low Tick')
    }],
    RESET: [{
      RESETCALL: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Reset Call')
    }, {
      RESETPUT: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Reset Put')
    }],
    RUNS: [{
      RUNHIGH: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Only Ups')
    }, {
      RUNLOW: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Only Downs')
    }]
  },
  barrierTypes: [["Offset\xA0+", '+'], ["Offset\xA0-", '-']],
  ohlcFields: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Open'), 'open'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('High'), 'high'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Low'), 'low'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Close'), 'close'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Open Time'), 'epoch']],
  candleIntervals: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Default'), 'default'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('1 minute'), '60'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('2 minutes'), '120'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('3 minutes'), '180'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('5 minutes'), '300'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('10 minutes'), '600'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('15 minutes'), '900'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('30 minutes'), '1800'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('1 hour'), '3600'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('2 hours'), '7200'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('4 hours'), '14400'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('8 hours'), '28800'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('1 day'), '86400']],
  mainBlocks: ['trade_definition', 'before_purchase', 'after_purchase', 'during_purchase'],
  conditionsCategory: {
    callput: ['risefall', 'higherlower'],
    callputequal: ['risefallequals'],
    touchnotouch: ['touchnotouch'],
    endsinout: ['endsinout'],
    staysinout: ['staysinout'],
    asian: ['asians'],
    digits: ['matchesdiffers', 'evenodd', 'overunder'],
    highlowticks: ['highlowticks'],
    reset: ['reset'],
    runs: ['runs']
  },
  conditionsCategoryName: {
    callput: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Up/Down'),
    callputequal: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Up/Down Equals'),
    asian: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Asians'),
    digits: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Digits'),
    touchnotouch: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Touch/No Touch'),
    endsinout: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Ends In/Out'),
    staysinout: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Stays In/Goes Out'),
    highlowticks: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('High/Low Ticks'),
    reset: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Reset Call/Reset Put'),
    runs: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Only Ups/Only Downs')
  },
  conditions: ['risefall', 'risefallequals', 'higherlower', 'touchnotouch', 'endsinout', 'staysinout', 'asians', 'matchesdiffers', 'evenodd', 'overunder'],
  barrierCategories: {
    euro_atm: ['callput', 'risefall', 'risefallequals'],
    euro_non_atm: ['endsinout', 'higherlower'],
    american: ['staysinout', 'touchnotouch', 'highlowticks', 'runs'],
    non_financial: ['digits', 'overunder', 'evenodd', 'matchesdiffers'],
    asian: ['asian'],
    reset: ['reset'],
    lookback: ['lookback']
  },
  scopeNames: {
    before_purchase: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Before Purchase'),
    during_purchase: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('During Purchase'),
    after_purchase: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('After Purchase'),
    tick_analysis: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Tick Analysis'),
    timeout: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Run After n Seconds'),
    interval: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Run Every n Seconds')
  },
  bbResult: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('upper'), '1'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('middle'), '0'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('lower'), '2']],
  macdFields: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Histogram'), '0'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('MACD'), '1'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Signal'), '2']],
  gd: {
    cid: '646610722767-7ivdbunktgtnumj23en9gkecbgtf2ur7.apps.googleusercontent.com',
    aid: 'binarybot-237009',
    api: 'AIzaSyBieTeLip_lVQZUimIuJypU1kJyqOvQRgc'
  },
  help: {
    TEXT: 'text',
    VIDEO: 'video',
    IMAGE: 'image',
    BLOCK: 'block'
  }
};
function updateConfigCurrencies() {
  return _updateConfigCurrencies.apply(this, arguments);
}

function _updateConfigCurrencies() {
  _updateConfigCurrencies = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: Retrieve currencies from API
            config.lists.CURRENCY = ['USD', 'EUR', 'GBP', 'AUD'].concat(CRYPTO_CURRENCIES).map(function (c) {
              return [c, c];
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateConfigCurrencies.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ })

})
//# sourceMappingURL=main.2d875b.hot-update.js.map