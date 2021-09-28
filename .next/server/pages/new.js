"use strict";
(() => {
var exports = {};
exports.id = "pages/new";
exports.ids = ["pages/new"];
exports.modules = {

/***/ "./pages/new/index.js":
/*!****************************!*\
  !*** ./pages/new/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ New)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/reducers/counter */ "./stores/reducers/counter.js");
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/new/index.js";





function New() {
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_1__.selectCount);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "shop new"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./stores/configureStore.js":
/*!**********************************!*\
  !*** ./stores/configureStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "persistor": () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./stores/rootReducer.js");




const persistConfig = {
  key: 'root',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default())
};
const pReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_3__.default);
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(pReducer);
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);

/***/ }),

/***/ "./stores/reducers/counter.js":
/*!************************************!*\
  !*** ./stores/reducers/counter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterSlice": () => (/* binding */ counterSlice),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "incrementByAmount": () => (/* binding */ incrementByAmount),
/* harmony export */   "selectCount": () => (/* binding */ selectCount),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});
const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions;
const selectCount = state => state.counter.value;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);

/***/ }),

/***/ "./stores/rootReducer.js":
/*!*******************************!*\
  !*** ./stores/rootReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/counter */ "./stores/reducers/counter.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_1__.default
}));

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/new/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbmV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU00sR0FBVCxHQUFlO0FBQzFCLFFBQU1DLEtBQUssR0FBR1Asd0RBQVcsQ0FBQ0ksaUVBQUQsQ0FBekI7QUFDQSxRQUFNSSxRQUFRLEdBQUdQLHdEQUFXLEVBQTVCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUFBLDhCQUFjTSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBUUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1PLGFBQWEsR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFLE1BRGE7QUFFbEJILEVBQUFBLE9BQU8sRUFBRUEsa0VBQU9BO0FBRkUsQ0FBdEI7QUFPQSxNQUFNSSxRQUFRLEdBQUdMLDZEQUFjLENBQUNHLGFBQUQsRUFBZ0JELGlEQUFoQixDQUEvQjtBQUVPLE1BQU1SLEtBQUssR0FBR0ksa0RBQVcsQ0FBQ08sUUFBRCxDQUF6QjtBQUNBLE1BQU1DLFNBQVMsR0FBR1AsMkRBQVksQ0FBQ0wsS0FBRCxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJQO0FBRU8sTUFBTWMsWUFBWSxHQUFHRCw2REFBVyxDQUFDO0FBQ3BDRSxFQUFBQSxJQUFJLEVBQUUsU0FEOEI7QUFFcENDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFERyxHQUZzQjtBQUtwQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ05yQixJQUFBQSxTQUFTLEVBQUdzQixLQUFELElBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0YsS0FBTixJQUFjLENBQWQ7QUFDSCxLQUhLO0FBSU5uQixJQUFBQSxTQUFTLEVBQUdxQixLQUFELElBQVc7QUFDbEJBLE1BQUFBLEtBQUssQ0FBQ0YsS0FBTixJQUFlLENBQWY7QUFDSCxLQU5LO0FBT05HLElBQUFBLGlCQUFpQixFQUFFLENBQUNELEtBQUQsRUFBUUUsTUFBUixLQUFtQjtBQUNsQ0YsTUFBQUEsS0FBSyxDQUFDRixLQUFOLElBQWVJLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDSDtBQVRLO0FBTDBCLENBQUQsQ0FBaEM7QUFrQkEsTUFBTTtBQUFDekIsRUFBQUEsU0FBRDtBQUFZQyxFQUFBQSxTQUFaO0FBQXVCc0IsRUFBQUE7QUFBdkIsSUFBNENOLFlBQVksQ0FBQ1MsT0FBL0Q7QUFDQSxNQUFNeEIsV0FBVyxHQUFHb0IsS0FBSyxJQUFJQSxLQUFLLENBQUNLLE9BQU4sQ0FBY1AsS0FBM0M7QUFDUCxpRUFBZUgsWUFBWSxDQUFDTixPQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUVBLGlFQUFlaUIsc0RBQWUsQ0FBQztBQUMzQkQsRUFBQUEsT0FBT0Esd0RBQUFBO0FBRG9CLENBQUQsQ0FBOUI7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nLy4vcGFnZXMvbmV3L2luZGV4LmpzIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvLi9zdG9yZXMvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3N0b3Jlcy9yZWR1Y2Vycy9jb3VudGVyLmpzIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvLi9zdG9yZXMvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQge2luY3JlbWVudCwgZGVjcmVtZW50LCBzZWxlY3RDb3VudH0gZnJvbSAnLi4vLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXInXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3KCkge1xuICAgIGNvbnN0IGNvdW50ID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q291bnQpXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgcmV0dXJuICggXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+c2hvcCBuZXc8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5jb3VudDoge2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcm9vdFJlZHVjZXJcIjtcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICBrZXk6ICdyb290JyxcbiAgICBzdG9yYWdlOiBzdG9yYWdlXG59XG5cblxuXG5jb25zdCBwUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwUmVkdWNlcik7XG5leHBvcnQgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NvdW50ZXInLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPTFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICAgICAgfSxcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnR9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IHN0YXRlID0+IHN0YXRlLmNvdW50ZXIudmFsdWVcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgY291bnRlciBmcm9tICcuL3JlZHVjZXJzL2NvdW50ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJzZWxlY3RDb3VudCIsInN0b3JlIiwiTmV3IiwiY291bnQiLCJkaXNwYXRjaCIsImNyZWF0ZVN0b3JlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yYWdlIiwicmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwUmVkdWNlciIsInBlcnNpc3RvciIsImNyZWF0ZVNsaWNlIiwiY291bnRlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJzdGF0ZSIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJjb3VudGVyIiwiY29tYmluZVJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==