/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home-bg.jpg */ \"./assets/home-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/menu-bg.jpg */ \"./assets/menu-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/about-bg.jpg */ \"./assets/about-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --logo-color: rgb(91, 169, 112);\n    --footer-bg-color: rgb(64, 122, 79);\n    --header-1-color: rgb(42, 42, 42);\n}\n\nbody {\n    font-family: \"Lexend Deca\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 18px;\n    width: 100vw;\n    height: 100vh;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\na {\n    color: white;\n}\n\nbutton {\n    font-family: inherit;\n    font-size: 24px;\n    padding: 10px 0;\n    width: 100px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\nheader {\n    background-size: cover;\n    background-position: center;\n}\n\nh1:not(#logo) {\n    font-size: 60px;\n    font-weight: bold;\n    padding: 30px 0;\n    color: var(--header-1-color);\n}\n\n#header > h1 {\n    color: var(--logo-color);\n}\n\nh2,\nh4 {\n    color: var(--header-1-color);\n}\n\nh2 {\n    font-size: 32px;\n}\n\nfooter {\n    width: 100%;\n    background-color: var(--footer-bg-color);\n    padding: 20px 0;\n    display: flex;\n    justify-content: space-around;\n    color: white;\n}\n\n#nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n    margin-top: 40px;\n}\n\n#nav > button {\n    background-color: transparent;\n    border: 5px solid transparent;\n    font-weight: bold;\n    color: white;\n}\n\n#nav > button:hover {\n    border-bottom: 5px solid var(--logo-color);\n}\n\n#header {\n    text-align: center;\n}\n\n#logo {\n    font-family: \"Modak\", system-ui;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 96px;\n    color: var(--logo-color);\n}\n\n#content {\n    width: min(768px, 80%);\n    margin: 50px auto;\n    text-align: center;\n    background-color: white;\n}\n\n#headline {\n    margin-bottom: 80px;\n}\n\n#description {\n    margin: 40px 0;\n    line-height: 1.5;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n\n#reserve {\n    width: 300px;\n}\n\n#address > .row:not(.row:first-of-type) {\n    margin-top: 40px;\n}\n\n.section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.dish-name {\n    font-weight: bold;\n}\n\n.home {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-position: top;\n}\n\n.menu {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.about {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-position: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./assets/about-bg.jpg"
/*!*****************************!*\
  !*** ./assets/about-bg.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a9a8af82fb4eec24dae2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/about-bg.jpg?\n}");

/***/ },

/***/ "./assets/home-bg.jpg"
/*!****************************!*\
  !*** ./assets/home-bg.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"05515e3ed65e6b164ea6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/home-bg.jpg?\n}");

/***/ },

/***/ "./assets/menu-bg.jpg"
/*!****************************!*\
  !*** ./assets/menu-bg.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"de6fb7e2385fe316e8c1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/menu-bg.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAboutContent: () => (/* binding */ generateAboutContent)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nfunction generateAboutContent() {\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeHeader)();\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"ABOUT US\", _functions_js__WEBPACK_IMPORTED_MODULE_0__.headerDiv\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeBackgroundImage)('ABOUT');\n    \n    const storyDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"story\"\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"Our Story\", storyDiv\n    );\n    \n    const storyText = `\n        A love for comforting Western classics and handcrafted cheesecakes \n        inspired us to create a space where people can gather, relax, and \n        indulge.\n    `;\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", storyText, storyDiv, null, null, true\n    );\n\n    const addressDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"address\"\n    );\n    \n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"Visit Us\", addressDiv\n    );\n\n    const row1Div = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, addressDiv, null, [\"row\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"DINE IN\", row1Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", \"Walk-ins are welcome!\", row1Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"button\", \"RESERVE A TABLE\", row1Div, \"reserve\"\n    );\n\n    const row2Div = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, addressDiv, null, [\"row\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"OPERATING HOURS\", row2Div\n    );\n    const firstTimeP = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", null, row2Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"strong\", \"Monday - Thursday: \", firstTimeP\n    );\n    firstTimeP.appendChild(document.createTextNode(\"9:00 AM - 9:00 PM\"));\n    const secondTimeP = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", null, row2Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"strong\", \"Friday - Sunday: \", secondTimeP\n    );\n    secondTimeP.appendChild(document.createTextNode(\"9:00 AM - 10:00 PM\"));\n    const thirdTimeP = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", null, row2Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"strong\", \"Public Holiday (Subject to changes): \", thirdTimeP\n    );\n    thirdTimeP.appendChild(document.createTextNode(\"9:00 AM - 10:00 PM\"));\n\n    const row3Div = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, addressDiv, null, [\"row\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"ADDRESS\", row3Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", \"123 Westview Road 01-67, S626123\", row3Div\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", \"WandaVision Mall\", row3Div\n    );\n\n    const faqsDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"faqs\"\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"FAQS\", faqsDiv\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h4\", \"Q. Is this establishment halal-certified?\",\n        faqsDiv\n    );\n    const faqText = `\n        We are currently in the process of getting a halal certification. And, \n        this is a Muslim-owned business so we only use halal ingredients and \n        tools.\n    `;\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", faqText, faqsDiv\n    );\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/functions.js"
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTextWithBreaks: () => (/* binding */ addTextWithBreaks),\n/* harmony export */   changeBackgroundImage: () => (/* binding */ changeBackgroundImage),\n/* harmony export */   changeHeader: () => (/* binding */ changeHeader),\n/* harmony export */   contentDiv: () => (/* binding */ contentDiv),\n/* harmony export */   createAndAppendElement: () => (/* binding */ createAndAppendElement),\n/* harmony export */   headerDiv: () => (/* binding */ headerDiv)\n/* harmony export */ });\nfunction addTextWithBreaks(element, text, doubleBreaks = true) {\n    let tempStr = \"\";\n    //text = text.trim();\n    let k = 0;\n\n    for (let i = 0; i < text.length; ++i) {\n        if (text[i] === '^') {\n            tempStr = text.substring(k, i);\n            element.appendChild(document.createTextNode(tempStr));\n            element.appendChild(document.createElement('br'));\n            if (doubleBreaks)\n                element.appendChild(document.createElement('br'));\n\n            tempStr = \"\";\n            k = i + 1;\n        }\n    }\n\n    tempStr = text.substring(k);\n    element.appendChild(document.createTextNode(tempStr));\n}\n\nfunction createAndAppendElement(tag, text=null, parent=null, id=null, \n    classes=[], gotBreaks = false) \n{\n    const element = document.createElement(tag);\n    \n    if (text !== null) {\n        if (gotBreaks)\n            addTextWithBreaks(element, text);\n        else\n            element.textContent = text;\n    }\n\n    if (id !== null)\n        element.setAttribute(\"id\", id);\n\n    if (classes !== null) {\n        if (classes.length > 0) {\n            for (let className of classes) {\n                element.classList.add(className);\n            }\n        }\n    }\n\n    if (parent != null)\n        parent.append(element);\n\n    return element;\n}\n\nconst headerDiv = document.getElementById(\"header\");\nconst headerElement = document.getElementById(\"main-header\");\nconst contentDiv = document.getElementById(\"content\");\n\nfunction changeHeader() {\n    let child = headerDiv.lastElementChild;\n    if (child) {\n        headerDiv.removeChild(child);\n    }\n}\n\nfunction changeBackgroundImage(page) {\n    headerElement.className = \"\";\n\n    switch (page) {\n        case 'HOME':\n            headerElement.classList.add(\"home\");\n            break;\n        case 'MENU':\n            headerElement.classList.add(\"menu\");\n            break;\n        case 'ABOUT':\n            headerElement.classList.add(\"about\");\n            break;\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/functions.js?\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomeContent: () => (/* binding */ generateHomeContent)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nfunction generateHomeContent() {\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeHeader)();\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"SHEF\", _functions_js__WEBPACK_IMPORTED_MODULE_0__.headerDiv, \"logo\"\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeBackgroundImage)('HOME');\n\n    const headlineText = `\n        A Taste of the West, A Slice of Bliss, ^Prepared by your Favourite \n    `;\n    const headlineH2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", headlineText, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"headline\", null, true\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"strong\", \"SHEF\", headlineH2\n    );\n\n    const descriptionDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"description\"\n    );\n    const descriptionText = `\n        Step into a warm and inviting space where the comforting flavours of \n        Western cuisine meet the art of exquisite desserts. Our restaurant is \n        more than just a place to dine — it's a place to savour, celebrate, and \n        create unforgettable moments. ^From perfectly grilled steaks and hearty \n        pastas to beautifully plated signature dishes, every meal is crafted \n        with passion and the finest ingredients. And just when you think it \n        couldn't get better, our dessert selection takes centre stage — \n        featuring velvety cheesecakes and light, luscious mousse cakes that \n        melt effortlessly with every bite. ^Whether you're gathering with \n        friends, planning a romantic evening, or simply treating yourself, our \n        welcoming atmosphere, attentive service, and thoughtfully curated menu \n        promise a dining experience that feels both indulgent and comforting. \n        Here, every visit is a celebration of flavour, quality, and sweet \n        satisfaction.\n    `;\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", descriptionText, descriptionDiv, null, null, true\n    );\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst contentDiv = document.getElementById(\"content\");\n\nfunction clearContent() {\n    let child = contentDiv.lastElementChild;\n    while (child) {\n        contentDiv.removeChild(child);\n        child = contentDiv.lastElementChild;\n    }\n}\n\nconst buttons = document.querySelector(\"#nav\");\nbuttons.addEventListener('click', (event) => {\n    let target = event.target;\n\n    switch (target.id) {\n        case \"home\":\n            clearContent();\n            (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.generateHomeContent)();\n            break;\n        case \"menu\":\n            clearContent();\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenuContent)();\n            break;\n        case \"about\":\n            clearContent();\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.generateAboutContent)();\n            break;\n    }\n});\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.generateHomeContent)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuContent: () => (/* binding */ generateMenuContent)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nfunction addMenu(section, name, price) {\n    const rowDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, section, null, [\"row\"]\n    );\n\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", name, rowDiv, null, [\"dish-name\"]\n    );\n\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"p\", price, rowDiv\n    );\n}\n\nfunction generateMenuContent() {\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeHeader)();\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h1\", \"MENU\", _functions_js__WEBPACK_IMPORTED_MODULE_0__.headerDiv\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.changeBackgroundImage)('MENU');\n\n    const menuDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, _functions_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv, \"menu\"\n    );\n\n    const mainsSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, menuDiv, null, [\"section\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"Mains\", mainsSection\n    );\n    addMenu(mainsSection, \"Chicken Alfredo Pasta\", \"11.90\");\n    addMenu(mainsSection, \"Salmon Aglio Olio\", \"13.90\");\n    addMenu(mainsSection, \"Ribeye Steak\", \"18.90\");\n\n    const dessertsSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, menuDiv, null, [\"section\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"Desserts\", dessertsSection\n    );\n    addMenu(dessertsSection, \"Cookies n Cream Cheesecake\", \"5.50\");\n    addMenu(dessertsSection, \"Mango Mousse Cake\", \"5.50\");\n\n    const beveragesSection = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"div\", null, menuDiv, null, [\"section\"]\n    );\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createAndAppendElement)(\n        \"h2\", \"Beverages\", beveragesSection\n    );\n    addMenu(beveragesSection, \"Iced Lemon Tea\", \"3.50\");\n    addMenu(beveragesSection, \"Strawberry Matcha Latte\", \"5.50\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;