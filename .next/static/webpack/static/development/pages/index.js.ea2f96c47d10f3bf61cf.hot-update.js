webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/NewsFeeds/NewsFeedsList.js":
/*!*********************************************************!*\
  !*** ./components/organisms/NewsFeeds/NewsFeedsList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Col/Col */ "./components/atoms/Col/Col.js");
/* harmony import */ var _atoms_Row_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Row/Row */ "./components/atoms/Row/Row.js");
/* harmony import */ var _hoc_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withStyles */ "./components/hoc/withStyles.js");
/* harmony import */ var _NewsFeedsList_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewsFeedsList.style */ "./components/organisms/NewsFeeds/NewsFeedsList.style.js");
/* harmony import */ var _atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/BodyCopy/BodyCopy */ "./components/atoms/BodyCopy/BodyCopy.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/labels */ "./constants/labels.js");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/Anchor/Anchor */ "./components/atoms/Anchor/Anchor.js");
/* harmony import */ var _molecules_VoteCounter_VoteCounter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/VoteCounter/VoteCounter */ "./components/molecules/VoteCounter/VoteCounter.js");
/* harmony import */ var _molecules_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../molecules/ErrorBoundary/ErrorBoundary */ "./components/molecules/ErrorBoundary/ErrorBoundary.js");
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/organisms/NewsFeeds/NewsFeedsList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var NewsFeedsList = function NewsFeedsList(props) {
  var className = props.className,
      itemsList = props.itemsList,
      hideClickHandler = props.hideClickHandler;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_molecules_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, itemsList.map(function (item) {
    var id = item.id,
        points = item.points,
        title = item.title,
        user = item.user,
        time_ago = item.time_ago,
        url = item.url,
        comments_count = item.comments_count;
    return __jsx("li", {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_atoms_Row_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      lg: "1",
      md: "2",
      sm: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, points || 0), __jsx(_molecules_VoteCounter_VoteCounter__WEBPACK_IMPORTED_MODULE_11__["default"], {
      itemList: itemsList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx(_atoms_Col_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      lg: "11",
      md: "10",
      sm: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/newsfeed?id=".concat(id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, comments_count || 0, " comments")), "(", __jsx(_atoms_Anchor_Anchor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "url",
      rel: "nofollow noreferrer noopener",
      target: "_blank",
      href: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "findwork.dev"), ")", __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].BY), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, user), __jsx(_atoms_BodyCopy_BodyCopy__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "span",
      className: "timestamp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, time_ago), "[", __jsx(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "button",
      ariaLabel: _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].HIDE,
      variation: "Link",
      className: "label",
      onClick: function onClick() {
        hideClickHandler(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].HIDE), "]")));
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
  loadMoreHandler: function loadMoreHandler() {},
  hideClickHandler: function hideClickHandler() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(NewsFeedsList, _NewsFeedsList_style__WEBPACK_IMPORTED_MODULE_6__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.ea2f96c47d10f3bf61cf.hot-update.js.map