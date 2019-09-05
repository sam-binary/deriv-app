webpackHotUpdatederiv_bot("main",{

/***/ "./src/components/status-progress.jsx":
/*!********************************************!*\
  !*** ./src/components/status-progress.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var StatusProgress =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StatusProgress, _React$PureComponent);

  function StatusProgress(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.getStatusDetail = function () {
      var status = _this.props.status;
      var buy_stage_class = '';
      var succeed_stage_class = '';
      var closed_stage_class = '';
      var status_string = '';

      switch (status) {
        case 'buy':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Attempting to Buy');
          buy_stage_class = 'active';
          break;

        case 'succeed':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Buy Succeeded');
          buy_stage_class = 'completed';
          succeed_stage_class = 'active';
          break;

        case 'closed':
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Contract Closed');
          buy_stage_class = succeed_stage_class = 'completed';
          closed_stage_class = 'active';
          break;

        default:
          status_string = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Bot is not running');
          break;
      }

      _this.setState({
        buy_stage_class: buy_stage_class,
        succeed_stage_class: succeed_stage_class,
        closed_stage_class: closed_stage_class,
        status_string: status_string
      });
    };

    _this.state = {
      status_string: 'Bot is not running'
    };
    return _this;
  }

  var _proto = StatusProgress.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.getStatusDetail();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prev_state) {
    if (prev_state !== this.props) {
      this.getStatusDetail();
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        buy_stage_class = _this$state.buy_stage_class,
        succeed_stage_class = _this$state.succeed_stage_class,
        closed_stage_class = _this$state.closed_stage_class,
        status_string = _this$state.status_string;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar__group toolbar__group-progress"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "toolbar__group-text"
    }, status_string), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar__progress"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar__progress-line"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "toolbar__progress-bar toolbar__progress-" + status_string
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circular-wrapper " + buy_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "dynamic-circle"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circular-wrapper " + succeed_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "dynamic-circle"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circular-wrapper " + closed_stage_class
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "static-circle"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "dynamic-circle"
    }))));
  };

  return StatusProgress;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

StatusProgress.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (StatusProgress);

/***/ })

})
//# sourceMappingURL=main.1967c7.hot-update.js.map