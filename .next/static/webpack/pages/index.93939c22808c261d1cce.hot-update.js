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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter),
      count = _useState[0],
      setCount = _useState[1];

  var daddy = liveCount();

  var incr = function incr() {
    _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.increment)());
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

_s(Home, "aia/jx5ThJ9WORHl5j5Xa2tsNVo=");

_c = Home;

function liveCount() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter),
      count = _useState2[0],
      setCount = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.subscribe(function (state) {
      console.log(state);
    });
  }, [_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store, setCount]);
  return count;
}

_s2(liveCount, "X90PW+VVD9ghURMWTgnDaok3u5A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM5MzljMjI4MDhjMjYxZDFjY2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixrQkFBMEJOLCtDQUFRLENBQUNHLGtFQUFBLEdBQWlCSyxPQUFsQixDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLE1BQU1DLEtBQUssR0FBR0MsU0FBUyxFQUF2Qjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCVixJQUFBQSxrRUFBQSxDQUFlQyxtRUFBUyxFQUF4QjtBQUNBTSxJQUFBQSxRQUFRLENBQUNQLGtFQUFBLEdBQWlCSyxPQUFsQixDQUFSO0FBQ0QsR0FIRDs7QUFNQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUssSUFBSSxFQUFWO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBQSw4QkFBY0osS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JOLFVBQUFBLGtFQUFBLENBQWVFLG1FQUFTLEVBQXhCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBVUU7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFBQ1UsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLHlEQUFaO0FBQW1CLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQTNCdUJHOztLQUFBQTs7QUE4QnhCLFNBQVNNLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkIsbUJBQTBCWiwrQ0FBUSxDQUFDRyxrRUFBQSxHQUFpQkssT0FBbEIsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQVgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RJLElBQUFBLG1FQUFBLENBQWdCLFVBQUNlLEtBQUQsRUFBVztBQUN6QkgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlQLENBQUNmLHlEQUFELEVBQVFPLFFBQVIsQ0FKTyxDQUFUO0FBS0EsU0FBT0QsS0FBUDtBQUNEOztJQVJRRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL3N0b3Jlcy9jb25maWd1cmVTdG9yZSdcbmltcG9ydCB7IGluY3JlbWVudCwgZGVjcmVtZW50IH0gZnJvbSBcIi4uL3N0b3Jlcy9yZWR1Y2Vycy9jb3VudGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKVxuICBjb25zdCBkYWRkeSA9IGxpdmVDb3VudCgpXG5cbiAgY29uc3QgaW5jciA9ICgpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoKSlcbiAgICBzZXRDb3VudChzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpXG4gIH1cblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbmNyKCl9XG4gICAgICAgID5pbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4+Y291bnQ6IHtjb3VudH08L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoKSlcbiAgICAgICAgICB9fVxuICAgICAgICA+ZGVjcmVtZW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2NvbnNvbGUubG9nKHN0b3JlKX19PmNsaWNrIG1lPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG4gICBcbiAgKVxufVxuXG5cbmZ1bmN0aW9uIGxpdmVDb3VudCgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgfSlcbiAgfSxbc3RvcmUsIHNldENvdW50XSlcbiAgcmV0dXJuIGNvdW50XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInN0b3JlIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiSG9tZSIsImdldFN0YXRlIiwiY291bnRlciIsImNvdW50Iiwic2V0Q291bnQiLCJkYWRkeSIsImxpdmVDb3VudCIsImluY3IiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzdWJzY3JpYmUiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=