webpackHotUpdate("static/development/pages/newsfeed.js",{

/***/ "./components/organisms/NewsTitleDetails/NewsTitleDetails.js":
/*!*******************************************************************!*\
  !*** ./components/organisms/NewsTitleDetails/NewsTitleDetails.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _NewsTitleDetails_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsTitleDetails.style */ "./components/organisms/NewsTitleDetails/NewsTitleDetails.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/organisms/NewsTitleDetails/NewsTitleDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var NewsTitleDetails = function NewsTitleDetails(_ref) {
  var className = _ref.className,
      newsFeed = _ref.newsFeed;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "news-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: newsFeed.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, newsFeed.title)), __jsx("div", {
    className: "news-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "strong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, newsFeed.points, " ", _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].POINTS), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "strong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, newsFeed.comments_count, " ", _constants_labels__WEBPACK_IMPORTED_MODULE_4__["default"].COMMENTS), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "strong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, newsFeed.time_ago)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsTitleDetails, _NewsTitleDetails_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=newsfeed.js.017e08e200c84559d7ea.hot-update.js.map