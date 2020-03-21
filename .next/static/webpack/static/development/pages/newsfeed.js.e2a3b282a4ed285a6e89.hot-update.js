webpackHotUpdate("static/development/pages/newsfeed.js",{

/***/ "./components/organisms/Comments/Comments.js":
/*!***************************************************!*\
  !*** ./components/organisms/Comments/Comments.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _Comments_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments.style */ "./components/organisms/Comments/Comments.style.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/organisms/Comments/Comments.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return __jsx("div", {
    className: "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), __jsx("div", {
    className: "comment-content",
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), comment.comments && __jsx("div", {
    className: "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return __jsx(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, _Comments_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=newsfeed.js.e2a3b282a4ed285a6e89.hot-update.js.map