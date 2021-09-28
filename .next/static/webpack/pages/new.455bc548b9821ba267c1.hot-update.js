"use strict";
self["webpackHotUpdate_N_E"]("pages/new",{

/***/ "./pages/new/index.js":
/*!****************************!*\
  !*** ./pages/new/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ New; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/reducers/counter */ "./stores/reducers/counter.js");
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/new/index.js",
    _s = $RefreshSig$();






function New() {
  _s();

  var count = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(_stores_reducers_counter__WEBPACK_IMPORTED_MODULE_1__.selectCount);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
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

_s(New, "Hx8ZS0E5Jr/6DPTYqq8Q1lSknko=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch];
});

_c = New;

var _c;

$RefreshReg$(_c, "New");

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


/***/ }),

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
var pReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_2__.default);
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


/***/ }),

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


/***/ }),

/***/ "./stores/rootReducer.js":
/*!*******************************!*\
  !*** ./stores/rootReducer.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/counter */ "./stores/reducers/counter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_0__.default
}));

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


/***/ }),

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiddlewareArray": function() { return /* binding */ MiddlewareArray; },
/* harmony export */   "configureStore": function() { return /* binding */ configureStore; },
/* harmony export */   "createAction": function() { return /* binding */ createAction; },
/* harmony export */   "createAsyncThunk": function() { return /* binding */ createAsyncThunk; },
/* harmony export */   "createDraftSafeSelector": function() { return /* binding */ createDraftSafeSelector; },
/* harmony export */   "createEntityAdapter": function() { return /* binding */ createEntityAdapter; },
/* harmony export */   "createImmutableStateInvariantMiddleware": function() { return /* binding */ createImmutableStateInvariantMiddleware; },
/* harmony export */   "createNextState": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createReducer": function() { return /* binding */ createReducer; },
/* harmony export */   "createSelector": function() { return /* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector; },
/* harmony export */   "createSerializableStateInvariantMiddleware": function() { return /* binding */ createSerializableStateInvariantMiddleware; },
/* harmony export */   "createSlice": function() { return /* binding */ createSlice; },
/* harmony export */   "current": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.current; },
/* harmony export */   "findNonSerializableValue": function() { return /* binding */ findNonSerializableValue; },
/* harmony export */   "freeze": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.freeze; },
/* harmony export */   "getDefaultMiddleware": function() { return /* binding */ getDefaultMiddleware; },
/* harmony export */   "getType": function() { return /* binding */ getType; },
/* harmony export */   "isAllOf": function() { return /* binding */ isAllOf; },
/* harmony export */   "isAnyOf": function() { return /* binding */ isAnyOf; },
/* harmony export */   "isAsyncThunkAction": function() { return /* binding */ isAsyncThunkAction; },
/* harmony export */   "isDraft": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.isDraft; },
/* harmony export */   "isFulfilled": function() { return /* binding */ isFulfilled; },
/* harmony export */   "isImmutableDefault": function() { return /* binding */ isImmutableDefault; },
/* harmony export */   "isPending": function() { return /* binding */ isPending; },
/* harmony export */   "isPlain": function() { return /* binding */ isPlain; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isRejected": function() { return /* binding */ isRejected; },
/* harmony export */   "isRejectedWithValue": function() { return /* binding */ isRejectedWithValue; },
/* harmony export */   "miniSerializeError": function() { return /* binding */ miniSerializeError; },
/* harmony export */   "nanoid": function() { return /* binding */ nanoid; },
/* harmony export */   "original": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.original; },
/* harmony export */   "unwrapResult": function() { return /* binding */ unwrapResult; }
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in redux__WEBPACK_IMPORTED_MODULE_0__) if(["default","MiddlewareArray","configureStore","createAction","createAsyncThunk","createDraftSafeSelector","createEntityAdapter","createImmutableStateInvariantMiddleware","createNextState","createReducer","createSelector","createSerializableStateInvariantMiddleware","createSlice","current","findNonSerializableValue","freeze","getDefaultMiddleware","getType","isAllOf","isAnyOf","isAsyncThunkAction","isDraft","isFulfilled","isImmutableDefault","isPending","isPlain","isPlainObject","isRejected","isRejectedWithValue","miniSerializeError","nanoid","original","unwrapResult"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return redux__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _b = __getOwnPropSymbols(b); _i < _b.length; _i++) {
            var prop = _b[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    return redux__WEBPACK_IMPORTED_MODULE_0__.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop) {
        return noop;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
// src/getDefaultMiddleware.ts

// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
// src/immutableStateInvariantMiddleware.ts
var isProduction = "development" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    for (var key in keysToDetect) {
        var childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
            continue;
        }
        var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _b = options.isImmutable, isImmutable = _b === void 0 ? isImmutableDefault : _b, ignoredPaths = options.ignoredPaths, _c = options.warnAfter, warnAfter = _c === void 0 ? 32 : _c, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_b) {
        var getState = _b.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _b = entries_1[_i], key = _b[0], nestedValue = _b[1];
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
            continue;
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    return false;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _b = options.isSerializable, isSerializable = _b === void 0 ? isPlain : _b, getEntries = options.getEntries, _c = options.ignoredActions, ignoredActions = _c === void 0 ? [] : _c, _d = options.ignoredActionPaths, ignoredActionPaths = _d === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _d, _e = options.ignoredPaths, ignoredPaths = _e === void 0 ? [] : _e, _f = options.warnAfter, warnAfter = _f === void 0 ? 32 : _f, _g = options.ignoreState, ignoreState = _g === void 0 ? false : _g;
    return function (storeAPI) { return function (next) { return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
            return next(action);
        }
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        measureUtils.measureTime(function () {
            var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
            if (foundActionNonSerializableValue) {
                var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
        });
        var result = next(action);
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _b = options.thunk, thunk = _b === void 0 ? true : _b, _c = options.immutableCheck, immutableCheck = _c === void 0 ? true : _c, _d = options.serializableCheck, serializableCheck = _d === void 0 ? true : _d;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default);
        }
        else {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default.withExtraArgument(thunk.extraArgument));
        }
    }
    if (true) {
        if (immutableCheck) {
            var immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            var serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _b = options || {}, _c = _b.reducer, reducer = _c === void 0 ? void 0 : _c, _d = _b.middleware, middleware = _d === void 0 ? curriedGetDefaultMiddleware() : _d, _e = _b.devTools, devTools = _e === void 0 ? true : _e, _f = _b.preloadedState, preloadedState = _f === void 0 ? void 0 : _f, _g = _b.enhancers, enhancers = _g === void 0 ? void 0 : _g;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var storeEnhancers = [middlewareEnhancer];
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(storeEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isFSA(action) {
    return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (true) {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    var _b = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _b[0], finalActionMatchers = _b[1], finalDefaultCaseReducer = _b[2];
    var frozenInitialState = (0,immer__WEBPACK_IMPORTED_MODULE_2__.default)(initialState, function () {
    });
    return function (state, action) {
        if (state === void 0) { state = frozenInitialState; }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_b) {
            var matcher = _b.matcher;
            return matcher(action);
        }).map(function (_b) {
            var reducer = _b.reducer;
            return reducer;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (typeof result === "undefined") {
                        return previousState;
                    }
                    return result;
                }
                else if (!(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (typeof result === "undefined") {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.default)(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    };
}
// src/createSlice.ts
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name, initialState = options.initialState;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    var reducers = options.reducers || {};
    var _b = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _c = _b[0], extraReducers = _c === void 0 ? {} : _c, _d = _b[1], actionMatchers = _d === void 0 ? [] : _d, _e = _b[2], defaultCaseReducer = _e === void 0 ? void 0 : _e;
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    return {
        name: name,
        reducer: reducer,
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(state)) {
            runMutator(state);
            return state;
        }
        else {
            return (0,immer__WEBPACK_IMPORTED_MODULE_2__.default)(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ( true && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _b = splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _b = createUnsortedStateAdapter(selectId), removeOne = _b.removeOne, removeMany = _b.removeMany, removeAll = _b.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        updates.forEach(function (update) { return takeUpdatedModel(models, update, state); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _b = splitAddedUpdatedEntities(newEntities, selectId, state), added = _b[0], updated = _b[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _b = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _b.selectId, sortComparer = _b.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
        payload: payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg: arg,
            requestId: requestId,
            requestStatus: "fulfilled"
        })
    }); });
    var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg: arg,
            requestId: requestId,
            requestStatus: "pending"
        })
    }); });
    var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
        payload: payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
            arg: arg,
            requestId: requestId,
            rejectedWithValue: !!payload,
            requestStatus: "rejected",
            aborted: (error == null ? void 0 : error.name) === "AbortError",
            condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
    }); });
    var displayedWarning = false;
    var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
        function class_1() {
            this.signal = {
                aborted: false,
                addEventListener: function () {
                },
                dispatchEvent: function () {
                    return false;
                },
                onabort: function () {
                },
                removeEventListener: function () {
                }
            };
        }
        class_1.prototype.abort = function () {
            if (true) {
                if (!displayedWarning) {
                    displayedWarning = true;
                    console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                }
            }
        };
        return class_1;
    }());
    function actionCreator(arg) {
        return function (dispatch, getState, extra) {
            var _a;
            var requestId = ((_a = options == null ? void 0 : options.idGenerator) != null ? _a : nanoid)();
            var abortController = new AC();
            var abortReason;
            var abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({ name: "AbortError", message: abortReason || "Aborted" }); }); });
            var started = false;
            function abort(reason) {
                if (started) {
                    abortReason = reason;
                    abortController.abort();
                }
            }
            var promise = function () {
                return __async(this, null, function () {
                    var _a2, finalAction, err_1, skipDispatch;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                if (options && options.condition && options.condition(arg, { getState: getState, extra: extra }) === false) {
                                    throw {
                                        name: "ConditionError",
                                        message: "Aborted due to condition callback returning false."
                                    };
                                }
                                started = true;
                                dispatch(pending(requestId, arg, (_a2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _a2.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                return [4 /*yield*/, Promise.race([
                                        abortedPromise,
                                        Promise.resolve(payloadCreator(arg, {
                                            dispatch: dispatch,
                                            getState: getState,
                                            extra: extra,
                                            requestId: requestId,
                                            signal: abortController.signal,
                                            rejectWithValue: function (value, meta) {
                                                return new RejectWithValue(value, meta);
                                            },
                                            fulfillWithValue: function (value, meta) {
                                                return new FulfillWithMeta(value, meta);
                                            }
                                        })).then(function (result) {
                                            if (result instanceof RejectWithValue) {
                                                throw result;
                                            }
                                            if (result instanceof FulfillWithMeta) {
                                                return fulfilled(result.payload, requestId, arg, result.meta);
                                            }
                                            return fulfilled(result, requestId, arg);
                                        })
                                    ])];
                            case 1:
                                finalAction = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                err_1 = _b.sent();
                                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                return [3 /*break*/, 3];
                            case 3:
                                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                if (!skipDispatch) {
                                    dispatch(finalAction);
                                }
                                return [2 /*return*/, finalAction];
                        }
                    });
                });
            }();
            return Object.assign(promise, {
                abort: abort,
                requestId: requestId,
                arg: arg,
                unwrap: function () {
                    return promise.then(unwrapResult);
                }
            });
        };
    }
    return Object.assign(actionCreator, {
        pending: pending,
        rejected: rejected,
        fulfilled: fulfilled,
        typePrefix: typePrefix
    });
}
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/index.ts
(0,immer__WEBPACK_IMPORTED_MODULE_2__.enableES5)();

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": function() { return /* binding */ un; },
/* harmony export */   "applyPatches": function() { return /* binding */ pn; },
/* harmony export */   "castDraft": function() { return /* binding */ K; },
/* harmony export */   "castImmutable": function() { return /* binding */ $; },
/* harmony export */   "createDraft": function() { return /* binding */ ln; },
/* harmony export */   "current": function() { return /* binding */ D; },
/* harmony export */   "enableAllPlugins": function() { return /* binding */ J; },
/* harmony export */   "enableES5": function() { return /* binding */ N; },
/* harmony export */   "enableMapSet": function() { return /* binding */ C; },
/* harmony export */   "enablePatches": function() { return /* binding */ T; },
/* harmony export */   "finishDraft": function() { return /* binding */ dn; },
/* harmony export */   "freeze": function() { return /* binding */ d; },
/* harmony export */   "immerable": function() { return /* binding */ L; },
/* harmony export */   "isDraft": function() { return /* binding */ t; },
/* harmony export */   "isDraftable": function() { return /* binding */ r; },
/* harmony export */   "nothing": function() { return /* binding */ H; },
/* harmony export */   "original": function() { return /* binding */ e; },
/* harmony export */   "produce": function() { return /* binding */ fn; },
/* harmony export */   "produceWithPatches": function() { return /* binding */ cn; },
/* harmony export */   "setAutoFreeze": function() { return /* binding */ sn; },
/* harmony export */   "setUseProxies": function() { return /* binding */ vn; }
/* harmony export */ });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t)}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),en.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),en.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.O&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),k(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),k(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),k(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),k(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{N:function(n,t){return new f(n,t)},T:function(n,t){return new c(n,t)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;E(n),k(n)}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),on.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t)},this.produceWithPatches=function(n,t){return"function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/redux-persist/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-persist/es/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY_PREFIX": function() { return /* binding */ KEY_PREFIX; },
/* harmony export */   "FLUSH": function() { return /* binding */ FLUSH; },
/* harmony export */   "REHYDRATE": function() { return /* binding */ REHYDRATE; },
/* harmony export */   "PAUSE": function() { return /* binding */ PAUSE; },
/* harmony export */   "PERSIST": function() { return /* binding */ PERSIST; },
/* harmony export */   "PURGE": function() { return /* binding */ PURGE; },
/* harmony export */   "REGISTER": function() { return /* binding */ REGISTER; },
/* harmony export */   "DEFAULT_VERSION": function() { return /* binding */ DEFAULT_VERSION; }
/* harmony export */ });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),

/***/ "./node_modules/redux-persist/es/createMigrate.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-persist/es/createMigrate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMigrate; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function createMigrate(migrations, config) {
  var _ref = config || {},
      debug = _ref.debug;

  return function (state, currentVersion) {
    if (!state) {
      if ( true && debug) console.log('redux-persist: no inbound state, skipping migration');
      return Promise.resolve(undefined);
    }

    var inboundVersion = state._persist && state._persist.version !== undefined ? state._persist.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;

    if (inboundVersion === currentVersion) {
      if ( true && debug) console.log('redux-persist: versions match, noop migration');
      return Promise.resolve(state);
    }

    if (inboundVersion > currentVersion) {
      if (true) console.error('redux-persist: downgrading version is not supported');
      return Promise.resolve(state);
    }

    var migrationKeys = Object.keys(migrations).map(function (ver) {
      return parseInt(ver);
    }).filter(function (key) {
      return currentVersion >= key && key > inboundVersion;
    }).sort(function (a, b) {
      return a - b;
    });
    if ( true && debug) console.log('redux-persist: migrationKeys', migrationKeys);

    try {
      var migratedState = migrationKeys.reduce(function (state, versionKey) {
        if ( true && debug) console.log('redux-persist: running migration for versionKey', versionKey);
        return migrations[versionKey](state);
      }, state);
      return Promise.resolve(migratedState);
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/createPersistoid.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createPersistoid; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

// @TODO remove once flow < 0.63 support is no longer required.
function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var serialize;

  if (config.serialize === false) {
    serialize = function serialize(x) {
      return x;
    };
  } else if (typeof config.serialize === 'function') {
    serialize = config.serialize;
  } else {
    serialize = defaultSerialize;
  }

  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values

  var lastState = {};
  var stagedState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop

      if (lastState[key] === state[key]) return; // value unchanged? noop

      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop

      keysToProcess.push(key); // add key to queue
    }); //if any key is missing in the new state which was present in the lastState,
    //add it for processing too

    Object.keys(lastState).forEach(function (key) {
      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
        keysToProcess.push(key);
      }
    }); // start the time iterator if not running (read: throttle)

    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key, lastState);
    }, lastState[key]);

    if (endState !== undefined) {
      try {
        stagedState[key] = serialize(endState);
      } catch (err) {
        console.error('redux-persist/createPersistoid: error serializing state', err);
      }
    } else {
      //if the endState is undefined, no need to persist the existing serialized content
      delete stagedState[key];
    }

    if (keysToProcess.length === 0) {
      writeStagedState();
    }
  }

  function writeStagedState() {
    // cleanup any removed keys just before write.
    Object.keys(stagedState).forEach(function (key) {
      if (lastState[key] === undefined) {
        delete stagedState[key];
      }
    });
    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (writeFailHandler) writeFailHandler(err);

    if (err && "development" !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }

    return writePromise || Promise.resolve();
  }; // return `persistoid`


  return {
    update: update,
    flush: flush
  };
} // @NOTE in the future this may be exposed via config

function defaultSerialize(data) {
  return JSON.stringify(data);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/createTransform.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-persist/es/createTransform.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTransform; }
/* harmony export */ });
function createTransform( // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
inbound, // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key, fullState) : state;
    },
    out: function out(state, key, fullState) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key, fullState) : state;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/getStoredState.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/getStoredState.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getStoredState; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  var storage = config.storage;
  var debug = config.debug;
  var deserialize;

  if (config.deserialize === false) {
    deserialize = function deserialize(x) {
      return x;
    };
  } else if (typeof config.deserialize === 'function') {
    deserialize = config.deserialize;
  } else {
    deserialize = defaultDeserialize;
  }

  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key, rawState);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if ( true && debug) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
        throw err;
      }
    }
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

/***/ }),

/***/ "./node_modules/redux-persist/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-persist/es/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistReducer": function() { return /* reexport safe */ _persistReducer__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "persistCombineReducers": function() { return /* reexport safe */ _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "persistStore": function() { return /* reexport safe */ _persistStore__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createMigrate": function() { return /* reexport safe */ _createMigrate__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createTransform": function() { return /* reexport safe */ _createTransform__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "getStoredState": function() { return /* reexport safe */ _getStoredState__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "createPersistoid": function() { return /* reexport safe */ _createPersistoid__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "purgeStoredState": function() { return /* reexport safe */ _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__.default; }
/* harmony export */ });
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _persistCombineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistCombineReducers */ "./node_modules/redux-persist/es/persistCombineReducers.js");
/* harmony import */ var _persistStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistStore */ "./node_modules/redux-persist/es/persistStore.js");
/* harmony import */ var _createMigrate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMigrate */ "./node_modules/redux-persist/es/createMigrate.js");
/* harmony import */ var _createTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransform */ "./node_modules/redux-persist/es/createTransform.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _constants__WEBPACK_IMPORTED_MODULE_8__) if(["default","persistReducer","persistCombineReducers","persistStore","createMigrate","createTransform","getStoredState","createPersistoid","purgeStoredState"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _constants__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);










/***/ }),

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-persist/es/persistCombineReducers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistCombineReducers; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _persistReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistReducer */ "./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel2 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js");



// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_1__.default : config.stateReconciler;
  return (0,_persistReducer__WEBPACK_IMPORTED_MODULE_0__.default)(config, (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(reducers));
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistReducer.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/es/persistReducer.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistReducer; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
/* harmony import */ var _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateReconciler/autoMergeLevel1 */ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js");
/* harmony import */ var _createPersistoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPersistoid */ "./node_modules/redux-persist/es/createPersistoid.js");
/* harmony import */ var _getStoredState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStoredState */ "./node_modules/redux-persist/es/getStoredState.js");
/* harmony import */ var _purgeStoredState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purgeStoredState */ "./node_modules/redux-persist/es/purgeStoredState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var DEFAULT_TIMEOUT = 5000;
/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/

function persistReducer(config, baseReducer) {
  if (true) {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }

  var version = config.version !== undefined ? config.version : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERSION;
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? _stateReconciler_autoMergeLevel1__WEBPACK_IMPORTED_MODULE_1__.default : config.stateReconciler;
  var getStoredState = config.getStoredState || _getStoredState__WEBPACK_IMPORTED_MODULE_3__.default;
  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
  var _persistoid = null;
  var _purge = false;
  var _paused = true;

  var conditionalUpdate = function conditionalUpdate(state) {
    // update the persistoid only if we are rehydrated and not paused
    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
    return state;
  };

  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type


    var restState = rest;

    if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PERSIST) {
      var _sealed = false;

      var _rehydrate = function _rehydrate(payload, err) {
        // dev warning if we are already sealed
        if ( true && _sealed) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed

        if (!_sealed) {
          action.rehydrate(config.key, payload, err);
          _sealed = true;
        }
      };

      timeout && setTimeout(function () {
        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
      }, timeout); // @NOTE PERSIST resumes if paused.

      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set

      if (!_persistoid) _persistoid = (0,_createPersistoid__WEBPACK_IMPORTED_MODULE_2__.default)(config); // @NOTE PERSIST can be called multiple times, noop after the first

      if (_persist) {
        // We still need to call the base reducer because there might be nested
        // uses of persistReducer which need to be aware of the PERSIST action
        return _objectSpread({}, baseReducer(restState, action), {
          _persist: _persist
        });
      }

      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
      action.register(config.key);
      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };

        migrate(restoredState, version).then(function (migratedState) {
          _rehydrate(migratedState);
        }, function (migrateErr) {
          if ( true && migrateErr) console.error('redux-persist: migration error', migrateErr);

          _rehydrate(undefined, migrateErr);
        });
      }, function (err) {
        _rehydrate(undefined, err);
      });
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: {
          version: version,
          rehydrated: false
        }
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PURGE) {
      _purge = true;
      action.result((0,_purgeStoredState__WEBPACK_IMPORTED_MODULE_4__.default)(config));
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.FLUSH) {
      action.result(_persistoid && _persistoid.flush());
      return _objectSpread({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PAUSE) {
      _paused = true;
    } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE) {
      // noop on restState if purging
      if (_purge) return _objectSpread({}, restState, {
        _persist: _objectSpread({}, _persist, {
          rehydrated: true
        }) // @NOTE if key does not match, will continue to default else below

      });

      if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined

        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

        var _newState = _objectSpread({}, reconciledRest, {
          _persist: _objectSpread({}, _persist, {
            rehydrated: true
          })
        });

        return conditionalUpdate(_newState);
      }
    } // if we have not already handled PERSIST, straight passthrough


    if (!_persist) return baseReducer(state, action); // run base reducer:
    // is state modified ? return original : return updated

    var newState = baseReducer(restState, action);
    if (newState === restState) return state;
    return conditionalUpdate(_objectSpread({}, newState, {
      _persist: _persist
    }));
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/es/persistStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-persist/es/persistStore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ persistStore; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER:
      return _objectSpread({}, state, {
        registry: [].concat(_toConsumableArray(state.registry), [action.key])
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE:
      var firstIndex = state.registry.indexOf(action.key);

      var registry = _toConsumableArray(state.registry);

      registry.splice(firstIndex, 1);
      return _objectSpread({}, state, {
        registry: registry,
        bootstrapped: registry.length === 0
      });

    default:
      return state;
  }
};

function persistStore(store, options, cb) {
  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (true) {
    var optionsToTest = options || {};
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
    });
  }

  var boostrappedCb = cb || false;

  var _pStore = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);

  var register = function register(key) {
    _pStore.dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE,
      payload: payload,
      err: err,
      key: key // dispatch to `store` to rehydrate and `persistor` to track result

    };
    store.dispatch(rehydrateAction);

    _pStore.dispatch(rehydrateAction);

    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  var persistor = _objectSpread({}, _pStore, {
    purge: function purge() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PURGE,
        result: function result(purgeResult) {
          results.push(purgeResult);
        }
      });
      return Promise.all(results);
    },
    flush: function flush() {
      var results = [];
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.FLUSH,
        result: function result(flushResult) {
          results.push(flushResult);
        }
      });
      return Promise.all(results);
    },
    pause: function pause() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PAUSE
      });
    },
    persist: function persist() {
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__.PERSIST,
        register: register,
        rehydrate: rehydrate
      });
    }
  });

  if (!(options && options.manualPersist)) {
    persistor.persist();
  }

  return persistor;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-persist/es/purgeStoredState.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ purgeStoredState; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-persist/es/constants.js");

function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : _constants__WEBPACK_IMPORTED_MODULE_0__.KEY_PREFIX).concat(config.key);
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && "development" !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ autoMergeLevel1; }
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel1: 
    - merges 1 level of substate
    - skips substate if already modified
*/
function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      } // otherwise hard set the new value


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

/***/ }),

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ autoMergeLevel2; }
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  autoMergeLevel2: 
    - merges 2 level of substate
    - skips substate if already modified
    - this is essentially redux-perist v4 behavior
*/
function autoMergeLevel2(inboundState, originalState, reducedState, _ref) {
  var debug = _ref.debug;

  var newState = _objectSpread({}, reducedState); // only rehydrate if inboundState exists and is an object


  if (inboundState && _typeof(inboundState) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

      if (originalState[key] !== reducedState[key]) {
        if ( true && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      }

      if (isPlainEnoughObject(reducedState[key])) {
        // if object is plain enough shallow merge the new values (hence "Level2")
        newState[key] = _objectSpread({}, newState[key], {}, inboundState[key]);
        return;
      } // otherwise hard set


      newState[key] = inboundState[key];
    });
  }

  if ( true && debug && inboundState && _typeof(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
  return newState;
}

function isPlainEnoughObject(o) {
  return o !== null && !Array.isArray(o) && _typeof(o) === 'object';
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
/*!********************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/createWebStorage.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



exports.__esModule = true;
exports.default = createWebStorage;

var _getStorage = _interopRequireDefault(__webpack_require__(/*! ./getStorage */ "./node_modules/redux-persist/lib/storage/getStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = (0, _getStorage.default)(type);
  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.getItem(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve, reject) {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.removeItem(key));
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/getStorage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {



exports.__esModule = true;
exports.default = getStorage;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function noop() {}

var noopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop
};

function hasStorage(storageType) {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== 'object' || !(storageType in self)) {
    return false;
  }

  try {
    var storage = self[storageType];
    var testKey = "redux-persist ".concat(storageType, " test");
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (true) console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
    return false;
  }

  return true;
}

function getStorage(type) {
  var storageType = "".concat(type, "Storage");
  if (hasStorage(storageType)) return self[storageType];else {
    if (true) {
      console.error("redux-persist failed to create sync storage. falling back to noop storage.");
    }

    return noopStorage;
  }
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-persist/lib/storage/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



exports.__esModule = true;
exports.default = void 0;

var _createWebStorage = _interopRequireDefault(__webpack_require__(/*! ./createWebStorage */ "./node_modules/redux-persist/lib/storage/createWebStorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWebStorage.default)('local');

exports.default = _default;

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
/* harmony export */   "applyMiddleware": function() { return /* binding */ applyMiddleware; },
/* harmony export */   "bindActionCreators": function() { return /* binding */ bindActionCreators; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "compose": function() { return /* binding */ compose; },
/* harmony export */   "createStore": function() { return /* binding */ createStore; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMemoize": function() { return /* binding */ defaultMemoize; },
/* harmony export */   "createSelectorCreator": function() { return /* binding */ createSelectorCreator; },
/* harmony export */   "createSelector": function() { return /* binding */ createSelector; },
/* harmony export */   "createStructuredSelector": function() { return /* binding */ createStructuredSelector; }
/* harmony export */ });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LjQ1NWJjNTQ4Yjk4MjFiYTI2N2MxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU00sR0FBVCxHQUFlO0FBQUE7O0FBQzFCLE1BQU1DLEtBQUssR0FBR1Asd0RBQVcsQ0FBQ0ksaUVBQUQsQ0FBekI7QUFDQSxNQUFNSSxRQUFRLEdBQUdQLHdEQUFXLEVBQTVCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUFBLDhCQUFjTSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBUUg7O0dBWHVCRDtVQUNOTixzREFDR0M7OztLQUZHSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNUSxhQUFhLEdBQUc7QUFDbEJDLEVBQUFBLEdBQUcsRUFBRSxNQURhO0FBRWxCSCxFQUFBQSxPQUFPLEVBQUVBLDhEQUFPQTtBQUZFLENBQXRCO0FBT0EsSUFBTUksUUFBUSxHQUFHTCw2REFBYyxDQUFDRyxhQUFELEVBQWdCRCxpREFBaEIsQ0FBL0I7QUFFTyxJQUFNUixLQUFLLEdBQUdJLGtEQUFXLENBQUNPLFFBQUQsQ0FBekI7QUFDQSxJQUFNQyxTQUFTLEdBQUdQLDJEQUFZLENBQUNMLEtBQUQsQ0FBOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlA7QUFFTyxJQUFNYyxZQUFZLEdBQUdELDZEQUFXLENBQUM7QUFDcENFLEVBQUFBLElBQUksRUFBRSxTQUQ4QjtBQUVwQ0MsRUFBQUEsWUFBWSxFQUFFO0FBQ1ZDLElBQUFBLEtBQUssRUFBRTtBQURHLEdBRnNCO0FBS3BDQyxFQUFBQSxRQUFRLEVBQUU7QUFDTnJCLElBQUFBLFNBQVMsRUFBRSxtQkFBQ3NCLEtBQUQsRUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDRixLQUFOLElBQWMsQ0FBZDtBQUNILEtBSEs7QUFJTm5CLElBQUFBLFNBQVMsRUFBRSxtQkFBQ3FCLEtBQUQsRUFBVztBQUNsQkEsTUFBQUEsS0FBSyxDQUFDRixLQUFOLElBQWUsQ0FBZjtBQUNILEtBTks7QUFPTkcsSUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNELEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUNsQ0YsTUFBQUEsS0FBSyxDQUFDRixLQUFOLElBQWVJLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDSDtBQVRLO0FBTDBCLENBQUQsQ0FBaEM7QUFrQkEsNEJBQWtEUixZQUFZLENBQUNTLE9BQS9EO0FBQUEsSUFBTzFCLFNBQVAseUJBQU9BLFNBQVA7QUFBQSxJQUFrQkMsU0FBbEIseUJBQWtCQSxTQUFsQjtBQUFBLElBQTZCc0IsaUJBQTdCLHlCQUE2QkEsaUJBQTdCOztBQUNBLElBQU1yQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBb0IsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssT0FBTixDQUFjUCxLQUFsQjtBQUFBLENBQXpCO0FBQ1AsK0RBQWVILFlBQVksQ0FBQ04sT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUVBLCtEQUFlaUIsc0RBQWUsQ0FBQztBQUMzQkQsRUFBQUEsT0FBTyxFQUFQQSxzREFBT0E7QUFEb0IsQ0FBRCxDQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBLHFCQUFxQixTQUFJLElBQUksU0FBSTtBQUNqQyxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQTBDLG9FQUFvRTtBQUNqSztBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0JBQWdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNrQztBQUNaO0FBQ2tGO0FBQzNDO0FBQzdEO0FBQ3lDO0FBQ0M7QUFDMUM7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBLG1CQUFtQiwwREFBb0I7QUFDdkM7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBLHFEQUFxRCw4Q0FBTyxVQUFVLDhDQUFPO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQzJGO0FBQzNGO0FBQ2dDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBTztBQUN0QixXQUFXLGdEQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUJBQW1CLGFBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixRQUFRLEtBQXFDLEVBQUUsRUFFMUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx1QkFBdUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFFBQVEsS0FBcUMsRUFBRSxFQUUxQztBQUNMO0FBQ0EsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFlO0FBQ2hEO0FBQ0E7QUFDQSxpQ0FBaUMsa0VBQWlDO0FBQ2xFO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFvQjtBQUN4QztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxvQ0FBb0M7QUFDckc7QUFDQTtBQUNBLDZCQUE2Qix3REFBcUI7QUFDbEQsdUJBQXVCLDBDQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEIscUJBQXFCLDRCQUE0Qix1QkFBdUI7QUFDL0c7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdCQUFnQixJQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLDZCQUE2Qiw4Q0FBZTtBQUM1QyxLQUFLO0FBQ0w7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFlO0FBQzFDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwTEFBMEw7QUFDMUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxnREFBZ0Q7QUFDaEQsc0dBQXNHLCtCQUErQixzQkFBc0IsSUFBSTtBQUMvSiwwQ0FBMEM7QUFDMUMsbURBQW1EO0FBQ25ELDhFQUE4RSxvQkFBb0I7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDOEQ7QUFDOUQ7QUFDQSw2REFBNkQsd0JBQXdCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMkJBQTJCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDJCQUEyQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseURBQXlELDhCQUE4QjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDRDQUE0QztBQUM5RztBQUNBLDBEQUEwRCwyQkFBMkI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsNkRBQTZEO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpREFBaUQ7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsZ0NBQWdDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1R0FBdUc7QUFDdkc7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyxJQUFJO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssSUFBSTtBQUNULDRHQUE0RztBQUM1RztBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHNFQUFzRSxnQkFBZ0IsdURBQXVELElBQUksSUFBSTtBQUN6TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLGtDQUFrQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrS0FBa0ssZ0NBQWdDLElBQUksa0NBQWtDO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGtDQUFrQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCw0QkFBNEI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCw2QkFBNkI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDhCQUE4QjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBUztBQUMya0I7QUFDcGxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbHlDQSxjQUFjLGtEQUFrRCxJQUFJLHdCQUF3QixHQUFHLElBQW1DLEVBQUUsNkVBQTZFLDBCQUEwQiw2RUFBNkUsZ0JBQWdCLHFFQUFxRSxjQUFjLGtCQUFrQixjQUFjLHdCQUF3QixtQ0FBbUMsK0JBQStCLHFCQUFxQixpRUFBaUUsdUVBQXVFLCtEQUErRCxjQUFjLDRCQUE0QixrQkFBa0IsdUVBQXVFLG1DQUFtQyw0QkFBNEIsZ0JBQWdCLEdBQUcsY0FBYyxXQUFXLDREQUE0RCxnQkFBZ0IsbUVBQW1FLGdCQUFnQiw4QkFBOEIsa0JBQWtCLFdBQVcscURBQXFELGdCQUFnQix3Q0FBd0MsY0FBYywyQkFBMkIsY0FBYywyQkFBMkIsY0FBYyxnQkFBZ0IsY0FBYyx5REFBeUQsWUFBWSxZQUFZLG9CQUFvQixXQUFXLEtBQUssa0JBQWtCLDBFQUEwRSwrREFBK0QsRUFBRSxpREFBaUQsZ0JBQWdCLCtIQUErSCxlQUFlLFNBQVMsYUFBYSxLQUFLLGNBQWMsdURBQXVELGNBQWMsWUFBWSxvQkFBb0IsZ0JBQWdCLGlCQUFpQixhQUFhLE1BQU0sTUFBbUMsWUFBWSxnQkFBZ0Isc0NBQXNDLGNBQWMsNkJBQTZCLGNBQWMsZUFBZSxjQUFjLFVBQVUsdUJBQXVCLGNBQWMsV0FBVyw4QkFBOEIsZ0JBQWdCLGVBQWUsaUNBQWlDLDJLQUEySyxrQkFBa0IsaUJBQWlCLFdBQVcsZ0NBQWdDLHNCQUFzQixRQUFRLG9CQUFvQiwrQkFBK0IsU0FBUyxlQUFlLHNDQUFzQyxzQ0FBc0Msc0JBQXNCLGlEQUFpRCxXQUFXLHdCQUF3QixHQUFHLEtBQW1DLG9CQUFvQix5REFBeUQseUJBQXlCLE9BQU8sZ0JBQWdCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLHNDQUFzQyxnQkFBZ0IsV0FBVyxvQkFBb0IsZ0JBQWdCLDZDQUE2QyxFQUFFLEVBQUUsMkNBQTJDLGNBQWMsNEJBQTRCLGNBQWMsMEJBQTBCLGNBQWMsa0JBQWtCLGtCQUFrQix3RUFBd0UsMEJBQTBCLGtDQUFrQyxtQ0FBbUMsVUFBVSxnQkFBZ0IsZ0RBQWdELHFCQUFxQixzQkFBc0IsOEJBQThCLGNBQWMsbUNBQW1DLGtCQUFrQixvQkFBb0IsTUFBTSw0Q0FBNEMsdUJBQXVCLGNBQWMsMEJBQTBCLDZCQUE2QixzQkFBc0IsSUFBSSxnQkFBZ0IsVUFBVSx5QkFBeUIsNEJBQTRCLFlBQVksYUFBYSxnQkFBZ0IsV0FBVyxnQ0FBZ0MsNENBQTRDLGNBQWMsTUFBTSxLQUFtQyxtQkFBbUIsaUJBQWlCLGNBQWMsS0FBbUMsc0JBQXNCLEdBQUcsY0FBYyxxQkFBcUIsS0FBSyxLQUFLLGNBQWMsb0JBQW9CLGtCQUFrQixNQUFNLG9CQUFvQixjQUFjLHlDQUF5QyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsZ0NBQWdDLHFCQUFxQiwrQkFBK0IsYUFBYSx1Q0FBdUMsY0FBYyxVQUFVLGtDQUFrQyxvREFBb0QsbUJBQW1CLGNBQWMsK0JBQStCLFNBQVMsU0FBUyxnQkFBZ0IsdUNBQXVDLE1BQU0sOEJBQThCLFdBQVcsMENBQTBDLFNBQVMsWUFBWSxZQUFZLG9CQUFvQixXQUFXLEtBQUssV0FBVywrQkFBK0IsaURBQWlELFNBQVMsa0NBQWtDLCtCQUErQixrQ0FBa0Msb0JBQW9CLElBQUksbUJBQW1CLCtDQUErQywwQkFBMEIsV0FBVyxNQUFNLDRCQUE0QiwwQkFBMEIsNERBQTRELG9CQUFvQixzQ0FBc0MsR0FBRyxlQUFlLGlFQUFpRSxXQUFXLFlBQVksd0JBQXdCLFdBQVcsWUFBWSwwQ0FBMEMsSUFBSSw4QkFBOEIsaUJBQWlCLGVBQWUsMEJBQTBCLEVBQUUsYUFBYSxjQUFjLGtCQUFrQixvQ0FBb0MsZ0VBQWdFLHFCQUFxQixJQUFJLDZDQUE2Qyw4Q0FBOEMsNEJBQTRCLDZCQUE2QixjQUFjLG1CQUFtQixZQUFZLGFBQWEsZ0JBQWdCLDhCQUE4QixnQ0FBZ0MsYUFBYSxLQUFLLHFCQUFxQixtSkFBbUosd0NBQXdDLFVBQVUsd0JBQXdCLHlCQUF5QixhQUFhLHNCQUFzQixpQkFBaUIsOEJBQThCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qiw0QkFBNEIsMEJBQTBCLGdDQUFnQywyQkFBMkIsaUJBQWlCLEtBQUsscUJBQXFCLFlBQVksOENBQThDLGdCQUFnQixxQkFBcUIsc0RBQXNELHlCQUF5QixrQkFBa0IscUJBQXFCLFlBQVksRUFBRSxvQkFBb0IsZ0JBQWdCLG1CQUFtQixlQUFlLHVCQUF1QixFQUFFLCtCQUErQixHQUFHLEdBQUcsVUFBVSx1Q0FBdUMsc0JBQXNCLHNCQUFzQixZQUFZLGNBQWMsWUFBWSxjQUFjLFlBQVksV0FBVywwQkFBMEIsb0JBQW9CLFFBQVEsa0NBQWtDLFVBQVUsa0NBQWtDLEVBQUUsbUJBQW1CLFdBQVcsS0FBSyxvQkFBb0IsUUFBUSwwQkFBMEIsRUFBRSwyQkFBMkIsc0RBQXNELEVBQUUsVUFBVSxnQ0FBZ0Msb0JBQW9CLHVCQUF1QixjQUFjLG9CQUFvQixRQUFRLDJCQUEyQixhQUFhLG9CQUFvQixFQUFFLElBQUksOEJBQThCLGNBQWMsb0JBQW9CLFFBQVEsb0JBQW9CLGFBQWEsMkJBQTJCLEVBQUUsSUFBSSxHQUFHLFdBQVcscUJBQXFCLFFBQVEsMENBQTBDLFVBQVUsK0JBQStCLEdBQUcsRUFBRSxhQUFhLGdCQUFnQixhQUFhLG1CQUFtQixtREFBbUQsY0FBYyxvQ0FBb0MsY0FBYywyQ0FBMkMsU0FBUyxtQkFBbUIsd0JBQXdCLGdCQUFnQixJQUFJLGNBQWMsK0JBQStCLG9CQUFvQixpQ0FBaUMsYUFBYSxnQ0FBZ0MsY0FBYyxnQkFBZ0IsZ0RBQWdELE9BQU8sY0FBYyxnQkFBZ0IsZ0JBQWdCLHFFQUFxRSxNQUFNLFNBQVMsa0JBQWtCLHVDQUF1QyxlQUFlLHdCQUF3QixvQkFBb0IseUJBQXlCLHFCQUFxQixjQUFjLG9HQUFvRyxzQkFBc0IseUJBQXlCLGNBQWMscURBQXFELG9CQUFvQixjQUFjLDBEQUEwRCxjQUFjLGdCQUFnQix5QkFBeUIsV0FBVyxrQ0FBa0MsdUJBQXVCLEdBQUcsbUJBQW1CLGNBQWMsS0FBSyxrQkFBa0IsdUJBQXVCLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQix5QkFBeUIscUJBQXFCLDJCQUEyQixXQUFXLGdCQUFnQixrQkFBa0IsbUJBQW1CLGVBQWUsaUJBQWlCLDhCQUE4QixHQUFHLHNCQUFzQiwyQkFBMkIsV0FBVyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixlQUFlLG1CQUFtQixxQkFBcUIsT0FBTywyQkFBMkIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsZ0JBQWdCLGdCQUFnQixnQkFBZ0Isc0VBQXNFLE1BQU0sU0FBUyxrQkFBa0IsdUNBQXVDLGVBQWUsd0JBQXdCLG9CQUFvQixjQUFjLDhFQUE4RSxtQkFBbUIsY0FBYyxxREFBcUQsc0JBQXNCLHlCQUF5QixjQUFjLDBFQUEwRSxvQkFBb0IsY0FBYyx3Q0FBd0MscUJBQXFCLGNBQWMsOEJBQThCLHNCQUFzQixjQUFjLCtCQUErQixtQkFBbUIscUJBQXFCLGlCQUFpQixxQkFBcUIseUJBQXlCLG1DQUFtQyxRQUFRLDJDQUEyQyxHQUFHLEdBQUcsWUFBWSxnQkFBZ0Isa0JBQWtCLGlCQUFpQixtQkFBbUIsRUFBRSxhQUFhLFlBQVksY0FBYyxTQUFTLGNBQWMsU0FBUyxnUEFBZ1AsOExBQThMLDJJQUEySSwrSEFBK0gsMnZCQUEydkIscURBQXFELHlEQUF5RCx3Q0FBd0MsZ0JBQWdCLHlKQUF5SiwrRkFBK0Ysa0tBQWtLLGdCQUFnQiwyQ0FBMkMsZ0JBQWdCLDRDQUE0Qyw0RkFBNEYscUpBQXFKLDZFQUE2RSw2RUFBNkUsU0FBUyxrQ0FBa0MsMENBQTBDLEtBQUssTUFBTSxLQUFLLGtCQUFrQixrQkFBa0IsV0FBVyxrQ0FBa0MsZUFBZSxvRkFBb0YsUUFBUSxXQUFXLDhEQUE4RCxtQkFBbUIsaUJBQWlCLHFCQUFxQiw2QkFBNkIscUJBQXFCLGdCQUFnQixvREFBb0QsU0FBUyxzQ0FBc0MsMkNBQTJDLDJDQUEyQyxVQUFVLHVGQUF1Riw4QkFBOEIsNkZBQTZGLHdDQUF3QyxtREFBbUQsVUFBVSxrRkFBa0YsR0FBRywyQkFBMkIsTUFBTSw0QkFBNEIsa0NBQWtDLDJCQUEyQixPQUFPLE9BQU8sb0JBQW9CLGlCQUFpQiw2REFBNkQsbUNBQW1DLE1BQU0sS0FBbUMsZ0VBQWdFLHdCQUF3QixNQUFNLEtBQW1DLDJFQUEyRSxrQkFBa0IsY0FBYyxXQUFXLGdEQUFnRCwrQ0FBK0MsUUFBUSxJQUFJLFFBQVEsbUJBQW1CLFdBQVcsa0JBQWtCLGtEQUFrRCxJQUFJLHdCQUF3QixnQ0FBZ0MsTUFBTSwwQ0FBMEMsSUFBSSxNQUFNLDJFQUEyRSxnQ0FBZ0MsSUFBSSxZQUFZLFFBQVEsWUFBWSw0RUFBNEUscUJBQXFCLGVBQWUsYUFBYSxtQkFBbUIsMkJBQTJCLHVCQUF1Qix3Q0FBd0MsUUFBUSx1Q0FBdUMsdUNBQXVDLGtEQUFrRCxJQUFJLHdCQUF3QiwyQ0FBMkMscUNBQXFDLEdBQUcsK0JBQStCLFFBQVEsUUFBUSxRQUFRLG1LQUFtSyxrQkFBa0IsaUNBQWlDLDBCQUEwQixpQ0FBaUMsd0JBQXdCLDZCQUE2QixjQUFjLEtBQW1DLDRCQUE0QixVQUFVLDBCQUEwQiw2QkFBNkIsU0FBUyw2QkFBNkIsc0JBQXNCLDhCQUE4QixNQUFNLGlCQUFpQixLQUFLLEtBQUssV0FBVyx3Q0FBd0MsVUFBVSxPQUFPLHFCQUFxQiwrQ0FBK0MseUJBQXlCLEdBQUcsR0FBRyx5TUFBeU0sK0RBQWUsRUFBRSxFQUF3VztBQUMvZ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUHVDO0FBQy9CO0FBQ2YseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUEsMkdBQTJHLHVEQUFlOztBQUUxSDtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLFFBQVEsS0FBcUM7O0FBRTdDO0FBQ0E7QUFDQSxZQUFZLEtBQXFDO0FBQ2pEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ29EO0FBQ3BEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLGtEQUFVO0FBQzNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRCxpREFBaUQ7O0FBRWpELHFEQUFxRDs7QUFFckQsK0JBQStCO0FBQy9CLEtBQUssR0FBRztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGFBQW9CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnlDO0FBQzFCO0FBQ2Y7QUFDQSxpRkFBaUYsa0RBQVU7QUFDM0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUixZQUFZLEtBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNkQ7QUFDZ0I7QUFDcEI7QUFDRTtBQUNJO0FBQ0Y7QUFDSTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQekI7QUFDTTtBQUNrQjtBQUNoRTtBQUNlO0FBQ2Ysa0VBQWtFLHFFQUFlO0FBQ2pGLFNBQVMsd0RBQWMsU0FBUyxzREFBZTtBQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLCtDQUErQyw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8seUNBQXlDLG1GQUFtRixPQUFPOztBQUV0Ziw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFcE0sc0RBQXNELCtCQUErQiw4REFBOEQsWUFBWSxvQ0FBb0MsNkRBQTZELFlBQVksNkJBQTZCLE9BQU8sMkJBQTJCLDBDQUEwQyx3RUFBd0UsK0JBQStCOztBQUU1ZCwyREFBMkQsK0JBQStCLGlCQUFpQixzQ0FBc0MsWUFBWSxZQUFZLHVCQUF1QixPQUFPLHFCQUFxQiwwQ0FBMEMsNkJBQTZCOztBQUU1TTtBQUN2QjtBQUNkO0FBQ0c7QUFDSDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRSx1REFBZTtBQUMvRTtBQUNBLCtEQUErRCxxRUFBZTtBQUM5RSxnREFBZ0Qsb0RBQXFCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSw2REFBNkQ7OztBQUc3RDs7QUFFQSx3QkFBd0IsK0NBQU87QUFDL0I7O0FBRUE7QUFDQTtBQUNBLFlBQVksS0FBcUMsNEhBQTRIOztBQUU3SztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLFlBQVk7O0FBRW5CLHVCQUF1Qjs7QUFFdkIsc0NBQXNDLDBEQUFnQixVQUFVOztBQUVoRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYyxLQUFxQzs7QUFFbkQ7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLHlCQUF5Qiw2Q0FBSztBQUNwQztBQUNBLG9CQUFvQiwwREFBZ0I7QUFDcEMsNkJBQTZCO0FBQzdCO0FBQ0EsT0FBTztBQUNQLE1BQU0seUJBQXlCLDZDQUFLO0FBQ3BDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsT0FBTztBQUNQLE1BQU0seUJBQXlCLDZDQUFLO0FBQ3BDO0FBQ0EsTUFBTSx5QkFBeUIsaURBQVM7QUFDeEM7QUFDQSx5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUzs7QUFFVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDOztBQUVBLHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsTUFBTTs7O0FBR04sc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKQSxtQ0FBbUM7O0FBRW5DLGdDQUFnQzs7QUFFaEMsa0NBQWtDOztBQUVsQyxtQ0FBbUMsMEJBQTBCLDhDQUE4QyxnQkFBZ0IsT0FBTyxvQkFBb0I7O0FBRXRKLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLCtDQUErQyw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8seUNBQXlDLG1GQUFtRixPQUFPOztBQUV0Ziw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFaEs7QUFDNEM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxnREFBUTtBQUNqQiw2QkFBNkI7QUFDN0I7QUFDQSxPQUFPOztBQUVQLFNBQVMsaURBQVM7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUEsZ0JBQWdCLGtEQUFXOztBQUUzQjtBQUNBO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyw2Q0FBSztBQUNuQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLCtDQUFPO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5SHlDO0FBQzFCO0FBQ2Y7QUFDQSxpRkFBaUYsa0RBQVU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBLGFBQWEsYUFBb0I7QUFDakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hBLHdCQUF3QiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXpVLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLCtDQUErQyw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8seUNBQXlDLG1GQUFtRixPQUFPOztBQUV0Ziw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7O0FBRUEsaUNBQWlDLGlCQUFpQjs7O0FBR2xEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxZQUFZLEtBQXFDO0FBQ2pEO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BDQSx3QkFBd0IsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUV6VSwyQ0FBMkMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGlFQUFpRSxHQUFHLGtDQUFrQzs7QUFFdlUsaUNBQWlDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSwrQ0FBK0MsNENBQTRDLEtBQUssNkNBQTZDLDZFQUE2RSxPQUFPLHlDQUF5QyxtRkFBbUYsT0FBTzs7QUFFdGYsNENBQTRDLGtCQUFrQixrQ0FBa0Msb0VBQW9FLEtBQUssT0FBTyxvQkFBb0I7O0FBRXBNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7O0FBRUEsaUNBQWlDLGlCQUFpQjs7O0FBR2xEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxZQUFZLEtBQXFDO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQSxRQUFROzs7QUFHUjtBQUNBLEtBQUs7QUFDTDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDL0NhOztBQUViLGtCQUFrQjtBQUNsQixlQUFlOztBQUVmLHlDQUF5QyxtQkFBTyxDQUFDLDRFQUFjOztBQUUvRCx1Q0FBdUMsdUNBQXVDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYixrQkFBa0I7QUFDbEIsZUFBZTs7QUFFZix3QkFBd0IsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUV6VTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQ2E7O0FBRWIsa0JBQWtCO0FBQ2xCLGVBQWU7O0FBRWYsK0NBQStDLG1CQUFPLENBQUMsd0ZBQW9COztBQUUzRSx1Q0FBdUMsdUNBQXVDOztBQUU5RTs7QUFFQSxlQUFlOzs7Ozs7Ozs7OztBQ1hmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmlEOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixNQUFxQyxHQUFHLENBQXlCO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBcUMsR0FBRyxDQUF5QjtBQUN2Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE1BQXFDLEdBQUcsQ0FBeUI7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBcUMsR0FBRyxDQUF5QjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixlQUFlLFVBQVU7QUFDekI7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBcUMsR0FBRyxDQUF5QjtBQUN2Rjs7QUFFQTtBQUNBLHNCQUFzQixNQUFxQyxHQUFHLENBQXlCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLE1BQXFDLEdBQUcsQ0FBeUI7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBcUMsR0FBRyxDQUF5QjtBQUN2Rjs7QUFFQTtBQUNBLHNCQUFzQixNQUFxQyxHQUFHLENBQXlCO0FBQ3ZGOztBQUVBO0FBQ0Esc0JBQXNCLE1BQXFDLEdBQUcsQ0FBeUI7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixNQUFxQyxHQUFHLENBQTBCO0FBQ3hGOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQXFDLEdBQUcsQ0FBMEI7QUFDNUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxzQkFBc0IsTUFBcUMsR0FBRyxDQUEwQjtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixNQUFxQyxHQUFHLENBQTBCO0FBQ3hGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQzs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQXFDLEdBQUcsQ0FBMEI7QUFDMUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixNQUFxQyxHQUFHLENBQTBCO0FBQ3RGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCOztBQUVBO0FBQ0EsNkVBQTZFLGFBQWE7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsTUFBcUMsR0FBRyxDQUEwQjtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsYUFBYSxpRkFBYSxDQUFDLGlGQUFhLEdBQUcsWUFBWTtBQUN2RDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxLQUFxQztBQUN6QztBQUNBOztBQUVnSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3FCaEk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCwrRkFBK0YsYUFBYTtBQUM1RztBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVBO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlFQUF5RSxlQUFlO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ3ZIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiaUQ7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Ysa0JBQWtCLHNCQUFzQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBYztBQUN0QixPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZXMvcmVkdWNlcnMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlTWlncmF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlUGVyc2lzdG9pZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY3JlYXRlVHJhbnNmb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9nZXRTdG9yZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9wZXJzaXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3B1cmdlU3RvcmVkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQge2luY3JlbWVudCwgZGVjcmVtZW50LCBzZWxlY3RDb3VudH0gZnJvbSAnLi4vLi4vc3RvcmVzL3JlZHVjZXJzL2NvdW50ZXInXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL2NvbmZpZ3VyZVN0b3JlJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3KCkge1xuICAgIGNvbnN0IGNvdW50ID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q291bnQpXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgcmV0dXJuICggXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+c2hvcCBuZXc8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5jb3VudDoge2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcm9vdFJlZHVjZXJcIjtcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICBrZXk6ICdyb290JyxcbiAgICBzdG9yYWdlOiBzdG9yYWdlXG59XG5cblxuXG5jb25zdCBwUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwUmVkdWNlcik7XG5leHBvcnQgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NvdW50ZXInLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPTFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICAgICAgfSxcbiAgICAgICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnR9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IHN0YXRlID0+IHN0YXRlLmNvdW50ZXIudmFsdWVcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgY291bnRlciBmcm9tICcuL3JlZHVjZXJzL2NvdW50ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlclxufSkiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn07XHJcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XHJcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XHJcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xyXG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XHJcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcclxudmFyIF9fZGVmTm9ybWFsUHJvcCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTsgfTtcclxudmFyIF9fc3ByZWFkVmFsdWVzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcclxuICAgICAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXHJcbiAgICAgICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcclxuICAgIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBfX2dldE93blByb3BTeW1ib2xzKGIpOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcCA9IF9iW19pXTtcclxuICAgICAgICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxyXG4gICAgICAgICAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBhO1xyXG59O1xyXG52YXIgX19zcHJlYWRQcm9wcyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTsgfTtcclxudmFyIF9fYXN5bmMgPSBmdW5jdGlvbiAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBmdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5kb25lID8gcmVzb2x2ZSh4LnZhbHVlKSA6IFByb21pc2UucmVzb2x2ZSh4LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9O1xyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseShfX3RoaXMsIF9fYXJndW1lbnRzKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBzcmMvaW5kZXgudHNcclxuaW1wb3J0IHsgZW5hYmxlRVM1IH0gZnJvbSBcImltbWVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQyLCBjdXJyZW50IGFzIGN1cnJlbnQyLCBmcmVlemUsIG9yaWdpbmFsLCBpc0RyYWZ0IGFzIGlzRHJhZnQ0IH0gZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIGFzIGNyZWF0ZVNlbGVjdG9yMiB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG4vLyBzcmMvY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IudHNcclxuaW1wb3J0IHsgY3VycmVudCwgaXNEcmFmdCB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG52YXIgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xyXG4gICAgdmFyIHdyYXBwZWRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZXN0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaXNEcmFmdCh2YWx1ZSkgPyBjdXJyZW50KHZhbHVlKSA6IHZhbHVlXSwgcmVzdCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB3cmFwcGVkU2VsZWN0b3I7XHJcbn07XHJcbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSBhcyBjb21wb3NlMiwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuLy8gc3JjL2RldnRvb2xzRXh0ZW5zaW9uLnRzXHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxudmFyIGNvbXBvc2VXaXRoRGV2VG9vbHMgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBjb21wb3NlO1xyXG4gICAgcmV0dXJuIGNvbXBvc2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxudmFyIGRldlRvb2xzRW5oYW5jZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vb3ApIHtcclxuICAgICAgICByZXR1cm4gbm9vcDtcclxuICAgIH07XHJcbn07XHJcbi8vIHNyYy9pc1BsYWluT2JqZWN0LnRzXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHByb3RvID0gdmFsdWU7XHJcbiAgICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpID09PSBwcm90bztcclxufVxyXG4vLyBzcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHNcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuLy8gc3JjL3V0aWxzLnRzXHJcbmZ1bmN0aW9uIGdldFRpbWVNZWFzdXJlVXRpbHMobWF4RGVsYXksIGZuTmFtZSkge1xyXG4gICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZWFzdXJlVGltZTogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVsYXBzZWQgKz0gZmluaXNoZWQgLSBzdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXJuSWZFeGNlZWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZWxhcHNlZCA+IG1heERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZm5OYW1lICsgXCIgdG9vayBcIiArIGVsYXBzZWQgKyBcIm1zLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIHdhcm5pbmcgdGhyZXNob2xkIG9mIFwiICsgbWF4RGVsYXkgKyBcIm1zLiBcXG5JZiB5b3VyIHN0YXRlIG9yIGFjdGlvbnMgYXJlIHZlcnkgbGFyZ2UsIHlvdSBtYXkgd2FudCB0byBkaXNhYmxlIHRoZSBtaWRkbGV3YXJlIGFzIGl0IG1pZ2h0IGNhdXNlIHRvbyBtdWNoIG9mIGEgc2xvd2Rvd24gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gU2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlIGZvciBpbnN0cnVjdGlvbnMuXFxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG52YXIgTWlkZGxld2FyZUFycmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1pZGRsZXdhcmVBcnJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1pZGRsZXdhcmVBcnJheSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3MpIHx8IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlkZGxld2FyZUFycmF5LCBTeW1ib2wuc3BlY2llcywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMsIGFycik7XHJcbiAgICB9O1xyXG4gICAgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgKE1pZGRsZXdhcmVBcnJheS5iaW5kLmFwcGx5KE1pZGRsZXdhcmVBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyWzBdLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IChNaWRkbGV3YXJlQXJyYXkuYmluZC5hcHBseShNaWRkbGV3YXJlQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyci5jb25jYXQodGhpcykpKSkoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG59KEFycmF5KSk7XHJcbi8vIHNyYy9pbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcclxudmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxudmFyIHByZWZpeCA9IFwiSW52YXJpYW50IGZhaWxlZFwiO1xyXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8IFwiXCIpKTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqLCBzZXJpYWxpemVyLCBpbmRlbnQsIGRlY3ljbGVyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpLCBpbmRlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlcikge1xyXG4gICAgdmFyIHN0YWNrID0gW10sIGtleXMgPSBbXTtcclxuICAgIGlmICghZGVjeWNsZXIpXHJcbiAgICAgICAgZGVjeWNsZXIgPSBmdW5jdGlvbiAoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIltDaXJjdWxhciB+XVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfi5cIiArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oXCIuXCIpICsgXCJdXCI7XHJcbiAgICAgICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzUG9zID0gc3RhY2suaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICBpZiAofnN0YWNrLmluZGV4T2YodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZWN5Y2xlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVyID09IG51bGwgPyB2YWx1ZSA6IHNlcmlhbGl6ZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNJbW11dGFibGVEZWZhdWx0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuaXNGcm96ZW4odmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNrRm9yTXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKSB7XHJcbiAgICB2YXIgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRlY3RNdXRhdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqLCBwYXRoKSB7XHJcbiAgICBpZiAoaWdub3JlUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVQYXRocyA9IFtdOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgdHJhY2tlZCA9IHsgdmFsdWU6IG9iaiB9O1xyXG4gICAgaWYgKCFpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICAgICAgdHJhY2tlZC5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGgpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhY2tlZC5jaGlsZHJlbltrZXldID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqW2tleV0sIGNoaWxkUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNrZWQ7XHJcbn1cclxuZnVuY3Rpb24gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnR5LCBvYmosIHNhbWVQYXJlbnRSZWYsIHBhdGgpIHtcclxuICAgIGlmIChpZ25vcmVQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZVBhdGhzID0gW107IH1cclxuICAgIGlmIChzYW1lUGFyZW50UmVmID09PSB2b2lkIDApIHsgc2FtZVBhcmVudFJlZiA9IGZhbHNlOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHZvaWQgMDtcclxuICAgIHZhciBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqO1xyXG4gICAgaWYgKHNhbWVQYXJlbnRSZWYgJiYgIXNhbWVSZWYgJiYgIU51bWJlci5pc05hTihvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aDogcGF0aCB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgICAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgdmFyIGtleXNUb0RldGVjdCA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbikge1xyXG4gICAgICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4ga2V5c1RvRGV0ZWN0KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuW2tleV0sIG9ialtrZXldLCBzYW1lUmVmLCBjaGlsZFBhdGgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2IgPSBvcHRpb25zLmlzSW1tdXRhYmxlLCBpc0ltbXV0YWJsZSA9IF9iID09PSB2b2lkIDAgPyBpc0ltbXV0YWJsZURlZmF1bHQgOiBfYiwgaWdub3JlZFBhdGhzID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIF9jID0gb3B0aW9ucy53YXJuQWZ0ZXIsIHdhcm5BZnRlciA9IF9jID09PSB2b2lkIDAgPyAzMiA6IF9jLCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZTtcclxuICAgIGlnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocyB8fCBpZ25vcmU7XHJcbiAgICB2YXIgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgIHZhciBnZXRTdGF0ZSA9IF9iLmdldFN0YXRlO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIkltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaW52YXJpYW50KCFyZXN1bHQud2FzTXV0YXRlZCwgXCJBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBiZXR3ZWVuIGRpc3BhdGNoZXMsIGluIHRoZSBwYXRoICdcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiJy4gIFRoaXMgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvci4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmIGludmFyaWFudCghcmVzdWx0Lndhc011dGF0ZWQsIFwiQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiBcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiLiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uIFwiICsgc3RyaW5naWZ5KGFjdGlvbikgKyBcIi4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uO1xyXG4gICAgICAgIH07IH07XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcclxuZnVuY3Rpb24gaXNQbGFpbih2YWwpIHtcclxuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcclxuICAgIHJldHVybiB0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbCA9PT0gbnVsbCB8fCB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiIHx8IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgQXJyYXkuaXNBcnJheSh2YWwpIHx8IGlzUGxhaW5PYmplY3QodmFsKTtcclxufVxyXG5mdW5jdGlvbiBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUodmFsdWUsIHBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpIHtcclxuICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IFwiXCI7IH1cclxuICAgIGlmIChpc1NlcmlhbGl6YWJsZSA9PT0gdm9pZCAwKSB7IGlzU2VyaWFsaXphYmxlID0gaXNQbGFpbjsgfVxyXG4gICAgaWYgKGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZWRQYXRocyA9IFtdOyB9XHJcbiAgICB2YXIgZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XHJcbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleVBhdGg6IHBhdGggfHwgXCI8cm9vdD5cIixcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xyXG4gICAgdmFyIGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBlbnRyaWVzXzEgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgX2IgPSBlbnRyaWVzXzFbX2ldLCBrZXkgPSBfYlswXSwgbmVzdGVkVmFsdWUgPSBfYlsxXTtcclxuICAgICAgICB2YXIgbmVzdGVkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGhhc0lnbm9yZWRQYXRocyAmJiBpZ25vcmVkUGF0aHMuaW5kZXhPZihuZXN0ZWRQYXRoKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKG5lc3RlZFZhbHVlLCBuZXN0ZWRQYXRoLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2IgPSBvcHRpb25zLmlzU2VyaWFsaXphYmxlLCBpc1NlcmlhbGl6YWJsZSA9IF9iID09PSB2b2lkIDAgPyBpc1BsYWluIDogX2IsIGdldEVudHJpZXMgPSBvcHRpb25zLmdldEVudHJpZXMsIF9jID0gb3B0aW9ucy5pZ25vcmVkQWN0aW9ucywgaWdub3JlZEFjdGlvbnMgPSBfYyA9PT0gdm9pZCAwID8gW10gOiBfYywgX2QgPSBvcHRpb25zLmlnbm9yZWRBY3Rpb25QYXRocywgaWdub3JlZEFjdGlvblBhdGhzID0gX2QgPT09IHZvaWQgMCA/IFtcIm1ldGEuYXJnXCIsIFwibWV0YS5iYXNlUXVlcnlNZXRhXCJdIDogX2QsIF9lID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIGlnbm9yZWRQYXRocyA9IF9lID09PSB2b2lkIDAgPyBbXSA6IF9lLCBfZiA9IG9wdGlvbnMud2FybkFmdGVyLCB3YXJuQWZ0ZXIgPSBfZiA9PT0gdm9pZCAwID8gMzIgOiBfZiwgX2cgPSBvcHRpb25zLmlnbm9yZVN0YXRlLCBpZ25vcmVTdGF0ZSA9IF9nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9nO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZUFQSSkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICBpZiAoaWdub3JlZEFjdGlvbnMubGVuZ3RoICYmIGlnbm9yZWRBY3Rpb25zLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsIFwiU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlXCIpO1xyXG4gICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKGFjdGlvbiwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRBY3Rpb25QYXRocyk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5UGF0aCA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUua2V5UGF0aCwgdmFsdWUgPSBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogYFwiICsga2V5UGF0aCArIFwiYC4gVmFsdWU6XCIsIHZhbHVlLCBcIlxcblRha2UgYSBsb29rIGF0IHRoZSBsb2dpYyB0aGF0IGRpc3BhdGNoZWQgdGhpcyBhY3Rpb246IFwiLCBhY3Rpb24sIFwiXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvYWN0aW9ucyN3aHktc2hvdWxkLXR5cGUtYmUtYS1zdHJpbmctb3ItYXQtbGVhc3Qtc2VyaWFsaXphYmxlLXdoeS1zaG91bGQtbXktYWN0aW9uLXR5cGVzLWJlLWNvbnN0YW50cylcIiwgXCJcXG4oVG8gYWxsb3cgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZXMgc2VlOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGEpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcclxuICAgICAgICBpZiAoIWlnbm9yZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZUFQSS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShzdGF0ZSwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUua2V5UGF0aCwgdmFsdWUgPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gdGhlIHN0YXRlLCBpbiB0aGUgcGF0aDogYFwiICsga2V5UGF0aCArIFwiYC4gVmFsdWU6XCIsIHZhbHVlLCBcIlxcblRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoaXMgYWN0aW9uIHR5cGU6IFwiICsgYWN0aW9uLnR5cGUgKyBcIi5cXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9vcmdhbml6aW5nLXN0YXRlI2Nhbi1pLXB1dC1mdW5jdGlvbnMtcHJvbWlzZXMtb3Itb3RoZXItbm9uLXNlcmlhbGl6YWJsZS1pdGVtcy1pbi1teS1zdG9yZS1zdGF0ZSlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07IH07IH07XHJcbn1cclxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xyXG59XHJcbmZ1bmN0aW9uIGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2IgPSBvcHRpb25zLnRodW5rLCB0aHVuayA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5pbW11dGFibGVDaGVjaywgaW1tdXRhYmxlQ2hlY2sgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuc2VyaWFsaXphYmxlQ2hlY2ssIHNlcmlhbGl6YWJsZUNoZWNrID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcclxuICAgIHZhciBtaWRkbGV3YXJlQXJyYXkgPSBuZXcgTWlkZGxld2FyZUFycmF5KCk7XHJcbiAgICBpZiAodGh1bmspIHtcclxuICAgICAgICBpZiAoaXNCb29sZWFuKHRodW5rKSkge1xyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlLndpdGhFeHRyYUFyZ3VtZW50KHRodW5rLmV4dHJhQXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKGltbXV0YWJsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbW11dGFibGVPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIGlmICghaXNCb29sZWFuKGltbXV0YWJsZUNoZWNrKSkge1xyXG4gICAgICAgICAgICAgICAgaW1tdXRhYmxlT3B0aW9ucyA9IGltbXV0YWJsZUNoZWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShpbW11dGFibGVPcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXJpYWxpemFibGVDaGVjaykge1xyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXphYmxlT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIWlzQm9vbGVhbihzZXJpYWxpemFibGVDaGVjaykpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoc2VyaWFsaXphYmxlT3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtaWRkbGV3YXJlQXJyYXk7XHJcbn1cclxuLy8gc3JjL2NvbmZpZ3VyZVN0b3JlLnRzXHJcbnZhciBJU19QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShvcHRpb25zKSB7XHJcbiAgICB2YXIgY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlID0gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSgpO1xyXG4gICAgdmFyIF9iID0gb3B0aW9ucyB8fCB7fSwgX2MgPSBfYi5yZWR1Y2VyLCByZWR1Y2VyID0gX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLCBfZCA9IF9iLm1pZGRsZXdhcmUsIG1pZGRsZXdhcmUgPSBfZCA9PT0gdm9pZCAwID8gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKCkgOiBfZCwgX2UgPSBfYi5kZXZUb29scywgZGV2VG9vbHMgPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lLCBfZiA9IF9iLnByZWxvYWRlZFN0YXRlLCBwcmVsb2FkZWRTdGF0ZSA9IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZiwgX2cgPSBfYi5lbmhhbmNlcnMsIGVuaGFuY2VycyA9IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZztcclxuICAgIHZhciByb290UmVkdWNlcjtcclxuICAgIGlmICh0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcm9vdFJlZHVjZXIgPSByZWR1Y2VyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChyZWR1Y2VyKSkge1xyXG4gICAgICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInJlZHVjZXJcIiBpcyBhIHJlcXVpcmVkIGFyZ3VtZW50LCBhbmQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdCBvZiBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGNvbWJpbmVSZWR1Y2VycycpO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpbmFsTWlkZGxld2FyZSA9IG1pZGRsZXdhcmU7XHJcbiAgICBpZiAodHlwZW9mIGZpbmFsTWlkZGxld2FyZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgZmluYWxNaWRkbGV3YXJlID0gZmluYWxNaWRkbGV3YXJlKGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSk7XHJcbiAgICAgICAgaWYgKCFJU19QUk9EVUNUSU9OICYmICFBcnJheS5pc0FycmF5KGZpbmFsTWlkZGxld2FyZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2hlbiB1c2luZyBhIG1pZGRsZXdhcmUgYnVpbGRlciBmdW5jdGlvbiwgYW4gYXJyYXkgb2YgbWlkZGxld2FyZSBtdXN0IGJlIHJldHVybmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghSVNfUFJPRFVDVElPTiAmJiBmaW5hbE1pZGRsZXdhcmUuc29tZShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwiZnVuY3Rpb25cIjsgfSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlYWNoIG1pZGRsZXdhcmUgcHJvdmlkZWQgdG8gY29uZmlndXJlU3RvcmUgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZS5hcHBseSh2b2lkIDAsIGZpbmFsTWlkZGxld2FyZSk7XHJcbiAgICB2YXIgZmluYWxDb21wb3NlID0gY29tcG9zZTI7XHJcbiAgICBpZiAoZGV2VG9vbHMpIHtcclxuICAgICAgICBmaW5hbENvbXBvc2UgPSBjb21wb3NlV2l0aERldlRvb2xzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICAgICAgdHJhY2U6ICFJU19QUk9EVUNUSU9OXHJcbiAgICAgICAgfSwgdHlwZW9mIGRldlRvb2xzID09PSBcIm9iamVjdFwiICYmIGRldlRvb2xzKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3RvcmVFbmhhbmNlcnMgPSBbbWlkZGxld2FyZUVuaGFuY2VyXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVuaGFuY2VycykpIHtcclxuICAgICAgICBzdG9yZUVuaGFuY2VycyA9IF9fc3ByZWFkQXJyYXkoW21pZGRsZXdhcmVFbmhhbmNlcl0sIGVuaGFuY2Vycyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgZW5oYW5jZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdG9yZUVuaGFuY2VycyA9IGVuaGFuY2VycyhzdG9yZUVuaGFuY2Vycyk7XHJcbiAgICB9XHJcbiAgICB2YXIgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZS5hcHBseSh2b2lkIDAsIHN0b3JlRW5oYW5jZXJzKTtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXIpO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVBY3Rpb24udHNcclxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHR5cGUsIHByZXBhcmVBY3Rpb24pIHtcclxuICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVwYXJlZCA9IHByZXBhcmVBY3Rpb24uYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgICAgICAgICAgaWYgKCFwcmVwYXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJlcGFyZUFjdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcmVwYXJlZC5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0sIFwibWV0YVwiIGluIHByZXBhcmVkICYmIHsgbWV0YTogcHJlcGFyZWQubWV0YSB9KSwgXCJlcnJvclwiIGluIHByZXBhcmVkICYmIHsgZXJyb3I6IHByZXBhcmVkLmVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBhcmdzWzBdIH07XHJcbiAgICB9XHJcbiAgICBhY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJcIiArIHR5cGU7IH07XHJcbiAgICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xyXG4gICAgYWN0aW9uQ3JlYXRvci5tYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGFjdGlvbi50eXBlID09PSB0eXBlOyB9O1xyXG4gICAgcmV0dXJuIGFjdGlvbkNyZWF0b3I7XHJcbn1cclxuZnVuY3Rpb24gaXNGU0EoYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdChhY3Rpb24pICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpO1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4gW1widHlwZVwiLCBcInBheWxvYWRcIiwgXCJlcnJvclwiLCBcIm1ldGFcIl0uaW5kZXhPZihrZXkpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VHlwZShhY3Rpb25DcmVhdG9yKSB7XHJcbiAgICByZXR1cm4gXCJcIiArIGFjdGlvbkNyZWF0b3I7XHJcbn1cclxuLy8gc3JjL2NyZWF0ZVJlZHVjZXIudHNcclxuaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBpc0RyYWZ0IGFzIGlzRHJhZnQyLCBpc0RyYWZ0YWJsZSB9IGZyb20gXCJpbW1lclwiO1xyXG4vLyBzcmMvbWFwQnVpbGRlcnMudHNcclxuZnVuY3Rpb24gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2soYnVpbGRlckNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYWN0aW9uc01hcCA9IHt9O1xyXG4gICAgdmFyIGFjdGlvbk1hdGNoZXJzID0gW107XHJcbiAgICB2YXIgZGVmYXVsdENhc2VSZWR1Y2VyO1xyXG4gICAgdmFyIGJ1aWxkZXIgPSB7XHJcbiAgICAgICAgYWRkQ2FzZTogZnVuY3Rpb24gKHR5cGVPckFjdGlvbkNyZWF0b3IsIHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk1hdGNoZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSBcInN0cmluZ1wiID8gdHlwZU9yQWN0aW9uQ3JlYXRvciA6IHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgaW4gYWN0aW9uc01hcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWRkQ2FzZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25zTWFwW3R5cGVdID0gcmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNYXRjaGVyOiBmdW5jdGlvbiAobWF0Y2hlciwgcmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25NYXRjaGVycy5wdXNoKHsgbWF0Y2hlcjogbWF0Y2hlciwgcmVkdWNlcjogcmVkdWNlciB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREZWZhdWx0Q2FzZTogZnVuY3Rpb24gKHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCBjYW4gb25seSBiZSBjYWxsZWQgb25jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpO1xyXG4gICAgcmV0dXJuIFthY3Rpb25zTWFwLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXTtcclxufVxyXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xyXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgbWFwT3JCdWlsZGVyQ2FsbGJhY2ssIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgIGlmIChhY3Rpb25NYXRjaGVycyA9PT0gdm9pZCAwKSB7IGFjdGlvbk1hdGNoZXJzID0gW107IH1cclxuICAgIHZhciBfYiA9IHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2sobWFwT3JCdWlsZGVyQ2FsbGJhY2spIDogW21hcE9yQnVpbGRlckNhbGxiYWNrLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXSwgYWN0aW9uc01hcCA9IF9iWzBdLCBmaW5hbEFjdGlvbk1hdGNoZXJzID0gX2JbMV0sIGZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyID0gX2JbMl07XHJcbiAgICB2YXIgZnJvemVuSW5pdGlhbFN0YXRlID0gY3JlYXRlTmV4dFN0YXRlKGluaXRpYWxTdGF0ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IGZyb3plbkluaXRpYWxTdGF0ZTsgfVxyXG4gICAgICAgIHZhciBjYXNlUmVkdWNlcnMgPSBfX3NwcmVhZEFycmF5KFtcclxuICAgICAgICAgICAgYWN0aW9uc01hcFthY3Rpb24udHlwZV1cclxuICAgICAgICBdLCBmaW5hbEFjdGlvbk1hdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBfYi5tYXRjaGVyO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgdmFyIHJlZHVjZXIgPSBfYi5yZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKGNhc2VSZWR1Y2Vycy5maWx0ZXIoZnVuY3Rpb24gKGNyKSB7IHJldHVybiAhIWNyOyB9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXJzID0gW2ZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZnQyKHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWZ0ID0gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNEcmFmdGFibGUocHJldmlvdXNTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZVJlZHVjZXIocHJldmlvdXNTdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBIGNhc2UgcmVkdWNlciBvbiBhIG5vbi1kcmFmdGFibGUgdmFsdWUgbXVzdCBub3QgcmV0dXJuIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUocHJldmlvdXNTdGF0ZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICB9LCBzdGF0ZSk7XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9jcmVhdGVTbGljZS50c1xyXG5mdW5jdGlvbiBnZXRUeXBlMihzbGljZSwgYWN0aW9uS2V5KSB7XHJcbiAgICByZXR1cm4gc2xpY2UgKyBcIi9cIiArIGFjdGlvbktleTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTbGljZShvcHRpb25zKSB7XHJcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSwgaW5pdGlhbFN0YXRlID0gb3B0aW9ucy5pbml0aWFsU3RhdGU7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgbmFtZWAgaXMgYSByZXF1aXJlZCBvcHRpb24gZm9yIGNyZWF0ZVNsaWNlXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlZHVjZXJzID0gb3B0aW9ucy5yZWR1Y2VycyB8fCB7fTtcclxuICAgIHZhciBfYiA9IHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG9wdGlvbnMuZXh0cmFSZWR1Y2VycykgOiBbb3B0aW9ucy5leHRyYVJlZHVjZXJzXSwgX2MgPSBfYlswXSwgZXh0cmFSZWR1Y2VycyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jLCBfZCA9IF9iWzFdLCBhY3Rpb25NYXRjaGVycyA9IF9kID09PSB2b2lkIDAgPyBbXSA6IF9kLCBfZSA9IF9iWzJdLCBkZWZhdWx0Q2FzZVJlZHVjZXIgPSBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2U7XHJcbiAgICB2YXIgcmVkdWNlck5hbWVzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xyXG4gICAgdmFyIHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lID0ge307XHJcbiAgICB2YXIgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGUgPSB7fTtcclxuICAgIHZhciBhY3Rpb25DcmVhdG9ycyA9IHt9O1xyXG4gICAgcmVkdWNlck5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHJlZHVjZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlID0gcmVkdWNlcnNbcmVkdWNlck5hbWVdO1xyXG4gICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZTIobmFtZSwgcmVkdWNlck5hbWUpO1xyXG4gICAgICAgIHZhciBjYXNlUmVkdWNlcjtcclxuICAgICAgICB2YXIgcHJlcGFyZUNhbGxiYWNrO1xyXG4gICAgICAgIGlmIChcInJlZHVjZXJcIiBpbiBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkge1xyXG4gICAgICAgICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnJlZHVjZXI7XHJcbiAgICAgICAgICAgIHByZXBhcmVDYWxsYmFjayA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnByZXBhcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZVtyZWR1Y2VyTmFtZV0gPSBjYXNlUmVkdWNlcjtcclxuICAgICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZVt0eXBlXSA9IGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIGFjdGlvbkNyZWF0b3JzW3JlZHVjZXJOYW1lXSA9IHByZXBhcmVDYWxsYmFjayA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spIDogY3JlYXRlQWN0aW9uKHR5cGUpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZmluYWxDYXNlUmVkdWNlcnMgPSBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgZXh0cmFSZWR1Y2VycyksIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlKTtcclxuICAgIHZhciByZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGZpbmFsQ2FzZVJlZHVjZXJzLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICByZWR1Y2VyOiByZWR1Y2VyLFxyXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbkNyZWF0b3JzLFxyXG4gICAgICAgIGNhc2VSZWR1Y2Vyczogc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL2VudGl0eV9zdGF0ZS50c1xyXG5mdW5jdGlvbiBnZXRJbml0aWFsRW50aXR5U3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkczogW10sXHJcbiAgICAgICAgZW50aXRpZXM6IHt9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoYWRkaXRpb25hbFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxTdGF0ZSA9PT0gdm9pZCAwKSB7IGFkZGl0aW9uYWxTdGF0ZSA9IHt9OyB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCksIGFkZGl0aW9uYWxTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBnZXRJbml0aWFsU3RhdGU6IGdldEluaXRpYWxTdGF0ZSB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9zdGF0ZV9zZWxlY3RvcnMudHNcclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhzZWxlY3RTdGF0ZSkge1xyXG4gICAgICAgIHZhciBzZWxlY3RJZHMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmlkczsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0RW50aXRpZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmVudGl0aWVzOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RBbGwgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RJZHMsIHNlbGVjdEVudGl0aWVzLCBmdW5jdGlvbiAoaWRzLCBlbnRpdGllcykgeyByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGVudGl0aWVzW2lkXTsgfSk7IH0pO1xyXG4gICAgICAgIHZhciBzZWxlY3RJZCA9IGZ1bmN0aW9uIChfLCBpZCkgeyByZXR1cm4gaWQ7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEJ5SWQgPSBmdW5jdGlvbiAoZW50aXRpZXMsIGlkKSB7IHJldHVybiBlbnRpdGllc1tpZF07IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdFRvdGFsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBmdW5jdGlvbiAoaWRzKSB7IHJldHVybiBpZHMubGVuZ3RoOyB9KTtcclxuICAgICAgICBpZiAoIXNlbGVjdFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RJZHM6IHNlbGVjdElkcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RFbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEFsbDogc2VsZWN0QWxsLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VG90YWw6IHNlbGVjdFRvdGFsLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0QnlJZDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0RW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdEVudGl0aWVzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWxlY3RJZHM6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RJZHMpLFxyXG4gICAgICAgICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLFxyXG4gICAgICAgICAgICBzZWxlY3RBbGw6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RBbGwpLFxyXG4gICAgICAgICAgICBzZWxlY3RUb3RhbDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdFRvdGFsKSxcclxuICAgICAgICAgICAgc2VsZWN0QnlJZDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZ2V0U2VsZWN0b3JzOiBnZXRTZWxlY3RvcnMgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc3RhdGVfYWRhcHRlci50c1xyXG5pbXBvcnQgY3JlYXRlTmV4dFN0YXRlMiwgeyBpc0RyYWZ0IGFzIGlzRHJhZnQzIH0gZnJvbSBcImltbWVyXCI7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcihtdXRhdG9yKSB7XHJcbiAgICB2YXIgb3BlcmF0b3IgPSBjcmVhdGVTdGF0ZU9wZXJhdG9yKGZ1bmN0aW9uIChfLCBzdGF0ZSkgeyByZXR1cm4gbXV0YXRvcihzdGF0ZSk7IH0pO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBvcGVyYXRvcihzdGF0ZSwgdm9pZCAwKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVPcGVyYXRvcihtdXRhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gb3BlcmF0aW9uKHN0YXRlLCBhcmcpIHtcclxuICAgICAgICBmdW5jdGlvbiBpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0ZTQShhcmcyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJ1bk11dGF0b3IgPSBmdW5jdGlvbiAoZHJhZnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZykpIHtcclxuICAgICAgICAgICAgICAgIG11dGF0b3IoYXJnLnBheWxvYWQsIGRyYWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG11dGF0b3IoYXJnLCBkcmFmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0RyYWZ0MyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgcnVuTXV0YXRvcihzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUyKHN0YXRlLCBydW5NdXRhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy91dGlscy50c1xyXG5mdW5jdGlvbiBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpIHtcclxuICAgIHZhciBrZXkgPSBzZWxlY3RJZChlbnRpdHkpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBrZXkgPT09IHZvaWQgMCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBlbnRpdHkgcGFzc2VkIHRvIHRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uIHJldHVybmVkIHVuZGVmaW5lZC5cIiwgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHByb3ZpZGUgeW91ciBvd24gYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbi5cIiwgXCJUaGUgZW50aXR5IHRoYXQgd2FzIHBhc3NlZDpcIiwgZW50aXR5LCBcIlRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uOlwiLCBzZWxlY3RJZC50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuZnVuY3Rpb24gZW5zdXJlRW50aXRpZXNBcnJheShlbnRpdGllcykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50aXRpZXM7XHJcbn1cclxuZnVuY3Rpb24gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSB7XHJcbiAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgdmFyIGFkZGVkID0gW107XHJcbiAgICB2YXIgdXBkYXRlZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18xID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfMVtfaV07XHJcbiAgICAgICAgdmFyIGlkID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZC5wdXNoKHsgaWQ6IGlkLCBjaGFuZ2VzOiBlbnRpdHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZC5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFthZGRlZCwgdXBkYXRlZF07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpIHtcclxuICAgIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMiA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18yW19pXTtcclxuICAgICAgICAgICAgYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoIShrZXkgaW4gc3RhdGUuZW50aXRpZXMpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcy5wdXNoKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMyA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18zW19pXTtcclxuICAgICAgICAgICAgc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgc3RhdGUuaWRzID0gW107XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlT25lTXV0YWJseShrZXksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZU1hbnlNdXRhYmx5KFtrZXldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYW55TXV0YWJseShrZXlzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBkaWRNdXRhdGUgPSBmYWxzZTtcclxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIGRpZE11dGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGlkTXV0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBpZCBpbiBzdGF0ZS5lbnRpdGllczsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTXV0YWJseShzdGF0ZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcclxuICAgICAgICAgICAgaWRzOiBbXSxcclxuICAgICAgICAgICAgZW50aXRpZXM6IHt9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0YWtlTmV3S2V5KGtleXMsIHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWwyID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICB2YXIgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsMiwgdXBkYXRlLmNoYW5nZXMpO1xyXG4gICAgICAgIHZhciBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKTtcclxuICAgICAgICB2YXIgaGFzTmV3S2V5ID0gbmV3S2V5ICE9PSB1cGRhdGUuaWQ7XHJcbiAgICAgICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICAgICAgICBrZXlzW3VwZGF0ZS5pZF0gPSBuZXdLZXk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1tuZXdLZXldID0gdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gaGFzTmV3S2V5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBuZXdLZXlzID0ge307XHJcbiAgICAgICAgdmFyIHVwZGF0ZXNQZXJFbnRpdHkgPSB7fTtcclxuICAgICAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVwZGF0ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzOiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID8gdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdLmNoYW5nZXMgOiBudWxsKSwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlcyA9IE9iamVjdC52YWx1ZXModXBkYXRlc1BlckVudGl0eSk7XHJcbiAgICAgICAgdmFyIGRpZE11dGF0ZUVudGl0aWVzID0gdXBkYXRlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xyXG4gICAgICAgICAgICB2YXIgZGlkTXV0YXRlSWRzID0gdXBkYXRlcy5maWx0ZXIoZnVuY3Rpb24gKHVwZGF0ZSkgeyByZXR1cm4gdGFrZU5ld0tleShuZXdLZXlzLCB1cGRhdGUsIHN0YXRlKTsgfSkubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgaWYgKGRpZE11dGF0ZUlkcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIG5ld0tleXNbaWRdIHx8IGlkOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIF9iID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSwgYWRkZWQgPSBfYlswXSwgdXBkYXRlZCA9IF9iWzFdO1xyXG4gICAgICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmVBbGw6IGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcihyZW1vdmVBbGxNdXRhYmx5KSxcclxuICAgICAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXHJcbiAgICAgICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICAgICAgc2V0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHJlbW92ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVPbmVNdXRhYmx5KSxcclxuICAgICAgICByZW1vdmVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU1hbnlNdXRhYmx5KVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc29ydGVkX3N0YXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0KSB7XHJcbiAgICB2YXIgX2IgPSBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCksIHJlbW92ZU9uZSA9IF9iLnJlbW92ZU9uZSwgcmVtb3ZlTWFueSA9IF9iLnJlbW92ZU1hbnksIHJlbW92ZUFsbCA9IF9iLnJlbW92ZUFsbDtcclxuICAgIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBhZGRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICB2YXIgbW9kZWxzID0gbmV3RW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gIShzZWxlY3RJZFZhbHVlKG1vZGVsLCBzZWxlY3RJZCkgaW4gc3RhdGUuZW50aXRpZXMpOyB9KTtcclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gc2V0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgaWYgKG5ld0VudGl0aWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBtZXJnZShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllcyA9IHt9O1xyXG4gICAgICAgIHN0YXRlLmlkcyA9IFtdO1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VVcGRhdGVkTW9kZWwobW9kZWxzLCB1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKCEodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcmlnaW5hbDIgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIHZhciB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwyLCB1cGRhdGUuY2hhbmdlcyk7XHJcbiAgICAgICAgdmFyIG5ld0tleSA9IHNlbGVjdElkVmFsdWUodXBkYXRlZCwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIG1vZGVscy5wdXNoKHVwZGF0ZWQpO1xyXG4gICAgICAgIHJldHVybiBuZXdLZXkgIT09IHVwZGF0ZS5pZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG1vZGVscyA9IFtdO1xyXG4gICAgICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlKSB7IHJldHVybiB0YWtlVXBkYXRlZE1vZGVsKG1vZGVscywgdXBkYXRlLCBzdGF0ZSk7IH0pO1xyXG4gICAgICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlKG1vZGVscywgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIF9iID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSwgYWRkZWQgPSBfYlswXSwgdXBkYXRlZCA9IF9iWzFdO1xyXG4gICAgICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldID09PSBiW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWVyZ2UobW9kZWxzLCBzdGF0ZSkge1xyXG4gICAgICAgIG1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbnRpdGllc1tzZWxlY3RJZChtb2RlbCldID0gbW9kZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGFsbEVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcyk7XHJcbiAgICAgICAgYWxsRW50aXRpZXMuc29ydChzb3J0KTtcclxuICAgICAgICB2YXIgbmV3U29ydGVkSWRzID0gYWxsRW50aXRpZXMubWFwKHNlbGVjdElkKTtcclxuICAgICAgICB2YXIgaWRzID0gc3RhdGUuaWRzO1xyXG4gICAgICAgIGlmICghYXJlQXJyYXlzRXF1YWwoaWRzLCBuZXdTb3J0ZWRJZHMpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcyA9IG5ld1NvcnRlZElkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbW92ZU9uZTogcmVtb3ZlT25lLFxyXG4gICAgICAgIHJlbW92ZU1hbnk6IHJlbW92ZU1hbnksXHJcbiAgICAgICAgcmVtb3ZlQWxsOiByZW1vdmVBbGwsXHJcbiAgICAgICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0T25lTXV0YWJseSksXHJcbiAgICAgICAgc2V0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgICAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvY3JlYXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlRW50aXR5QWRhcHRlcihvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9iID0gX19zcHJlYWRWYWx1ZXMoe1xyXG4gICAgICAgIHNvcnRDb21wYXJlcjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0SWQ6IGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UuaWQ7IH1cclxuICAgIH0sIG9wdGlvbnMpLCBzZWxlY3RJZCA9IF9iLnNlbGVjdElkLCBzb3J0Q29tcGFyZXIgPSBfYi5zb3J0Q29tcGFyZXI7XHJcbiAgICB2YXIgc3RhdGVGYWN0b3J5ID0gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSgpO1xyXG4gICAgdmFyIHNlbGVjdG9yc0ZhY3RvcnkgPSBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCk7XHJcbiAgICB2YXIgc3RhdGVBZGFwdGVyID0gc29ydENvbXBhcmVyID8gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0Q29tcGFyZXIpIDogY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpO1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICBzZWxlY3RJZDogc2VsZWN0SWQsXHJcbiAgICAgICAgc29ydENvbXBhcmVyOiBzb3J0Q29tcGFyZXJcclxuICAgIH0sIHN0YXRlRmFjdG9yeSksIHNlbGVjdG9yc0ZhY3RvcnkpLCBzdGF0ZUFkYXB0ZXIpO1xyXG59XHJcbi8vIHNyYy9uYW5vaWQudHNcclxudmFyIHVybEFscGhhYmV0ID0gXCJNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXXCI7XHJcbnZhciBuYW5vaWQgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgaWYgKHNpemUgPT09IHZvaWQgMCkgeyBzaXplID0gMjE7IH1cclxuICAgIHZhciBpZCA9IFwiXCI7XHJcbiAgICB2YXIgaSA9IHNpemU7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWQ7XHJcbn07XHJcbi8vIHNyYy9jcmVhdGVBc3luY1RodW5rLnRzXHJcbnZhciBjb21tb25Qcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJuYW1lXCIsXHJcbiAgICBcIm1lc3NhZ2VcIixcclxuICAgIFwic3RhY2tcIixcclxuICAgIFwiY29kZVwiXHJcbl07XHJcbnZhciBSZWplY3RXaXRoVmFsdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWplY3RXaXRoVmFsdWUocGF5bG9hZCwgbWV0YSkge1xyXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZWplY3RXaXRoVmFsdWU7XHJcbn0oKSk7XHJcbnZhciBGdWxmaWxsV2l0aE1ldGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGdWxmaWxsV2l0aE1ldGEocGF5bG9hZCwgbWV0YSkge1xyXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBGdWxmaWxsV2l0aE1ldGE7XHJcbn0oKSk7XHJcbnZhciBtaW5pU2VyaWFsaXplRXJyb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgc2ltcGxlRXJyb3IgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbW1vblByb3BlcnRpZXNfMSA9IGNvbW1vblByb3BlcnRpZXM7IF9pIDwgY29tbW9uUHJvcGVydGllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBjb21tb25Qcm9wZXJ0aWVzXzFbX2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlW3Byb3BlcnR5XSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc2ltcGxlRXJyb3JbcHJvcGVydHldID0gdmFsdWVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaW1wbGVFcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IG1lc3NhZ2U6IFN0cmluZyh2YWx1ZSkgfTtcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlQXN5bmNUaHVuayh0eXBlUHJlZml4LCBwYXlsb2FkQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGZ1bGZpbGxlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvZnVsZmlsbGVkXCIsIGZ1bmN0aW9uIChwYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJmdWxmaWxsZWRcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9KTsgfSk7XHJcbiAgICB2YXIgcGVuZGluZyA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcGVuZGluZ1wiLCBmdW5jdGlvbiAocmVxdWVzdElkLCBhcmcsIG1ldGEpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgcGF5bG9hZDogdm9pZCAwLFxyXG4gICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJwZW5kaW5nXCJcclxuICAgICAgICB9KVxyXG4gICAgfSk7IH0pO1xyXG4gICAgdmFyIHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9yZWplY3RlZFwiLCBmdW5jdGlvbiAoZXJyb3IsIHJlcXVlc3RJZCwgYXJnLCBwYXlsb2FkLCBtZXRhKSB7IHJldHVybiAoe1xyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgZXJyb3I6IChvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplRXJyb3IgfHwgbWluaVNlcmlhbGl6ZUVycm9yKShlcnJvciB8fCBcIlJlamVjdGVkXCIpLFxyXG4gICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgcmVqZWN0ZWRXaXRoVmFsdWU6ICEhcGF5bG9hZCxcclxuICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJyZWplY3RlZFwiLFxyXG4gICAgICAgICAgICBhYm9ydGVkOiAoZXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yLm5hbWUpID09PSBcIkFib3J0RXJyb3JcIixcclxuICAgICAgICAgICAgY29uZGl0aW9uOiAoZXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yLm5hbWUpID09PSBcIkNvbmRpdGlvbkVycm9yXCJcclxuICAgICAgICB9KVxyXG4gICAgfSk7IH0pO1xyXG4gICAgdmFyIGRpc3BsYXllZFdhcm5pbmcgPSBmYWxzZTtcclxuICAgIHZhciBBQyA9IHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09IFwidW5kZWZpbmVkXCIgPyBBYm9ydENvbnRyb2xsZXIgOiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWwgPSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uYWJvcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpc3BsYXllZFdhcm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJUaGlzIHBsYXRmb3JtIGRvZXMgbm90IGltcGxlbWVudCBBYm9ydENvbnRyb2xsZXIuIFxcbklmIHlvdSB3YW50IHRvIHVzZSB0aGUgQWJvcnRDb250cm9sbGVyIHRvIHJlYWN0IHRvIGBhYm9ydGAgZXZlbnRzLCBwbGVhc2UgY29uc2lkZXIgaW1wb3J0aW5nIGEgcG9seWZpbGwgbGlrZSAnYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsL2Rpc3QvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsLW9ubHknLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG4gICAgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcihhcmcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmEpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdElkID0gKChfYSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuaWRHZW5lcmF0b3IpICE9IG51bGwgPyBfYSA6IG5hbm9pZCkoKTtcclxuICAgICAgICAgICAgdmFyIGFib3J0Q29udHJvbGxlciA9IG5ldyBBQygpO1xyXG4gICAgICAgICAgICB2YXIgYWJvcnRSZWFzb247XHJcbiAgICAgICAgICAgIHZhciBhYm9ydGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfLCByZWplY3QpIHsgcmV0dXJuIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdCh7IG5hbWU6IFwiQWJvcnRFcnJvclwiLCBtZXNzYWdlOiBhYm9ydFJlYXNvbiB8fCBcIkFib3J0ZWRcIiB9KTsgfSk7IH0pO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhYm9ydChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRSZWFzb24gPSByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hMiwgZmluYWxBY3Rpb24sIGVycl8xLCBza2lwRGlzcGF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNvbmRpdGlvbiAmJiBvcHRpb25zLmNvbmRpdGlvbihhcmcsIHsgZ2V0U3RhdGU6IGdldFN0YXRlLCBleHRyYTogZXh0cmEgfSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29uZGl0aW9uRXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWJvcnRlZCBkdWUgdG8gY29uZGl0aW9uIGNhbGxiYWNrIHJldHVybmluZyBmYWxzZS5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChwZW5kaW5nKHJlcXVlc3RJZCwgYXJnLCAoX2EyID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXRQZW5kaW5nTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jYWxsKG9wdGlvbnMsIHsgcmVxdWVzdElkOiByZXF1ZXN0SWQsIGFyZzogYXJnIH0sIHsgZ2V0U3RhdGU6IGdldFN0YXRlLCBleHRyYTogZXh0cmEgfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlZFByb21pc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocGF5bG9hZENyZWF0b3IoYXJnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFdpdGhWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlLCBtZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGZpbGxXaXRoVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZ1bGZpbGxXaXRoTWV0YSh2YWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRnVsZmlsbFdpdGhNZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LnBheWxvYWQsIHJlcXVlc3RJZCwgYXJnLCByZXN1bHQubWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LCByZXF1ZXN0SWQsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBlcnJfMSBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSA/IHJlamVjdGVkKG51bGwsIHJlcXVlc3RJZCwgYXJnLCBlcnJfMS5wYXlsb2FkLCBlcnJfMS5tZXRhKSA6IHJlamVjdGVkKGVycl8xLCByZXF1ZXN0SWQsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcERpc3BhdGNoID0gb3B0aW9ucyAmJiAhb3B0aW9ucy5kaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiAmJiByZWplY3RlZC5tYXRjaChmaW5hbEFjdGlvbikgJiYgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwRGlzcGF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmluYWxBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmluYWxBY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydDogYWJvcnQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgdW53cmFwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbih1bndyYXBSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWN0aW9uQ3JlYXRvciwge1xyXG4gICAgICAgIHBlbmRpbmc6IHBlbmRpbmcsXHJcbiAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxyXG4gICAgICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxyXG4gICAgICAgIHR5cGVQcmVmaXg6IHR5cGVQcmVmaXhcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVud3JhcFJlc3VsdChhY3Rpb24pIHtcclxuICAgIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZSkge1xyXG4gICAgICAgIHRocm93IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi5lcnJvcikge1xyXG4gICAgICAgIHRocm93IGFjdGlvbi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxufVxyXG4vLyBzcmMvdHNIZWxwZXJzLnRzXHJcbnZhciBoYXNNYXRjaEZ1bmN0aW9uID0gZnVuY3Rpb24gKHYpIHtcclxuICAgIHJldHVybiB2ICYmIHR5cGVvZiB2Lm1hdGNoID09PSBcImZ1bmN0aW9uXCI7XHJcbn07XHJcbi8vIHNyYy9tYXRjaGVycy50c1xyXG52YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uIChtYXRjaGVyLCBhY3Rpb24pIHtcclxuICAgIGlmIChoYXNNYXRjaEZ1bmN0aW9uKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIubWF0Y2goYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGlzQW55T2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLnNvbWUoZnVuY3Rpb24gKG1hdGNoZXIpIHsgcmV0dXJuIG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKTsgfSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzQWxsT2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLmV2ZXJ5KGZ1bmN0aW9uIChtYXRjaGVyKSB7IHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7IH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIHZhbGlkU3RhdHVzKSB7XHJcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLm1ldGEpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGhhc1ZhbGlkUmVxdWVzdElkID0gdHlwZW9mIGFjdGlvbi5tZXRhLnJlcXVlc3RJZCA9PT0gXCJzdHJpbmdcIjtcclxuICAgIHZhciBoYXNWYWxpZFJlcXVlc3RTdGF0dXMgPSB2YWxpZFN0YXR1cy5pbmRleE9mKGFjdGlvbi5tZXRhLnJlcXVlc3RTdGF0dXMpID4gLTE7XHJcbiAgICByZXR1cm4gaGFzVmFsaWRSZXF1ZXN0SWQgJiYgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FycmF5KGEpIHtcclxuICAgIHJldHVybiB0eXBlb2YgYVswXSA9PT0gXCJmdW5jdGlvblwiICYmIFwicGVuZGluZ1wiIGluIGFbMF0gJiYgXCJmdWxmaWxsZWRcIiBpbiBhWzBdICYmIFwicmVqZWN0ZWRcIiBpbiBhWzBdO1xyXG59XHJcbmZ1bmN0aW9uIGlzUGVuZGluZygpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNQZW5kaW5nKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsucGVuZGluZzsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1JlamVjdGVkKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicmVqZWN0ZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNSZWplY3RlZCgpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLnJlamVjdGVkOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBoYXNGbGFnID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWU7XHJcbiAgICB9O1xyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNGdWxmaWxsZWQoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJmdWxmaWxsZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNGdWxmaWxsZWQoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5mdWxmaWxsZWQ7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNBc3luY1RodW5rQWN0aW9uKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiLCBcImZ1bGZpbGxlZFwiLCBcInJlamVjdGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQXN5bmNUaHVua0FjdGlvbigpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhc3luY1RodW5rc18xID0gYXN5bmNUaHVua3M7IF9pIDwgYXN5bmNUaHVua3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGFzeW5jVGh1bmsgPSBhc3luY1RodW5rc18xW19pXTtcclxuICAgICAgICAgICAgbWF0Y2hlcnMucHVzaChhc3luY1RodW5rLnBlbmRpbmcsIGFzeW5jVGh1bmsucmVqZWN0ZWQsIGFzeW5jVGh1bmsuZnVsZmlsbGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvaW5kZXgudHNcclxuZW5hYmxlRVM1KCk7XHJcbmV4cG9ydCB7IE1pZGRsZXdhcmVBcnJheSwgY29uZmlndXJlU3RvcmUsIGNyZWF0ZUFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IsIGNyZWF0ZUVudGl0eUFkYXB0ZXIsIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSwgZGVmYXVsdDIgYXMgY3JlYXRlTmV4dFN0YXRlLCBjcmVhdGVSZWR1Y2VyLCBjcmVhdGVTZWxlY3RvcjIgYXMgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSwgY3JlYXRlU2xpY2UsIGN1cnJlbnQyIGFzIGN1cnJlbnQsIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSwgZnJlZXplLCBnZXREZWZhdWx0TWlkZGxld2FyZSwgZ2V0VHlwZSwgaXNBbGxPZiwgaXNBbnlPZiwgaXNBc3luY1RodW5rQWN0aW9uLCBpc0RyYWZ0NCBhcyBpc0RyYWZ0LCBpc0Z1bGZpbGxlZCwgaXNJbW11dGFibGVEZWZhdWx0LCBpc1BlbmRpbmcsIGlzUGxhaW4sIGlzUGxhaW5PYmplY3QsIGlzUmVqZWN0ZWQsIGlzUmVqZWN0ZWRXaXRoVmFsdWUsIG1pbmlTZXJpYWxpemVFcnJvciwgbmFub2lkLCBvcmlnaW5hbCwgdW53cmFwUmVzdWx0IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiLCJmdW5jdGlvbiBuKG4pe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodD4xP3QtMTowKSxlPTE7ZTx0O2UrKylyW2UtMV09YXJndW1lbnRzW2VdO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBpPVlbbl0sbz1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShudWxsLHIpOmk6XCJ1bmtub3duIGVycm9yIG5yOiBcIituO3Rocm93IEVycm9yKFwiW0ltbWVyXSBcIitvKX10aHJvdyBFcnJvcihcIltJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6IFwiK24rKHIubGVuZ3RoP1wiIFwiK3IubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIidcIituK1wiJ1wifSkpLmpvaW4oXCIsXCIpOlwiXCIpK1wiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmXCIpfWZ1bmN0aW9uIHQobil7cmV0dXJuISFuJiYhIW5bUV19ZnVuY3Rpb24gcihuKXtyZXR1cm4hIW4mJihmdW5jdGlvbihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuITE7dmFyIHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO2lmKG51bGw9PT10KXJldHVybiEwO3ZhciByPU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4gcj09PU9iamVjdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgciYmRnVuY3Rpb24udG9TdHJpbmcuY2FsbChyKT09PVp9KG4pfHxBcnJheS5pc0FycmF5KG4pfHwhIW5bTF18fCEhbi5jb25zdHJ1Y3RvcltMXXx8cyhuKXx8dihuKSl9ZnVuY3Rpb24gZShyKXtyZXR1cm4gdChyKXx8bigyMyxyKSxyW1FdLnR9ZnVuY3Rpb24gaShuLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLDA9PT1vKG4pPyhyP09iamVjdC5rZXlzOm5uKShuKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyJiZcInN5bWJvbFwiPT10eXBlb2YgZXx8dChlLG5bZV0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiB0KGUscixuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciB0PW5bUV07cmV0dXJuIHQ/dC5pPjM/dC5pLTQ6dC5pOkFycmF5LmlzQXJyYXkobik/MTpzKG4pPzI6dihuKT8zOjB9ZnVuY3Rpb24gdShuLHQpe3JldHVybiAyPT09byhuKT9uLmhhcyh0KTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KX1mdW5jdGlvbiBhKG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHQpOm5bdF19ZnVuY3Rpb24gZihuLHQscil7dmFyIGU9byhuKTsyPT09ZT9uLnNldCh0LHIpOjM9PT1lPyhuLmRlbGV0ZSh0KSxuLmFkZChyKSk6blt0XT1yfWZ1bmN0aW9uIGMobix0KXtyZXR1cm4gbj09PXQ/MCE9PW58fDEvbj09MS90Om4hPW4mJnQhPXR9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHQ9dG4obik7ZGVsZXRlIHRbUV07Zm9yKHZhciByPW5uKHQpLGU9MDtlPHIubGVuZ3RoO2UrKyl7dmFyIGk9cltlXSxvPXRbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJih0W2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSx0KX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHx0KG4pfHwhcihuKT9uOihvKG4pPjEmJihuLnNldD1uLmFkZD1uLmNsZWFyPW4uZGVsZXRlPWgpLE9iamVjdC5mcmVlemUobiksZSYmaShuLChmdW5jdGlvbihuLHQpe3JldHVybiBkKHQsITApfSksITApLG4pfWZ1bmN0aW9uIGgoKXtuKDIpfWZ1bmN0aW9uIHkobil7cmV0dXJuIG51bGw9PW58fFwib2JqZWN0XCIhPXR5cGVvZiBufHxPYmplY3QuaXNGcm96ZW4obil9ZnVuY3Rpb24gYih0KXt2YXIgcj1yblt0XTtyZXR1cm4gcnx8bigxOCx0KSxyfWZ1bmN0aW9uIG0obix0KXtybltuXXx8KHJuW25dPXQpfWZ1bmN0aW9uIF8oKXtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxVfHxuKDApLFV9ZnVuY3Rpb24gaihuLHQpe3QmJihiKFwiUGF0Y2hlc1wiKSxuLnU9W10sbi5zPVtdLG4udj10KX1mdW5jdGlvbiBPKG4pe2cobiksbi5wLmZvckVhY2goUyksbi5wPW51bGx9ZnVuY3Rpb24gZyhuKXtuPT09VSYmKFU9bi5sKX1mdW5jdGlvbiB3KG4pe3JldHVybiBVPXtwOltdLGw6VSxoOm4sbTohMCxfOjB9fWZ1bmN0aW9uIFMobil7dmFyIHQ9bltRXTswPT09dC5pfHwxPT09dC5pP3QuaigpOnQuTz0hMH1mdW5jdGlvbiBQKHQsZSl7ZS5fPWUucC5sZW5ndGg7dmFyIGk9ZS5wWzBdLG89dm9pZCAwIT09dCYmdCE9PWk7cmV0dXJuIGUuaC5nfHxiKFwiRVM1XCIpLlMoZSx0LG8pLG8/KGlbUV0uUCYmKE8oZSksbig0KSkscih0KSYmKHQ9TShlLHQpLGUubHx8eChlLHQpKSxlLnUmJmIoXCJQYXRjaGVzXCIpLk0oaVtRXSx0LGUudSxlLnMpKTp0PU0oZSxpLFtdKSxPKGUpLGUudSYmZS52KGUudSxlLnMpLHQhPT1IP3Q6dm9pZCAwfWZ1bmN0aW9uIE0obix0LHIpe2lmKHkodCkpcmV0dXJuIHQ7dmFyIGU9dFtRXTtpZighZSlyZXR1cm4gaSh0LChmdW5jdGlvbihpLG8pe3JldHVybiBBKG4sZSx0LGksbyxyKX0pLCEwKSx0O2lmKGUuQSE9PW4pcmV0dXJuIHQ7aWYoIWUuUClyZXR1cm4geChuLGUudCwhMCksZS50O2lmKCFlLkkpe2UuST0hMCxlLkEuXy0tO3ZhciBvPTQ9PT1lLml8fDU9PT1lLmk/ZS5vPWwoZS5rKTplLm87aSgzPT09ZS5pP25ldyBTZXQobyk6bywoZnVuY3Rpb24odCxpKXtyZXR1cm4gQShuLGUsbyx0LGkscil9KSkseChuLG8sITEpLHImJm4udSYmYihcIlBhdGNoZXNcIikuUihlLHIsbi51LG4ucyl9cmV0dXJuIGUub31mdW5jdGlvbiBBKGUsaSxvLGEsYyxzKXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjPT09byYmbig1KSx0KGMpKXt2YXIgdj1NKGUsYyxzJiZpJiYzIT09aS5pJiYhdShpLkQsYSk/cy5jb25jYXQoYSk6dm9pZCAwKTtpZihmKG8sYSx2KSwhdCh2KSlyZXR1cm47ZS5tPSExfWlmKHIoYykmJiF5KGMpKXtpZighZS5oLkYmJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLG4uaC5GJiZuLm0mJmQodCxyKX1mdW5jdGlvbiB6KG4sdCl7dmFyIHI9bltRXTtyZXR1cm4ocj9wKHIpOm4pW3RdfWZ1bmN0aW9uIEkobix0KXtpZih0IGluIG4pZm9yKHZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtyOyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO2lmKGUpcmV0dXJuIGU7cj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yocil9fWZ1bmN0aW9uIGsobil7bi5QfHwobi5QPSEwLG4ubCYmayhuLmwpKX1mdW5jdGlvbiBFKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIFIobix0LHIpe3ZhciBlPXModCk/YihcIk1hcFNldFwiKS5OKHQscik6dih0KT9iKFwiTWFwU2V0XCIpLlQodCxyKTpuLmc/ZnVuY3Rpb24obix0KXt2YXIgcj1BcnJheS5pc0FycmF5KG4pLGU9e2k6cj8xOjAsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1lbjtyJiYoaT1bZV0sbz1vbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHQscik6YihcIkVTNVwiKS5KKHQscik7cmV0dXJuKHI/ci5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gRChlKXtyZXR1cm4gdChlKXx8bigyMixlKSxmdW5jdGlvbiBuKHQpe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLHU9dFtRXSxjPW8odCk7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPUYodCxjKSx1Lkk9ITF9ZWxzZSBlPUYodCxjKTtyZXR1cm4gaShlLChmdW5jdGlvbih0LHIpe3UmJmEodS50LHQpPT09cnx8ZihlLHQsbihyKSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBGKG4sdCl7c3dpdGNoKHQpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gTigpe2Z1bmN0aW9uIHIobix0KXt2YXIgcj1zW25dO3JldHVybiByP3IuZW51bWVyYWJsZT10OnNbbl09cj17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6dCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCksZW4uZ2V0KHQsbil9LHNldDpmdW5jdGlvbih0KXt2YXIgcj10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYociksZW4uc2V0KHIsbix0KX19LHJ9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHQ9bi5sZW5ndGgtMTt0Pj0wO3QtLSl7dmFyIHI9blt0XVtRXTtpZighci5QKXN3aXRjaChyLmkpe2Nhc2UgNTphKHIpJiZrKHIpO2JyZWFrO2Nhc2UgNDpvKHIpJiZrKHIpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHQ9bi50LHI9bi5rLGU9bm4ociksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldO2lmKG8hPT1RKXt2YXIgYT10W29dO2lmKHZvaWQgMD09PWEmJiF1KHQsbykpcmV0dXJuITA7dmFyIGY9cltvXSxzPWYmJmZbUV07aWYocz9zLnQhPT1hOiFjKGYsYSkpcmV0dXJuITB9fXZhciB2PSEhdFtRXTtyZXR1cm4gZS5sZW5ndGghPT1ubih0KS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciB0PW4uaztpZih0Lmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHQubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBmKHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obix0KXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obix0KXtpZihuKXtmb3IodmFyIGU9QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2kscihpLCEwKSk7cmV0dXJuIGV9dmFyIG89dG4odCk7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PW5uKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXIoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLG8pfShlLG4pLG89e2k6ZT81OjQsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOmksbzpudWxsLE86ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4scixvKXtvP3QocikmJnJbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHQpe2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgcj10W1FdO2lmKHIpe3ZhciBlPXIudCxvPXIuayxmPXIuRCxjPXIuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHQpe3QhPT1RJiYodm9pZCAwIT09ZVt0XXx8dShlLHQpP2ZbdF18fG4ob1t0XSk6KGZbdF09ITAsayhyKSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxrKHIpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHIpJiYoayhyKSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKXZvaWQgMD09PWZbbF0mJm4ob1tsXSl9fX19KG4ucFswXSksZShuLnApKX0sSzpmdW5jdGlvbihuKXtyZXR1cm4gND09PW4uaT9vKG4pOmEobil9fSl9ZnVuY3Rpb24gVCgpe2Z1bmN0aW9uIGUobil7aWYoIXIobikpcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAoZSk7aWYocyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLGUoblsxXSldfSkpKTtpZih2KG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKGUpKTt2YXIgdD1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBpIGluIG4pdFtpXT1lKG5baV0pO3JldHVybiB1KG4sTCkmJih0W0xdPW5bTF0pLHR9ZnVuY3Rpb24gZihuKXtyZXR1cm4gdChuKT9lKG4pOm59dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKHQscil7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocil7Zm9yKHZhciBpPXIucGF0aCx1PXIub3AsZj10LHM9MDtzPGkubGVuZ3RoLTE7cysrKXt2YXIgdj1vKGYpLHA9XCJcIitpW3NdOzAhPT12JiYxIT09dnx8XCJfX3Byb3RvX19cIiE9PXAmJlwiY29uc3RydWN0b3JcIiE9PXB8fG4oMjQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJlwicHJvdG90eXBlXCI9PT1wJiZuKDI0KSxcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYscCkpJiZuKDE1LGkuam9pbihcIi9cIikpfXZhciBsPW8oZiksZD1lKHIudmFsdWUpLGg9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaChsKXtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlIGM6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwwLGQpO2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6cmV0dXJuIGYuYWRkKGQpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUoaCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZShyLnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltoXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHR9LFI6ZnVuY3Rpb24obix0LHIsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBvPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9dC5jb25jYXQobik7ci5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHQscixlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLkQsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2Uscl07cj1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9dC5jb25jYXQoW3ZdKTtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9dC5jb25jYXQoW2xdKTtyLnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnQuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obix0LHIsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHQscixlKX19LE06ZnVuY3Rpb24obix0LHIsZSl7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnQ9PT1IP3ZvaWQgMDp0fSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOm4udH0pfX0pfWZ1bmN0aW9uIEMoKXtmdW5jdGlvbiB0KG4sdCl7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9bn1hKG4sdCksbi5wcm90b3R5cGU9KHIucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiBlKG4pe24ub3x8KG4uRD1uZXcgTWFwLG4ubz1uZXcgTWFwKG4udCkpfWZ1bmN0aW9uIG8obil7bi5vfHwobi5vPW5ldyBTZXQsbi50LmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKHIodCkpe3ZhciBlPVIobi5BLmgsdCxuKTtuLnAuc2V0KHQsZSksbi5vLmFkZChlKX1lbHNlIG4uby5hZGQodCl9KSkpfWZ1bmN0aW9uIHUodCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkocCh0KSkpfXZhciBhPWZ1bmN0aW9uKG4sdCl7cmV0dXJuKGE9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKG4sdCl7bi5fX3Byb3RvX189dH18fGZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKG5bcl09dFtyXSl9KShuLHQpfSxmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW1FdPXtpOjIsbDp0LEE6dD90LkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCxEOnZvaWQgMCx0Om4sazp0aGlzLEM6ITEsTzohMX0sdGhpc310KG4sTWFwKTt2YXIgbz1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksby5oYXM9ZnVuY3Rpb24obil7cmV0dXJuIHAodGhpc1tRXSkuaGFzKG4pfSxvLnNldD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXNbUV07cmV0dXJuIHUocikscChyKS5oYXMobikmJnAocikuZ2V0KG4pPT09dHx8KGUociksayhyKSxyLkQuc2V0KG4sITApLHIuby5zZXQobix0KSxyLkQuc2V0KG4sITApKSx0aGlzfSxvLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxlKHQpLGsodCksdC5ELnNldChuLCExKSx0Lm8uZGVsZXRlKG4pLCEwfSxvLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKGUobiksayhuKSxuLkQ9bmV3IE1hcCxpKG4udCwoZnVuY3Rpb24odCl7bi5ELnNldCh0LCExKX0pKSxuLm8uY2xlYXIoKSl9LG8uZm9yRWFjaD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXM7cCh0aGlzW1FdKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe24uY2FsbCh0LHIuZ2V0KGkpLGkscil9KSl9LG8uZ2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07dSh0KTt2YXIgaT1wKHQpLmdldChuKTtpZih0Lkl8fCFyKGkpKXJldHVybiBpO2lmKGkhPT10LnQuZ2V0KG4pKXJldHVybiBpO3ZhciBvPVIodC5BLmgsaSx0KTtyZXR1cm4gZSh0KSx0Lm8uc2V0KG4sbyksb30sby5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkua2V5cygpfSxvLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiB0LnZhbHVlcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtyZXR1cm4gbi5kb25lP246e2RvbmU6ITEsdmFsdWU6dC5nZXQobi52YWx1ZSl9fSxufSxvLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC5lbnRyaWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO2lmKG4uZG9uZSlyZXR1cm4gbjt2YXIgZT10LmdldChuLnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbbi52YWx1ZSxlXX19LG59LG9bVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LG59KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aTozLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDpuLGs6dGhpcyxwOm5ldyBNYXAsTzohMSxDOiExfSx0aGlzfXQobixTZXQpO3ZhciByPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocixcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxyLmhhcz1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHQubz8hIXQuby5oYXMobil8fCEoIXQucC5oYXMobil8fCF0Lm8uaGFzKHQucC5nZXQobikpKTp0LnQuaGFzKG4pfSxyLmFkZD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHRoaXMuaGFzKG4pfHwobyh0KSxrKHQpLHQuby5hZGQobikpLHRoaXN9LHIuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLG8odCksayh0KSx0Lm8uZGVsZXRlKG4pfHwhIXQucC5oYXMobikmJnQuby5kZWxldGUodC5wLmdldChuKSl9LHIuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYobyhuKSxrKG4pLG4uby5jbGVhcigpKX0sci52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLnZhbHVlcygpfSxyLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLmVudHJpZXMoKX0sci5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHJbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sci5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByPXRoaXMudmFsdWVzKCksZT1yLm5leHQoKTshZS5kb25lOyluLmNhbGwodCxlLnZhbHVlLGUudmFsdWUsdGhpcyksZT1yLm5leHQoKX0sbn0oKTttKFwiTWFwU2V0XCIse046ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGYobix0KX0sVDpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgYyhuLHQpfX0pfWZ1bmN0aW9uIEooKXtOKCksQygpLFQoKX1mdW5jdGlvbiBLKG4pe3JldHVybiBufWZ1bmN0aW9uICQobil7cmV0dXJuIG59dmFyIEcsVSxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QsSD1XP1N5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpOigoRz17fSlbXCJpbW1lci1ub3RoaW5nXCJdPSEwLEcpLEw9Vz9TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsUT1XP1N5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLFk9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrbn0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrbn0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKG4pe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIitufSwxODpmdW5jdGlvbihuKXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIituK1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK24rXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsMjE6ZnVuY3Rpb24obil7cmV0dXJuXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIituK1wiJ1wifSwyMjpmdW5jdGlvbihuKXtyZXR1cm5cIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjM6ZnVuY3Rpb24obil7cmV0dXJuXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyNDpcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIn0sWj1cIlwiK09iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3Isbm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyx0bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHQ9e307cmV0dXJuIG5uKG4pLmZvckVhY2goKGZ1bmN0aW9uKHIpe3Rbcl09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHIpfSkpLHR9LHJuPXt9LGVuPXtnZXQ6ZnVuY3Rpb24obix0KXtpZih0PT09USlyZXR1cm4gbjt2YXIgZT1wKG4pO2lmKCF1KGUsdCkpcmV0dXJuIGZ1bmN0aW9uKG4sdCxyKXt2YXIgZSxpPUkodCxyKTtyZXR1cm4gaT9cInZhbHVlXCJpbiBpP2kudmFsdWU6bnVsbD09PShlPWkuZ2V0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jYWxsKG4uayk6dm9pZCAwfShuLGUsdCk7dmFyIGk9ZVt0XTtyZXR1cm4gbi5JfHwhcihpKT9pOmk9PT16KG4udCx0KT8oRShuKSxuLm9bdF09UihuLkEuaCxpLG4pKTppfSxoYXM6ZnVuY3Rpb24obix0KXtyZXR1cm4gdCBpbiBwKG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXMocChuKSl9LHNldDpmdW5jdGlvbihuLHQscil7dmFyIGU9SShwKG4pLHQpO2lmKG51bGw9PWU/dm9pZCAwOmUuc2V0KXJldHVybiBlLnNldC5jYWxsKG4uayxyKSwhMDtpZighbi5QKXt2YXIgaT16KHAobiksdCksbz1udWxsPT1pP3ZvaWQgMDppW1FdO2lmKG8mJm8udD09PXIpcmV0dXJuIG4ub1t0XT1yLG4uRFt0XT0hMSwhMDtpZihjKHIsaSkmJih2b2lkIDAhPT1yfHx1KG4udCx0KSkpcmV0dXJuITA7RShuKSxrKG4pfXJldHVybiBuLm9bdF09PT1yJiZcIm51bWJlclwiIT10eXBlb2YgciYmKHZvaWQgMCE9PXJ8fHQgaW4gbi5vKXx8KG4ub1t0XT1yLG4uRFt0XT0hMCwhMCl9LGRlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHZvaWQgMCE9PXoobi50LHQpfHx0IGluIG4udD8obi5EW3RdPSExLEUobiksayhuKSk6ZGVsZXRlIG4uRFt0XSxuLm8mJmRlbGV0ZSBuLm9bdF0sITB9LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbihuLHQpe3ZhciByPXAobiksZT1SZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO3JldHVybiBlP3t3cml0YWJsZTohMCxjb25maWd1cmFibGU6MSE9PW4uaXx8XCJsZW5ndGhcIiE9PXQsZW51bWVyYWJsZTplLmVudW1lcmFibGUsdmFsdWU6clt0XX06ZX0sZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oKXtuKDExKX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuLnQpfSxzZXRQcm90b3R5cGVPZjpmdW5jdGlvbigpe24oMTIpfX0sb249e307aShlbiwoZnVuY3Rpb24obix0KXtvbltuXT1mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHNbMF09YXJndW1lbnRzWzBdWzBdLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pKSxvbi5kZWxldGVQcm9wZXJ0eT1mdW5jdGlvbih0LHIpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxMyksZW4uZGVsZXRlUHJvcGVydHkuY2FsbCh0aGlzLHRbMF0scil9LG9uLnNldD1mdW5jdGlvbih0LHIsZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJsZW5ndGhcIiE9PXImJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxNCksZW4uc2V0LmNhbGwodGhpcyx0WzBdLHIsZSx0WzBdKX07dmFyIHVuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgZT10aGlzO3RoaXMuZz1CLHRoaXMuRj0hMCx0aGlzLnByb2R1Y2U9ZnVuY3Rpb24odCxpLG8pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpe3ZhciB1PWk7aT10O3ZhciBhPWU7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7dm9pZCAwPT09biYmKG49dSk7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWVbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGEucHJvZHVjZShuLChmdW5jdGlvbihuKXt2YXIgcjtyZXR1cm4ocj1pKS5jYWxsLmFwcGx5KHIsW3Qsbl0uY29uY2F0KGUpKX0pKX19dmFyIGY7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSYmbig2KSx2b2lkIDAhPT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvJiZuKDcpLHIodCkpe3ZhciBjPXcoZSkscz1SKGUsdCx2b2lkIDApLHY9ITA7dHJ5e2Y9aShzKSx2PSExfWZpbmFsbHl7dj9PKGMpOmcoYyl9cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmYgaW5zdGFuY2VvZiBQcm9taXNlP2YudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIGooYyxvKSxQKG4sYyl9KSwoZnVuY3Rpb24obil7dGhyb3cgTyhjKSxufSkpOihqKGMsbyksUChmLGMpKX1pZighdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpe2lmKChmPWkodCkpPT09SClyZXR1cm47cmV0dXJuIHZvaWQgMD09PWYmJihmPXQpLGUuRiYmZChmLCEwKSxmfW4oMjEsdCl9LHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzPWZ1bmN0aW9uKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9mdW5jdGlvbih0KXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspaVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gZS5wcm9kdWNlV2l0aFBhdGNoZXModCwoZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoaSkpfSkpfTpbZS5wcm9kdWNlKG4sdCwoZnVuY3Rpb24obix0KXtyPW4saT10fSkpLHIsaV07dmFyIHIsaX0sXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0LnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXModC51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnQuYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZSh0LmF1dG9GcmVlemUpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3IoZSl8fG4oOCksdChlKSYmKGU9RChlKSk7dmFyIGk9dyh0aGlzKSxvPVIodGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCxnKGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24odCxyKXt2YXIgZT10JiZ0W1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksciksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLkY9bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHQpe3QmJiFCJiZuKDIwKSx0aGlzLmc9dH0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24obixyKXt2YXIgZTtmb3IoZT1yLmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT1yW2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape249aS52YWx1ZTticmVha319dmFyIG89YihcIlBhdGNoZXNcIikuJDtyZXR1cm4gdChuKT9vKG4scik6dGhpcy5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3JldHVybiBvKG4sci5zbGljZShlKzEpKX0pKX0sZX0oKSxhbj1uZXcgdW4sZm49YW4ucHJvZHVjZSxjbj1hbi5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChhbiksc249YW4uc2V0QXV0b0ZyZWV6ZS5iaW5kKGFuKSx2bj1hbi5zZXRVc2VQcm94aWVzLmJpbmQoYW4pLHBuPWFuLmFwcGx5UGF0Y2hlcy5iaW5kKGFuKSxsbj1hbi5jcmVhdGVEcmFmdC5iaW5kKGFuKSxkbj1hbi5maW5pc2hEcmFmdC5iaW5kKGFuKTtleHBvcnQgZGVmYXVsdCBmbjtleHBvcnR7dW4gYXMgSW1tZXIscG4gYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSxsbiBhcyBjcmVhdGVEcmFmdCxEIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLE4gYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LFQgYXMgZW5hYmxlUGF0Y2hlcyxkbiBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSx0IGFzIGlzRHJhZnQsciBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxmbiBhcyBwcm9kdWNlLGNuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxzbiBhcyBzZXRBdXRvRnJlZXplLHZuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiZXhwb3J0IHZhciBLRVlfUFJFRklYID0gJ3BlcnNpc3Q6JztcbmV4cG9ydCB2YXIgRkxVU0ggPSAncGVyc2lzdC9GTFVTSCc7XG5leHBvcnQgdmFyIFJFSFlEUkFURSA9ICdwZXJzaXN0L1JFSFlEUkFURSc7XG5leHBvcnQgdmFyIFBBVVNFID0gJ3BlcnNpc3QvUEFVU0UnO1xuZXhwb3J0IHZhciBQRVJTSVNUID0gJ3BlcnNpc3QvUEVSU0lTVCc7XG5leHBvcnQgdmFyIFBVUkdFID0gJ3BlcnNpc3QvUFVSR0UnO1xuZXhwb3J0IHZhciBSRUdJU1RFUiA9ICdwZXJzaXN0L1JFR0lTVEVSJztcbmV4cG9ydCB2YXIgREVGQVVMVF9WRVJTSU9OID0gLTE7IiwiaW1wb3J0IHsgREVGQVVMVF9WRVJTSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWlncmF0ZShtaWdyYXRpb25zLCBjb25maWcpIHtcbiAgdmFyIF9yZWYgPSBjb25maWcgfHwge30sXG4gICAgICBkZWJ1ZyA9IF9yZWYuZGVidWc7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgY3VycmVudFZlcnNpb24pIHtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IG5vIGluYm91bmQgc3RhdGUsIHNraXBwaW5nIG1pZ3JhdGlvbicpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHZhciBpbmJvdW5kVmVyc2lvbiA9IHN0YXRlLl9wZXJzaXN0ICYmIHN0YXRlLl9wZXJzaXN0LnZlcnNpb24gIT09IHVuZGVmaW5lZCA/IHN0YXRlLl9wZXJzaXN0LnZlcnNpb24gOiBERUZBVUxUX1ZFUlNJT047XG5cbiAgICBpZiAoaW5ib3VuZFZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IHZlcnNpb25zIG1hdGNoLCBub29wIG1pZ3JhdGlvbicpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGluYm91bmRWZXJzaW9uID4gY3VycmVudFZlcnNpb24pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBjb25zb2xlLmVycm9yKCdyZWR1eC1wZXJzaXN0OiBkb3duZ3JhZGluZyB2ZXJzaW9uIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgIH1cblxuICAgIHZhciBtaWdyYXRpb25LZXlzID0gT2JqZWN0LmtleXMobWlncmF0aW9ucykubWFwKGZ1bmN0aW9uICh2ZXIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2ZXIpO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3VycmVudFZlcnNpb24gPj0ga2V5ICYmIGtleSA+IGluYm91bmRWZXJzaW9uO1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IG1pZ3JhdGlvbktleXMnLCBtaWdyYXRpb25LZXlzKTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgbWlncmF0ZWRTdGF0ZSA9IG1pZ3JhdGlvbktleXMucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwgdmVyc2lvbktleSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IHJ1bm5pbmcgbWlncmF0aW9uIGZvciB2ZXJzaW9uS2V5JywgdmVyc2lvbktleSk7XG4gICAgICAgIHJldHVybiBtaWdyYXRpb25zW3ZlcnNpb25LZXldKHN0YXRlKTtcbiAgICAgIH0sIHN0YXRlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlncmF0ZWRTdGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IHsgS0VZX1BSRUZJWCwgUkVIWURSQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gQFRPRE8gcmVtb3ZlIG9uY2UgZmxvdyA8IDAuNjMgc3VwcG9ydCBpcyBubyBsb25nZXIgcmVxdWlyZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQZXJzaXN0b2lkKGNvbmZpZykge1xuICAvLyBkZWZhdWx0c1xuICB2YXIgYmxhY2tsaXN0ID0gY29uZmlnLmJsYWNrbGlzdCB8fCBudWxsO1xuICB2YXIgd2hpdGVsaXN0ID0gY29uZmlnLndoaXRlbGlzdCB8fCBudWxsO1xuICB2YXIgdHJhbnNmb3JtcyA9IGNvbmZpZy50cmFuc2Zvcm1zIHx8IFtdO1xuICB2YXIgdGhyb3R0bGUgPSBjb25maWcudGhyb3R0bGUgfHwgMDtcbiAgdmFyIHN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWcua2V5UHJlZml4ICE9PSB1bmRlZmluZWQgPyBjb25maWcua2V5UHJlZml4IDogS0VZX1BSRUZJWCkuY29uY2F0KGNvbmZpZy5rZXkpO1xuICB2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuICB2YXIgc2VyaWFsaXplO1xuXG4gIGlmIChjb25maWcuc2VyaWFsaXplID09PSBmYWxzZSkge1xuICAgIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcuc2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VyaWFsaXplID0gY29uZmlnLnNlcmlhbGl6ZTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemUgPSBkZWZhdWx0U2VyaWFsaXplO1xuICB9XG5cbiAgdmFyIHdyaXRlRmFpbEhhbmRsZXIgPSBjb25maWcud3JpdGVGYWlsSGFuZGxlciB8fCBudWxsOyAvLyBpbml0aWFsaXplIHN0YXRlZnVsIHZhbHVlc1xuXG4gIHZhciBsYXN0U3RhdGUgPSB7fTtcbiAgdmFyIHN0YWdlZFN0YXRlID0ge307XG4gIHZhciBrZXlzVG9Qcm9jZXNzID0gW107XG4gIHZhciB0aW1lSXRlcmF0b3IgPSBudWxsO1xuICB2YXIgd3JpdGVQcm9taXNlID0gbnVsbDtcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gICAgLy8gYWRkIGFueSBjaGFuZ2VkIGtleXMgdG8gdGhlIHF1ZXVlXG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCFwYXNzV2hpdGVsaXN0QmxhY2tsaXN0KGtleSkpIHJldHVybjsgLy8gaXMga2V5c3BhY2UgaWdub3JlZD8gbm9vcFxuXG4gICAgICBpZiAobGFzdFN0YXRlW2tleV0gPT09IHN0YXRlW2tleV0pIHJldHVybjsgLy8gdmFsdWUgdW5jaGFuZ2VkPyBub29wXG5cbiAgICAgIGlmIChrZXlzVG9Qcm9jZXNzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHJldHVybjsgLy8gaXMga2V5IGFscmVhZHkgcXVldWVkPyBub29wXG5cbiAgICAgIGtleXNUb1Byb2Nlc3MucHVzaChrZXkpOyAvLyBhZGQga2V5IHRvIHF1ZXVlXG4gICAgfSk7IC8vaWYgYW55IGtleSBpcyBtaXNzaW5nIGluIHRoZSBuZXcgc3RhdGUgd2hpY2ggd2FzIHByZXNlbnQgaW4gdGhlIGxhc3RTdGF0ZSxcbiAgICAvL2FkZCBpdCBmb3IgcHJvY2Vzc2luZyB0b29cblxuICAgIE9iamVjdC5rZXlzKGxhc3RTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoc3RhdGVba2V5XSA9PT0gdW5kZWZpbmVkICYmIHBhc3NXaGl0ZWxpc3RCbGFja2xpc3Qoa2V5KSAmJiBrZXlzVG9Qcm9jZXNzLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYgbGFzdFN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlzVG9Qcm9jZXNzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTsgLy8gc3RhcnQgdGhlIHRpbWUgaXRlcmF0b3IgaWYgbm90IHJ1bm5pbmcgKHJlYWQ6IHRocm90dGxlKVxuXG4gICAgaWYgKHRpbWVJdGVyYXRvciA9PT0gbnVsbCkge1xuICAgICAgdGltZUl0ZXJhdG9yID0gc2V0SW50ZXJ2YWwocHJvY2Vzc05leHRLZXksIHRocm90dGxlKTtcbiAgICB9XG5cbiAgICBsYXN0U3RhdGUgPSBzdGF0ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBwcm9jZXNzTmV4dEtleSgpIHtcbiAgICBpZiAoa2V5c1RvUHJvY2Vzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aW1lSXRlcmF0b3IpIGNsZWFySW50ZXJ2YWwodGltZUl0ZXJhdG9yKTtcbiAgICAgIHRpbWVJdGVyYXRvciA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGtleXNUb1Byb2Nlc3Muc2hpZnQoKTtcbiAgICB2YXIgZW5kU3RhdGUgPSB0cmFuc2Zvcm1zLnJlZHVjZShmdW5jdGlvbiAoc3ViU3RhdGUsIHRyYW5zZm9ybWVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZXIuaW4oc3ViU3RhdGUsIGtleSwgbGFzdFN0YXRlKTtcbiAgICB9LCBsYXN0U3RhdGVba2V5XSk7XG5cbiAgICBpZiAoZW5kU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhZ2VkU3RhdGVba2V5XSA9IHNlcmlhbGl6ZShlbmRTdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigncmVkdXgtcGVyc2lzdC9jcmVhdGVQZXJzaXN0b2lkOiBlcnJvciBzZXJpYWxpemluZyBzdGF0ZScsIGVycik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vaWYgdGhlIGVuZFN0YXRlIGlzIHVuZGVmaW5lZCwgbm8gbmVlZCB0byBwZXJzaXN0IHRoZSBleGlzdGluZyBzZXJpYWxpemVkIGNvbnRlbnRcbiAgICAgIGRlbGV0ZSBzdGFnZWRTdGF0ZVtrZXldO1xuICAgIH1cblxuICAgIGlmIChrZXlzVG9Qcm9jZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd3JpdGVTdGFnZWRTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlU3RhZ2VkU3RhdGUoKSB7XG4gICAgLy8gY2xlYW51cCBhbnkgcmVtb3ZlZCBrZXlzIGp1c3QgYmVmb3JlIHdyaXRlLlxuICAgIE9iamVjdC5rZXlzKHN0YWdlZFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChsYXN0U3RhdGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSBzdGFnZWRTdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdyaXRlUHJvbWlzZSA9IHN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBzZXJpYWxpemUoc3RhZ2VkU3RhdGUpKS5jYXRjaChvbldyaXRlRmFpbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXNzV2hpdGVsaXN0QmxhY2tsaXN0KGtleSkge1xuICAgIGlmICh3aGl0ZWxpc3QgJiYgd2hpdGVsaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYga2V5ICE9PSAnX3BlcnNpc3QnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGJsYWNrbGlzdCAmJiBibGFja2xpc3QuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Xcml0ZUZhaWwoZXJyKSB7XG4gICAgLy8gQFRPRE8gYWRkIGZhaWwgaGFuZGxlcnMgKHR5cGljYWxseSBzdG9yYWdlIGZ1bGwpXG4gICAgaWYgKHdyaXRlRmFpbEhhbmRsZXIpIHdyaXRlRmFpbEhhbmRsZXIoZXJyKTtcblxuICAgIGlmIChlcnIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3RvcmluZyBkYXRhJywgZXJyKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoa2V5c1RvUHJvY2Vzcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2Nlc3NOZXh0S2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTsgLy8gcmV0dXJuIGBwZXJzaXN0b2lkYFxuXG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn0gLy8gQE5PVEUgaW4gdGhlIGZ1dHVyZSB0aGlzIG1heSBiZSBleHBvc2VkIHZpYSBjb25maWdcblxuZnVuY3Rpb24gZGVmYXVsdFNlcmlhbGl6ZShkYXRhKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUcmFuc2Zvcm0oIC8vIEBOT1RFIGluYm91bmQ6IHRyYW5zZm9ybSBzdGF0ZSBjb21pbmcgZnJvbSByZWR1eCBvbiBpdHMgd2F5IHRvIGJlaW5nIHNlcmlhbGl6ZWQgYW5kIHN0b3JlZFxuaW5ib3VuZCwgLy8gQE5PVEUgb3V0Ym91bmQ6IHRyYW5zZm9ybSBzdGF0ZSBjb21pbmcgZnJvbSBzdG9yYWdlLCBvbiBpdHMgd2F5IHRvIGJlIHJlaHlkcmF0ZWQgaW50byByZWR1eFxub3V0Ym91bmQpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciB3aGl0ZWxpc3QgPSBjb25maWcud2hpdGVsaXN0IHx8IG51bGw7XG4gIHZhciBibGFja2xpc3QgPSBjb25maWcuYmxhY2tsaXN0IHx8IG51bGw7XG5cbiAgZnVuY3Rpb24gd2hpdGVsaXN0QmxhY2tsaXN0Q2hlY2soa2V5KSB7XG4gICAgaWYgKHdoaXRlbGlzdCAmJiB3aGl0ZWxpc3QuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGJsYWNrbGlzdCAmJiBibGFja2xpc3QuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbjogZnVuY3Rpb24gX2luKHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkge1xuICAgICAgcmV0dXJuICF3aGl0ZWxpc3RCbGFja2xpc3RDaGVjayhrZXkpICYmIGluYm91bmQgPyBpbmJvdW5kKHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkgOiBzdGF0ZTtcbiAgICB9LFxuICAgIG91dDogZnVuY3Rpb24gb3V0KHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkge1xuICAgICAgcmV0dXJuICF3aGl0ZWxpc3RCbGFja2xpc3RDaGVjayhrZXkpICYmIG91dGJvdW5kID8gb3V0Ym91bmQoc3RhdGUsIGtleSwgZnVsbFN0YXRlKSA6IHN0YXRlO1xuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgeyBLRVlfUFJFRklYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3RvcmVkU3RhdGUoY29uZmlnKSB7XG4gIHZhciB0cmFuc2Zvcm1zID0gY29uZmlnLnRyYW5zZm9ybXMgfHwgW107XG4gIHZhciBzdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlnLmtleVByZWZpeCAhPT0gdW5kZWZpbmVkID8gY29uZmlnLmtleVByZWZpeCA6IEtFWV9QUkVGSVgpLmNvbmNhdChjb25maWcua2V5KTtcbiAgdmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcbiAgdmFyIGRlYnVnID0gY29uZmlnLmRlYnVnO1xuICB2YXIgZGVzZXJpYWxpemU7XG5cbiAgaWYgKGNvbmZpZy5kZXNlcmlhbGl6ZSA9PT0gZmFsc2UpIHtcbiAgICBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZy5kZXNlcmlhbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlc2VyaWFsaXplID0gY29uZmlnLmRlc2VyaWFsaXplO1xuICB9IGVsc2Uge1xuICAgIGRlc2VyaWFsaXplID0gZGVmYXVsdERlc2VyaWFsaXplO1xuICB9XG5cbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KS50aGVuKGZ1bmN0aW9uIChzZXJpYWxpemVkKSB7XG4gICAgaWYgKCFzZXJpYWxpemVkKSByZXR1cm4gdW5kZWZpbmVkO2Vsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIHZhciByYXdTdGF0ZSA9IGRlc2VyaWFsaXplKHNlcmlhbGl6ZWQpO1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgc3RhdGVba2V5XSA9IHRyYW5zZm9ybXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHN1YlN0YXRlLCB0cmFuc2Zvcm1lcikge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyLm91dChzdWJTdGF0ZSwga2V5LCByYXdTdGF0ZSk7XG4gICAgICAgICAgfSwgZGVzZXJpYWxpemUocmF3U3RhdGVba2V5XSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZyhcInJlZHV4LXBlcnNpc3QvZ2V0U3RvcmVkU3RhdGU6IEVycm9yIHJlc3RvcmluZyBkYXRhIFwiLmNvbmNhdChzZXJpYWxpemVkKSwgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREZXNlcmlhbGl6ZShzZXJpYWwpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsKTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAnLi9wZXJzaXN0UmVkdWNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBlcnNpc3RDb21iaW5lUmVkdWNlcnMgfSBmcm9tICcuL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJzaXN0U3RvcmUgfSBmcm9tICcuL3BlcnNpc3RTdG9yZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1pZ3JhdGUgfSBmcm9tICcuL2NyZWF0ZU1pZ3JhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUcmFuc2Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRyYW5zZm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFN0b3JlZFN0YXRlIH0gZnJvbSAnLi9nZXRTdG9yZWRTdGF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVBlcnNpc3RvaWQgfSBmcm9tICcuL2NyZWF0ZVBlcnNpc3RvaWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwdXJnZVN0b3JlZFN0YXRlIH0gZnJvbSAnLi9wdXJnZVN0b3JlZFN0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJzsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcGVyc2lzdFJlZHVjZXIgZnJvbSAnLi9wZXJzaXN0UmVkdWNlcic7XG5pbXBvcnQgYXV0b01lcmdlTGV2ZWwyIGZyb20gJy4vc3RhdGVSZWNvbmNpbGVyL2F1dG9NZXJnZUxldmVsMic7XG4vLyBjb21iaW5lUmVkdWNlcnMgKyBwZXJzaXN0UmVkdWNlciB3aXRoIHN0YXRlUmVjb25jaWxlciBkZWZhdWx0ZWQgdG8gYXV0b01lcmdlTGV2ZWwyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzaXN0Q29tYmluZVJlZHVjZXJzKGNvbmZpZywgcmVkdWNlcnMpIHtcbiAgY29uZmlnLnN0YXRlUmVjb25jaWxlciA9IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXIgPT09IHVuZGVmaW5lZCA/IGF1dG9NZXJnZUxldmVsMiA6IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXI7XG4gIHJldHVybiBwZXJzaXN0UmVkdWNlcihjb25maWcsIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VycykpO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IEZMVVNILCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFSFlEUkFURSwgREVGQVVMVF9WRVJTSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGF1dG9NZXJnZUxldmVsMSBmcm9tICcuL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDEnO1xuaW1wb3J0IGNyZWF0ZVBlcnNpc3RvaWQgZnJvbSAnLi9jcmVhdGVQZXJzaXN0b2lkJztcbmltcG9ydCBkZWZhdWx0R2V0U3RvcmVkU3RhdGUgZnJvbSAnLi9nZXRTdG9yZWRTdGF0ZSc7XG5pbXBvcnQgcHVyZ2VTdG9yZWRTdGF0ZSBmcm9tICcuL3B1cmdlU3RvcmVkU3RhdGUnO1xudmFyIERFRkFVTFRfVElNRU9VVCA9IDUwMDA7XG4vKlxuICBAVE9ETyBhZGQgdmFsaWRhdGlvbiAvIGhhbmRsaW5nIGZvcjpcbiAgLSBwZXJzaXN0aW5nIGEgcmVkdWNlciB3aGljaCBoYXMgbmVzdGVkIF9wZXJzaXN0XG4gIC0gaGFuZGxpbmcgYWN0aW9ucyB0aGF0IGZpcmUgYmVmb3JlIHJleWRyYXRlIGlzIGNhbGxlZFxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVyc2lzdFJlZHVjZXIoY29uZmlnLCBiYXNlUmVkdWNlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghY29uZmlnKSB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyByZXF1aXJlZCBmb3IgcGVyc2lzdFJlZHVjZXInKTtcbiAgICBpZiAoIWNvbmZpZy5rZXkpIHRocm93IG5ldyBFcnJvcigna2V5IGlzIHJlcXVpcmVkIGluIHBlcnNpc3RvciBjb25maWcnKTtcbiAgICBpZiAoIWNvbmZpZy5zdG9yYWdlKSB0aHJvdyBuZXcgRXJyb3IoXCJyZWR1eC1wZXJzaXN0OiBjb25maWcuc3RvcmFnZSBpcyByZXF1aXJlZC4gVHJ5IHVzaW5nIG9uZSBvZiB0aGUgcHJvdmlkZWQgc3RvcmFnZSBlbmdpbmVzIGBpbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ2BcIik7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uICE9PSB1bmRlZmluZWQgPyBjb25maWcudmVyc2lvbiA6IERFRkFVTFRfVkVSU0lPTjtcbiAgdmFyIGRlYnVnID0gY29uZmlnLmRlYnVnIHx8IGZhbHNlO1xuICB2YXIgc3RhdGVSZWNvbmNpbGVyID0gY29uZmlnLnN0YXRlUmVjb25jaWxlciA9PT0gdW5kZWZpbmVkID8gYXV0b01lcmdlTGV2ZWwxIDogY29uZmlnLnN0YXRlUmVjb25jaWxlcjtcbiAgdmFyIGdldFN0b3JlZFN0YXRlID0gY29uZmlnLmdldFN0b3JlZFN0YXRlIHx8IGRlZmF1bHRHZXRTdG9yZWRTdGF0ZTtcbiAgdmFyIHRpbWVvdXQgPSBjb25maWcudGltZW91dCAhPT0gdW5kZWZpbmVkID8gY29uZmlnLnRpbWVvdXQgOiBERUZBVUxUX1RJTUVPVVQ7XG4gIHZhciBfcGVyc2lzdG9pZCA9IG51bGw7XG4gIHZhciBfcHVyZ2UgPSBmYWxzZTtcbiAgdmFyIF9wYXVzZWQgPSB0cnVlO1xuXG4gIHZhciBjb25kaXRpb25hbFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbmRpdGlvbmFsVXBkYXRlKHN0YXRlKSB7XG4gICAgLy8gdXBkYXRlIHRoZSBwZXJzaXN0b2lkIG9ubHkgaWYgd2UgYXJlIHJlaHlkcmF0ZWQgYW5kIG5vdCBwYXVzZWRcbiAgICBzdGF0ZS5fcGVyc2lzdC5yZWh5ZHJhdGVkICYmIF9wZXJzaXN0b2lkICYmICFfcGF1c2VkICYmIF9wZXJzaXN0b2lkLnVwZGF0ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIHZhciBfcmVmID0gc3RhdGUgfHwge30sXG4gICAgICAgIF9wZXJzaXN0ID0gX3JlZi5fcGVyc2lzdCxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJfcGVyc2lzdFwiXSk7IC8vICRGbG93SWdub3JlIG5lZWQgdG8gdXBkYXRlIFN0YXRlIHR5cGVcblxuXG4gICAgdmFyIHJlc3RTdGF0ZSA9IHJlc3Q7XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFBFUlNJU1QpIHtcbiAgICAgIHZhciBfc2VhbGVkID0gZmFsc2U7XG5cbiAgICAgIHZhciBfcmVoeWRyYXRlID0gZnVuY3Rpb24gX3JlaHlkcmF0ZShwYXlsb2FkLCBlcnIpIHtcbiAgICAgICAgLy8gZGV2IHdhcm5pbmcgaWYgd2UgYXJlIGFscmVhZHkgc2VhbGVkXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9zZWFsZWQpIGNvbnNvbGUuZXJyb3IoXCJyZWR1eC1wZXJzaXN0OiByZWh5ZHJhdGUgZm9yIFxcXCJcIi5jb25jYXQoY29uZmlnLmtleSwgXCJcXFwiIGNhbGxlZCBhZnRlciB0aW1lb3V0LlwiKSwgcGF5bG9hZCwgZXJyKTsgLy8gb25seSByZWh5ZHJhdGUgaWYgd2UgYXJlIG5vdCBhbHJlYWR5IHNlYWxlZFxuXG4gICAgICAgIGlmICghX3NlYWxlZCkge1xuICAgICAgICAgIGFjdGlvbi5yZWh5ZHJhdGUoY29uZmlnLmtleSwgcGF5bG9hZCwgZXJyKTtcbiAgICAgICAgICBfc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGltZW91dCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIV9zZWFsZWQgJiYgX3JlaHlkcmF0ZSh1bmRlZmluZWQsIG5ldyBFcnJvcihcInJlZHV4LXBlcnNpc3Q6IHBlcnNpc3QgdGltZWQgb3V0IGZvciBwZXJzaXN0IGtleSBcXFwiXCIuY29uY2F0KGNvbmZpZy5rZXksIFwiXFxcIlwiKSkpO1xuICAgICAgfSwgdGltZW91dCk7IC8vIEBOT1RFIFBFUlNJU1QgcmVzdW1lcyBpZiBwYXVzZWQuXG5cbiAgICAgIF9wYXVzZWQgPSBmYWxzZTsgLy8gQE5PVEUgb25seSBldmVyIGNyZWF0ZSBwZXJzaXN0b2lkIG9uY2UsIGVuc3VyZSB3ZSBjYWxsIGl0IGF0IGxlYXN0IG9uY2UsIGV2ZW4gaWYgX3BlcnNpc3QgaGFzIGFscmVhZHkgYmVlbiBzZXRcblxuICAgICAgaWYgKCFfcGVyc2lzdG9pZCkgX3BlcnNpc3RvaWQgPSBjcmVhdGVQZXJzaXN0b2lkKGNvbmZpZyk7IC8vIEBOT1RFIFBFUlNJU1QgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcywgbm9vcCBhZnRlciB0aGUgZmlyc3RcblxuICAgICAgaWYgKF9wZXJzaXN0KSB7XG4gICAgICAgIC8vIFdlIHN0aWxsIG5lZWQgdG8gY2FsbCB0aGUgYmFzZSByZWR1Y2VyIGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgbmVzdGVkXG4gICAgICAgIC8vIHVzZXMgb2YgcGVyc2lzdFJlZHVjZXIgd2hpY2ggbmVlZCB0byBiZSBhd2FyZSBvZiB0aGUgUEVSU0lTVCBhY3Rpb25cbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICAgIF9wZXJzaXN0OiBfcGVyc2lzdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24ucmVoeWRyYXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBhY3Rpb24ucmVnaXN0ZXIgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcigncmVkdXgtcGVyc2lzdDogZWl0aGVyIHJlaHlkcmF0ZSBvciByZWdpc3RlciBpcyBub3QgYSBmdW5jdGlvbiBvbiB0aGUgUEVSU0lTVCBhY3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgYWN0aW9uIGlzIGJlaW5nIHJlcGxheWVkLiBUaGlzIGlzIGFuIHVuZXhwbG9yZWQgdXNlIGNhc2UsIHBsZWFzZSBvcGVuIGFuIGlzc3VlIGFuZCB3ZSB3aWxsIGZpZ3VyZSBvdXQgYSByZXNvbHV0aW9uLicpO1xuICAgICAgYWN0aW9uLnJlZ2lzdGVyKGNvbmZpZy5rZXkpO1xuICAgICAgZ2V0U3RvcmVkU3RhdGUoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXN0b3JlZFN0YXRlKSB7XG4gICAgICAgIHZhciBtaWdyYXRlID0gY29uZmlnLm1pZ3JhdGUgfHwgZnVuY3Rpb24gKHMsIHYpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1pZ3JhdGUocmVzdG9yZWRTdGF0ZSwgdmVyc2lvbikudGhlbihmdW5jdGlvbiAobWlncmF0ZWRTdGF0ZSkge1xuICAgICAgICAgIF9yZWh5ZHJhdGUobWlncmF0ZWRTdGF0ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChtaWdyYXRlRXJyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbWlncmF0ZUVycikgY29uc29sZS5lcnJvcigncmVkdXgtcGVyc2lzdDogbWlncmF0aW9uIGVycm9yJywgbWlncmF0ZUVycik7XG5cbiAgICAgICAgICBfcmVoeWRyYXRlKHVuZGVmaW5lZCwgbWlncmF0ZUVycik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVoeWRyYXRlKHVuZGVmaW5lZCwgZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICBfcGVyc2lzdDoge1xuICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgcmVoeWRyYXRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gUFVSR0UpIHtcbiAgICAgIF9wdXJnZSA9IHRydWU7XG4gICAgICBhY3Rpb24ucmVzdWx0KHB1cmdlU3RvcmVkU3RhdGUoY29uZmlnKSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pLCB7XG4gICAgICAgIF9wZXJzaXN0OiBfcGVyc2lzdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gRkxVU0gpIHtcbiAgICAgIGFjdGlvbi5yZXN1bHQoX3BlcnNpc3RvaWQgJiYgX3BlcnNpc3RvaWQuZmx1c2goKSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pLCB7XG4gICAgICAgIF9wZXJzaXN0OiBfcGVyc2lzdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gUEFVU0UpIHtcbiAgICAgIF9wYXVzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFJFSFlEUkFURSkge1xuICAgICAgLy8gbm9vcCBvbiByZXN0U3RhdGUgaWYgcHVyZ2luZ1xuICAgICAgaWYgKF9wdXJnZSkgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHJlc3RTdGF0ZSwge1xuICAgICAgICBfcGVyc2lzdDogX29iamVjdFNwcmVhZCh7fSwgX3BlcnNpc3QsIHtcbiAgICAgICAgICByZWh5ZHJhdGVkOiB0cnVlXG4gICAgICAgIH0pIC8vIEBOT1RFIGlmIGtleSBkb2VzIG5vdCBtYXRjaCwgd2lsbCBjb250aW51ZSB0byBkZWZhdWx0IGVsc2UgYmVsb3dcblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3Rpb24ua2V5ID09PSBjb25maWcua2V5KSB7XG4gICAgICAgIHZhciByZWR1Y2VkU3RhdGUgPSBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbik7XG4gICAgICAgIHZhciBpbmJvdW5kU3RhdGUgPSBhY3Rpb24ucGF5bG9hZDsgLy8gb25seSByZWNvbmNpbGUgc3RhdGUgaWYgc3RhdGVSZWNvbmNpbGVyIGFuZCBpbmJvdW5kU3RhdGUgYXJlIGJvdGggZGVmaW5lZFxuXG4gICAgICAgIHZhciByZWNvbmNpbGVkUmVzdCA9IHN0YXRlUmVjb25jaWxlciAhPT0gZmFsc2UgJiYgaW5ib3VuZFN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZVJlY29uY2lsZXIoaW5ib3VuZFN0YXRlLCBzdGF0ZSwgcmVkdWNlZFN0YXRlLCBjb25maWcpIDogcmVkdWNlZFN0YXRlO1xuXG4gICAgICAgIHZhciBfbmV3U3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCByZWNvbmNpbGVkUmVzdCwge1xuICAgICAgICAgIF9wZXJzaXN0OiBfb2JqZWN0U3ByZWFkKHt9LCBfcGVyc2lzdCwge1xuICAgICAgICAgICAgcmVoeWRyYXRlZDogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25hbFVwZGF0ZShfbmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH0gLy8gaWYgd2UgaGF2ZSBub3QgYWxyZWFkeSBoYW5kbGVkIFBFUlNJU1QsIHN0cmFpZ2h0IHBhc3N0aHJvdWdoXG5cblxuICAgIGlmICghX3BlcnNpc3QpIHJldHVybiBiYXNlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTsgLy8gcnVuIGJhc2UgcmVkdWNlcjpcbiAgICAvLyBpcyBzdGF0ZSBtb2RpZmllZCA/IHJldHVybiBvcmlnaW5hbCA6IHJldHVybiB1cGRhdGVkXG5cbiAgICB2YXIgbmV3U3RhdGUgPSBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbik7XG4gICAgaWYgKG5ld1N0YXRlID09PSByZXN0U3RhdGUpIHJldHVybiBzdGF0ZTtcbiAgICByZXR1cm4gY29uZGl0aW9uYWxVcGRhdGUoX29iamVjdFNwcmVhZCh7fSwgbmV3U3RhdGUsIHtcbiAgICAgIF9wZXJzaXN0OiBfcGVyc2lzdFxuICAgIH0pKTtcbiAgfTtcbn0iLCJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEZMVVNILCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFR0lTVEVSLCBSRUhZRFJBVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICByZWdpc3RyeTogW10sXG4gIGJvb3RzdHJhcHBlZDogZmFsc2Vcbn07XG5cbnZhciBwZXJzaXN0b3JSZWR1Y2VyID0gZnVuY3Rpb24gcGVyc2lzdG9yUmVkdWNlcigpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBpbml0aWFsU3RhdGU7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUdJU1RFUjpcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICByZWdpc3RyeTogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5yZWdpc3RyeSksIFthY3Rpb24ua2V5XSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBSRUhZRFJBVEU6XG4gICAgICB2YXIgZmlyc3RJbmRleCA9IHN0YXRlLnJlZ2lzdHJ5LmluZGV4T2YoYWN0aW9uLmtleSk7XG5cbiAgICAgIHZhciByZWdpc3RyeSA9IF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5yZWdpc3RyeSk7XG5cbiAgICAgIHJlZ2lzdHJ5LnNwbGljZShmaXJzdEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwge1xuICAgICAgICByZWdpc3RyeTogcmVnaXN0cnksXG4gICAgICAgIGJvb3RzdHJhcHBlZDogcmVnaXN0cnkubGVuZ3RoID09PSAwXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlcnNpc3RTdG9yZShzdG9yZSwgb3B0aW9ucywgY2IpIHtcbiAgLy8gaGVscCBjYXRjaCBpbmNvcnJlY3QgdXNhZ2Ugb2YgcGFzc2luZyBQZXJzaXN0Q29uZmlnIGluIGFzIFBlcnNpc3Rvck9wdGlvbnNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgb3B0aW9uc1RvVGVzdCA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGJhbm5lZEtleXMgPSBbJ2JsYWNrbGlzdCcsICd3aGl0ZWxpc3QnLCAndHJhbnNmb3JtcycsICdzdG9yYWdlJywgJ2tleVByZWZpeCcsICdtaWdyYXRlJ107XG4gICAgYmFubmVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAoISFvcHRpb25zVG9UZXN0W2tdKSBjb25zb2xlLmVycm9yKFwicmVkdXgtcGVyc2lzdDogaW52YWxpZCBvcHRpb24gcGFzc2VkIHRvIHBlcnNpc3RTdG9yZTogXFxcIlwiLmNvbmNhdChrLCBcIlxcXCIuIFlvdSBtYXkgYmUgaW5jb3JyZWN0bHkgcGFzc2luZyBwZXJzaXN0Q29uZmlnIGludG8gcGVyc2lzdFN0b3JlLCB3aGVyZWFzIGl0IHNob3VsZCBiZSBwYXNzZWQgaW50byBwZXJzaXN0UmVkdWNlci5cIikpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGJvb3N0cmFwcGVkQ2IgPSBjYiB8fCBmYWxzZTtcblxuICB2YXIgX3BTdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RvclJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgb3B0aW9ucyAmJiBvcHRpb25zLmVuaGFuY2VyID8gb3B0aW9ucy5lbmhhbmNlciA6IHVuZGVmaW5lZCk7XG5cbiAgdmFyIHJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIoa2V5KSB7XG4gICAgX3BTdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRUdJU1RFUixcbiAgICAgIGtleToga2V5XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlaHlkcmF0ZSA9IGZ1bmN0aW9uIHJlaHlkcmF0ZShrZXksIHBheWxvYWQsIGVycikge1xuICAgIHZhciByZWh5ZHJhdGVBY3Rpb24gPSB7XG4gICAgICB0eXBlOiBSRUhZRFJBVEUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgZXJyOiBlcnIsXG4gICAgICBrZXk6IGtleSAvLyBkaXNwYXRjaCB0byBgc3RvcmVgIHRvIHJlaHlkcmF0ZSBhbmQgYHBlcnNpc3RvcmAgdG8gdHJhY2sgcmVzdWx0XG5cbiAgICB9O1xuICAgIHN0b3JlLmRpc3BhdGNoKHJlaHlkcmF0ZUFjdGlvbik7XG5cbiAgICBfcFN0b3JlLmRpc3BhdGNoKHJlaHlkcmF0ZUFjdGlvbik7XG5cbiAgICBpZiAoYm9vc3RyYXBwZWRDYiAmJiBwZXJzaXN0b3IuZ2V0U3RhdGUoKS5ib290c3RyYXBwZWQpIHtcbiAgICAgIGJvb3N0cmFwcGVkQ2IoKTtcbiAgICAgIGJvb3N0cmFwcGVkQ2IgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBlcnNpc3RvciA9IF9vYmplY3RTcHJlYWQoe30sIF9wU3RvcmUsIHtcbiAgICBwdXJnZTogZnVuY3Rpb24gcHVyZ2UoKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBQVVJHRSxcbiAgICAgICAgcmVzdWx0OiBmdW5jdGlvbiByZXN1bHQocHVyZ2VSZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gocHVyZ2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICB9LFxuICAgIGZsdXNoOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEZMVVNILFxuICAgICAgICByZXN1bHQ6IGZ1bmN0aW9uIHJlc3VsdChmbHVzaFJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmbHVzaFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBQQVVTRVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBwZXJzaXN0OiBmdW5jdGlvbiBwZXJzaXN0KCkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBQRVJTSVNULFxuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXIsXG4gICAgICAgIHJlaHlkcmF0ZTogcmVoeWRyYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghKG9wdGlvbnMgJiYgb3B0aW9ucy5tYW51YWxQZXJzaXN0KSkge1xuICAgIHBlcnNpc3Rvci5wZXJzaXN0KCk7XG4gIH1cblxuICByZXR1cm4gcGVyc2lzdG9yO1xufSIsImltcG9ydCB7IEtFWV9QUkVGSVggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXJnZVN0b3JlZFN0YXRlKGNvbmZpZykge1xuICB2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuICB2YXIgc3RvcmFnZUtleSA9IFwiXCIuY29uY2F0KGNvbmZpZy5rZXlQcmVmaXggIT09IHVuZGVmaW5lZCA/IGNvbmZpZy5rZXlQcmVmaXggOiBLRVlfUFJFRklYKS5jb25jYXQoY29uZmlnLmtleSk7XG4gIHJldHVybiBzdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleSwgd2FybklmUmVtb3ZlRXJyb3IpO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZSZW1vdmVFcnJvcihlcnIpIHtcbiAgaWYgKGVyciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcigncmVkdXgtcGVyc2lzdC9wdXJnZVN0b3JlZFN0YXRlOiBFcnJvciBwdXJnaW5nIGRhdGEgc3RvcmVkIHN0YXRlJywgZXJyKTtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qXG4gIGF1dG9NZXJnZUxldmVsMTogXG4gICAgLSBtZXJnZXMgMSBsZXZlbCBvZiBzdWJzdGF0ZVxuICAgIC0gc2tpcHMgc3Vic3RhdGUgaWYgYWxyZWFkeSBtb2RpZmllZFxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9NZXJnZUxldmVsMShpbmJvdW5kU3RhdGUsIG9yaWdpbmFsU3RhdGUsIHJlZHVjZWRTdGF0ZSwgX3JlZikge1xuICB2YXIgZGVidWcgPSBfcmVmLmRlYnVnO1xuXG4gIHZhciBuZXdTdGF0ZSA9IF9vYmplY3RTcHJlYWQoe30sIHJlZHVjZWRTdGF0ZSk7IC8vIG9ubHkgcmVoeWRyYXRlIGlmIGluYm91bmRTdGF0ZSBleGlzdHMgYW5kIGlzIGFuIG9iamVjdFxuXG5cbiAgaWYgKGluYm91bmRTdGF0ZSAmJiBfdHlwZW9mKGluYm91bmRTdGF0ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMoaW5ib3VuZFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIGlnbm9yZSBfcGVyc2lzdCBkYXRhXG4gICAgICBpZiAoa2V5ID09PSAnX3BlcnNpc3QnKSByZXR1cm47IC8vIGlmIHJlZHVjZXIgbW9kaWZpZXMgc3Vic3RhdGUsIHNraXAgYXV0byByZWh5ZHJhdGlvblxuXG4gICAgICBpZiAob3JpZ2luYWxTdGF0ZVtrZXldICE9PSByZWR1Y2VkU3RhdGVba2V5XSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Qvc3RhdGVSZWNvbmNpbGVyOiBzdWIgc3RhdGUgZm9yIGtleSBgJXNgIG1vZGlmaWVkLCBza2lwcGluZy4nLCBrZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIG90aGVyd2lzZSBoYXJkIHNldCB0aGUgbmV3IHZhbHVlXG5cblxuICAgICAgbmV3U3RhdGVba2V5XSA9IGluYm91bmRTdGF0ZVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcgJiYgaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIGNvbnNvbGUubG9nKFwicmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHJlaHlkcmF0ZWQga2V5cyAnXCIuY29uY2F0KE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuam9pbignLCAnKSwgXCInXCIpKTtcbiAgcmV0dXJuIG5ld1N0YXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qXG4gIGF1dG9NZXJnZUxldmVsMjogXG4gICAgLSBtZXJnZXMgMiBsZXZlbCBvZiBzdWJzdGF0ZVxuICAgIC0gc2tpcHMgc3Vic3RhdGUgaWYgYWxyZWFkeSBtb2RpZmllZFxuICAgIC0gdGhpcyBpcyBlc3NlbnRpYWxseSByZWR1eC1wZXJpc3QgdjQgYmVoYXZpb3JcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvTWVyZ2VMZXZlbDIoaW5ib3VuZFN0YXRlLCBvcmlnaW5hbFN0YXRlLCByZWR1Y2VkU3RhdGUsIF9yZWYpIHtcbiAgdmFyIGRlYnVnID0gX3JlZi5kZWJ1ZztcblxuICB2YXIgbmV3U3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCByZWR1Y2VkU3RhdGUpOyAvLyBvbmx5IHJlaHlkcmF0ZSBpZiBpbmJvdW5kU3RhdGUgZXhpc3RzIGFuZCBpcyBhbiBvYmplY3RcblxuXG4gIGlmIChpbmJvdW5kU3RhdGUgJiYgX3R5cGVvZihpbmJvdW5kU3RhdGUpID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBpZ25vcmUgX3BlcnNpc3QgZGF0YVxuICAgICAgaWYgKGtleSA9PT0gJ19wZXJzaXN0JykgcmV0dXJuOyAvLyBpZiByZWR1Y2VyIG1vZGlmaWVzIHN1YnN0YXRlLCBza2lwIGF1dG8gcmVoeWRyYXRpb25cblxuICAgICAgaWYgKG9yaWdpbmFsU3RhdGVba2V5XSAhPT0gcmVkdWNlZFN0YXRlW2tleV0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0L3N0YXRlUmVjb25jaWxlcjogc3ViIHN0YXRlIGZvciBrZXkgYCVzYCBtb2RpZmllZCwgc2tpcHBpbmcuJywga2V5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQbGFpbkVub3VnaE9iamVjdChyZWR1Y2VkU3RhdGVba2V5XSkpIHtcbiAgICAgICAgLy8gaWYgb2JqZWN0IGlzIHBsYWluIGVub3VnaCBzaGFsbG93IG1lcmdlIHRoZSBuZXcgdmFsdWVzIChoZW5jZSBcIkxldmVsMlwiKVxuICAgICAgICBuZXdTdGF0ZVtrZXldID0gX29iamVjdFNwcmVhZCh7fSwgbmV3U3RhdGVba2V5XSwge30sIGluYm91bmRTdGF0ZVtrZXldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgaGFyZCBzZXRcblxuXG4gICAgICBuZXdTdGF0ZVtrZXldID0gaW5ib3VuZFN0YXRlW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZyAmJiBpbmJvdW5kU3RhdGUgJiYgX3R5cGVvZihpbmJvdW5kU3RhdGUpID09PSAnb2JqZWN0JykgY29uc29sZS5sb2coXCJyZWR1eC1wZXJzaXN0L3N0YXRlUmVjb25jaWxlcjogcmVoeWRyYXRlZCBrZXlzICdcIi5jb25jYXQoT2JqZWN0LmtleXMoaW5ib3VuZFN0YXRlKS5qb2luKCcsICcpLCBcIidcIikpO1xuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5Fbm91Z2hPYmplY3Qobykge1xuICByZXR1cm4gbyAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShvKSAmJiBfdHlwZW9mKG8pID09PSAnb2JqZWN0Jztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVdlYlN0b3JhZ2U7XG5cbnZhciBfZ2V0U3RvcmFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0U3RvcmFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYlN0b3JhZ2UodHlwZSkge1xuICB2YXIgc3RvcmFnZSA9ICgwLCBfZ2V0U3RvcmFnZS5kZWZhdWx0KSh0eXBlKTtcbiAgcmV0dXJuIHtcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKGtleSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZShzdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0oa2V5LCBpdGVtKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHN0b3JhZ2Uuc2V0SXRlbShrZXksIGl0ZW0pKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUoc3RvcmFnZS5yZW1vdmVJdGVtKGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RvcmFnZTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBub29wU3RvcmFnZSA9IHtcbiAgZ2V0SXRlbTogbm9vcCxcbiAgc2V0SXRlbTogbm9vcCxcbiAgcmVtb3ZlSXRlbTogbm9vcFxufTtcblxuZnVuY3Rpb24gaGFzU3RvcmFnZShzdG9yYWdlVHlwZSkge1xuICBpZiAoKHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc2VsZikpICE9PSAnb2JqZWN0JyB8fCAhKHN0b3JhZ2VUeXBlIGluIHNlbGYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RvcmFnZSA9IHNlbGZbc3RvcmFnZVR5cGVdO1xuICAgIHZhciB0ZXN0S2V5ID0gXCJyZWR1eC1wZXJzaXN0IFwiLmNvbmNhdChzdG9yYWdlVHlwZSwgXCIgdGVzdFwiKTtcbiAgICBzdG9yYWdlLnNldEl0ZW0odGVzdEtleSwgJ3Rlc3QnKTtcbiAgICBzdG9yYWdlLmdldEl0ZW0odGVzdEtleSk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHRlc3RLZXkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGNvbnNvbGUud2FybihcInJlZHV4LXBlcnNpc3QgXCIuY29uY2F0KHN0b3JhZ2VUeXBlLCBcIiB0ZXN0IGZhaWxlZCwgcGVyc2lzdGVuY2Ugd2lsbCBiZSBkaXNhYmxlZC5cIikpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yYWdlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2VUeXBlID0gXCJcIi5jb25jYXQodHlwZSwgXCJTdG9yYWdlXCIpO1xuICBpZiAoaGFzU3RvcmFnZShzdG9yYWdlVHlwZSkpIHJldHVybiBzZWxmW3N0b3JhZ2VUeXBlXTtlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihcInJlZHV4LXBlcnNpc3QgZmFpbGVkIHRvIGNyZWF0ZSBzeW5jIHN0b3JhZ2UuIGZhbGxpbmcgYmFjayB0byBub29wIHN0b3JhZ2UuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBub29wU3RvcmFnZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdlYlN0b3JhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdlYlN0b3JhZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVdlYlN0b3JhZ2UuZGVmYXVsdCkoJ2xvY2FsJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc2hhcmVkL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UuanNcbiAqXG4gKiBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCB0aHJvdyBlcnJvciBjYWxscy4gVGhlc2UgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4gKiBkdXJpbmcgYnVpbGQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVkdXggZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT1cIiArIGNvZGUgKyBcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciBcIiArICd1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzLiAnO1xufVxuXG4vLyBJbmxpbmVkIHZlcnNpb24gb2YgdGhlIGBzeW1ib2wtb2JzZXJ2YWJsZWAgcG9seWZpbGxcbnZhciAkJG9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJztcbn0pKCk7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vLyBJbmxpbmVkIC8gc2hvcnRlbmVkIHZlcnNpb24gb2YgYGtpbmRPZmAgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9raW5kLW9mXG5mdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG5cbiAgc3dpdGNoIChjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICBjYXNlICdTeW1ib2wnOlxuICAgIGNhc2UgJ1Byb21pc2UnOlxuICAgIGNhc2UgJ1dlYWtNYXAnOlxuICAgIGNhc2UgJ1dlYWtTZXQnOlxuICAgIGNhc2UgJ01hcCc6XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gIH0gLy8gb3RoZXJcblxuXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIHZhciB0eXBlT2ZWYWwgPSB0eXBlb2YgdmFsO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVPZlZhbDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiAnSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihlbmhhbmNlcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyKSA6IFwiRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKHJlZHVjZXIpICsgXCInXCIpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogXCJFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihsaXN0ZW5lcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiAnWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBcIkFjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnXCIgKyBraW5kT2YoYWN0aW9uKSArIFwiJy4gWW91IG1heSBuZWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRvIHlvdXIgc3RvcmUgc2V0dXAgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIG90aGVyIHZhbHVlcywgc3VjaCBhcyAncmVkdXgtdGh1bmsnIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBmdW5jdGlvbnMuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNtaWRkbGV3YXJlIGFuZCBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNi1hc3luYy1sb2dpYyN1c2luZy10aGUtcmVkdXgtdGh1bmstbWlkZGxld2FyZSBmb3IgZXhhbXBsZXMuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOSkgOiAnUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobmV4dFJlZHVjZXIpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogXCJFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG9ic2VydmVyKSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIGtpbmRPZihpbnB1dFN0YXRlKSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEyKSA6IFwiVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEzKSA6IFwiVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gXCIgKyAoXCJEb24ndCB0cnkgdG8gaGFuZGxlICdcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIicgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTQpIDogXCJXaGVuIGNhbGxlZCB3aXRoIGFuIGFjdGlvbiBvZiB0eXBlIFwiICsgKGFjdGlvblR5cGUgPyBcIlxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIDogJyh1bmtub3duIHR5cGUpJykgKyBcIiwgdGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBfa2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE2KSA6IFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJ1wiICsga2luZE9mKGFjdGlvbkNyZWF0b3JzKSArIFwiJy4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiAnRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RvcmUpLCB7fSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH07XG4iLCJmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChlcXVhbGl0eUNoZWNrLCBwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cbiAgdmFyIGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jKSB7XG4gIHZhciBlcXVhbGl0eUNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0RXF1YWxpdHlDaGVjaztcblxuICB2YXIgbGFzdEFyZ3MgPSBudWxsO1xuICB2YXIgbGFzdFJlc3VsdCA9IG51bGw7XG4gIC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgbGFzdEFyZ3MsIGFyZ3VtZW50cykpIHtcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICBsYXN0UmVzdWx0ID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGNyZWF0b3JzIGV4cGVjdCBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgJyArICgnaW5zdGVhZCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbJyArIGRlcGVuZGVuY3lUeXBlcyArICddJykpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZnVuY3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG5cbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh1bmRlZmluZWQsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZWNvbXB1dGF0aW9ucysrO1xuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG4gICAgdmFyIHNlbGVjdG9yID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgYW5kIG11dGF0ZSBhIGxvY2FsIGxpc3Qgb2YgcGFyYW1zIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgICAgcGFyYW1zLnB1c2goZGVwZW5kZW5jaWVzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgcmV0dXJuIG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0b3IucmVzdWx0RnVuYyA9IHJlc3VsdEZ1bmM7XG4gICAgc2VsZWN0b3IuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICAgIHNlbGVjdG9yLnJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zO1xuICAgIH07XG4gICAgc2VsZWN0b3IucmVzZXRSZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycykge1xuICB2YXIgc2VsZWN0b3JDcmVhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBjcmVhdGVTZWxlY3RvcjtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKCd3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSAnICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgcmV0dXJuIHNlbGVjdG9yQ3JlYXRvcihvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHZhbHVlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJzZWxlY3RDb3VudCIsInN0b3JlIiwiTmV3IiwiY291bnQiLCJkaXNwYXRjaCIsImNyZWF0ZVN0b3JlIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yYWdlIiwicmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwUmVkdWNlciIsInBlcnNpc3RvciIsImNyZWF0ZVNsaWNlIiwiY291bnRlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJzdGF0ZSIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJjb3VudGVyIiwiY29tYmluZVJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==