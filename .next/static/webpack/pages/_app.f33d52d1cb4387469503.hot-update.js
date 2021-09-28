"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dmuraco_javascript_projects_next_shopping_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _stores_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/configureStore */ "./stores/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/dmuraco/javascript_projects/next-shopping/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_dmuraco_javascript_projects_next_shopping_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _stores_configureStore__WEBPACK_IMPORTED_MODULE_5__.store,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(persistedReducer);
  var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);
  return {
    store: store,
    persistStore: redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore
  };
});

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

/***/ "./node_modules/redux-persist/es/integration/react.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-persist/es/integration/react.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistGate": function() { return /* binding */ PersistGate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-line import/no-unresolved

var PersistGate =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PersistGate, _PureComponent);

  function PersistGate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PersistGate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PersistGate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      bootstrapped: false
    });

    _defineProperty(_assertThisInitialized(_this), "_unsubscribe", void 0);

    _defineProperty(_assertThisInitialized(_this), "handlePersistorState", function () {
      var persistor = _this.props.persistor;

      var _persistor$getState = persistor.getState(),
          bootstrapped = _persistor$getState.bootstrapped;

      if (bootstrapped) {
        if (_this.props.onBeforeLift) {
          Promise.resolve(_this.props.onBeforeLift()).finally(function () {
            return _this.setState({
              bootstrapped: true
            });
          });
        } else {
          _this.setState({
            bootstrapped: true
          });
        }

        _this._unsubscribe && _this._unsubscribe();
      }
    });

    return _this;
  }

  _createClass(PersistGate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
      this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        if (typeof this.props.children === 'function' && this.props.loading) console.error('redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored.');
      }

      if (typeof this.props.children === 'function') {
        return this.props.children(this.state.bootstrapped);
      }

      return this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]);

  return PersistGate;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

_defineProperty(PersistGate, "defaultProps", {
  children: null,
  loading: null
});

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMzNkNTJkMWNiNDM4NzQ2OTUwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNLLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFSix5REFBakI7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlSSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztLQVBRRjtBQVNULCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTVEsYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxHQUFHLEVBQUUsTUFEYTtBQUVsQkgsRUFBQUEsT0FBTyxFQUFQQSw4REFBT0E7QUFGVyxDQUF0QjtBQUtBLElBQU1JLGdCQUFnQixHQUFHTCw2REFBYyxDQUFDRyxhQUFELEVBQWdCRCwwREFBaEIsQ0FBdkM7QUFFQSwrREFBZSxZQUFNO0FBQ2pCLE1BQUlULEtBQUssR0FBR0ssa0RBQVcsQ0FBQ08sZ0JBQUQsQ0FBdkI7QUFDQSxNQUFJWCxTQUFTLEdBQUdLLDJEQUFZLENBQUNOLEtBQUQsQ0FBNUI7QUFDQSxTQUFPO0FBQUNBLElBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRTSxJQUFBQSxZQUFZLEVBQVpBLHVEQUFZQTtBQUFwQixHQUFQO0FBQ0gsQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBd0IsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUV6VTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQ2E7O0FBRWIsa0JBQWtCO0FBQ2xCLGVBQWU7O0FBRWYsK0NBQStDLG1CQUFPLENBQUMsd0ZBQW9COztBQUUzRSx1Q0FBdUMsdUNBQXVDOztBQUU5RTs7QUFFQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3Jlcy9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9jcmVhdGVNaWdyYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9jcmVhdGVQZXJzaXN0b2lkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9jcmVhdGVUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL2dldFN0b3JlZFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXBlcnNpc3QvZXMvaW50ZWdyYXRpb24vcmVhY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3BlcnNpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtcGVyc2lzdC9lcy9wZXJzaXN0U3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3B1cmdlU3RvcmVkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2VzL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2NyZWF0ZVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcblxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXG5cbmltcG9ydCB7c3RvcmUsIHBlcnNpc3RvciB9IGZyb20gJy4uL3N0b3Jlcy9jb25maWd1cmVTdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xuaW1wb3J0IGNvdW50ZXJTbGljZSBmcm9tIFwiLi9jb3VudGVyL2NvdW50ZXJTbGljZVwiO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3Jvb3QnLFxuICAgIHN0b3JhZ2Vcbn1cblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvdW50ZXJTbGljZSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIpXG4gICAgbGV0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcbiAgICByZXR1cm4ge3N0b3JlLCBwZXJzaXN0U3RvcmV9XG59IiwiZXhwb3J0IHZhciBLRVlfUFJFRklYID0gJ3BlcnNpc3Q6JztcbmV4cG9ydCB2YXIgRkxVU0ggPSAncGVyc2lzdC9GTFVTSCc7XG5leHBvcnQgdmFyIFJFSFlEUkFURSA9ICdwZXJzaXN0L1JFSFlEUkFURSc7XG5leHBvcnQgdmFyIFBBVVNFID0gJ3BlcnNpc3QvUEFVU0UnO1xuZXhwb3J0IHZhciBQRVJTSVNUID0gJ3BlcnNpc3QvUEVSU0lTVCc7XG5leHBvcnQgdmFyIFBVUkdFID0gJ3BlcnNpc3QvUFVSR0UnO1xuZXhwb3J0IHZhciBSRUdJU1RFUiA9ICdwZXJzaXN0L1JFR0lTVEVSJztcbmV4cG9ydCB2YXIgREVGQVVMVF9WRVJTSU9OID0gLTE7IiwiaW1wb3J0IHsgREVGQVVMVF9WRVJTSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWlncmF0ZShtaWdyYXRpb25zLCBjb25maWcpIHtcbiAgdmFyIF9yZWYgPSBjb25maWcgfHwge30sXG4gICAgICBkZWJ1ZyA9IF9yZWYuZGVidWc7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgY3VycmVudFZlcnNpb24pIHtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IG5vIGluYm91bmQgc3RhdGUsIHNraXBwaW5nIG1pZ3JhdGlvbicpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHZhciBpbmJvdW5kVmVyc2lvbiA9IHN0YXRlLl9wZXJzaXN0ICYmIHN0YXRlLl9wZXJzaXN0LnZlcnNpb24gIT09IHVuZGVmaW5lZCA/IHN0YXRlLl9wZXJzaXN0LnZlcnNpb24gOiBERUZBVUxUX1ZFUlNJT047XG5cbiAgICBpZiAoaW5ib3VuZFZlcnNpb24gPT09IGN1cnJlbnRWZXJzaW9uKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IHZlcnNpb25zIG1hdGNoLCBub29wIG1pZ3JhdGlvbicpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGluYm91bmRWZXJzaW9uID4gY3VycmVudFZlcnNpb24pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBjb25zb2xlLmVycm9yKCdyZWR1eC1wZXJzaXN0OiBkb3duZ3JhZGluZyB2ZXJzaW9uIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgIH1cblxuICAgIHZhciBtaWdyYXRpb25LZXlzID0gT2JqZWN0LmtleXMobWlncmF0aW9ucykubWFwKGZ1bmN0aW9uICh2ZXIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2ZXIpO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3VycmVudFZlcnNpb24gPj0ga2V5ICYmIGtleSA+IGluYm91bmRWZXJzaW9uO1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IG1pZ3JhdGlvbktleXMnLCBtaWdyYXRpb25LZXlzKTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgbWlncmF0ZWRTdGF0ZSA9IG1pZ3JhdGlvbktleXMucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwgdmVyc2lvbktleSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkZWJ1ZykgY29uc29sZS5sb2coJ3JlZHV4LXBlcnNpc3Q6IHJ1bm5pbmcgbWlncmF0aW9uIGZvciB2ZXJzaW9uS2V5JywgdmVyc2lvbktleSk7XG4gICAgICAgIHJldHVybiBtaWdyYXRpb25zW3ZlcnNpb25LZXldKHN0YXRlKTtcbiAgICAgIH0sIHN0YXRlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlncmF0ZWRTdGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IHsgS0VZX1BSRUZJWCwgUkVIWURSQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gQFRPRE8gcmVtb3ZlIG9uY2UgZmxvdyA8IDAuNjMgc3VwcG9ydCBpcyBubyBsb25nZXIgcmVxdWlyZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQZXJzaXN0b2lkKGNvbmZpZykge1xuICAvLyBkZWZhdWx0c1xuICB2YXIgYmxhY2tsaXN0ID0gY29uZmlnLmJsYWNrbGlzdCB8fCBudWxsO1xuICB2YXIgd2hpdGVsaXN0ID0gY29uZmlnLndoaXRlbGlzdCB8fCBudWxsO1xuICB2YXIgdHJhbnNmb3JtcyA9IGNvbmZpZy50cmFuc2Zvcm1zIHx8IFtdO1xuICB2YXIgdGhyb3R0bGUgPSBjb25maWcudGhyb3R0bGUgfHwgMDtcbiAgdmFyIHN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWcua2V5UHJlZml4ICE9PSB1bmRlZmluZWQgPyBjb25maWcua2V5UHJlZml4IDogS0VZX1BSRUZJWCkuY29uY2F0KGNvbmZpZy5rZXkpO1xuICB2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuICB2YXIgc2VyaWFsaXplO1xuXG4gIGlmIChjb25maWcuc2VyaWFsaXplID09PSBmYWxzZSkge1xuICAgIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcuc2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VyaWFsaXplID0gY29uZmlnLnNlcmlhbGl6ZTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemUgPSBkZWZhdWx0U2VyaWFsaXplO1xuICB9XG5cbiAgdmFyIHdyaXRlRmFpbEhhbmRsZXIgPSBjb25maWcud3JpdGVGYWlsSGFuZGxlciB8fCBudWxsOyAvLyBpbml0aWFsaXplIHN0YXRlZnVsIHZhbHVlc1xuXG4gIHZhciBsYXN0U3RhdGUgPSB7fTtcbiAgdmFyIHN0YWdlZFN0YXRlID0ge307XG4gIHZhciBrZXlzVG9Qcm9jZXNzID0gW107XG4gIHZhciB0aW1lSXRlcmF0b3IgPSBudWxsO1xuICB2YXIgd3JpdGVQcm9taXNlID0gbnVsbDtcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gICAgLy8gYWRkIGFueSBjaGFuZ2VkIGtleXMgdG8gdGhlIHF1ZXVlXG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCFwYXNzV2hpdGVsaXN0QmxhY2tsaXN0KGtleSkpIHJldHVybjsgLy8gaXMga2V5c3BhY2UgaWdub3JlZD8gbm9vcFxuXG4gICAgICBpZiAobGFzdFN0YXRlW2tleV0gPT09IHN0YXRlW2tleV0pIHJldHVybjsgLy8gdmFsdWUgdW5jaGFuZ2VkPyBub29wXG5cbiAgICAgIGlmIChrZXlzVG9Qcm9jZXNzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHJldHVybjsgLy8gaXMga2V5IGFscmVhZHkgcXVldWVkPyBub29wXG5cbiAgICAgIGtleXNUb1Byb2Nlc3MucHVzaChrZXkpOyAvLyBhZGQga2V5IHRvIHF1ZXVlXG4gICAgfSk7IC8vaWYgYW55IGtleSBpcyBtaXNzaW5nIGluIHRoZSBuZXcgc3RhdGUgd2hpY2ggd2FzIHByZXNlbnQgaW4gdGhlIGxhc3RTdGF0ZSxcbiAgICAvL2FkZCBpdCBmb3IgcHJvY2Vzc2luZyB0b29cblxuICAgIE9iamVjdC5rZXlzKGxhc3RTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoc3RhdGVba2V5XSA9PT0gdW5kZWZpbmVkICYmIHBhc3NXaGl0ZWxpc3RCbGFja2xpc3Qoa2V5KSAmJiBrZXlzVG9Qcm9jZXNzLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYgbGFzdFN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlzVG9Qcm9jZXNzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTsgLy8gc3RhcnQgdGhlIHRpbWUgaXRlcmF0b3IgaWYgbm90IHJ1bm5pbmcgKHJlYWQ6IHRocm90dGxlKVxuXG4gICAgaWYgKHRpbWVJdGVyYXRvciA9PT0gbnVsbCkge1xuICAgICAgdGltZUl0ZXJhdG9yID0gc2V0SW50ZXJ2YWwocHJvY2Vzc05leHRLZXksIHRocm90dGxlKTtcbiAgICB9XG5cbiAgICBsYXN0U3RhdGUgPSBzdGF0ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBwcm9jZXNzTmV4dEtleSgpIHtcbiAgICBpZiAoa2V5c1RvUHJvY2Vzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aW1lSXRlcmF0b3IpIGNsZWFySW50ZXJ2YWwodGltZUl0ZXJhdG9yKTtcbiAgICAgIHRpbWVJdGVyYXRvciA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGtleXNUb1Byb2Nlc3Muc2hpZnQoKTtcbiAgICB2YXIgZW5kU3RhdGUgPSB0cmFuc2Zvcm1zLnJlZHVjZShmdW5jdGlvbiAoc3ViU3RhdGUsIHRyYW5zZm9ybWVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZXIuaW4oc3ViU3RhdGUsIGtleSwgbGFzdFN0YXRlKTtcbiAgICB9LCBsYXN0U3RhdGVba2V5XSk7XG5cbiAgICBpZiAoZW5kU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhZ2VkU3RhdGVba2V5XSA9IHNlcmlhbGl6ZShlbmRTdGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigncmVkdXgtcGVyc2lzdC9jcmVhdGVQZXJzaXN0b2lkOiBlcnJvciBzZXJpYWxpemluZyBzdGF0ZScsIGVycik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vaWYgdGhlIGVuZFN0YXRlIGlzIHVuZGVmaW5lZCwgbm8gbmVlZCB0byBwZXJzaXN0IHRoZSBleGlzdGluZyBzZXJpYWxpemVkIGNvbnRlbnRcbiAgICAgIGRlbGV0ZSBzdGFnZWRTdGF0ZVtrZXldO1xuICAgIH1cblxuICAgIGlmIChrZXlzVG9Qcm9jZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd3JpdGVTdGFnZWRTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlU3RhZ2VkU3RhdGUoKSB7XG4gICAgLy8gY2xlYW51cCBhbnkgcmVtb3ZlZCBrZXlzIGp1c3QgYmVmb3JlIHdyaXRlLlxuICAgIE9iamVjdC5rZXlzKHN0YWdlZFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChsYXN0U3RhdGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSBzdGFnZWRTdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdyaXRlUHJvbWlzZSA9IHN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBzZXJpYWxpemUoc3RhZ2VkU3RhdGUpKS5jYXRjaChvbldyaXRlRmFpbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXNzV2hpdGVsaXN0QmxhY2tsaXN0KGtleSkge1xuICAgIGlmICh3aGl0ZWxpc3QgJiYgd2hpdGVsaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYga2V5ICE9PSAnX3BlcnNpc3QnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGJsYWNrbGlzdCAmJiBibGFja2xpc3QuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Xcml0ZUZhaWwoZXJyKSB7XG4gICAgLy8gQFRPRE8gYWRkIGZhaWwgaGFuZGxlcnMgKHR5cGljYWxseSBzdG9yYWdlIGZ1bGwpXG4gICAgaWYgKHdyaXRlRmFpbEhhbmRsZXIpIHdyaXRlRmFpbEhhbmRsZXIoZXJyKTtcblxuICAgIGlmIChlcnIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3RvcmluZyBkYXRhJywgZXJyKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoa2V5c1RvUHJvY2Vzcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHByb2Nlc3NOZXh0S2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTsgLy8gcmV0dXJuIGBwZXJzaXN0b2lkYFxuXG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn0gLy8gQE5PVEUgaW4gdGhlIGZ1dHVyZSB0aGlzIG1heSBiZSBleHBvc2VkIHZpYSBjb25maWdcblxuZnVuY3Rpb24gZGVmYXVsdFNlcmlhbGl6ZShkYXRhKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUcmFuc2Zvcm0oIC8vIEBOT1RFIGluYm91bmQ6IHRyYW5zZm9ybSBzdGF0ZSBjb21pbmcgZnJvbSByZWR1eCBvbiBpdHMgd2F5IHRvIGJlaW5nIHNlcmlhbGl6ZWQgYW5kIHN0b3JlZFxuaW5ib3VuZCwgLy8gQE5PVEUgb3V0Ym91bmQ6IHRyYW5zZm9ybSBzdGF0ZSBjb21pbmcgZnJvbSBzdG9yYWdlLCBvbiBpdHMgd2F5IHRvIGJlIHJlaHlkcmF0ZWQgaW50byByZWR1eFxub3V0Ym91bmQpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciB3aGl0ZWxpc3QgPSBjb25maWcud2hpdGVsaXN0IHx8IG51bGw7XG4gIHZhciBibGFja2xpc3QgPSBjb25maWcuYmxhY2tsaXN0IHx8IG51bGw7XG5cbiAgZnVuY3Rpb24gd2hpdGVsaXN0QmxhY2tsaXN0Q2hlY2soa2V5KSB7XG4gICAgaWYgKHdoaXRlbGlzdCAmJiB3aGl0ZWxpc3QuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGJsYWNrbGlzdCAmJiBibGFja2xpc3QuaW5kZXhPZihrZXkpICE9PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbjogZnVuY3Rpb24gX2luKHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkge1xuICAgICAgcmV0dXJuICF3aGl0ZWxpc3RCbGFja2xpc3RDaGVjayhrZXkpICYmIGluYm91bmQgPyBpbmJvdW5kKHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkgOiBzdGF0ZTtcbiAgICB9LFxuICAgIG91dDogZnVuY3Rpb24gb3V0KHN0YXRlLCBrZXksIGZ1bGxTdGF0ZSkge1xuICAgICAgcmV0dXJuICF3aGl0ZWxpc3RCbGFja2xpc3RDaGVjayhrZXkpICYmIG91dGJvdW5kID8gb3V0Ym91bmQoc3RhdGUsIGtleSwgZnVsbFN0YXRlKSA6IHN0YXRlO1xuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgeyBLRVlfUFJFRklYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3RvcmVkU3RhdGUoY29uZmlnKSB7XG4gIHZhciB0cmFuc2Zvcm1zID0gY29uZmlnLnRyYW5zZm9ybXMgfHwgW107XG4gIHZhciBzdG9yYWdlS2V5ID0gXCJcIi5jb25jYXQoY29uZmlnLmtleVByZWZpeCAhPT0gdW5kZWZpbmVkID8gY29uZmlnLmtleVByZWZpeCA6IEtFWV9QUkVGSVgpLmNvbmNhdChjb25maWcua2V5KTtcbiAgdmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcbiAgdmFyIGRlYnVnID0gY29uZmlnLmRlYnVnO1xuICB2YXIgZGVzZXJpYWxpemU7XG5cbiAgaWYgKGNvbmZpZy5kZXNlcmlhbGl6ZSA9PT0gZmFsc2UpIHtcbiAgICBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZy5kZXNlcmlhbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlc2VyaWFsaXplID0gY29uZmlnLmRlc2VyaWFsaXplO1xuICB9IGVsc2Uge1xuICAgIGRlc2VyaWFsaXplID0gZGVmYXVsdERlc2VyaWFsaXplO1xuICB9XG5cbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KS50aGVuKGZ1bmN0aW9uIChzZXJpYWxpemVkKSB7XG4gICAgaWYgKCFzZXJpYWxpemVkKSByZXR1cm4gdW5kZWZpbmVkO2Vsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIHZhciByYXdTdGF0ZSA9IGRlc2VyaWFsaXplKHNlcmlhbGl6ZWQpO1xuICAgICAgICBPYmplY3Qua2V5cyhyYXdTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgc3RhdGVba2V5XSA9IHRyYW5zZm9ybXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHN1YlN0YXRlLCB0cmFuc2Zvcm1lcikge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyLm91dChzdWJTdGF0ZSwga2V5LCByYXdTdGF0ZSk7XG4gICAgICAgICAgfSwgZGVzZXJpYWxpemUocmF3U3RhdGVba2V5XSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZyhcInJlZHV4LXBlcnNpc3QvZ2V0U3RvcmVkU3RhdGU6IEVycm9yIHJlc3RvcmluZyBkYXRhIFwiLmNvbmNhdChzZXJpYWxpemVkKSwgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREZXNlcmlhbGl6ZShzZXJpYWwpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsKTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAnLi9wZXJzaXN0UmVkdWNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBlcnNpc3RDb21iaW5lUmVkdWNlcnMgfSBmcm9tICcuL3BlcnNpc3RDb21iaW5lUmVkdWNlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJzaXN0U3RvcmUgfSBmcm9tICcuL3BlcnNpc3RTdG9yZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1pZ3JhdGUgfSBmcm9tICcuL2NyZWF0ZU1pZ3JhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUcmFuc2Zvcm0gfSBmcm9tICcuL2NyZWF0ZVRyYW5zZm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFN0b3JlZFN0YXRlIH0gZnJvbSAnLi9nZXRTdG9yZWRTdGF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVBlcnNpc3RvaWQgfSBmcm9tICcuL2NyZWF0ZVBlcnNpc3RvaWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwdXJnZVN0b3JlZFN0YXRlIH0gZnJvbSAnLi9wdXJnZVN0b3JlZFN0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJzsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcblxuZXhwb3J0IHZhciBQZXJzaXN0R2F0ZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBlcnNpc3RHYXRlLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGVyc2lzdEdhdGUoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyc2lzdEdhdGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoUGVyc2lzdEdhdGUpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICBib290c3RyYXBwZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3Vuc3Vic2NyaWJlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlUGVyc2lzdG9yU3RhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBlcnNpc3RvciA9IF90aGlzLnByb3BzLnBlcnNpc3RvcjtcblxuICAgICAgdmFyIF9wZXJzaXN0b3IkZ2V0U3RhdGUgPSBwZXJzaXN0b3IuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBib290c3RyYXBwZWQgPSBfcGVyc2lzdG9yJGdldFN0YXRlLmJvb3RzdHJhcHBlZDtcblxuICAgICAgaWYgKGJvb3RzdHJhcHBlZCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25CZWZvcmVMaWZ0KSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKF90aGlzLnByb3BzLm9uQmVmb3JlTGlmdCgpKS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGJvb3RzdHJhcHBlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm9vdHN0cmFwcGVkOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fdW5zdWJzY3JpYmUgJiYgX3RoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGVyc2lzdEdhdGUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB0aGlzLnByb3BzLnBlcnNpc3Rvci5zdWJzY3JpYmUodGhpcy5oYW5kbGVQZXJzaXN0b3JTdGF0ZSk7XG4gICAgICB0aGlzLmhhbmRsZVBlcnNpc3RvclN0YXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgJiYgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnByb3BzLmxvYWRpbmcpIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IFBlcnNpc3RHYXRlIGV4cGVjdHMgZWl0aGVyIGEgZnVuY3Rpb24gY2hpbGQgb3IgbG9hZGluZyBwcm9wLCBidXQgbm90IGJvdGguIFRoZSBsb2FkaW5nIHByb3Agd2lsbCBiZSBpZ25vcmVkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5ib290c3RyYXBwZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib290c3RyYXBwZWQgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5wcm9wcy5sb2FkaW5nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQZXJzaXN0R2F0ZTtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShQZXJzaXN0R2F0ZSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgbG9hZGluZzogbnVsbFxufSk7IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHBlcnNpc3RSZWR1Y2VyIGZyb20gJy4vcGVyc2lzdFJlZHVjZXInO1xuaW1wb3J0IGF1dG9NZXJnZUxldmVsMiBmcm9tICcuL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDInO1xuLy8gY29tYmluZVJlZHVjZXJzICsgcGVyc2lzdFJlZHVjZXIgd2l0aCBzdGF0ZVJlY29uY2lsZXIgZGVmYXVsdGVkIHRvIGF1dG9NZXJnZUxldmVsMlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVyc2lzdENvbWJpbmVSZWR1Y2Vycyhjb25maWcsIHJlZHVjZXJzKSB7XG4gIGNvbmZpZy5zdGF0ZVJlY29uY2lsZXIgPSBjb25maWcuc3RhdGVSZWNvbmNpbGVyID09PSB1bmRlZmluZWQgPyBhdXRvTWVyZ2VMZXZlbDIgOiBjb25maWcuc3RhdGVSZWNvbmNpbGVyO1xuICByZXR1cm4gcGVyc2lzdFJlZHVjZXIoY29uZmlnLCBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpKTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBGTFVTSCwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUhZRFJBVEUsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBhdXRvTWVyZ2VMZXZlbDEgZnJvbSAnLi9zdGF0ZVJlY29uY2lsZXIvYXV0b01lcmdlTGV2ZWwxJztcbmltcG9ydCBjcmVhdGVQZXJzaXN0b2lkIGZyb20gJy4vY3JlYXRlUGVyc2lzdG9pZCc7XG5pbXBvcnQgZGVmYXVsdEdldFN0b3JlZFN0YXRlIGZyb20gJy4vZ2V0U3RvcmVkU3RhdGUnO1xuaW1wb3J0IHB1cmdlU3RvcmVkU3RhdGUgZnJvbSAnLi9wdXJnZVN0b3JlZFN0YXRlJztcbnZhciBERUZBVUxUX1RJTUVPVVQgPSA1MDAwO1xuLypcbiAgQFRPRE8gYWRkIHZhbGlkYXRpb24gLyBoYW5kbGluZyBmb3I6XG4gIC0gcGVyc2lzdGluZyBhIHJlZHVjZXIgd2hpY2ggaGFzIG5lc3RlZCBfcGVyc2lzdFxuICAtIGhhbmRsaW5nIGFjdGlvbnMgdGhhdCBmaXJlIGJlZm9yZSByZXlkcmF0ZSBpcyBjYWxsZWRcbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlcnNpc3RSZWR1Y2VyKGNvbmZpZywgYmFzZVJlZHVjZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIWNvbmZpZykgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgcmVxdWlyZWQgZm9yIHBlcnNpc3RSZWR1Y2VyJyk7XG4gICAgaWYgKCFjb25maWcua2V5KSB0aHJvdyBuZXcgRXJyb3IoJ2tleSBpcyByZXF1aXJlZCBpbiBwZXJzaXN0b3IgY29uZmlnJyk7XG4gICAgaWYgKCFjb25maWcuc3RvcmFnZSkgdGhyb3cgbmV3IEVycm9yKFwicmVkdXgtcGVyc2lzdDogY29uZmlnLnN0b3JhZ2UgaXMgcmVxdWlyZWQuIFRyeSB1c2luZyBvbmUgb2YgdGhlIHByb3ZpZGVkIHN0b3JhZ2UgZW5naW5lcyBgaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdgXCIpO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSBjb25maWcudmVyc2lvbiAhPT0gdW5kZWZpbmVkID8gY29uZmlnLnZlcnNpb24gOiBERUZBVUxUX1ZFUlNJT047XG4gIHZhciBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdmFyIHN0YXRlUmVjb25jaWxlciA9IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXIgPT09IHVuZGVmaW5lZCA/IGF1dG9NZXJnZUxldmVsMSA6IGNvbmZpZy5zdGF0ZVJlY29uY2lsZXI7XG4gIHZhciBnZXRTdG9yZWRTdGF0ZSA9IGNvbmZpZy5nZXRTdG9yZWRTdGF0ZSB8fCBkZWZhdWx0R2V0U3RvcmVkU3RhdGU7XG4gIHZhciB0aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCA/IGNvbmZpZy50aW1lb3V0IDogREVGQVVMVF9USU1FT1VUO1xuICB2YXIgX3BlcnNpc3RvaWQgPSBudWxsO1xuICB2YXIgX3B1cmdlID0gZmFsc2U7XG4gIHZhciBfcGF1c2VkID0gdHJ1ZTtcblxuICB2YXIgY29uZGl0aW9uYWxVcGRhdGUgPSBmdW5jdGlvbiBjb25kaXRpb25hbFVwZGF0ZShzdGF0ZSkge1xuICAgIC8vIHVwZGF0ZSB0aGUgcGVyc2lzdG9pZCBvbmx5IGlmIHdlIGFyZSByZWh5ZHJhdGVkIGFuZCBub3QgcGF1c2VkXG4gICAgc3RhdGUuX3BlcnNpc3QucmVoeWRyYXRlZCAmJiBfcGVyc2lzdG9pZCAmJiAhX3BhdXNlZCAmJiBfcGVyc2lzdG9pZC51cGRhdGUoc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICB2YXIgX3JlZiA9IHN0YXRlIHx8IHt9LFxuICAgICAgICBfcGVyc2lzdCA9IF9yZWYuX3BlcnNpc3QsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiX3BlcnNpc3RcIl0pOyAvLyAkRmxvd0lnbm9yZSBuZWVkIHRvIHVwZGF0ZSBTdGF0ZSB0eXBlXG5cblxuICAgIHZhciByZXN0U3RhdGUgPSByZXN0O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBQRVJTSVNUKSB7XG4gICAgICB2YXIgX3NlYWxlZCA9IGZhbHNlO1xuXG4gICAgICB2YXIgX3JlaHlkcmF0ZSA9IGZ1bmN0aW9uIF9yZWh5ZHJhdGUocGF5bG9hZCwgZXJyKSB7XG4gICAgICAgIC8vIGRldiB3YXJuaW5nIGlmIHdlIGFyZSBhbHJlYWR5IHNlYWxlZFxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfc2VhbGVkKSBjb25zb2xlLmVycm9yKFwicmVkdXgtcGVyc2lzdDogcmVoeWRyYXRlIGZvciBcXFwiXCIuY29uY2F0KGNvbmZpZy5rZXksIFwiXFxcIiBjYWxsZWQgYWZ0ZXIgdGltZW91dC5cIiksIHBheWxvYWQsIGVycik7IC8vIG9ubHkgcmVoeWRyYXRlIGlmIHdlIGFyZSBub3QgYWxyZWFkeSBzZWFsZWRcblxuICAgICAgICBpZiAoIV9zZWFsZWQpIHtcbiAgICAgICAgICBhY3Rpb24ucmVoeWRyYXRlKGNvbmZpZy5rZXksIHBheWxvYWQsIGVycik7XG4gICAgICAgICAgX3NlYWxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRpbWVvdXQgJiYgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICFfc2VhbGVkICYmIF9yZWh5ZHJhdGUodW5kZWZpbmVkLCBuZXcgRXJyb3IoXCJyZWR1eC1wZXJzaXN0OiBwZXJzaXN0IHRpbWVkIG91dCBmb3IgcGVyc2lzdCBrZXkgXFxcIlwiLmNvbmNhdChjb25maWcua2V5LCBcIlxcXCJcIikpKTtcbiAgICAgIH0sIHRpbWVvdXQpOyAvLyBATk9URSBQRVJTSVNUIHJlc3VtZXMgaWYgcGF1c2VkLlxuXG4gICAgICBfcGF1c2VkID0gZmFsc2U7IC8vIEBOT1RFIG9ubHkgZXZlciBjcmVhdGUgcGVyc2lzdG9pZCBvbmNlLCBlbnN1cmUgd2UgY2FsbCBpdCBhdCBsZWFzdCBvbmNlLCBldmVuIGlmIF9wZXJzaXN0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG5cbiAgICAgIGlmICghX3BlcnNpc3RvaWQpIF9wZXJzaXN0b2lkID0gY3JlYXRlUGVyc2lzdG9pZChjb25maWcpOyAvLyBATk9URSBQRVJTSVNUIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIG5vb3AgYWZ0ZXIgdGhlIGZpcnN0XG5cbiAgICAgIGlmIChfcGVyc2lzdCkge1xuICAgICAgICAvLyBXZSBzdGlsbCBuZWVkIHRvIGNhbGwgdGhlIGJhc2UgcmVkdWNlciBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIG5lc3RlZFxuICAgICAgICAvLyB1c2VzIG9mIHBlcnNpc3RSZWR1Y2VyIHdoaWNoIG5lZWQgdG8gYmUgYXdhcmUgb2YgdGhlIFBFUlNJU1QgYWN0aW9uXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uLnJlaHlkcmF0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYWN0aW9uLnJlZ2lzdGVyICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IGVpdGhlciByZWh5ZHJhdGUgb3IgcmVnaXN0ZXIgaXMgbm90IGEgZnVuY3Rpb24gb24gdGhlIFBFUlNJU1QgYWN0aW9uLiBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGFjdGlvbiBpcyBiZWluZyByZXBsYXllZC4gVGhpcyBpcyBhbiB1bmV4cGxvcmVkIHVzZSBjYXNlLCBwbGVhc2Ugb3BlbiBhbiBpc3N1ZSBhbmQgd2Ugd2lsbCBmaWd1cmUgb3V0IGEgcmVzb2x1dGlvbi4nKTtcbiAgICAgIGFjdGlvbi5yZWdpc3Rlcihjb25maWcua2V5KTtcbiAgICAgIGdldFN0b3JlZFN0YXRlKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzdG9yZWRTdGF0ZSkge1xuICAgICAgICB2YXIgbWlncmF0ZSA9IGNvbmZpZy5taWdyYXRlIHx8IGZ1bmN0aW9uIChzLCB2KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtaWdyYXRlKHJlc3RvcmVkU3RhdGUsIHZlcnNpb24pLnRoZW4oZnVuY3Rpb24gKG1pZ3JhdGVkU3RhdGUpIHtcbiAgICAgICAgICBfcmVoeWRyYXRlKG1pZ3JhdGVkU3RhdGUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAobWlncmF0ZUVycikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG1pZ3JhdGVFcnIpIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3Q6IG1pZ3JhdGlvbiBlcnJvcicsIG1pZ3JhdGVFcnIpO1xuXG4gICAgICAgICAgX3JlaHlkcmF0ZSh1bmRlZmluZWQsIG1pZ3JhdGVFcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3JlaHlkcmF0ZSh1bmRlZmluZWQsIGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlUmVkdWNlcihyZXN0U3RhdGUsIGFjdGlvbiksIHtcbiAgICAgICAgX3BlcnNpc3Q6IHtcbiAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgIHJlaHlkcmF0ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFBVUkdFKSB7XG4gICAgICBfcHVyZ2UgPSB0cnVlO1xuICAgICAgYWN0aW9uLnJlc3VsdChwdXJnZVN0b3JlZFN0YXRlKGNvbmZpZykpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IEZMVVNIKSB7XG4gICAgICBhY3Rpb24ucmVzdWx0KF9wZXJzaXN0b2lkICYmIF9wZXJzaXN0b2lkLmZsdXNoKCkpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VSZWR1Y2VyKHJlc3RTdGF0ZSwgYWN0aW9uKSwge1xuICAgICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFBBVVNFKSB7XG4gICAgICBfcGF1c2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBSRUhZRFJBVEUpIHtcbiAgICAgIC8vIG5vb3Agb24gcmVzdFN0YXRlIGlmIHB1cmdpbmdcbiAgICAgIGlmIChfcHVyZ2UpIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCByZXN0U3RhdGUsIHtcbiAgICAgICAgX3BlcnNpc3Q6IF9vYmplY3RTcHJlYWQoe30sIF9wZXJzaXN0LCB7XG4gICAgICAgICAgcmVoeWRyYXRlZDogdHJ1ZVxuICAgICAgICB9KSAvLyBATk9URSBpZiBrZXkgZG9lcyBub3QgbWF0Y2gsIHdpbGwgY29udGludWUgdG8gZGVmYXVsdCBlbHNlIGJlbG93XG5cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aW9uLmtleSA9PT0gY29uZmlnLmtleSkge1xuICAgICAgICB2YXIgcmVkdWNlZFN0YXRlID0gYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pO1xuICAgICAgICB2YXIgaW5ib3VuZFN0YXRlID0gYWN0aW9uLnBheWxvYWQ7IC8vIG9ubHkgcmVjb25jaWxlIHN0YXRlIGlmIHN0YXRlUmVjb25jaWxlciBhbmQgaW5ib3VuZFN0YXRlIGFyZSBib3RoIGRlZmluZWRcblxuICAgICAgICB2YXIgcmVjb25jaWxlZFJlc3QgPSBzdGF0ZVJlY29uY2lsZXIgIT09IGZhbHNlICYmIGluYm91bmRTdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGVSZWNvbmNpbGVyKGluYm91bmRTdGF0ZSwgc3RhdGUsIHJlZHVjZWRTdGF0ZSwgY29uZmlnKSA6IHJlZHVjZWRTdGF0ZTtcblxuICAgICAgICB2YXIgX25ld1N0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgcmVjb25jaWxlZFJlc3QsIHtcbiAgICAgICAgICBfcGVyc2lzdDogX29iamVjdFNwcmVhZCh7fSwgX3BlcnNpc3QsIHtcbiAgICAgICAgICAgIHJlaHlkcmF0ZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29uZGl0aW9uYWxVcGRhdGUoX25ld1N0YXRlKTtcbiAgICAgIH1cbiAgICB9IC8vIGlmIHdlIGhhdmUgbm90IGFscmVhZHkgaGFuZGxlZCBQRVJTSVNULCBzdHJhaWdodCBwYXNzdGhyb3VnaFxuXG5cbiAgICBpZiAoIV9wZXJzaXN0KSByZXR1cm4gYmFzZVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7IC8vIHJ1biBiYXNlIHJlZHVjZXI6XG4gICAgLy8gaXMgc3RhdGUgbW9kaWZpZWQgPyByZXR1cm4gb3JpZ2luYWwgOiByZXR1cm4gdXBkYXRlZFxuXG4gICAgdmFyIG5ld1N0YXRlID0gYmFzZVJlZHVjZXIocmVzdFN0YXRlLCBhY3Rpb24pO1xuICAgIGlmIChuZXdTdGF0ZSA9PT0gcmVzdFN0YXRlKSByZXR1cm4gc3RhdGU7XG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsVXBkYXRlKF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlLCB7XG4gICAgICBfcGVyc2lzdDogX3BlcnNpc3RcbiAgICB9KSk7XG4gIH07XG59IiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBGTFVTSCwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUiwgUkVIWURSQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgcmVnaXN0cnk6IFtdLFxuICBib290c3RyYXBwZWQ6IGZhbHNlXG59O1xuXG52YXIgcGVyc2lzdG9yUmVkdWNlciA9IGZ1bmN0aW9uIHBlcnNpc3RvclJlZHVjZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVHSVNURVI6XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgcmVnaXN0cnk6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUucmVnaXN0cnkpLCBbYWN0aW9uLmtleV0pXG4gICAgICB9KTtcblxuICAgIGNhc2UgUkVIWURSQVRFOlxuICAgICAgdmFyIGZpcnN0SW5kZXggPSBzdGF0ZS5yZWdpc3RyeS5pbmRleE9mKGFjdGlvbi5rZXkpO1xuXG4gICAgICB2YXIgcmVnaXN0cnkgPSBfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUucmVnaXN0cnkpO1xuXG4gICAgICByZWdpc3RyeS5zcGxpY2UoZmlyc3RJbmRleCwgMSk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgcmVnaXN0cnk6IHJlZ2lzdHJ5LFxuICAgICAgICBib290c3RyYXBwZWQ6IHJlZ2lzdHJ5Lmxlbmd0aCA9PT0gMFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzaXN0U3RvcmUoc3RvcmUsIG9wdGlvbnMsIGNiKSB7XG4gIC8vIGhlbHAgY2F0Y2ggaW5jb3JyZWN0IHVzYWdlIG9mIHBhc3NpbmcgUGVyc2lzdENvbmZpZyBpbiBhcyBQZXJzaXN0b3JPcHRpb25zXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIG9wdGlvbnNUb1Rlc3QgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBiYW5uZWRLZXlzID0gWydibGFja2xpc3QnLCAnd2hpdGVsaXN0JywgJ3RyYW5zZm9ybXMnLCAnc3RvcmFnZScsICdrZXlQcmVmaXgnLCAnbWlncmF0ZSddO1xuICAgIGJhbm5lZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKCEhb3B0aW9uc1RvVGVzdFtrXSkgY29uc29sZS5lcnJvcihcInJlZHV4LXBlcnNpc3Q6IGludmFsaWQgb3B0aW9uIHBhc3NlZCB0byBwZXJzaXN0U3RvcmU6IFxcXCJcIi5jb25jYXQoaywgXCJcXFwiLiBZb3UgbWF5IGJlIGluY29ycmVjdGx5IHBhc3NpbmcgcGVyc2lzdENvbmZpZyBpbnRvIHBlcnNpc3RTdG9yZSwgd2hlcmVhcyBpdCBzaG91bGQgYmUgcGFzc2VkIGludG8gcGVyc2lzdFJlZHVjZXIuXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBib29zdHJhcHBlZENiID0gY2IgfHwgZmFsc2U7XG5cbiAgdmFyIF9wU3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0b3JSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIG9wdGlvbnMgJiYgb3B0aW9ucy5lbmhhbmNlciA/IG9wdGlvbnMuZW5oYW5jZXIgOiB1bmRlZmluZWQpO1xuXG4gIHZhciByZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKGtleSkge1xuICAgIF9wU3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVHSVNURVIsXG4gICAgICBrZXk6IGtleVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZWh5ZHJhdGUgPSBmdW5jdGlvbiByZWh5ZHJhdGUoa2V5LCBwYXlsb2FkLCBlcnIpIHtcbiAgICB2YXIgcmVoeWRyYXRlQWN0aW9uID0ge1xuICAgICAgdHlwZTogUkVIWURSQVRFLFxuICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIGVycjogZXJyLFxuICAgICAga2V5OiBrZXkgLy8gZGlzcGF0Y2ggdG8gYHN0b3JlYCB0byByZWh5ZHJhdGUgYW5kIGBwZXJzaXN0b3JgIHRvIHRyYWNrIHJlc3VsdFxuXG4gICAgfTtcbiAgICBzdG9yZS5kaXNwYXRjaChyZWh5ZHJhdGVBY3Rpb24pO1xuXG4gICAgX3BTdG9yZS5kaXNwYXRjaChyZWh5ZHJhdGVBY3Rpb24pO1xuXG4gICAgaWYgKGJvb3N0cmFwcGVkQ2IgJiYgcGVyc2lzdG9yLmdldFN0YXRlKCkuYm9vdHN0cmFwcGVkKSB7XG4gICAgICBib29zdHJhcHBlZENiKCk7XG4gICAgICBib29zdHJhcHBlZENiID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwZXJzaXN0b3IgPSBfb2JqZWN0U3ByZWFkKHt9LCBfcFN0b3JlLCB7XG4gICAgcHVyZ2U6IGZ1bmN0aW9uIHB1cmdlKCkge1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUFVSR0UsXG4gICAgICAgIHJlc3VsdDogZnVuY3Rpb24gcmVzdWx0KHB1cmdlUmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHB1cmdlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgfSxcbiAgICBmbHVzaDogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGTFVTSCxcbiAgICAgICAgcmVzdWx0OiBmdW5jdGlvbiByZXN1bHQoZmx1c2hSZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmx1c2hSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUEFVU0VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGVyc2lzdDogZnVuY3Rpb24gcGVyc2lzdCgpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUEVSU0lTVCxcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLFxuICAgICAgICByZWh5ZHJhdGU6IHJlaHlkcmF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIShvcHRpb25zICYmIG9wdGlvbnMubWFudWFsUGVyc2lzdCkpIHtcbiAgICBwZXJzaXN0b3IucGVyc2lzdCgpO1xuICB9XG5cbiAgcmV0dXJuIHBlcnNpc3Rvcjtcbn0iLCJpbXBvcnQgeyBLRVlfUFJFRklYIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVyZ2VTdG9yZWRTdGF0ZShjb25maWcpIHtcbiAgdmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcbiAgdmFyIHN0b3JhZ2VLZXkgPSBcIlwiLmNvbmNhdChjb25maWcua2V5UHJlZml4ICE9PSB1bmRlZmluZWQgPyBjb25maWcua2V5UHJlZml4IDogS0VZX1BSRUZJWCkuY29uY2F0KGNvbmZpZy5rZXkpO1xuICByZXR1cm4gc3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXksIHdhcm5JZlJlbW92ZUVycm9yKTtcbn1cblxuZnVuY3Rpb24gd2FybklmUmVtb3ZlRXJyb3IoZXJyKSB7XG4gIGlmIChlcnIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3JlZHV4LXBlcnNpc3QvcHVyZ2VTdG9yZWRTdGF0ZTogRXJyb3IgcHVyZ2luZyBkYXRhIHN0b3JlZCBzdGF0ZScsIGVycik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKlxuICBhdXRvTWVyZ2VMZXZlbDE6IFxuICAgIC0gbWVyZ2VzIDEgbGV2ZWwgb2Ygc3Vic3RhdGVcbiAgICAtIHNraXBzIHN1YnN0YXRlIGlmIGFscmVhZHkgbW9kaWZpZWRcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvTWVyZ2VMZXZlbDEoaW5ib3VuZFN0YXRlLCBvcmlnaW5hbFN0YXRlLCByZWR1Y2VkU3RhdGUsIF9yZWYpIHtcbiAgdmFyIGRlYnVnID0gX3JlZi5kZWJ1ZztcblxuICB2YXIgbmV3U3RhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCByZWR1Y2VkU3RhdGUpOyAvLyBvbmx5IHJlaHlkcmF0ZSBpZiBpbmJvdW5kU3RhdGUgZXhpc3RzIGFuZCBpcyBhbiBvYmplY3RcblxuXG4gIGlmIChpbmJvdW5kU3RhdGUgJiYgX3R5cGVvZihpbmJvdW5kU3RhdGUpID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBpZ25vcmUgX3BlcnNpc3QgZGF0YVxuICAgICAgaWYgKGtleSA9PT0gJ19wZXJzaXN0JykgcmV0dXJuOyAvLyBpZiByZWR1Y2VyIG1vZGlmaWVzIHN1YnN0YXRlLCBza2lwIGF1dG8gcmVoeWRyYXRpb25cblxuICAgICAgaWYgKG9yaWdpbmFsU3RhdGVba2V5XSAhPT0gcmVkdWNlZFN0YXRlW2tleV0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcpIGNvbnNvbGUubG9nKCdyZWR1eC1wZXJzaXN0L3N0YXRlUmVjb25jaWxlcjogc3ViIHN0YXRlIGZvciBrZXkgYCVzYCBtb2RpZmllZCwgc2tpcHBpbmcuJywga2V5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgaGFyZCBzZXQgdGhlIG5ldyB2YWx1ZVxuXG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSBpbmJvdW5kU3RhdGVba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnICYmIGluYm91bmRTdGF0ZSAmJiBfdHlwZW9mKGluYm91bmRTdGF0ZSkgPT09ICdvYmplY3QnKSBjb25zb2xlLmxvZyhcInJlZHV4LXBlcnNpc3Qvc3RhdGVSZWNvbmNpbGVyOiByZWh5ZHJhdGVkIGtleXMgJ1wiLmNvbmNhdChPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmpvaW4oJywgJyksIFwiJ1wiKSk7XG4gIHJldHVybiBuZXdTdGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKlxuICBhdXRvTWVyZ2VMZXZlbDI6IFxuICAgIC0gbWVyZ2VzIDIgbGV2ZWwgb2Ygc3Vic3RhdGVcbiAgICAtIHNraXBzIHN1YnN0YXRlIGlmIGFscmVhZHkgbW9kaWZpZWRcbiAgICAtIHRoaXMgaXMgZXNzZW50aWFsbHkgcmVkdXgtcGVyaXN0IHY0IGJlaGF2aW9yXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b01lcmdlTGV2ZWwyKGluYm91bmRTdGF0ZSwgb3JpZ2luYWxTdGF0ZSwgcmVkdWNlZFN0YXRlLCBfcmVmKSB7XG4gIHZhciBkZWJ1ZyA9IF9yZWYuZGVidWc7XG5cbiAgdmFyIG5ld1N0YXRlID0gX29iamVjdFNwcmVhZCh7fSwgcmVkdWNlZFN0YXRlKTsgLy8gb25seSByZWh5ZHJhdGUgaWYgaW5ib3VuZFN0YXRlIGV4aXN0cyBhbmQgaXMgYW4gb2JqZWN0XG5cblxuICBpZiAoaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhpbmJvdW5kU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gaWdub3JlIF9wZXJzaXN0IGRhdGFcbiAgICAgIGlmIChrZXkgPT09ICdfcGVyc2lzdCcpIHJldHVybjsgLy8gaWYgcmVkdWNlciBtb2RpZmllcyBzdWJzdGF0ZSwgc2tpcCBhdXRvIHJlaHlkcmF0aW9uXG5cbiAgICAgIGlmIChvcmlnaW5hbFN0YXRlW2tleV0gIT09IHJlZHVjZWRTdGF0ZVtrZXldKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRlYnVnKSBjb25zb2xlLmxvZygncmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHN1YiBzdGF0ZSBmb3Iga2V5IGAlc2AgbW9kaWZpZWQsIHNraXBwaW5nLicsIGtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGxhaW5Fbm91Z2hPYmplY3QocmVkdWNlZFN0YXRlW2tleV0pKSB7XG4gICAgICAgIC8vIGlmIG9iamVjdCBpcyBwbGFpbiBlbm91Z2ggc2hhbGxvdyBtZXJnZSB0aGUgbmV3IHZhbHVlcyAoaGVuY2UgXCJMZXZlbDJcIilcbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IF9vYmplY3RTcHJlYWQoe30sIG5ld1N0YXRlW2tleV0sIHt9LCBpbmJvdW5kU3RhdGVba2V5XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIGhhcmQgc2V0XG5cblxuICAgICAgbmV3U3RhdGVba2V5XSA9IGluYm91bmRTdGF0ZVtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGVidWcgJiYgaW5ib3VuZFN0YXRlICYmIF90eXBlb2YoaW5ib3VuZFN0YXRlKSA9PT0gJ29iamVjdCcpIGNvbnNvbGUubG9nKFwicmVkdXgtcGVyc2lzdC9zdGF0ZVJlY29uY2lsZXI6IHJlaHlkcmF0ZWQga2V5cyAnXCIuY29uY2F0KE9iamVjdC5rZXlzKGluYm91bmRTdGF0ZSkuam9pbignLCAnKSwgXCInXCIpKTtcbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluRW5vdWdoT2JqZWN0KG8pIHtcbiAgcmV0dXJuIG8gIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobykgJiYgX3R5cGVvZihvKSA9PT0gJ29iamVjdCc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVXZWJTdG9yYWdlO1xuXG52YXIgX2dldFN0b3JhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldFN0b3JhZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVXZWJTdG9yYWdlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2UgPSAoMCwgX2dldFN0b3JhZ2UuZGVmYXVsdCkodHlwZSk7XG4gIHJldHVybiB7XG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUoc3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRJdGVtOiBmdW5jdGlvbiBzZXRJdGVtKGtleSwgaXRlbSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZShzdG9yYWdlLnNldEl0ZW0oa2V5LCBpdGVtKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN0b3JhZ2U7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbm9vcFN0b3JhZ2UgPSB7XG4gIGdldEl0ZW06IG5vb3AsXG4gIHNldEl0ZW06IG5vb3AsXG4gIHJlbW92ZUl0ZW06IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIGhhc1N0b3JhZ2Uoc3RvcmFnZVR5cGUpIHtcbiAgaWYgKCh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHNlbGYpKSAhPT0gJ29iamVjdCcgfHwgIShzdG9yYWdlVHlwZSBpbiBzZWxmKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBzZWxmW3N0b3JhZ2VUeXBlXTtcbiAgICB2YXIgdGVzdEtleSA9IFwicmVkdXgtcGVyc2lzdCBcIi5jb25jYXQoc3RvcmFnZVR5cGUsIFwiIHRlc3RcIik7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0Jyk7XG4gICAgc3RvcmFnZS5nZXRJdGVtKHRlc3RLZXkpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBjb25zb2xlLndhcm4oXCJyZWR1eC1wZXJzaXN0IFwiLmNvbmNhdChzdG9yYWdlVHlwZSwgXCIgdGVzdCBmYWlsZWQsIHBlcnNpc3RlbmNlIHdpbGwgYmUgZGlzYWJsZWQuXCIpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmFnZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlVHlwZSA9IFwiXCIuY29uY2F0KHR5cGUsIFwiU3RvcmFnZVwiKTtcbiAgaWYgKGhhc1N0b3JhZ2Uoc3RvcmFnZVR5cGUpKSByZXR1cm4gc2VsZltzdG9yYWdlVHlwZV07ZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZWR1eC1wZXJzaXN0IGZhaWxlZCB0byBjcmVhdGUgc3luYyBzdG9yYWdlLiBmYWxsaW5nIGJhY2sgdG8gbm9vcCBzdG9yYWdlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9vcFN0b3JhZ2U7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVXZWJTdG9yYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXZWJTdG9yYWdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXZWJTdG9yYWdlLmRlZmF1bHQpKCdsb2NhbCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOlsiTmF2YmFyIiwiUHJvdmlkZXIiLCJQZXJzaXN0R2F0ZSIsInN0b3JlIiwicGVyc2lzdG9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVTdG9yZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsImNvdW50ZXJTbGljZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJwZXJzaXN0ZWRSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==