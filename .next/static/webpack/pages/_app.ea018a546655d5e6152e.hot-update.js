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
/* harmony export */   "incrementByAmount": function() { return /* binding */ incrementByAmount; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYTAxOGE1NDY2NTVkNWU2MTUyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsWUFBWSxHQUFHRCw2REFBVyxDQUFDO0FBQ3BDRSxFQUFBQSxJQUFJLEVBQUUsU0FEOEI7QUFFcENDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFERyxHQUZzQjtBQUtwQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFNBQVMsRUFBRSxtQkFBQ0MsS0FBRCxFQUFXO0FBQ2xCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLGFBQU9BLEtBQUssR0FBRyxDQUFmO0FBQ0gsS0FKSztBQUtORyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNILEtBQUQsRUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWUsQ0FBZjtBQUNILEtBUEs7QUFRTk8sSUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNKLEtBQUQsRUFBUUssTUFBUixFQUFtQjtBQUNsQ0wsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWVRLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDSDtBQVZLO0FBTDBCLENBQUQsQ0FBaEM7QUFtQkEsNEJBQWtEWixZQUFZLENBQUNhLE9BQS9EO0FBQUEsSUFBT1IsU0FBUCx5QkFBT0EsU0FBUDtBQUFBLElBQWtCSSxTQUFsQix5QkFBa0JBLFNBQWxCO0FBQUEsSUFBNkJDLGlCQUE3Qix5QkFBNkJBLGlCQUE3Qjs7QUFFUCwrREFBZVYsWUFBWSxDQUFDYyxPQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZXMvcmVkdWNlcnMvY291bnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NvdW50ZXInLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICAgICAgfSxcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnR9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==