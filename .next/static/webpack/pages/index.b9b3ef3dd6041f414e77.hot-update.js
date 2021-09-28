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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var _stores_reducers_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/reducers/counter */ "./stores/reducers/counter.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/index.js",
    _s = $RefreshSig$();





function Home() {
  _s();

  var count = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.counter.value;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: function onClick() {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_1__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_2__.increment)());
        },
        children: "increment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: function onClick() {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_1__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_2__.decrement)());
        },
        children: "decrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: function onClick() {
          console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_1__.store);
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(Home, "Hx8ZS0E5Jr/6DPTYqq8Q1lSknko=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjliM2VmM2RkNjA0MWY0MTRlNzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNlLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsS0FBSyxHQUFHTix3REFBVyxDQUFDLFVBQUNPLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsS0FBekI7QUFBQSxHQUFELENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHVCx3REFBVyxFQUE1QjtBQUdBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiQyxVQUFBQSxrRUFBQSxDQUFlQyxtRUFBUyxFQUF4QjtBQUNELFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsOEJBQWNHLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiSixVQUFBQSxrRUFBQSxDQUFlRSxtRUFBUyxFQUF4QjtBQUNELFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVlFO0FBQVEsZUFBTyxFQUFFLG1CQUFNO0FBQUNPLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVix5REFBWjtBQUFtQixTQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0F4QnVCRztVQUNSTCxzREFDR0M7OztLQUZLSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQgfSBmcm9tIFwiLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGluY3JlbWVudCgpKVxuICAgICAgICAgIH19XG4gICAgICAgID5pbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4+Y291bnQ6IHtjb3VudH08L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoKSlcbiAgICAgICAgICB9fVxuICAgICAgICA+ZGVjcmVtZW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2NvbnNvbGUubG9nKHN0b3JlKX19PmNsaWNrIG1lPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG4gICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzdG9yZSIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIkhvbWUiLCJjb3VudCIsInN0YXRlIiwiY291bnRlciIsInZhbHVlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==