"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var _stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/reducers/counter */ "./stores/reducers/counter.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/index.js";





function Home() {
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.selectCount);

  const incr = () => {
    _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.increment)());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: () => incr(),
        children: "increment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        children: ["count: ", count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: () => {
          _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_3__.decrement)());
        },
        children: "decrement"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: () => {
          console.log(_stores_configureStore__WEBPACK_IMPORTED_MODULE_2__.store);
        },
        children: "click me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nLy4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3N0b3Jlcy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9zdG9yZXMvY29uZmlndXJlU3RvcmUnXG5pbXBvcnQgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgc2VsZWN0Q291bnQgfSBmcm9tIFwiLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY291bnQgPSB1c2VTZWxlY3RvcihzZWxlY3RDb3VudClcblxuICBjb25zdCBpbmNyID0gKCkgPT4ge1xuICAgIHN0b3JlLmRpc3BhdGNoKGluY3JlbWVudCgpKVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5jcigpfVxuICAgICAgICA+aW5jcmVtZW50PC9idXR0b24+XG4gICAgICAgIDxzcGFuPmNvdW50OiB7Y291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZGVjcmVtZW50KCkpXG4gICAgICAgICAgfX1cbiAgICAgICAgPmRlY3JlbWVudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZyhzdG9yZSl9fT5jbGljayBtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgXG4gIClcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yb290UmVkdWNlclwiO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3Jvb3QnLFxuICAgIHN0b3JhZ2U6IHN0b3JhZ2Vcbn1cblxuXG5cbmNvbnN0IHBSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcik7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBSZWR1Y2VyKTtcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpOyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnY291bnRlcicsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlICs9MVxuICAgICAgICB9LFxuICAgICAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgLT0gMVxuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qge2luY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdENvdW50ID0gc3RhdGUgPT4gc3RhdGUuY291bnRlci52YWx1ZVxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXIiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBjb3VudGVyIGZyb20gJy4vcmVkdWNlcnMvY291bnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJzZWxlY3RDb3VudCIsIkhvbWUiLCJjb3VudCIsImluY3IiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTdG9yZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInJlZHVjZXIiLCJwZXJzaXN0Q29uZmlnIiwia2V5IiwicFJlZHVjZXIiLCJwZXJzaXN0b3IiLCJjcmVhdGVTbGljZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwic3RhdGUiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiY291bnRlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=