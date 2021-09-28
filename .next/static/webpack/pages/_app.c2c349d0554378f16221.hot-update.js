"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./stores/reducers/counter.js":
/*!************************************!*\
  !*** ./stores/reducers/counter.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; },
/* harmony export */   "decrement": function() { return /* binding */ decrement; },
/* harmony export */   "incrementByAmount": function() { return /* binding */ incrementByAmount; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initialState = {
  value: 0
};
var counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: function increment(state) {
      state.value++;
    },
    decrement: function decrement(state) {
      state.value--;
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMmMzNDlkMDU1NDM3OGYxNjIyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBckI7QUFFQSxJQUFNQyxZQUFZLEdBQUdILDZEQUFXLENBQUM7QUFDL0JJLEVBQUFBLElBQUksRUFBRSxTQUR5QjtBQUUvQkgsRUFBQUEsWUFBWSxFQUFaQSxZQUYrQjtBQUcvQkksRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLFNBRFEscUJBQ0VDLEtBREYsRUFDUztBQUNmQSxNQUFBQSxLQUFLLENBQUNMLEtBQU47QUFDRCxLQUhPO0FBSVJNLElBQUFBLFNBSlEscUJBSUVELEtBSkYsRUFJUztBQUNmQSxNQUFBQSxLQUFLLENBQUNMLEtBQU47QUFDRCxLQU5PO0FBT1JPLElBQUFBLGlCQVBRLDZCQU9VRixLQVBWLEVBT2lCRyxNQVBqQixFQU95QjtBQUMvQkgsTUFBQUEsS0FBSyxDQUFDTCxLQUFOLElBQWVRLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDRDtBQVRPO0FBSHFCLENBQUQsQ0FBaEM7QUFnQk8sNEJBQW9EUixZQUFZLENBQUNTLE9BQWpFO0FBQUEsSUFBUU4sU0FBUix5QkFBUUEsU0FBUjtBQUFBLElBQW1CRSxTQUFuQix5QkFBbUJBLFNBQW5CO0FBQUEsSUFBOEJDLGlCQUE5Qix5QkFBOEJBLGlCQUE5Qjs7QUFDUCwrREFBZU4sWUFBWSxDQUFDVSxPQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFB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QUNILHlFQUF5RSxlQUFlO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9yZWR1Y2Vycy9jb3VudGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0geyB2YWx1ZTogMCB9XG5cbmNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NvdW50ZXInLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgaW5jcmVtZW50KHN0YXRlKSB7XG4gICAgICBzdGF0ZS52YWx1ZSsrXG4gICAgfSxcbiAgICBkZWNyZW1lbnQoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnZhbHVlLS1cbiAgICB9LFxuICAgIGluY3JlbWVudEJ5QW1vdW50KHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59O1xyXG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xyXG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xyXG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcclxudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xyXG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XHJcbnZhciBfX2RlZk5vcm1hbFByb3AgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7IH07XHJcbnZhciBfX3NwcmVhZFZhbHVlcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXHJcbiAgICAgICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxyXG4gICAgICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XHJcbiAgICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gX19nZXRPd25Qcm9wU3ltYm9scyhiKTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3AgPSBfYltfaV07XHJcbiAgICAgICAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcclxuICAgICAgICAgICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gYTtcclxufTtcclxudmFyIF9fc3ByZWFkUHJvcHMgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7IH07XHJcbnZhciBfX2FzeW5jID0gZnVuY3Rpb24gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgZnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfTtcclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLy8gc3JjL2luZGV4LnRzXHJcbmltcG9ydCB7IGVuYWJsZUVTNSB9IGZyb20gXCJpbW1lclwiO1xyXG5leHBvcnQgKiBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0MiwgY3VycmVudCBhcyBjdXJyZW50MiwgZnJlZXplLCBvcmlnaW5hbCwgaXNEcmFmdCBhcyBpc0RyYWZ0NCB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciBhcyBjcmVhdGVTZWxlY3RvcjIgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxuLy8gc3JjL2NyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLnRzXHJcbmltcG9ydCB7IGN1cnJlbnQsIGlzRHJhZnQgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxudmFyIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgIHZhciB3cmFwcGVkU2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW2lzRHJhZnQodmFsdWUpID8gY3VycmVudCh2YWx1ZSkgOiB2YWx1ZV0sIHJlc3QpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gd3JhcHBlZFNlbGVjdG9yO1xyXG59O1xyXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgYXMgY29tcG9zZTIsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vIHNyYy9kZXZ0b29sc0V4dGVuc2lvbi50c1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbnZhciBjb21wb3NlV2l0aERldlRvb2xzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gY29tcG9zZTtcclxuICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBkZXZUb29sc0VuaGFuY2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub29wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vb3A7XHJcbiAgICB9O1xyXG59O1xyXG4vLyBzcmMvaXNQbGFpbk9iamVjdC50c1xyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBwcm90byA9IHZhbHVlO1xyXG4gICAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcclxuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSA9PT0gcHJvdG87XHJcbn1cclxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbi8vIHNyYy91dGlscy50c1xyXG5mdW5jdGlvbiBnZXRUaW1lTWVhc3VyZVV0aWxzKG1heERlbGF5LCBmbk5hbWUpIHtcclxuICAgIHZhciBlbGFwc2VkID0gMDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVhc3VyZVRpbWU6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbGFwc2VkICs9IGZpbmlzaGVkIC0gc3RhcnRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FybklmRXhjZWVkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBtYXhEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGZuTmFtZSArIFwiIHRvb2sgXCIgKyBlbGFwc2VkICsgXCJtcywgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSB3YXJuaW5nIHRocmVzaG9sZCBvZiBcIiArIG1heERlbGF5ICsgXCJtcy4gXFxuSWYgeW91ciBzdGF0ZSBvciBhY3Rpb25zIGFyZSB2ZXJ5IGxhcmdlLCB5b3UgbWF5IHdhbnQgdG8gZGlzYWJsZSB0aGUgbWlkZGxld2FyZSBhcyBpdCBtaWdodCBjYXVzZSB0b28gbXVjaCBvZiBhIHNsb3dkb3duIGluIGRldmVsb3BtZW50IG1vZGUuIFNlZSBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9nZXREZWZhdWx0TWlkZGxld2FyZSBmb3IgaW5zdHJ1Y3Rpb25zLlxcbkl0IGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzLCBzbyB5b3UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCB0aGF0LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxudmFyIE1pZGRsZXdhcmVBcnJheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNaWRkbGV3YXJlQXJyYXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNaWRkbGV3YXJlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmdzKSB8fCB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pZGRsZXdhcmVBcnJheSwgU3ltYm9sLnNwZWNpZXMsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1pZGRsZXdhcmVBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmNvbmNhdC5hcHBseSh0aGlzLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IChNaWRkbGV3YXJlQXJyYXkuYmluZC5hcHBseShNaWRkbGV3YXJlQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyclswXS5jb25jYXQodGhpcykpKSkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoTWlkZGxld2FyZUFycmF5LmJpbmQuYXBwbHkoTWlkZGxld2FyZUFycmF5LCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcnIuY29uY2F0KHRoaXMpKSkpKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1pZGRsZXdhcmVBcnJheTtcclxufShBcnJheSkpO1xyXG4vLyBzcmMvaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXHJcbnZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbnZhciBwcmVmaXggPSBcIkludmFyaWFudCBmYWlsZWRcIjtcclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXggKyBcIjogXCIgKyAobWVzc2FnZSB8fCBcIlwiKSk7XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgc2VyaWFsaXplciwgaW5kZW50LCBkZWN5Y2xlcikge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgZ2V0U2VyaWFsaXplKHNlcmlhbGl6ZXIsIGRlY3ljbGVyKSwgaW5kZW50KTtcclxufVxyXG5mdW5jdGlvbiBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpIHtcclxuICAgIHZhciBzdGFjayA9IFtdLCBrZXlzID0gW107XHJcbiAgICBpZiAoIWRlY3ljbGVyKVxyXG4gICAgICAgIGRlY3ljbGVyID0gZnVuY3Rpb24gKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFja1swXSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfl1cIjtcclxuICAgICAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiO1xyXG4gICAgICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjeWNsZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplciA9PSBudWxsID8gdmFsdWUgOiBzZXJpYWxpemVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzSW1tdXRhYmxlRGVmYXVsdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmlzRnJvemVuKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiB0cmFja0Zvck11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaikge1xyXG4gICAgdmFyIHRyYWNrZWRQcm9wZXJ0aWVzID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0ZWN0TXV0YXRpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCB0cmFja2VkUHJvcGVydGllcywgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaiwgcGF0aCkge1xyXG4gICAgaWYgKGlnbm9yZVBhdGhzID09PSB2b2lkIDApIHsgaWdub3JlUGF0aHMgPSBbXTsgfVxyXG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gXCJcIjsgfVxyXG4gICAgdmFyIHRyYWNrZWQgPSB7IHZhbHVlOiBvYmogfTtcclxuICAgIGlmICghaXNJbW11dGFibGUob2JqKSkge1xyXG4gICAgICAgIHRyYWNrZWQuY2hpbGRyZW4gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlUGF0aHMubGVuZ3RoICYmIGlnbm9yZVBhdGhzLmluZGV4T2YoY2hpbGRQYXRoKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyYWNrZWQuY2hpbGRyZW5ba2V5XSA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9ialtrZXldLCBjaGlsZFBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cmFja2VkO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0eSwgb2JqLCBzYW1lUGFyZW50UmVmLCBwYXRoKSB7XHJcbiAgICBpZiAoaWdub3JlUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVQYXRocyA9IFtdOyB9XHJcbiAgICBpZiAoc2FtZVBhcmVudFJlZiA9PT0gdm9pZCAwKSB7IHNhbWVQYXJlbnRSZWYgPSBmYWxzZTsgfVxyXG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gXCJcIjsgfVxyXG4gICAgdmFyIHByZXZPYmogPSB0cmFja2VkUHJvcGVydHkgPyB0cmFja2VkUHJvcGVydHkudmFsdWUgOiB2b2lkIDA7XHJcbiAgICB2YXIgc2FtZVJlZiA9IHByZXZPYmogPT09IG9iajtcclxuICAgIGlmIChzYW1lUGFyZW50UmVmICYmICFzYW1lUmVmICYmICFOdW1iZXIuaXNOYU4ob2JqKSkge1xyXG4gICAgICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IHRydWUsIHBhdGg6IHBhdGggfTtcclxuICAgIH1cclxuICAgIGlmIChpc0ltbXV0YWJsZShwcmV2T2JqKSB8fCBpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIHZhciBrZXlzVG9EZXRlY3QgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pIHtcclxuICAgICAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIGtleXNUb0RldGVjdCkge1xyXG4gICAgICAgIHZhciBjaGlsZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGgpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbltrZXldLCBvYmpba2V5XSwgc2FtZVJlZiwgY2hpbGRQYXRoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lndhc011dGF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV4dChhY3Rpb24pOyB9OyB9OyB9O1xyXG4gICAgfVxyXG4gICAgdmFyIF9iID0gb3B0aW9ucy5pc0ltbXV0YWJsZSwgaXNJbW11dGFibGUgPSBfYiA9PT0gdm9pZCAwID8gaXNJbW11dGFibGVEZWZhdWx0IDogX2IsIGlnbm9yZWRQYXRocyA9IG9wdGlvbnMuaWdub3JlZFBhdGhzLCBfYyA9IG9wdGlvbnMud2FybkFmdGVyLCB3YXJuQWZ0ZXIgPSBfYyA9PT0gdm9pZCAwID8gMzIgOiBfYywgaWdub3JlID0gb3B0aW9ucy5pZ25vcmU7XHJcbiAgICBpZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMgfHwgaWdub3JlO1xyXG4gICAgdmFyIHRyYWNrID0gdHJhY2tGb3JNdXRhdGlvbnMuYmluZChudWxsLCBpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICB2YXIgZ2V0U3RhdGUgPSBfYi5nZXRTdGF0ZTtcclxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIHZhciB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKHdhcm5BZnRlciwgXCJJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVcIik7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGludmFyaWFudCghcmVzdWx0Lndhc011dGF0ZWQsIFwiQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgYmV0d2VlbiBkaXNwYXRjaGVzLCBpbiB0aGUgcGF0aCAnXCIgKyAocmVzdWx0LnBhdGggfHwgXCJcIikgKyBcIicuICBUaGlzIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IuIChodHRwczovL3JlZHV4LmpzLm9yZy9zdHlsZS1ndWlkZS9zdHlsZS1ndWlkZSNkby1ub3QtbXV0YXRlLXN0YXRlKVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBkaXNwYXRjaGVkQWN0aW9uID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJhY2tlci5kZXRlY3RNdXRhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQud2FzTXV0YXRlZCAmJiBpbnZhcmlhbnQoIXJlc3VsdC53YXNNdXRhdGVkLCBcIkEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGluc2lkZSBhIGRpc3BhdGNoLCBpbiB0aGUgcGF0aDogXCIgKyAocmVzdWx0LnBhdGggfHwgXCJcIikgKyBcIi4gVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhlIGFjdGlvbiBcIiArIHN0cmluZ2lmeShhY3Rpb24pICsgXCIuIChodHRwczovL3JlZHV4LmpzLm9yZy9zdHlsZS1ndWlkZS9zdHlsZS1ndWlkZSNkby1ub3QtbXV0YXRlLXN0YXRlKVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy53YXJuSWZFeGNlZWRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hlZEFjdGlvbjtcclxuICAgICAgICB9OyB9O1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvc2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXHJcbmZ1bmN0aW9uIGlzUGxhaW4odmFsKSB7XHJcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwgfHwgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlID09PSBcImJvb2xlYW5cIiB8fCB0eXBlID09PSBcIm51bWJlclwiIHx8IEFycmF5LmlzQXJyYXkodmFsKSB8fCBpc1BsYWluT2JqZWN0KHZhbCk7XHJcbn1cclxuZnVuY3Rpb24gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKHZhbHVlLCBwYXRoLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzKSB7XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICBpZiAoaXNTZXJpYWxpemFibGUgPT09IHZvaWQgMCkgeyBpc1NlcmlhbGl6YWJsZSA9IGlzUGxhaW47IH1cclxuICAgIGlmIChpZ25vcmVkUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVkUGF0aHMgPSBbXTsgfVxyXG4gICAgdmFyIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlO1xyXG4gICAgaWYgKCFpc1NlcmlhbGl6YWJsZSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXlQYXRoOiBwYXRoIHx8IFwiPHJvb3Q+XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGVudHJpZXMgPSBnZXRFbnRyaWVzICE9IG51bGwgPyBnZXRFbnRyaWVzKHZhbHVlKSA6IE9iamVjdC5lbnRyaWVzKHZhbHVlKTtcclxuICAgIHZhciBoYXNJZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMubGVuZ3RoID4gMDtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIF9iID0gZW50cmllc18xW19pXSwga2V5ID0gX2JbMF0sIG5lc3RlZFZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgdmFyIG5lc3RlZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgIGlmIChoYXNJZ25vcmVkUGF0aHMgJiYgaWdub3JlZFBhdGhzLmluZGV4T2YobmVzdGVkUGF0aCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1NlcmlhbGl6YWJsZShuZXN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleVBhdGg6IG5lc3RlZFBhdGgsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmVzdGVkVmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShuZXN0ZWRWYWx1ZSwgbmVzdGVkUGF0aCwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocyk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV4dChhY3Rpb24pOyB9OyB9OyB9O1xyXG4gICAgfVxyXG4gICAgdmFyIF9iID0gb3B0aW9ucy5pc1NlcmlhbGl6YWJsZSwgaXNTZXJpYWxpemFibGUgPSBfYiA9PT0gdm9pZCAwID8gaXNQbGFpbiA6IF9iLCBnZXRFbnRyaWVzID0gb3B0aW9ucy5nZXRFbnRyaWVzLCBfYyA9IG9wdGlvbnMuaWdub3JlZEFjdGlvbnMsIGlnbm9yZWRBY3Rpb25zID0gX2MgPT09IHZvaWQgMCA/IFtdIDogX2MsIF9kID0gb3B0aW9ucy5pZ25vcmVkQWN0aW9uUGF0aHMsIGlnbm9yZWRBY3Rpb25QYXRocyA9IF9kID09PSB2b2lkIDAgPyBbXCJtZXRhLmFyZ1wiLCBcIm1ldGEuYmFzZVF1ZXJ5TWV0YVwiXSA6IF9kLCBfZSA9IG9wdGlvbnMuaWdub3JlZFBhdGhzLCBpZ25vcmVkUGF0aHMgPSBfZSA9PT0gdm9pZCAwID8gW10gOiBfZSwgX2YgPSBvcHRpb25zLndhcm5BZnRlciwgd2FybkFmdGVyID0gX2YgPT09IHZvaWQgMCA/IDMyIDogX2YsIF9nID0gb3B0aW9ucy5pZ25vcmVTdGF0ZSwgaWdub3JlU3RhdGUgPSBfZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZztcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVBUEkpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGlnbm9yZWRBY3Rpb25zLmxlbmd0aCAmJiBpZ25vcmVkQWN0aW9ucy5pbmRleE9mKGFjdGlvbi50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIlNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcclxuICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShhY3Rpb24sIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkQWN0aW9uUGF0aHMpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsIHZhbHVlID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIGFuIGFjdGlvbiwgaW4gdGhlIHBhdGg6IGBcIiArIGtleVBhdGggKyBcImAuIFZhbHVlOlwiLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgbG9naWMgdGhhdCBkaXNwYXRjaGVkIHRoaXMgYWN0aW9uOiBcIiwgYWN0aW9uLCBcIlxcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL2FjdGlvbnMjd2h5LXNob3VsZC10eXBlLWJlLWEtc3RyaW5nLW9yLWF0LWxlYXN0LXNlcmlhbGl6YWJsZS13aHktc2hvdWxkLW15LWFjdGlvbi10eXBlcy1iZS1jb25zdGFudHMpXCIsIFwiXFxuKFRvIGFsbG93IG5vbi1zZXJpYWxpemFibGUgdmFsdWVzIHNlZTogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy91c2FnZS91c2FnZS1ndWlkZSN3b3JraW5nLXdpdGgtbm9uLXNlcmlhbGl6YWJsZS1kYXRhKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgaWYgKCFpZ25vcmVTdGF0ZSkge1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoc3RhdGUsIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsIHZhbHVlID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIHRoZSBzdGF0ZSwgaW4gdGhlIHBhdGg6IGBcIiArIGtleVBhdGggKyBcImAuIFZhbHVlOlwiLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGlzIGFjdGlvbiB0eXBlOiBcIiArIGFjdGlvbi50eXBlICsgXCIuXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvb3JnYW5pemluZy1zdGF0ZSNjYW4taS1wdXQtZnVuY3Rpb25zLXByb21pc2VzLW9yLW90aGVyLW5vbi1zZXJpYWxpemFibGUtaXRlbXMtaW4tbXktc3RvcmUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9OyB9OyB9O1xyXG59XHJcbi8vIHNyYy9nZXREZWZhdWx0TWlkZGxld2FyZS50c1xyXG5mdW5jdGlvbiBpc0Jvb2xlYW4oeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcclxufVxyXG5mdW5jdGlvbiBjdXJyeUdldERlZmF1bHRNaWRkbGV3YXJlKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9iID0gb3B0aW9ucy50aHVuaywgdGh1bmsgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuaW1tdXRhYmxlQ2hlY2ssIGltbXV0YWJsZUNoZWNrID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLnNlcmlhbGl6YWJsZUNoZWNrLCBzZXJpYWxpemFibGVDaGVjayA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2Q7XHJcbiAgICB2YXIgbWlkZGxld2FyZUFycmF5ID0gbmV3IE1pZGRsZXdhcmVBcnJheSgpO1xyXG4gICAgaWYgKHRodW5rKSB7XHJcbiAgICAgICAgaWYgKGlzQm9vbGVhbih0aHVuaykpIHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHRodW5rTWlkZGxld2FyZS53aXRoRXh0cmFBcmd1bWVudCh0aHVuay5leHRyYUFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmIChpbW11dGFibGVDaGVjaykge1xyXG4gICAgICAgICAgICB2YXIgaW1tdXRhYmxlT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIWlzQm9vbGVhbihpbW11dGFibGVDaGVjaykpIHtcclxuICAgICAgICAgICAgICAgIGltbXV0YWJsZU9wdGlvbnMgPSBpbW11dGFibGVDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkudW5zaGlmdChjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoaW1tdXRhYmxlT3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXphYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFpc0Jvb2xlYW4oc2VyaWFsaXphYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemFibGVPcHRpb25zID0gc2VyaWFsaXphYmxlQ2hlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWlkZGxld2FyZUFycmF5O1xyXG59XHJcbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xyXG52YXIgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUob3B0aW9ucykge1xyXG4gICAgdmFyIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcclxuICAgIHZhciBfYiA9IG9wdGlvbnMgfHwge30sIF9jID0gX2IucmVkdWNlciwgcmVkdWNlciA9IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYywgX2QgPSBfYi5taWRkbGV3YXJlLCBtaWRkbGV3YXJlID0gX2QgPT09IHZvaWQgMCA/IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpIDogX2QsIF9lID0gX2IuZGV2VG9vbHMsIGRldlRvb2xzID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZSwgX2YgPSBfYi5wcmVsb2FkZWRTdGF0ZSwgcHJlbG9hZGVkU3RhdGUgPSBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YsIF9nID0gX2IuZW5oYW5jZXJzLCBlbmhhbmNlcnMgPSBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2c7XHJcbiAgICB2YXIgcm9vdFJlZHVjZXI7XHJcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJvb3RSZWR1Y2VyID0gcmVkdWNlcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgICAgICByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJyZWR1Y2VyXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudCwgYW5kIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnMnKTtcclxuICAgIH1cclxuICAgIHZhciBmaW5hbE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlO1xyXG4gICAgaWYgKHR5cGVvZiBmaW5hbE1pZGRsZXdhcmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGZpbmFsTWlkZGxld2FyZSA9IGZpbmFsTWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpO1xyXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTiAmJiAhQXJyYXkuaXNBcnJheShmaW5hbE1pZGRsZXdhcmUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndoZW4gdXNpbmcgYSBtaWRkbGV3YXJlIGJ1aWxkZXIgZnVuY3Rpb24sIGFuIGFycmF5IG9mIG1pZGRsZXdhcmUgbXVzdCBiZSByZXR1cm5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgZmluYWxNaWRkbGV3YXJlLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHR5cGVvZiBpdGVtICE9PSBcImZ1bmN0aW9uXCI7IH0pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWFjaCBtaWRkbGV3YXJlIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZVN0b3JlIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIHZhciBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUuYXBwbHkodm9pZCAwLCBmaW5hbE1pZGRsZXdhcmUpO1xyXG4gICAgdmFyIGZpbmFsQ29tcG9zZSA9IGNvbXBvc2UyO1xyXG4gICAgaWYgKGRldlRvb2xzKSB7XHJcbiAgICAgICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTlxyXG4gICAgICAgIH0sIHR5cGVvZiBkZXZUb29scyA9PT0gXCJvYmplY3RcIiAmJiBkZXZUb29scykpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0b3JlRW5oYW5jZXJzID0gW21pZGRsZXdhcmVFbmhhbmNlcl07XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBfX3NwcmVhZEFycmF5KFttaWRkbGV3YXJlRW5oYW5jZXJdLCBlbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGVuaGFuY2VycyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBlbmhhbmNlcnMoc3RvcmVFbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbXBvc2VkRW5oYW5jZXIgPSBmaW5hbENvbXBvc2UuYXBwbHkodm9pZCAwLCBzdG9yZUVuaGFuY2Vycyk7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlZEVuaGFuY2VyKTtcclxufVxyXG4vLyBzcmMvY3JlYXRlQWN0aW9uLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlcGFyZUFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICghcHJlcGFyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZFxyXG4gICAgICAgICAgICB9LCBcIm1ldGFcIiBpbiBwcmVwYXJlZCAmJiB7IG1ldGE6IHByZXBhcmVkLm1ldGEgfSksIFwiZXJyb3JcIiBpbiBwcmVwYXJlZCAmJiB7IGVycm9yOiBwcmVwYXJlZC5lcnJvciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogYXJnc1swXSB9O1xyXG4gICAgfVxyXG4gICAgYWN0aW9uQ3JlYXRvci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiXCIgKyB0eXBlOyB9O1xyXG4gICAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZTtcclxuICAgIGFjdGlvbkNyZWF0b3IubWF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBhY3Rpb24udHlwZSA9PT0gdHlwZTsgfTtcclxuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGlzRlNBKGFjdGlvbikge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiB0eXBlb2YgYWN0aW9uLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgT2JqZWN0LmtleXMoYWN0aW9uKS5ldmVyeShpc1ZhbGlkS2V5KTtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIFtcInR5cGVcIiwgXCJwYXlsb2FkXCIsIFwiZXJyb3JcIiwgXCJtZXRhXCJdLmluZGV4T2Yoa2V5KSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGdldFR5cGUoYWN0aW9uQ3JlYXRvcikge1xyXG4gICAgcmV0dXJuIFwiXCIgKyBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVSZWR1Y2VyLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUsIHsgaXNEcmFmdCBhcyBpc0RyYWZ0MiwgaXNEcmFmdGFibGUgfSBmcm9tIFwiaW1tZXJcIjtcclxuLy8gc3JjL21hcEJ1aWxkZXJzLnRzXHJcbmZ1bmN0aW9uIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXJDYWxsYmFjaykge1xyXG4gICAgdmFyIGFjdGlvbnNNYXAgPSB7fTtcclxuICAgIHZhciBhY3Rpb25NYXRjaGVycyA9IFtdO1xyXG4gICAgdmFyIGRlZmF1bHRDYXNlUmVkdWNlcjtcclxuICAgIHZhciBidWlsZGVyID0ge1xyXG4gICAgICAgIGFkZENhc2U6IGZ1bmN0aW9uICh0eXBlT3JBY3Rpb25DcmVhdG9yLCByZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25NYXRjaGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZE1hdGNoZXJgXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gXCJzdHJpbmdcIiA/IHR5cGVPckFjdGlvbkNyZWF0b3IgOiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFkZENhc2UgY2Fubm90IGJlIGNhbGxlZCB3aXRoIHR3byByZWR1Y2VycyBmb3IgdGhlIHNhbWUgYWN0aW9uIHR5cGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uc01hcFt0eXBlXSA9IHJlZHVjZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkTWF0Y2hlcjogZnVuY3Rpb24gKG1hdGNoZXIsIHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZE1hdGNoZXJgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uTWF0Y2hlcnMucHVzaCh7IG1hdGNoZXI6IG1hdGNoZXIsIHJlZHVjZXI6IHJlZHVjZXIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkRGVmYXVsdENhc2U6IGZ1bmN0aW9uIChyZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gcmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKTtcclxuICAgIHJldHVybiBbYWN0aW9uc01hcCwgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl07XHJcbn1cclxuLy8gc3JjL2NyZWF0ZVJlZHVjZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIG1hcE9yQnVpbGRlckNhbGxiYWNrLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICBpZiAoYWN0aW9uTWF0Y2hlcnMgPT09IHZvaWQgMCkgeyBhY3Rpb25NYXRjaGVycyA9IFtdOyB9XHJcbiAgICB2YXIgX2IgPSB0eXBlb2YgbWFwT3JCdWlsZGVyQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKSA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl0sIGFjdGlvbnNNYXAgPSBfYlswXSwgZmluYWxBY3Rpb25NYXRjaGVycyA9IF9iWzFdLCBmaW5hbERlZmF1bHRDYXNlUmVkdWNlciA9IF9iWzJdO1xyXG4gICAgdmFyIGZyb3plbkluaXRpYWxTdGF0ZSA9IGNyZWF0ZU5leHRTdGF0ZShpbml0aWFsU3RhdGUsIGZ1bmN0aW9uICgpIHtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSBmcm96ZW5Jbml0aWFsU3RhdGU7IH1cclxuICAgICAgICB2YXIgY2FzZVJlZHVjZXJzID0gX19zcHJlYWRBcnJheShbXHJcbiAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdXHJcbiAgICAgICAgXSwgZmluYWxBY3Rpb25NYXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gX2IubWF0Y2hlcjtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcclxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHZhciByZWR1Y2VyID0gX2IucmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZXI7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGZ1bmN0aW9uIChjcikgeyByZXR1cm4gISFjcjsgfSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VycyA9IFtmaW5hbERlZmF1bHRDYXNlUmVkdWNlcl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYXNlUmVkdWNlcnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlLCBjYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAoY2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0RyYWZ0MihwcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkcmFmdCA9IHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzRHJhZnRhYmxlKHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNhc2VSZWR1Y2VyKHByZXZpb3VzU3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlKHByZXZpb3VzU3RhdGUsIGZ1bmN0aW9uIChkcmFmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgfSwgc3RhdGUpO1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvY3JlYXRlU2xpY2UudHNcclxuZnVuY3Rpb24gZ2V0VHlwZTIoc2xpY2UsIGFjdGlvbktleSkge1xyXG4gICAgcmV0dXJuIHNsaWNlICsgXCIvXCIgKyBhY3Rpb25LZXk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2xpY2Uob3B0aW9ucykge1xyXG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsIGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlO1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYG5hbWVgIGlzIGEgcmVxdWlyZWQgb3B0aW9uIGZvciBjcmVhdGVTbGljZVwiKTtcclxuICAgIH1cclxuICAgIHZhciByZWR1Y2VycyA9IG9wdGlvbnMucmVkdWNlcnMgfHwge307XHJcbiAgICB2YXIgX2IgPSB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCIgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhvcHRpb25zLmV4dHJhUmVkdWNlcnMpIDogW29wdGlvbnMuZXh0cmFSZWR1Y2Vyc10sIF9jID0gX2JbMF0sIGV4dHJhUmVkdWNlcnMgPSBfYyA9PT0gdm9pZCAwID8ge30gOiBfYywgX2QgPSBfYlsxXSwgYWN0aW9uTWF0Y2hlcnMgPSBfZCA9PT0gdm9pZCAwID8gW10gOiBfZCwgX2UgPSBfYlsyXSwgZGVmYXVsdENhc2VSZWR1Y2VyID0gX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lO1xyXG4gICAgdmFyIHJlZHVjZXJOYW1lcyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcclxuICAgIHZhciBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSA9IHt9O1xyXG4gICAgdmFyIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlID0ge307XHJcbiAgICB2YXIgYWN0aW9uQ3JlYXRvcnMgPSB7fTtcclxuICAgIHJlZHVjZXJOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWR1Y2VyTmFtZSkge1xyXG4gICAgICAgIHZhciBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSA9IHJlZHVjZXJzW3JlZHVjZXJOYW1lXTtcclxuICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUyKG5hbWUsIHJlZHVjZXJOYW1lKTtcclxuICAgICAgICB2YXIgY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgdmFyIHByZXBhcmVDYWxsYmFjaztcclxuICAgICAgICBpZiAoXCJyZWR1Y2VyXCIgaW4gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUpIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5yZWR1Y2VyO1xyXG4gICAgICAgICAgICBwcmVwYXJlQ2FsbGJhY2sgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5wcmVwYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVbcmVkdWNlck5hbWVdID0gY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGVbdHlwZV0gPSBjYXNlUmVkdWNlcjtcclxuICAgICAgICBhY3Rpb25DcmVhdG9yc1tyZWR1Y2VyTmFtZV0gPSBwcmVwYXJlQ2FsbGJhY2sgPyBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUNhbGxiYWNrKSA6IGNyZWF0ZUFjdGlvbih0eXBlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGZpbmFsQ2FzZVJlZHVjZXJzID0gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIGV4dHJhUmVkdWNlcnMpLCBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSk7XHJcbiAgICB2YXIgcmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBmaW5hbENhc2VSZWR1Y2VycywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgcmVkdWNlcjogcmVkdWNlcixcclxuICAgICAgICBhY3Rpb25zOiBhY3Rpb25DcmVhdG9ycyxcclxuICAgICAgICBjYXNlUmVkdWNlcnM6IHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lXHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9lbnRpdHlfc3RhdGUudHNcclxuZnVuY3Rpb24gZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZHM6IFtdLFxyXG4gICAgICAgIGVudGl0aWVzOiB7fVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKGFkZGl0aW9uYWxTdGF0ZSkge1xyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsU3RhdGUgPT09IHZvaWQgMCkgeyBhZGRpdGlvbmFsU3RhdGUgPSB7fTsgfVxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpLCBhZGRpdGlvbmFsU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZ2V0SW5pdGlhbFN0YXRlOiBnZXRJbml0aWFsU3RhdGUgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc3RhdGVfc2VsZWN0b3JzLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkoKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMoc2VsZWN0U3RhdGUpIHtcclxuICAgICAgICB2YXIgc2VsZWN0SWRzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5pZHM7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEVudGl0aWVzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5lbnRpdGllczsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0QWxsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBzZWxlY3RFbnRpdGllcywgZnVuY3Rpb24gKGlkcywgZW50aXRpZXMpIHsgcmV0dXJuIGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBlbnRpdGllc1tpZF07IH0pOyB9KTtcclxuICAgICAgICB2YXIgc2VsZWN0SWQgPSBmdW5jdGlvbiAoXywgaWQpIHsgcmV0dXJuIGlkOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RCeUlkID0gZnVuY3Rpb24gKGVudGl0aWVzLCBpZCkgeyByZXR1cm4gZW50aXRpZXNbaWRdOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RUb3RhbCA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdElkcywgZnVuY3Rpb24gKGlkcykgeyByZXR1cm4gaWRzLmxlbmd0aDsgfSk7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RTdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0SWRzOiBzZWxlY3RJZHMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RBbGw6IHNlbGVjdEFsbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdFRvdGFsOiBzZWxlY3RUb3RhbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0SWRzOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0SWRzKSxcclxuICAgICAgICAgICAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyxcclxuICAgICAgICAgICAgc2VsZWN0QWxsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0QWxsKSxcclxuICAgICAgICAgICAgc2VsZWN0VG90YWw6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RUb3RhbCksXHJcbiAgICAgICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcywgc2VsZWN0SWQsIHNlbGVjdEJ5SWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGdldFNlbGVjdG9yczogZ2V0U2VsZWN0b3JzIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX2FkYXB0ZXIudHNcclxuaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZTIsIHsgaXNEcmFmdCBhcyBpc0RyYWZ0MyB9IGZyb20gXCJpbW1lclwiO1xyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xyXG4gICAgdmFyIG9wZXJhdG9yID0gY3JlYXRlU3RhdGVPcGVyYXRvcihmdW5jdGlvbiAoXywgc3RhdGUpIHsgcmV0dXJuIG11dGF0b3Ioc3RhdGUpOyB9KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gb3BlcmF0b3Ioc3RhdGUsIHZvaWQgMCk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSwgYXJnKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnMikge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNGU0EoYXJnMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBydW5NdXRhdG9yID0gZnVuY3Rpb24gKGRyYWZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcpKSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdG9yKGFyZy5wYXlsb2FkLCBkcmFmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdG9yKGFyZywgZHJhZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNEcmFmdDMoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHJ1bk11dGF0b3Ioc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlMihzdGF0ZSwgcnVuTXV0YXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvdXRpbHMudHNcclxuZnVuY3Rpb24gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKSB7XHJcbiAgICB2YXIga2V5ID0gc2VsZWN0SWQoZW50aXR5KTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYga2V5ID09PSB2b2lkIDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZW50aXR5IHBhc3NlZCB0byB0aGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCB1bmRlZmluZWQuXCIsIFwiWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24uXCIsIFwiVGhlIGVudGl0eSB0aGF0IHdhcyBwYXNzZWQ6XCIsIGVudGl0eSwgXCJUaGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbjpcIiwgc2VsZWN0SWQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcbmZ1bmN0aW9uIGVuc3VyZUVudGl0aWVzQXJyYXkoZW50aXRpZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcclxuICAgICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudGl0aWVzO1xyXG59XHJcbmZ1bmN0aW9uIHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSkge1xyXG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgIHZhciBhZGRlZCA9IFtdO1xyXG4gICAgdmFyIHVwZGF0ZWQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMSA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzFbX2ldO1xyXG4gICAgICAgIHZhciBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKGlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQucHVzaCh7IGlkOiBpZCwgY2hhbmdlczogZW50aXR5IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWQucHVzaChlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbYWRkZWQsIHVwZGF0ZWRdO1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy91bnNvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKSB7XHJcbiAgICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1trZXldID0gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzIgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfMltfaV07XHJcbiAgICAgICAgICAgIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHN0YXRlLmVudGl0aWVzKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1trZXldID0gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzMgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18zLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfM1tfaV07XHJcbiAgICAgICAgICAgIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIHN0YXRlLmlkcyA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzID0ge307XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU9uZU11dGFibHkoa2V5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiByZW1vdmVNYW55TXV0YWJseShba2V5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFueU11dGFibHkoa2V5cywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgZGlkTXV0YXRlID0gZmFsc2U7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICBkaWRNdXRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRpZE11dGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gaWQgaW4gc3RhdGUuZW50aXRpZXM7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbE11dGFibHkoc3RhdGUpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlkczogW10sXHJcbiAgICAgICAgICAgIGVudGl0aWVzOiB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGFrZU5ld0tleShrZXlzLCB1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsMiA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgdmFyIHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbDIsIHVwZGF0ZS5jaGFuZ2VzKTtcclxuICAgICAgICB2YXIgbmV3S2V5ID0gc2VsZWN0SWRWYWx1ZSh1cGRhdGVkLCBzZWxlY3RJZCk7XHJcbiAgICAgICAgdmFyIGhhc05ld0tleSA9IG5ld0tleSAhPT0gdXBkYXRlLmlkO1xyXG4gICAgICAgIGlmIChoYXNOZXdLZXkpIHtcclxuICAgICAgICAgICAga2V5c1t1cGRhdGUuaWRdID0gbmV3S2V5O1xyXG4gICAgICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNbbmV3S2V5XSA9IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIGhhc05ld0tleTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9uZU11dGFibHkodXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFueU11dGFibHkodXBkYXRlcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgbmV3S2V5cyA9IHt9O1xyXG4gICAgICAgIHZhciB1cGRhdGVzUGVyRW50aXR5ID0ge307XHJcbiAgICAgICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh1cGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1cGRhdGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlczogX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA/IHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXS5jaGFuZ2VzIDogbnVsbCksIHVwZGF0ZS5jaGFuZ2VzKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZXMgPSBPYmplY3QudmFsdWVzKHVwZGF0ZXNQZXJFbnRpdHkpO1xyXG4gICAgICAgIHZhciBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAoZGlkTXV0YXRlRW50aXRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIGRpZE11dGF0ZUlkcyA9IHVwZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1cGRhdGUpIHsgcmV0dXJuIHRha2VOZXdLZXkobmV3S2V5cywgdXBkYXRlLCBzdGF0ZSk7IH0pLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIGlmIChkaWRNdXRhdGVJZHMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBuZXdLZXlzW2lkXSB8fCBpZDsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYiA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSksIGFkZGVkID0gX2JbMF0sIHVwZGF0ZWQgPSBfYlsxXTtcclxuICAgICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KSxcclxuICAgICAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXHJcbiAgICAgICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydCkge1xyXG4gICAgdmFyIF9iID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpLCByZW1vdmVPbmUgPSBfYi5yZW1vdmVPbmUsIHJlbW92ZU1hbnkgPSBfYi5yZW1vdmVNYW55LCByZW1vdmVBbGwgPSBfYi5yZW1vdmVBbGw7XHJcbiAgICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgdmFyIG1vZGVscyA9IG5ld0VudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuICEoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpIGluIHN0YXRlLmVudGl0aWVzKTsgfSk7XHJcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobW9kZWxzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGlmIChuZXdFbnRpdGllcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICBzdGF0ZS5pZHMgPSBbXTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0YWtlVXBkYXRlZE1vZGVsKG1vZGVscywgdXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIGlmICghKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3JpZ2luYWwyID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICB2YXIgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsMiwgdXBkYXRlLmNoYW5nZXMpO1xyXG4gICAgICAgIHZhciBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKTtcclxuICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICBtb2RlbHMucHVzaCh1cGRhdGVkKTtcclxuICAgICAgICByZXR1cm4gbmV3S2V5ICE9PSB1cGRhdGUuaWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBtb2RlbHMgPSBbXTtcclxuICAgICAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVwZGF0ZSkgeyByZXR1cm4gdGFrZVVwZGF0ZWRNb2RlbChtb2RlbHMsIHVwZGF0ZSwgc3RhdGUpOyB9KTtcclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYiA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSksIGFkZGVkID0gX2JbMF0sIHVwZGF0ZWQgPSBfYlsxXTtcclxuICAgICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aCAmJiBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYVtpXSA9PT0gYltpXSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1lcmdlKG1vZGVscywgc3RhdGUpIHtcclxuICAgICAgICBtb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW50aXRpZXNbc2VsZWN0SWQobW9kZWwpXSA9IG1vZGVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBhbGxFbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMpO1xyXG4gICAgICAgIGFsbEVudGl0aWVzLnNvcnQoc29ydCk7XHJcbiAgICAgICAgdmFyIG5ld1NvcnRlZElkcyA9IGFsbEVudGl0aWVzLm1hcChzZWxlY3RJZCk7XHJcbiAgICAgICAgdmFyIGlkcyA9IHN0YXRlLmlkcztcclxuICAgICAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmVPbmU6IHJlbW92ZU9uZSxcclxuICAgICAgICByZW1vdmVNYW55OiByZW1vdmVNYW55LFxyXG4gICAgICAgIHJlbW92ZUFsbDogcmVtb3ZlQWxsLFxyXG4gICAgICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL2NyZWF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXIob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYiA9IF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdElkOiBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlLmlkOyB9XHJcbiAgICB9LCBvcHRpb25zKSwgc2VsZWN0SWQgPSBfYi5zZWxlY3RJZCwgc29ydENvbXBhcmVyID0gX2Iuc29ydENvbXBhcmVyO1xyXG4gICAgdmFyIHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKTtcclxuICAgIHZhciBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpO1xyXG4gICAgdmFyIHN0YXRlQWRhcHRlciA9IHNvcnRDb21wYXJlciA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKSA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKTtcclxuICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgc2VsZWN0SWQ6IHNlbGVjdElkLFxyXG4gICAgICAgIHNvcnRDb21wYXJlcjogc29ydENvbXBhcmVyXHJcbiAgICB9LCBzdGF0ZUZhY3RvcnkpLCBzZWxlY3RvcnNGYWN0b3J5KSwgc3RhdGVBZGFwdGVyKTtcclxufVxyXG4vLyBzcmMvbmFub2lkLnRzXHJcbnZhciB1cmxBbHBoYWJldCA9IFwiTW9kdWxlU3ltYmhhc093blByLTAxMjM0NTY3ODlBQkNERUZHSE5SVmZnY3RpVXZ6X0txWVRKa0x4cFpYSWpRV1wiO1xyXG52YXIgbmFub2lkID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgIGlmIChzaXplID09PSB2b2lkIDApIHsgc2l6ZSA9IDIxOyB9XHJcbiAgICB2YXIgaWQgPSBcIlwiO1xyXG4gICAgdmFyIGkgPSBzaXplO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIGlkICs9IHVybEFscGhhYmV0W01hdGgucmFuZG9tKCkgKiA2NCB8IDBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkO1xyXG59O1xyXG4vLyBzcmMvY3JlYXRlQXN5bmNUaHVuay50c1xyXG52YXIgY29tbW9uUHJvcGVydGllcyA9IFtcclxuICAgIFwibmFtZVwiLFxyXG4gICAgXCJtZXNzYWdlXCIsXHJcbiAgICBcInN0YWNrXCIsXHJcbiAgICBcImNvZGVcIlxyXG5dO1xyXG52YXIgUmVqZWN0V2l0aFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVqZWN0V2l0aFZhbHVlKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVqZWN0V2l0aFZhbHVlO1xyXG59KCkpO1xyXG52YXIgRnVsZmlsbFdpdGhNZXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnVsZmlsbFdpdGhNZXRhKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRnVsZmlsbFdpdGhNZXRhO1xyXG59KCkpO1xyXG52YXIgbWluaVNlcmlhbGl6ZUVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHNpbXBsZUVycm9yID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21tb25Qcm9wZXJ0aWVzXzEgPSBjb21tb25Qcm9wZXJ0aWVzOyBfaSA8IGNvbW1vblByb3BlcnRpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gY29tbW9uUHJvcGVydGllc18xW19pXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtwcm9wZXJ0eV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2ltcGxlRXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtZXNzYWdlOiBTdHJpbmcodmFsdWUpIH07XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGh1bmsodHlwZVByZWZpeCwgcGF5bG9hZENyZWF0b3IsIG9wdGlvbnMpIHtcclxuICAgIHZhciBmdWxmaWxsZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL2Z1bGZpbGxlZFwiLCBmdW5jdGlvbiAocGF5bG9hZCwgcmVxdWVzdElkLCBhcmcsIG1ldGEpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwiZnVsZmlsbGVkXCJcclxuICAgICAgICB9KVxyXG4gICAgfSk7IH0pO1xyXG4gICAgdmFyIHBlbmRpbmcgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL3BlbmRpbmdcIiwgZnVuY3Rpb24gKHJlcXVlc3RJZCwgYXJnLCBtZXRhKSB7IHJldHVybiAoe1xyXG4gICAgICAgIHBheWxvYWQ6IHZvaWQgMCxcclxuICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwicGVuZGluZ1wiXHJcbiAgICAgICAgfSlcclxuICAgIH0pOyB9KTtcclxuICAgIHZhciByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcmVqZWN0ZWRcIiwgZnVuY3Rpb24gKGVycm9yLCByZXF1ZXN0SWQsIGFyZywgcGF5bG9hZCwgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgIGVycm9yOiAob3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZUVycm9yIHx8IG1pbmlTZXJpYWxpemVFcnJvcikoZXJyb3IgfHwgXCJSZWplY3RlZFwiKSxcclxuICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgIHJlamVjdGVkV2l0aFZhbHVlOiAhIXBheWxvYWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICAgICAgYWJvcnRlZDogKGVycm9yID09IG51bGwgPyB2b2lkIDAgOiBlcnJvci5uYW1lKSA9PT0gXCJBYm9ydEVycm9yXCIsXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogKGVycm9yID09IG51bGwgPyB2b2lkIDAgOiBlcnJvci5uYW1lKSA9PT0gXCJDb25kaXRpb25FcnJvclwiXHJcbiAgICAgICAgfSlcclxuICAgIH0pOyB9KTtcclxuICAgIHZhciBkaXNwbGF5ZWRXYXJuaW5nID0gZmFsc2U7XHJcbiAgICB2YXIgQUMgPSB0eXBlb2YgQWJvcnRDb250cm9sbGVyICE9PSBcInVuZGVmaW5lZFwiID8gQWJvcnRDb250cm9sbGVyIDogLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsID0ge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbmFib3J0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXNwbGF5ZWRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVGhpcyBwbGF0Zm9ybSBkb2VzIG5vdCBpbXBsZW1lbnQgQWJvcnRDb250cm9sbGVyLiBcXG5JZiB5b3Ugd2FudCB0byB1c2UgdGhlIEFib3J0Q29udHJvbGxlciB0byByZWFjdCB0byBgYWJvcnRgIGV2ZW50cywgcGxlYXNlIGNvbnNpZGVyIGltcG9ydGluZyBhIHBvbHlmaWxsIGxpa2UgJ2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5Jy5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgfSgpKTtcclxuICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJZCA9ICgoX2EgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmlkR2VuZXJhdG9yKSAhPSBudWxsID8gX2EgOiBuYW5vaWQpKCk7XHJcbiAgICAgICAgICAgIHZhciBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQUMoKTtcclxuICAgICAgICAgICAgdmFyIGFib3J0UmVhc29uO1xyXG4gICAgICAgICAgICB2YXIgYWJvcnRlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7IHJldHVybiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3QoeyBuYW1lOiBcIkFib3J0RXJyb3JcIiwgbWVzc2FnZTogYWJvcnRSZWFzb24gfHwgXCJBYm9ydGVkXCIgfSk7IH0pOyB9KTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYWJvcnQocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0UmVhc29uID0gcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTIsIGZpbmFsQWN0aW9uLCBlcnJfMSwgc2tpcERpc3BhdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jb25kaXRpb24gJiYgb3B0aW9ucy5jb25kaXRpb24oYXJnLCB7IGdldFN0YXRlOiBnZXRTdGF0ZSwgZXh0cmE6IGV4dHJhIH0pID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbmRpdGlvbkVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFib3J0ZWQgZHVlIHRvIGNvbmRpdGlvbiBjYWxsYmFjayByZXR1cm5pbmcgZmFsc2UuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocGVuZGluZyhyZXF1ZXN0SWQsIGFyZywgKF9hMiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0UGVuZGluZ01ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuY2FsbChvcHRpb25zLCB7IHJlcXVlc3RJZDogcmVxdWVzdElkLCBhcmc6IGFyZyB9LCB7IGdldFN0YXRlOiBnZXRTdGF0ZSwgZXh0cmE6IGV4dHJhIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yYWNlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0ZWRQcm9taXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHBheWxvYWRDcmVhdG9yKGFyZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RXaXRoVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlamVjdFdpdGhWYWx1ZSh2YWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxmaWxsV2l0aFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGdWxmaWxsV2l0aE1ldGEodmFsdWUsIG1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEZ1bGZpbGxXaXRoTWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdC5wYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgcmVzdWx0Lm1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQWN0aW9uID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQWN0aW9uID0gZXJyXzEgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUgPyByZWplY3RlZChudWxsLCByZXF1ZXN0SWQsIGFyZywgZXJyXzEucGF5bG9hZCwgZXJyXzEubWV0YSkgOiByZWplY3RlZChlcnJfMSwgcmVxdWVzdElkLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBEaXNwYXRjaCA9IG9wdGlvbnMgJiYgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiYgcmVqZWN0ZWQubWF0Y2goZmluYWxBY3Rpb24pICYmIGZpbmFsQWN0aW9uLm1ldGEuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcERpc3BhdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZpbmFsQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbmFsQWN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvbWlzZSwge1xyXG4gICAgICAgICAgICAgICAgYWJvcnQ6IGFib3J0LFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgIHVud3JhcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4odW53cmFwUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjdGlvbkNyZWF0b3IsIHtcclxuICAgICAgICBwZW5kaW5nOiBwZW5kaW5nLFxyXG4gICAgICAgIHJlamVjdGVkOiByZWplY3RlZCxcclxuICAgICAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcclxuICAgICAgICB0eXBlUHJlZml4OiB0eXBlUHJlZml4XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB1bndyYXBSZXN1bHQoYWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24uZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbn1cclxuLy8gc3JjL3RzSGVscGVycy50c1xyXG52YXIgaGFzTWF0Y2hGdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICByZXR1cm4gdiAmJiB0eXBlb2Ygdi5tYXRjaCA9PT0gXCJmdW5jdGlvblwiO1xyXG59O1xyXG4vLyBzcmMvbWF0Y2hlcnMudHNcclxudmFyIG1hdGNoZXMgPSBmdW5jdGlvbiAobWF0Y2hlciwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaGFzTWF0Y2hGdW5jdGlvbihtYXRjaGVyKSkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVyLm1hdGNoKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBpc0FueU9mKCkge1xyXG4gICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG1hdGNoZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVycy5zb21lKGZ1bmN0aW9uIChtYXRjaGVyKSB7IHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7IH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0FsbE9mKCkge1xyXG4gICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG1hdGNoZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVycy5ldmVyeShmdW5jdGlvbiAobWF0Y2hlcikgeyByZXR1cm4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pOyB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCB2YWxpZFN0YXR1cykge1xyXG4gICAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi5tZXRhKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBoYXNWYWxpZFJlcXVlc3RJZCA9IHR5cGVvZiBhY3Rpb24ubWV0YS5yZXF1ZXN0SWQgPT09IFwic3RyaW5nXCI7XHJcbiAgICB2YXIgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzID0gdmFsaWRTdGF0dXMuaW5kZXhPZihhY3Rpb24ubWV0YS5yZXF1ZXN0U3RhdHVzKSA+IC0xO1xyXG4gICAgcmV0dXJuIGhhc1ZhbGlkUmVxdWVzdElkICYmIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cztcclxufVxyXG5mdW5jdGlvbiBpc0FzeW5jVGh1bmtBcnJheShhKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGFbMF0gPT09IFwiZnVuY3Rpb25cIiAmJiBcInBlbmRpbmdcIiBpbiBhWzBdICYmIFwiZnVsZmlsbGVkXCIgaW4gYVswXSAmJiBcInJlamVjdGVkXCIgaW4gYVswXTtcclxufVxyXG5mdW5jdGlvbiBpc1BlbmRpbmcoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJwZW5kaW5nXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGVuZGluZygpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLnBlbmRpbmc7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNSZWplY3RlZCgpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInJlamVjdGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUmVqZWN0ZWQoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5yZWplY3RlZDsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1JlamVjdGVkV2l0aFZhbHVlKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgaGFzRmxhZyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uICYmIGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlO1xyXG4gICAgfTtcclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbGxPZihpc1JlamVjdGVkLmFwcGx5KHZvaWQgMCwgYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc1JlamVjdGVkV2l0aFZhbHVlKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbGxPZihpc1JlamVjdGVkLmFwcGx5KHZvaWQgMCwgYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVsZmlsbGVkKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wiZnVsZmlsbGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRnVsZmlsbGVkKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsuZnVsZmlsbGVkOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbigpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIiwgXCJmdWxmaWxsZWRcIiwgXCJyZWplY3RlZFwiXSk7IH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc0FzeW5jVGh1bmtBY3Rpb24oKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgYXN5bmNUaHVua3NfMSA9IGFzeW5jVGh1bmtzOyBfaSA8IGFzeW5jVGh1bmtzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhc3luY1RodW5rID0gYXN5bmNUaHVua3NfMVtfaV07XHJcbiAgICAgICAgICAgIG1hdGNoZXJzLnB1c2goYXN5bmNUaHVuay5wZW5kaW5nLCBhc3luY1RodW5rLnJlamVjdGVkLCBhc3luY1RodW5rLmZ1bGZpbGxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2luZGV4LnRzXHJcbmVuYWJsZUVTNSgpO1xyXG5leHBvcnQgeyBNaWRkbGV3YXJlQXJyYXksIGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVBY3Rpb24sIGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLCBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsIGRlZmF1bHQyIGFzIGNyZWF0ZU5leHRTdGF0ZSwgY3JlYXRlUmVkdWNlciwgY3JlYXRlU2VsZWN0b3IyIGFzIGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsIGNyZWF0ZVNsaWNlLCBjdXJyZW50MiBhcyBjdXJyZW50LCBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUsIGZyZWV6ZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUsIGdldFR5cGUsIGlzQWxsT2YsIGlzQW55T2YsIGlzQXN5bmNUaHVua0FjdGlvbiwgaXNEcmFmdDQgYXMgaXNEcmFmdCwgaXNGdWxmaWxsZWQsIGlzSW1tdXRhYmxlRGVmYXVsdCwgaXNQZW5kaW5nLCBpc1BsYWluLCBpc1BsYWluT2JqZWN0LCBpc1JlamVjdGVkLCBpc1JlamVjdGVkV2l0aFZhbHVlLCBtaW5pU2VyaWFsaXplRXJyb3IsIG5hbm9pZCwgb3JpZ2luYWwsIHVud3JhcFJlc3VsdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxyPUFycmF5KHQ+MT90LTE6MCksZT0xO2U8dDtlKyspcltlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCxyKTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyhyLmxlbmd0aD9cIiBcIityLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiB0KG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHIobil7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciB0PU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09dClyZXR1cm4hMDt2YXIgcj1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3I7cmV0dXJuIHI9PT1PYmplY3R8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwocik9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIW4uY29uc3RydWN0b3JbTF18fHMobil8fHYobikpfWZ1bmN0aW9uIGUocil7cmV0dXJuIHQocil8fG4oMjMscikscltRXS50fWZ1bmN0aW9uIGkobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byhuKT8ocj9PYmplY3Qua2V5czpubikobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ciYmXCJzeW1ib2xcIj09dHlwZW9mIGV8fHQoZSxuW2VdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24ocixlKXtyZXR1cm4gdChlLHIsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgdD1uW1FdO3JldHVybiB0P3QuaT4zP3QuaS00OnQuaTpBcnJheS5pc0FycmF5KG4pPzE6cyhuKT8yOnYobik/MzowfWZ1bmN0aW9uIHUobix0KXtyZXR1cm4gMj09PW8obik/bi5oYXModCk6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9ZnVuY3Rpb24gYShuLHQpe3JldHVybiAyPT09byhuKT9uLmdldCh0KTpuW3RdfWZ1bmN0aW9uIGYobix0LHIpe3ZhciBlPW8obik7Mj09PWU/bi5zZXQodCxyKTozPT09ZT8obi5kZWxldGUodCksbi5hZGQocikpOm5bdF09cn1mdW5jdGlvbiBjKG4sdCl7cmV0dXJuIG49PT10PzAhPT1ufHwxL249PTEvdDpuIT1uJiZ0IT10fWZ1bmN0aW9uIHMobil7cmV0dXJuIFgmJm4gaW5zdGFuY2VvZiBNYXB9ZnVuY3Rpb24gdihuKXtyZXR1cm4gcSYmbiBpbnN0YW5jZW9mIFNldH1mdW5jdGlvbiBwKG4pe3JldHVybiBuLm98fG4udH1mdW5jdGlvbiBsKG4pe2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pO3ZhciB0PXRuKG4pO2RlbGV0ZSB0W1FdO2Zvcih2YXIgcj1ubih0KSxlPTA7ZTxyLmxlbmd0aDtlKyspe3ZhciBpPXJbZV0sbz10W2ldOyExPT09by53cml0YWJsZSYmKG8ud3JpdGFibGU9ITAsby5jb25maWd1cmFibGU9ITApLChvLmdldHx8by5zZXQpJiYodFtpXT17Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6by5lbnVtZXJhYmxlLHZhbHVlOm5baV19KX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobiksdCl9ZnVuY3Rpb24gZChuLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0hMSkseShuKXx8dChuKXx8IXIobik/bjoobyhuKT4xJiYobi5zZXQ9bi5hZGQ9bi5jbGVhcj1uLmRlbGV0ZT1oKSxPYmplY3QuZnJlZXplKG4pLGUmJmkobiwoZnVuY3Rpb24obix0KXtyZXR1cm4gZCh0LCEwKX0pLCEwKSxuKX1mdW5jdGlvbiBoKCl7bigyKX1mdW5jdGlvbiB5KG4pe3JldHVybiBudWxsPT1ufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8T2JqZWN0LmlzRnJvemVuKG4pfWZ1bmN0aW9uIGIodCl7dmFyIHI9cm5bdF07cmV0dXJuIHJ8fG4oMTgsdCkscn1mdW5jdGlvbiBtKG4sdCl7cm5bbl18fChybltuXT10KX1mdW5jdGlvbiBfKCl7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8VXx8bigwKSxVfWZ1bmN0aW9uIGoobix0KXt0JiYoYihcIlBhdGNoZXNcIiksbi51PVtdLG4ucz1bXSxuLnY9dCl9ZnVuY3Rpb24gTyhuKXtnKG4pLG4ucC5mb3JFYWNoKFMpLG4ucD1udWxsfWZ1bmN0aW9uIGcobil7bj09PVUmJihVPW4ubCl9ZnVuY3Rpb24gdyhuKXtyZXR1cm4gVT17cDpbXSxsOlUsaDpuLG06ITAsXzowfX1mdW5jdGlvbiBTKG4pe3ZhciB0PW5bUV07MD09PXQuaXx8MT09PXQuaT90LmooKTp0Lk89ITB9ZnVuY3Rpb24gUCh0LGUpe2UuXz1lLnAubGVuZ3RoO3ZhciBpPWUucFswXSxvPXZvaWQgMCE9PXQmJnQhPT1pO3JldHVybiBlLmguZ3x8YihcIkVTNVwiKS5TKGUsdCxvKSxvPyhpW1FdLlAmJihPKGUpLG4oNCkpLHIodCkmJih0PU0oZSx0KSxlLmx8fHgoZSx0KSksZS51JiZiKFwiUGF0Y2hlc1wiKS5NKGlbUV0sdCxlLnUsZS5zKSk6dD1NKGUsaSxbXSksTyhlKSxlLnUmJmUudihlLnUsZS5zKSx0IT09SD90OnZvaWQgMH1mdW5jdGlvbiBNKG4sdCxyKXtpZih5KHQpKXJldHVybiB0O3ZhciBlPXRbUV07aWYoIWUpcmV0dXJuIGkodCwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUsdCxpLG8scil9KSwhMCksdDtpZihlLkEhPT1uKXJldHVybiB0O2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vO2koMz09PWUuaT9uZXcgU2V0KG8pOm8sKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIEEobixlLG8sdCxpLHIpfSkpLHgobixvLCExKSxyJiZuLnUmJmIoXCJQYXRjaGVzXCIpLlIoZSxyLG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gQShlLGksbyxhLGMscyl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSksdChjKSl7dmFyIHY9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5ELGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEsdiksIXQodikpcmV0dXJuO2UubT0hMX1pZihyKGMpJiYheShjKSl7aWYoIWUuaC5GJiZlLl88MSlyZXR1cm47TShlLGMpLGkmJmkuQS5sfHx4KGUsYyl9fWZ1bmN0aW9uIHgobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSxuLmguRiYmbi5tJiZkKHQscil9ZnVuY3Rpb24geihuLHQpe3ZhciByPW5bUV07cmV0dXJuKHI/cChyKTpuKVt0XX1mdW5jdGlvbiBJKG4sdCl7aWYodCBpbiBuKWZvcih2YXIgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7cjspe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtpZihlKXJldHVybiBlO3I9T2JqZWN0LmdldFByb3RvdHlwZU9mKHIpfX1mdW5jdGlvbiBrKG4pe24uUHx8KG4uUD0hMCxuLmwmJmsobi5sKSl9ZnVuY3Rpb24gRShuKXtuLm98fChuLm89bChuLnQpKX1mdW5jdGlvbiBSKG4sdCxyKXt2YXIgZT1zKHQpP2IoXCJNYXBTZXRcIikuTih0LHIpOnYodCk/YihcIk1hcFNldFwiKS5UKHQscik6bi5nP2Z1bmN0aW9uKG4sdCl7dmFyIHI9QXJyYXkuaXNBcnJheShuKSxlPXtpOnI/MTowLEE6dD90LkE6XygpLFA6ITEsSTohMSxEOnt9LGw6dCx0Om4sazpudWxsLG86bnVsbCxqOm51bGwsQzohMX0saT1lLG89ZW47ciYmKGk9W2VdLG89b24pO3ZhciB1PVByb3h5LnJldm9jYWJsZShpLG8pLGE9dS5yZXZva2UsZj11LnByb3h5O3JldHVybiBlLms9ZixlLmo9YSxmfSh0LHIpOmIoXCJFUzVcIikuSih0LHIpO3JldHVybihyP3IuQTpfKCkpLnAucHVzaChlKSxlfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIHQoZSl8fG4oMjIsZSksZnVuY3Rpb24gbih0KXtpZighcih0KSlyZXR1cm4gdDt2YXIgZSx1PXRbUV0sYz1vKHQpO2lmKHUpe2lmKCF1LlAmJih1Lmk8NHx8IWIoXCJFUzVcIikuSyh1KSkpcmV0dXJuIHUudDt1Lkk9ITAsZT1GKHQsYyksdS5JPSExfWVsc2UgZT1GKHQsYyk7cmV0dXJuIGkoZSwoZnVuY3Rpb24odCxyKXt1JiZhKHUudCx0KT09PXJ8fGYoZSx0LG4ocikpfSkpLDM9PT1jP25ldyBTZXQoZSk6ZX0oZSl9ZnVuY3Rpb24gRihuLHQpe3N3aXRjaCh0KXtjYXNlIDI6cmV0dXJuIG5ldyBNYXAobik7Y2FzZSAzOnJldHVybiBBcnJheS5mcm9tKG4pfXJldHVybiBsKG4pfWZ1bmN0aW9uIE4oKXtmdW5jdGlvbiByKG4sdCl7dmFyIHI9c1tuXTtyZXR1cm4gcj9yLmVudW1lcmFibGU9dDpzW25dPXI9e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOnQsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1tRXTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHQpLGVuLmdldCh0LG4pfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIHI9dGhpc1tRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHIpLGVuLnNldChyLG4sdCl9fSxyfWZ1bmN0aW9uIGUobil7Zm9yKHZhciB0PW4ubGVuZ3RoLTE7dD49MDt0LS0pe3ZhciByPW5bdF1bUV07aWYoIXIuUClzd2l0Y2goci5pKXtjYXNlIDU6YShyKSYmayhyKTticmVhaztjYXNlIDQ6byhyKSYmayhyKX19fWZ1bmN0aW9uIG8obil7Zm9yKHZhciB0PW4udCxyPW4uayxlPW5uKHIpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9dFtvXTtpZih2b2lkIDA9PT1hJiYhdSh0LG8pKXJldHVybiEwO3ZhciBmPXJbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXRbUV07cmV0dXJuIGUubGVuZ3RoIT09bm4odCkubGVuZ3RoKyh2PzA6MSl9ZnVuY3Rpb24gYShuKXt2YXIgdD1uLms7aWYodC5sZW5ndGghPT1uLnQubGVuZ3RoKXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCx0Lmxlbmd0aC0xKTtyZXR1cm4hKCFyfHxyLmdldCl9ZnVuY3Rpb24gZih0KXt0Lk8mJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIHM9e307bShcIkVTNVwiLHtKOmZ1bmN0aW9uKG4sdCl7dmFyIGU9QXJyYXkuaXNBcnJheShuKSxpPWZ1bmN0aW9uKG4sdCl7aWYobil7Zm9yKHZhciBlPUFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJcIitpLHIoaSwhMCkpO3JldHVybiBlfXZhciBvPXRuKHQpO2RlbGV0ZSBvW1FdO2Zvcih2YXIgdT1ubihvKSxhPTA7YTx1Lmxlbmd0aDthKyspe3ZhciBmPXVbYV07b1tmXT1yKGYsbnx8ISFvW2ZdLmVudW1lcmFibGUpfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSxvKX0oZSxuKSxvPXtpOmU/NTo0LEE6dD90LkE6XygpLFA6ITEsSTohMSxEOnt9LGw6dCx0Om4sazppLG86bnVsbCxPOiExLEM6ITF9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxRLHt2YWx1ZTpvLHdyaXRhYmxlOiEwfSksaX0sUzpmdW5jdGlvbihuLHIsbyl7bz90KHIpJiZyW1FdLkE9PT1uJiZlKG4ucCk6KG4udSYmZnVuY3Rpb24gbih0KXtpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIHI9dFtRXTtpZihyKXt2YXIgZT1yLnQsbz1yLmssZj1yLkQsYz1yLmk7aWYoND09PWMpaShvLChmdW5jdGlvbih0KXt0IT09USYmKHZvaWQgMCE9PWVbdF18fHUoZSx0KT9mW3RdfHxuKG9bdF0pOihmW3RdPSEwLGsocikpKX0pKSxpKGUsKGZ1bmN0aW9uKG4pe3ZvaWQgMCE9PW9bbl18fHUobyxuKXx8KGZbbl09ITEsayhyKSl9KSk7ZWxzZSBpZig1PT09Yyl7aWYoYShyKSYmKGsociksZi5sZW5ndGg9ITApLG8ubGVuZ3RoPGUubGVuZ3RoKWZvcih2YXIgcz1vLmxlbmd0aDtzPGUubGVuZ3RoO3MrKylmW3NdPSExO2Vsc2UgZm9yKHZhciB2PWUubGVuZ3RoO3Y8by5sZW5ndGg7disrKWZbdl09ITA7Zm9yKHZhciBwPU1hdGgubWluKG8ubGVuZ3RoLGUubGVuZ3RoKSxsPTA7bDxwO2wrKyl2b2lkIDA9PT1mW2xdJiZuKG9bbF0pfX19fShuLnBbMF0pLGUobi5wKSl9LEs6ZnVuY3Rpb24obil7cmV0dXJuIDQ9PT1uLmk/byhuKTphKG4pfX0pfWZ1bmN0aW9uIFQoKXtmdW5jdGlvbiBlKG4pe2lmKCFyKG4pKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKGUpO2lmKHMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxlKG5bMV0pXX0pKSk7aWYodihuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChlKSk7dmFyIHQ9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgaSBpbiBuKXRbaV09ZShuW2ldKTtyZXR1cm4gdShuLEwpJiYodFtMXT1uW0xdKSx0fWZ1bmN0aW9uIGYobil7cmV0dXJuIHQobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbih0LHIpe3JldHVybiByLmZvckVhY2goKGZ1bmN0aW9uKHIpe2Zvcih2YXIgaT1yLnBhdGgsdT1yLm9wLGY9dCxzPTA7czxpLmxlbmd0aC0xO3MrKyl7dmFyIHY9byhmKSxwPVwiXCIraVtzXTswIT09diYmMSE9PXZ8fFwiX19wcm90b19fXCIhPT1wJiZcImNvbnN0cnVjdG9yXCIhPT1wfHxuKDI0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiZcInByb3RvdHlwZVwiPT09cCYmbigyNCksXCJvYmplY3RcIiE9dHlwZW9mKGY9YShmLHApKSYmbigxNSxpLmpvaW4oXCIvXCIpKX12YXIgbD1vKGYpLGQ9ZShyLnZhbHVlKSxoPWlbaS5sZW5ndGgtMV07c3dpdGNoKHUpe2Nhc2VcInJlcGxhY2VcIjpzd2l0Y2gobCl7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzpuKDE2KTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZSBjOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMCxkKTtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOnJldHVybiBmLmFkZChkKTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwxKTtjYXNlIDI6cmV0dXJuIGYuZGVsZXRlKGgpO2Nhc2UgMzpyZXR1cm4gZi5kZWxldGUoci52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGZbaF19ZGVmYXVsdDpuKDE3LHUpfX0pKSx0fSxSOmZ1bmN0aW9uKG4sdCxyLGUpe3N3aXRjaChuLmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgbz1uLnQscz1uLm87aShuLkQsKGZ1bmN0aW9uKG4saSl7dmFyIHY9YShvLG4pLHA9YShzLG4pLGw9aT91KG8sbik/XCJyZXBsYWNlXCI6YzpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWwpe3ZhciBkPXQuY29uY2F0KG4pO3IucHVzaChcInJlbW92ZVwiPT09bD97b3A6bCxwYXRoOmR9OntvcDpsLHBhdGg6ZCx2YWx1ZTpwfSksZS5wdXNoKGw9PT1jP3tvcDpcInJlbW92ZVwiLHBhdGg6ZH06XCJyZW1vdmVcIj09PWw/e29wOmMscGF0aDpkLHZhbHVlOmYodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmQsdmFsdWU6Zih2KX0pfX0pKX0obix0LHIsZSk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIGk9bi50LG89bi5ELHU9bi5vO2lmKHUubGVuZ3RoPGkubGVuZ3RoKXt2YXIgYT1bdSxpXTtpPWFbMF0sdT1hWzFdO3ZhciBzPVtlLHJdO3I9c1swXSxlPXNbMV19Zm9yKHZhciB2PTA7djxpLmxlbmd0aDt2KyspaWYob1t2XSYmdVt2XSE9PWlbdl0pe3ZhciBwPXQuY29uY2F0KFt2XSk7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6Zih1W3ZdKX0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYoaVt2XSl9KX1mb3IodmFyIGw9aS5sZW5ndGg7bDx1Lmxlbmd0aDtsKyspe3ZhciBkPXQuY29uY2F0KFtsXSk7ci5wdXNoKHtvcDpjLHBhdGg6ZCx2YWx1ZTpmKHVbbF0pfSl9aS5sZW5ndGg8dS5sZW5ndGgmJmUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDp0LmNvbmNhdChbXCJsZW5ndGhcIl0pLHZhbHVlOmkubGVuZ3RofSl9KG4sdCxyLGUpO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIGk9bi50LG89bi5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFvLmhhcyhuKSl7dmFyIGk9dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOmMscGF0aDppLHZhbHVlOm59KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIWkuaGFzKG4pKXt2YXIgbz10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6YyxwYXRoOm8sdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6bn0pfXUrK30pKX0obix0LHIsZSl9fSxNOmZ1bmN0aW9uKG4sdCxyLGUpe3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTp0PT09SD92b2lkIDA6dH0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gdChuLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHQpLG4ucHJvdG90eXBlPShyLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbih0KXtpZihyKHQpKXt2YXIgZT1SKG4uQS5oLHQsbik7bi5wLnNldCh0LGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHQpfSkpKX1mdW5jdGlvbiB1KHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgYT1mdW5jdGlvbihuLHQpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHQpe24uX19wcm90b19fPXR9fHxmdW5jdGlvbihuLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuW3JdPXRbcl0pfSkobix0KX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aToyLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLE86ITF9LHRoaXN9dChuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHAocikuaGFzKG4pJiZwKHIpLmdldChuKT09PXR8fChlKHIpLGsociksci5ELnNldChuLCEwKSxyLm8uc2V0KG4sdCksci5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksZSh0KSxrKHQpLHQuRC5zZXQobiwhMSksdC5vLmRlbGV0ZShuKSwhMH0sby5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihlKG4pLGsobiksbi5EPW5ldyBNYXAsaShuLnQsKGZ1bmN0aW9uKHQpe24uRC5zZXQodCwhMSl9KSksbi5vLmNsZWFyKCkpfSxvLmZvckVhY2g9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzO3AodGhpc1tRXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtuLmNhbGwodCxyLmdldChpKSxpLHIpfSkpfSxvLmdldD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3UodCk7dmFyIGk9cCh0KS5nZXQobik7aWYodC5JfHwhcihpKSlyZXR1cm4gaTtpZihpIT09dC50LmdldChuKSlyZXR1cm4gaTt2YXIgbz1SKHQuQS5oLGksdCk7cmV0dXJuIGUodCksdC5vLnNldChuLG8pLG99LG8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLmtleXMoKX0sby52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC52YWx1ZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7cmV0dXJuIG4uZG9uZT9uOntkb25lOiExLHZhbHVlOnQuZ2V0KG4udmFsdWUpfX0sbn0sby5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQuZW50cmllcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtpZihuLmRvbmUpcmV0dXJuIG47dmFyIGU9dC5nZXQobi52YWx1ZSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6W24udmFsdWUsZV19fSxufSxvW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxufSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MyxsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLHQ6bixrOnRoaXMscDpuZXcgTWFwLE86ITEsQzohMX0sdGhpc310KG4sU2V0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksci5oYXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0Lm8/ISF0Lm8uaGFzKG4pfHwhKCF0LnAuaGFzKG4pfHwhdC5vLmhhcyh0LnAuZ2V0KG4pKSk6dC50LmhhcyhuKX0sci5hZGQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0aGlzLmhhcyhuKXx8KG8odCksayh0KSx0Lm8uYWRkKG4pKSx0aGlzfSxyLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxvKHQpLGsodCksdC5vLmRlbGV0ZShuKXx8ISF0LnAuaGFzKG4pJiZ0Lm8uZGVsZXRlKHQucC5nZXQobikpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKG8obiksayhuKSxuLm8uY2xlYXIoKSl9LHIudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby52YWx1ZXMoKX0sci5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby5lbnRyaWVzKCl9LHIua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHIuZm9yRWFjaD1mdW5jdGlvbihuLHQpe2Zvcih2YXIgcj10aGlzLnZhbHVlcygpLGU9ci5uZXh0KCk7IWUuZG9uZTspbi5jYWxsKHQsZS52YWx1ZSxlLnZhbHVlLHRoaXMpLGU9ci5uZXh0KCl9LG59KCk7bShcIk1hcFNldFwiLHtOOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBmKG4sdCl9LFQ6ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGMobix0KX19KX1mdW5jdGlvbiBKKCl7TigpLEMoKSxUKCl9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gbn1mdW5jdGlvbiAkKG4pe3JldHVybiBufXZhciBHLFUsVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKFwieFwiKSxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAscT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0LEI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb3h5JiZ2b2lkIDAhPT1Qcm94eS5yZXZvY2FibGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0LEg9Vz9TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTooKEc9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxHKSxMPVc/U3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLFE9Vz9TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik6XCJfXyRpbW1lcl9zdGF0ZVwiLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIixZPXswOlwiSWxsZWdhbCBzdGF0ZVwiLDE6XCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLDI6XCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLDM6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiK259LDQ6XCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLDU6XCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIiw2OlwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsNzpcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLDg6XCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsOTpcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIiwxMDpcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLDExOlwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMjpcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTM6XCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIiwxNDpcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIiwxNTpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiK259LDE2OidTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJywxNzpmdW5jdGlvbihuKXtyZXR1cm5cIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIrbn0sMTg6ZnVuY3Rpb24obil7cmV0dXJuXCJUaGUgcGx1Z2luIGZvciAnXCIrbitcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIituK1wiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCJ9LDIwOlwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLDIxOmZ1bmN0aW9uKG4pe3JldHVyblwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIrbitcIidcIn0sMjI6ZnVuY3Rpb24obil7cmV0dXJuXCInY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDIzOmZ1bmN0aW9uKG4pe3JldHVyblwiJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjQ6XCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJ9LFo9XCJcIitPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLG5uPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0Lm93bktleXM/UmVmbGVjdC5vd25LZXlzOnZvaWQgMCE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pKX06T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsdG49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnN8fGZ1bmN0aW9uKG4pe3ZhciB0PXt9O3JldHVybiBubihuKS5mb3JFYWNoKChmdW5jdGlvbihyKXt0W3JdPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixyKX0pKSx0fSxybj17fSxlbj17Z2V0OmZ1bmN0aW9uKG4sdCl7aWYodD09PVEpcmV0dXJuIG47dmFyIGU9cChuKTtpZighdShlLHQpKXJldHVybiBmdW5jdGlvbihuLHQscil7dmFyIGUsaT1JKHQscik7cmV0dXJuIGk/XCJ2YWx1ZVwiaW4gaT9pLnZhbHVlOm51bGw9PT0oZT1pLmdldCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY2FsbChuLmspOnZvaWQgMH0obixlLHQpO3ZhciBpPWVbdF07cmV0dXJuIG4uSXx8IXIoaSk/aTppPT09eihuLnQsdCk/KEUobiksbi5vW3RdPVIobi5BLmgsaSxuKSk6aX0saGFzOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQgaW4gcChuKX0sb3duS2V5czpmdW5jdGlvbihuKXtyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHAobikpfSxzZXQ6ZnVuY3Rpb24obix0LHIpe3ZhciBlPUkocChuKSx0KTtpZihudWxsPT1lP3ZvaWQgMDplLnNldClyZXR1cm4gZS5zZXQuY2FsbChuLmssciksITA7aWYoIW4uUCl7dmFyIGk9eihwKG4pLHQpLG89bnVsbD09aT92b2lkIDA6aVtRXTtpZihvJiZvLnQ9PT1yKXJldHVybiBuLm9bdF09cixuLkRbdF09ITEsITA7aWYoYyhyLGkpJiYodm9pZCAwIT09cnx8dShuLnQsdCkpKXJldHVybiEwO0UobiksayhuKX1yZXR1cm4gbi5vW3RdPT09ciYmXCJudW1iZXJcIiE9dHlwZW9mIHImJih2b2lkIDAhPT1yfHx0IGluIG4ubyl8fChuLm9bdF09cixuLkRbdF09ITAsITApfSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbihuLHQpe3JldHVybiB2b2lkIDAhPT16KG4udCx0KXx8dCBpbiBuLnQ/KG4uRFt0XT0hMSxFKG4pLGsobikpOmRlbGV0ZSBuLkRbdF0sbi5vJiZkZWxldGUgbi5vW3RdLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24obix0KXt2YXIgcj1wKG4pLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtyZXR1cm4gZT97d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOjEhPT1uLml8fFwibGVuZ3RoXCIhPT10LGVudW1lcmFibGU6ZS5lbnVtZXJhYmxlLHZhbHVlOnJbdF19OmV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7bigxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXtuKDEyKX19LG9uPXt9O2koZW4sKGZ1bmN0aW9uKG4sdCl7b25bbl09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksb24uZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24odCxyKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludChyKSkmJm4oMTMpLGVuLmRlbGV0ZVByb3BlcnR5LmNhbGwodGhpcyx0WzBdLHIpfSxvbi5zZXQ9ZnVuY3Rpb24odCxyLGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT1yJiZpc05hTihwYXJzZUludChyKSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsdFswXSxyLGUsdFswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGU9dGhpczt0aGlzLmc9Qix0aGlzLkY9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHQsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9dDt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgdD10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHI7cmV0dXJuKHI9aSkuY2FsbC5hcHBseShyLFt0LG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSxyKHQpKXt2YXIgYz13KGUpLHM9UihlLHQsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/TyhjKTpnKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IE8oYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXtpZigoZj1pKHQpKT09PUgpcmV0dXJuO3JldHVybiB2b2lkIDA9PT1mJiYoZj10KSxlLkYmJmQoZiwhMCksZn1uKDIxLHQpfSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbihuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/ZnVuY3Rpb24odCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWlbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGUucHJvZHVjZVdpdGhQYXRjaGVzKHQsKGZ1bmN0aW9uKHQpe3JldHVybiBuLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KGkpKX0pKX06W2UucHJvZHVjZShuLHQsKGZ1bmN0aW9uKG4sdCl7cj1uLGk9dH0pKSxyLGldO3ZhciByLGl9LFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dC51c2VQcm94aWVzKSYmdGhpcy5zZXRVc2VQcm94aWVzKHQudXNlUHJveGllcyksXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0LmF1dG9GcmVlemUpJiZ0aGlzLnNldEF1dG9GcmVlemUodC5hdXRvRnJlZXplKX12YXIgaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5jcmVhdGVEcmFmdD1mdW5jdGlvbihlKXtyKGUpfHxuKDgpLHQoZSkmJihlPUQoZSkpO3ZhciBpPXcodGhpcyksbz1SKHRoaXMsZSx2b2lkIDApO3JldHVybiBvW1FdLkM9ITAsZyhpKSxvfSxpLmZpbmlzaERyYWZ0PWZ1bmN0aW9uKHQscil7dmFyIGU9dCYmdFtRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoZSYmZS5DfHxuKDkpLGUuSSYmbigxMCkpO3ZhciBpPWUuQTtyZXR1cm4gaihpLHIpLFAodm9pZCAwLGkpfSxpLnNldEF1dG9GcmVlemU9ZnVuY3Rpb24obil7dGhpcy5GPW59LGkuc2V0VXNlUHJveGllcz1mdW5jdGlvbih0KXt0JiYhQiYmbigyMCksdGhpcy5nPXR9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4scil7dmFyIGU7Zm9yKGU9ci5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9cltlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHQobik/byhuLHIpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHIuc2xpY2UoZSsxKSl9KSl9LGV9KCksYW49bmV3IHVuLGZuPWFuLnByb2R1Y2UsY249YW4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoYW4pLHNuPWFuLnNldEF1dG9GcmVlemUuYmluZChhbiksdm49YW4uc2V0VXNlUHJveGllcy5iaW5kKGFuKSxwbj1hbi5hcHBseVBhdGNoZXMuYmluZChhbiksbG49YW4uY3JlYXRlRHJhZnQuYmluZChhbiksZG49YW4uZmluaXNoRHJhZnQuYmluZChhbik7ZXhwb3J0IGRlZmF1bHQgZm47ZXhwb3J0e3VuIGFzIEltbWVyLHBuIGFzIGFwcGx5UGF0Y2hlcyxLIGFzIGNhc3REcmFmdCwkIGFzIGNhc3RJbW11dGFibGUsbG4gYXMgY3JlYXRlRHJhZnQsRCBhcyBjdXJyZW50LEogYXMgZW5hYmxlQWxsUGx1Z2lucyxOIGFzIGVuYWJsZUVTNSxDIGFzIGVuYWJsZU1hcFNldCxUIGFzIGVuYWJsZVBhdGNoZXMsZG4gYXMgZmluaXNoRHJhZnQsZCBhcyBmcmVlemUsTCBhcyBpbW1lcmFibGUsdCBhcyBpc0RyYWZ0LHIgYXMgaXNEcmFmdGFibGUsSCBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwsZm4gYXMgcHJvZHVjZSxjbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsc24gYXMgc2V0QXV0b0ZyZWV6ZSx2biBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgcHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogY3JlYXRlU2VsZWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9