webpackHotUpdatederiv_bot("main",{

/***/ "./src/scratch/hooks/toolbox.js":
/*!**************************************!*\
  !*** ./src/scratch/hooks/toolbox.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(goog, Blockly) {/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Icons_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Icons.jsx */ "./src/components/Icons.jsx");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../stores */ "./src/stores/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


















/* eslint-disable func-names, no-underscore-dangle */

/**
 * Initializes the toolbox.
 */

Blockly.Toolbox.prototype.init = function () {
  var workspace = this.workspace_;
  var svg = this.workspace_.getParentSvg();
  /**
   * HTML container for the Toolbox menu.
   * @type {Element}
   */

  this.HtmlDiv = goog.dom.createDom(goog.dom.TagName.DIV, 'toolbox');
  this.HtmlDiv.setAttribute('dir', workspace.RTL ? 'RTL' : 'LTR'); // deriv-bot: Create Toolbox header

  var el_toolbox_header = goog.dom.createDom(goog.dom.TagName.DIV, 'toolbox__header');
  var el_toolbox_title = goog.dom.createDom(goog.dom.TagName.DIV, 'toolbox__title');
  el_toolbox_title.textContent = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_17__["translate"])('Blocks Library');
  el_toolbox_header.appendChild(el_toolbox_title);
  this.HtmlDiv.appendChild(el_toolbox_header);
  svg.parentNode.insertBefore(this.HtmlDiv, svg); // Clicking on toolbox closes popups.

  Blockly.bindEventWithChecks_(this.HtmlDiv, 'mousedown', this, function (e) {
    // Cancel any gestures in progress.
    this.workspace_.cancelCurrentGesture();

    if (Blockly.utils.isRightButton(e) || e.target === this.HtmlDiv) {
      // Close flyout.
      Blockly.hideChaff(false);
    } else {
      // Just close popups.
      Blockly.hideChaff(true);
    }

    Blockly.Touch.clearTouchIdentifier(); // Don't block future drags.
  },
  /* opt_noCaptureIdentifier */
  false,
  /* opt_noPreventDefault */
  true);
  this.createFlyout_();
  this.categoryMenu_ = new Blockly.Toolbox.CategoryMenu(this, this.HtmlDiv);
  this.populate_(workspace.options.languageTree);
  this.position();
};
/**
 * Fill the toolbox with categories and blocks.
 * @param {!Node} newTree DOM tree of blocks.
 * @private
 * deriv-bot: We don't want to `showAll` or `setSelectedItem` here (like in Scratch)
 */


Blockly.Toolbox.prototype.populate_ = function (newTree) {
  this.categoryMenu_.populate(newTree);
};

Blockly.Toolbox.prototype.showSearch_ = function (search_term) {
  var flyout_content = [];
  var all_variables = Blockly.derivWorkspace.getVariablesOfType('');
  var all_procedures = Blockly.Procedures.allProcedures(Blockly.derivWorkspace);
  _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);

  if (search_term.length <= 1) {
    _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
    return;
  }

  var _Blockly = Blockly,
      categories_ = _Blockly.derivWorkspace.toolbox_.categoryMenu_.categories_; // eslint-disable-next-line consistent-return

  var block_contents = categories_.filter(function (category) {
    return !category.has_child_category_;
  }).map(function (category) {
    var contents = category.getContents();

    if (typeof contents === 'string') {
      var fnToApply = Blockly.derivWorkspace.getToolboxCategoryCallback(contents);
      contents = fnToApply(Blockly.derivWorkspace);
    }

    var only_block_contents = contents.filter(function (content) {
      return content.tagName.toUpperCase() === 'BLOCK';
    });
    return only_block_contents;
  }).flat();
  block_contents.forEach(function (block_content) {
    var block_type = block_content.getAttribute('type');
    var block = Blockly.Blocks[block_type];
    var block_meta = block.meta instanceof Function && block.meta();
    var block_definitions = block.definition instanceof Function && block.definition();

    if (!block_meta) {
      return;
    } // block_name matched


    if (block_type.toUpperCase().includes(search_term)) {
      flyout_content.unshift(block_content);
      return;
    } // block_meta matched


    var matched_meta = Object.keys(block_meta).find(function (key) {
      return block_meta[key].toUpperCase().includes(search_term);
    });

    if (matched_meta && matched_meta.length) {
      flyout_content.push(block_content);
      return;
    } // block_definition matched


    var definition_key_to_search = /^((message)|(tooltip)|(field_dropdown$))/; // eslint-disable-next-line consistent-return

    var matched_definition = Object.keys(block_definitions).filter(function (key) {
      var definition = block_definitions[key];

      if (definition_key_to_search.test(key) && definition.toUpperCase().includes(search_term)) {
        return true;
      }

      if (definition instanceof Array) {
        var has_dropdown_and_in_search = false; // eslint-disable-next-line consistent-return

        definition.forEach(function (def) {
          if (def.type === 'field_dropdown' && JSON.stringify(def).toUpperCase().includes(search_term)) {
            has_dropdown_and_in_search = true;
          }
        });
        return has_dropdown_and_in_search;
      }

      return false;
    });

    if (matched_definition && matched_definition.length) {
      flyout_content.push(block_content);
    }
  }); // block_variable_name matched

  var matched_variables = all_variables.filter(function (variable) {
    return variable.name.toUpperCase().includes(search_term);
  });
  var variables_blocks = Blockly.DataCategory.search(matched_variables); // eslint-disable-next-line consistent-return

  var uniqueVarBlocks = variables_blocks.filter(function (variable_block) {
    return flyout_content.indexOf(variable_block) === -1;
  });

  if (uniqueVarBlocks && uniqueVarBlocks.length) {
    flyout_content.push.apply(flyout_content, uniqueVarBlocks);
  } // block_procedure_name matched


  var searched_procedures = {
    '0': [],
    '1': []
  };
  var procedures_callnoreturn = all_procedures[0];
  var procedures_callreturn = all_procedures[1];
  Object.keys(procedures_callnoreturn).forEach(function (key) {
    var procedure = procedures_callnoreturn[key];

    if (procedure[0].toUpperCase().includes(search_term)) {
      searched_procedures['0'].push(procedure);
    }
  });
  Object.keys(procedures_callreturn).forEach(function (key) {
    var procedure = procedures_callreturn[key];

    if (procedure[0].toUpperCase().includes(search_term)) {
      searched_procedures['1'].push(procedure);
    }
  });
  var procedures_blocks = Blockly.Procedures.populateDynamicProcedures(searched_procedures); // eslint-disable-next-line consistent-return

  var uniqueProceBlocks = procedures_blocks.filter(function (procedure_block) {
    return flyout_content.indexOf(procedure_block) === -1;
  });

  if (uniqueProceBlocks.length) {
    flyout_content.push.apply(flyout_content, uniqueProceBlocks);
  }

  _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setContents(flyout_content, true);
};
/**
 * deriv-bot: Show blocks for a specific category in flyout
 * @private
 */


Blockly.Toolbox.prototype.showCategory_ = function (category_id) {
  var selected_category = this.categoryMenu_.categories_.find(function (category) {
    return category.id_ === category_id;
  });
  var flyout_content = selected_category.getContents(); // Dynamic categories

  if (typeof flyout_content === 'string') {
    var fnToApply = this.workspace_.getToolboxCategoryCallback(flyout_content);
    flyout_content = fnToApply(this.workspace_);
  }

  _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setContents(flyout_content);
};
/**
 * Used to determine the css classes for the menu item for this category
 * based on its current state.
 * @private
 * @param {boolean=} selected Indication whether the category is currently selected.
 * @return {string} The css class names to be applied, space-separated.
 * deriv-bot: Custom class names
 */


Blockly.Toolbox.Category.prototype.getMenuItemClassName_ = function (selected) {
  var classNames = ['toolbox__item', "toolbox__category--" + this.id_];

  if (selected) {
    classNames.push('toolbox__category--selected');
  }

  return classNames.join(' ');
};
/**
 * Opens the selected category
 * deriv-bot: Category-specific flyouts + removed opt_shouldScroll
 * @param {Blockly.Toolbox.Category} item The category to select.
 */


Blockly.Toolbox.prototype.setSelectedItem = function (item) {
  var _this = this;

  var category_item = item;

  if (category_item === 'search') {
    if (this.selectedItem_) {
      this.selectedItem_.setSelected(false);
    }

    this.selectedItem_ = null;
    this.showCategory_('search');
    return;
  }

  if (this.selectedItem_) {
    // They selected a different category but one was already open.  Close it.
    this.selectedItem_.setSelected(false); // Selecting the same category will close it.

    if (category_item && !category_item.is_category_return_ && !category_item.has_child_category_ && this.selectedItem_.id_ === item.id_) {
      this.selectedItem_ = null;

      if (_stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].is_visible) {
        _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
      }

      return;
    }
  }

  this.selectedItem_ = item;

  if (!item) {
    _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
  } else {
    var getCategoryTree = function getCategoryTree(parent_name, parent_id, colour, children) {
      var xml_document = document.implementation.createDocument(null, null, null);
      var el_xml = xml_document.createElement('xml');
      var parent_category = xml_document.createElement('category');
      parent_category.setAttribute('name', parent_name);
      parent_category.setAttribute('id', parent_id);
      parent_category.setAttribute('is_category_return', true);
      parent_category.setAttribute('colour', colour);
      var el_separator = xml_document.createElement('sep');
      var category_nodes = [parent_category, el_separator].concat(Array.from(children));
      category_nodes.forEach(function (childNode) {
        return el_xml.appendChild(childNode);
      });
      xml_document.appendChild(el_xml);
      return el_xml;
    };

    if (this.selectedItem_.is_category_return_) {
      // Go up a level if this is a return category
      var findCategory = function findCategory(category_collection) {
        // Finds a category based on `this.selectedItem_.id_` in the given `category_collection`
        for (var i = 0; i < category_collection.length; i++) {
          var el_category = category_collection[i];

          var is_correct_child = el_category.tagName.toUpperCase() === 'CATEGORY' && el_category.getAttribute('id') === _this.selectedItem_.id_;

          if (is_correct_child) {
            return el_category;
          }

          var category = findCategory(el_category.children);

          if (category) {
            return category;
          }
        }

        return null;
      };

      var initial_toolbox_xml = this.workspace_.initial_toolbox_xml;
      var toolboxDom = Blockly.Xml.textToDom(initial_toolbox_xml);
      var selected_category = findCategory(toolboxDom.children);

      if (selected_category) {
        var el_parent = selected_category.parentElement;

        if (el_parent.tagName === 'xml') {
          _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
          this.workspace_.updateToolbox(initial_toolbox_xml);
        } else {
          var newTree = getCategoryTree(el_parent.getAttribute('name'), el_parent.getAttribute('id'), el_parent.getAttribute('colour'), el_parent.children);
          _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
          this.workspace_.updateToolbox(newTree);
        }
      }
    } else if (this.selectedItem_.has_child_category_) {
      // Show categories in toolbox that are descendants of `this.selectedItem_`
      var _newTree = getCategoryTree(this.selectedItem_.name_, this.selectedItem_.id_, this.selectedItem_.colour_, this.selectedItem_.contents_);

      _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
      this.workspace_.updateToolbox(_newTree);
    } else {
      // Show blocks that belong to this category.
      this.selectedItem_.setSelected(true);
      this.showCategory_(this.selectedItem_.id_);
    }
  }
};
/**
 * Update the flyout's contents without closing it.  Should be used in response
 * to a change in one of the dynamic categories, such as variables or
 * procedures.
 * deriv-bot: Calls showAll() in Scratch, we don't want that.
 */


Blockly.Toolbox.prototype.refreshSelection = function () {};
/**
 * Create the DOM for a category in the toolbox.
 * deriv-bot: Custom class names + injection of description
 */


Blockly.Toolbox.Category.prototype.createDom = function () {
  var toolbox = this.parent_.parent_;
  var el_item = goog.dom.createDom('div', this.getMenuItemClassName_());
  this.item_ = el_item;

  if (this.is_category_return_) {
    var el_return_arrow = goog.dom.createDom('div', 'toolbox__category-arrow toolbox__category-arrow--back');
    react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.render(react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Icons_jsx__WEBPACK_IMPORTED_MODULE_15__["ArrowIcon"], {
      className: "arrow"
    }), el_return_arrow);
    el_item.appendChild(el_return_arrow);
  } else {
    var el_colour = goog.dom.createDom('div', 'toolbox__category-colour');
    el_item.appendChild(el_colour);
  }

  var el_label = goog.dom.createDom('div', 'toolbox__label', this.name_);
  var el_toolbox_text = goog.dom.createDom('div', 'toolbox__category-text');
  this.label_ = el_label;
  el_toolbox_text.appendChild(el_label);

  if (this.description_) {
    var el_description = goog.dom.createDom('div', 'toolbox__description', this.description_);
    el_toolbox_text.appendChild(el_description);
  }

  el_item.appendChild(el_toolbox_text);

  if (this.has_child_category_) {
    var el_category_arrow = goog.dom.createDom('div', 'toolbox__category-arrow toolbox__category-arrow--open');
    react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.render(react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Icons_jsx__WEBPACK_IMPORTED_MODULE_15__["ArrowIcon"], {
      className: "arrow"
    }), el_category_arrow);
    el_item.appendChild(el_category_arrow);
  } else if (this.iconURI_) {
    // If category has iconURI attribute, it refers to an entry in our bot-sprite.svg
    var el_icon = goog.dom.createDom('div', {
      class: 'toolbox__icon'
    }); // eslint-disable-next-line

    el_icon.innerHTML = "<svg><use xlink:href=\"" + __webpack_require__.p + "bot-sprite.svg#" + this.iconURI_ + "\"></use></svg>";
    el_item.appendChild(el_icon);
  }

  this.parentHtml_.appendChild(el_item);
  Blockly.bindEvent_(el_item, 'mouseup', toolbox, toolbox.setSelectedItemFactory(this));
};
/**
 * Get the contents of this category.
 * @return {!Array|string} xmlList List of blocks to show, or a string with the
 * name of a custom category.
 * deriv-bot: Use this.dynamic_ rather than this.custom_ for dynamic categories
 * if we specify this.custom_, parseContents() is never called (see core/toolbox.js),
 * so we don't get extra props we require. See parseContents_
 */


Blockly.Toolbox.Category.prototype.getContents = function () {
  return this.custom_ || this.dynamic_ || this.contents_;
};
/**
* Set the contents of this category from DOM.
* @param {Node} domTree DOM tree of blocks.
* @constructor
* deriv-bot: Set some extra properties on the Blockly.Toolbox.Category
*/


Blockly.Toolbox.Category.prototype.parseContents_ = function (domTree) {
  var _this2 = this;

  this.description_ = domTree.getAttribute('description');
  this.dynamic_ = domTree.getAttribute('dynamic');
  this.is_category_return_ = !!domTree.getAttribute('is_category_return');
  domTree.childNodes.forEach(function (child) {
    if (child.tagName) {
      var tag = child.tagName.toUpperCase();

      if (tag === 'CATEGORY') {
        _this2.has_child_category_ = true;
      }

      switch (tag) {
        case 'BLOCK':
        case 'SHADOW':
        case 'LABEL':
        case 'BUTTON':
        case 'SEP':
        case 'TEXT':
        case 'CATEGORY':
          _this2.contents_.push(child);

          break;

        default:
          break;
      }
    }
  });
};
/**
 * Set the colour of the category's background from a DOM node.
 * @param {Node} node DOM node with "colour" and "secondaryColour" attribute.
 *     Colours are a hex string or hue on a colour wheel (0-360).
 * deriv-bot: We don't need secondaryColour
 */


Blockly.Toolbox.Category.prototype.setColour = function (node) {
  var colour = node.getAttribute('colour');

  if (goog.isString(colour)) {
    if (colour.match(/^#[0-9a-fA-F]{6}$/)) {
      this.colour_ = colour;
    } else {
      this.colour_ = Blockly.hueToRgb(colour);
    }

    this.hasColours_ = true;
  } else {
    this.colour_ = '#000000';
  }
};
/**
 * Create the DOM for the category menu.
 * deriv-bot: Custom class names
 */


Blockly.Toolbox.CategoryMenu.prototype.createDom = function () {
  var className = this.parent_.horizontalLayout_ ? 'toolbox__horizontal-category-menu' : 'toolbox__category-menu';
  this.table = goog.dom.createDom('div', className);
  this.parentHtml_.appendChild(this.table);
};
/**
 * Fill the toolbox with categories and blocks by creating a new
 * {Blockly.Toolbox.Category} for every category tag in the toolbox xml.
 * @param {Node} domTree DOM tree of blocks, or null.
 */


Blockly.Toolbox.CategoryMenu.prototype.populate = function (domTree, isSubCategory) {
  var _this3 = this;

  if (isSubCategory === void 0) {
    isSubCategory = false;
  }

  if (!domTree) {
    return;
  } // Remove old categories


  if (!isSubCategory) {
    this.dispose();
    this.createDom();
  }

  domTree.childNodes.forEach(function (childNode) {
    var is_category = function is_category() {
      return childNode.tagName && childNode.tagName.toUpperCase() === 'CATEGORY';
    };

    var is_separator = function is_separator() {
      return childNode.tagName && childNode.tagName.toUpperCase() === 'SEP';
    };

    if (is_category()) {
      var row_class = childNode.getAttribute('is_category_return') ? 'toolbox__category-return' : 'toolbox__row';
      var el_row = goog.dom.createDom('div', {
        class: row_class
      }); // Convert xml web-class attributes to class attributes in el_row

      var web_classes = childNode.getAttribute('web-class');

      if (web_classes) {
        web_classes.split(' ').forEach(function (className) {
          return el_row.classList.add(className);
        });
      }

      var toolbox_category = new Blockly.Toolbox.Category(_this3, el_row, childNode);
      var child = childNode.children;
      /* eslint-disable consistent-return */

      var subCategory = Object.keys(child).map(function (key) {
        if (child[key].tagName === 'category') {
          return child[key];
        }
      });

      if (subCategory.length) {
        _this3.populate(childNode, true);
      }

      if (!isSubCategory) {
        _this3.table.appendChild(el_row);
      }

      _this3.categories_.push(toolbox_category);
    } else if (is_separator()) {
      var el_separator = goog.dom.createDom('div', {
        class: 'toolbox__separator'
      });

      _this3.table.appendChild(el_separator);
    }
  });
  this.height_ = this.table.offsetHeight;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js"), __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ })

})
//# sourceMappingURL=main.71a696.hot-update.js.map