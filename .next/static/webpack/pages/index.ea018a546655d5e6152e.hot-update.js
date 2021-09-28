"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWEwMThhNTQ2NjU1ZDVlNjE1MmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztBQUNwQ0UsRUFBQUEsSUFBSSxFQUFFLFNBRDhCO0FBRXBDQyxFQUFBQSxZQUFZLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBREcsR0FGc0I7QUFLcENDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLEtBQUQsRUFBVztBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxhQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNILEtBSks7QUFLTkcsSUFBQUEsU0FBUyxFQUFFLG1CQUFDSCxLQUFELEVBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlLENBQWY7QUFDSCxLQVBLO0FBUU5PLElBQUFBLGlCQUFpQixFQUFFLDJCQUFDSixLQUFELEVBQVFLLE1BQVIsRUFBbUI7QUFDbENMLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlUSxNQUFNLENBQUNDLE9BQXRCO0FBQ0g7QUFWSztBQUwwQixDQUFELENBQWhDO0FBbUJBLDRCQUFrRFosWUFBWSxDQUFDYSxPQUEvRDtBQUFBLElBQU9SLFNBQVAseUJBQU9BLFNBQVA7QUFBQSxJQUFrQkksU0FBbEIseUJBQWtCQSxTQUFsQjtBQUFBLElBQTZCQyxpQkFBN0IseUJBQTZCQSxpQkFBN0I7O0FBRVAsK0RBQWVWLFlBQVksQ0FBQ2MsT0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjb3VudGVyJyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxXG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7aW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50fSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY291bnRlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=