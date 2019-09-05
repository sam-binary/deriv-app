webpackHotUpdatederiv_bot("main",{

/***/ "./node_modules/blockly/generators/javascript.js":
/*!*******************************************************!*\
  !*** ./node_modules/blockly/generators/javascript.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(goog, Blockly, __webpack_provided_Blockly_dot_JavaScript) {/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating JavaScript for blocks.
 * @author fraser@google.com (Neil Fraser)
 */


goog.provide('Blockly.JavaScript');

goog.require('Blockly.Generator');


/**
 * JavaScript code generator.
 * @type {!Blockly.Generator}
 */
__webpack_provided_Blockly_dot_JavaScript = new Blockly.Generator('JavaScript');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
__webpack_provided_Blockly_dot_JavaScript.addReservedWords(
    'Blockly,' +  // In case JS is evaled in the current window.
    // https://developer.mozilla.org/en/JavaScript/Reference/Reserved_Words
    'break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,' +
    'class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,' +
    'const,null,true,false,' +
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects
    'Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,' +
    // https://developer.mozilla.org/en/DOM/window
    'applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,' +
    'addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,' +
    'onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,' +
    'Image,Option,Worker,' +
    // https://developer.mozilla.org/en/Gecko_DOM_Reference
    'Event,Range,File,FileReader,Blob,BlobBuilder,' +
    'Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,' +
    'HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,' +
    'HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,' +
    'SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,' +
    'SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,' +
    'SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,' +
    'SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,' +
    'SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan');

/**
 * Order of operation ENUMs.
 * https://developer.mozilla.org/en/JavaScript/Reference/Operators/Operator_Precedence
 */
__webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC = 0;           // 0 "" ...
__webpack_provided_Blockly_dot_JavaScript.ORDER_NEW = 1.1;            // new
__webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER = 1.2;         // . []
__webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL = 2;    // ()
__webpack_provided_Blockly_dot_JavaScript.ORDER_INCREMENT = 3;        // ++
__webpack_provided_Blockly_dot_JavaScript.ORDER_DECREMENT = 3;        // --
__webpack_provided_Blockly_dot_JavaScript.ORDER_BITWISE_NOT = 4.1;    // ~
__webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_PLUS = 4.2;     // +
__webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_NEGATION = 4.3; // -
__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT = 4.4;    // !
__webpack_provided_Blockly_dot_JavaScript.ORDER_TYPEOF = 4.5;         // typeof
__webpack_provided_Blockly_dot_JavaScript.ORDER_VOID = 4.6;           // void
__webpack_provided_Blockly_dot_JavaScript.ORDER_DELETE = 4.7;         // delete
__webpack_provided_Blockly_dot_JavaScript.ORDER_AWAIT = 4.8;          // await
__webpack_provided_Blockly_dot_JavaScript.ORDER_EXPONENTIATION = 5.0; // **
__webpack_provided_Blockly_dot_JavaScript.ORDER_MULTIPLICATION = 5.1; // *
__webpack_provided_Blockly_dot_JavaScript.ORDER_DIVISION = 5.2;       // /
__webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS = 5.3;        // %
__webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION = 6.1;    // -
__webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION = 6.2;       // +
__webpack_provided_Blockly_dot_JavaScript.ORDER_BITWISE_SHIFT = 7;    // << >> >>>
__webpack_provided_Blockly_dot_JavaScript.ORDER_RELATIONAL = 8;       // < <= > >=
__webpack_provided_Blockly_dot_JavaScript.ORDER_IN = 8;               // in
__webpack_provided_Blockly_dot_JavaScript.ORDER_INSTANCEOF = 8;       // instanceof
__webpack_provided_Blockly_dot_JavaScript.ORDER_EQUALITY = 9;         // == != === !==
__webpack_provided_Blockly_dot_JavaScript.ORDER_BITWISE_AND = 10;     // &
__webpack_provided_Blockly_dot_JavaScript.ORDER_BITWISE_XOR = 11;     // ^
__webpack_provided_Blockly_dot_JavaScript.ORDER_BITWISE_OR = 12;      // |
__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_AND = 13;     // &&
__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_OR = 14;      // ||
__webpack_provided_Blockly_dot_JavaScript.ORDER_CONDITIONAL = 15;     // ?:
__webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT = 16;      // = += -= **= *= /= %= <<= >>= ...
__webpack_provided_Blockly_dot_JavaScript.ORDER_YIELD = 17;         // yield
__webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA = 18;           // ,
__webpack_provided_Blockly_dot_JavaScript.ORDER_NONE = 99;            // (...)

/**
 * List of outer-inner pairings that do NOT require parentheses.
 * @type {!Array.<!Array.<number>>}
 */
__webpack_provided_Blockly_dot_JavaScript.ORDER_OVERRIDES = [
  // (foo()).bar -> foo().bar
  // (foo())[0] -> foo()[0]
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL, __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER],
  // (foo())() -> foo()()
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL],
  // (foo.bar).baz -> foo.bar.baz
  // (foo.bar)[0] -> foo.bar[0]
  // (foo[0]).bar -> foo[0].bar
  // (foo[0])[1] -> foo[0][1]
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER, __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER],
  // (foo.bar)() -> foo.bar()
  // (foo[0])() -> foo[0]()
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL],

  // !(!foo) -> !!foo
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT, __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT],
  // a * (b * c) -> a * b * c
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_MULTIPLICATION, __webpack_provided_Blockly_dot_JavaScript.ORDER_MULTIPLICATION],
  // a + (b + c) -> a + b + c
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION, __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION],
  // a && (b && c) -> a && b && c
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_AND, __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_AND],
  // a || (b || c) -> a || b || c
  [__webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_OR, __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_OR]
];

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
__webpack_provided_Blockly_dot_JavaScript.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  __webpack_provided_Blockly_dot_JavaScript.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  __webpack_provided_Blockly_dot_JavaScript.functionNames_ = Object.create(null);

  if (!__webpack_provided_Blockly_dot_JavaScript.variableDB_) {
    __webpack_provided_Blockly_dot_JavaScript.variableDB_ =
        new Blockly.Names(__webpack_provided_Blockly_dot_JavaScript.RESERVED_WORDS_);
  } else {
    __webpack_provided_Blockly_dot_JavaScript.variableDB_.reset();
  }

  __webpack_provided_Blockly_dot_JavaScript.variableDB_.setVariableMap(workspace.getVariableMap());

  var defvars = [];
  // Add developer variables (not created or named by the user).
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    defvars.push(__webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  // Add user variables, but only ones that are being used.
  var variables = Blockly.Variables.allUsedVarModels(workspace);
  for (var i = 0; i < variables.length; i++) {
    defvars.push(__webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(variables[i].getId(),
        Blockly.Variables.NAME_TYPE));
  }

  // Declare all of the variables.
  if (defvars.length) {
    __webpack_provided_Blockly_dot_JavaScript.definitions_['variables'] =
        'var ' + defvars.join(', ') + ';';
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
__webpack_provided_Blockly_dot_JavaScript.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  for (var name in __webpack_provided_Blockly_dot_JavaScript.definitions_) {
    definitions.push(__webpack_provided_Blockly_dot_JavaScript.definitions_[name]);
  }
  // Clean up temporary data.
  delete __webpack_provided_Blockly_dot_JavaScript.definitions_;
  delete __webpack_provided_Blockly_dot_JavaScript.functionNames_;
  __webpack_provided_Blockly_dot_JavaScript.variableDB_.reset();
  return definitions.join('\n\n') + '\n\n\n' + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
__webpack_provided_Blockly_dot_JavaScript.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped JavaScript string, complete with
 * quotes.
 * @param {string} string Text to encode.
 * @return {string} JavaScript string.
 * @private
 */
__webpack_provided_Blockly_dot_JavaScript.quote_ = function(string) {
  // Can't use goog.string.quote since Google's style guide recommends
  // JS string literals use single quotes.
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating JavaScript from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The JavaScript code created for this block.
 * @param {boolean=} opt_thisOnly True to generate code for only this statement.
 * @return {string} JavaScript code with comments and subsequent blocks added.
 * @private
 */
__webpack_provided_Blockly_dot_JavaScript.scrub_ = function(block, code, opt_thisOnly) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    comment = Blockly.utils.wrap(comment, __webpack_provided_Blockly_dot_JavaScript.COMMENT_WRAP - 3);
    if (comment) {
      if (block.getProcedureDef) {
        // Use a comment block for function comments.
        commentCode += '/**\n' +
                       __webpack_provided_Blockly_dot_JavaScript.prefixLines(comment + '\n', ' * ') +
                       ' */\n';
      } else {
        commentCode += __webpack_provided_Blockly_dot_JavaScript.prefixLines(comment + '\n', '// ');
      }
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          var comment = __webpack_provided_Blockly_dot_JavaScript.allNestedComments(childBlock);
          if (comment) {
            commentCode += __webpack_provided_Blockly_dot_JavaScript.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = opt_thisOnly ? '' : __webpack_provided_Blockly_dot_JavaScript.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

/**
 * Gets a property and adjusts the value while taking into account indexing.
 * @param {!Blockly.Block} block The block.
 * @param {string} atId The property ID of the element to get.
 * @param {number=} opt_delta Value to add.
 * @param {boolean=} opt_negate Whether to negate the value.
 * @param {number=} opt_order The highest order acting on this value.
 * @return {string|number}
 */
__webpack_provided_Blockly_dot_JavaScript.getAdjusted = function(block, atId, opt_delta, opt_negate,
    opt_order) {
  var delta = opt_delta || 0;
  var order = opt_order || __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE;
  if (block.workspace.options.oneBasedIndex) {
    delta--;
  }
  var defaultAtIndex = block.workspace.options.oneBasedIndex ? '1' : '0';
  if (delta > 0) {
    var at = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, atId,
        __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION) || defaultAtIndex;
  } else if (delta < 0) {
    var at = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, atId,
        __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION) || defaultAtIndex;
  } else if (opt_negate) {
    var at = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, atId,
        __webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_NEGATION) || defaultAtIndex;
  } else {
    var at = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, atId, order) ||
        defaultAtIndex;
  }

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, adjust it right now.
    at = parseFloat(at) + delta;
    if (opt_negate) {
      at = -at;
    }
  } else {
    // If the index is dynamic, adjust it in code.
    if (delta > 0) {
      at = at + ' + ' + delta;
      var innerOrder = __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION;
    } else if (delta < 0) {
      at = at + ' - ' + -delta;
      var innerOrder = __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION;
    }
    if (opt_negate) {
      if (delta) {
        at = '-(' + at + ')';
      } else {
        at = '-' + at;
      }
      var innerOrder = __webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_NEGATION;
    }
    innerOrder = Math.floor(innerOrder);
    order = Math.floor(order);
    if (innerOrder && order >= innerOrder) {
      at = '(' + at + ')';
    }
  }
  return at;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js"), __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/expose-loader?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Blockly"] = __webpack_require__(/*! -!./blockly_compressed_vertical.Blockly.js */ "./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js-exposed":
false,

/***/ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/expose-loader?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["goog"] = __webpack_require__(/*! -!./blockly_compressed_vertical.goog.js */ "./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js-exposed":
false,

/***/ "./src/assets/sass/bot.scss":
/*!**********************************!*\
  !*** ./src/assets/sass/bot.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1567491422298
      var cssReload = __webpack_require__(/*! ../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/assets/sass/scratch/flyout.scss":
/*!*********************************************!*\
  !*** ./src/assets/sass/scratch/flyout.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1567491417507
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/assets/sass/scratch/toolbox.scss":
/*!**********************************************!*\
  !*** ./src/assets/sass/scratch/toolbox.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1567491422334
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/assets/sass/scratch/workspace.scss":
/*!************************************************!*\
  !*** ./src/assets/sass/scratch/workspace.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1567491417451
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/components/flyout-block.jsx":
/*!*****************************************!*\
  !*** ./src/components/flyout-block.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons.jsx */ "./src/components/Icons.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }







var FlyoutBlock =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FlyoutBlock, _React$PureComponent);

  function FlyoutBlock() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FlyoutBlock.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        onInfoClick = _this$props.onInfoClick,
        block_node = _this$props.block_node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item-header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item-label"
    }, block_node.getAttribute('type')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item-buttons"
    }, onInfoClick && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flyout__item-info",
      onClick: onInfoClick
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons_jsx__WEBPACK_IMPORTED_MODULE_2__["BlueInfoIcon"], {
      className: 'info'
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "flyout__item-add",
      onClick: function onClick() {
        return Blockly.derivWorkspace.addBlockNode(block_node);
      }
    }, Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Add')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: function ref(el) {
        return _this.el_block_workspace = el;
      },
      className: "flyout__block-workspace"
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this$props2 = this.props,
        initBlockWorkspace = _this$props2.initBlockWorkspace,
        block_node = _this$props2.block_node;
    initBlockWorkspace(this.el_block_workspace, block_node);
  };

  return FlyoutBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

FlyoutBlock.propTypes = {
  block_node: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].any,
  initBlockWorkspace: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  onInfoClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var flyout = _ref.flyout;
  return {
    initBlockWorkspace: flyout.initBlockWorkspace
  };
})(FlyoutBlock));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/components/flyout.jsx":
/*!***********************************!*\
  !*** ./src/components/flyout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flyout_block_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flyout-block.jsx */ "./src/components/flyout-block.jsx");
/* harmony import */ var _stores_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/connect */ "./src/stores/connect.js");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sass/scratch/flyout.scss */ "./src/assets/sass/scratch/flyout.scss");
/* harmony import */ var _assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_scratch_flyout_scss__WEBPACK_IMPORTED_MODULE_4__);






var Flyout = function Flyout(_ref) {
  var flyout_content = _ref.flyout_content,
      flyout_width = _ref.flyout_width,
      is_visible = _ref.is_visible;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flyout" + (!is_visible ? ' hidden' : ''),
    style: {
      width: flyout_width + "px"
    }
  }, flyout_content.map(function (node, index) {
    var tag_name = node.tagName.toUpperCase();

    switch (tag_name) {
      case Blockly.Xml.NODE_BLOCK:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_flyout_block_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: node.getAttribute('type') + index,
          id: "flyout__item-workspace--" + index,
          block_node: node
        });

      case Blockly.Xml.NODE_LABEL:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: node.getAttribute('text') + index,
          className: "flyout__item-label"
        }, node.getAttribute('text'));

      case Blockly.Xml.NODE_BUTTON:
        {
          var callback_key = node.getAttribute('callbackKey');

          var callback = Blockly.derivWorkspace.getButtonCallback(callback_key) || function () {};

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "" + callback_key + index,
            className: "flyout__button",
            onClick: function onClick(button) {
              var flyout_button = button; // Workaround for not having a flyout workspace.
              // eslint-disable-next-line no-underscore-dangle

              flyout_button.targetWorkspace_ = Blockly.derivWorkspace; // eslint-disable-next-line no-underscore-dangle

              flyout_button.getTargetWorkspace = function () {
                return flyout_button.targetWorkspace_;
              };

              callback(flyout_button);
            }
          }, node.getAttribute('text'));
        }

      default:
        return null;
    }
  }));
};

Flyout.propTypes = {
  flyout_content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  flyout_width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_stores_connect__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref2) {
  var flyout = _ref2.flyout;
  return {
    flyout_content: flyout.flyout_content,
    flyout_width: flyout.flyout_width,
    is_visible: flyout.is_visible
  };
})(Flyout));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Functions/procedures_callnoreturn.js":
/*!**************************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Functions/procedures_callnoreturn.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.procedures_callnoreturn = {
  init: function init() {
    this.arguments = [];
    this.argumentVarModels = [];
    this.previousDisabledState = false;
    this.jsonInit(this.definition());
  },

  /**
   * Block definitions describe how a block looks and behaves, including the text,
   * the colour, the shape, and what other blocks it can connect to. We've separated
   * the block definition from the init function so we can search through it.
   * https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
   */
  definition: function definition() {
    return {
      message0: '%1 %2',
      args0: [{
        type: 'field_label',
        name: 'NAME',
        text: this.id
      }, {
        type: 'input_dummy',
        name: 'TOPROW'
      }],
      colour: Blockly.Colours.BinaryProcedures.colour,
      colourSecondary: Blockly.Colours.BinaryProcedures.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryProcedures.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function with no return value tooltip'),
      category: Blockly.Categories.Functions
    };
  },

  /**
   * Meta returns an object with with properties that contain human readable strings,
   * these strings are used in the flyout help content, as well as used for searching
   * for specific blocks.
   */
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function With no Return name'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function with no return value description')
    };
  },

  /**
   * Procedure calls cannot exist without the corresponding procedure
   * definition.  Enforce this link whenever an event is fired.
   * @param {!Blockly.Events.Abstract} event Change event.
   * @this Blockly.Block
   */
  onchange: function onchange(event) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setBlockTextColor"])(this);

    if (!this.workspace || this.workspace.isFlyout) {
      // Block is deleted or is in a flyout.
      return;
    }

    if (!event.recordUndo) {
      // Events not generated by user. Skip handling.
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.indexOf(this.id) !== -1) {
      // Look for the case where a procedure call was created (usually through
      // paste) and there is no matching definition.  In this case, create
      // an empty definition block with the correct signature.
      var name = this.getProcedureCall();
      var def = this.getProcedureDefinition(name); // Set data of `this` block to 'procedure definition'-block `id` so we can keep track of their relation.

      if (!def) {
        this.unplug();
        this.dispose();
      }

      this.data = def.id;

      if (def && (def.type !== this.defType || JSON.stringify(def.arguments) !== JSON.stringify(this.arguments))) {
        // The signatures don't match.
        def = null;
      }

      if (!def) {
        Blockly.Events.setGroup(event.group);
        /**
         * Create matching definition block.
         * <xml>
         *   <block type="procedures_defreturn" x="10" y="20">
         *     <mutation name="test">
         *       <arg name="x"></arg>
         *     </mutation>
         *     <field name="NAME">test</field>
         *   </block>
         * </xml>
         */

        var xml = document.createElement('xml');
        var block = document.createElement('block');
        block.setAttribute('type', this.defType);
        var xy = this.getRelativeToSurfaceXY();
        var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
        var y = xy.y + Blockly.SNAP_RADIUS * 2;
        block.setAttribute('x', x);
        block.setAttribute('y', y);
        var mutation = this.mutationToDom();
        block.appendChild(mutation);
        var field = document.createElement('field');
        field.setAttribute('name', 'NAME');
        field.appendChild(document.createTextNode(this.getProcedureCall()));
        block.appendChild(field);
        xml.appendChild(block);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
        Blockly.Events.setGroup(false);
      }
    } else if (event.type === Blockly.Events.BLOCK_DELETE) {
      // Look for the case where a procedure definition has been deleted,
      // leaving this block (a procedure call) orphaned.  In this case, delete
      // the orphan.
      var _name = this.getProcedureCall();

      var _def = Blockly.Procedures.getDefinition(_name, this.workspace);

      if (!_def) {
        Blockly.Events.setGroup(event.group);
        this.dispose(true, false);
        Blockly.Events.setGroup(false);
      }
    } else if (event.type === Blockly.Events.BLOCK_CHANGE && event.element === 'disabled') {
      var _name2 = this.getProcedureCall();

      var _def2 = Blockly.Procedures.getDefinition(_name2, this.workspace);

      if (_def2 && _def2.id === event.blockId) {
        // in most cases the old group should be ''
        var oldGroup = Blockly.Events.getGroup();

        if (oldGroup) {
          // This should only be possible programatically and may indicate a problem
          // with event grouping. If you see this message please investigate. If the
          // use ends up being valid we may need to reorder events in the undo stack.
          // eslint-disable-next-line no-console
          console.log('Saw an existing group while responding to a definition change');
        }

        Blockly.Events.setGroup(event.group);

        if (event.newValue) {
          this.previousDisabledState = this.disabled;
          this.setDisabled(true);
        } else {
          this.setDisabled(this.previousDisabledState);
        }

        Blockly.Events.setGroup(oldGroup);
      }
    }
  },

  /**
   * Returns the related procedure definition block.
   * @return {Blockly.Block} Procedure definition block.
   * @this Blockly.Block
   */
  getProcedureDefinition: function getProcedureDefinition(name) {
    // Assume that a procedure definition is a top block.
    return this.workspace.getTopBlocks(false).find(function (block) {
      if (block.getProcedureDefinition) {
        var tuple = block.getProcedureDefinition();
        return tuple && Blockly.Names.equals(tuple[0], name);
      }

      return false;
    });
  },

  /**
   * Returns the name of the procedure this block calls.
   * @return {string} Procedure name.
   * @this Blockly.Block
   */
  getProcedureCall: function getProcedureCall() {
    // The NAME field is guaranteed to exist, null will never be returned.
    return (
      /** @type {string} */
      this.getFieldValue('NAME')
    );
  },

  /**
   * Notification that a procedure is renaming.
   * If the name matches this block's procedure, rename it.
   * @param {string} oldName Previous name of procedure.
   * @param {string} newName Renamed procedure.
   * @this Blockly.Block
   */
  renameProcedure: function renameProcedure(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
      this.setFieldValue(newName, 'NAME');
    }
  },

  /**
   * Notification that the procedure's parameters have changed.
   * @param {!Array.<string>} paramNames New param names, e.g. ['x', 'y', 'z'].
   * @private
   * @this Blockly.Block
   */
  setProcedureParameters: function setProcedureParameters(paramNames) {
    var _this = this;

    // Rebuild the block's arguments.
    this.arguments = [].concat(paramNames); // And rebuild the argument model list.

    this.argumentVarModels = this.arguments.map(function (argumentName) {
      return Blockly.Variables.getOrCreateVariablePackage(_this.workspace, null, argumentName, '');
    });
    this.updateShape();
  },

  /**
   * Modify this block to have the correct number of arguments.
   * @private
   * @this Blockly.Block
   */
  updateShape: function updateShape() {
    var _this2 = this;

    this.arguments.forEach(function (argumentName, i) {
      var field = _this2.getField("ARGNAME" + i);

      if (field) {
        // Ensure argument name is up to date.
        // The argument name field is deterministic based on the mutation,
        // no need to fire a change event.
        Blockly.Events.disable();

        try {
          field.setValue(argumentName);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(argumentName);

        var input = _this2.appendValueInput("ARG" + i).appendField(field, "ARGNAME" + i);

        input.init();
      }
    }); // Remove deleted inputs.

    var i = this.arguments.length;

    while (this.getInput("ARG" + i)) {
      this.removeInput("ARG" + i);
      i++;
    } // Add 'with:' if there are parameters, remove otherwise.


    var topRow = this.getInput('TOPROW');

    if (topRow) {
      if (this.arguments.length) {
        if (!this.getField('WITH')) {
          topRow.appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('with:'), 'WITH');
          topRow.init();
        }
      } else if (this.getField('WITH')) {
        topRow.removeField('WITH');
      }
    }
  },

  /**
   * Create XML to represent the (non-editable) name and arguments.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getProcedureCall());
    this.arguments.forEach(function (argumentName) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', argumentName);
      container.appendChild(parameter);
    });
    return container;
  },

  /**
   * Parse XML to restore the (non-editable) name and parameters.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function domToMutation(xmlElement) {
    var name = xmlElement.getAttribute('name');
    this.renameProcedure(this.getProcedureCall(), name);
    var args = [];
    var paramIds = [];
    xmlElement.childNodes.forEach(function (childNode) {
      if (childNode.nodeName.toLowerCase() === 'arg') {
        args.push(childNode.getAttribute('name'));
        paramIds.push(childNode.getAttribute('paramId'));
      }
    });
    this.setProcedureParameters(args, paramIds);
  },

  /**
   * Return all variables referenced by this block.
   * @return {!Array.<!Blockly.VariableModel>} List of variable models.
   * @this Blockly.Block
   */
  getVarModels: function getVarModels() {
    return this.argumentVarModels;
  },

  /**
   * Add menu option to find the definition block for this call.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function customContextMenu(options) {
    var _this3 = this;

    if (!this.workspace.isMovable()) {
      // If we center on the block and the workspace isn't movable we could
      // loose blocks at the edges of the workspace.
      return;
    }

    var name = this.getProcedureCall();
    var workspace = this.workspace;
    var option = {
      enabled: true
    };
    option.text = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Highlight function definition');

    option.callback = function () {
      var def = _this3.getProcedureDefinition(name);

      if (def) {
        workspace.centerOnBlock(def.id);
        def.select();
      }
    };

    options.push(option);
  },
  defType: 'procedures_defnoreturn'
};

__webpack_provided_Blockly_dot_JavaScript.procedures_callnoreturn = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var functionName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = block.arguments.map(function (arg, i) {
    return __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, "ARG" + i, __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || 'null';
  });
  var code = functionName + "(" + args.join(', ') + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Functions/procedures_callreturn.js":
/*!************************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Functions/procedures_callreturn.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.procedures_callreturn = {
  init: function init() {
    this.arguments = [];
    this.previousDisabledState = false;
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1 %2',
      args0: [{
        type: 'field_label',
        name: 'NAME',
        text: this.id
      }, {
        type: 'input_dummy',
        name: 'TOPROW'
      }],
      output: null,
      colour: Blockly.Colours.BinaryProcedures.colour,
      colourSecondary: Blockly.Colours.BinaryProcedures.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryProcedures.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Function with return value'),
      category: Blockly.Categories.Functions
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Function with return value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Function with return value Description')
    };
  },
  onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
  getProcedureDefinition: Blockly.Blocks.procedures_callnoreturn.getProcedureDefinition,
  getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
  renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
  setProcedureParameters: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
  updateShape: Blockly.Blocks.procedures_callnoreturn.updateShape,
  mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
  getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
  customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
  defType: 'procedures_defreturn'
};

__webpack_provided_Blockly_dot_JavaScript.procedures_callreturn = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var functionName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = block.arguments.map(function (arg, i) {
    return __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, "ARG" + i, __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || 'null';
  });
  var code = functionName + "(" + args.join(', ') + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Functions/procedures_defnoreturn.js":
/*!*************************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Functions/procedures_defnoreturn.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");







Blockly.Blocks.procedures_defnoreturn = {
  init: function init() {
    var _this = this;

    this.arguments = [];
    this.argumentVarModels = [];
    this.jsonInit(this.definition()); // Enforce unique procedure names

    var nameField = this.getField('NAME');
    nameField.setValidator(Blockly.Procedures.rename); // Render a ➕-icon for adding parameters

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_4__["plusIconLight"], 24, 24, '+', function () {
      return _this.onAddClick();
    });
    this.appendDummyInput('ADD_ICON').appendField(fieldImage);
    this.setStatements(true);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('function %1 %2'),
      args0: [{
        type: 'field_input',
        name: 'NAME',
        text: ''
      }, {
        type: 'field_label',
        name: 'PARAMS',
        text: ''
      }],
      colour: Blockly.Colours.BinaryProcedures.colour,
      colourSecondary: Blockly.Colours.BinaryProcedures.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryProcedures.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('function with no return tooltip'),
      category: Blockly.Categories.Functions
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('Function with no return value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('Function with no return value description')
    };
  },

  /**
   * Sets the block colour and updates this procedure's caller blocks
   * to reflect the same name on a change.
   * @param {!Blockly.Events.Abstract} event Change event.
   * @this Blockly.Block
   */
  onchange: function onchange(event) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setBlockTextColor"])(this);
    var allowedEvents = [Blockly.Events.BLOCK_DELETE, Blockly.Events.BLOCK_CREATE, Blockly.Events.BLOCK_CHANGE];

    if (!this.workspace || this.workspace.isFlyout || !allowedEvents.includes(event.type)) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CHANGE) {
      // Sync names between definition- and execution-block
      if (event.blockId === this.id && event.name === 'NAME') {
        this.getProcedureCallers().forEach(function (block) {
          block.setFieldValue(event.newValue, 'NAME');
        });
      }
    }
  },

  /**
   * Prompt the user for parameter name
   * @this Blockly.Block
   */
  onAddClick: function onAddClick() {
    var _this2 = this;

    if (this.isInFlyout) {
      return;
    } // Wrap in setTimeout so block doesn't stick to mouse (Blockly.Events.END_DRAG event isn't blocked).


    setTimeout(function () {
      var promptMessage = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('Specify a parameter name:');
      Blockly.prompt(promptMessage, '', function (paramName) {
        if (paramName) {
          var variable = Blockly.Variables.getOrCreateVariablePackage(_this2.workspace, null, paramName, '');

          if (variable) {
            _this2.arguments.push(paramName);

            _this2.argumentVarModels.push(variable);

            var paramField = _this2.getField('PARAMS');

            paramField.setText(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('with: ') + " " + _this2.arguments.join(', '));

            _this2.getProcedureCallers().forEach(function (block) {
              block.setProcedureParameters(_this2.arguments);
              block.initSvg();
              block.render(false);
            });
          }
        }
      });
    }, 200);
  },

  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
  setStatements: function setStatements(hasStatements) {
    if (this.hasStatements === hasStatements) {
      return;
    }

    if (hasStatements) {
      this.appendStatementInput('STACK').appendField('');

      if (this.getInput('RETURN')) {
        this.moveInputBefore('STACK', 'RETURN');
      }
    } else {
      this.removeInput('STACK', true);
    }

    this.hasStatements = hasStatements;
  },

  /**
   * Update the display of parameters for this procedure definition block.
   * @private
   * @this Blockly.Block
   */
  updateParams: function updateParams() {
    var paramString = '';

    if (this.arguments.length) {
      paramString = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])('with:') + " " + this.arguments.join(', ');
    } // The params field is deterministic based on the mutation,
    // no need to fire a change event.


    Blockly.Events.disable();

    try {
      this.setFieldValue(paramString, 'PARAMS');
    } finally {
      Blockly.Events.enable();
    }
  },

  /**
   * Create XML to represent the argument inputs.
   * @param {boolean=} optParamIds If true include the IDs of the parameter
   *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function mutationToDom(optParamIds) {
    var _this3 = this;

    var container = document.createElement('mutation');

    if (optParamIds) {
      container.setAttribute('name', this.getFieldValue('NAME'));
    }

    this.argumentVarModels.forEach(function (arg, i) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', arg.name);
      parameter.setAttribute('varid', arg.getId());

      if (optParamIds && _this3.paramIds) {
        parameter.setAttribute('paramId', _this3.paramIds[i]);
      }

      container.appendChild(parameter);
    }); // Save whether the statement input is visible.

    if (!this.hasStatements) {
      container.setAttribute('statements', 'false');
    }

    return container;
  },

  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function domToMutation(xmlElement) {
    var _this4 = this;

    this.arguments = [];
    this.argumentVarModels = [];
    xmlElement.childNodes.forEach(function (childNode) {
      if (childNode.nodeName.toLowerCase() === 'arg') {
        var varName = childNode.getAttribute('name');

        _this4.arguments.push(varName);

        var varId = childNode.getAttribute('varid') || childNode.getAttribute('varId');
        var variable = Blockly.Variables.getOrCreateVariablePackage(_this4.workspace, varId, varName, '');

        if (variable !== null) {
          _this4.argumentVarModels.push(variable);
        } else {
          // eslint-disable-next-line no-console
          console.log("Failed to create a variable with name " + varName + ", ignoring.");
        }
      }
    });
    this.updateParams(); // Show or hide the statement input.

    this.setStatements(xmlElement.getAttribute('statements') !== 'false');
  },

  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function getProcedureDef() {
    return [this.getFieldValue('NAME'), this.arguments, false];
  },

  /**
   * Return all procedure callers related to this block.
   * @return {!Array.<Blockly.Block>} List of procedure caller blocks
   * @this Blockly.Block
   */
  getProcedureCallers: function getProcedureCallers() {
    var _this5 = this;

    return this.workspace.getAllBlocks(false).filter(function (block) {
      return block.type === _this5.callType && block.data === _this5.id;
    });
  },

  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function getVars() {
    return this.arguments;
  },

  /**
   * Return all variables referenced by this block.
   * @return {!Array.<!Blockly.VariableModel>} List of variable models.
   * @this Blockly.Block
   */
  getVarModels: function getVarModels() {
    return this.argumentVarModels;
  },

  /**
   * Add custom menu options to this block's context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function customContextMenu(options) {
    var _this6 = this;

    if (this.isInFlyout) {
      return;
    } // Add option to create caller.


    var option = {
      enabled: true
    };
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
    var xmlMutation = document.createElement('mutation');
    xmlMutation.setAttribute('name', name);
    this.arguments.forEach(function (argumentName) {
      var xmlArg = document.createElement('arg');
      xmlArg.setAttribute('name', argumentName);
      xmlMutation.appendChild(xmlArg);
    });
    var xmlBlock = document.createElement('block');
    xmlBlock.setAttribute('type', this.callType);
    xmlBlock.appendChild(xmlMutation);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option); // Add options to create getters for each parameter.

    if (!this.isCollapsed()) {
      this.argumentVarModels.forEach(function (argumentVarModel) {
        var getOption = {
          enabled: true
        };
        getOption.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', argumentVarModel.name);
        var xmlField = Blockly.Variables.generateVariableFieldDom(argumentVarModel);
        var xmlOptionBlock = document.createElement('block');
        xmlOptionBlock.setAttribute('type', 'variables_get');
        xmlOptionBlock.appendChild(xmlField);
        getOption.callback = Blockly.ContextMenu.callbackFactory(_this6, xmlOptionBlock);
        options.push(getOption);
      });
    }
  },
  callType: 'procedures_callnoreturn'
};

__webpack_provided_Blockly_dot_JavaScript.procedures_defnoreturn = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var functionName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'STACK');

  if (__webpack_provided_Blockly_dot_JavaScript.STATEMENT_PREFIX) {
    var id = block.id.replace(/\$/g, '$$$$'); // Issue 251.

    branch = __webpack_provided_Blockly_dot_JavaScript.prefixLines(__webpack_provided_Blockly_dot_JavaScript.STATEMENT_PREFIX.replace(/%1/g, "'" + id + "'"), __webpack_provided_Blockly_dot_JavaScript.INDENT) + branch;
  }

  if (__webpack_provided_Blockly_dot_JavaScript.INFINITE_LOOP_TRAP) {
    branch = __webpack_provided_Blockly_dot_JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
  }

  var returnValue = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'RETURN', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '';

  if (returnValue) {
    returnValue = __webpack_provided_Blockly_dot_JavaScript.INDENT + "return " + returnValue + ";\n";
  }

  var args = block.arguments.map(function (argumentName) {
    return __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(argumentName, Blockly.Variables.NAME_TYPE);
  } // eslint-disable-line no-underscore-dangle
  ); // eslint-disable-next-line no-underscore-dangle

  var code = __webpack_provided_Blockly_dot_JavaScript.scrub_(block, "\n    function " + functionName + "(" + args.join(', ') + ") {\n        " + branch + "\n        " + returnValue + "\n    }\n"); // Add % so as not to collide with helper functions in definitions list.
  // eslint-disable-next-line no-underscore-dangle

  __webpack_provided_Blockly_dot_JavaScript.definitions_["%" + functionName] = code;
  return null;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Functions/procedures_defreturn.js":
/*!***********************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Functions/procedures_defreturn.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.procedures_defreturn = {
  init: function init() {
    var _this = this;

    this.arguments = [];
    this.argumentVarModels = [];
    this.jsonInit(this.definition()); // Enforce unique procedure names

    var nameField = this.getField('NAME');
    nameField.setValidator(Blockly.Procedures.rename); // Render a ➕-icon for adding parameters

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_0__["plusIconDark"], 24, 24, '+', function () {
      return _this.onAddClick();
    });
    this.appendDummyInput('ADD_ICON').appendField(fieldImage);
    this.moveInputBefore('ADD_ICON', 'RETURN');
    this.setStatements(true);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('function %1 %2 %3'),
      message1: 'return %1',
      args0: [{
        type: 'field_input',
        name: 'NAME',
        text: ''
      }, {
        type: 'field_label',
        name: 'PARAMS',
        text: ''
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_value',
        name: 'RETURN',
        check: null,
        align: Blockly.ALIGN_RIGHT
      }],
      colour: Blockly.Colours.BinaryProcedures.colour,
      colourSecondary: Blockly.Colours.BinaryProcedures.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryProcedures.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Function def with return value'),
      category: Blockly.Categories.Functions
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Function def with return value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Function def with return value Description')
    };
  },
  onAddClick: Blockly.Blocks.procedures_defnoreturn.onAddClick,
  onchange: Blockly.Blocks.procedures_defnoreturn.onchange,
  setStatements: Blockly.Blocks.procedures_defnoreturn.setStatements,
  updateParams: Blockly.Blocks.procedures_defnoreturn.updateParams,
  mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,

  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function getProcedureDef() {
    return [this.getFieldValue('NAME'), this.arguments, true];
  },
  getProcedureCallers: Blockly.Blocks.procedures_defnoreturn.getProcedureCallers,
  getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
  getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
  renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
  updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
  displayRenamedVar: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar,
  customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
  callType: 'procedures_callreturn',
  registerWorkspaceListener: Blockly.Blocks.procedures_defnoreturn.registerWorkspaceListener
};
__webpack_provided_Blockly_dot_JavaScript.procedures_defreturn = __webpack_provided_Blockly_dot_JavaScript.procedures_defnoreturn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Functions/procedures_ifreturn.js":
/*!**********************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Functions/procedures_ifreturn.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



/**
 * Block for conditionally returning a value from a procedure.
 * @this Blockly.Block
 */

Blockly.Blocks.procedures_ifreturn = {
  init: function init() {
    this.hasReturnValue = true;
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('if %1 return %2'),
      args0: [{
        type: 'input_value',
        name: 'CONDITION'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Blockly.Colours.BinaryProcedures.colour,
      colourSecondary: Blockly.Colours.BinaryProcedures.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryProcedures.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function If Else'),
      category: Blockly.Categories.Functions
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function If else'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Function If else Description')
    };
  },

  /**
   * Create XML to represent whether this block has a return value.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    container.setAttribute('value', Number(this.hasReturnValue));
    return container;
  },

  /**
   * Parse XML to restore whether this block has a return value.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function domToMutation(xmlElement) {
    var value = xmlElement.getAttribute('value');
    this.hasReturnValue = value === '1';

    if (!this.hasReturnValue) {
      this.removeInput('VALUE');
      this.appendDummyInput('VALUE').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('return'));
      this.initSvg();
      this.render();
    }
  },

  /**
   * Called whenever anything on the workspace changes.
   * Add warning if this flow block is not nested inside a loop.
   * @param {!Blockly.Events.Abstract} e Change event.
   * @this Blockly.Block
   */
  onchange: function onchange()
  /* e */
  {
    var _this = this;

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setBlockTextColor"])(this);

    if (!this.workspace.isDragging || this.workspace.isDragging()) {
      return; // Don't change state at the start of a drag.
    }

    var legal = false; // Is the block nested in a procedure?

    var block = this;

    do {
      if (this.FUNCTION_TYPES.indexOf(block.type) !== -1) {
        legal = true;
        break;
      }

      block = block.getSurroundParent();
    } while (block);

    if (legal) {
      var rerender = function rerender() {
        _this.initSvg();

        _this.render();
      }; // If needed, toggle whether this block has a return value.


      if (block.type === 'procedures_defnoreturn' && this.hasReturnValue) {
        this.removeInput('VALUE');
        this.appendDummyInput('VALUE').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('return'));
        rerender();
        this.hasReturnValue = false;
      } else if (block.type === 'procedures_defreturn' && !this.hasReturnValue) {
        this.removeInput('VALUE');
        this.appendValueInput('VALUE').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('return'));
        rerender();
        this.hasReturnValue = true;
      }

      if (!this.isInFlyout) {
        this.setDisabled(false);
      }
    } else if (!this.isInFlyout && !this.getInheritedDisabled()) {
      this.setDisabled(true);
    }
  },

  /**
   * List of block types that are functions and thus do not need warnings.
   * To add a new function type add this to your code:
   * Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('custom_func');
   */
  FUNCTION_TYPES: ['procedures_defnoreturn', 'procedures_defreturn']
};

__webpack_provided_Blockly_dot_JavaScript.procedures_ifreturn = function (block) {
  var condition = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'CONDITION', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || 'false';
  var branch;

  if (block.hasReturnValue) {
    var value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || 'null';
    branch = "return " + value + ";\n";
  } else {
    branch = 'return;\n';
  }

  var code = "\n    if (" + condition + ") {\n        " + branch + "\n    }\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_create_with.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_create_with.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.lists_create_with = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition()); // Render a ➕-icon for adding additional `lists_statement` blocks

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_0__["plusIconDark"], 25, 25, '', function () {
      return _this.onIconClick();
    });
    this.appendDummyInput('ADD_ICON').appendField(fieldImage);
    this.moveInputBefore('ADD_ICON', 'STACK');
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to create list with'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('list')
      }],
      args1: [{
        type: 'input_statement',
        name: 'STACK'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Create List with'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Create list with'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Create list with description')
    };
  },
  onIconClick: function onIconClick() {
    if (!this.workspace || this.isInFlyout) {
      return;
    }

    var statementBlock = this.workspace.newBlock('lists_statement');
    statementBlock.requiredParentId = this.id;
    statementBlock.setMovable(false);
    statementBlock.initSvg();
    statementBlock.render();
    var connection = this.getLastConnectionInStatement('STACK');
    connection.connect(statementBlock.previousConnection);
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.END_DRAG) {
      // Only allow `lists_statement` blocks to be part of the `STACK`
      var currentBlock = this.getInputTargetBlock('STACK');

      while (currentBlock !== null) {
        if (currentBlock.type !== 'lists_statement') {
          currentBlock.unplug(false);
        }

        currentBlock = currentBlock.getNextBlock();
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_create_with = function (block) {
  var variable = block.getFieldValue('VARIABLE'); // eslint-disable-next-line no-underscore-dangle

  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(variable, Blockly.Variables.NAME_TYPE);
  var elements = [];
  var currentBlock = block.getInputTargetBlock('STACK');

  while (currentBlock !== null) {
    var value = __webpack_provided_Blockly_dot_JavaScript[currentBlock.type](currentBlock);

    if (Array.isArray(value) && value.length === 2) {
      elements.push(value[0]);
    } else {
      elements.push(value);
    }

    currentBlock = currentBlock.getNextBlock();
  }

  var code = varName + " = [" + elements.join(', ') + "];\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_getIndex.js":
/*!************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_getIndex.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.lists_getIndex = {
  init: function init() {
    var _this = this;

    this.MODE_OPTIONS = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('get'), 'GET'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('get and remove'), 'GET_REMOVE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('remove'), 'REMOVE']];
    this.WHERE_OPTIONS = [['#', 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('# from end'), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('first'), 'FIRST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('last'), 'LAST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('random'), 'RANDOM']];
    var modeMenu = new Blockly.FieldDropdown(this.MODE_OPTIONS, function (value) {
      var isStatement = value === 'REMOVE';

      _this.updateStatement(isStatement);
    });
    this.appendValueInput('VALUE').setCheck('Array').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('in list'));
    this.appendDummyInput().appendField(modeMenu, 'MODE');
    this.appendDummyInput('AT'); // eslint-disable-next-line no-underscore-dangle

    this.setColourFromRawValues_(Blockly.Colours.Binary.colour, Blockly.Colours.Binary.colourSecondary, Blockly.Colours.Binary.colourTertiary);
    this.setOutput(true, null);
    this.updateAt(true);
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List Get Index'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List Get Index Description'),
      'category': Blockly.Categories.List
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    var isStatement = !this.outputConnection;
    var isAt = this.getInput('AT').type === Blockly.INPUT_VALUE;
    container.setAttribute('statement', isStatement);
    container.setAttribute('at', isAt);
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    var isStatement = xmlElement.getAttribute('statement') === 'true';
    this.updateStatement(isStatement);
    var isAt = xmlElement.getAttribute('at') !== 'false';
    this.updateAt(isAt);
  },
  updateStatement: function updateStatement(newStatement) {
    var oldStatement = !this.outputConnection;

    if (newStatement !== oldStatement) {
      this.unplug(true, true);
      this.setOutput(!newStatement);
      this.setPreviousStatement(newStatement);
      this.setNextStatement(newStatement);
      this.initSvg();
      this.render(false);
    }
  },
  updateAt: function updateAt(isAt) {
    var _this2 = this;

    this.removeInput('AT', true);

    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
    } else {
      this.appendDummyInput('AT');
    }

    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (value) {
      var newAt = ['FROM_START', 'FROM_END'].includes(value);

      if (newAt !== isAt) {
        _this2.updateAt(newAt);

        _this2.setFieldValue(value, 'WHERE');

        return null;
      }

      return undefined;
    });
    this.getInput('AT').appendField(menu, 'WHERE');
    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_getIndex = function (block) {
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FIRST';
  var listOrder = where === 'RANDOM' ? __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA : __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', listOrder) || '[]';
  var code, order;

  if (where === 'FIRST') {
    if (mode === 'GET') {
      code = list + "[0]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
    } else if (mode === 'GET_REMOVE') {
      code = list + ".shift()";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
    } else if (mode === 'REMOVE') {
      return list + ".shift();\n";
    }
  } else if (where === 'LAST') {
    if (mode === 'GET') {
      code = list + ".slice(-1)[0]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
    } else if (mode === 'GET_REMOVE') {
      code = list + ".pop()";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
    } else if (mode === 'REMOVE') {
      return list + ".pop();\n";
    }
  } else if (where === 'FROM_START') {
    var at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT');

    if (mode === 'GET') {
      code = list + "[" + at + "]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
    } else if (mode === 'GET_REMOVE') {
      code = list + ".splice(" + at + ", 1)[0]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL;
    } else if (mode === 'REMOVE') {
      return list + ".splice(" + at + ", 1);\n";
    }
  } else if (where === 'FROM_END') {
    var _at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT', 1, true);

    if (mode === 'GET') {
      code = list + ".slice(" + _at + ")[0]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL;
    } else if (mode === 'GET_REMOVE') {
      code = list + ".splice(" + _at + ", 1)[0]";
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL;
    } else if (mode === 'REMOVE') {
      return list + ".splice(" + _at + ", 1);\n";
    }
  } else if (where === 'RANDOM') {
    // eslint-disable-next-line no-underscore-dangle
    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('listsGetRandomItem', [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {\n                var x = Math.floor(Math.random() * list.length);\n                if (remove) {\n                    return list.splice(x, 1)[0];\n                } else {\n                    return list[x];\n                }\n            }"]);
    code = functionName + "(" + list + ", " + (mode !== 'GET') + ")";

    if (mode === 'GET' || mode === 'GET_REMOVE') {
      order = __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL;
    } else if (mode === 'REMOVE') {
      return code + ";\n";
    }
  }

  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_getSublist.js":
/*!**************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_getSublist.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");




Blockly.Blocks.lists_getSublist = {
  init: function init() {
    this.WHERE_OPTIONS_1 = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('get sub-list from #'), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('get sub-list from # from end'), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('get sub-list from first'), 'FIRST']];
    this.WHERE_OPTIONS_2 = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('#'), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('# from end'), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('last'), 'LAST']];
    this.appendValueInput('LIST').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('in list'));
    this.appendDummyInput('AT1');
    this.appendDummyInput('AT2'); // eslint-disable-next-line no-underscore-dangle

    this.setColourFromRawValues_(Blockly.Colours.Binary.colour, Blockly.Colours.Binary.colourSecondary, Blockly.Colours.Binary.colourTertiary);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.updateAt(1, true);
    this.updateAt(2, true);
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('List get sublit'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('List get sublist description'),
      'category': Blockly.Categories.List
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    var isAt1 = this.getInput('AT1').type === Blockly.INPUT_VALUE;
    var isAt2 = this.getInput('AT2').type === Blockly.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    container.setAttribute('at2', isAt2);
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    var isAt1 = xmlElement.getAttribute('at1') === 'true';
    var isAt2 = xmlElement.getAttribute('at2') === 'true';
    this.updateAt(1, isAt1);
    this.updateAt(2, isAt2);
  },
  updateAt: function updateAt(n, isAt) {
    var _this = this;

    this.removeInput("AT" + n);

    if (isAt) {
      this.appendValueInput("AT" + n).setCheck('Number');
    } else {
      this.appendDummyInput("AT" + n);
    }

    var menu = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + n], function (value) {
      var newAt = ['FROM_START', 'FROM_END'].includes(value);

      if (newAt !== isAt) {
        _this.updateAt(n, newAt);

        _this.setFieldValue(value, "WHERE" + n);

        return null;
      }

      return undefined;
    });
    this.getInput("AT" + n).appendField(menu, "WHERE" + n);

    if (n === 1) {
      this.moveInputBefore('AT1', 'AT2');
    }

    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_getSublist = function (block) {
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1, at2, code;

  if (list.match(/^\w+$/)) {
    if (where1 === 'FROM_START') {
      at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1');
    } else if (where1 === 'FROM_END') {
      at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1', 1, false, __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION);
      at1 = list + ".length - " + at1;
    }

    if (where2 === 'FROM_START') {
      at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2', 1);
    } else if (where2 === 'FROM_END') {
      at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2', 0, false, __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION);
      at2 = list + ".length - " + at2;
    }

    code = list + ".slice(" + at1 + ", " + at2 + ")";
  } else {
    at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1');
    at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2');
    var wherePascalCase = {
      FROM_START: 'FromStart',
      FROM_END: 'FromEnd'
    };

    var getIndex = function getIndex(listName, where, at) {
      return where === 'FROM_END' ? listName + ".length - 1 - " + at : at;
    }; // eslint-disable-next-line no-underscore-dangle


    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_("subsequence" + wherePascalCase[where1] + wherePascalCase[where2], [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(sequence, at1, at2) {\n                var start = " + getIndex('sequence', where1, 'at1') + ";\n                var end = " + getIndex('sequence', where2, 'at2') + ";\n                return sequence.slice(start, end);\n            }"]);
    code = functionName + "(" + list + ", " + at1 + ", " + at2 + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_indexOf.js":
/*!***********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_indexOf.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lists_indexOf = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('in list %1 find %2 occurence of item %3'),
      args0: [{
        type: 'input_value',
        name: 'VALUE'
      }, {
        type: 'field_dropdown',
        name: 'END',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('first'), 'FIRST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('last'), 'LAST']]
      }, {
        type: 'input_value',
        name: 'FIND'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Index of List Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Index Of List'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Index of List Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_indexOf = function (block) {
  var operator = block.getFieldValue('END') === 'FIRST' ? 'indexOf' : 'lastIndexOf';
  var item = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'FIND', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '\'\'';
  var code = list + "." + operator + "(" + item + ")";

  if (block.workspace.options.oneBasedIndex) {
    return [code + " + 1", __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION];
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_isEmpty.js":
/*!***********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_isEmpty.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.lists_isEmpty = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('list %1 is empty'),
      args0: [{
        type: 'input_value',
        name: 'VALUE',
        check: ['Array']
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List is Empty Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List is Empty'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List is empty Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_isEmpty = function (block) {
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '[]';
  var isVariable = block.workspace.getAllVariables().findIndex(function (variable) {
    return variable.name === list;
  }) !== -1;
  var code = isVariable ? "!" + list + " || !" + list + ".length" : "!" + list + ".length";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_length.js":
/*!**********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_length.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lists_length = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('length of %1'),
      args0: [{
        type: 'input_value',
        name: 'VALUE'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Length Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Length'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Length Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_length = function (block) {
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '[]';
  var code = list + ".length";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_repeat.js":
/*!**********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_repeat.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lists_repeat = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('set %1 to item %2 repeated %3 times'),
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('list')
      }, {
        type: 'input_value',
        name: 'ITEM'
      }, {
        type: 'input_value',
        name: 'NUM'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Repeat Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Repeat'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Repeat Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_repeat = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE); // eslint-disable-next-line no-underscore-dangle

  var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('listsRepeat', [// eslint-disable-next-line no-underscore-dangle
  "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {\n            var array = [];\n            for (var i = 0; i < n; i++) {\n                array[i] = value;\n            }\n            return array;\n        }"]);
  var element = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'ITEM', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || 'null';
  var repeatCount = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUM', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0';
  var code = varName + " = " + functionName + "(" + element + ", " + repeatCount + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_setIndex.js":
/*!************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_setIndex.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");




Blockly.Blocks.lists_setIndex = {
  init: function init() {
    this.MODE_OPTIONS = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('set'), 'SET'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('insert at'), 'INSERT']];
    this.WHERE_OPTIONS = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('#'), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('# from end'), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('first'), 'FIRST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('last'), 'LAST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('random'), 'RANDOM']];
    this.appendValueInput('LIST').setCheck('Array').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('in list'));
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(this.MODE_OPTIONS), 'MODE');
    this.appendDummyInput('AT');
    this.appendValueInput('TO').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('as')); // eslint-disable-next-line no-underscore-dangle

    this.setColourFromRawValues_(Blockly.Colours.Binary.colour, Blockly.Colours.Binary.colourSecondary, Blockly.Colours.Binary.colourTertiary);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.updateAt(true);
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('List set Index'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('List set Index'),
      'category': Blockly.Categories.List
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    var isAt = this.getInput('AT').type === Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    var isAt = xmlElement.getAttribute('at') !== 'false';
    this.updateAt(isAt);
  },
  updateAt: function updateAt(isAt) {
    var _this = this;

    this.removeInput('AT', true);

    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
    } else {
      this.appendDummyInput('AT');
    }

    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (value) {
      var newAt = ['FROM_START', 'FROM_END'].includes(value);

      if (newAt !== isAt) {
        _this.updateAt(newAt);

        _this.setFieldValue(value, 'WHERE');

        return null;
      }

      return undefined;
    });
    this.moveInputBefore('AT', 'TO');
    this.getInput('AT').appendField(menu, 'WHERE');
    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_setIndex = function (block) {
  var mode = block.getFieldValue('MODE') || 'SET';
  var where = block.getFieldValue('WHERE') || 'FIRST';
  var value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TO', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || 'null';
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '[]';

  var cacheList = function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    } // eslint-disable-next-line no-underscore-dangle


    var listVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('tmpList', Blockly.Variables.NAME_TYPE);
    var code = "var " + listVar + " = " + list + ";\n";
    list = listVar;
    return code;
  };

  var code;

  if (where === 'FIRST') {
    if (mode === 'SET') {
      code = list + "[0] = " + value + ";\n";
    } else if (mode === 'INSERT') {
      code = list + ".unshift(" + value + ");\n";
    }
  } else if (where === 'LAST') {
    if (mode === 'SET') {
      code = cacheList();
      code += list + "[" + list + ".length - 1] = " + value + ";\n";
    } else if (mode === 'INSERT') {
      code = list + ".push(" + value + ");\n";
    }
  } else if (where === 'FROM_START') {
    var at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT');

    if (mode === 'SET') {
      code = list + "[" + at + "] = " + value + ";\n";
    } else if (mode === 'INSERT') {
      code = list + ".splice(" + at + ", 0, " + value + ");\n";
    }
  } else if (where === 'FROM_END') {
    var _at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT', 1, false, __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION);

    code = cacheList();

    if (mode === 'SET') {
      code = list + "[" + list + ".length - " + _at + "] = " + value + ";\n";
    } else if (mode === 'INSERT') {
      code = list + ".splice(" + list + ".length - " + _at + ", 0, " + value + ");\n";
    }
  } else if (where === 'RANDOM') {
    code = cacheList(); // eslint-disable-next-line no-underscore-dangle

    var xVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('tmpX', Blockly.Variables.NAME_TYPE);
    code += "var " + xVar + " = Math.floor(Math.random() * " + list + ".length);\n";

    if (mode === 'SET') {
      code += list + "[" + xVar + "] = " + value + ";\n";
    } else if (mode === 'INSERT') {
      code += list + ".splice(" + xVar + ", 0, " + value + ");\n";
    }
  }

  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_sort.js":
/*!********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_sort.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lists_sort = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('sort %1 %2 %3'),
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('numeric'), 'NUMERIC'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('alphabetic'), 'TEXT']]
      }, {
        type: 'field_dropdown',
        name: 'DIRECTION',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('ascending'), '1'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('descending'), '-1']]
      }, {
        type: 'input_value',
        name: 'LIST'
      }],
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Sort Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Sort'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Sort Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_sort = function (block) {
  var list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL) || '[]';
  var direction = block.getFieldValue('DIRECTION') === '1' ? 1 : -1;
  var type = block.getFieldValue('TYPE'); // eslint-disable-next-line no-underscore-dangle

  var getCompareFunctionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('listsGetSortCompare', [// eslint-disable-next-line no-underscore-dangle
  "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(type, direction) {\n            var compareFuncs = {\n                NUMERIC: function(a, b) {\n                    return parseFloat(a) - parseFloat(b);\n                },\n                TEXT: function(a, b) {\n                    return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1;\n                }\n            };\n\n            return function(a, b) {\n                return compareFuncs[type](a, b) * direction; \n            }\n        }"]);
  var code = list + ".slice(0).sort(" + getCompareFunctionName + "(\"" + type + "\", " + direction + "))";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_split.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_split.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lists_split = {
  init: function init() {
    var _this = this;

    var dropdown = new Blockly.FieldDropdown([[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('make list from text'), 'SPLIT'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('make text from list'), 'JOIN']], function (newMode) {
      return _this.updateType(newMode);
    });
    this.appendValueInput('INPUT').setCheck('String').appendField(dropdown, 'MODE');
    this.appendValueInput('DELIM').setCheck('String').appendField('', 'SPACE1').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('with delimiter'), 'DELIM_LABEL');
    this.appendDummyInput().appendField('', 'SPACE2');
    this.setOutput(true, 'Array');
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND); // eslint-disable-next-line no-underscore-dangle

    this.setColourFromRawValues_(Blockly.Colours.Binary.colour, Blockly.Colours.Binary.colourSecondary, Blockly.Colours.Binary.colourTertiary);
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List Split'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('List SPlit Description'),
      'category': Blockly.Categories.List
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    container.setAttribute('mode', this.getFieldValue('MODE'));
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    this.updateType(xmlElement.getAttribute('mode'));
  },
  updateType: function updateType(newMode) {
    var delimInput = this.getInput('DELIM');
    var spaceField = this.getField('SPACE1');

    if (newMode === 'SPLIT') {
      this.outputConnection.setCheck('Array');
      this.getInput('INPUT').setCheck('String'); // Create extra spacing for OUTPUT_SHAPE_SQUARE (i.e. string shapes)

      if (!spaceField) {
        delimInput.insertFieldAt(0, '', 'SPACE1');
      }
    } else {
      this.outputConnection.setCheck('String');
      this.getInput('INPUT').setCheck(null);

      if (spaceField) {
        delimInput.removeField('SPACE1');
      }
    }

    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_split = function (block) {
  var input = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'INPUT', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER);
  var delimiter = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DELIM', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  var mode = block.getFieldValue('MODE');
  var code;

  if (mode === 'SPLIT') {
    code = (input || '\'\'') + ".split(" + delimiter + ")";
  } else if (mode === 'JOIN') {
    code = (input || '[]') + ".join(" + delimiter + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/List/lists_statement.js":
/*!*************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/List/lists_statement.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.lists_statement = {
  init: function init() {
    var _this = this;

    this.requiredParentId = '';
    this.jsonInit(this.definition()); // Render a ➖-icon for removing self

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_1__["minusIconDark"], 25, 25, '', function () {
      return _this.onIconClick();
    });
    this.appendDummyInput('REMOVE_ICON').appendField(fieldImage);
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List Statement Tooltip'),
      category: Blockly.Categories.List
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('List Statement Description')
    };
  },
  onIconClick: function onIconClick() {
    if (!this.workspace || this.isInFlyout) {
      return;
    }

    this.unplug(true);
    this.dispose();
  },
  onchange: function onchange(event) {
    var _this2 = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    var surroundParent = this.getSurroundParent();

    if (event.type === Blockly.Events.END_DRAG) {
      if (!this.requiredParentId && surroundParent.type === 'lists_create_with') {
        this.requiredParentId = surroundParent.id;
      } else if (!surroundParent || surroundParent.id !== this.requiredParentId) {
        Blockly.Events.disable();
        this.unplug(false);
        var parentBlock = this.workspace.getAllBlocks().find(function (block) {
          return block.id === _this2.requiredParentId;
        });

        if (parentBlock) {
          var parentConnection = parentBlock.getLastConnectionInStatement('STACK');
          parentConnection.connect(this.previousConnection);
        } else {
          this.dispose();
        }

        Blockly.Events.enable();
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.lists_statement = function (block) {
  var code = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE') || 'null';
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_flow_statements.js":
/*!***********************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_flow_statements.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.controls_flow_statements = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('%1 of loop'),
      args0: [{
        type: 'field_dropdown',
        name: 'FLOW',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('break out'), 'BREAK'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('continue with next iteration'), 'CONTINUE']]
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Statement Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Statement Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_flow_statements = function (block) {
  var keyword = block.getFieldValue('FLOW') === 'BREAK' ? 'break' : 'continue';
  return keyword + ";\n";
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_for.js":
/*!***********************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_for.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.controls_for = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('count with %1 from %2 to %3 by %4'),
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: null
      }, {
        type: 'input_value',
        name: 'FROM',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'TO',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'BY',
        check: 'Number'
      }],
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('do %1'),
      args1: [{
        type: 'input_statement',
        name: 'DO'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control For Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control For'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control For Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_for = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var variable0 = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'FROM', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TO', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'BY', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || '1';
  var branch = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'DO');
  branch = __webpack_provided_Blockly_dot_JavaScript.addLoopTrap(branch, block.id);
  var code = '';

  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) && Blockly.isNumber(increment)) {
    var up = parseFloat(argument0) <= parseFloat(argument1);
    var operator = up ? '<=' : '>=';
    var step = Math.abs(parseFloat(increment));
    var assignment = variable0 + " = " + argument0;
    var condition = variable0 + " " + operator + " " + argument1;
    var statement = variable0 + " " + (up ? '+=' : '-=') + " " + step;
    code = "\n        for (" + assignment + "; " + condition + "; " + statement + ") {\n            " + branch + "\n        }\n";
  } else {
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;

    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      // eslint-disable-next-line no-underscore-dangle
      startVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName(variable0 + "_start", Blockly.Variables.NAME_TYPE);
      code = "var " + startVar + " = " + argument0 + ";\n";
    }

    var endVar = argument1;

    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      // eslint-disable-next-line no-underscore-dangle
      endVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName(variable0 + "_end", Blockly.Variables.NAME_TYPE);
      code += "var " + endVar + " = " + argument1 + ";\n";
    } // Determine loop direction at start, in case one of the bounds changes during loop execution.
    // eslint-disable-next-line no-underscore-dangle


    var incVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName(variable0 + "_inc", Blockly.Variables.NAME_TYPE);
    var incVal = Blockly.isNumber(increment) ? Math.abs(increment) : "Math.abs(" + increment + ")";
    code += "\n        var " + incVar + " = " + incVal + ";\n        if (" + startVar + " > " + endVar + ") {\n            " + incVar + " = -" + incVar + ";\n        }\n        for (\n           " + variable0 + " = " + startVar + "; \n           " + incVar + " >= 0 ? " + variable0 + " <= " + endVar + " : " + variable0 + " >= " + endVar + ";\n           " + variable0 + " += " + incVar + "\n        ) {\n            " + branch + ";\n        }\n";
  }

  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_forEach.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_forEach.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.controls_forEach = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('for each item %1 in list %2'),
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: null
      }, {
        type: 'input_value',
        name: 'LIST',
        check: 'Array'
      }],
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('do %1'),
      args1: [{
        type: 'input_statement',
        name: 'DO'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control Foreach Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control Foreach'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Control Foreach')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_forEach = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var variable0 = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || '[]';
  var branch = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'DO');
  branch = __webpack_provided_Blockly_dot_JavaScript.addLoopTrap(branch, block.id);
  var code = ''; // Cache non-trivial values to variables to prevent repeated look-ups.

  var listVar = argument0;

  if (!argument0.match(/^\w+$/)) {
    // eslint-disable-next-line no-underscore-dangle
    listVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName(variable0 + "_list", Blockly.Variables.NAME_TYPE);
    code = "var " + listVar + " = " + argument0 + ";\n";
  } // eslint-disable-next-line no-underscore-dangle


  var indexVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName(variable0 + "_list", Blockly.Variables.NAME_TYPE);
  code += "\n    for (var " + indexVar + " in " + listVar + ") {\n        " + variable0 + " = " + listVar + "[" + indexVar + "];\n        " + branch + "\n    }\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_repeat.js":
/*!**************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_repeat.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.controls_repeat = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      type: 'controls_repeat',
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('repeat %1 times'),
      args0: [{
        type: 'field_number',
        name: 'TIMES',
        value: 10,
        min: 0,
        precision: 1
      }],
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('do %1'),
      args1: [{
        type: 'input_statement',
        name: 'DO'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Repeat Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Repeat'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control Repeat Description')
    };
  }
};
__webpack_provided_Blockly_dot_JavaScript.controls_repeat = __webpack_provided_Blockly_dot_JavaScript.controls_repeat_ext;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_repeat_ext.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_repeat_ext.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.controls_repeat_ext = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('repeat %1 times'),
      args0: [{
        type: 'input_value',
        name: 'TIMES',
        check: 'Number'
      }],
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('do %1'),
      args1: [{
        type: 'input_statement',
        name: 'DO'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Control Repeat Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Control Repeat'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Control Repeat Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_repeat_ext = function (block) {
  var repeats;

  if (block.getField('TIMES')) {
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    repeats = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TIMES') || '0';
  }

  var branch = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'DO');
  var code = ''; // eslint-disable-next-line no-underscore-dangle

  var loopVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;

  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    // eslint-disable-next-line no-underscore-dangle
    endVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
    code += "var " + endVar + " = " + repeats + ";\n";
  }

  code += "\n    for (var " + loopVar + " = 0; " + loopVar + " < " + endVar + "; " + loopVar + "++) {\n        " + branch + "\n    }\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Loops/controls_whileUntil.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Loops/controls_whileUntil.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.controls_whileUntil = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('repeat %1 %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'MODE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('while'), 'WHILE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('until'), 'UNTIL']]
      }, {
        type: 'input_value',
        name: 'BOOL',
        check: 'Boolean'
      }],
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('do %1'),
      args1: [{
        type: 'input_statement',
        name: 'DO'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control While Tooltip'),
      category: Blockly.Categories.Loop
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control While'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Control While Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_whileUntil = function (block) {
  var branch = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'DO');
  var until = block.getFieldValue('MODE') === 'UNTIL';
  var order = until ? __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT : __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE;
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'BOOL', order) || 'false';

  if (until) {
    argument0 = "!" + argument0;
  } // eslint-disable-next-line no-underscore-dangle


  var maxLoopVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('maxLoops', Blockly.Variables.NAME_TYPE); // eslint-disable-next-line no-underscore-dangle

  var currentLoopVar = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getDistinctName('currentLoop', Blockly.Variables.NAME_TYPE);
  return "\n        var " + maxLoopVar + " = 10000;\n        var " + currentLoopVar + " = 0;\n\n        while (" + argument0 + ") {\n            if (" + currentLoopVar + " > " + maxLoopVar + ") {\n                throw new Error(\"" + Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Infinite loop detected') + "\");\n            } else {\n                " + currentLoopVar + "++;\n            }\n            \n            " + branch + "\n        }\n";
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Variable/variables_get.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Variable/variables_get.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.variables_get = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      type: 'variables_get',
      message0: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('item')
      }],
      output: null,
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Get Variable Tooltip'),
      category: Blockly.Categories.Variables
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Get Variable Value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Get Variable Value Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.variables_get = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var code = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Advanced/Variable/variables_set.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Advanced/Variable/variables_set.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.variables_set = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      type: 'field_variable',
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('set %1 to %2'),
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('item')
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Set Variable Tooltip'),
      category: Blockly.Categories.Variables
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Set Variable'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Set Variable Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.variables_set = function (block) {
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_ASSIGNMENT) || '0'; // eslint-disable-next-line no-underscore-dangle

  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = varName + " = " + argument0 + ";\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/After Purchase/after_purchase.js":
/*!********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/After Purchase/after_purchase.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");





Blockly.Blocks.after_purchase = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('%1 (4) Get your trade result and trade again %2'),
      message1: '%1',
      args0: [{
        type: 'field_image',
        src: _images__WEBPACK_IMPORTED_MODULE_2__["finishSign"],
        width: 25,
        height: 25,
        alt: 'F'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'AFTERPURCHASE_STACK',
        check: 'TradeAgain'
      }],
      colour: '#2a3052',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Get the previous trade information and result, then trade again (Runs on trade finish)'),
      category: Blockly.Categories.After_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('After Purchase'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('After Purchase Description')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setBlockTextColor"])(this);

    if (!this.workspace || this.isInFlyout) {
      return;
    } // Maintain single instance of this block


    if (event.type === Blockly.Events.BLOCK_CREATE) {
      if (event.ids && event.ids.includes(this.id)) {
        this.workspace.getAllBlocks(true).forEach(function (block) {
          if (block.type === _this.type && block.id !== _this.id) {
            block.dispose();
          }
        });
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.after_purchase = function (block) {
  var stack = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'AFTERPURCHASE_STACK');
  var code = "\n    BinaryBotPrivateAfterPurchase = function BinaryBotPrivateAfterPurchase() {\n        " + stack + "\n        return false;\n    };";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/After Purchase/check_result.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/After Purchase/check_result.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.contract_check_result = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Result is %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'CHECK_RESULT',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.CHECK_RESULT
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('True if the result matches the selection'),
      category: Blockly.Categories.After_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Check Result'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Check Result Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('after_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.contract_check_result = function (block) {
  var checkWith = block.getFieldValue('CHECK_RESULT');
  var code = "Bot.isResult('" + checkWith + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/After Purchase/read_details.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/After Purchase/read_details.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.read_details = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Contract Detail: %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'DETAIL_INDEX',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.DETAILS
      }],
      output: null,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Reads a selected option from contract details list'),
      category: Blockly.Categories.After_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read Detail Block'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read Detail Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('after_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.read_details = function (block) {
  var detailIndex = block.getFieldValue('DETAIL_INDEX');
  var code = "Bot.readDetails(" + detailIndex + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/After Purchase/trade_again.js":
/*!*****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/After Purchase/trade_again.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.trade_again = {
  init: function init() {
    this.jsonInit(this.definition()); // Ensure one of this type per statement-stack

    this.setNextStatement(false);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Trade Again'),
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Runs the trade block again'),
      category: Blockly.Categories.After_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Trade Again'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Trade Again Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('after_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.trade_again = function () {
  return 'return true;\n';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Before Purchase/ask_price.js":
/*!****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Before Purchase/ask_price.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.ask_price = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Ask Price %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'PURCHASE_LIST',
        options: _shared__WEBPACK_IMPORTED_MODULE_0__["getPurchaseChoices"]
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Ask Price for selected proposal'),
      category: Blockly.Categories.Before_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Ask Price'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Ask Price Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('before_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.ask_price = function (block) {
  var purchaseList = block.getFieldValue('PURCHASE_LIST');
  var code = "Bot.getAskPrice('" + purchaseList + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Before Purchase/before_purchase.js":
/*!**********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Before Purchase/before_purchase.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");





Blockly.Blocks.before_purchase = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('%1 (2) Watch and purchase your contract %2'),
      message1: '%1',
      args0: [{
        type: 'field_image',
        src: _images__WEBPACK_IMPORTED_MODULE_2__["purchase"],
        width: 25,
        height: 25,
        alt: 'P'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'BEFOREPURCHASE_STACK',
        check: 'Purchase'
      }],
      colour: '#2a3052',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Watch the tick stream and purchase the desired contract (Runs on tick update)'),
      category: Blockly.Categories.Before_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Before Purchase'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Before Purchase Description')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setBlockTextColor"])(this);

    if (!this.workspace || this.isInFlyout) {
      return;
    } // Maintain single instance of this block


    if (event.type === Blockly.Events.BLOCK_CREATE) {
      if (event.ids && event.ids.includes(this.id)) {
        this.workspace.getAllBlocks(true).forEach(function (block) {
          if (block.type === _this.type && block.id !== _this.id) {
            block.dispose();
          }
        });
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.before_purchase = function (block) {
  var stack = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'BEFOREPURCHASE_STACK');
  var code = "BinaryBotPrivateBeforePurchase = function BinaryBotPrivateBeforePurchase() {\n        " + stack + "\n    };\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Before Purchase/payout.js":
/*!*************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Before Purchase/payout.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.payout = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Payout %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'PURCHASE_LIST',
        options: _shared__WEBPACK_IMPORTED_MODULE_0__["getPurchaseChoices"]
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Payout for selected proposal'),
      category: Blockly.Categories.Before_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Payout'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Payout Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('before_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.payout = function (block) {
  var purchaseList = block.getFieldValue('PURCHASE_LIST');
  var code = "Bot.getPayout('" + purchaseList + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Before Purchase/purchase.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Before Purchase/purchase.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");





Blockly.Blocks.purchase = {
  init: function init() {
    this.jsonInit(this.definition()); // Ensure one of this type per statement-stack

    this.setNextStatement(false);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Purchase %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'PURCHASE_LIST',
        options: _shared__WEBPACK_IMPORTED_MODULE_3__["getPurchaseChoices"]
      }],
      previousStatement: null,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Payout for selected proposal'),
      category: Blockly.Categories.Before_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Puchase'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Purchase Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (this.isDescendantOf('before_purchase')) {
      if (this.disabled) {
        this.setDisabled(false);
      }
    } else if (!this.disabled) {
      this.setDisabled(true);
    }

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === Blockly.Events.BLOCK_CHANGE) {
      var trade_definition_block = this.workspace.getAllBlocks(true).find(function (block) {
        return block.type === 'trade_definition';
      });

      if (!trade_definition_block) {
        return;
      }

      var trade_type_block = trade_definition_block.getChildByType('trade_definition_tradetype');
      var contract_type_block = trade_definition_block.getChildByType('trade_definition_contracttype');
      var trade_type = trade_type_block.getFieldValue('TRADETYPE_LIST');
      var opposite_name = trade_type.toUpperCase();
      var contract_type = contract_type_block.getFieldValue('TYPE_LIST');

      if (opposite_name && opposite_name !== 'NA' && trade_type && contract_type) {
        Object(_shared__WEBPACK_IMPORTED_MODULE_3__["updatePurchaseChoices"])(contract_type, opposite_name);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.purchase = function (block) {
  var purchaseList = block.getFieldValue('PURCHASE_LIST');
  var code = "Bot.purchase('" + purchaseList + "');\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/During Purchase/check_sell.js":
/*!*****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/During Purchase/check_sell.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.check_sell = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell is available'),
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('True if sell at market is available'),
      category: Blockly.Categories.During_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Check Sell'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Check Sell Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('during_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.check_sell = function () {
  var code = 'Bot.isSellAvailable()';
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/During Purchase/during_purchase.js":
/*!**********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/During Purchase/during_purchase.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");





Blockly.Blocks.during_purchase = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('%1 (3) Watch and sell your purchased contract %2'),
      message1: '%1',
      args0: [{
        type: 'field_image',
        src: _images__WEBPACK_IMPORTED_MODULE_2__["sellContract"],
        width: 25,
        height: 25,
        alt: 'S'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'DURING_PURCHASE_STACK',
        check: 'SellAtMarket'
      }],
      colour: '#2a3052',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Watch the purchased contract info and sell at market if available (Runs on contract update)'),
      category: Blockly.Categories.During_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('During Purchase'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('During Purchase Description')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setBlockTextColor"])(this);

    if (!this.workspace || this.isInFlyout) {
      return;
    } // Maintain single instance of this block


    if (event.type === Blockly.Events.BLOCK_CREATE) {
      if (event.ids && event.ids.includes(this.id)) {
        this.workspace.getAllBlocks(true).forEach(function (block) {
          if (block.type === _this.type && block.id !== _this.id) {
            block.dispose();
          }
        });
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.during_purchase = function (block) {
  var stack = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'DURING_PURCHASE_STACK');
  var code = "BinaryBotPrivateDuringPurchase = function BinaryBotPrivateDuringPurchase() {\n        " + stack + "\n    };\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/During Purchase/sell_at_market.js":
/*!*********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/During Purchase/sell_at_market.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.sell_at_market = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell at market'),
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell at market'),
      category: Blockly.Categories.During_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell at market'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell at market description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('during_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.sell_at_market = function () {
  return 'Bot.sellAtMarket();\n';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/During Purchase/sell_price.js":
/*!*****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/During Purchase/sell_price.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.sell_price = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell profit/loss'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the profit for sell at market.'),
      category: Blockly.Categories.During_Purchase
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell price'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Sell price description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
      if (this.isDescendantOf('during_purchase')) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.sell_price = function () {
  var code = 'Bot.getSellPrice()';
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/fast_ema_period.js":
/*!***********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/fast_ema_period.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.fast_ema_period = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Fast EMA Period %1'),
      args0: [{
        type: 'input_value',
        name: 'FAST_EMA_PERIOD',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['macda_statement']
};

__webpack_provided_Blockly_dot_JavaScript.fast_ema_period = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/input_list.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/input_list.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");




Blockly.Blocks.input_list = {
  init: function init() {
    this.requiredParentId = '';
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Input List %1'),
      args0: [{
        type: 'input_value',
        name: 'INPUT_LIST',
        check: 'Array'
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: function onchange(event) {
    var _this = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    var surroundParent = this.getSurroundParent();

    if (event.type === Blockly.Events.END_DRAG) {
      if (!this.requiredParentId && this.allowedParents.includes(surroundParent.type)) {
        this.requiredParentId = surroundParent.id;
      } else if (!surroundParent || surroundParent.id !== this.requiredParentId) {
        Blockly.Events.disable();
        this.unplug(false);
        var parentBlock = this.workspace.getAllBlocks().find(function (block) {
          return block.id === _this.requiredParentId;
        });

        if (parentBlock) {
          var parentConnection = parentBlock.getLastConnectionInStatement('STATEMENT');
          parentConnection.connect(this.previousConnection);
        } else {
          this.dispose();
        }

        Blockly.Events.enable();
      }
    }
  },
  allowedParents: ['bb_statement', 'bba_statement', 'ema_statement', 'emaa_statement', 'macda_statement', 'rsi_statement', 'rsia_statement', 'sma_statement', 'smaa_statement']
};

__webpack_provided_Blockly_dot_JavaScript.input_list = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/period.js":
/*!**************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/period.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.period = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Period %1'),
      args0: [{
        type: 'input_value',
        name: 'PERIOD',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['bb_statement', 'bba_statement', 'ema_statement', 'emaa_statement', 'macda_statement', 'rsi_statement', 'rsia_statement', 'sma_statement', 'smaa_statement']
};

__webpack_provided_Blockly_dot_JavaScript.period = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/signal_ema_period.js":
/*!*************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/signal_ema_period.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.signal_ema_period = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Signal EMA Period %1'),
      args0: [{
        type: 'input_value',
        name: 'SIGNAL_EMA_PERIOD',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['macda_statement']
};

__webpack_provided_Blockly_dot_JavaScript.signal_ema_period = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/slow_ema_period.js":
/*!***********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/slow_ema_period.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.slow_ema_period = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Slow EMA Period %1'),
      args0: [{
        type: 'input_value',
        name: 'SLOW_EMA_PERIOD',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['macda_statement']
};

__webpack_provided_Blockly_dot_JavaScript.slow_ema_period = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_down.js":
/*!*******************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_down.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.std_dev_multiplier_down = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Standard Deviation Down Multiplier %1'),
      args0: [{
        type: 'input_value',
        name: 'DOWNMULTIPLIER',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['bb_statement', 'bba_statement']
};

__webpack_provided_Blockly_dot_JavaScript.std_dev_multiplier_down = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_up.js":
/*!*****************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_up.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.std_dev_multiplier_up = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Standard Deviation Up Multiplier %1'),
      args0: [{
        type: 'input_value',
        name: 'UPMULTIPLIER',
        check: null
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null
    });
    this.setMovable(false);
    this.setDeletable(false);
  },
  onchange: Blockly.Blocks.input_list.onchange,
  allowedParents: ['bb_statement', 'bba_statement']
};

__webpack_provided_Blockly_dot_JavaScript.std_dev_multiplier_up = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/bb_statement.js":
/*!**************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/bb_statement.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");





Blockly.Blocks.bb_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('set %1 to Bollinger Bands %2 %3'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'bb'
      }, {
        type: 'field_dropdown',
        name: 'BBRESULT_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["default"].bbResult
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('Calculates Bollinger Bands (BB) from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('BB Statement'),
      'descriptionL': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])('BB Statement Description')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.END_DRAG) {
      var blocksInStatement = this.getBlocksInStatement('STATEMENT');
      blocksInStatement.forEach(function (block) {
        if (!_this.requiredParamBlocks.includes(block.type)) {
          Blockly.Events.disable();
          block.unplug(false);
          Blockly.Events.enable();
        }
      });
    }
  },
  requiredParamBlocks: ['input_list', 'period', 'std_dev_multiplier_up', 'std_dev_multiplier_down']
};

__webpack_provided_Blockly_dot_JavaScript.bb_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var bbResult = block.getFieldValue('BBRESULT_LIST');
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var stdDevUp = block.childValueToCode('std_dev_multiplier_up', 'UPMULTIPLIER') || '5';
  var stdDevDown = block.childValueToCode('std_dev_multiplier_down', 'DOWNMULTIPLIER') || '5';
  var code = varName + " = Bot.bb(" + input + ", { periods: " + period + ", stdDevUp: " + stdDevUp + ", stdDevDown: " + stdDevDown + " }, " + bbResult + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/bba_statement.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/bba_statement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.bba_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('set %1 to Bollinger Bands Array %2 %3'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'bba'
      }, {
        type: 'field_dropdown',
        name: 'BBRESULT_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].bbResult
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Calculates Bollinger Bands (BB) list from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Bollinger Bands Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Bollinger Bands Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period', 'std_dev_multiplier_up', 'std_dev_multiplier_down']
};

__webpack_provided_Blockly_dot_JavaScript.bba_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var bbResult = block.getFieldValue('BBRESULT_LIST');
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var stdDevUp = block.childValueToCode('std_dev_multiplier_up', 'UPMULTIPLIER') || '5';
  var stdDevDown = block.childValueToCode('std_dev_multiplier_down', 'DOWNMULTIPLIER') || '5';
  var code = varName + " = Bot.bba(" + input + ", { periods: " + period + ", stdDevUp: " + stdDevUp + ", stdDevDown: " + stdDevDown + " }, " + bbResult + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/ema_statement.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/ema_statement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.ema_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Exponentional Moving Average %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'ema'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Calculates Exponential Moving Average (EMA) from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Exponential Moving Average Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Exponential Moving Average Statement Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period']
};

__webpack_provided_Blockly_dot_JavaScript.ema_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var code = varName + " = Bot.ema(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/emaa_statement.js":
/*!****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/emaa_statement.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.emaa_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Exponentional Moving Average Array %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'emaa'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Calculates Exponential Moving Average (EMA) list from a list of values with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Exponential Moving Average Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Exponential Moving Average Statement Dscription')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period']
};

__webpack_provided_Blockly_dot_JavaScript.emaa_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var code = varName + " = Bot.emaa(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/macda_statement.js":
/*!*****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/macda_statement.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.macda_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('set %1 to MACD Array %2 %3'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'macda'
      }, {
        type: 'field_dropdown',
        name: 'MACDFIELDS_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].macdFields
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Calculates Moving Average Convergence Divergence (MACD) list from a list'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Moving Average Convergence Divergence'),
      'decription': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Moving Average Convergence Divergence Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'fast_ema_period', 'slow_ema_period', 'signal_ema_period']
};

__webpack_provided_Blockly_dot_JavaScript.macda_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var macdField = block.getFieldValue('MACDFIELDS_LIST');
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var fastEmaPeriod = block.childValueToCode('fast_ema_period', 'FAST_EMA_PERIOD') || '12';
  var slowEmaPeriod = block.childValueToCode('slow_ema_period', 'SLOW_EMA_PERIOD') || '26';
  var signalEmaPeriod = block.childValueToCode('signal_ema_period', 'SIGNAL_EMA_PERIOD') || '9';
  var code = varName + " = Bot.macda(" + input + ", { \n        fastEmaPeriod: " + fastEmaPeriod + ",\n        slowEmaPeriod: " + slowEmaPeriod + ",\n        signalEmaPeriod: " + signalEmaPeriod + ",\n    }, " + macdField + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/rsi_statement.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/rsi_statement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.rsi_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Relative Strength Index %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'rsi'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Relative Strength Index (RSI) from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Relative Strength Index Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Relative Strength Index Statement Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period']
};

__webpack_provided_Blockly_dot_JavaScript.rsi_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var code = varName + " = Bot.rsi(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/rsia_statement.js":
/*!****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/rsia_statement.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.rsia_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Relative Strength Index Array %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'rsia'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Calculates Relative Strength Index (RSI) list from a list of values with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Relative Strength Index Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Relative Strength Index Statement Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period']
};

__webpack_provided_Blockly_dot_JavaScript.rsia_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var code = varName + " = Bot.rsia(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/sma_statement.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/sma_statement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.sma_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Simple Moving Average %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'sma'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Calculates Simple Moving Average (SMA) from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('SImple Moving Average Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Simple Moving Average Statement Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange,
  requiredParamBlocks: ['input_list', 'period']
};

__webpack_provided_Blockly_dot_JavaScript.sma_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.getChildFieldValue('period', 'PERIOD') || '10';
  var code = varName + " = Bot.sma(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Indicators/smaa_statement.js":
/*!****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Indicators/smaa_statement.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/scratch/shared.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.smaa_statement = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to Simple Moving Average Array %2'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: 'smaa'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'STATEMENT',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Calculates Simple Moving Average (SMA) from a list with a period'),
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.Indicators
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Simple Moving Average Statement'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Simple Moving Average Statement Description')
    };
  },
  onchange: Blockly.Blocks.bb_statement.onchange
};

__webpack_provided_Blockly_dot_JavaScript.smaa_statement = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var input = Object(_shared__WEBPACK_IMPORTED_MODULE_0__["expectValue"])(block.getChildByType('input_list'), 'INPUT_LIST');
  var period = block.childValueToCode('period', 'PERIOD') || '10';
  var code = varName + " = Bot.smaa(" + input + ", " + period + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/check_direction.js":
/*!********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/check_direction.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.check_direction = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Direction is %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'CHECK_DIRECTION',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.CHECK_DIRECTION
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('True if the direction matches the selection'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Check Direction'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Check Direction Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.check_direction = function (block) {
  var checkWith = block.getFieldValue('CHECK_DIRECTION');
  var code = "Bot.checkDirection('" + checkWith + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/get_ohlc.js":
/*!*************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/get_ohlc.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.get_ohlc = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('in candle list get # from end %1'),
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('with interval: %1'),
      args0: [{
        type: 'input_value',
        name: 'CANDLEINDEX',
        check: 'Number'
      }],
      args1: [{
        type: 'field_dropdown',
        name: 'CANDLEINTERVAL_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].candleIntervals
      }],
      output: 'Candle',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Get the nth recent candle'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Nth recent Candle'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Nth recent Candle Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.get_ohlc = function (block) {
  var selectedGranularity = block.getFieldValue('CANDLEINTERVAL_LIST');
  var granularity = selectedGranularity === 'default' ? 'undefined' : selectedGranularity;
  var index = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'CANDLEINDEX', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC) || '1';
  var code = "Bot.getOhlcFromEnd({ index: " + index + ", granularity: " + granularity + " })";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/lastDigitList.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/lastDigitList.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.lastDigitList = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit List'),
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the list of last digit values'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit List'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit List Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.lastDigitList = function () {
  return ['Bot.getLastDigitList()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/last_digit.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/last_digit.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.last_digit = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the last digit of the latest tick'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Digit Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.last_digit = function () {
  return ['Bot.getLastDigit()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/ohlc.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/ohlc.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.ohlc = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Candles List'),
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('with interval: %1'),
      args1: [{
        type: 'field_dropdown',
        name: 'CANDLEINTERVAL_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].candleIntervals
      }],
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Returns the candle list'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Candle List'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Candle List Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.ohlc = function (block) {
  var selectedGranularity = block.getFieldValue('CANDLEINTERVAL_LIST');
  var granularity = selectedGranularity === 'default' ? 'undefined' : selectedGranularity;
  var code = "Bot.getOhlc({ granularity: " + granularity + " })";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/ohlc_values.js":
/*!****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/ohlc_values.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.ohlc_values = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Make a List of %1 values in candles list with interval: %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OHLCFIELD_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].ohlcFields
      }, {
        type: 'field_dropdown',
        name: 'CANDLEINTERVAL_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].candleIntervals
      }],
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Returns a list of the selected candle values'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Selected Candle Value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Selected Candle Value Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.ohlc_values = function (block) {
  var selectedGranularity = block.getFieldValue('CANDLEINTERVAL_LIST');
  var granularity = selectedGranularity === 'default' ? 'undefined' : selectedGranularity;
  var ohlcField = block.getFieldValue('OHLCFIELD_LIST');
  var code = "Bot.getOhlc({ field: '" + ohlcField + "', granularity: " + granularity + " })";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/readOhlc.js":
/*!*************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/readOhlc.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.read_ohlc = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('In candles list read %1 from end %2'),
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('with interval: %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'OHLCFIELD_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].ohlcFields
      }, {
        type: 'input_value',
        name: 'CANDLEINDEX',
        check: 'Number'
      }],
      args1: [{
        type: 'field_dropdown',
        name: 'CANDLEINTERVAL_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].candleIntervals
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read the selected candle value in the nth recent candle'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read selected candle'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read selected candle description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.read_ohlc = function (block) {
  var selectedGranularity = block.getFieldValue('CANDLEINTERVAL_LIST');
  var granularity = selectedGranularity === 'default' ? 'undefined' : selectedGranularity;
  var ohlcField = block.getFieldValue('OHLCFIELD_LIST');
  var index = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'CANDLEINDEX', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC) || '1';
  var code = "Bot.getOhlcFromEnd({ field: '" + ohlcField + "', index: " + index + ", granularity: " + granularity + " })";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/tick.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/tick.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.tick = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Last Tick'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the tick value received by a before purchase block'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick value Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.tick = function () {
  return ['Bot.getLastTick()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/tick_analysis.js":
/*!******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/tick_analysis.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.tick_analysis = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('This block is called on every tick %1 %2'),
      args0: [{
        type: 'input_dummy'
      }, {
        type: 'input_statement',
        name: 'TICKANALYSIS_STACK',
        check: null
      }],
      colour: '#fef1cf',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('You can use this block to analyze the ticks, regardless of your trades'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick Analysis'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick Analysis Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.tick_analysis = function (block) {
  var stack = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'TICKANALYSIS_STACK') || '';
  var code = "\n    BinaryBotPrivateTickAnalysisList.push(function BinaryBotPrivateTickAnalysis() {\n        " + stack + "\n    });\n";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tick Analysis/ticks.js":
/*!**********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tick Analysis/ticks.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.ticks = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Ticks List'),
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the list of tick values'),
      category: Blockly.Categories.Tick_Analysis
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick List'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Tick List Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.ticks = function () {
  return ['Bot.getTicks()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Candle/is_candle_black.js":
/*!*******************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Candle/is_candle_black.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.is_candle_black = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Is candle black? %1'),
      args0: [{
        type: 'input_value',
        name: 'OHLCOBJ',
        check: 'Candle'
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Checks if the given candle is black, returns true if close is less than open in the given candle.'),
      category: Blockly.Categories.Candle
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Is Candle Block'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Is Candle Black Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.is_candle_black = function (block) {
  var ohlcObj = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'OHLCOBJ') || '{}';
  var code = "Bot.isCandleBlack(" + ohlcObj + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Candle/ohlc_values_in_list.js":
/*!***********************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Candle/ohlc_values_in_list.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.ohlc_values_in_list = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Make a list of %1 values from candles list %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OHLCFIELD_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].ohlcFields
      }, {
        type: 'input_value',
        name: 'OHLCLIST'
      }],
      output: 'Array',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Returns a list of the selected candle values'),
      category: Blockly.Categories.Candle
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Selected Candle list value'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Selected Candle list value description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.ohlc_values_in_list = function (block) {
  var ohlcField = block.getFieldValue('OHLCFIELD_LIST') || 'open';
  var ohlcList = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'OHLCLIST') || '[]';
  var code = "Bot.candleValues(" + ohlcList + ", '" + ohlcField + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Candle/read_ohlc_obj.js":
/*!*****************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Candle/read_ohlc_obj.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.read_ohlc_obj = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read %1 value in candle %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OHLCFIELD_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].ohlcFields
      }, {
        type: 'input_value',
        name: 'OHLCOBJ'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read a field in a candle (read from the Candles list)'),
      category: Blockly.Categories.Candle
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read candle '),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Read candle Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.read_ohlc_obj = function (block) {
  var ohlcField = block.getFieldValue('OHLCFIELD_LIST');
  var ohlcObj = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'OHLCOBJ') || '{}';
  var code = "Bot.candleField(" + ohlcObj + ", '" + ohlcField + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./balance.js":
/*!**********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./balance.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.balance = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition()); // Change shape based on selected type

    var balanceTypeField = this.getField('BALANCE_TYPE');
    balanceTypeField.setValidator(function (value) {
      if (value === 'STR') {
        _this.setOutputShape(Blockly.OUTPUT_SHAPE_SQUARE);

        _this.setOutput(true, 'String');
      } else if (value === 'NUM') {
        _this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);

        _this.setOutput(true, 'Number');
      }

      _this.initSvg();

      _this.render(false);

      return undefined;
    });
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Balance: %1'),
      args0: [{
        type: 'field_dropdown',
        name: 'BALANCE_TYPE',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.BALANCE_TYPE
      }],
      output: null,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Balance Tooltip'),
      category: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Balance'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Balance Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.balance = function (block) {
  var balanceType = block.getFieldValue('BALANCE_TYPE');
  var code = "Bot.getBalance('" + balanceType + "')";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./block_holder.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./block_holder.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.block_holder = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Blocks inside are ignored %1 %2'),
      args0: [{
        type: 'input_dummy'
      }, {
        type: 'input_statement',
        name: 'USELESS_STACK',
        check: null
      }],
      colour: '#fef1cf',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Put your blocks in here to prevent them from being removed'),
      category: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Block Holder'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Block Holder Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.block_holder = function () {
  return '';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./loader.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./loader.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/observer */ "./src/utils/observer.js");







Blockly.Blocks.loader = {
  init: function init() {
    var _this = this;

    this.loadedByMe = [];
    this.loadedVariables = [];
    this.currentUrl = '';
    this.jsonInit(this.definition());
    var urlField = this.getField('URL'); // eslint-disable-next-line no-underscore-dangle

    urlField.onFinishEditing_ = function (newValue) {
      return _this.onFinishEditingUrl(newValue);
    };
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__["translate"])('Load block from: %1'),
      args0: [{
        type: 'field_input',
        name: 'URL',
        text: 'http://www.example.com/block.xml'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__["translate"])('Load blocks from URL'),
      category: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__["translate"])('Lodear'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__["translate"])('Loeder Description')
    };
  },
  onFinishEditingUrl: function onFinishEditingUrl(newValue) {
    var _this2 = this;

    if (this.currentUrl === newValue) {
      return;
    }

    if (this.disabled) {
      var hasKnownUrl = this.workspace.getAllBlocks().some(function (block) {
        return block.type === 'loader' && block.id !== _this2.id && block.currentUrl === _this2.currentUrl;
      });

      if (hasKnownUrl) {
        this.setDisabled(false);
      }
    }

    var recordUndo = Blockly.Events.recordUndo;
    Blockly.Events.recordUndo = false;
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["loadRemote"])(this).then(function () {
      Blockly.Events.recordUndo = recordUndo;
      _utils_observer__WEBPACK_IMPORTED_MODULE_6__["observer"].emit('ui.log.success', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_5__["translate"])('Blocks are loaded successfully'));
    }).catch(function (errorMsg) {
      Blockly.Events.recordUndo = recordUndo;
      _utils_observer__WEBPACK_IMPORTED_MODULE_6__["observer"].emit('ui.log.error', errorMsg);
    });
    this.currentUrl = this.getFieldValue('URL');
  },
  onchange: function onchange(event) {
    var _this3 = this;

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
      this.currentUrl = this.getFieldValue('URL');
      this.workspace.getAllBlocks().forEach(function (block) {
        if (block.type === 'loader' && block.id !== _this3.id) {
          if (block.currentUrl === _this3.currentUrl) {
            _this3.setDisabled(true);
          }
        }
      });
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.loader = function (block) {
  if (block.loadedVariables.length) {
    // eslint-disable-next-line no-underscore-dangle
    return "var " + block.loadedVariables.map(function (v) {
      return __webpack_provided_Blockly_dot_JavaScript.variableDB_.safeName_(v);
    }).toString();
  }

  return '';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./notify.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./notify.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.notify = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Notify %1 with sound: %2 %3'),
      args0: [{
        type: 'field_dropdown',
        name: 'NOTIFICATION_TYPE',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.NOTIFICATION_TYPE
      }, {
        type: 'field_dropdown',
        name: 'NOTIFICATION_SOUND',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lists.NOTIFICATION_SOUND
      }, {
        type: 'input_value',
        name: 'MESSAGE',
        check: null
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Creates a notification'),
      cateogry: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Pop out notify'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Pop out notify description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.notify = function (block) {
  var notificationType = block.getFieldValue('NOTIFICATION_TYPE');
  var sound = block.getFieldValue('NOTIFICATION_SOUND');
  var message = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'MESSAGE') || "\"" + Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('<empty message>') + "\"";
  var code = "Bot.notify({ className: '" + notificationType + "', message: " + message + ", sound: '" + sound + "'});\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./total_profit.js":
/*!***************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./total_profit.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.total_profit = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Total Profit'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the total profit'),
      category: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Total Profit'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Total Profit Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.total_profit = function () {
  return ['Bot.getTotalProfit()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Misc./total_runs.js":
/*!*************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Misc./total_runs.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.total_runs = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Number of Runs'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the number of runs since the beginning'),
      category: Blockly.Categories.Miscellaneous
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Total Runs'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Total Runs Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.total_runs = function () {
  return ['Bot.getTotalRuns()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Time/epoch.js":
/*!*******************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Time/epoch.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.epoch = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Seconds Since Epoch'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Returns the epoch time (seconds since epoch)'),
      category: Blockly.Categories.Time
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Second Since Epoch'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Seconds Since Epoch Decription')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.epoch = function () {
  return ['Bot.getTime()', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Tools/Time/timeout.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Binary/Tools/Time/timeout.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.timeout = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('%1 %2 Run after %3 second(s)'),
      args0: [{
        type: 'input_dummy'
      }, {
        type: 'input_statement',
        name: 'TIMEOUTSTACK'
      }, {
        type: 'input_value',
        name: 'SECONDS'
      }],
      colour: '#fef1cf',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Run the blocks inside every n seconds'),
      category: Blockly.Categories.Time
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Timeout'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Timeout Description')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.END_DRAG) {
      var allowedScopes = ['trade_definition', 'during_purchase', 'before_purchase', 'after_purchase', 'tick_analysis'];

      if (allowedScopes.some(function (scope) {
        return _this.isDescendantOf(scope);
      })) {
        if (this.disabled) {
          this.setDisabled(false);
        }
      } else if (!this.disabled) {
        this.setDisabled(true);
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.timeout = function (block) {
  var stack = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'TIMEOUTSTACK');
  var seconds = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'SECONDS', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC) || '1';
  var code = "sleep(" + seconds + ");\n" + stack + "\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition.js":
/*!************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ "./src/scratch/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/api/helpers */ "./src/services/api/helpers/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");











Blockly.Blocks.trade_definition = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('%1 (1) Define your trade contract %2'),
      message1: '%1',
      message2: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Run Once at Start: %1'),
      message3: '%1',
      message4: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Define Trade Options: %1'),
      message5: '%1',
      args0: [{
        type: 'field_image',
        src: _images__WEBPACK_IMPORTED_MODULE_6__["defineContract"],
        width: 25,
        height: 25,
        alt: 'T'
      }, {
        type: 'input_dummy'
      }],
      args1: [{
        type: 'input_statement',
        name: 'TRADE_OPTIONS'
      }],
      args2: [{
        type: 'input_dummy'
      }],
      args3: [{
        type: 'input_statement',
        name: 'INITIALIZATION',
        check: null
      }],
      args4: [{
        type: 'input_dummy'
      }],
      args5: [{
        type: 'input_statement',
        name: 'SUBMARKET'
      }],
      colour: '#2a3052',
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Trade Definition tooltip'),
      category: Blockly.Categories.Trade_Definition
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Trade Definition'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Define market type, stake, trade type and duration in trade')
    };
  },
  onchange: function onchange(event) {
    var _this = this;

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setBlockTextColor"])(this);

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
      // Maintain single instance of this block, dispose of older ones.
      var top_blocks = this.workspace.getTopBlocks(true);
      top_blocks.forEach(function (top_block) {
        if (top_block.type === _this.type && top_block.id !== _this.id) {
          top_block.dispose(false);
        }
      });
      var market_block = this.getChildByType('trade_definition_market');
      var selected_market = market_block.getFieldValue('MARKET_LIST');
      var change_event = new Blockly.Events.BlockChange(market_block, 'field', 'MARKET_LIST', '', selected_market); // Trigger change event on MARKET_LIST to populate all dropdowns.

      Blockly.Events.fire(change_event);
    } else if (event.type === Blockly.Events.BLOCK_CHANGE || Blockly.Events.END_DRAG) {
      // Enforce only trade_definition_<type> blocks in TRADE_OPTIONS statement.
      var blocks_in_trade_options = this.getBlocksInStatement('TRADE_OPTIONS');
      blocks_in_trade_options.forEach(function (block) {
        if (!/^trade_definition_.+$/.test(block.type)) {
          Blockly.Events.disable();
          block.unplug(true);
          Blockly.Events.enable();
        }
      });
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition = function (block) {
  var client_store = _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__["default"].instance.root_store.client;

  if (!client_store.is_logged_in) {
    throw new Error('Please login'); // TEMP.
  }

  var loginid = client_store.loginid.loginid;
  var account = client_store.getToken(loginid);
  var market_block = block.getChildByType('trade_definition_market');
  var trade_type_block = block.getChildByType('trade_definition_tradetype');
  var contract_type_block = block.getChildByType('trade_definition_contracttype');
  var candle_interval_block = block.getChildByType('trade_definition_candleinterval');
  var restart_on_error_block = block.getChildByType('trade_definition_restartonerror');
  var restart_on_buy_sell_block = block.getChildByType('trade_definition_restartbuysell');
  var symbol = market_block.getFieldValue('SYMBOL_LIST');
  var trade_type = trade_type_block.getFieldValue('TRADETTYPE_LIST');
  var contract_type = contract_type_block.getFieldValue('TYPE_LIST');
  var candle_interval = candle_interval_block.getFieldValue('CANDLEINTERVAL_LIST');
  var should_restart_on_error = __webpack_provided_Blockly_dot_JavaScript.valueToCode(restart_on_error_block, 'RESTARTONERROR', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC);
  var should_restart_on_buysell = __webpack_provided_Blockly_dot_JavaScript.valueToCode(restart_on_buy_sell_block, 'TIME_MACHINE_ENABLED', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC);
  var opposites = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].opposites;
  var contract_type_list = contract_type === 'both' ? opposites[trade_type.toUpperCase()].map(function (opposite) {
    return Object.keys(opposite)[0];
  }) : [contract_type];
  var initialization = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'INITIALIZATION');
  var trade_options_statement = __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'SUBMARKET');
  var code = "  \n    BinaryBotPrivateInit = function BinaryBotPrivateInit() {\n        Bot.init('" + account + "', {\n          symbol              : '" + symbol + "',\n          contractTypes       : " + JSON.stringify(contract_type_list) + ",\n          candleInterval      : '" + (candle_interval || 'FALSE') + "',\n          shouldRestartOnError: " + (should_restart_on_error || 'FALSE') + ",\n          timeMachineEnabled  : " + (should_restart_on_buysell || 'FALSE') + ",\n        });\n        " + initialization.trim() + "\n    };\n      BinaryBotPrivateStart = function BinaryBotPrivateStart() {\n        " + trade_options_statement.trim() + "\n      };\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_candleinterval.js":
/*!***************************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_candleinterval.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");

Blockly.Blocks.trade_definition_candleinterval = {
  init: function init() {
    this.jsonInit({
      message0: 'Default Candle Interval: %1',
      args0: [{
        type: 'field_dropdown',
        name: 'CANDLEINTERVAL_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].candleIntervals.slice(1)
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
  onchange: function onchange() {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    this.enforceLimitations();
  },
  enforceLimitations: Blockly.Blocks.trade_definition_market.enforceLimitations
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_candleinterval = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_contracttype.js":
/*!*************************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_contracttype.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");









Blockly.Blocks.trade_definition_contracttype = {
  init: function init() {
    this.jsonInit({
      message0: 'Contract Type: %1',
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE_LIST',
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

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
      this.updateContractTypes();
    } else if (event.type === Blockly.Events.BLOCK_CHANGE) {
      if (event.name === 'TRADETYPE_LIST' && !['', 'na'].includes(event.newValue)) {
        this.updateContractTypes();
      }
    }
  },
  updateContractTypes: function updateContractTypes() {
    var top_parent_block = this.getTopParent();
    var trade_type_block = top_parent_block.getChildByType('trade_definition_tradetype');
    var trade_type = trade_type_block.getFieldValue('TRADETYPE_LIST');
    var contract_type_field = this.getField('TYPE_LIST');
    var contract_types;

    if (trade_type) {
      var opposites = _constants__WEBPACK_IMPORTED_MODULE_7__["default"].opposites;
      contract_types = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_8__["translate"])('Both'), 'both']].concat(opposites[trade_type.toUpperCase()].map(function (type) {
        return Object.entries(type)[0].reverse();
      }));
    } else {
      contract_types = _constants__WEBPACK_IMPORTED_MODULE_7__["default"].NOT_AVAILABLE_DROPDOWN_OPTIONS;
    }

    contract_type_field.updateOptions(contract_types);
  },
  enforceLimitations: Blockly.Blocks.trade_definition_market.enforceLimitations
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_contracttype = function () {
  return '';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

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
    console.log(active_symbols);
    var market_field = this.getField('MARKET_LIST');
    var submarket_field = this.getField('SUBMARKET_LIST');

    if (event.type === Blockly.Events.CREATE && event.ids.includes(this.id)) {
      active_symbols.retrieveActiveSymbols().then(function () {
        var markets = active_symbols.getMarketDropdownOptions();
        console.log(markets);
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

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_restartbuysell.js":
/*!***************************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_restartbuysell.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.trade_definition_restartbuysell = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Restart buy/sell on error (disable for better performance): %1'),
      args0: [{
        type: 'input_value',
        name: 'TIME_MACHINE_ENABLED',
        check: 'Boolean'
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
  onchange: function onchange() {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    this.enforceLimitations();
  },
  enforceLimitations: Blockly.Blocks.trade_definition_market.enforceLimitations
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_restartbuysell = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_restartonerror.js":
/*!***************************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_restartonerror.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.trade_definition_restartonerror = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Restart last trade on error (bot ignores the unsuccessful trade): %1'),
      args0: [{
        type: 'input_value',
        name: 'RESTARTONERROR',
        check: 'Boolean'
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
  onchange: function onchange() {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    this.enforceLimitations();
  },
  enforceLimitations: Blockly.Blocks.trade_definition_market.enforceLimitations
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_restartonerror = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_tradeoptions.js":
/*!*************************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_tradeoptions.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constants */ "./src/constants/index.js");
/* harmony import */ var _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/api/helpers */ "./src/services/api/helpers/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");











Blockly.Blocks.trade_definition_tradeoptions = {
  init: function init() {
    this.jsonInit(this.definition()); // Ensure one of this type per statement-stack

    this.setNextStatement(false);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Duration: %1 %2 Stake: %3 %4'),
      args0: [{
        type: 'field_dropdown',
        name: 'DURATIONTYPE_LIST',
        options: [['', '']]
      }, {
        type: 'input_value',
        name: 'DURATION'
      }, {
        type: 'field_dropdown',
        name: 'CURRENCY_LIST',
        options: _constants__WEBPACK_IMPORTED_MODULE_8__["default"].lists.CURRENCY
      }, {
        type: 'input_value',
        name: 'AMOUNT',
        check: 'Number'
      }],
      colour: Blockly.Colours.BinaryLessPurple.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessPurple.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Trade Options Tooltip'),
      category: Blockly.Categories.Trade_Definition
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Trade Options'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Trade Options Description')
    };
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    var top_parent_block = this.getTopParent();

    if (!top_parent_block) {
      return;
    }

    var market_block = top_parent_block.getChildByType('trade_definition_market');
    var trade_type_block = top_parent_block.getChildByType('trade_definition_tradetype');
    this.selected_symbol = market_block.getFieldValue('SYMBOL_LIST');
    this.selected_trade_type_category = trade_type_block.getFieldValue('TRADETYPECAT_LIST');
    this.selected_trade_type = trade_type_block.getFieldValue('TRADETYPE_LIST');
    this.selected_duration = this.getFieldValue('DURATIONTYPE_LIST');
    this.selected_barrier_types = [this.getFieldValue('BARRIERTYPE_LIST') || _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_TYPES[0][1], this.getFieldValue('SECONDBARRIERTYPE_LIST') || _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_TYPES[1][1]];

    if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === Blockly.Events.END_DRAG && event.blockId === this.id) {
      this.updateBarrierInputs();
      this.enforceSingleBarrierType('BARRIERTYPE_LIST', true);
      this.updateDurationInput(true);
      this.updatePredictionInput();
    } else if (event.type === Blockly.Events.BLOCK_CHANGE) {
      if (event.name === 'DURATIONTYPE_LIST') {
        // Update barrier suggested values when changing duration unit.
        this.updateBarrierInputs();
        this.enforceSingleBarrierType('BARRIERTYPE_LIST', true); // Update duration minimum amount when changing duration unit.

        this.updateDurationInput(false);
      } else if (event.name === 'BARRIERTYPE_LIST' || event.name === 'SECONDBARRIERTYPE_LIST') {
        // Update barrier suggested values when changing barrier type.
        this.updateBarrierInputs();
        this.enforceSingleBarrierType(event.name, false);
      } else if (event.name === 'SYMBOL_LIST' || event.name === 'TRADETYPE_LIST') {
        // Update durations, barriers, and prediction when changing the trade type.
        this.updateBarrierInputs();
        this.enforceSingleBarrierType('BARRIERTYPE_LIST', true);
        this.updateDurationInput(true);
        this.updatePredictionInput();
      }
    }
  },
  createPredictionInput: function createPredictionInput(prediction_range) {
    Blockly.Events.disable();

    if (prediction_range.length === 0) {
      this.removeInput('PREDICTION_LABEL', true);
      this.removeInput('PREDICTION', true);
    } else if (!this.getInput('PREDICTION')) {
      this.appendDummyInput('PREDICTION_LABEL').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Prediction:'));
      var prediction_input = this.appendValueInput('PREDICTION');
      var shadow_block = this.workspace.newBlock('math_number');
      shadow_block.setShadow(true);
      shadow_block.setFieldValue(prediction_range[0], 'NUM');
      shadow_block.outputConnection.connect(prediction_input.connection);
      shadow_block.initSvg();
      shadow_block.render(true);
    }

    Blockly.Events.enable();
  },
  createBarrierInputs: function createBarrierInputs(barriers) {
    Blockly.Events.disable();
    var input_names = ['BARRIER', 'SECONDBARRIER'];

    for (var i = 0; i < barriers.values.length; i++) {
      var label = barriers.values.length === 1 ? Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Barrier') : _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_LABELS[i];
      var input = this.getInput(input_names[i]);

      if (input) {
        input.fieldRow[0].setText(label);
      } else {
        input = this.appendValueInput(input_names[i]).appendField(label, input_names[i] + "_LABEL").appendField(new Blockly.FieldDropdown(_constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_TYPES), input_names[i] + "TYPE_LIST");
        var shadow_block = this.workspace.newBlock('math_number');
        shadow_block.setShadow(true);
        shadow_block.setFieldValue(barriers.values[i], 'NUM');
        shadow_block.outputConnection.connect(input.connection);
        shadow_block.initSvg();
        shadow_block.render(true);
      }
    } // Remove any extra inputs (quietly) if not required


    for (var _i = input_names.length; _i > barriers.values.length; _i--) {
      this.removeInput(input_names[_i - 1], true);
    }

    Blockly.Events.enable();
  },
  updateDurationInput: function updateDurationInput(should_use_default_unit) {
    var _this = this;

    var contracts_for = _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__["default"].instance.contracts_for;
    contracts_for.getDurations(this.selected_symbol, this.selected_trade_type).then(function (durations) {
      var duration_field_dropdown = _this.getField('DURATIONTYPE_LIST');

      var duration_input = _this.getInput('DURATION');

      var connection = duration_input.connection;
      var duration_options = durations.map(function (duration) {
        return [duration.display, duration.unit];
      });

      if (should_use_default_unit) {
        duration_field_dropdown.updateOptions(duration_options);
      } else {
        duration_field_dropdown.updateOptions(duration_options, _this.selected_duration, false);
      }

      if (connection) {
        var target_block = connection.targetBlock();

        if (target_block && target_block.isShadow()) {
          var min_duration = durations.find(function (d) {
            return d.unit === _this.selected_duration;
          });

          if (min_duration) {
            target_block.setFieldValue(min_duration.min, 'NUM');
          }
        }
      }
    });
  },
  updateBarrierInputs: function updateBarrierInputs() {
    var _this2 = this;

    var contracts_for = _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__["default"].instance.contracts_for;
    contracts_for.getBarriers(this.selected_symbol, this.selected_trade_type, this.selected_duration, this.selected_barrier_types).then(function (barriers) {
      _this2.createBarrierInputs(barriers);

      var input_names = ['BARRIER', 'SECONDBARRIER'];

      for (var i = 0; i < barriers.values.length; i++) {
        var barrier_field_dropdown = _this2.getField(input_names[i] + "TYPE_LIST");

        var ABSOLUTE_BARRIER_DROPDOWN_OPTION = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].ABSOLUTE_BARRIER_DROPDOWN_OPTION,
            BARRIER_TYPES = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_TYPES;

        if (_this2.selected_duration === 'd') {
          barrier_field_dropdown.updateOptions(ABSOLUTE_BARRIER_DROPDOWN_OPTION, 'absolute');
        } else if (barriers.allow_both_types || barriers.allow_absolute_type) {
          var options = [].concat(BARRIER_TYPES, ABSOLUTE_BARRIER_DROPDOWN_OPTION);
          barrier_field_dropdown.updateOptions(options, barrier_field_dropdown.getValue());
        } else {
          barrier_field_dropdown.updateOptions(BARRIER_TYPES, barrier_field_dropdown.getValue());
        }

        var _this2$getInput = _this2.getInput(input_names[i]),
            connection = _this2$getInput.connection;

        if (connection) {
          var target_block = connection.targetBlock();

          if (target_block.isShadow()) {
            target_block.setFieldValue(barriers.values[i], 'NUM');
          }
        }
      }
    });
  },
  updatePredictionInput: function updatePredictionInput() {
    var _this3 = this;

    var contracts_for = _services_api_helpers__WEBPACK_IMPORTED_MODULE_9__["default"].instance.contracts_for;
    contracts_for.getPredictionRange(this.selected_symbol, this.selected_trade_type).then(function (prediction_range) {
      _this3.createPredictionInput(prediction_range);

      if (prediction_range.length > 0) {
        var prediction_input = _this3.getInput('PREDICTION');

        var connection = prediction_input.connection;

        if (connection) {
          var target_block = connection.targetBlock();

          if (target_block) {
            var initial_prediction = Math.max(1, prediction_range[0]);
            target_block.setFieldValue(initial_prediction, 'NUM');
          }
        }
      }
    });
  },
  enforceSingleBarrierType: function enforceSingleBarrierType(barrier_input_name, should_force_distinct) {
    if (should_force_distinct === void 0) {
      should_force_distinct = false;
    }

    var new_value = this.getFieldValue(barrier_input_name);
    var other_barrier_input_name = barrier_input_name === 'BARRIERTYPE_LIST' ? 'SECONDBARRIERTYPE_LIST' : 'BARRIERTYPE_LIST';
    var other_barrier_field = this.getField(other_barrier_input_name);
    var BARRIER_TYPES = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BARRIER_TYPES;

    if (other_barrier_field) {
      var has_other_barrier = BARRIER_TYPES.findIndex(function (type) {
        return type[1] === new_value;
      }) !== -1;
      var other_barrier_type = other_barrier_field.getValue();
      Blockly.Events.disable();

      if (has_other_barrier && (other_barrier_type === 'absolute' || should_force_distinct)) {
        var other_barrier_value = BARRIER_TYPES.find(function (type) {
          return type[1] !== new_value;
        });
        other_barrier_field.setValue(other_barrier_value[1]);
      } else if (new_value === 'absolute' && other_barrier_type !== 'absolute') {
        other_barrier_field.setValue('absolute');
      }

      Blockly.Events.enable();
    }
  },
  domToMutation: function domToMutation(xmlElement) {
    var has_first_barrier = xmlElement.getAttribute('has_first_barrier') === 'true';
    var has_second_barrier = xmlElement.getAttribute('has_second_barrier') === 'true';
    var has_prediction = xmlElement.getAttribute('has_prediction') === 'true';

    if (has_first_barrier && has_second_barrier) {
      this.createBarrierInputs({
        values: [1, -1]
      }); // These values are overwritten with XML values.
    } else if (has_first_barrier) {
      this.createBarrierInputs({
        values: [1]
      });
    } else if (has_prediction) {
      this.createPredictionInput([1]);
    }
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    container.setAttribute('has_first_barrier', !!this.getInput('BARRIER'));
    container.setAttribute('has_second_barrier', !!this.getInput('SECONDBARRIER'));
    container.setAttribute('has_prediction', !!this.getInput('PREDICTION'));
    return container;
  }
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_tradeoptions = function (block) {
  var amount = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'AMOUNT') || '0';
  var currency = block.getFieldValue('CURRENCY_LIST');
  var duration_type = block.getFieldValue('DURATIONTYPE_LIST') || '0';
  var duration_value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DURATION') || '0';

  var getBarrierValue = function getBarrierValue(barrier_offset_type, value) {
    // Variables should not be encapsulated in quotes
    if (/^(\d+(\.\d+)?)$/.test(value)) {
      return barrier_offset_type === 'absolute' ? "'" + value + "'" : "'" + barrier_offset_type + value + "'";
    }

    return barrier_offset_type === 'absolute' ? value : "'" + barrier_offset_type + "' + " + value;
  };

  var prediction_value, barrier_offset_value, second_barrier_offset_value;

  if (block.getInput('PREDICTION')) {
    prediction_value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'PREDICTION') || '-1';
  }

  if (block.getInput('BARRIER')) {
    var barrier_offset_type = block.getFieldValue('BARRIERTYPE_LIST');
    var value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'BARRIER') || '0';
    barrier_offset_value = getBarrierValue(barrier_offset_type, value);
  }

  if (block.getInput('SECONDBARRIER')) {
    var _barrier_offset_type = block.getFieldValue('SECONDBARRIERTYPE_LIST');

    var _value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'SECONDBARRIER') || '0';

    second_barrier_offset_value = getBarrierValue(_barrier_offset_type, _value);
  }

  var code = "\n        Bot.start({\n        limitations        : BinaryBotPrivateLimitations,\n        duration           : " + (duration_value || '0') + ",\n        duration_unit      : '" + (duration_type || '0') + "',\n        currency           : '" + currency + "',\n        amount             : " + (amount || '0') + ",\n        prediction         : " + (prediction_value || 'undefined') + ",\n        barrierOffset      : " + (barrier_offset_value || 'undefined') + ",\n        secondBarrierOffset: " + (second_barrier_offset_value || 'undefined') + ",\n        });\n    ";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Binary/Trade Definition/trade_definition_tradetype.js":
/*!**********************************************************************************!*\
  !*** ./src/scratch/blocks/Binary/Trade Definition/trade_definition_tradetype.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/api/helpers */ "./src/services/api/helpers/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.trade_definition_tradetype = {
  init: function init() {
    this.jsonInit({
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Trade Category: %1 Trade Type: %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'TRADETYPECAT_LIST',
        options: [['', '']]
      }, {
        type: 'field_dropdown',
        name: 'TRADETYPE_LIST',
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
    var _this = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    this.enforceLimitations();

    if (event.type === Blockly.Events.BLOCK_CHANGE) {
      if (event.name === 'SYMBOL_LIST' || event.name === 'TRADETYPECAT_LIST') {
        var contracts_for = _services_api_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].instance.contracts_for;
        var top_parent_block = this.getTopParent();
        var market_block = top_parent_block.getChildByType('trade_definition_market');
        var market = market_block.getFieldValue('MARKET_LIST');
        var submarket = market_block.getFieldValue('SUBMARKET_LIST');
        var symbol = market_block.getFieldValue('SYMBOL_LIST');
        var trade_type_cat = this.getFieldValue('TRADETYPECAT_LIST');

        if (event.name === 'SYMBOL_LIST') {
          contracts_for.getTradeTypeCategories(market, submarket, symbol).then(function (categories) {
            var trade_type_cat_block = _this.getField('TRADETYPECAT_LIST');

            trade_type_cat_block.updateOptions(categories);
          });
        }

        var trade_types = contracts_for.getTradeTypes(market, submarket, symbol, trade_type_cat);
        var trade_type_block = this.getField('TRADETYPE_LIST');
        trade_type_block.updateOptions(trade_types);
      }
    }
  },
  enforceLimitations: Blockly.Blocks.trade_definition_market.enforceLimitations
};

__webpack_provided_Blockly_dot_JavaScript.trade_definition_tradetype = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/controls_if.js":
/*!*************************************************!*\
  !*** ./src/scratch/blocks/Logic/controls_if.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.controls_if = {
  init: function init() {
    this.elseIfCount = 0;
    this.elseCount = 0;
    this.jsonInit(this.definition());
    var addInputIcon = this.getAddInputIcon();
    this.appendDummyInput('MUTATOR').appendField(addInputIcon);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('if %1 then'),
      message1: '%1',
      args0: [{
        type: 'input_value',
        name: 'IF0',
        check: 'Boolean'
      }],
      args1: [{
        type: 'input_statement',
        name: 'DO0'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      // category         : Blockly.Categories.control,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('If else statement tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': 'If else statement',
      'description': 'If else statement description'
    };
  },

  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function mutationToDom() {
    if (!this.elseIfCount && !this.elseCount) {
      return null;
    }

    var container = document.createElement('mutation');

    if (this.elseIfCount) {
      container.setAttribute('elseif', this.elseIfCount);
    }

    if (this.elseCount) {
      container.setAttribute('else', 1);
    }

    return container;
  },

  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function domToMutation(xmlElement) {
    this.elseIfCount = parseInt(xmlElement.getAttribute('elseif')) || 0;
    this.elseCount = parseInt(xmlElement.getAttribute('else')) || 0;
    this.updateShape();
  },
  updateShape: function updateShape() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }

    var i = 1;

    while (this.getInput("IF" + i)) {
      this.removeInput("IF" + i);
      this.removeInput("DO" + i);
      i++;
    }

    if (this.getInput('MUTATOR')) {
      this.removeInput('MUTATOR');
    } // Rebuild block


    for (var j = 1; j <= this.elseIfCount; j++) {
      this.appendDummyInput("IF_LABEL" + j).appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('else if'));
      this.appendValueInput("IF" + j).setCheck('Boolean');
      this.appendDummyInput("THEN_LABEL" + j).appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('then'));
      this.appendDummyInput("DELETE_ICON" + j).appendField(this.getRemoveInputIcon(j, false));
      this.appendStatementInput("DO" + j);
    }

    if (this.elseCount) {
      this.appendDummyInput('ELSE_LABEL').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('else'));
      this.appendDummyInput('DELETE_ELSE').appendField(this.getRemoveInputIcon(this.elseIfCount + 1, true));
      this.appendStatementInput('ELSE');
    }

    this.appendDummyInput('MUTATOR').appendField(this.getAddInputIcon());
    this.initSvg();
    this.render();
  },
  getAddInputIcon: function getAddInputIcon() {
    var _this = this;

    var onAddClick = function onAddClick() {
      if (!_this.workspace || _this.isInFlyout) {
        return;
      }

      var newInputNum = _this.elseIfCount + 1;

      if (_this.elseCount === 0) {
        // No `elseif`, just add an `else`-statement
        _this.appendDummyInput('ELSE_LABEL').appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('else'));

        _this.appendDummyInput('DELETE_ELSE').appendField(_this.getRemoveInputIcon(newInputNum, true));

        _this.appendStatementInput('ELSE');

        _this.elseCount++;
      } else {
        // We've already got `elseif` + `else`, keep adding more `elseif`'s
        _this.appendDummyInput("IF_LABEL" + newInputNum).appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('else if'));

        _this.appendValueInput("IF" + newInputNum).setCheck('Boolean');

        _this.appendDummyInput("THEN_LABEL" + newInputNum).appendField(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('then'));

        _this.appendDummyInput("DELETE_ICON" + newInputNum).appendField(_this.getRemoveInputIcon(newInputNum, false));

        _this.appendStatementInput("DO" + newInputNum);

        _this.elseIfCount++;
      } // We already have an else, this input needs to be moved to the bottom where it belongs.


      if (_this.getInput('ELSE')) {
        _this.moveInputBefore('ELSE_LABEL', null);

        _this.moveInputBefore('DELETE_ELSE', null);

        _this.moveInputBefore('ELSE', null);
      } // Move plus-icon to the bottom


      _this.moveInputBefore('MUTATOR', null);

      _this.initSvg();

      _this.render();
    };

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_1__["plusIconDark"], 24, 24, '+', onAddClick);
    return fieldImage;
  },
  getRemoveInputIcon: function getRemoveInputIcon(index, isElseStack) {
    var _this2 = this;

    var onRemoveClick = function onRemoveClick() {
      if (!_this2.workspace || _this2.isInFlyout) {
        return;
      }

      if (isElseStack) {
        _this2.removeInput('ELSE_LABEL');

        _this2.removeInput('DELETE_ELSE');

        _this2.removeInput('ELSE');

        _this2.elseCount = 0;
      } else {
        // Determine which label it is, has to be done inside this function.
        var inputNames = ['IF_LABEL', 'IF', 'THEN_LABEL', 'DELETE_ICON', 'DO'];
        inputNames.forEach(function (inputName) {
          _this2.removeInput("" + inputName + index); // Re-number inputs w/ indexes larger than this one, e.g. when removing `IF5` becomes `IF4`


          var i = 1;
          var j = 0; // e.g. we've removed `IF5`, name of larger input `IF6` should become `IF5`

          var largerInput = _this2.getInput(inputName + (index + i));

          while (largerInput) {
            var newIndex = index + j;
            largerInput.name = inputName + newIndex; // Re-attach click handler with correct index.

            if (inputName === 'DELETE_ICON') {
              for (var k = 0; k < largerInput.fieldRow.length; k++) {
                var field = largerInput.fieldRow[k];
                field.dispose();
                largerInput.fieldRow.splice(k, 1);
              }

              largerInput.appendField(_this2.getRemoveInputIcon(newIndex, false));
            }

            i++;
            j++;
            largerInput = _this2.getInput(inputName + (index + i));
          }
        });
        _this2.elseIfCount--;
      }
    };

    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_1__["minusIconDark"], 24, 24, '-', onRemoveClick);
    return fieldImage;
  }
};

__webpack_provided_Blockly_dot_JavaScript.controls_if = function (block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '';

  do {
    var condition = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, "IF" + n, __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || 'false'; // i.e. (else)? if { // code }

    var keyword = n > 0 ? 'else if' : 'if';
    code += "\n        " + keyword + " (" + condition + ") {\n            " + __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, "DO" + n) + "\n        }";
    n++;
  } while (block.getInput("IF" + n));

  if (block.getInput('ELSE')) {
    code += "\n        else {\n            " + __webpack_provided_Blockly_dot_JavaScript.statementToCode(block, 'ELSE') + "\n        }";
  }

  return code + "\n";
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_boolean.js":
/*!***************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_boolean.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.logic_boolean = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'BOOL',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('true'), 'TRUE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('false'), 'FALSE']]
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Boolean Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Boolean'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Boolean Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_boolean = function (block) {
  var code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_compare.js":
/*!***************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_compare.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.logic_compare = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1 %2 %3',
      args0: [{
        type: 'input_value',
        name: 'A'
      }, {
        type: 'field_dropdown',
        name: 'OP',
        options: [['=', 'EQ'], ["\u2260", 'NEQ'], ["\u200F<", 'LT'], ["\u200F\u2264", 'LTE'], ["\u200F>", 'GT'], ["\u200F\u2265", 'GTE']]
      }, {
        type: 'input_value',
        name: 'B'
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Logic Compare Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Logic Compare'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Logic Compare Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_compare = function (block) {
  var operatorMapping = {
    EQ: '==',
    NEQ: '!=',
    LT: '<',
    LTE: '<=',
    GT: '>',
    GTE: '>='
  };
  var operator = operatorMapping[block.getFieldValue('OP') || 'EQ'];
  var order = ['==', '!='].includes(operator) ? __webpack_provided_Blockly_dot_JavaScript.ORDER_EQUALITY : __webpack_provided_Blockly_dot_JavaScript.ORDER_RELATIONAL;
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'A', order);
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'B', order);
  var code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_negate.js":
/*!**************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_negate.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.logic_negate = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('not %1'),
      args0: [{
        type: 'input_value',
        name: 'BOOL'
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Negate Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Negate'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Negate Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_negate = function (block) {
  var order = __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT;
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'BOOL', order) || 'true';
  var code = "!" + argument0;
  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_null.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_null.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/tools */ "./src/utils/tools.js");

Blockly.Blocks.logic_null = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: 'null',
      output: null,
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Null Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Null'),
      'description': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Null Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_null = function () {
  return ['null', __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_operation.js":
/*!*****************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_operation.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.logic_operation = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1 %2 %3',
      args0: [{
        type: 'input_value',
        name: 'A'
      }, {
        type: 'field_dropdown',
        name: 'OP',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('and'), 'AND'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('or'), 'OR']]
      }, {
        type: 'input_value',
        name: 'B'
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Operator Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Operator'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Operator Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_operation = function (block) {
  var selectedOperator = block.getFieldValue('OP');
  var operator, order;

  if (selectedOperator === 'AND') {
    operator = '&&';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_AND;
  } else if (selectedOperator === 'OR') {
    operator = '||';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_OR;
  }

  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'A');
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'B');
  var code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Logic/logic_ternary.js":
/*!***************************************************!*\
  !*** ./src/scratch/blocks/Logic/logic_ternary.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.logic_ternary = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('test %1'),
      message1: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('if true %1'),
      message2: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('if false %1'),
      args0: [{
        type: 'input_value',
        name: 'IF',
        check: 'Boolean'
      }],
      args1: [{
        type: 'input_value',
        name: 'THEN'
      }],
      args2: [{
        type: 'input_value',
        name: 'ELSE'
      }],
      output: null,
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Ternary Tooltip'),
      category: Blockly.Categories.Logic
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Ternary'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Logic Ternary Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.logic_ternary = function (block) {
  var valueIf = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'IF', __webpack_provided_Blockly_dot_JavaScript.ORDER_CONDITIONAL) || 'false';
  var valueThen = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'THEN', __webpack_provided_Blockly_dot_JavaScript.ORDER_CONDITIONAL) || 'null';
  var valueElse = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'ELSE', __webpack_provided_Blockly_dot_JavaScript.ORDER_CONDITIONAL) || 'null';
  var code = valueIf + " ? " + valueThen + " : " + valueElse;
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_CONDITIONAL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_arithmetic.js":
/*!****************************************************!*\
  !*** ./src/scratch/blocks/Math/math_arithmetic.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_arithmetic = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1 %2 %3',
      args0: [{
        type: 'input_value',
        name: 'A',
        check: 'Number'
      }, {
        type: 'field_dropdown',
        name: 'OP',
        options: [['+', 'ADD'], ['-', 'MINUS'], ['*', 'MULTIPLY'], ['/', 'DIVIDE'], ['^', 'POWER']]
      }, {
        type: 'input_value',
        name: 'B',
        check: 'Number'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematic Arithmetic (Add, minus, mutiply, divide, power)'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematic Arithmetic'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematic Arithmetic Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_arithmetic = function (block) {
  var operators = {
    ADD: ['+', __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION],
    MINUS: ['-', __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION],
    MULTIPLY: ['*', __webpack_provided_Blockly_dot_JavaScript.ORDER_MULTIPLICATION],
    DIVIDE: ['/', __webpack_provided_Blockly_dot_JavaScript.ORDER_DIVISION],
    POWER: [null, __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA] // Handle power separately.

  };
  var tuple = operators[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'B', order) || '0';
  var code; // Power in JavaScript requires a special case since it has no operator.

  if (!operator) {
    code = "Math.pow(" + argument0 + ", " + argument1 + ")";
    return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
  }

  code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_change.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Math/math_change.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_change = {
  /**
  * Initializes the block, in most cases this calls the jsonInit function, in some
  * cases it may add extra properties to the block object.
  * https://developers.google.com/blockly/reference/js/Blockly.Block#jsonInit
  */
  init: function init() {
    this.jsonInit(this.definition());
  },

  /**
   * Block definitions describe how a block looks and behaves, including the text,
   * the colour, the shape, and what other blocks it can connect to. We've separated
   * the block definition from the init function so we can search through it.
   * https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
   */
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('change %1 by %2'),
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('item')
      }, {
        type: 'input_value',
        name: 'DELTA',
        check: 'Number'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Change Number variable'),
      category: Blockly.Categories.Mathematical
    };
  },

  /**
   * Meta returns an object with with properties that contain human readable strings,
   * these strings are used in the flyout help content, as well as used for searching
   * for specific blocks.
   */
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Change Math'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Change Number Type Variable')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_change = function (block) {
  var variable = block.getFieldValue('VAR'); // eslint-disable-next-line no-underscore-dangle

  var argument0 = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(variable, Blockly.Variables.NAME_TYPE);
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DELTA', __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION) || '0';
  var code = "\n    if (typeof " + argument0 + " != 'number') {\n        " + argument0 + " = 0;\n    };\n    " + argument0 + " += " + argument1 + ";\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_constant.js":
/*!**************************************************!*\
  !*** ./src/scratch/blocks/Math/math_constant.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_constant = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'CONSTANT',
        options: [["\u03C0", 'PI'], ["\u2107", 'E'], ["\u03D5", 'GOLDEN_RATIO'], ['sqrt(2)', 'SQRT2'], ["sqrt(\xBD)", 'SQRT1_2'], ["\u221E", 'INFINITY']]
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constant Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constant'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constant Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_constant = function (block) {
  var constant = block.getFieldValue('CONSTANT');
  var code, order;

  if (constant === 'PI') {
    code = 'Math.PI';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  } else if (constant === 'E') {
    code = 'Math.E';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  } else if (constant === 'GOLDEN_RATIO') {
    code = '(1 + Math.sqrt(5)) / 2';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_DIVISION;
  } else if (constant === 'SQRT2') {
    code = 'Math.SQRT2';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  } else if (constant === 'SQRT1_2') {
    code = 'Math.SQRT1_2';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  } else if (constant === 'INFINITY') {
    code = 'Infinity';
    order = __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC;
  }

  return [code, order];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_constrain.js":
/*!***************************************************!*\
  !*** ./src/scratch/blocks/Math/math_constrain.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_constrain = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('constrain %1 low %2 high %3'),
      args0: [{
        type: 'input_value',
        name: 'VALUE',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'LOW',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'HIGH',
        check: 'Number'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constrain Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constrain'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Constrain Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_constrain = function (block) {
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0';
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LOW', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0';
  var argument2 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'HIGH', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0';
  var code = "Math.min(Math.max(" + argument0 + ", " + argument1 + "), " + argument2 + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_modulo.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Math/math_modulo.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_modulo = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('remainder of %1 ÷ %2'),
      args0: [{
        type: 'input_value',
        name: 'DIVIDEND',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'DIVISOR',
        check: 'Number'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Modulo Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Modulo'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Modulo Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_modulo = function (block) {
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DIVIDEND', __webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS) || '0';
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DIVISOR', __webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS) || '0';
  var code = argument0 + " % " + argument1;
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_number.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Math/math_number.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_number = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition());
    var fieldInput = this.getField('NUM');
    fieldInput.setValidator(function (input) {
      return _this.numberValidator(input);
    });
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'field_number',
        name: 'NUM',
        value: 0
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: '#dedede',
      colourSecondary: '#ffffff',
      colourTertiary: '#ffffff',
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Number Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Number'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Number Decscription')
    };
  },
  numberValidator: function numberValidator(input) {
    if (/^-?([0][,.]|[1-9]+[,.])?([0]|[1-9])*$/.test(input)) {
      return undefined;
    }

    return null;
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_number = function (block) {
  var code = block.getFieldValue('NUM');
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_number_positive.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Math/math_number_positive.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_number_positive = {
  init: Blockly.Blocks.math_number.init,
  definition: Blockly.Blocks.math_number.definition,
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Number Positive'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Number Description')
    };
  },
  numberValidator: function numberValidator(input) {
    if (/^([0][,.]|[1-9]+[,.])?([0]|[1-9])*$/.test(input)) {
      return undefined;
    }

    return null;
  }
};
__webpack_provided_Blockly_dot_JavaScript.math_number_positive = __webpack_provided_Blockly_dot_JavaScript.math_number;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_number_property.js":
/*!*********************************************************!*\
  !*** ./src/scratch/blocks/Math/math_number_property.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.math_number_property = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition());
    this.setOnChange(function (event) {
      if (event.name === 'PROPERTY') {
        var hasDivisorInput = _this.getFieldValue('PROPERTY') === 'DIVISIBLE_BY';

        _this.updateShape(hasDivisorInput);
      }
    });
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('%1 is %2'),
      args0: [{
        type: 'input_value',
        name: 'NUMBER_TO_CHECK'
      }, {
        type: 'field_dropdown',
        name: 'PROPERTY',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('even'), 'EVEN'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('odd'), 'ODD'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('prime'), 'PRIME'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('whole'), 'WHOLE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('positive'), 'POSITIVE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('negative'), 'NEGATIVE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('divisible by'), 'DIVISIBLE_BY']]
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      toolip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Math Number Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Math Number'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Math Number Description')
    };
  },
  domToMutation: function domToMutation(xmlElement) {
    var hasDivisorInput = xmlElement.getAttribute('divisor_input') === 'true';
    this.updateShape(hasDivisorInput);
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    var divisorInput = this.getFieldValue('PROPERTY') === 'DIVISIBLE_BY';
    container.setAttribute('divisor_input', divisorInput);
    return container;
  },
  updateShape: function updateShape(hasDivisorInput) {
    var inputExists = this.getInput('DIVISOR');

    if (hasDivisorInput) {
      if (!inputExists) {
        this.appendValueInput('DIVISOR').setCheck('Number');
        this.initSvg();
        this.render(false);
      }
    } else {
      this.removeInput('DIVISOR');
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_number_property = function (block) {
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUMBER_TO_CHECK', __webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS) || '0';
  var property = block.getFieldValue('PROPERTY');
  var code;

  if (property === 'PRIME') {
    // eslint-disable-next-line no-underscore-dangle
    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathIsPrime', [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(n) {\n                // https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n                if (n == 2 || n == 3) {\n                    return true;\n                }\n\n                // False if n is NaN, negative, is 1, or not whole.\n                // And false if n is divisible by 2 or 3.\n                if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {\n                    return false;\n                }\n\n                // Check all the numbers of form 6k +/- 1, up to sqrt(n).\n                for (var x  = 6; x <= Math.sqrt(n) + 1; x += 6) {\n                    if (n % (x - 1) == 0 || n % (x + 1) == 0) {\n                        return false;\n                    }\n                }\n                return true;\n            }"]);
    code = functionName + "(" + argument0 + ")";
    return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
  } else if (property === 'EVEN') {
    code = argument0 + " % 2 === 0";
  } else if (property === 'ODD') {
    code = argument0 + " % 2 === 1";
  } else if (property === 'WHOLE') {
    code = argument0 + " % 1 === 0";
  } else if (property === 'POSITIVE') {
    code = argument0 + " > 0";
  } else if (property === 'NEGATIVE') {
    code = argument0 + " < 0";
  } else if (property === 'DIVISIBLE_BY') {
    var divisor = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'DIVISOR', __webpack_provided_Blockly_dot_JavaScript.ORDER_MODULUS) || '0';
    code = argument0 + " % " + divisor + " == 0";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_EQUALITY];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_on_list.js":
/*!*************************************************!*\
  !*** ./src/scratch/blocks/Math/math_on_list.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_on_list = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('%1 of list %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OPERATION',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('sum'), 'SUM'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('min'), 'MIN'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('max'), 'MAX'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('average'), 'AVERAGE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('median'), 'MEDIAN'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('modes'), 'MODE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('standard deviation'), 'STD_DEV'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('random item'), 'RANDOM']]
      }, {
        type: 'input_value',
        name: 'LIST'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math On List'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math On List'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math On List Description')
    };
  }
};
/* eslint-disable no-underscore-dangle */

__webpack_provided_Blockly_dot_JavaScript.math_on_list = function (block) {
  var operation = block.getFieldValue('OPERATION');
  var code, list;

  if (operation === 'SUM') {
    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '[]';
    code = list + ".reduce(function(x, y) { return x + y; })";
  } else if (operation === 'MIN') {
    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '[]';
    code = "Math.min.apply(null, " + list + ")";
  } else if (operation === 'MAX') {
    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '[]';
    code = "Math.max.apply(null, " + list + ")";
  } else if (operation === 'AVERAGE') {
    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathMean', ["function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {\n                return myList.reduce(function(x, y) { \n                    return x + y; \n                }) / myList.length;\n            }"]);
    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '[]';
    code = functionName + "(" + list + ")";
  } else if (operation === 'MEDIAN') {
    var _functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathMedian', ["function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(myList) {\n                var localList = myList.filter(function(x) { \n                    return typeof x == 'number'; \n                });\n                if (!localList.length) {\n                    return null;\n                }\n                localList.sort(function(a, b) { \n                    return b - a; \n                });\n                if (localList.length % 2 == 0) {\n                    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;\n                } else {\n                    return localList[(localList.length - 1) / 2];\n                }\n            }"]);

    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '[]';
    code = _functionName + "(" + list + ")";
  } else if (operation === 'MODE') {
    var _functionName2 = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathModes', ["function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(values) {\n                var modes = [];\n                var counts = [];\n                var maxCount = 0;\n\n                for (var i = 0; i < values.length; i++) {\n                    var value = values[i];\n                    var found = false;\n                    var thisCount;\n\n                    for (var j = 0; j < counts.length; j++) {\n                        if (counts[j][0] === value) {\n                            thisCount = ++counts[j][1];\n                            found = true;\n                            break;\n                        }\n                    }\n\n                    if (!found) {\n                        counts.push([value, 1]);\n                        thisCount = 1;\n                    }\n                    maxCount = Math.max(thisCount, maxCount);\n                }\n                \n                for (var j = 0; j < counts.length; j++) {\n                    if (counts[j][1] == maxCount) {\n                        modes.push(counts[j][0]);\n                    }\n                }\n\n                return modes;\n            }"]);

    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '[]';
    code = _functionName2 + "(" + list + ")";
  } else if (operation === 'STD_DEV') {
    var _functionName3 = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathStandardDeviation', ["function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(numbers) {\n                var n = numbers.length;\n                if (!n) {\n                    return null;\n                }\n\n                var mean = numbers.reduce(function(x, y) {\n                    return x + y;\n                }) / n;\n\n                var variance = 0;\n                for (var j = 0; j < n; j++) {\n                    variance += Math.pow(numbers[j] - mean, 2);\n                }\n                variance = variance / n;\n                return Math.sqrt(variance);\n            }"]);

    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '[]';
    code = _functionName3 + "(" + list + ")";
  } else if (operation === 'RANDOM') {
    var _functionName4 = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathRandomList', ["function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(list) {\n                var x = Math.floor(Math.random() * list.length);\n                return list[x];\n            }"]);

    list = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'LIST', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '[]';
    code = _functionName4 + "(" + list + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_random_float.js":
/*!******************************************************!*\
  !*** ./src/scratch/blocks/Math/math_random_float.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_random_float = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('random fraction'),
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Float Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Float'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Float Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_random_float = function () {
  return ['Math.random()', __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_random_int.js":
/*!****************************************************!*\
  !*** ./src/scratch/blocks/Math/math_random_int.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_random_int = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('random integer from %1 to %2'),
      args0: [{
        type: 'input_value',
        name: 'FROM',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'TO',
        check: 'Number'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Integer Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Integer'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Random Integer Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_random_int = function (block) {
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'FROM', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0';
  var argument1 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TO', __webpack_provided_Blockly_dot_JavaScript.ORDER_COMMA) || '0'; // eslint-disable-next-line no-underscore-dangle

  var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('mathRandomInt', [// eslint-disable-next-line no-underscore-dangle
  "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(a, b) {\n            if (a > b) {\n                // Swap a and b to ensure a is smaller.\n                var c = a;\n                a = b;\n                b = c;\n            }\n            return Math.floor(Math.random() * (b - a + 1) + a);\n        }"]);
  var code = functionName + "(" + argument0 + ", " + argument1 + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_round.js":
/*!***********************************************!*\
  !*** ./src/scratch/blocks/Math/math_round.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");
 // https://github.com/google/blockly/blob/master/generators/javascript/math.js

Blockly.Blocks.math_round = {
  /**
   * Check if a number is even, odd, prime, whole, positive, or negative
   * or if it is divisible by certain number. Returns true or false.
   * @this Blockly.Block
   */
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1 %2',
      args0: [{
        type: 'field_dropdown',
        name: 'OP',
        options: [['round', 'ROUND'], ['round up', 'ROUNDUP'], ['round down', 'ROUNDDOWN']]
      }, {
        type: 'input_value',
        name: 'NUM'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Round Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Round'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Math Round Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_round = function (block) {
  var operation = block.getFieldValue('OP');
  var argument0 = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUM') || '0';
  var code;

  if (operation === 'ROUND') {
    code = "Math.round(" + argument0 + ")";
  } else if (operation === 'ROUNDUP') {
    code = "Math.ceil(" + argument0 + ")";
  } else if (operation === 'ROUNDDOWN') {
    code = "Math.floor(" + argument0 + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_single.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Math/math_single.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.math_single = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('%1 %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OP',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('square root'), 'ROOT'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('absolute'), 'ABS'], ['-', 'NEG'], ['ln', 'LN'], ['log10', 'LOG10'], ['e^', 'EXP'], ['10^', 'POW10']]
      }, {
        type: 'input_value',
        name: 'NUM'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Mathematical Single Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Mathematical Single'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Mathematical Single Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.math_single = function (block) {
  var operator = block.getFieldValue('OP');
  var code, arg;

  if (operator === 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUM', __webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_NEGATION) || '0';

    if (arg[0] === '-') {
      // --3 is not legal in JS
      arg = " " + arg;
    }

    code = "-" + arg;
    return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_UNARY_NEGATION];
  }

  if (['SIN', 'COS', 'TAN'].includes(operator)) {
    arg = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUM', __webpack_provided_Blockly_dot_JavaScript.ORDER_DIVISION) || '0';
  } else {
    arg = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'NUM', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '0';
  } // First, handle cases which generate values that don't need parentheses
  // wrapping the code.


  if (operator === 'ABS') {
    code = "Math.abs(" + arg + ")";
  } else if (operator === 'ROOT') {
    code = "Math.sqrt(" + arg + ")";
  } else if (operator === 'LN') {
    code = "Math.log(" + arg + ")";
  } else if (operator === 'EXP') {
    code = "Math.pow(Math.E, " + arg + ")";
  } else if (operator === 'POW10') {
    code = "Math.pow(10, " + arg + ")";
  } else if (operator === 'ROUND') {
    code = "Math.round(" + arg + ")";
  } else if (operator === 'ROUNDUP') {
    code = "Math.ceil(" + arg + ")";
  } else if (operator === 'ROUNDDOWN') {
    code = "Math.floor(" + arg + ")";
  } else if (operator === 'SIN') {
    code = "Math.sin(" + arg + " / 180 * Math.PI)";
  } else if (operator === 'COS') {
    code = "Math.cos(" + arg + " / 180 * Math.PI)";
  } else if (operator === 'TAN') {
    code = "Math.tan(" + arg + " / 180 * Math.PI)";
  }

  if (code) {
    return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
  } // Second, handle cases which generate values that may need parentheses
  // wrapping the code.


  if (operator === 'LOG10') {
    code = "Math.log(" + arg + ") / Math.log(10)";
  } else if (operator === 'ASIN') {
    code = "Math.asin(" + arg + ") / Math.PI * 180";
  } else if (operator === 'ACOS') {
    code = "Math.acos(" + arg + ") / Math.PI * 180";
  } else if (operator === 'ATAN') {
    code = "Math.atan(" + arg + ") / Math.PI * 180";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_DIVISION];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Math/math_trig.js":
/*!**********************************************!*\
  !*** ./src/scratch/blocks/Math/math_trig.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.math_trig = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('%1 %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'OP',
        options: [['sin', 'SIN'], ['cos', 'COS'], ['tan', 'TAN'], ['asin', 'ASIN'], ['acos', 'ACOS'], ['atan', 'ATAN']]
      }, {
        type: 'input_value',
        name: 'NUM',
        check: 'Number'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematical Trig Tooltip'),
      category: Blockly.Categories.Mathematical
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematical Trig'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Mathematical Trig Description')
    };
  }
};
__webpack_provided_Blockly_dot_JavaScript.math_trig = __webpack_provided_Blockly_dot_JavaScript.math_single;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text.js":
/*!*****************************************!*\
  !*** ./src/scratch/blocks/Text/text.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/tools */ "./src/utils/tools.js");

Blockly.Blocks.text = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'field_input',
        name: 'TEXT'
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: '#dedede',
      colourSecondary: '#ffffff',
      colourTertiary: '#ffffff',
      tooltip: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('text'),
      'description': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var code = __webpack_provided_Blockly_dot_JavaScript.quote_(block.getFieldValue('TEXT'));
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_append.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Text/text_append.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_append = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('to %1 append text %2'),
      args0: [{
        type: 'field_variable',
        name: 'VAR',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('text')
      }, {
        type: 'input_value',
        name: 'TEXT'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Append Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Append'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Append Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_append = function (block) {
  var forceString = function forceString(value) {
    var strRegExp = /^\s*'([^']|\\')*'\s*$/;

    if (strRegExp.test(value)) {
      return value;
    }

    return "String(" + value + ")";
  }; // eslint-disable-next-line no-underscore-dangle


  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  var code = varName + " += " + forceString(value) + ";\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_changeCase.js":
/*!****************************************************!*\
  !*** ./src/scratch/blocks/Text/text_changeCase.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_changeCase = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('to %1 %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'CASE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('UPPER CASE'), 'UPPERCASE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('lower case'), 'LOWERCASE'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Title Case'), 'TITLECASE']]
      }, {
        type: 'input_value',
        name: 'TEXT'
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Change Case Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Change Case'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Change Case Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_changeCase = function (block) {
  var operators = {
    UPPERCASE: '.toUpperCase()',
    LOWERCASE: '.toLowerCase()',
    TITLECASE: null
  };
  var operator = operators[block.getFieldValue('CASE')];
  var textOrder = operator ? __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER : __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE;
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT', textOrder) || '\'\'';
  var code;

  if (operator) {
    code = "" + text + operator;
  } else {
    // eslint-disable-next-line no-underscore-dangle
    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('textToTitleCase', [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(str) {\n                return str.toLowerCase().split(' ').map(function(word) {\n                    return word.replace(word[0], word[0].toUpperCase());\n                }).join(' ');\n            }"]);
    code = functionName + "(" + text + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_charAt.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Text/text_charAt.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.text_charAt = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition());
    var dropdown = this.getField('WHERE');
    dropdown.setValidator(function (value) {
      var newAt = ['FROM_START', 'FROM_END'].includes(value);

      if (newAt !== _this.isAt) {
        _this.updateAt(newAt);

        _this.setFieldValue(value, 'WHERE');

        return null;
      }

      return undefined;
    });
    this.updateAt(true);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('in text %1 get %2'),
      args0: [{
        type: 'input_value',
        name: 'VALUE'
      }, {
        type: 'field_dropdown',
        name: 'WHERE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('letter #'), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('letter # from end'), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('first letter'), 'FIRST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('last letter'), 'LAST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('random letter'), 'RANDOM']]
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Char At Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Char At'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Char At Description')
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    container.setAttribute('at', !!this.isAt);
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    var isAt = xmlElement.getAttribute('at') !== 'false';
    this.updateAt(isAt);
  },
  updateAt: function updateAt(isAt) {
    this.removeInput('AT', true);

    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
    }

    this.isAt = isAt;
    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_charAt = function (block) {
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var textOrder = where === 'RANDOM' ? __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE : __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER;
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', textOrder) || '\'\'';
  var code;

  if (where === 'FROM_START') {
    var at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT'); // Adjust index if using one-based indices

    code = text + ".charAt(" + at + ")";
  } else if (where === 'FROM_END') {
    var _at = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT', 1, true);

    code = text + ".slice(" + _at + ").charAt(0)";
  } else if (where === 'FIRST') {
    code = text + ".charAt(0)";
  } else if (where === 'LAST') {
    code = text + ".slice(-1)";
  } else if (where === 'RANDOM') {
    // eslint-disable-next-line no-underscore-dangle
    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_('textRandomLetter', [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(text) {\n                var x = Math.floor(Math.random() * text.length);\n                return text[x];\n            }"]);
    code = functionName + "(" + text + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_getSubstring.js":
/*!******************************************************!*\
  !*** ./src/scratch/blocks/Text/text_getSubstring.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");




Blockly.Blocks.text_getSubstring = {
  init: function init() {
    this.WHERE_OPTIONS_1 = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])("letter\xA0#"), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])("letter\xA0#\xA0from end"), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('first'), 'FIRST']];
    this.WHERE_OPTIONS_2 = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])("letter\xA0#"), 'FROM_START'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])("letter\xA0#\xA0from end"), 'FROM_END'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('last'), 'LAST']];
    this.jsonInit(this.definition());
    this.updateAt(1, true);
    this.updateAt(2, true);
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('in text %1 get substring from %2 %3 to %4 %5'),
      args0: [{
        type: 'input_value',
        name: 'STRING'
      }, {
        type: 'field_dropdown',
        name: 'WHERE1',
        options: this.WHERE_OPTIONS_1
      }, {
        type: 'input_dummy',
        name: 'AT1'
      }, {
        type: 'field_dropdown',
        name: 'WHERE2',
        options: this.WHERE_OPTIONS_2
      }, {
        type: 'input_dummy',
        name: 'AT2'
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Text Substring tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Text Substring'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Text Substring Description')
    };
  },
  mutationToDom: function mutationToDom() {
    var container = document.createElement('mutation');
    var isAt1 = this.getInput('AT1').type === Blockly.INPUT_VALUE;
    var isAt2 = this.getInput('AT2').type === Blockly.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    container.setAttribute('at2', isAt2);
    return container;
  },
  domToMutation: function domToMutation(xmlElement) {
    var isAt1 = xmlElement.getAttribute('at1') === 'true';
    var isAt2 = xmlElement.getAttribute('at2') === 'true';
    this.updateAt(1, isAt1);
    this.updateAt(2, isAt2);
  },
  updateAt: function updateAt(n, isAt) {
    var _this = this;

    this.removeInput("AT" + n, true);

    if (isAt) {
      this.appendValueInput("AT" + n).setCheck('Number');
    } else {
      this.appendDummyInput("AT" + n);
    }

    var menu = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + n], function (value) {
      var newAt = ['FROM_START', 'FROM_END'].includes(value);

      if (newAt !== isAt) {
        _this.updateAt(n, newAt);

        _this.setFieldValue(value, "WHERE" + n);

        return null;
      }

      return undefined;
    });
    this.getInput("AT" + n).appendField(menu, "WHERE" + n);

    if (n === 1) {
      this.moveInputBefore('AT1', 'AT2');
    }

    this.initSvg();
    this.render(false);
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_getSubstring = function (block) {
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'STRING', __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1, at2, code;

  if (where1 === 'FIRST' && where2 === 'LAST') {
    code = text;
  } else if (text.match(/^'?\w+'?$/) || where1 !== 'FROM_END' && where1 !== 'LAST' && where2 !== 'FROM_END' && where2 !== 'LAST') {
    if (where1 === 'FROM_START') {
      at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1');
    } else if (where1 === 'FROM_END') {
      at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1', 1, false, __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION);
      at1 = text + ".length - " + at1;
    } else if (where1 === 'FIRST') {
      at1 = '0';
    }

    if (where2 === 'FROM_START') {
      at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2');
    } else if (where2 === 'FROM_END') {
      at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2', 0, false, __webpack_provided_Blockly_dot_JavaScript.ORDER_SUBTRACTION);
      at2 = text + ".length - " + at2;
    } else if (where2 === 'LAST') {
      at2 = text + ".length";
    }
  } else {
    at1 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT1');
    at2 = __webpack_provided_Blockly_dot_JavaScript.getAdjusted(block, 'AT2'); // binary-bot: Blockly.JavaScript.text.getIndex_ (Blockly)

    var getIndex = function getIndex(stringName, where, optAt) {
      if (where === 'FIRST') {
        return '0';
      } else if (where === 'FROM_END') {
        return stringName + ".length - 1 - " + optAt;
      } else if (where === 'LAST') {
        return stringName + ".length - 1";
      }

      return optAt;
    };

    var wherePascalCase = {
      FIRST: 'First',
      LAST: 'Last',
      FROM_START: 'FromStart',
      FROM_END: 'FromEnd'
    }; // eslint-disable-next-line no-underscore-dangle

    var functionName = __webpack_provided_Blockly_dot_JavaScript.provideFunction_("subsequence" + wherePascalCase[where1] + wherePascalCase[where2], [// eslint-disable-next-line no-underscore-dangle
    "function " + __webpack_provided_Blockly_dot_JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(\n                    sequence\n                    " + (where1 === 'FROM_END' || where1 === 'FROM_START' ? ', at1' : '') + "\n                    " + (where2 === 'FROM_END' || where2 === 'FROM_START' ? ', at2' : '') + "\n                ) {\n                    var start = " + getIndex('sequence', where1, 'at1') + ";\n                    var end = " + getIndex('sequence', where2, 'at2') + ";\n                    return sequence.slice(start, end);\n                }"]);
    code = functionName + "(\n            " + text + "\n            " + (where1 === 'FROM_END' || where1 === 'FROM_START' ? ", " + at1 : '') + "\n            " + (where2 === 'FROM_END' || where2 === 'FROM_START' ? ", " + at2 : '') + "\n        )";
  }

  code = text + ".slice(" + at1 + ", " + at2 + ")";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_indexOf.js":
/*!*************************************************!*\
  !*** ./src/scratch/blocks/Text/text_indexOf.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_indexOf = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('in text %1 find %2 occurence of text %3'),
      args0: [{
        type: 'input_value',
        name: 'VALUE' // check: 'String', Rendering looks off when check is enabled.

      }, {
        type: 'field_dropdown',
        name: 'END',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('first'), 'FIRST'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('last'), 'LAST']]
      }, {
        type: 'input_value',
        name: 'FIND' // check: 'String',

      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Index of Tooltip'),
      cateogry: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Index of'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Index of Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_indexOf = function (block) {
  var functionName = block.getFieldValue('END') === 'FIRST' ? 'indexOf' : 'lastIndexOf';
  var substring = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'FIND', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '\'\'';
  var code = text + "." + functionName + "(" + substring + ")";

  if (block.workspace.options.oneBasedIndex) {
    return [code + " + 1", __webpack_provided_Blockly_dot_JavaScript.ORDER_ADDITION];
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_isEmpty.js":
/*!*************************************************!*\
  !*** ./src/scratch/blocks/Text/text_isEmpty.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");



Blockly.Blocks.text_isEmpty = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('text %1 is empty'),
      args0: [{
        type: 'input_value',
        name: 'VALUE',
        check: ['String']
      }],
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Is empty'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Is empty'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Is empty')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_isEmpty = function (block) {
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '\'\'';
  var isVariable = block.workspace.getAllVariables().findIndex(function (variable) {
    return variable.name === text;
  }) !== -1;
  var code = isVariable ? "!" + text + " || !" + text + ".length" : "!" + text + ".length";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_LOGICAL_NOT];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_join.js":
/*!**********************************************!*\
  !*** ./src/scratch/blocks/Text/text_join.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");


Blockly.Blocks.text_join = {
  init: function init() {
    this.jsonInit(this.definition());
    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_0__["plusIconDark"], 25, 25, '', this.onIconClick.bind(this));
    this.appendDummyInput('ADD_ICON').appendField(fieldImage);
    this.moveInputBefore('ADD_ICON', 'STACK');
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('set %1 to create text with'),
      message1: '%1',
      args0: [{
        type: 'field_variable',
        name: 'VARIABLE',
        variable: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('text')
      }],
      args1: [{
        type: 'input_statement',
        name: 'STACK'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Text Join Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Text Join'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_1__["translate"])('Text Join Description')
    };
  },
  onIconClick: function onIconClick() {
    if (!this.workspace || this.isInFlyout) {
      return;
    }

    Blockly.Events.setGroup(true);
    var textBlock = this.workspace.newBlock('text_statement');
    textBlock.requiredParentId = this.id;
    textBlock.setMovable(false);
    textBlock.initSvg();
    textBlock.render();
    var shadowBlock = this.workspace.newBlock('text');
    shadowBlock.setShadow(true);
    shadowBlock.setFieldValue('', 'TEXT');
    shadowBlock.initSvg();
    shadowBlock.render();
    var textInput = textBlock.getInput('TEXT');
    textInput.connection.connect(shadowBlock.outputConnection);
    var connection = this.getLastConnectionInStatement('STACK');
    connection.connect(textBlock.previousConnection);
    Blockly.Events.setGroup(false); // TODO: Open editor and focus so user can add string right away?
    // const inputField = shadowBlock.getField('TEXT');
    // inputField.showEditor_();
  },
  enforceTextStatementType: function enforceTextStatementType() {
    var currentBlock = this.getInputTargetBlock('STACK');

    while (currentBlock !== null) {
      if (currentBlock.type !== 'text_statement') {
        currentBlock.unplug(false);
      }

      currentBlock = currentBlock.getNextBlock();
    }
  },
  onchange: function onchange(event) {
    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    if (event.type === Blockly.Events.END_DRAG) {
      // Only allow `text_statement` type blocks
      var blocksInStatement = this.getBlocksInStatement('STACK');
      blocksInStatement.forEach(function (block) {
        if (block.type !== 'text_statement') {
          Blockly.Events.disable();
          block.unplug();
          Blockly.Events.enable();
        }
      });
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_join = function (block) {
  // eslint-disable-next-line no-underscore-dangle
  var varName = __webpack_provided_Blockly_dot_JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
  var elements = [];
  var currentBlock = block.getInputTargetBlock('STACK');

  while (currentBlock !== null) {
    var value = __webpack_provided_Blockly_dot_JavaScript[currentBlock.type](currentBlock);

    if (Array.isArray(value) && value.length === 2) {
      elements.push(value[0]);
    } else {
      elements.push(value);
    }

    currentBlock = currentBlock.getNextBlock();
  }

  var code;

  if (elements.length === 0) {
    code = varName + " = '';\n";
  } else {
    code = varName + " = " + elements.join(' + ') + ";\n";
  }

  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_length.js":
/*!************************************************!*\
  !*** ./src/scratch/blocks/Text/text_length.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_length = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('length of %1'),
      args0: [{
        type: 'input_value',
        name: 'VALUE'
      }],
      output: 'Number',
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Length Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Length'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Length Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_length = function (block) {
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'VALUE', __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var code = text + ".length";
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_print.js":
/*!***********************************************!*\
  !*** ./src/scratch/blocks/Text/text_print.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_print = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('print %1'),
      args0: [{
        type: 'input_value',
        name: 'TEXT'
      }],
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Print Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Print'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Print Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_print = function (block) {
  var msg = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  var code = "window.alert(" + msg + ");\n";
  return code;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_prompt_ext.js":
/*!****************************************************!*\
  !*** ./src/scratch/blocks/Text/text_prompt_ext.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_prompt_ext = {
  init: function init() {
    var _this = this;

    this.jsonInit(this.definition()); // Change shape based on selected type

    var typeField = this.getField('TYPE');
    typeField.setValidator(function (value) {
      if (value === 'TEXT') {
        _this.setOutputShape(Blockly.OUTPUT_SHAPE_SQUARE);

        _this.setOutput(true, 'String');
      } else if (value === 'NUMBER') {
        _this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);

        _this.setOutput(true, 'Number');
      }

      _this.initSvg();

      _this.render(false);

      return undefined;
    });
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('prompt for %1 with message %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('string'), 'TEXT'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('number'), 'NUMBER']]
      }, {
        type: 'input_value',
        name: 'TEXT'
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Prompt Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'trade_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Prompt'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Prompt Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_prompt_ext = function (block) {
  var msg, code;

  if (block.getField('TEXT')) {
    // Internal message
    // eslint-disable-next-line no-underscore-dangle
    msg = __webpack_provided_Blockly_dot_JavaScript.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message
    msg = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT', __webpack_provided_Blockly_dot_JavaScript.ORDER_NONE) || '\'\'';
  }

  if (block.getFieldValue('TYPE') === 'NUMBER') {
    code = "parseFloat(window.prompt(" + msg + "))";
  } else {
    code = "window.prompt(" + msg + ")";
  }

  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_statement.js":
/*!***************************************************!*\
  !*** ./src/scratch/blocks/Text/text_statement.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images */ "./src/scratch/blocks/images.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/tools */ "./src/utils/tools.js");



Blockly.Blocks.text_statement = {
  init: function init() {
    var _this = this;

    this.requiredParentId = '';
    this.jsonInit(this.definition());
    var fieldImage = new Blockly.FieldImage(_images__WEBPACK_IMPORTED_MODULE_1__["minusIconDark"], 25, 25, '', function () {
      return _this.onIconClick();
    });
    this.appendDummyInput('REMOVE_ICON').appendField(fieldImage);
  },
  definition: function definition() {
    return {
      message0: '%1',
      args0: [{
        type: 'input_value',
        name: 'TEXT'
      }],
      colour: Blockly.Colours.BinaryLessGray.colour,
      colourSecondary: Blockly.Colours.BinaryLessGray.colourSecondary,
      colourTertiary: Blockly.Colours.BinaryLessGray.colourTertiary,
      previousStatement: null,
      nextStatement: null,
      tooltip: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Statement Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Statement'),
      'description': Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__["translate"])('Text Statement Description')
    };
  },
  onIconClick: function onIconClick() {
    if (!this.workspace || this.isInFlyout) {
      return;
    }

    this.unplug(true);
    this.dispose();
  },
  onchange: function onchange(event) {
    var _this2 = this;

    if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
      return;
    }

    var surroundParent = this.getSurroundParent();

    if (event.type === Blockly.Events.END_DRAG) {
      if (!this.requiredParentId && surroundParent.type === 'text_join') {
        this.requiredParentId = surroundParent.id;
      } else if (!surroundParent || surroundParent.id !== this.requiredParentId) {
        Blockly.Events.disable();
        this.unplug(false);
        var parentBlock = this.workspace.getAllBlocks().find(function (block) {
          return block.id === _this2.requiredParentId;
        });

        if (parentBlock) {
          var parentConnection = parentBlock.getLastConnectionInStatement('STACK');
          parentConnection.connect(this.previousConnection);
        } else {
          this.dispose();
        }

        Blockly.Events.enable();
      }
    }
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_statement = function (block) {
  var code = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT') || '';
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/blocks/Text/text_trim.js":
/*!**********************************************!*\
  !*** ./src/scratch/blocks/Text/text_trim.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

Blockly.Blocks.text_trim = {
  init: function init() {
    this.jsonInit(this.definition());
  },
  definition: function definition() {
    return {
      message0: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('trim spaces from %1 of %2'),
      args0: [{
        type: 'field_dropdown',
        name: 'MODE',
        options: [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('both sides'), 'BOTH'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('left side'), 'LEFT'], [Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('right side'), 'RIGHT']]
      }, {
        type: 'input_value',
        name: 'TEXT'
      }],
      output: 'String',
      outputShape: Blockly.OUTPUT_SHAPE_SQUARE,
      colour: Blockly.Colours.Binary.colour,
      colourSecondary: Blockly.Colours.Binary.colourSecondary,
      colourTertiary: Blockly.Colours.Binary.colourTertiary,
      tooltip: Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Trim Tooltip'),
      category: Blockly.Categories.Text
    };
  },
  meta: function meta() {
    return {
      'display_name': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Trim'),
      'description': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Text Trim Description')
    };
  }
};

__webpack_provided_Blockly_dot_JavaScript.text_trim = function (block) {
  var operators = {
    LEFT: '.replace(/^[\\s\\xa0]+/, \'\')',
    RIGHT: '.replace(/[\\s\\xa0]+$/, \'\')',
    BOTH: '.trim()'
  };
  var operator = operators[block.getFieldValue('MODE')];
  var text = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, 'TEXT', __webpack_provided_Blockly_dot_JavaScript.ORDER_MEMBER) || '\'\'';
  var code = "" + text + operator;
  return [code, __webpack_provided_Blockly_dot_JavaScript.ORDER_FUNCTION_CALL];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/hooks/block.js":
/*!************************************!*\
  !*** ./src/scratch/hooks/block.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");


/* eslint-disable func-names, no-underscore-dangle */


Blockly.Block.prototype.getDisplayName = function () {
  if (this.meta) {
    var block_meta = this.meta();
    return block_meta && block_meta.display_name;
  }

  return this.type;
};

Blockly.Block.prototype.getSiblings = function () {
  var _this = this;

  var siblings = [this];
  ['getPreviousBlock', 'getNextBlock'].forEach(function (functionName) {
    var block = _this[functionName]();

    while (block !== null) {
      var parent = _this.getParent();

      if (parent && parent.id === block.id) {
        break;
      }

      siblings.push(block);
      block = block[functionName]();
    }
  });
  return siblings;
};

Blockly.Block.prototype.getChildByType = function (type) {
  return this.getDescendants().find(function (child) {
    return child.type === type;
  });
};

Blockly.Block.prototype.getChildFieldValue = function (childType, childField) {
  var childBlock = this.getChildByType(childType);

  if (childBlock) {
    var value = childBlock.getFieldValue(childField);
    return value;
  }

  return null;
};

Blockly.Block.prototype.childValueToCode = function (childType, childField) {
  var childBlock = this.getChildByType(childType);
  return childBlock && __webpack_provided_Blockly_dot_JavaScript.valueToCode(childBlock, childField, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC);
};

Blockly.Block.prototype.getBlocksInStatement = function (statementInputName) {
  var blocksInStatement = [];
  var firstBlock = this.getInputTargetBlock(statementInputName);

  if (firstBlock) {
    return firstBlock.getSiblings();
  }

  return blocksInStatement;
};

Blockly.Block.prototype.getLastConnectionInStatement = function (statementInputName) {
  var firstBlockInStack = this.getInputTargetBlock(statementInputName);

  if (firstBlockInStack) {
    return firstBlockInStack.lastConnectionInStack();
  }

  var statementInput = this.getInput(statementInputName);
  return statementInput.connection;
};

Blockly.Block.prototype.isDescendantOf = function (type) {
  var parentBlock = this.getParent();

  while (parentBlock !== null) {
    if (parentBlock.type === type) {
      return true;
    }

    parentBlock = parentBlock.getParent();
  }

  return false;
};

Blockly.Block.prototype.getTopParent = function () {
  var parent = this.getParent();

  while (parent !== null) {
    var nextParent = parent.getParent();

    if (!nextParent) {
      return parent;
    }

    parent = nextParent;
  }

  return null;
};

Blockly.Block.getDimensions = function (block_node) {
  // eslint-disable-next-line
  var options = new Blockly.Options({
    media: __webpack_require__.p + "media/"
  });
  var fragment = document.createDocumentFragment();
  var el_injection_div = document.createElement('div');
  fragment.appendChild(el_injection_div); // Create a headless workspace to calculate xmlList block dimensions

  var svg = Blockly.createDom_(el_injection_div, options);
  var workspace = Blockly.createMainWorkspace_(svg, options, false, false);
  var block = Blockly.Xml.domToBlock(block_node, workspace);
  var block_hw = block.getHeightWidth();
  workspace.dispose();
  return block_hw;
};

Blockly.Block.prototype.isMainBlock = function () {
  var _this2 = this;

  return _constants__WEBPACK_IMPORTED_MODULE_1__["default"].mainBlocks.some(function (block_type) {
    return block_type === _this2.type;
  });
};

Blockly.Block.prototype.isIndependentBlock = function () {
  var _this3 = this;

  var INDEPEDENT_BLOCKS = _constants__WEBPACK_IMPORTED_MODULE_1__["default"].INDEPEDENT_BLOCKS;
  return INDEPEDENT_BLOCKS.some(function (block_type) {
    return block_type === _this3.type;
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/hooks/block_svg.js":
/*!****************************************!*\
  !*** ./src/scratch/hooks/block_svg.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

/* eslint-disable func-names, no-underscore-dangle */
// deriv-bot: Blockly value, Scratch resets this to 0, req for correct spacing in flyout.

Blockly.BlockSvg.TAB_WIDTH = 8;
/**
 * Set whether the block is disabled or not.
 * @param {boolean} disabled True if disabled.
 * deriv-bot: Call updateDisabled() when setDisabled is called.
 */

Blockly.BlockSvg.prototype.setDisabled = function (disabled) {
  if (this.disabled !== disabled) {
    Blockly.BlockSvg.superClass_.setDisabled.call(this, disabled);

    if (this.rendered) {
      this.updateDisabled();
    }
  }
};
/**
 * Enable or disable a block.
 */


Blockly.BlockSvg.prototype.updateDisabled = function () {
  if (this.disabled || this.getInheritedDisabled()) {
    var added = Blockly.utils.addClass(
    /** @type {!Element} */
    this.svgGroup_, 'blocklyDisabled');

    if (added) {
      this.svgPath_.setAttribute('fill', "url(#" + this.workspace.options.disabledPatternId + ")");
    }
  } else {
    var removed = Blockly.utils.removeClass(
    /** @type {!Element} */
    this.svgGroup_, 'blocklyDisabled');

    if (removed) {
      this.updateColour();
    }
  }

  var children = this.getChildren(false);
  children.forEach(function (child) {
    child.updateDisabled();
  });
};
/**
 * Show the context menu for this block.
 * @param {!Event} e Mouse event.
 * @private
 * deriv-bot: Restore contextMenu options from Blockly unavailable in Scratch
 */


Blockly.BlockSvg.prototype.showContextMenu_ = function (e) {
  if (this.workspace.options.readOnly || !this.contextMenu) {
    return;
  } // Save the current block in a variable for use in closures.


  var block = this;
  var menuOptions = [];

  if (this.isDeletable() && this.isMovable() && !block.isInFlyout) {
    menuOptions.push(Blockly.ContextMenu.blockDuplicateOption(block, e));

    if (this.isEditable() && this.workspace.options.comments) {
      menuOptions.push(Blockly.ContextMenu.blockCommentOption(block));
    }

    menuOptions.push(Blockly.ContextMenu.blockDeleteOption(block));
  } else if (this.parentBlock_ && this.isShadow_) {
    this.parentBlock_.showContextMenu_(e);
    return;
  } // Option to collapse/expand block.


  if (this.workspace.options.collapse) {
    if (this.collapsed_) {
      var expandOption = {
        enabled: true
      };
      expandOption.text = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Expand Block');

      expandOption.callback = function () {
        block.setCollapsed(false);
      };

      menuOptions.push(expandOption);
    } else {
      var collapseOption = {
        enabled: true
      };
      collapseOption.text = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Collapse Block');

      collapseOption.callback = function () {
        block.setCollapsed(true);
      };

      menuOptions.push(collapseOption);
    }
  } // Option to disable/enable block.


  if (this.workspace.options.disable) {
    var disableOption = {
      text: this.disabled ? Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Enable Block') : Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('Disable Block'),
      enabled: !this.getInheritedDisabled(),
      callback: function callback() {
        var group = Blockly.Events.getGroup();

        if (!group) {
          Blockly.Events.setGroup(true);
        }

        block.setDisabled(!block.disabled);

        if (!group) {
          Blockly.Events.setGroup(false);
        }
      }
    };
    menuOptions.push(disableOption); // Allow the block to add or modify menuOptions.

    if (this.customContextMenu) {
      this.customContextMenu(menuOptions);
    }

    Blockly.ContextMenu.show(e, menuOptions, this.RTL);
    Blockly.ContextMenu.currentBlock = this;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/colours.js":
/*!**************************************!*\
  !*** ./src/scratch/hooks/colours.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {Blockly.Colours.Binary = {
  colour: '#dedede',
  colourSecondary: '#e2e2e2',
  colourTertiary: '#bababa'
};
Blockly.Colours.BinaryLessGray = {
  colour: '#f3f3f3',
  colourSecondary: '#e2e2e2',
  colourTertiary: '#bababa'
};
Blockly.Colours.BinaryPurple = {
  colour: '#dedede',
  colourSecondary: '#e2e2e2',
  colourTertiary: '#bababa'
};
Blockly.Colours.BinaryLessPurple = {
  colour: '#dedede',
  colourSecondary: '#e2e2e2',
  colourTertiary: '#bababa'
};
Blockly.Colours.BinaryProcedures = {
  colour: '#1876d2',
  colourSecondary: '#0d47a1',
  colourTertiary: '#0d47a1'
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/constant.js":
/*!***************************************!*\
  !*** ./src/scratch/hooks/constant.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/lang/i18n */ "./src/utils/lang/i18n.js");

/**
 * ENUM for categories.
 * @const
 */

Blockly.Categories = {
  'Trade_Definition': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('trade_parameters'),
  'Before_Purchase': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('purchase_conditions'),
  'During_Purchase': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('sell_conditions'),
  'After_Purchase': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('trade_results'),
  'Mathematical': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('math'),
  'Logic': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('logic'),
  'Text': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('text'),
  'Variables': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('variables'),
  'Functions': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('custom_functions'),
  'List': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('lists'),
  'Indicators': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('indicators'),
  'Time': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('time'),
  'Tick_Analysis': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('technical_analysis'),
  'Candle': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('candle'),
  'Miscellaneous': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('miscellaneous'),
  'Loop': Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('loops')
};
/**
 * Number of pixels the mouse must move before a drag starts.
 */

Blockly.DRAG_RADIUS = 3;
/**
 * Number of pixels the mouse must move before a drag/scroll starts from the
 * flyout.  Because the drag-intention is determined when this is reached, it is
 * larger than Blockly.DRAG_RADIUS so that the drag-direction is clearer.
 */

Blockly.FLYOUT_DRAG_RADIUS = 1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/data_category.js":
/*!********************************************!*\
  !*** ./src/scratch/hooks/data_category.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, goog) {/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/lang/i18n */ "./src/utils/lang/i18n.js");




/* eslint-disable func-names, no-underscore-dangle */

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */

Blockly.DataCategory = function (workspace) {
  var variableModelList = workspace.getVariablesOfType('');
  var xmlList = []; // `Create Variable`-button

  Blockly.DataCategory.addCreateButton(xmlList, workspace);
  var block_types = ['variables_set', 'variables_get', 'math_change'];
  xmlList = xmlList.concat(Blockly.DataCategory.search(variableModelList, block_types));
  return xmlList;
};

Blockly.DataCategory.search = function (variableModelList) {
  var xmlList = [];

  if (variableModelList.length > 0) {
    var generateVariableFieldXmlString = function generateVariableFieldXmlString(variableModel) {
      // The variable name may be user input, so it may contain characters that
      // need to be escaped to create valid XML.
      var escapedText = "<field name=\"VAR\" id=\"" + variableModel.getId() + "\" variabletype=\"" + goog.string.htmlEscape(variableModel.type) + "\">" + goog.string.htmlEscape(variableModel.name) + "</field>";
      return escapedText;
    };

    var firstVariable = variableModelList[0]; // Create 'Set `var` to'-block

    if (Blockly.Blocks.variables_set) {
      var gap = Blockly.Blocks.math_change ? 8 : 24;
      var setBlockText = "<xml><block type=\"variables_set\" gap=\"" + gap + "\">" + generateVariableFieldXmlString(firstVariable) + "</block></xml>";
      var setBlock = Blockly.Xml.textToDom(setBlockText).firstChild;
      xmlList.push(setBlock);
    } // Create 'Change `var` by `1`'-block


    if (Blockly.Blocks.math_change) {
      var _gap = Blockly.Blocks.variables_get ? 20 : 8;

      var changeBlockText = "<xml><block type=\"math_change\" gap=\"" + _gap + "\">" + generateVariableFieldXmlString(firstVariable) + "<value name=\"DELTA\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block></xml>";
      var changeBlock = Blockly.Xml.textToDom(changeBlockText).firstChild;
      xmlList.push(changeBlock);
    } // Create `variable_get` block for each variable


    if (Blockly.Blocks.variables_get) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      variableModelList.forEach(function (variable) {
        var getBlockText = "<xml><block type=\"variables_get\">" + generateVariableFieldXmlString(variable) + "</block></xml>";
        var getBlock = Blockly.Xml.textToDom(getBlockText).firstChild;
        xmlList.push(getBlock);
      });
    }
  }

  return xmlList;
};
/**
 * Construct a create variable button and push it to the xmlList.
 * @param {!Array.<!Element>} xmlList Array of XML block elements.
 * @param {Blockly.Workspace} workspace Workspace to register callback to.
 * deriv-bot: We only use a single type of variable, so `type` arg was removed.
 */


Blockly.DataCategory.addCreateButton = function (xmlList, workspace) {
  var buttonXml = goog.dom.createDom('button'); // Set default msg, callbackKey, and callback values for type 'VARIABLE'

  var msg = Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('Create variable');
  var callbackKey = 'CREATE_VARIABLE';

  var callback = function callback(button) {
    var buttonWorkspace = button.getTargetWorkspace();
    Blockly.Variables.createVariable(buttonWorkspace, null, '');
    buttonWorkspace.toolbox_.showCategory_('Variables');
  };

  buttonXml.setAttribute('text', msg);
  buttonXml.setAttribute('callbackKey', callbackKey);
  workspace.registerButtonCallback(callbackKey, callback);
  xmlList.push(buttonXml);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js")))

/***/ }),

/***/ "./src/scratch/hooks/field_dropdown.js":
/*!*********************************************!*\
  !*** ./src/scratch/hooks/field_dropdown.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable func-names, no-underscore-dangle */
Blockly.FieldDropdown.prototype.updateOptions = function (options, opt_default, should_trigger_event) {
  if (opt_default === void 0) {
    opt_default = null;
  }

  if (should_trigger_event === void 0) {
    should_trigger_event = true;
  }

  Blockly.Events.disable();
  var previous_value = this.getValue();
  var has_default_value = opt_default && options.findIndex(function (item) {
    return item[1] === opt_default;
  }) !== -1;
  this.menuGenerator_ = options;

  if (has_default_value) {
    // Set default value if available in new options.
    this.setValue('');
    this.setValue(opt_default);
  } else if (options.length > 0) {
    // Default to first if option isn't available.
    this.setValue('');
    this.setValue(this.menuGenerator_[0][1]);
  }

  Blockly.Events.enable();

  if (should_trigger_event) {
    var event = new Blockly.Events.BlockChange(this.sourceBlock_, 'field', this.name, previous_value, this.getValue());
    Blockly.Events.fire(event);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/field_image.js":
/*!******************************************!*\
  !*** ./src/scratch/hooks/field_image.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(goog, Blockly) {/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable func-names, no-underscore-dangle */

/**
 * Class for an image on a block.
 * deriv-bot: Blockly implementation vs. Scratch for click handlers
 * @param {string} src The URL of the image.
 * @param {number} width Width of the image.
 * @param {number} height Height of the image.
 * @param {string=} optAlt Optional alt text for when block is collapsed.
 * @param {Function=} optOnClick Optional function to be called when the image
 *     is clicked.  If optOnClick is defined, optAlt must also be defined.
 * @param {boolean=} optFlipRtl Whether to flip the icon in RTL.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldImage = function (src, width, height, optAlt, optOnClick, optFlipRtl) {
  this.sourceBlock_ = null; // Ensure height and width are numbers.  Strings are bad at math.

  this.height_ = Number(height);
  this.width_ = Number(width);
  this.size_ = new goog.math.Size(this.width_, this.height_);
  this.flipRtl_ = optFlipRtl;
  this.tooltip_ = '';
  this.setValue(src);
  this.setText(optAlt);

  if (typeof optOnClick === 'function') {
    this.clickHandler_ = optOnClick;
  }
};

goog.inherits(Blockly.FieldImage, Blockly.Field);
/**
 * Construct a FieldImage from a JSON arg object,
 * dereferencing any string table references.
 * @param {!Object} options A JSON object with options (src, width, height,
 *    alt, and flipRtl).
 * @return {!Blockly.FieldImage} The new field instance.
 * @package
 * @nocollapse
 */

Blockly.FieldImage.fromJson = function (options) {
  var src = Blockly.utils.replaceMessageReferences(options.src);
  var width = Number(Blockly.utils.replaceMessageReferences(options.width));
  var height = Number(Blockly.utils.replaceMessageReferences(options.height));
  var alt = Blockly.utils.replaceMessageReferences(options.alt);
  var flipRtl = !!options.flipRtl;
  return new Blockly.FieldImage(src, width, height, alt, null, flipRtl);
};
/**
 * Editable fields are saved by the XML renderer, non-editable fields are not.
 */


Blockly.FieldImage.prototype.EDITABLE = false;
/**
 * Install this image on a block.
 */

Blockly.FieldImage.prototype.init = function () {
  if (this.fieldGroup_) {
    // Image has already been initialized once.
    return;
  } // Build the DOM.

  /** @type {SVGElement} */


  this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);

  if (!this.visible_) {
    this.fieldGroup_.style.display = 'none';
  }
  /** @type {SVGElement} */


  this.imageElement_ = Blockly.utils.createSvgElement('image', {
    height: this.height_ + "px",
    width: this.width_ + "px"
  }, this.fieldGroup_);
  this.setValue(this.src_);
  this.setText(this.text_);
  this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);

  if (this.tooltip_) {
    this.imageElement_.tooltip = this.tooltip_;
  } else {
    // Configure the field to be transparent with respect to tooltips.
    this.setTooltip(this.sourceBlock_);
  }

  Blockly.Tooltip.bindMouseEvents(this.imageElement_);
  this.maybeAddClickHandler_();
};
/**
 * Dispose of all DOM objects belonging to this text.
 */


Blockly.FieldImage.prototype.dispose = function () {
  goog.dom.removeNode(this.fieldGroup_);
  this.fieldGroup_ = null;
  this.imageElement_ = null;
};
/**
 * Bind events for a mouse down on the image, but only if a click handler has
 * been defined.
 * @private
 */


Blockly.FieldImage.prototype.maybeAddClickHandler_ = function () {
  if (this.clickHandler_) {
    this.mouseDownWrapper_ = Blockly.bindEventWithChecks_(this.fieldGroup_, 'mousedown', this, this.clickHandler_); // pxtblockly & deriv-bot: if a click handler is attached to the image, change the cursor to a pointer

    if (this.imageElement_) this.imageElement_.style.cursor = 'pointer';
  }
};
/**
 * Change the tooltip text for this field.
 * @param {string|!Element} newTip Text for tooltip or a parent element to
 *     link to for its tooltip.
 */


Blockly.FieldImage.prototype.setTooltip = function (newTip) {
  this.tooltip_ = newTip;

  if (this.imageElement_) {
    this.imageElement_.tooltip = newTip;
  }
};
/**
 * Get the source URL of this image.
 * @return {string} Current text.
 * @override
 */


Blockly.FieldImage.prototype.getValue = function () {
  return this.src_;
};
/**
 * Set the source URL of this image.
 * @param {?string} src New source.
 * @override
 */


Blockly.FieldImage.prototype.setValue = function (src) {
  if (src === null) {
    // No change if null.
    return;
  }

  this.src_ = src;

  if (this.imageElement_) {
    this.imageElement_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src || '');
  }
};
/**
 * Get whether to flip this image in RTL
 * @return {boolean} True if we should flip in RTL.
 */


Blockly.FieldImage.prototype.getFlipRtl = function () {
  return this.flipRtl_;
};
/**
 * Set the alt text of this image.
 * @param {?string} alt New alt text.
 * @override
 */


Blockly.FieldImage.prototype.setText = function (alt) {
  if (alt === null) {
    // No change if null.
    return;
  }

  this.text_ = alt;

  if (this.imageElement_) {
    this.imageElement_.setAttribute('alt', alt || '');
  }
};
/**
 * Images are fixed width, no need to render.
 * @private
 */


Blockly.FieldImage.prototype.render_ = function () {// NOP
};
/**
 * Images are fixed width, no need to render even if forced.
 */


Blockly.FieldImage.prototype.forceRerender = function () {// NOP
};
/**
 * Images are fixed width, no need to update.
 * @private
 */


Blockly.FieldImage.prototype.updateWidth = function () {// NOP
};
/**
 * If field click is called, and click handler defined,
 * call the handler.
 */


Blockly.FieldImage.prototype.showEditor_ = function () {
  if (this.clickHandler_) {
    this.clickHandler_(this);
  }
};

Blockly.Field.register('field_image', Blockly.FieldImage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js"), __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/flyout_base.js":
/*!******************************************!*\
  !*** ./src/scratch/hooks/flyout_base.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly, goog) {/* eslint-disable no-underscore-dangle */

/**
 * Create a copy of this block on the workspace.
 * @param {!Blockly.BlockSvg} originalBlock The block to copy from the flyout.
 * @return {Blockly.BlockSvg} The newly created block, or null if something
 *     went wrong with deserialization.
 * @package
 */
Blockly.Flyout.prototype.createBlock = function (event, originalBlock) {
  Blockly.Events.disable();
  var variablesBeforeCreation = this.targetWorkspace_.getAllVariables();
  this.targetWorkspace_.setResizesEnabled(false);
  var newBlock = null;

  try {
    newBlock = this.placeNewBlock_(event, originalBlock); // Close the flyout.

    Blockly.hideChaff();
  } finally {
    Blockly.Events.enable();
  }

  var newVariables = Blockly.Variables.getAddedVariables(this.targetWorkspace_, variablesBeforeCreation);

  if (Blockly.Events.isEnabled()) {
    Blockly.Events.setGroup(true);
    Blockly.Events.fire(new Blockly.Events.Create(newBlock)); // Fire a VarCreate event for each (if any) new variable created.

    for (var i = 0; i < newVariables.length; i++) {
      var thisVariable = newVariables[i];
      Blockly.Events.fire(new Blockly.Events.VarCreate(thisVariable));
    }
  }

  if (this.autoClose) {
    this.hide();
  }

  Blockly.derivWorkspace.toolbox_.clearSelection();
  newBlock.isInFlyout = false;
  return newBlock;
};
/**
 * Copy a block from the flyout to the workspace and position it correctly.
 * @param {!Blockly.Block} oldBlock The flyout block to copy.
 * @return {!Blockly.Block} The new block in the main workspace.
 * @private
 */


Blockly.Flyout.prototype.placeNewBlock_ = function (event, oldBlock) {
  var targetWorkspace = this.targetWorkspace_;
  var svgRootOld = oldBlock.getSvgRoot();

  if (!svgRootOld) {
    throw new Error('oldBlock is not rendered.');
  } // Create the new block by cloning the block in the flyout (via XML).


  var xml = Blockly.Xml.blockToDom(oldBlock); // The target workspace would normally resize during domToBlock, which will
  // lead to weird jumps.  Save it for terminateDrag.

  targetWorkspace.setResizesEnabled(false); // Using domToBlock instead of domToWorkspace means that the new block will be
  // placed at position (0, 0) in main workspace units.

  var block = Blockly.Xml.domToBlock(xml, targetWorkspace);
  var svgRootNew = block.getSvgRoot();

  if (!svgRootNew) {
    throw new Error('block is not rendered.');
  } // The offset in pixels between the main workspace's origin and the upper left
  // corner of the injection div.


  var mainOffsetPixels = targetWorkspace.getOriginOffsetInPixels(); // The offset in pixels between the flyout workspace's origin and the upper
  // left corner of the injection div.

  var flyoutOffsetPixels = this.workspace_.getOriginOffsetInPixels(); // The position of the old block in pixels relative to the flyout
  // workspace's origin.

  var oldBlockPosPixels = new goog.math.Coordinate(event.clientX - 50, event.clientY - 20); // The position of the old block in pixels relative to the upper left corner
  // of the injection div.

  var oldBlockOffsetPixels = goog.math.Coordinate.sum(flyoutOffsetPixels, oldBlockPosPixels); // The position of the old block in pixels relative to the origin of the
  // main workspace.

  var finalOffsetPixels = goog.math.Coordinate.difference(oldBlockOffsetPixels, mainOffsetPixels); // The position of the old block in main workspace coordinates.

  var finalOffsetMainWs = finalOffsetPixels.scale(1 / targetWorkspace.scale);
  block.moveBy(finalOffsetMainWs.x, finalOffsetMainWs.y);
  return block;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js")))

/***/ }),

/***/ "./src/scratch/hooks/gesture.js":
/*!**************************************!*\
  !*** ./src/scratch/hooks/gesture.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {/* eslint-disable no-underscore-dangle */

/**
 * Update this gesture to record whether a block is being dragged from the
 * flyout. This function should be called on a mouse/touch move event the first time the
 * drag radius is exceeded.  It should be called no more than once per gesture.
 * If a block should be dragged from the flyout this function creates the new
 * block on the main workspace and updates targetBlock_ and startWorkspace_.
 * @return {boolean} True if a block is being dragged from the flyout.
 * @private
 */
Blockly.Gesture.prototype.updateIsDraggingFromFlyout_ = function () {
  // Disabled blocks may not be dragged from the flyout.
  if (this.targetBlock_.disabled) {
    return false;
  }

  if (!this.flyout_.isScrollable() || this.flyout_.isDragTowardWorkspace(this.currentDragDeltaXY_)) {
    this.startWorkspace_ = this.flyout_.targetWorkspace_;
    this.startWorkspace_.updateScreenCalculationsIfScrolled(); // Start the event group now, so that the same event group is used for block
    // creation and block dragging.

    if (!Blockly.Events.getGroup()) {
      Blockly.Events.setGroup(true);
    } // The start block is no longer relevant, because this is a drag.


    this.startBlock_ = null;
    this.targetBlock_ = this.flyout_.createBlock(this.mostRecentEvent_, this.targetBlock_);
    this.targetBlock_.select();
    return true;
  }

  return false;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/icon.js":
/*!***********************************!*\
  !*** ./src/scratch/hooks/icon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {/* eslint-disable func-names, no-underscore-dangle */

/**
 * Render the icon.
 * @param {number} cursorX Horizontal offset at which to position the icon.
 * @return {number} Horizontal offset for next item to draw.
 */
Blockly.Icon.prototype.renderIcon = function (cursorX) {
  if (this.collapseHidden && this.block_.isCollapsed()) {
    this.iconGroup_.setAttribute('display', 'none');
    return cursorX;
  }

  this.iconGroup_.setAttribute('display', 'block');
  var newCursorX = cursorX;
  var TOP_MARGIN = 9;
  var width = this.SIZE;

  if (this.block_.RTL) {
    newCursorX -= width;
  }

  this.iconGroup_.setAttribute('transform', "translate(" + newCursorX + "," + TOP_MARGIN + ")");
  this.computeIconLocation();

  if (this.block_.RTL) {
    newCursorX -= Blockly.BlockSvg.SEP_SPACE_X;
  } else {
    newCursorX += width + Blockly.BlockSvg.SEP_SPACE_X;
  }

  return newCursorX;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/procedures.js":
/*!*****************************************!*\
  !*** ./src/scratch/hooks/procedures.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, goog) {/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/lang/i18n */ "./src/utils/lang/i18n.js");
/* eslint-disable func-names, no-underscore-dangle */

/**
 * Construct the blocks required by the flyout for the procedure category.
 * @param {!Blockly.Workspace} workspace The workspace containing procedures.
 * @return {!Array.<!Element>} Array of XML block elements.
 */

Blockly.Procedures.flyoutCategory = function (workspace) {
  var xmlList = [];

  if (Blockly.Blocks.procedures_defnoreturn) {
    // <block type="procedures_defnoreturn" gap="16">
    //     <field name="NAME">do something</field>
    // </block>
    var block = document.createElement('block');
    block.setAttribute('type', 'procedures_defnoreturn');
    block.setAttribute('gap', 16); // TEMP

    var nameField = document.createElement('field');
    nameField.setAttribute('name', 'NAME');
    nameField.appendChild(document.createTextNode(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('do something')));
    block.appendChild(nameField);
    xmlList.push(block);
  }

  if (Blockly.Blocks.procedures_defreturn) {
    // <block type="procedures_defreturn" gap="16">
    //     <field name="NAME">do something</field>
    // </block>
    var _block = document.createElement('block');

    _block.setAttribute('type', 'procedures_defreturn');

    _block.setAttribute('gap', 16);

    var _nameField = document.createElement('field');

    _nameField.setAttribute('name', 'NAME');

    _nameField.appendChild(document.createTextNode(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_0__["translate"])('do something')));

    _block.appendChild(_nameField);

    xmlList.push(_block);
  }

  if (Blockly.Blocks.procedures_ifreturn) {
    // <block type="procedures_ifreturn" gap="16"></block>
    var _block2 = document.createElement('block');

    _block2.setAttribute('type', 'procedures_ifreturn');

    _block2.setAttribute('gap', 16);

    xmlList.push(_block2);
  }

  if (xmlList.length) {
    // Add slightly larger gap between system blocks and user calls.
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
  }

  var tuple = Blockly.Procedures.allProcedures(workspace);
  xmlList = xmlList.concat(Blockly.Procedures.populateDynamicProcedures(tuple));
  return xmlList;
};

Blockly.Procedures.populateDynamicProcedures = function (tuple) {
  var xmlList = [];

  var populateProcedures = function populateProcedures(procedureList, templateName) {
    var xml = [];

    if (!procedureList) {
      return xml;
    }

    var _loop = function _loop(i) {
      var name = procedureList[i][0];
      var args = procedureList[i][1]; // <block type="procedures_callnoreturn" gap="16">
      //   <mutation name="do something">
      //     <arg name="x"></arg>
      //   </mutation>
      // </block>

      var block = document.createElement('block');
      block.setAttribute('type', templateName);
      block.setAttribute('gap', 16);
      var mutation = document.createElement('mutation');
      mutation.setAttribute('name', name);
      block.appendChild(mutation);
      args.forEach(function (argumentName) {
        var arg = document.createElement('arg');
        arg.setAttribute('name', argumentName);
        mutation.appendChild(arg);
      });
      xml.push(block);
    };

    for (var i = 0; i < procedureList.length; i++) {
      _loop(i);
    }

    return xml;
  };

  xmlList = xmlList.concat(populateProcedures(tuple[0], 'procedures_callnoreturn'));
  xmlList = xmlList.concat(populateProcedures(tuple[1], 'procedures_callreturn'));
  return xmlList;
};
/**
 * Find the definition block for the named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to search.
 * @return {Blockly.Block} The procedure definition block, or null not found.
 */


Blockly.Procedures.getDefinition = function (name, workspace) {
  // Assume that a procedure definition is a top block.
  var blocks = workspace.getTopBlocks(false);

  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].getProcedureDef) {
      var tuple = blocks[i].getProcedureDef();

      if (tuple && Blockly.Names.equals(tuple[0], name)) {
        return blocks[i];
      }
    }
  }

  return null;
}; // Scratch has a broken version where they return `false` if Blockly.Names.equals(procName[0], name).
// https://github.com/LLK/scratch-blocks/pull/1930


Blockly.Procedures.isNameUsed = function (name, workspace, optExclude) {
  var blocks = workspace.getAllBlocks(false); // Iterate through every block and check the name.

  return blocks.some(function (block) {
    if (block !== optExclude && block.getProcedureDef) {
      var procName = block.getProcedureDef();
      return Blockly.Names.equals(procName[0], name);
    }

    return false;
  });
};
/**
 * Move the workspace based on the most recent mouse movements.
 * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
 *     moved from the position at the start of the drag, in pixel coordinates.
 * @package
 */


Blockly.WorkspaceDragger.prototype.drag = function (currentDragDeltaXY) {
  if (this.workspace_.isFlyout) {
    return;
  }

  var metrics = this.startDragMetrics_;
  var newXY = goog.math.Coordinate.sum(this.startScrollXY_, currentDragDeltaXY); // Bound the new XY based on workspace bounds.

  var x = Math.min(newXY.x, -metrics.contentLeft);
  var y = Math.min(newXY.y, -metrics.contentTop);
  x = Math.max(x, metrics.viewWidth - metrics.contentLeft - metrics.contentWidth);
  y = Math.max(y, metrics.viewHeight - metrics.contentTop - metrics.contentHeight);
  x = -x - metrics.contentLeft;
  y = -y - metrics.contentTop;
  this.updateScroll_(x, y);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js")))

/***/ }),

/***/ "./src/scratch/hooks/toolbox.js":
/*!**************************************!*\
  !*** ./src/scratch/hooks/toolbox.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(goog, Blockly) {/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_12__);
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
  var el_toolbox_search = goog.dom.createDom(goog.dom.TagName.INPUT, {
    'id': 'search_input',
    'placeholder': 'Search'
  });
  this.HtmlDiv.appendChild(el_toolbox_search);
  ['keyup', 'click'].forEach(function (e) {
    el_toolbox_search.addEventListener(e, function () {
      var toolbox = workspace.toolbox_;
      _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
      toolbox.setSelectedItem('search');
    });
  });
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
/**
 * deriv-bot: Show blocks for a specific category in flyout
 * @private
 */


Blockly.Toolbox.prototype.showCategory_ = function (category_id) {
  var _this = this;

  var flyout_content;

  if (category_id === 'search') {
    var search_term = document.getElementById('search_input').value;
    var all_variables = this.flyout_.workspace_.getVariablesOfType('');
    var all_procedures = Blockly.Procedures.allProcedures(Blockly.derivWorkspace);

    if (search_term.length <= 1) {
      _stores__WEBPACK_IMPORTED_MODULE_16__["flyout"].setVisibility(false);
      return;
    }

    flyout_content = {
      type: 'search',
      blocks: []
    };

    if (typeof search_term === 'string') {
      search_term = search_term.trim().toLowerCase();
      search_term = search_term.split(' ');
    }

    var blocks = Blockly.Blocks;
    Object.keys(blocks).forEach(function (blockKey) {
      var keywords = " " + blockKey;
      var block = blocks[blockKey];
      var block_meta = block.meta instanceof Function && block.meta();
      var block_definition = block.definition instanceof Function && block.definition();

      if (!block_meta) {
        return;
      }

      Object.keys(block_meta).forEach(function (key) {
        var meta = block_meta[key];
        keywords += " " + meta;
      });
      Object.keys(block_definition).forEach(function (key) {
        var definition = block_definition[key];

        if (typeof definition === 'string') {
          keywords += " " + definition;
        } else if (definition instanceof Array) {
          definition.forEach(function (def) {
            if (def instanceof Object) {
              keywords += !def.type.includes('image') ? " " + JSON.stringify(def) : '';
            } else {
              keywords += " " + def;
            }
          });
        }
      });
      var block_category = block_definition && block_definition.category || block_meta && block_meta.category;

      var category = _this.categoryMenu_.categories_.find(function (menuCategory) {
        return menuCategory.id_ === block_category;
      });

      var contents = category && category.getContents();

      if (typeof contents === 'string') {
        var fnToApply = _this.workspace_.getToolboxCategoryCallback(contents);

        contents = fnToApply(_this.workspace_);
      }

      if (contents) {
        search_term.forEach(function (term) {
          if (keywords.toLowerCase().includes(term)) {
            var blockContents = contents.filter(function (content) {
              return content.attributes[0].nodeValue === blockKey;
            });

            if (blockContents.length && flyout_content.blocks.indexOf(blockContents[0]) === -1) {
              flyout_content.blocks.push(blockContents[0]);
            }
          }
        });
      }
    });
    var searched_variables = [];
    all_variables.forEach(function (variable) {
      search_term.forEach(function (term) {
        if (variable.name.toLowerCase().includes(term)) {
          searched_variables.push(variable);
        }
      });
    });
    var variables_blocks = Blockly.DataCategory.search(searched_variables);
    /* eslint-disable-next-line consistent-return */

    var uniqueVarBlocks = variables_blocks.map(function (variableBlock) {
      if (flyout_content.blocks.indexOf(variableBlock) === -1) {
        return variableBlock;
      }
    });
    flyout_content.blocks = flyout_content.blocks.concat(uniqueVarBlocks);
    var searched_procedures = {};
    Object.keys(all_procedures).forEach(function (key) {
      search_term.forEach(function (term) {
        if (all_procedures[key].length && all_procedures[key][0][0].toLowerCase().includes(term)) {
          searched_procedures[key] = all_procedures[key];
        }
      });
    });
    var procedures_blocks = Blockly.Procedures.populateDynamicProcedures(searched_procedures);
    /* eslint-disable-next-line consistent-return */

    var uniqueProceBlocks = procedures_blocks.map(function (procedureBlock) {
      if (flyout_content.blocks.indexOf(procedureBlock) === -1) {
        return procedureBlock;
      }
    });
    flyout_content.blocks = flyout_content.blocks.concat(uniqueProceBlocks);
  } else {
    var selected_category = this.categoryMenu_.categories_.find(function (category) {
      return category.id_ === category_id;
    });
    flyout_content = selected_category.getContents(); // Dynamic categories

    if (typeof flyout_content === 'string') {
      var fnToApply = this.workspace_.getToolboxCategoryCallback(flyout_content);
      flyout_content = fnToApply(this.workspace_);
    }
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
  var _this2 = this;

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

          var is_correct_child = el_category.tagName.toUpperCase() === 'CATEGORY' && el_category.getAttribute('id') === _this2.selectedItem_.id_;

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
  var _this3 = this;

  this.description_ = domTree.getAttribute('description');
  this.dynamic_ = domTree.getAttribute('dynamic');
  this.is_category_return_ = !!domTree.getAttribute('is_category_return');
  domTree.childNodes.forEach(function (child) {
    if (child.tagName) {
      var tag = child.tagName.toUpperCase();

      if (tag === 'CATEGORY') {
        _this3.has_child_category_ = true;
      }

      switch (tag) {
        case 'BLOCK':
        case 'SHADOW':
        case 'LABEL':
        case 'BUTTON':
        case 'SEP':
        case 'TEXT':
        case 'CATEGORY':
          _this3.contents_.push(child);

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
  var _this4 = this;

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

      var toolbox_category = new Blockly.Toolbox.Category(_this4, el_row, childNode);
      var child = childNode.children;
      /* eslint-disable consistent-return */

      var subCategory = Object.keys(child).map(function (key) {
        if (child[key].tagName === 'category') {
          return child[key];
        }
      });

      if (subCategory.length) {
        _this4.populate(childNode, true);
      }

      if (!isSubCategory) {
        _this4.table.appendChild(el_row);
      }

      _this4.categories_.push(toolbox_category);
    } else if (is_separator()) {
      var el_separator = goog.dom.createDom('div', {
        class: 'toolbox__separator'
      });

      _this4.table.appendChild(el_separator);
    }
  });
  this.height_ = this.table.offsetHeight;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?goog!scratch-blocks/shim/blockly_compressed_vertical.goog */ "./node_modules/expose-loader/index.js?goog!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.goog.js"), __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/variables.js":
/*!****************************************!*\
  !*** ./src/scratch/hooks/variables.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);





/* eslint-disable func-names */

/**
 * Find all user-created variables that are in use in the workspace.
 * For use by generators.
 * To get a list of all variables on a workspace, including unused variables,
 * call Workspace.getAllVariables.
 * deriv-bot: Required for JS generator to work.
 * @param {!Blockly.Workspace} ws The workspace to search for variables.
 * @return {!Array.<!Blockly.VariableModel>} Array of variable models.
 */
Blockly.Variables.allUsedVarModels = function (ws) {
  var blocks = ws.getAllBlocks(false);
  var variableHash = Object.create(null); // Iterate through every block and add each variable to the hash.

  blocks.forEach(function (block) {
    var blockVariables = block.getVarModels();

    if (blockVariables) {
      blockVariables.forEach(function (blockVariable) {
        var id = blockVariable.getId();

        if (id) {
          variableHash[id] = blockVariable;
        }
      });
    }
  }); // Flatten the hash into a list.

  var variableList = [];
  Object.keys(variableHash).forEach(function (id) {
    variableList.push(variableHash[id]);
  });
  return variableList;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/workspace_audio.js":
/*!**********************************************!*\
  !*** ./src/scratch/hooks/workspace_audio.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {Blockly.WorkspaceAudio.prototype.preload = function () {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/workspace_svg.js":
/*!********************************************!*\
  !*** ./src/scratch/hooks/workspace_svg.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {/* eslint-disable */

/**
 * Scroll the workspace to center on the given block.
 * @param {?string} id ID of block center on.
 * @public
 */
Blockly.WorkspaceSvg.prototype.centerOnBlock = function (id, hideChaff) {
  if (hideChaff === void 0) {
    hideChaff = true;
  }

  if (!this.scrollbar) {
    console.warn('Tried to scroll a non-scrollable workspace.');
    return;
  }

  var block = this.getBlockById(id);

  if (!block) {
    return;
  } // XY is in workspace coordinates.


  var xy = block.getRelativeToSurfaceXY(); // Height/width is in workspace units.

  var heightWidth = block.getHeightWidth(); // Find the enter of the block in workspace units.

  var blockCenterY = xy.y + heightWidth.height / 2; // In RTL the block's position is the top right of the block, not top left.

  var multiplier = this.RTL ? -1 : 1;
  var blockCenterX = xy.x + multiplier * heightWidth.width / 2; // Workspace scale, used to convert from workspace coordinates to pixels.

  var scale = this.scale; // Center in pixels.  0, 0 is at the workspace origin.  These numbers may
  // be negative.

  var pixelX = blockCenterX * scale;
  var pixelY = blockCenterY * scale;
  var metrics = this.getMetrics(); // Scrolling to here would put the block in the top-left corner of the
  // visible workspace.

  var scrollToBlockX = pixelX - metrics.contentLeft;
  var scrollToBlockY = pixelY - metrics.contentTop; // viewHeight and viewWidth are in pixels.

  var halfViewWidth = metrics.viewWidth / 2;
  var halfViewHeight = metrics.viewHeight / 2; // Put the block in the center of the visible workspace instead.

  var scrollToCenterX = scrollToBlockX - halfViewWidth;
  var scrollToCenterY = scrollToBlockY - halfViewHeight;

  if (hideChaff) {
    Blockly.hideChaff();
  }

  this.scrollbar.set(scrollToCenterX, scrollToCenterY);
};
/**
 * Creates a copy of passed block_node on main workspace and positions it
 * below the lowest block on the canvas.
 * @static
 * @param {Element} block_node
 * @public
 */


Blockly.WorkspaceSvg.prototype.addBlockNode = function (block_node) {
  var block = Blockly.Xml.domToBlock(block_node, this);
  var top_blocks = this.getTopBlocks(true);

  if (top_blocks.length) {
    var last_block = top_blocks[top_blocks.length - 1];
    var last_block_xy = last_block.getRelativeToSurfaceXY();
    var extra_spacing = last_block.startHat_ ? Blockly.BlockSvg.START_HAT_HEIGHT : 0;
    var y = last_block_xy.y + last_block.getHeightWidth().height + extra_spacing + 30;
    block.moveBy(last_block_xy.x, y);
  }

  this.centerOnBlock(block.id, false);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/hooks/xml.js":
/*!**********************************!*\
  !*** ./src/scratch/hooks/xml.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Blockly) {Blockly.Xml.NODE_BLOCK = 'BLOCK';
Blockly.Xml.NODE_BUTTON = 'BUTTON';
Blockly.Xml.NODE_LABEL = 'LABEL';
Blockly.Xml.NODE_SHADOW = 'SHADOW';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "./src/scratch/index.js":
/*!******************************!*\
  !*** ./src/scratch/index.js ***!
  \******************************/
/*! exports provided: scratchWorkspaceInit, loadWorkspace, loadBlocks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scratchWorkspaceInit", function() { return scratchWorkspaceInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWorkspace", function() { return loadWorkspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlocks", function() { return loadBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Blockly; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks */ "./src/scratch/blocks/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/scratch/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/scratch/utils.js");
/* harmony import */ var _services_tradeEngine_utils_interpreter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tradeEngine/utils/interpreter */ "./src/services/tradeEngine/utils/interpreter.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/observer */ "./src/utils/observer.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var scratchWorkspaceInit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var el_scratch_area, el_scratch_div, el_app_contents, toolbox_xml, main_xml, workspace, el_blockly_svg, onWorkspaceResize;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            el_scratch_area = document.getElementById('scratch_area');
            el_scratch_div = document.getElementById('scratch_div');
            el_app_contents = document.getElementById('app_contents'); // eslint-disable-next-line

            _context.next = 6;
            return fetch(__webpack_require__.p + "xml/toolbox.xml").then(function (response) {
              return response.text();
            });

          case 6:
            toolbox_xml = _context.sent;
            _context.next = 9;
            return fetch(__webpack_require__.p + "xml/main.xml").then(function (response) {
              return response.text();
            });

          case 9:
            main_xml = _context.sent;
            workspace = Blockly.inject(el_scratch_div, {
              grid: {
                spacing: 40,
                length: 11,
                colour: '#ebebeb'
              },
              media: __webpack_require__.p + "media/",
              // eslint-disable-line
              toolbox: toolbox_xml,
              trashcan: true,
              zoom: {
                wheel: true
              }
            });
            Blockly.derivWorkspace = workspace; // Ensure flyout closes on click in workspace.

            el_blockly_svg = document.querySelector('.blocklySvg');
            document.addEventListener('click', function (event) {
              if (el_blockly_svg.contains(event.target)) {
                Blockly.derivWorkspace.toolbox_.clearSelection(); // eslint-disable-line
              }
            }); // Keep XML in memory to allow multilevel categories

            Blockly.derivWorkspace.initial_toolbox_xml = toolbox_xml;
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(main_xml), Blockly.derivWorkspace);

            onWorkspaceResize = function onWorkspaceResize() {
              var element = el_scratch_area;
              var x = 0;
              var y = 0;

              do {
                x += element.offsetLeft;
                y += element.offsetTop;
                element = element.offsetParent;
              } while (element); // Position scratch_div over scratch_area.


              el_scratch_div.style.left = x + "px";
              el_scratch_div.style.top = y + "px";
              el_scratch_div.style.width = el_app_contents.offsetWidth + "px";
              el_scratch_div.style.height = el_app_contents.offsetHeight + "px";
              Blockly.svgResize(workspace); // eslint-disable-next-line no-underscore-dangle

              workspace.toolbox_.flyout_.position(); // Center on first root block, if applicable.

              var top_blocks = workspace.getTopBlocks(true);

              if (top_blocks.length > 0) {
                workspace.centerOnBlock(top_blocks[0].id);
              }
            };

            window.addEventListener('resize', onWorkspaceResize);
            onWorkspaceResize();
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function scratchWorkspaceInit() {
    return _ref.apply(this, arguments);
  };
}();

var disableStrayBlocks = function disableStrayBlocks() {
  var top_blocks = Blockly.derivWorkspace.getTopBlocks();
  top_blocks.forEach(function (block) {
    if (block.isMainBlock() || !block.isIndependentBlock()) {
      block.setDisabled(true);
    }
  });
};

var loadWorkspace = function loadWorkspace(xml) {
  Blockly.Events.setGroup('load');
  Blockly.mainWorkspace.clear();
  Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
  Object(_utils__WEBPACK_IMPORTED_MODULE_7__["addLoadersFirst"])(xml).then(function () {
    Blockly.Events.setGroup(false);
    _utils_observer__WEBPACK_IMPORTED_MODULE_11__["observer"].emit('ui.log.success', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Blocks are loaded successfully'));
  }, function (e) {
    Blockly.Events.setGroup(false);
    throw e;
  });
};
var loadBlocks = function loadBlocks(xml, dropEvent) {
  if (dropEvent === void 0) {
    dropEvent = {};
  }

  var variables = xml.getElementsByTagName('variables');

  if (variables.length > 0) {
    Blockly.Xml.domToVariables(variables[0], Blockly.mainWorkspace);
  }

  Blockly.Events.setGroup('load');
  Object(_utils__WEBPACK_IMPORTED_MODULE_7__["addLoadersFirst"])(xml).then(function (loaders) {
    var addedBlocks = [].concat(loaders, Array.from(xml.children).map(function (block) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["addDomAsBlock"])(block);
    }).filter(function (b) {
      return b;
    }));
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["cleanUpOnLoad"])(addedBlocks, dropEvent);
    _utils_observer__WEBPACK_IMPORTED_MODULE_11__["observer"].emit('ui.log.success', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Blocks are loaded successfully'));
  }, function (e) {
    throw e;
  });
};

var _Blockly =
/*#__PURE__*/
function () {
  function _Blockly() {}

  var _proto = _Blockly.prototype;

  /* eslint-disable class-methods-use-this */
  _proto.zoomOnPlusMinus = function zoomOnPlusMinus(zoomIn) {
    var metrics = Blockly.mainWorkspace.getMetrics();

    if (zoomIn) {
      Blockly.mainWorkspace.zoom(metrics.viewWidth / 2, metrics.viewHeight / 2, 1);
    } else {
      Blockly.mainWorkspace.zoom(metrics.viewWidth / 2, metrics.viewHeight / 2, -1);
    }
  };

  _proto.resetWorkspace = function resetWorkspace() {
    Blockly.Events.setGroup('reset');
    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(this.blocksXmlStr), Blockly.mainWorkspace);
    Blockly.Events.setGroup(false);
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.cleanUp = function cleanUp() {
    Blockly.Events.setGroup(true);
    var topBlocks = Blockly.mainWorkspace.getTopBlocks(true);
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

    Blockly.mainWorkspace.resizeContents();
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.load = function load(blockStr, dropEvent) {
    if (blockStr === void 0) {
      blockStr = '';
    }

    if (dropEvent === void 0) {
      dropEvent = {};
    }

    var xml;

    try {
      xml = Blockly.Xml.textToDom(blockStr);
    } catch (e) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_9__["default"])('FileLoad', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Unrecognized file format'));
    }

    try {
      if (xml.hasAttribute('collection') && xml.getAttribute('collection') === 'true') {
        loadBlocks(xml, dropEvent);
      } else {
        loadWorkspace(xml);
      }
    } catch (e) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_9__["default"])('FileLoad', Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_10__["translate"])('Unable to load the block file'));
    }
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.save = function save(arg) {
    var filename = arg.filename,
        collection = arg.collection;
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["cleanBeforeExport"])(xml);

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["save"])(filename, collection, xml);
  };

  _proto.run = function run(limitations) {
    var _this = this;

    if (limitations === void 0) {
      limitations = {};
    }

    disableStrayBlocks();
    var code;

    try {
      code = "\nvar BinaryBotPrivateInit, BinaryBotPrivateStart, BinaryBotPrivateBeforePurchase, BinaryBotPrivateDuringPurchase, BinaryBotPrivateAfterPurchase;\nvar BinaryBotPrivateLastTickTime\nvar BinaryBotPrivateTickAnalysisList = [];\nfunction BinaryBotPrivateRun(f, arg) {\n if (f) return f(arg);\n return false;\n}\nfunction BinaryBotPrivateTickAnalysis() {\n var currentTickTime = Bot.getLastTick(true).epoch\n if (currentTickTime === BinaryBotPrivateLastTickTime) {\n   return\n }\n BinaryBotPrivateLastTickTime = currentTickTime\n for (var BinaryBotPrivateI = 0; BinaryBotPrivateI < BinaryBotPrivateTickAnalysisList.length; BinaryBotPrivateI++) {\n   BinaryBotPrivateRun(BinaryBotPrivateTickAnalysisList[BinaryBotPrivateI]);\n }\n}\nvar BinaryBotPrivateLimitations = " + JSON.stringify(limitations) + ";\n" + __webpack_provided_Blockly_dot_JavaScript.workspaceToCode(Blockly.mainWorkspace) + "\nBinaryBotPrivateRun(BinaryBotPrivateInit);\nwhile(true) {\n BinaryBotPrivateTickAnalysis();\n BinaryBotPrivateRun(BinaryBotPrivateStart)\n while(watch('before')) {\n   BinaryBotPrivateTickAnalysis();\n   BinaryBotPrivateRun(BinaryBotPrivateBeforePurchase);\n }\n while(watch('during')) {\n   BinaryBotPrivateTickAnalysis();\n   BinaryBotPrivateRun(BinaryBotPrivateDuringPurchase);\n }\n BinaryBotPrivateTickAnalysis();\n if(!BinaryBotPrivateRun(BinaryBotPrivateAfterPurchase)) {\n   break;\n }\n}\n       ";
      this.generatedJs = code;

      if (code) {
        this.stop(true);
        this.interpreter = new _services_tradeEngine_utils_interpreter__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.interpreter.run(code).catch(function (e) {
          _utils_observer__WEBPACK_IMPORTED_MODULE_11__["observer"].emit('Error', e);

          _this.stop();
        });
      }
    } catch (e) {
      _utils_observer__WEBPACK_IMPORTED_MODULE_11__["observer"].emit('Error', e);
      this.stop();
    }
  };

  _proto.stop = function stop(stopBeforeStart) {
    if (!stopBeforeStart) {
      var $runButtons = $('#runButton, #summaryRunButton');
      var $stopButtons = $('#stopButton, #summaryStopButton');

      if ($runButtons.is(':visible') || $stopButtons.is(':visible')) {
        $runButtons.show();
        $stopButtons.hide();
      }
    }

    if (this.interpreter) {
      this.interpreter.stop();
      this.interpreter = null;
    }
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.undo = function undo() {
    Blockly.Events.setGroup('undo');
    Blockly.mainWorkspace.undo();
    Blockly.Events.setGroup(false);
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.redo = function redo() {
    Blockly.mainWorkspace.undo(true);
  }
  /* eslint-disable class-methods-use-this */
  ;

  _proto.hasStarted = function hasStarted() {
    return this.interpreter && this.interpreter.hasStarted();
  }
  /* eslint-enable */
  ;

  return _Blockly;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/shared.js":
/*!*******************************!*\
  !*** ./src/scratch/shared.js ***!
  \*******************************/
/*! exports provided: saveAs, getPurchaseChoices, updatePurchaseChoices, expectValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly, __webpack_provided_Blockly_dot_JavaScript) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAs", function() { return saveAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchaseChoices", function() { return getPurchaseChoices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePurchaseChoices", function() { return updatePurchaseChoices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expectValue", function() { return expectValue; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/scratch/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");










var purchase_choices = [[Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_9__["translate"])('Click to select'), '']];
var saveAs = function saveAs(_ref) {
  var data = _ref.data,
      filename = _ref.filename,
      type = _ref.type;
  var blob = new Blob([data], {
    type: type
  });
  file_saver__WEBPACK_IMPORTED_MODULE_6___default.a.saveAs(blob, filename);
};
var getPurchaseChoices = function getPurchaseChoices() {
  return purchase_choices;
};

var getPurchaseDropdownOptions = function getPurchaseDropdownOptions(contract_type, opposite_name) {
  var trade_types = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].opposites[opposite_name];
  var temp_purchase_choices = [];

  if (trade_types) {
    var _temp_purchase_choice;

    (_temp_purchase_choice = temp_purchase_choices).push.apply(_temp_purchase_choice, trade_types.filter(function (trade_type) {
      return contract_type === 'both' || contract_type === Object.keys(trade_type)[0];
    }));
  }

  if (temp_purchase_choices.length === 0) {
    temp_purchase_choices = trade_types;
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["oppositesToDropdownOptions"])(temp_purchase_choices);
};

var updatePurchaseChoices = function updatePurchaseChoices(contract_type, opposite_name) {
  Blockly.Events.disable();
  purchase_choices = getPurchaseDropdownOptions(contract_type, opposite_name);
  var purchase_blocks = Blockly.derivWorkspace.getAllBlocks().filter(function (block) {
    return ['purchase', 'payout', 'ask_price'].includes(block.type);
  });
  purchase_blocks.forEach(function (purchase_block) {
    var purchase_list_field = purchase_block.getField('PURCHASE_LIST');
    var selected_value = purchase_list_field.getValue();
    purchase_list_field.updateOptions(purchase_choices, selected_value, false);
  });
  Blockly.Events.enable();
};
var expectValue = function expectValue(block, field) {
  var value = __webpack_provided_Blockly_dot_JavaScript.valueToCode(block, field, __webpack_provided_Blockly_dot_JavaScript.ORDER_ATOMIC);

  if (!value) {
    throw Error(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_9__["translate"])(field + " cannot be empty"));
  }

  return value;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js"), __webpack_require__(/*! expose-loader?Blockly.JavaScript!blockly/generators/javascript */ "./node_modules/expose-loader/index.js?Blockly.JavaScript!./node_modules/blockly/generators/javascript.js-exposed")))

/***/ }),

/***/ "./src/scratch/utils.js":
/*!******************************!*\
  !*** ./src/scratch/utils.js ***!
  \******************************/
/*! exports provided: isMainBlock, oppositesToDropdownOptions, cleanUpOnLoad, setBlockTextColor, getBlockByType, getTopBlocksByType, save, deleteBlocksLoadedBy, addDomAsBlock, addLoadersFirst, loadRemote, cleanBeforeExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Blockly) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMainBlock", function() { return isMainBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppositesToDropdownOptions", function() { return oppositesToDropdownOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUpOnLoad", function() { return cleanUpOnLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockTextColor", function() { return setBlockTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockByType", function() { return getBlockByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopBlocksByType", function() { return getTopBlocksByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlocksLoadedBy", function() { return deleteBlocksLoadedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomAsBlock", function() { return addDomAsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoadersFirst", function() { return addLoadersFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRemote", function() { return loadRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanBeforeExport", function() { return cleanBeforeExport; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/scratch/shared.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/lang/i18n */ "./src/utils/lang/i18n.js");











function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var isMainBlock = function isMainBlock(blockType) {
  return _constants__WEBPACK_IMPORTED_MODULE_11__["default"].mainBlocks.indexOf(blockType) >= 0;
};
var oppositesToDropdownOptions = function oppositesToDropdownOptions(opposite_name) {
  return opposite_name.map(function (contract_type) {
    // i.e. [['CALL', translate('Rise')]] becomes [[translate('Rise'), 'CALL']];
    return Object.entries(contract_type)[0].reverse();
  });
};
var cleanUpOnLoad = function cleanUpOnLoad(blocksToClean, dropEvent) {
  var _ref = dropEvent || {},
      _ref$clientX = _ref.clientX,
      clientX = _ref$clientX === void 0 ? 0 : _ref$clientX,
      _ref$clientY = _ref.clientY,
      clientY = _ref$clientY === void 0 ? 0 : _ref$clientY;

  var blocklyMetrics = Blockly.mainWorkspace.getMetrics();
  var scaleCancellation = 1 / Blockly.mainWorkspace.scale;
  var blocklyLeft = blocklyMetrics.absoluteLeft - blocklyMetrics.viewLeft;
  var blocklyTop = document.body.offsetHeight - blocklyMetrics.viewHeight - blocklyMetrics.viewTop;
  var cursorX = clientX ? (clientX - blocklyLeft) * scaleCancellation : 0;
  var cursorY = clientY ? (clientY - blocklyTop) * scaleCancellation : 0;
  blocksToClean.forEach(function (block) {
    block.moveBy(cursorX, cursorY);
    block.snapToGrid();
    cursorY += block.getHeightWidth().height + Blockly.BlockSvg.MIN_BLOCK_Y;
  }); // Fire an event to allow scrollbars to resize.

  Blockly.mainWorkspace.resizeContents();
};
var setBlockTextColor = function setBlockTextColor(block) {
  Blockly.Events.recordUndo = false;

  if (block.inputList instanceof Array) {
    Array.from(block.inputList).forEach(function (inp) {
      return inp.fieldRow.forEach(function (field) {
        if (field instanceof Blockly.FieldLabel) {
          var svgElement = field.getSvgRoot();

          if (svgElement) {
            svgElement.style.setProperty('fill', 'white', 'important');
          }
        }
      });
    });
  }

  var field = block.getField();

  if (field) {
    var svgElement = field.getSvgRoot();

    if (svgElement) {
      svgElement.style.setProperty('fill', 'white', 'important');
    }
  }

  Blockly.Events.recordUndo = true;
};
var getBlockByType = function getBlockByType(type) {
  return Blockly.mainWorkspace.getAllBlocks().find(function (block) {
    return type === block.type;
  });
};
var getTopBlocksByType = function getTopBlocksByType(type) {
  return Blockly.mainWorkspace.getTopBlocks().filter(function (block) {
    return type === block.type;
  });
};
var save = function save(filename, collection, xmlDom) {
  if (filename === void 0) {
    filename = 'deriv-bot';
  }

  if (collection === void 0) {
    collection = false;
  }

  xmlDom.setAttribute('collection', collection ? 'true' : 'false');
  var data = Blockly.Xml.domToPrettyText(xmlDom);
  Object(_shared__WEBPACK_IMPORTED_MODULE_10__["saveAs"])({
    data: data,
    type: 'text/xml;charset=utf-8',
    filename: filename + ".xml"
  });
};

var isProcedure = function isProcedure(blockType) {
  return ['procedures_defreturn', 'procedures_defnoreturn'].indexOf(blockType) >= 0;
}; // dummy event to recover deleted blocks loaded by loader


var DeleteStray =
/*#__PURE__*/
function (_Blockly$Events$Abstr) {
  _inheritsLoose(DeleteStray, _Blockly$Events$Abstr);

  function DeleteStray(block) {
    var _this;

    _this = _Blockly$Events$Abstr.call(this, block) || this;

    _this.run(true);

    return _this;
  }

  var _proto = DeleteStray.prototype;

  _proto.run = function run(redo) {
    var recordUndo = Blockly.Events.recordUndo;
    Blockly.Events.recordUndo = false;
    var sourceBlock = Blockly.mainWorkspace.getBlockById(this.blockId);

    if (!sourceBlock) {
      return;
    }

    if (redo) {
      sourceBlock.setFieldValue(sourceBlock.getFieldValue('NAME') + " (deleted)", 'NAME');
      sourceBlock.setDisabled(true);
    } else {
      sourceBlock.setFieldValue(sourceBlock.getFieldValue('NAME').replace(' (deleted)', ''), 'NAME');
      sourceBlock.setDisabled(false);
    }

    Blockly.Events.recordUndo = recordUndo;
  };

  return DeleteStray;
}(Blockly.Events.Abstract);

DeleteStray.prototype.type = 'deletestray';
var deleteBlocksLoadedBy = function deleteBlocksLoadedBy(id, eventGroup) {
  if (eventGroup === void 0) {
    eventGroup = true;
  }

  Blockly.Events.setGroup(eventGroup);
  Blockly.mainWorkspace.getTopBlocks().forEach(function (block) {
    if (block.loaderId === id) {
      if (isProcedure(block.type)) {
        if (block.getFieldValue('NAME').indexOf('deleted') < 0) {
          Blockly.Events.fire(new DeleteStray(block));
        }
      } else {
        block.dispose();
      }
    }
  });
  Blockly.Events.setGroup(false);
};
var addDomAsBlock = function addDomAsBlock(blockXml) {
  if (blockXml.tagName === 'variables') {
    return Blockly.Xml.domToVariables(blockXml, Blockly.mainWorkspace);
  }

  var blockType = blockXml.getAttribute('type');

  if (isMainBlock(blockType)) {
    Blockly.mainWorkspace.getTopBlocks().filter(function (b) {
      return b.type === blockType;
    }).forEach(function (b) {
      return b.dispose();
    });
  }

  return Blockly.Xml.domToBlock(blockXml, Blockly.mainWorkspace);
};

var addDomAsBlockFromHeader = function addDomAsBlockFromHeader(blockXml
/* , header = null */
) {
  // const oldVars = [...Blockly.mainWorkspace.variableList];
  var block = Blockly.Xml.domToBlock(blockXml, Blockly.mainWorkspace);
  /* Blockly.mainWorkspace.variableList = Blockly.mainWorkspace.variableList.filter(v => {
      if (oldVars.indexOf(v) >= 0) {
          return true;
      }
      header.loadedVariables.push(v);
      return false;
  });
  replaceDeletedBlock(block);
  Blockly.Events.fire(new Hide(block, header)); */

  return block;
};

var processLoaders = function processLoaders(xml, header) {
  if (header === void 0) {
    header = null;
  }

  var promises = [];
  Array.from(xml.children).forEach(function (block) {
    if (block.getAttribute('type') === 'loader') {
      block.remove();
      var loader = header ? addDomAsBlockFromHeader(block, header) : Blockly.Xml.domToBlock(block, Blockly.mainWorkspace);
      promises.push(loadRemote(loader)); // eslint-disable-line no-use-before-define
    }
  });
  return promises;
};

var addLoadersFirst = function addLoadersFirst(xml, header) {
  if (header === void 0) {
    header = null;
  }

  return new Promise(function (resolve, reject) {
    var promises = processLoaders(xml, header);

    if (promises.length) {
      Promise.all(promises).then(resolve, reject);
    } else {
      resolve([]);
    }
  });
};

var loadBlocksFromHeader = function loadBlocksFromHeader(blockStr, header) {
  if (blockStr === void 0) {
    blockStr = '';
  }

  return new Promise(function (resolve, reject) {
    var xml;

    try {
      xml = Blockly.Xml.textToDom(blockStr);
    } catch (e) {
      reject(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('Unrecognized file format.'));
    }

    try {
      if (xml.hasAttribute('collection') && xml.getAttribute('collection') === 'true') {
        var recordUndo = Blockly.Events.recordUndo;
        Blockly.Events.recordUndo = false;
        addLoadersFirst(xml, header).then(function () {
          Array.from(xml.children).filter(function (block) {
            return block.getAttribute('type') === 'tick_analysis' || isProcedure(block.getAttribute('type'));
          }).forEach(function (block) {
            return addDomAsBlockFromHeader(block, header);
          });
          Blockly.Events.recordUndo = recordUndo;
          resolve();
        }, function (e) {
          Blockly.Events.recordUndo = recordUndo;
          reject(e);
        });
      } else {
        reject(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('Remote blocks to load must be a collection.'));
      }
    } catch (e) {
      reject(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('Unable to load the block file.'));
    }
  });
};

var loadRemote = function loadRemote(blockObj) {
  return new Promise(function (resolve, reject) {
    var url = blockObj.getFieldValue('URL');

    if (url.indexOf('http') !== 0) {
      url = "http://" + url;
    }

    if (!url.match(/[^/]*\.[a-zA-Z]{3}$/) && url.slice(-1)[0] !== '/') {
      reject(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('Target must be an xml file'));
    } else {
      if (url.slice(-1)[0] === '/') {
        url += 'index.xml';
      }

      var isNew = true;
      getTopBlocksByType('loader').forEach(function (block) {
        if (block.id !== blockObj.id && block.url === url) {
          isNew = false;
        }
      });

      if (!isNew) {
        blockObj.setDisabled(true);
        reject(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('This url is already loaded'));
      } else {
        $.ajax({
          type: 'GET',
          url: url
        }).fail(function (e) {
          if (e.status) {
            reject(Error(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('An error occurred while trying to load the url') + ": " + e.status + " " + e.statusText));
          } else {
            reject(Error(Object(_utils_lang_i18n__WEBPACK_IMPORTED_MODULE_12__["translate"])('Make sure \'Access-Control-Allow-Origin\' exists in the response from the server')));
          }

          deleteBlocksLoadedBy(blockObj.id);
        }).done(function (xml) {
          loadBlocksFromHeader(xml, blockObj).then(function () {
            blockObj.setDisabled(false);
            blockObj.url = url; // eslint-disable-line no-param-reassign

            resolve(blockObj);
          }, reject);
        });
      }
    }
  });
};
var cleanBeforeExport = function cleanBeforeExport(xml) {
  Array.from(xml.children).forEach(function (blockDom) {
    var blockId = blockDom.getAttribute('id');
    if (!blockId) return;
    var block = Blockly.mainWorkspace.getBlockById(blockId);

    if ('loaderId' in block) {
      blockDom.remove();
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

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







var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

/* eslint-disable no-underscore-dangle */


var FlyoutStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_6__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function FlyoutStore() {
    this.block_listeners = [];
    this.block_workspaces = [];
    this.flyout_min_width = 400;

    _initializerDefineProperty(this, "flyout_content", _descriptor, this);

    _initializerDefineProperty(this, "flyout_width", _descriptor2, this);

    _initializerDefineProperty(this, "is_visible", _descriptor3, this);
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

    if (xml_list.type === 'search') {
      var blocks = xml_list.blocks;
      var no_result = !blocks.length;
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

      processed_xml = processed_xml.concat(blocks);
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
}), _applyDecoratedDescriptor(_class.prototype, "setContents", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setContents"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setVisibility", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setVisibility"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initBlockWorkspace", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "initBlockWorkspace"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFlyoutWidth", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "setFlyoutWidth"), _class.prototype)), _class));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! expose-loader?Blockly!scratch-blocks/shim/blockly_compressed_vertical.Blockly */ "./node_modules/expose-loader/index.js?Blockly!./node_modules/scratch-blocks/shim/blockly_compressed_vertical.Blockly.js")))

/***/ }),

/***/ "?0dde":
false,

/***/ "?434a":
false,

/***/ "?aa2d":
false,

/***/ "?c7db":
false,

/***/ "?e322":
false

})
//# sourceMappingURL=main.8c53e3.hot-update.js.map