"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./stores/reducers/counter.js":
/*!************************************!*\
  !*** ./stores/reducers/counter.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterSlice": function() { return /* binding */ counterSlice; },
/* harmony export */   "increment": function() { return /* binding */ increment; },
/* harmony export */   "decrement": function() { return /* binding */ decrement; },
/* harmony export */   "incrementByAmount": function() { return /* binding */ incrementByAmount; },
/* harmony export */   "selectCount": function() { return /* binding */ selectCount; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: function increment(state) {
      console.log(state);
      state.value += 1;
      return state + 1;
    },
    decrement: function decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});
var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    incrementByAmount = _counterSlice$actions.incrementByAmount;

var selectCount = function selectCount(state) {
  return state.counter.value;
};
/* harmony default export */ __webpack_exports__["default"] = (counterSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MzNjZjkyOThhMmIxNjVlN2ZiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztBQUNwQ0UsRUFBQUEsSUFBSSxFQUFFLFNBRDhCO0FBRXBDQyxFQUFBQSxZQUFZLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBREcsR0FGc0I7QUFLcENDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLEtBQUQsRUFBVztBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUEsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWMsQ0FBZDtBQUNBLGFBQU9HLEtBQUssR0FBRyxDQUFmO0FBQ0gsS0FMSztBQU1ORyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNILEtBQUQsRUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWUsQ0FBZjtBQUNILEtBUks7QUFTTk8sSUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNKLEtBQUQsRUFBUUssTUFBUixFQUFtQjtBQUNsQ0wsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWVRLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDSDtBQVhLO0FBTDBCLENBQUQsQ0FBaEM7QUFvQkEsNEJBQWtEWixZQUFZLENBQUNhLE9BQS9EO0FBQUEsSUFBT1IsU0FBUCx5QkFBT0EsU0FBUDtBQUFBLElBQWtCSSxTQUFsQix5QkFBa0JBLFNBQWxCO0FBQUEsSUFBNkJDLGlCQUE3Qix5QkFBNkJBLGlCQUE3Qjs7QUFDQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUyxPQUFOLENBQWNaLEtBQWxCO0FBQUEsQ0FBekI7QUFDUCwrREFBZUgsWUFBWSxDQUFDZ0IsT0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjb3VudGVyJyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPTFcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICAgICAgfSxcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnR9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IHN0YXRlID0+IHN0YXRlLmNvdW50ZXIudmFsdWVcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY291bnRlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0Q291bnQiLCJjb3VudGVyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=