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
      console.log(JSON.stringify(active_symbols)); // eslint-disable-line

      active_symbols.retrieveActiveSymbols().then(function () {
        var markets = active_symbols.getMarketDropdownOptions();
        console.log(markets); // eslint-disable-line

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

/***/ })

})
//# sourceMappingURL=main.2e567f.hot-update.js.map