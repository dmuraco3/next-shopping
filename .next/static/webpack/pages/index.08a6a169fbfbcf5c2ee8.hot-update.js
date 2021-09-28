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






function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter),
      count = _useState[0],
      setCount = _useState[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var incr = function incr() {
    console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.increment)()));
    setCount(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter);
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
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.decrement)());
        },
        children: "decrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store);
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(Home, "z+FpmjaZuNCUeTAYzM76zMpGN7o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhhNmExNjlmYmZiY2Y1YzJlZTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLGtCQUEwQk4sK0NBQVEsQ0FBQ0csa0VBQUEsR0FBaUJLLE9BQWxCLENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHVCx3REFBVyxFQUE1Qjs7QUFFQSxNQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsa0VBQUEsQ0FBZUMsbUVBQVMsRUFBeEIsQ0FBWjtBQUNBTSxJQUFBQSxRQUFRLENBQUNQLGtFQUFBLEdBQWlCSyxPQUFsQixDQUFSO0FBQ0QsR0FIRDs7QUFNQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUksSUFBSSxFQUFWO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBQSw4QkFBY0gsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JOLFVBQUFBLGtFQUFBLENBQWVFLG1FQUFTLEVBQXhCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBVUU7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFBQ1EsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLHlEQUFaO0FBQW1CLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQTNCdUJHO1VBRUxKOzs7S0FGS0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQgfSBmcm9tIFwiLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IGluY3IgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KCkpKVxuICAgIHNldENvdW50KHN0b3JlLmdldFN0YXRlKCkuY291bnRlcilcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGluY3IoKX1cbiAgICAgICAgPmluY3JlbWVudDwvYnV0dG9uPlxuICAgICAgICA8c3Bhbj5jb3VudDoge2NvdW50fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgpKVxuICAgICAgICAgIH19XG4gICAgICAgID5kZWNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7Y29uc29sZS5sb2coc3RvcmUpfX0+Y2xpY2sgbWU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiBcbiAgIFxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJIb21lIiwiZ2V0U3RhdGUiLCJjb3VudGVyIiwiY291bnQiLCJzZXRDb3VudCIsImRpc3BhdGNoIiwiaW5jciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9