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
  return state.counter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZDBkNmEzZjVhOGM5MmQ1ODI0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztBQUNwQ0UsRUFBQUEsSUFBSSxFQUFFLFNBRDhCO0FBRXBDQyxFQUFBQSxZQUFZLEVBQUU7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBREcsR0FGc0I7QUFLcENDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUUsbUJBQUNDLEtBQUQsRUFBVztBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxhQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNILEtBSks7QUFLTkcsSUFBQUEsU0FBUyxFQUFFLG1CQUFDSCxLQUFELEVBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlLENBQWY7QUFDSCxLQVBLO0FBUU5PLElBQUFBLGlCQUFpQixFQUFFLDJCQUFDSixLQUFELEVBQVFLLE1BQVIsRUFBbUI7QUFDbENMLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixJQUFlUSxNQUFNLENBQUNDLE9BQXRCO0FBQ0g7QUFWSztBQUwwQixDQUFELENBQWhDO0FBbUJBLDRCQUFrRFosWUFBWSxDQUFDYSxPQUEvRDtBQUFBLElBQU9SLFNBQVAseUJBQU9BLFNBQVA7QUFBQSxJQUFrQkksU0FBbEIseUJBQWtCQSxTQUFsQjtBQUFBLElBQTZCQyxpQkFBN0IseUJBQTZCQSxpQkFBN0I7O0FBQ0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQVIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1MsT0FBVjtBQUFBLENBQXpCO0FBQ1AsK0RBQWVmLFlBQVksQ0FBQ2dCLE9BQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9yZWR1Y2Vycy9jb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnY291bnRlcicsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMVxuICAgICAgICB9LFxuICAgICAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgLT0gMVxuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qge2luY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdENvdW50ID0gc3RhdGUgPT4gc3RhdGUuY291bnRlclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJzZWxlY3RDb3VudCIsImNvdW50ZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==