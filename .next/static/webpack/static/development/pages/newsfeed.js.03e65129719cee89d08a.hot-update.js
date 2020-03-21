webpackHotUpdate("static/development/pages/newsfeed.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


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
/* harmony import */ var _components_organisms_NewsFeeds_NewsFeedsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/organisms/NewsFeeds/NewsFeedsList */ "./components/organisms/NewsFeeds/NewsFeedsList.js");
/* harmony import */ var _components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/molecules/Header/Header */ "./components/molecules/Header/Header.js");
/* harmony import */ var _components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/molecules/Footer/Footer */ "./components/molecules/Footer/Footer.js");
/* harmony import */ var _components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/organisms/CommentsList/CommentsList */ "./components/organisms/CommentsList/CommentsList.js");






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
      }), __jsx(_components_molecules_Header_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Hacker News",
        description: "A Hacker News clone made with Next.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("main", {
        className: "jsx-2332383615",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, newsFeed.comments.length > 0 ? __jsx(_components_organisms_CommentsList_CommentsList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        comments: newsFeed.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }) : __jsx("div", {
        className: "jsx-2332383615",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "No comments for this story")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2332383615",
        __self: this
      }, "main.jsx-2332383615{padding:1em;}.story-title.jsx-2332383615{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-2332383615 a.jsx-2332383615{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2332383615 a.jsx-2332383615:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2332383615{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-2332383615 strong.jsx-2332383615{margin-right:1em;}.story-details.jsx-2332383615 a.jsx-2332383615{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWVhZ2dhci9PZmZpY2lhbC9sZWFybmluZy9ybmQvcmVhY3Rqcy9yZWFjdC1oYWNrZXItbmV3cy13aXRoLW5leHRqcy9wYWdlcy9uZXdzZmVlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3dCLEFBR3lCLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlUsQUFnQnZCLENBekJBLEtBR1csQUFhVSxBQU1yQixTQWxCa0IsVUFhMkIsTUFadEIsa0JBUXZCLENBSEEsRUFKQSxhQVlvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL25lZWFnZ2FyL09mZmljaWFsL2xlYXJuaW5nL3JuZC9yZWFjdGpzL3JlYWN0LWhhY2tlci1uZXdzLXdpdGgtbmV4dGpzL3BhZ2VzL25ld3NmZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZXMvRGVmYXVsdC9pbmRleCc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0dsb2JhbFN0eWxlcyc7XG5pbXBvcnQgTmV3c0ZlZWRzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OZXdzRmVlZHMvTmV3c0ZlZWRzTGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL21vbGVjdWxlcy9Gb290ZXIvRm9vdGVyJztcblxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0NvbW1lbnRzTGlzdC9Db21tZW50c0xpc3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c0ZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxLCByZXMsIHF1ZXJ5fSkge1xuXG4gICAgICAgIGxldCBuZXdzRmVlZDtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBuZXdzSWQgPSBxdWVyeS5pZDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL2l0ZW0vJHtuZXdzSWR9YFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIG5ld3NGZWVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBuZXdzRmVlZCA9IG51bGw7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge25ld3NGZWVkfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBuZXdzRmVlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGlzLnRoZW1lfT5cbiAgICAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiSGFja2VyIE5ld3NcIiAgZGVzY3JpcHRpb249XCJBIEhhY2tlciBOZXdzIGNsb25lIG1hZGUgd2l0aCBOZXh0LmpzXCI+PC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAge25ld3NGZWVkLmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17bmV3c0ZlZWQuY29tbWVudHN9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5ObyBjb21tZW50cyBmb3IgdGhpcyBzdG9yeTwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0b3J5LWRldGFpbHMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0b3J5LWRldGFpbHMgc3Ryb25nIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciBwYWdlPXtwYWdlfT48L0Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cblxufSJdfQ== */\n/*@ sourceURL=/Users/neeaggar/Official/learning/rnd/reactjs/react-hacker-news-with-nextjs/pages/newsfeed.js */"), __jsx(_components_molecules_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
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
//# sourceMappingURL=newsfeed.js.03e65129719cee89d08a.hot-update.js.map