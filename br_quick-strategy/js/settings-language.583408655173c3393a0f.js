(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-language"],{

/***/ "./App/Containers/SettingsModal/settings-language.jsx":
/*!************************************************************!*\
  !*** ./App/Containers/SettingsModal/settings-language.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/Components/Elements/localize.jsx */ \"./App/Components/Elements/localize.jsx\");\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\n/* harmony import */ var Utils_Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utils/Language */ \"./Utils/Language/index.js\");\n\n\n\n\n\n\n\nvar isCurrentLanguage = function isCurrentLanguage(lang) {\n  return lang === Utils_Language__WEBPACK_IMPORTED_MODULE_5__[\"currentLanguage\"];\n};\n\nvar NonClickableLink = function NonClickableLink(_ref) {\n  var children = _ref.children,\n      lang = _ref.lang;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    id: \"dt_settings_\".concat(lang, \"_button\"),\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('settings-language__language-link', {\n      'settings-language__language-link--active': isCurrentLanguage(lang)\n    })\n  }, children);\n};\n\nvar LanguageLink = function LanguageLink(_ref2) {\n  var lang = _ref2.lang;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    icon: \"IconCountryFlag\",\n    className: 'settings-language__language-link-flag settings-language__language-flag',\n    type: lang.replace(/(\\s|_)/, '-').toLowerCase()\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('settings-language__language-name', {\n      'settings-language__language-name--active': isCurrentLanguage(lang)\n    })\n  }, Object(Utils_Language__WEBPACK_IMPORTED_MODULE_5__[\"getAllowedLanguages\"])()[lang]));\n};\n\nvar LanguageSettings = function LanguageSettings() {\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"settings-language\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"settings-language__language-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    i18n_default_text: \"Select language\"\n  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"settings-language__language-container\"\n  }, Object.keys(Object(Utils_Language__WEBPACK_IMPORTED_MODULE_5__[\"getAllowedLanguages\"])()).map(function (key) {\n    return isCurrentLanguage(key) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NonClickableLink, {\n      lang: key,\n      key: key\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LanguageLink, {\n      lang: key\n    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n      id: \"dt_settings_\".concat(key, \"_button\"),\n      key: key,\n      href: Object(Utils_Language__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])(key),\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('settings-language__language-link', {\n        'settings-language__language-link--active': isCurrentLanguage(key)\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LanguageLink, {\n      lang: key,\n      key: key\n    }));\n  })));\n};\n\nLanguageLink.propTypes = {\n  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nNonClickableLink.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,\n  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXR0aW5nc01vZGFsL3NldHRpbmdzLWxhbmd1YWdlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldHRpbmdzTW9kYWwvc2V0dGluZ3MtbGFuZ3VhZ2UuanN4Pzk3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgICAgICAgIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyAgICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2NhbGl6ZSAgICAgICAgICBmcm9tICdBcHAvQ29tcG9uZW50cy9FbGVtZW50cy9sb2NhbGl6ZS5qc3gnO1xuaW1wb3J0IEljb24gICAgICAgICAgICAgIGZyb20gJ0Fzc2V0cy9pY29uLmpzeCc7XG5pbXBvcnQge1xuICAgIGdldEFsbG93ZWRMYW5ndWFnZXMsXG4gICAgZ2V0VVJMLFxuICAgIGN1cnJlbnRMYW5ndWFnZSB9ICAgIGZyb20gJ1V0aWxzL0xhbmd1YWdlJztcblxuY29uc3QgaXNDdXJyZW50TGFuZ3VhZ2UgPSAobGFuZykgPT4gbGFuZyA9PT0gY3VycmVudExhbmd1YWdlO1xuXG5jb25zdCBOb25DbGlja2FibGVMaW5rID0gKHsgY2hpbGRyZW4sIGxhbmcgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgICAgaWQ9e2BkdF9zZXR0aW5nc18ke2xhbmd9X2J1dHRvbmB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWxpbmsnLCB7XG4gICAgICAgICAgICAnc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWxpbmstLWFjdGl2ZSc6IGlzQ3VycmVudExhbmd1YWdlKGxhbmcpLFxuICAgICAgICB9KX1cbiAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IExhbmd1YWdlTGluayA9ICh7IGxhbmcgfSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249J0ljb25Db3VudHJ5RmxhZydcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J3NldHRpbmdzLWxhbmd1YWdlX19sYW5ndWFnZS1saW5rLWZsYWcgc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWZsYWcnfVxuICAgICAgICAgICAgdHlwZT17bGFuZy5yZXBsYWNlKC8oXFxzfF8pLywgJy0nKS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtbmFtZScsIHtcbiAgICAgICAgICAgICAgICAnc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLW5hbWUtLWFjdGl2ZSc6IGlzQ3VycmVudExhbmd1YWdlKGxhbmcpLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtnZXRBbGxvd2VkTGFuZ3VhZ2VzKClbbGFuZ119XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgTGFuZ3VhZ2VTZXR0aW5ncyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MtbGFuZ3VhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWhlYWRlcic+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1NlbGVjdCBsYW5ndWFnZScgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtY29udGFpbmVyJz5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhnZXRBbGxvd2VkTGFuZ3VhZ2VzKCkpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gKFxuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRMYW5ndWFnZShrZXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb25DbGlja2FibGVMaW5rIGxhbmc9e2tleX0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZUxpbmsgbGFuZz17a2V5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ob25DbGlja2FibGVMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGR0X3NldHRpbmdzXyR7a2V5fV9idXR0b25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2dldFVSTChrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2V0dGluZ3MtbGFuZ3VhZ2VfX2xhbmd1YWdlLWxpbmsnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncy1sYW5ndWFnZV9fbGFuZ3VhZ2UtbGluay0tYWN0aXZlJzogaXNDdXJyZW50TGFuZ3VhZ2Uoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VMaW5rIGxhbmc9e2tleX0ga2V5PXtrZXl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuTGFuZ3VhZ2VMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTm9uQ2xpY2thYmxlTGluay5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlU2V0dGluZ3M7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQURBO0FBUEE7QUFDQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBZEE7QUFUQTtBQUNBO0FBNkJBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFJQTtBQUxBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/SettingsModal/settings-language.jsx\n");

/***/ })

}]);