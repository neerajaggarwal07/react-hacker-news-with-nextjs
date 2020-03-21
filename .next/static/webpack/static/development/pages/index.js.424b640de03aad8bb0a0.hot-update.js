webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Header/Header.js":
/*!***********************************************!*\
  !*** ./components/molecules/Header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.style */ "./components/molecules/Header/Header.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/molecules/Header/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Header = function Header(props) {
  var className = props.className,
      title = props.title,
      description = props.description,
      backButton = props.backButton;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, backButton && __jsx("span", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.back();
    },
    className: "back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u2B05"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].Hacker_Next)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, _Header_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.424b640de03aad8bb0a0.hot-update.js.map