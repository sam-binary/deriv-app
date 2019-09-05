webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/status-progress.jsx":
/*!********************************************!*\
  !*** ./src/components/status-progress.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
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
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var StatusProgress =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(StatusProgress, _React$Component);

  function StatusProgress(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getStatusDetail = function () {
      var status = _this.state.status;
      var buy_stage_class = '';
      var succeed_stage_class = '';
      var closed_stage_class = '';
      var status_string = '';

      switch (status) {
        case 'buy':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__["translate"])('Attempting to Buy');
          buy_stage_class = 'active';
          break;

        case 'succeed':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__["translate"])('Buy Succeeded');
          buy_stage_class = 'completed';
          succeed_stage_class = 'active';
          break;

        case 'closed':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__["translate"])('Contract Closed');
          buy_stage_class = succeed_stage_class = 'completed';
          closed_stage_class = 'active';
          break;

        default:
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__["translate"])('Bot is not running');
          break;
      }

      _this.setState({
        buy_stage_class: buy_stage_class,
        succeed_stage_class: succeed_stage_class,
        closed_stage_class: closed_stage_class,
        status_string: status_string
      });

      console.log(_this.state); // eslint-disable-line
    };

    var _status = props.status;
    _this.state = {
      status: _status,
      buy_stage_class: '',
      succeed_stage_class: '',
      closed_stage_class: '',
      status_string: ''
    };
    return _this;
  }

  var _proto = StatusProgress.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.getStatusDetail();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prev_state) {
    if (prev_state !== this.props) {
      this.setState(_objectSpread({}, this.props));
      this.getStatusDetail();
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        buy_stage_class = _this$state.buy_stage_class,
        succeed_stage_class = _this$state.succeed_stage_class,
        closed_stage_class = _this$state.closed_stage_class,
        status_string = _this$state.status_string;
    console.log(succeed_stage_class); // eslint-disable-line

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "toolbar__group toolbar__group-progress"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "toolbar__group-text"
    }, status_string), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "toolbar__progress"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "toolbar__progress-line"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "toolbar__progress-bar toolbar__progress-" + status_string
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "circular-wrapper " + buy_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "dynamic-circle"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "circular-wrapper " + succeed_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "dynamic-circle"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "circular-wrapper " + closed_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "dynamic-circle"
    }))));
  };

  return StatusProgress;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

StatusProgress.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (StatusProgress);

/***/ })

})
//# sourceMappingURL=main.165228.hot-update.js.map