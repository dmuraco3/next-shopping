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
      state.value += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hOGI4ODMyZGIzOGY5YjI1NDZmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztBQUNwQ0UsRUFBQUEsSUFBSSxFQUFFLFNBRDhCO0FBRXBDQyxFQUFBQSxZQUFZLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBREcsR0FGc0I7QUFLcENDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLEtBQUQsRUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWMsQ0FBZDtBQUNILEtBSEs7QUFJTkksSUFBQUEsU0FBUyxFQUFFLG1CQUFDRCxLQUFELEVBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlLENBQWY7QUFDSCxLQU5LO0FBT05LLElBQUFBLGlCQUFpQixFQUFFLDJCQUFDRixLQUFELEVBQVFHLE1BQVIsRUFBbUI7QUFDbENILE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlTSxNQUFNLENBQUNDLE9BQXRCO0FBQ0g7QUFUSztBQUwwQixDQUFELENBQWhDO0FBa0JBLDRCQUFrRFYsWUFBWSxDQUFDVyxPQUEvRDtBQUFBLElBQU9OLFNBQVAseUJBQU9BLFNBQVA7QUFBQSxJQUFrQkUsU0FBbEIseUJBQWtCQSxTQUFsQjtBQUFBLElBQTZCQyxpQkFBN0IseUJBQTZCQSxpQkFBN0I7O0FBQ0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ08sT0FBTixDQUFjVixLQUFsQjtBQUFBLENBQXpCO0FBQ1AsK0RBQWVILFlBQVksQ0FBQ2MsT0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjb3VudGVyJyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0xXG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7aW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50fSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnQgPSBzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwiaW5jcmVtZW50Iiwic3RhdGUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0Q291bnQiLCJjb3VudGVyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=