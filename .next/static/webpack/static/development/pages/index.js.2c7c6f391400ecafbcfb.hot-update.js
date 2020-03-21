webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/themes/Default/index */ "./styles/themes/Default/index.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles/index.js");
/* harmony import */ var _components_organisms_NewsFeeds_NewsFeedsList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/organisms/NewsFeeds/NewsFeedsList */ "./components/organisms/NewsFeeds/NewsFeedsList.js");
/* harmony import */ var _components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/molecules/Header/Header */ "./components/molecules/Header/Header.js");
/* harmony import */ var _components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/molecules/Footer/Footer */ "./components/molecules/Footer/Footer.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;









var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.theme = _styles_themes_Default_index__WEBPACK_IMPORTED_MODULE_9__["default"];
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          news = _this$props.news,
          page = _this$props.page;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: this.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Hacker News",
        description: "A Hacker News clone made with Next.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), news.length ? __jsx(_components_organisms_NewsFeeds_NewsFeedsList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        itemsList: news,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }) : __jsx(next_error__WEBPACK_IMPORTED_MODULE_14___default.a, {
        statusCode: 503,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, res, query, news, _page, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, res = _ref.res, query = _ref.query;
              _context.prev = 1;
              _page = Number(query.page) || 1;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()("https://node-hnapi.herokuapp.com/news?page=".concat(_page)));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 8:
              news = _context.sent;
              console.log(news);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              news = [];

            case 16:
              return _context.abrupt("return", {
                news: news,
                page: page
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 12]], Promise);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2c7c6f391400ecafbcfb.hot-update.js.map