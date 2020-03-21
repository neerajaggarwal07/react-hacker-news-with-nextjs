webpackHotUpdate("static/development/pages/newsfeed.js",{

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
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constants/labels */ "./constants/labels.js");






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
          lineNumber: 37
        },
        __self: this
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Hacker News",
        description: "A Hacker News clone made with Next.js",
        backButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1524043499" + " " + "news-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        href: newsFeed.url,
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, newsFeed.title)), __jsx("div", {
        className: "jsx-1524043499" + " " + "news-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, newsFeed.points, " points"), __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, newsFeed.comments_count, " comments"), __jsx("strong", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, newsFeed.time_ago)), __jsx("main", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, newsFeed.comments.length > 0 ? __jsx(_components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        comments: newsFeed.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }) : __jsx("div", {
        className: "jsx-1524043499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, _constants_labels__WEBPACK_IMPORTED_MODULE_15__["default"].NO_COMMENT)), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1524043499",
        __self: this
      }, "main.jsx-1524043499{padding:1em;}.news-title.jsx-1524043499{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.news-title.jsx-1524043499 a.jsx-1524043499{color:#333;-webkit-text-decoration:none;text-decoration:none;}.news-title.jsx-1524043499 a.jsx-1524043499:hover{-webkit-text-decoration:underline;text-decoration:underline;}.news-details.jsx-1524043499{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.news-details.jsx-1524043499 strong.jsx-1524043499{margin-right:1em;}.news-details.jsx-1524043499 a.jsx-1524043499{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWVhZ2dhci9PZmZpY2lhbC9sZWFybmluZy9ybmQvcmVhY3Rqcy9yZWFjdC1oYWNrZXItbmV3cy13aXRoLW5leHRqcy9wYWdlcy9uZXdzZmVlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RG9CLEFBR3lCLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlUsQUFnQnZCLENBekJBLEtBR1csQUFhVSxBQU1yQixTQWxCa0IsVUFhMkIsTUFadEIsa0JBUXZCLENBSEEsRUFKQSxhQVlvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25lZWFnZ2FyL09mZmljaWFsL2xlYXJuaW5nL3JuZC9yZWFjdGpzL3JlYWN0LWhhY2tlci1uZXdzLXdpdGgtbmV4dGpzL3BhZ2VzL25ld3NmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZXMvRGVmYXVsdC9pbmRleFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Zvb3Rlci9Gb290ZXJcIjtcblxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Db21tZW50c0xpc3QvQ29tbWVudHNMaXN0XCI7XG5pbXBvcnQgTEFCRUxTIGZyb20gJy4uL2NvbnN0YW50cy9sYWJlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgICBsZXQgbmV3c0ZlZWQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3c0lkID0gcXVlcnkuaWQ7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke25ld3NJZH1gXG4gICAgICApO1xuXG4gICAgICBuZXdzRmVlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgbmV3c0ZlZWQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geyBuZXdzRmVlZCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmV3c0ZlZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGlzLnRoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICB0aXRsZT1cIkhhY2tlciBOZXdzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgSGFja2VyIE5ld3MgY2xvbmUgbWFkZSB3aXRoIE5leHQuanNcIlxuICAgICAgICAgIGJhY2tCdXR0b25cbiAgICAgICAgPjwvSGVhZGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmV3cy10aXRsZVwiPlxuICAgICAgICAgIDxhIGhyZWY9e25ld3NGZWVkLnVybH0+e25ld3NGZWVkLnRpdGxlfTwvYT5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWRldGFpbHNcIj5cbiAgICAgICAgICA8c3Ryb25nPntuZXdzRmVlZC5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxuICAgICAgICAgIDxzdHJvbmc+e25ld3NGZWVkLmNvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxuICAgICAgICAgIDxzdHJvbmc+e25ld3NGZWVkLnRpbWVfYWdvfTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAge25ld3NGZWVkLmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e25ld3NGZWVkLmNvbW1lbnRzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PntMQUJFTFMuIE5PX0NPTU1FTlR9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5ld3MtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3cy10aXRsZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3cy10aXRsZSBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3cy1kZXRhaWxzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXdzLWRldGFpbHMgc3Ryb25nIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3cy1kZXRhaWxzIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmNjA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js */"));
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
//# sourceMappingURL=newsfeed.js.d3f658c28156bc52bb26.hot-update.js.map