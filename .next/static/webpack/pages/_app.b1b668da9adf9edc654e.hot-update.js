"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./stores/configureStore.js":
/*!**********************************!*\
  !*** ./stores/configureStore.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "persistor": function() { return /* binding */ persistor; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./stores/rootReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__.default
};
var pReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(pReducer);
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMWI2NjhkYTlhZGY5ZWRjNjU0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1LLGFBQWEsR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFLE1BRGE7QUFFbEJILEVBQUFBLE9BQU8sRUFBRUEsOERBQU9BO0FBRkUsQ0FBdEI7QUFLQSxJQUFNSSxRQUFRLEdBQUdMLDZEQUFjLENBQUNHLGFBQUQsRUFBZ0JHLFdBQWhCLENBQS9CO0FBRU8sSUFBTUMsS0FBSyxHQUFHVCxrREFBVyxDQUFDTyxRQUFELENBQXpCO0FBQ0EsSUFBTUcsU0FBUyxHQUFHVCwyREFBWSxDQUFDUSxLQUFELENBQTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yb290UmVkdWNlclwiO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3Jvb3QnLFxuICAgIHN0b3JhZ2U6IHN0b3JhZ2Vcbn1cblxuY29uc3QgcFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBSZWR1Y2VyKTtcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpOyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInJlZHVjZXIiLCJwZXJzaXN0Q29uZmlnIiwia2V5IiwicFJlZHVjZXIiLCJyb290UmVkdWNlciIsInN0b3JlIiwicGVyc2lzdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==