module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/Anchor/Anchor.js":
/*!*******************************************!*\
  !*** ./components/atoms/Anchor/Anchor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Anchor_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Anchor.style */ "./components/atoms/Anchor/Anchor.style.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/atoms/Anchor/Anchor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Anchor = props => {
  const {
    children,
    to,
    className,
    handleLinkClick,
    title,
    target,
    url,
    text
  } = props,
        other = _objectWithoutProperties(props, ["children", "to", "className", "handleLinkClick", "title", "target", "url", "text"]);

  return __jsx("a", _extends({
    href: url,
    className: className,
    onClick: handleLinkClick,
    title: title,
    target: target
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), children);
};

Anchor.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string.isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string.isRequired,
  handleLinkClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};
Anchor.defaultProps = {
  handleLinkClick: () => {},
  title: '',
  target: '',
  url: '',
  text: '',
  to: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(Anchor, _Anchor_style__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./components/atoms/Anchor/Anchor.style.js":
/*!*************************************************!*\
  !*** ./components/atoms/Anchor/Anchor.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  color:${props => props.theme.colors.BLACK};
  margin:0 auto;
  font-size:${props => props.theme.fonts.fontSize.anchor.medium}px;
 
`;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/atoms/BodyCopy/BodyCopy.js":
/*!***********************************************!*\
  !*** ./components/atoms/BodyCopy/BodyCopy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _BodyCopy_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BodyCopy.style */ "./components/atoms/BodyCopy/BodyCopy.style.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/atoms/BodyCopy/BodyCopy.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BodyCopy = props => {
  const {
    children,
    className,
    component: Component
  } = props,
        others = _objectWithoutProperties(props, ["children", "className", "component"]);

  return __jsx(Component, _extends({
    className: className
  }, others, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), children);
};

BodyCopy.defaultProps = {
  component: 'p',
  className: null,
  children: null
};
BodyCopy.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].elementType,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].node
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(BodyCopy, _BodyCopy_style__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./components/atoms/BodyCopy/BodyCopy.style.js":
/*!*****************************************************!*\
  !*** ./components/atoms/BodyCopy/BodyCopy.style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
 
`;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/atoms/Button/Button.js":
/*!*******************************************!*\
  !*** ./components/atoms/Button/Button.js ***!
  \*******************************************/
/*! exports provided: default, ButtonVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonVanilla", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Button_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.style */ "./components/atoms/Button/Button.style.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/atoms/Button/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * @param {object} props : Props for button
 * @desc This is a button component.
 */

const Button = (_ref) => {
  let {
    children,
    className,
    ariaLabel,
    disabled,
    type,
    active
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "ariaLabel", "disabled", "type", "active"]);

  return __jsx("button", _extends({
    className: className,
    "aria-label": ariaLabel,
    type: type,
    disabled: disabled
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  disabled: '',
  type: 'button',
  active: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(Button, _Button_style__WEBPACK_IMPORTED_MODULE_3__["default"]));


/***/ }),

/***/ "./components/atoms/Button/Button.style.js":
/*!*************************************************!*\
  !*** ./components/atoms/Button/Button.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  border: none;
  border-radius: 0;
  background: none;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  min-height: 32px;
  font-size: ${props => props.theme.fonts.fontSize.button.size};
  color: ${props => props.theme.colors.BUTTON.ORANGE.TEXT};
  font-weight:${props => props.theme.fonts.fontWeight.bold};
  ${props => props.variation === 'Link' ? `
      color: ${props.theme.colors.BLACK};
      font-weight: ${props.theme.fonts.fontWeight.bold};
      text-transform: lowercase;
      }
    ` : ''};
`;
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyles);

/***/ }),

/***/ "./components/atoms/Col/Col.js":
/*!*************************************!*\
  !*** ./components/atoms/Col/Col.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Col.style */ "./components/atoms/Col/Col.style.js");
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/atoms/Col/Col.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Basic file for column in the grid structure



 // Passing on the colConfig to the style File and also the flag to add inline-block to the column

const Col = (_ref) => {
  let {
    children,
    className,
    tagName: CustomTag
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "tagName"]);

  return __jsx(CustomTag, _extends({
    className: className
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), children);
};

Col.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].shape({}).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string.isRequired,
  tagName: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};
Col.defaultProps = {
  tagName: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(Col, _Col_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/atoms/Col/Col.style.js":
/*!*******************************************!*\
  !*** ./components/atoms/Col/Col.style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const getWidth = colSpan => {
  if (!colSpan) return;
  let width = colSpan / 12 * 100;
  return `width : ${width}%;`;
};

const StyledCol = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    float :left;
    ${({
  sm
}) => sm ? getWidth(sm) : "width:100%"};

  
    @media ${props => props.theme.mediaQuery.medium} {
        ${({
  md
}) => md && getWidth(md)};
      }
      @media ${props => props.theme.mediaQuery.large} {
        ${({
  lg
}) => lg && getWidth(lg)}
      }
      @media ${props => props.theme.mediaQuery.xlarge} {
        ${({
  xlg
}) => xlg && getWidth(xlg)};
      }

`;
/* harmony default export */ __webpack_exports__["default"] = (StyledCol);

/***/ }),

/***/ "./components/atoms/Row/Row.js":
/*!*************************************!*\
  !*** ./components/atoms/Row/Row.js ***!
  \*************************************/
/*! exports provided: default, RowVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowVanilla", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row.style */ "./components/atoms/Row/Row.style.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/atoms/Row/Row.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // An additonal prop 'fullBleed' is added.
// This property ignores the offset of the row and spans across the space of the grid.

const Row = (_ref) => {
  let {
    className,
    children,
    tagName: CustomTag,
    tabIndex
  } = _ref,
      otherprops = _objectWithoutProperties(_ref, ["className", "children", "tagName", "tabIndex"]);

  return __jsx(CustomTag, _extends({
    className: className,
    tabIndex: tabIndex
  }, otherprops, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), children);
};

Row.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].shape([]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string.isRequired,
  tagName: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].number,
  otherprops: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].shape({})
};
Row.defaultProps = {
  tagName: 'div',
  tabIndex: undefined,
  otherprops: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(Row, _Row_style__WEBPACK_IMPORTED_MODULE_3__["default"]));


/***/ }),

/***/ "./components/atoms/Row/Row.style.js":
/*!*******************************************!*\
  !*** ./components/atoms/Row/Row.style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
display: flex;
flex-wrap: wrap;
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledRow);

/***/ }),

/***/ "./components/hoc/withStyles.js":
/*!**************************************!*\
  !*** ./components/hoc/withStyles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((WrappedComponent, styles) => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(WrappedComponent)`
  ${styles};
`);

/***/ }),

/***/ "./components/molecules/ErrorBoundary/ErrorBoundary.js":
/*!*************************************************************!*\
  !*** ./components/molecules/ErrorBoundary/ErrorBoundary.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/molecules/ErrorBoundary/ErrorBoundary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log("componentStack = " + info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Something Went Wrong");
    }

    return this.props.children;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./components/molecules/Footer/Footer.js":
/*!***********************************************!*\
  !*** ./components/molecules/Footer/Footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.style */ "./components/molecules/Footer/Footer.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/molecules/Footer/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = ({
  className,
  page
}) => {
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, page && __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/?page=${page + 1}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].NEXT_PAGE, " (", page + 1, ")")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, _Footer_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/molecules/Footer/Footer.style.js":
/*!*****************************************************!*\
  !*** ./components/molecules/Footer/Footer.style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    footer {
        padding: 1em;
    }
    footer a {
        font-weight: bold;
        color: black;
        text-decoration: none;
        cursor:pointer;
    }
 
`;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/molecules/Header/Header.js":
/*!***********************************************!*\
  !*** ./components/molecules/Header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.style */ "./components/molecules/Header/Header.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/Button/Button */ "./components/atoms/Button/Button.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/molecules/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Header = props => {
  const {
    className,
    title,
    description,
    backButton
  } = props;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, backButton && __jsx(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "button",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_7___default.a.back(),
    ariaLabel: _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].MORE,
    className: "back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, " \u2B05 "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].HACKER_NEXT)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, _Header_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/molecules/Header/Header.style.js":
/*!*****************************************************!*\
  !*** ./components/molecules/Header/Header.style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    height:32px;
    display:flex;
    color:${props => props.theme.colors.BLACK};
    background-color:${props => props.theme.colors.HEADER.BACKGROUND};
    width:100%;
    margin: ${props => props.theme.spacing.ELEM_SPACING.MED} 0;
    text-align:left;
    
      nav > * {
        display: inline-block;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: ${props => props.theme.spacing.ELEM_SPACING.MED};
        cursor: pointer;
        color:${props => props.theme.colors.BLACK};
      }
 
`;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/molecules/VoteCounter/VoteCounter.js":
/*!*********************************************************!*\
  !*** ./components/molecules/VoteCounter/VoteCounter.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _VoteCounter_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoteCounter.style */ "./components/molecules/VoteCounter/VoteCounter.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Button/Button */ "./components/atoms/Button/Button.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/molecules/VoteCounter/VoteCounter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const VoteCounter = props => {
  const {
    className,
    itemList
  } = props;
  const {
    0: voteCounter,
    1: setVoteCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVoteCounter(0);
  }, [itemList]);
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, voteCounter), __jsx(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "button",
    ariaLabel: "arrow",
    className: "icon-up",
    onClick: () => setVoteCounter(voteCounter + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(VoteCounter, _VoteCounter_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/molecules/VoteCounter/VoteCounter.style.js":
/*!***************************************************************!*\
  !*** ./components/molecules/VoteCounter/VoteCounter.style.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display:inline-block;
 `;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/organisms/NewsFeeds/NewsFeedsList.js":
/*!*********************************************************!*\
  !*** ./components/organisms/NewsFeeds/NewsFeedsList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Col/Col */ "./components/atoms/Col/Col.js");
/* harmony import */ var _atoms_Row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Row/Row */ "./components/atoms/Row/Row.js");
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _NewsFeedsList_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewsFeedsList.style */ "./components/organisms/NewsFeeds/NewsFeedsList.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
/* harmony import */ var _atoms_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/Anchor/Anchor */ "./components/atoms/Anchor/Anchor.js");
/* harmony import */ var _molecules_VoteCounter_VoteCounter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/VoteCounter/VoteCounter */ "./components/molecules/VoteCounter/VoteCounter.js");
/* harmony import */ var _molecules_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/ErrorBoundary/ErrorBoundary */ "./components/molecules/ErrorBoundary/ErrorBoundary.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/organisms/NewsFeeds/NewsFeedsList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const NewsFeedsList = props => {
  const {
    className,
    itemsList
  } = props;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_molecules_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, itemsList.map(item => {
    const {
      id,
      points,
      title,
      user,
      time_ago,
      url,
      comments_count
    } = item;
    return __jsx("li", {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, __jsx(_atoms_Row_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, __jsx(_atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      lg: "1",
      md: "2",
      sm: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "points",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, points || 0), __jsx(_molecules_VoteCounter_VoteCounter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      itemList: itemsList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    })), __jsx(_atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      lg: "11",
      md: "10",
      sm: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/newsfeed?id=${id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, __jsx("a", {
      class: "comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, comments_count || 0, " ", _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].COMMENTS)), "(", __jsx(_atoms_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "url",
      rel: "nofollow noreferrer noopener",
      target: "_blank",
      href: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "findwork.dev"), ")", __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].BY), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, user), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "timestamp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, time_ago))));
  }))));
};

NewsFeedsList.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string,
  itemsList: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].shape([]).isRequired,
  loadMoreHandler: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  hideClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
NewsFeedsList.defaultProps = {
  className: "",
  loadMoreHandler: () => {},
  hideClickHandler: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(NewsFeedsList, _NewsFeedsList_style__WEBPACK_IMPORTED_MODULE_6__["default"]));

/***/ }),

/***/ "./components/organisms/NewsFeeds/NewsFeedsList.style.js":
/*!***************************************************************!*\
  !*** ./components/organisms/NewsFeeds/NewsFeedsList.style.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  .points{
    color:${props => props.theme.colors.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    font-weight:${props => props.theme.fonts.fontWeight.bold};
    width:20px;
    display:inline-block;
  }
  .title{
    color:${props => props.theme.colors.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    font-weight:${props => props.theme.fonts.fontWeight.bold};
    
  }
  .author{
    color:${props => props.theme.colors.TEXT.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .timestamp{
    color:${props => props.theme.colors.TEXT.DARKGRAY};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .url{
    color:${props => props.theme.colors.TEXT.DARKGRAY};
    text-decoration:none;
  }
  .label{
    color:${props => props.theme.colors.TEXT.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .comments{
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    display:inline-block;
    padding: 0 4px;
    text-decoration:none;
  }
  span{
    display:inline-block;
    padding:0 ${props => props.theme.spacing.ELEM_SPACING.XXS};
  }
  .icon-up:before {
    content: "\\25B2";
    color:${props => props.theme.colors.TEXT.GRAY};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
  }
  li{
    color:${props => props.theme.colors.TEXT.DARK};
    
    padding: ${props => props.theme.spacing.ELEM_SPACING.XXS};
    &:nth-child(even){
        background-color: ${props => props.theme.colors.BACKGROUND.BEIGE};
    }
    &:nth-child(odd){
        background-color:${props => props.theme.colors.BACKGROUND.DARKBEIGE};
    }
  }
  
`;
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./constants/labels.js":
/*!*****************************!*\
  !*** ./constants/labels.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LABELS = {
  BY: 'by',
  HIDE: 'hide',
  HOURS: 'hours',
  AGO: 'ago',
  TOP: 'Top',
  NEW: 'news',
  MORE: 'more',
  HACKER_NEXT: 'Hacker Next',
  NEXT_PAGE: 'Next PAGE',
  NO_COMMENT: 'No comments for this news',
  COMMENTS: 'comments',
  POINTS: 'points'
};
/* harmony default export */ __webpack_exports__["default"] = (LABELS);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

const amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__(/*! react */ "react");

const isServer = true;

exports.default = () => {
  const mountedInstances = new Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return _react.default.createElement("div", {
      style: styles.error
    }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, statusCode, ": ", title)), _react.default.createElement("div", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? _react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, _react.default.createElement("div", {
      style: styles.desc
    }, _react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/themes/Default/index */ "./styles/themes/Default/index.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles/index.js");
/* harmony import */ var _components_organisms_NewsFeeds_NewsFeedsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/organisms/NewsFeeds/NewsFeedsList */ "./components/organisms/NewsFeeds/NewsFeedsList.js");
/* harmony import */ var _components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/molecules/Header/Header */ "./components/molecules/Header/Header.js");
/* harmony import */ var _components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/molecules/Footer/Footer */ "./components/molecules/Footer/Footer.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.theme = _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  static async getInitialProps({
    req,
    res,
    query
  }) {
    let news;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      news = await response.json();
      console.log(news);
    } catch (err) {
      console.log(err);
      news = [];
    }

    return {
      news,
      page
    };
  }

  render() {
    const {
      news,
      page
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: this.theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Hacker News",
      description: "A Hacker News clone made with Next.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), news.length ? __jsx(_components_organisms_NewsFeeds_NewsFeedsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      itemsList: news,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }) : __jsx(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
      statusCode: 503,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/GlobalStyles/Global.style.js":
/*!*********************************************!*\
  !*** ./styles/GlobalStyles/Global.style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_Default_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/Default/index */ "./styles/themes/Default/index.js");


const {
  fonts,
  breakpoints,
  mediaQuery
} = _themes_Default_index__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
text-align: center;
  
  body {
    font-family: ${fonts.primaryFontFamily};
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    
    position: relative;
    width:80%;
    margin: 0 auto;
   padding:20px;
  }

  

  .content-wrapper {
    max-width: ${breakpoints.xlarge};
    margin: 0 auto;
  }

  

  

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  

  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style-type: none;
  }

  h2,
  p {
    margin: 0;
  }

  .line-height-0 {
    line-height: 0;
  }

  .hide-on-mobile {
    @media ${mediaQuery.smallOnly} {
      display: none !important;
    }
  }

  .hide-on-desktop {
    @media ${mediaQuery.largeOnly} {
      display: none !important;
    }
    @media ${mediaQuery.xlarge} {
      display: none !important;
    }
  }

  .hide-on-tablet {
    @media ${mediaQuery.mediumOnly} {
      display: none !important;
    }
  }
  .text-break {
    word-break: break-word;
  }
  .full-width {
    width: 100%;
    display: inline-block;
  }

  

  ${props => {
  return Object.keys(props.theme.spacing.ELEM_SPACING).map(key => {
    return `
      .elem-mt-${key} {
        margin-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mr-${key} {
        margin-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mb-${key} {
        margin-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-ml-${key} {
        margin-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pt-${key} {
        padding-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pr-${key} {
        padding-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pb-${key} {
        padding-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pl-${key} {
        padding-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }`;
  });
}}

  ${props => {
  return Object.keys(props.theme.spacing.LAYOUT_SPACING).map(key => {
    return `
      .layout-pt-${key} {
        padding-top: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pr-${key} {
        padding-right: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pb-${key} {
        padding-bottom: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pl-${key} {
        padding-left: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }`;
  });
}}
  .spacing {
    padding: 0 ${props => props.theme.spacing.LAYOUT_SPACING.SM};
  }
`);

/***/ }),

/***/ "./styles/GlobalStyles/index.js":
/*!**************************************!*\
  !*** ./styles/GlobalStyles/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Global_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global.style */ "./styles/GlobalStyles/Global.style.js");

 //import fontFaces from './fontFaces';
// eslint-disable-next-line no-unused-expressions

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
 
  ${_Global_style__WEBPACK_IMPORTED_MODULE_1__["default"]}
`); // export default createGlobalStyle`
//  ${fontFaces}
//   ${globalStyles}
// `;

/***/ }),

/***/ "./styles/themes/Default/Constants/colors.js":
/*!***************************************************!*\
  !*** ./styles/themes/Default/Constants/colors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Colors
  // The colours below are taken from the UI stylesheet. If you find you need a colour that doesn't
  // exist here, it's likely the design should be updated to match an use color, or the color needs
  // to be added to the stylesheet. Please speak to a designer first before adding here and
  // PLEASE DO NOT JUST ADD COLOURS BELOW BECAUSE IT'S IN A DESIGN :)
  BLACK: '#000000',
  WHITE: '#ffffff',
  PRIMARY: {
    DARK: '#1a1a1a',
    GRAY: '#9b9b9b',
    LIGHTGRAY: '#d8d8d8',
    BLUE: '#2e6a91'
  },
  TEXT: {
    DARK: '#1a1a1a',
    DARKGRAY: '#828282',
    GRAY: '#999999',
    LIGHTGRAY: '#b8b8b8',
    DARKERGRAY: '#d8d8d8',
    ORANGEDARK: '#aa4400'
  },
  BACKGROUND: {
    BEIGE: '#e6e6df',
    DARKBEIGE: '#f6f6ef',
    ORANGE: '#ff6600'
  },
  BUTTON_HOVER: 'rgba(24, 24, 24, 0.8)',
  COUNT_ICON_DISABLE: 'rgba(0, 0, 0, 0.3)',
  BUTTON: {
    ORANGE: {
      TEXT: '#ff6600'
    }
  },
  ANCHOR: {
    PRIMARY: '#1a1a1a',
    SECONDARY: '#2e6a91',
    TERTIARY: '#c84747',
    GRAYED: '#9b9b9b'
  },
  HEADER: {
    BACKGROUND: '#ff6600'
  },
  FOOTER: {
    DIVIDER: '#c3c3c3'
  },
  BORDER: {
    NORMAL: '#979797',
    BLUE: '#2e6a91'
  },
  NAVIGATION: {
    CIRCULAR_BORDER: '#6b6b6b',
    L1_BACKGROUND: '#f6f6f6',
    GREEN: '#93DE6E',
    YELLOW: '#FFE600'
  }
});

/***/ }),

/***/ "./styles/themes/Default/Constants/fonts.js":
/*!**************************************************!*\
  !*** ./styles/themes/Default/Constants/fonts.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FALLBACK_FONT = 'Arial, Helvetica, sans-serif';
const PRIMARY_FONT = `Montserrat, ${FALLBACK_FONT}`;
const FONT_SIZE = {
  heading: {
    large: {
      h1: 64,
      h2: 48,
      h3: 36,
      h4: 28,
      h5: 28,
      h6: 16
    },
    small: {
      h1: 48,
      h2: 32,
      h3: 24,
      h4: 18,
      h5: 18,
      h6: 16
    }
  },
  body: {
    bodytext: {
      copy1: 10,
      copy2: 12,
      copy3: 14,
      copy4: 16
    }
  },
  nav: 15,
  listmenu: {
    large: 14,
    small: 13
  },
  button: {
    size: 14
  },
  anchor: {
    small: 10,
    medium: 12,
    large: 14,
    xlarge: 16
  }
};
const FONT_WEIGHT = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extrabold: '800',
  black: '900'
}; // Typography

/* harmony default export */ __webpack_exports__["default"] = ({
  primaryFontFamily: PRIMARY_FONT,
  fontWeight: FONT_WEIGHT,
  fontSize: FONT_SIZE
});

/***/ }),

/***/ "./styles/themes/Default/Constants/mediaquery.js":
/*!*******************************************************!*\
  !*** ./styles/themes/Default/Constants/mediaquery.js ***!
  \*******************************************************/
/*! exports provided: breakpoints, mediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
const breakpoints = {
  small: '360px',
  smallMax: '767px',
  medium: '768px',
  mediumMax: '1199px',
  large: '1200px',
  largeMax: '1439px',
  xlarge: '1440px',
  maxWidth: 1440,
  keys: ['xs', 'sm', 'md', 'lg', 'xlg'],
  values: {
    xs: 0,
    sm: 768,
    lg: 1200
  }
};
const mediaQuery = {
  small: `(min-width: ${breakpoints.small})`,
  smallMax: `(max-width: ${breakpoints.smallMax})`,
  smallOnly: `
      (min-width: ${breakpoints.small})
      and
      (max-width: ${breakpoints.smallMax})
    `,
  medium: `(min-width: ${breakpoints.medium})`,
  mediumMax: `(max-width: ${breakpoints.mediumMax})`,
  mediumOnly: `
      (min-width: ${breakpoints.medium})
      and
      (max-width: ${breakpoints.mediumMax})
    `,
  large: `(min-width: ${breakpoints.large})`,
  largeMax: `(max-width: ${breakpoints.largeMax})`,
  largeOnly: `
      (min-width: ${breakpoints.large})
      and
      (max-width: ${breakpoints.largeMax})
    `,
  xlarge: `(min-width: ${breakpoints.xlarge})`
};

/***/ }),

/***/ "./styles/themes/Default/Constants/spacing.js":
/*!****************************************************!*\
  !*** ./styles/themes/Default/Constants/spacing.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // SPACING
  // ELEM_SPACING - This spacing is defined from the mininum to maximum that can be used inside an individual
  // component for both padding and margin.
  // LAYOUT_SPACING - TThe layout scale is used for arranging components and other UI parts into a full page layout.
  // It has larger increments that are used to control the density of a design.
  // Use the smaller layout tokens to create more dense compositions and direct relationships.
  // Use the larger tokens to increase the amount of white space and to disassociate sections.
  // The spacing below are taken from the UI stylesheet. If you find you need a spacing that doesn't
  // exist here, it's likely the design should be updated to match an use spacing, or the spacing needs
  // to be added to the stylesheet. Please speak to a designer first before adding here and
  // PLEASE DO NOT JUST ADD SPACING BELOW BECAUSE IT'S IN A DESIGN :)
  ELEM_SPACING: {
    XXXS: '2px',
    XXS: '4px',
    XS: '8px',
    SM: '12px',
    MED: '16px',
    LRG: '24px',
    XL: '32px',
    XXL: '40px',
    XXXL: '48px'
  },
  LAYOUT_SPACING: {
    XXS: '16px',
    XS: '24px',
    SM: '32px',
    MED: '48px',
    LRG: '64px',
    LRGS: '110px',
    XL: '96px',
    XXL: '160px',
    XXXL: '320px'
  },
  APP_LAYOUT_SPACING: {
    XXS: '10px',
    XS: '20px',
    SM: '30px'
  }
});

/***/ }),

/***/ "./styles/themes/Default/index.js":
/*!****************************************!*\
  !*** ./styles/themes/Default/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants/colors */ "./styles/themes/Default/Constants/colors.js");
/* harmony import */ var _Constants_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants/fonts */ "./styles/themes/Default/Constants/fonts.js");
/* harmony import */ var _Constants_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants/spacing */ "./styles/themes/Default/Constants/spacing.js");
/* harmony import */ var _Constants_mediaquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants/mediaquery */ "./styles/themes/Default/Constants/mediaquery.js");




const theme = {
  brand: 'default',

  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors: _Constants_colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  fonts: _Constants_fonts__WEBPACK_IMPORTED_MODULE_1__["default"],
  mediaQuery: _Constants_mediaquery__WEBPACK_IMPORTED_MODULE_3__["mediaQuery"],
  breakpoints: _Constants_mediaquery__WEBPACK_IMPORTED_MODULE_3__["breakpoints"],
  spacing: _Constants_spacing__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map