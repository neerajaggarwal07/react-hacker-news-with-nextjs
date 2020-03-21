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
var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/components/organisms/NewsTitleDetails/NewsTitleDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NewsTitleDetails = function NewsTitleDetails(_ref) {
  var newsFeed = _ref.newsFeed;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
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
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, newsFeed.points, " ", LABELS.POINTS), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, newsFeed.comments_count, " ", LABELS.COMMENTS), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, newsFeed.time_ago)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsTitleDetails, _NewsTitleDetails_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/organisms/NewsTitleDetails/NewsTitleDetails.style.js":
/*!*************************************************************************!*\
  !*** ./components/organisms/NewsTitleDetails/NewsTitleDetails.style.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n.news-title {\n    font-size: 1.2rem;\n    margin: 0;\n    font-weight: 300;\n    padding-bottom: 0.5em;\n  }\n  .news-title a {\n    color: #333;\n    text-decoration: none;\n  }\n  .news-title a:hover {\n    text-decoration: underline;\n  }\n  .news-details {\n    font-size: 0.8rem;\n    padding-bottom: 1em;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 1em;\n  }\n  .news-details strong {\n    margin-right: 1em;\n  }\n  .news-details a {\n    color: #f60;\n  }\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./pages/newsfeed.js":
/*!***************************!*\
  !*** ./pages/newsfeed.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsFeed; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/themes/Default/index */ "./styles/themes/Default/index.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles/index.js");
/* harmony import */ var _components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/molecules/Header/Header */ "./components/molecules/Header/Header.js");
/* harmony import */ var _components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/molecules/Footer/Footer */ "./components/molecules/Footer/Footer.js");
/* harmony import */ var _components_organisms_NewsTitleDetails_NewsTitleDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/organisms/NewsTitleDetails/NewsTitleDetails */ "./components/organisms/NewsTitleDetails/NewsTitleDetails.js");
/* harmony import */ var _components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/organisms/CommentsList/CommentsList */ "./components/organisms/CommentsList/CommentsList.js");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants/labels */ "./constants/labels.js");






var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var NewsFeed = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NewsFeed, _React$Component);

  function NewsFeed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsFeed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsFeed).call(this, props));
    _this.theme = _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsFeed, [{
    key: "render",
    value: function render() {
      var newsFeed = this.props.newsFeed;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: this.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Hacker News",
        description: "A Hacker News clone made with Next.js",
        backButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_components_organisms_NewsTitleDetails_NewsTitleDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
        newsFeed: newsFeed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("main", {
        className: "jsx-1897053027",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, newsFeed.comments.length > 0 ? __jsx(_components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        comments: newsFeed.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }) : __jsx("div", {
        className: "jsx-1897053027",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, _constants_labels__WEBPACK_IMPORTED_MODULE_16__["default"].NO_COMMENT)), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1897053027",
        __self: this
      }, "main.jsx-1897053027{padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWVhZ2dhci9PZmZpY2lhbC9sZWFybmluZy9ybmQvcmVhY3Rqcy9yZWFjdC1oYWNrZXItbmV3cy13aXRoLW5leHRqcy9wYWdlcy9uZXdzZmVlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CLEFBR3lCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL25lZWFnZ2FyL09mZmljaWFsL2xlYXJuaW5nL3JuZC9yZWFjdGpzL3JlYWN0LWhhY2tlci1uZXdzLXdpdGgtbmV4dGpzL3BhZ2VzL25ld3NmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZXMvRGVmYXVsdC9pbmRleFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Zvb3Rlci9Gb290ZXJcIjtcblxuaW1wb3J0IE5ld3NUaXRsZURldGFpbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3JnYW5pc21zL05ld3NUaXRsZURldGFpbHMvTmV3c1RpdGxlRGV0YWlsc1wiO1xuXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0NvbW1lbnRzTGlzdC9Db21tZW50c0xpc3RcIjtcbmltcG9ydCBMQUJFTFMgZnJvbSAnLi4vY29uc3RhbnRzL2xhYmVscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NGZWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICB9XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xuICAgIGxldCBuZXdzRmVlZDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdzSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7bmV3c0lkfWBcbiAgICAgICk7XG5cbiAgICAgIG5ld3NGZWVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBuZXdzRmVlZCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7IG5ld3NGZWVkIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuZXdzRmVlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoaXMudGhlbWV9PlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHRpdGxlPVwiSGFja2VyIE5ld3NcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQSBIYWNrZXIgTmV3cyBjbG9uZSBtYWRlIHdpdGggTmV4dC5qc1wiXG4gICAgICAgICAgYmFja0J1dHRvblxuICAgICAgICA+PC9IZWFkZXI+XG4gICAgICAgIDxOZXdzVGl0bGVEZXRhaWxzIG5ld3NGZWVkPXtuZXdzRmVlZH0vPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7bmV3c0ZlZWQuY29tbWVudHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17bmV3c0ZlZWQuY29tbWVudHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+e0xBQkVMUy4gTk9fQ09NTUVOVH08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, res, query, newsFeed, newsId, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, res = _ref.res, query = _ref.query;
              _context.prev = 1;
              newsId = query.id;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()("https://node-hnapi.herokuapp.com/item/".concat(newsId)));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 8:
              newsFeed = _context.sent;
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              newsFeed = null;

            case 15:
              return _context.abrupt("return", {
                newsFeed: newsFeed
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 11]], Promise);
    }
  }]);

  return NewsFeed;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=newsfeed.js.4c91c25bb4fa5b359096.hot-update.js.map