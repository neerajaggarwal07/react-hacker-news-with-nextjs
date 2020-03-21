webpackHotUpdate("static/development/pages/newsfeed.js",{

/***/ "./components/atoms/Anchor/Anchor.js":
false,

/***/ "./components/atoms/Anchor/Anchor.style.js":
false,

/***/ "./components/atoms/Button/Button.js":
false,

/***/ "./components/atoms/Button/Button.style.js":
false,

/***/ "./components/atoms/Col/Col.js":
false,

/***/ "./components/atoms/Col/Col.style.js":
false,

/***/ "./components/atoms/Row/Row.js":
false,

/***/ "./components/atoms/Row/Row.style.js":
false,

/***/ "./components/molecules/ErrorBoundary/ErrorBoundary.js":
false,

/***/ "./components/molecules/VoteCounter/VoteCounter.js":
false,

/***/ "./components/molecules/VoteCounter/VoteCounter.style.js":
false,

/***/ "./components/organisms/NewsFeeds/NewsFeedsList.js":
false,

/***/ "./components/organisms/NewsFeeds/NewsFeedsList.style.js":
false,

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
/* harmony import */ var _components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/organisms/CommentsList/CommentsList */ "./components/organisms/CommentsList/CommentsList.js");






var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var NewsFeed = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NewsFeed, _React$Component);

  function NewsFeed() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsFeed);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsFeed).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsFeed, [{
    key: "render",
    value: function render() {
      var newsFeed = this.props.newsFeed;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: this.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Hacker News",
        description: "A Hacker News clone made with Next.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1524043499" + " " + "news-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("a", {
        href: newsFeed.url,
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, newsFeed.title)), __jsx("div", {
        className: "jsx-1524043499" + " " + "news-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, newsFeed.points, " points"), __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, newsFeed.comments_count, " comments"), __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, newsFeed.time_ago)), __jsx("main", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, newsFeed.comments.length > 0 ? __jsx(_components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        comments: newsFeed.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }) : __jsx("div", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "No comments for this story")), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1524043499",
        __self: this
      }, "main.jsx-1524043499{padding:1em;}.news-title.jsx-1524043499{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.news-title.jsx-1524043499 a.jsx-1524043499{color:#333;-webkit-text-decoration:none;text-decoration:none;}.news-title.jsx-1524043499 a.jsx-1524043499:hover{-webkit-text-decoration:underline;text-decoration:underline;}.news-details.jsx-1524043499{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.news-details.jsx-1524043499 strong.jsx-1524043499{margin-right:1em;}.news-details.jsx-1524043499 a.jsx-1524043499{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWVhZ2dhci9PZmZpY2lhbC9sZWFybmluZy9ybmQvcmVhY3Rqcy9yZWFjdC1oYWNrZXItbmV3cy13aXRoLW5leHRqcy9wYWdlcy9uZXdzZmVlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RDRCLEFBR3lCLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlUsQUFnQnZCLENBekJBLEtBR1csQUFhVSxBQU1yQixTQWxCa0IsVUFhMkIsTUFadEIsa0JBUXZCLENBSEEsRUFKQSxhQVlvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25lZWFnZ2FyL09mZmljaWFsL2xlYXJuaW5nL3JuZC9yZWFjdGpzL3JlYWN0LWhhY2tlci1uZXdzLXdpdGgtbmV4dGpzL3BhZ2VzL25ld3NmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZXMvRGVmYXVsdC9pbmRleCc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0dsb2JhbFN0eWxlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Zvb3Rlci9Gb290ZXInO1xuXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ29tbWVudHNMaXN0L0NvbW1lbnRzTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXEsIHJlcywgcXVlcnl9KSB7XG5cbiAgICAgICAgbGV0IG5ld3NGZWVkO1xuXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IG5ld3NJZCA9IHF1ZXJ5LmlkO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke25ld3NJZH1gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgbmV3c0ZlZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIG5ld3NGZWVkID0gbnVsbDtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7bmV3c0ZlZWR9O1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IG5ld3NGZWVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoaXMudGhlbWV9PlxuICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJIYWNrZXIgTmV3c1wiICBkZXNjcmlwdGlvbj1cIkEgSGFja2VyIE5ld3MgY2xvbmUgbWFkZSB3aXRoIE5leHQuanNcIj48L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmV3cy10aXRsZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj17bmV3c0ZlZWQudXJsfT57bmV3c0ZlZWQudGl0bGV9PC9hPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e25ld3NGZWVkLnBvaW50c30gcG9pbnRzPC9zdHJvbmc+XG4gICAgICAgICAgICA8c3Ryb25nPntuZXdzRmVlZC5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxzdHJvbmc+e25ld3NGZWVkLnRpbWVfYWdvfTwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtuZXdzRmVlZC5jb21tZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e25ld3NGZWVkLmNvbW1lbnRzfSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+Tm8gY29tbWVudHMgZm9yIHRoaXMgc3Rvcnk8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3cy10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXdzLXRpdGxlIGEge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXdzLXRpdGxlIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXdzLWRldGFpbHMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5ld3MtZGV0YWlscyBzdHJvbmcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXdzLWRldGFpbHMgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2Y2MDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cblxufSJdfQ== */\n/*@ sourceURL=/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js */"));
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
//# sourceMappingURL=newsfeed.js.09e571ca3b22c5737eb7.hot-update.js.map