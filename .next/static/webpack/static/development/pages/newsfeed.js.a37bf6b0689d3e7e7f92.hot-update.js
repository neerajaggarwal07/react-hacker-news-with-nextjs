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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-3272933441" + " " + "news-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("a", {
        href: newsFeed.url,
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, newsFeed.title)), __jsx("div", {
        className: "jsx-3272933441" + " " + "news-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, newsFeed.points, " points"), __jsx("strong", {
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, newsFeed.comments_count, " comments"), __jsx("strong", {
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, newsFeed.time_ago)), __jsx("main", {
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, newsFeed.comments.length > 0 ? __jsx(_components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        comments: newsFeed.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }) : __jsx("div", {
        className: "jsx-3272933441",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "No comments for this story")), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3272933441",
        __self: this
      }, "main.jsx-3272933441{padding:1em;}.news-title.jsx-3272933441{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.news-title.jsx-3272933441 a.jsx-3272933441{color:#333;-webkit-text-decoration:none;text-decoration:none;}.news-title.jsx-3272933441 a.jsx-3272933441:hover{-webkit-text-decoration:underline;text-decoration:underline;}.news-details.jsx-3272933441{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.news-details.jsx-3272933441 strong.jsx-3272933441{margin-right:1em;}.news-details.jsx-3272933441 a.jsx-3272933441{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWVhZ2dhci9PZmZpY2lhbC9sZWFybmluZy9ybmQvcmVhY3Rqcy9yZWFjdC1oYWNrZXItbmV3cy13aXRoLW5leHRqcy9wYWdlcy9uZXdzZmVlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDRCLEFBR3FDLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlUsQUFnQnpCLENBekJBLEtBR2EsQUFhVSxBQU12QixTQWxCb0IsVUFhMkIsTUFadEIsa0JBUXpCLENBSEEsRUFKQSxhQVlzQixrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL25lZWFnZ2FyL09mZmljaWFsL2xlYXJuaW5nL3JuZC9yZWFjdGpzL3JlYWN0LWhhY2tlci1uZXdzLXdpdGgtbmV4dGpzL3BhZ2VzL25ld3NmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZXMvRGVmYXVsdC9pbmRleCc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0dsb2JhbFN0eWxlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Zvb3Rlci9Gb290ZXInO1xuXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ29tbWVudHNMaXN0L0NvbW1lbnRzTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxLCByZXMsIHF1ZXJ5fSkge1xuXG4gICAgICAgIGxldCBuZXdzRmVlZDtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBuZXdzSWQgPSBxdWVyeS5pZDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL2l0ZW0vJHtuZXdzSWR9YFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIG5ld3NGZWVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBuZXdzRmVlZCA9IG51bGw7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge25ld3NGZWVkfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBuZXdzRmVlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGlzLnRoZW1lfT5cbiAgICAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiSGFja2VyIE5ld3NcIiAgZGVzY3JpcHRpb249XCJBIEhhY2tlciBOZXdzIGNsb25lIG1hZGUgd2l0aCBOZXh0LmpzXCI+PC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5ld3MtdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e25ld3NGZWVkLnVybH0+e25ld3NGZWVkLnRpdGxlfTwvYT5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8c3Ryb25nPntuZXdzRmVlZC5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxuICAgICAgICAgICAgPHN0cm9uZz57bmV3c0ZlZWQuY29tbWVudHNfY291bnR9IGNvbW1lbnRzPC9zdHJvbmc+XG4gICAgICAgICAgICA8c3Ryb25nPntuZXdzRmVlZC50aW1lX2Fnb308L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7bmV3c0ZlZWQuY29tbWVudHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgPENvbW1lbnRMaXN0IGNvbW1lbnRzPXtuZXdzRmVlZC5jb21tZW50c30gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2Pk5vIGNvbW1lbnRzIGZvciB0aGlzIHN0b3J5PC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5ld3MtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5uZXdzLXRpdGxlIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5ld3MtdGl0bGUgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmV3cy1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5ld3MtZGV0YWlscyBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm5ld3MtZGV0YWlscyBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cblxufSJdfQ== */\n/*@ sourceURL=/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js */"));
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
//# sourceMappingURL=newsfeed.js.a37bf6b0689d3e7e7f92.hot-update.js.map