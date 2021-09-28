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
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var incr = function incr() {
    console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.increment)()));
    setCount(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.getState().counter);
    console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store);
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
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.decrement)());
        },
        children: "decrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: function onClick() {
          console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store);
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Home, "z+FpmjaZuNCUeTAYzM76zMpGN7o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzFmMTU2OGM3YjkzYTVmMDg5ODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixrQkFBMEJOLCtDQUFRLENBQUNHLGtFQUFBLEdBQWlCSyxPQUFsQixDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLE1BQU1DLEtBQUssR0FBR0MsU0FBUyxFQUF2QjtBQUNBLE1BQU1DLFFBQVEsR0FBR1gsd0RBQVcsRUFBNUI7O0FBRUEsTUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLGtFQUFBLENBQWVDLG1FQUFTLEVBQXhCLENBQVo7QUFDQU0sSUFBQUEsUUFBUSxDQUFDUCxrRUFBQSxHQUFpQkssT0FBbEIsQ0FBUjtBQUNBTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIseURBQVo7QUFDRCxHQUpEOztBQU9BLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUNFLGVBQU8sRUFBRTtBQUFBLGlCQUFNVyxJQUFJLEVBQVY7QUFBQSxTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDhCQUFjTCxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFDRSxlQUFPLEVBQUUsbUJBQU07QUFDYk4sVUFBQUEsa0VBQUEsQ0FBZUUsbUVBQVMsRUFBeEI7QUFDRCxTQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUFRLGVBQU8sRUFBRSxtQkFBTTtBQUFDVSxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIseURBQVo7QUFBbUIsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBN0J1Qkc7VUFHTEo7OztLQUhLSTs7QUFnQ3hCLFNBQVNNLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkIsbUJBQTBCWiwrQ0FBUSxDQUFDRyxrRUFBQSxHQUFpQkssT0FBbEIsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQVgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RJLElBQUFBLG1FQUFBLENBQWdCLFVBQUNlLEtBQUQsRUFBVztBQUN6QkgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlQLENBQUNmLHlEQUFELEVBQVFPLFFBQVIsQ0FKTyxDQUFUO0FBS0Q7O0lBUFFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQgfSBmcm9tIFwiLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpXG4gIGNvbnN0IGRhZGR5ID0gbGl2ZUNvdW50KClcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgaW5jciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoKSkpXG4gICAgc2V0Q291bnQoc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKVxuICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5jcigpfVxuICAgICAgICA+aW5jcmVtZW50PC9idXR0b24+XG4gICAgICAgIDxzcGFuPmNvdW50OiB7Y291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZGVjcmVtZW50KCkpXG4gICAgICAgICAgfX1cbiAgICAgICAgPmRlY3JlbWVudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZyhzdG9yZSl9fT5jbGljayBtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgXG4gIClcbn1cblxuXG5mdW5jdGlvbiBsaXZlQ291bnQoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIH0pXG4gIH0sW3N0b3JlLCBzZXRDb3VudF0pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInN0b3JlIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiSG9tZSIsImdldFN0YXRlIiwiY291bnRlciIsImNvdW50Iiwic2V0Q291bnQiLCJkYWRkeSIsImxpdmVDb3VudCIsImRpc3BhdGNoIiwiaW5jciIsImNvbnNvbGUiLCJsb2ciLCJzdWJzY3JpYmUiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=