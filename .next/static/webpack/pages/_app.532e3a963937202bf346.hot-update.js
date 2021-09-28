"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./stores/configureStore.js":
/*!**********************************!*\
  !*** ./stores/configureStore.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _counter_counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter/counterSlice */ "./stores/counter/counterSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__.default
};
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, counterSlice);

var persistedStore = function persistedStore() {
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(persistedReducer);
  var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);
  return {
    store: store,
    persistStore: redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore
  };
};

/* harmony default export */ __webpack_exports__["default"] = (persistedStore);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MzJlM2E5NjM5MzcyMDJiZjM0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUssYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxHQUFHLEVBQUUsTUFEYTtBQUVsQkgsRUFBQUEsT0FBTyxFQUFQQSw4REFBT0E7QUFGVyxDQUF0QjtBQUtBLElBQU1JLGdCQUFnQixHQUFHTCw2REFBYyxDQUFDRyxhQUFELEVBQWdCRyxZQUFoQixDQUF2Qzs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBSUMsS0FBSyxHQUFHVixrREFBVyxDQUFDTyxnQkFBRCxDQUF2QjtBQUNBLE1BQUlJLFNBQVMsR0FBR1YsMkRBQVksQ0FBQ1MsS0FBRCxDQUE1QjtBQUNBLFNBQU87QUFBQ0EsSUFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFULElBQUFBLFlBQVksRUFBWkEsdURBQVlBO0FBQXBCLEdBQVA7QUFDSCxDQUpEOztBQUtBLCtEQUFlUSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5cbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vY291bnRlci9jb3VudGVyU2xpY2VcIjtcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICBrZXk6ICdyb290JyxcbiAgICBzdG9yYWdlXG59XG5cbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCBjb3VudGVyU2xpY2UpXG5cbmNvbnN0IHBlcnNpc3RlZFN0b3JlID0gKCkgPT4ge1xuICAgIGxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIpXG4gICAgbGV0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcbiAgICByZXR1cm4ge3N0b3JlLCBwZXJzaXN0U3RvcmV9XG59XG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0ZWRTdG9yZTsiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJjb3VudGVyUmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwiY291bnRlclNsaWNlIiwicGVyc2lzdGVkU3RvcmUiLCJzdG9yZSIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=