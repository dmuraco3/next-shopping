"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var _stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/reducers/counter */ "./stores/reducers/counter.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/index.js",
    _s = $RefreshSig$();






function Home(props, _ref) {
  _s();

  var state = _ref.state;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter),
      count = _useState[0],
      setCount = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(state);
  }, [state]);

  var incr = function incr() {
    _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.increment)());
    setCount(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter);
    console.log(props);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          return incr();
        },
        children: "increment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.decrement)());
        },
        children: "decrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store);
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Home, "X90PW+VVD9ghURMWTgnDaok3u5A=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI5ZjQ0N2Y2YjQxMmNkODRiYmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTyxJQUFULENBQWNDLEtBQWQsUUFBK0I7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQzVDLGtCQUEwQlIsK0NBQVEsQ0FBQ0csa0VBQUEsR0FBaUJPLE9BQWxCLENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0FiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkYyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxLQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCWixJQUFBQSxrRUFBQSxDQUFlQyxtRUFBUyxFQUF4QjtBQUNBUSxJQUFBQSxRQUFRLENBQUNULGtFQUFBLEdBQWlCTyxPQUFsQixDQUFSO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFaO0FBQ0QsR0FKRDs7QUFPQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVEsSUFBSSxFQUFWO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBQSw4QkFBY0osS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JSLFVBQUFBLGtFQUFBLENBQWVFLG1FQUFTLEVBQXhCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBVUU7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFBQ1EsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLHlEQUFaO0FBQW1CLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQTlCdUJHOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL3N0b3Jlcy9jb25maWd1cmVTdG9yZSdcbmltcG9ydCB7IGluY3JlbWVudCwgZGVjcmVtZW50IH0gZnJvbSBcIi4uL3N0b3Jlcy9yZWR1Y2Vycy9jb3VudGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMsIHtzdGF0ZSB9KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICB9LCBbc3RhdGVdKVxuXG4gIGNvbnN0IGluY3IgPSAoKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KCkpXG4gICAgc2V0Q291bnQoc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKVxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5jcigpfVxuICAgICAgICA+aW5jcmVtZW50PC9idXR0b24+XG4gICAgICAgIDxzcGFuPmNvdW50OiB7Y291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZGVjcmVtZW50KCkpXG4gICAgICAgICAgfX1cbiAgICAgICAgPmRlY3JlbWVudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZyhzdG9yZSl9fT5jbGljayBtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgXG4gIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJIb21lIiwicHJvcHMiLCJzdGF0ZSIsImdldFN0YXRlIiwiY291bnRlciIsImNvdW50Iiwic2V0Q291bnQiLCJjb25zb2xlIiwibG9nIiwiaW5jciIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==