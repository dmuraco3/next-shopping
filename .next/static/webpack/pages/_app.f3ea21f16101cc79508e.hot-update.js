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
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, _counter_counterSlice__WEBPACK_IMPORTED_MODULE_2__.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mM2VhMjFmMTYxMDFjYzc5NTA4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUssYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxHQUFHLEVBQUUsTUFEYTtBQUVsQkgsRUFBQUEsT0FBTyxFQUFQQSw4REFBT0E7QUFGVyxDQUF0QjtBQUtBLElBQU1JLGdCQUFnQixHQUFHTCw2REFBYyxDQUFDRyxhQUFELEVBQWdCRCwwREFBaEIsQ0FBdkM7O0FBRUEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLE1BQUlDLEtBQUssR0FBR1Qsa0RBQVcsQ0FBQ08sZ0JBQUQsQ0FBdkI7QUFDQSxNQUFJRyxTQUFTLEdBQUdULDJEQUFZLENBQUNRLEtBQUQsQ0FBNUI7QUFDQSxTQUFPO0FBQUNBLElBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRUixJQUFBQSxZQUFZLEVBQVpBLHVEQUFZQTtBQUFwQixHQUFQO0FBQ0gsQ0FKRDs7QUFLQSwrREFBZU8sY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZXMvY29uZmlndXJlU3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xuaW1wb3J0IGNvdW50ZXJTbGljZSBmcm9tIFwiLi9jb3VudGVyL2NvdW50ZXJTbGljZVwiO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3Jvb3QnLFxuICAgIHN0b3JhZ2Vcbn1cblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvdW50ZXJTbGljZSlcblxuY29uc3QgcGVyc2lzdGVkU3RvcmUgPSAoKSA9PiB7XG4gICAgbGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlcilcbiAgICBsZXQgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKVxuICAgIHJldHVybiB7c3RvcmUsIHBlcnNpc3RTdG9yZX1cbn1cbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RlZFN0b3JlOyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsImNvdW50ZXJTbGljZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdGVkU3RvcmUiLCJzdG9yZSIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=