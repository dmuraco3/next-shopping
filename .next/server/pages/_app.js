(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/navbar/index.js":
/*!************************************!*\
  !*** ./components/navbar/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/components/navbar/index.js";

function Navbar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "this is a navbar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _stores_configureStore__WEBPACK_IMPORTED_MODULE_4__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {
      persistor: _stores_configureStore__WEBPACK_IMPORTED_MODULE_4__.persistor,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./stores/configureStore.js":
/*!**********************************!*\
  !*** ./stores/configureStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxNQUFULEdBQWtCO0FBQzdCLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFSix5REFBakI7QUFBQSwyQkFDRSw4REFBQyx3RUFBRDtBQUFhLGVBQVMsRUFBRUMsNkRBQXhCO0FBQUEsOEJBQ0EsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUEsOERBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTVEsYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxHQUFHLEVBQUUsTUFEYTtBQUVsQkgsRUFBQUEsT0FBTyxFQUFFQSxrRUFBT0E7QUFGRSxDQUF0QjtBQU9BLE1BQU1JLFFBQVEsR0FBR0wsNkRBQWMsQ0FBQ0csYUFBRCxFQUFnQkQsaURBQWhCLENBQS9CO0FBRU8sTUFBTVQsS0FBSyxHQUFHSyxrREFBVyxDQUFDTyxRQUFELENBQXpCO0FBQ0EsTUFBTVgsU0FBUyxHQUFHSywyREFBWSxDQUFDTixLQUFELENBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJQO0FBRU8sTUFBTWMsWUFBWSxHQUFHRCw2REFBVyxDQUFDO0FBQ3BDRSxFQUFBQSxJQUFJLEVBQUUsU0FEOEI7QUFFcENDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFERyxHQUZzQjtBQUtwQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFNBQVMsRUFBR0MsS0FBRCxJQUFXO0FBQ2xCQSxNQUFBQSxLQUFLLENBQUNILEtBQU4sSUFBYyxDQUFkO0FBQ0gsS0FISztBQUlOSSxJQUFBQSxTQUFTLEVBQUdELEtBQUQsSUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDSCxLQUFOLElBQWUsQ0FBZjtBQUNILEtBTks7QUFPTkssSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQ0YsS0FBRCxFQUFRRyxNQUFSLEtBQW1CO0FBQ2xDSCxNQUFBQSxLQUFLLENBQUNILEtBQU4sSUFBZU0sTUFBTSxDQUFDQyxPQUF0QjtBQUNIO0FBVEs7QUFMMEIsQ0FBRCxDQUFoQztBQWtCQSxNQUFNO0FBQUNMLEVBQUFBLFNBQUQ7QUFBWUUsRUFBQUEsU0FBWjtBQUF1QkMsRUFBQUE7QUFBdkIsSUFBNENSLFlBQVksQ0FBQ1csT0FBL0Q7QUFDQSxNQUFNQyxXQUFXLEdBQUdOLEtBQUssSUFBSUEsS0FBSyxDQUFDTyxPQUFOLENBQWNWLEtBQTNDO0FBQ1AsaUVBQWVILFlBQVksQ0FBQ0wsT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBRUEsaUVBQWVtQixzREFBZSxDQUFDO0FBQzNCRCxFQUFBQSxPQUFPQSx3REFBQUE7QUFEb0IsQ0FBRCxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nLy4vY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nLy4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy8uL3N0b3Jlcy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0LXNob3BwaW5nL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL25leHQtc2hvcHBpbmcvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1zaG9wcGluZy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT50aGlzIGlzIGEgbmF2YmFyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcbmltcG9ydCB7c3RvcmUsIHBlcnNpc3RvciB9IGZyb20gJy4uL3N0b3Jlcy9jb25maWd1cmVTdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cblxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiAncm9vdCcsXG4gICAgc3RvcmFnZTogc3RvcmFnZVxufVxuXG5cblxuY29uc3QgcFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocFJlZHVjZXIpO1xuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjb3VudGVyJyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0xXG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7aW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50fSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnQgPSBzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU2xpY2UucmVkdWNlciIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9yZWR1Y2Vycy9jb3VudGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7Il0sIm5hbWVzIjpbIk5hdmJhciIsIlByb3ZpZGVyIiwiUGVyc2lzdEdhdGUiLCJzdG9yZSIsInBlcnNpc3RvciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3JlYXRlU3RvcmUiLCJwZXJzaXN0U3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJyZWR1Y2VyIiwicGVyc2lzdENvbmZpZyIsImtleSIsInBSZWR1Y2VyIiwiY3JlYXRlU2xpY2UiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInNlbGVjdENvdW50IiwiY291bnRlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=