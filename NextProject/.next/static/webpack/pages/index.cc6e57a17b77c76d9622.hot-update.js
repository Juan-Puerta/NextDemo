self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Juan Puerta\\Desktop\\NextDemo\\NextProject\\components\\Users.js",
    _this = undefined;




var Users = function Users(props) {
  //console.log(props.users);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "list-group",
      children: props.users.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          className: "list-group-item d-flex justify-content-between align-items-center list-group-item-action",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_0___default().push("/users/[id]", "/users/".concat(user.id));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
              children: [user.id, ". ", user.first_name, " ", user.last_name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: user.avatar,
            alt: "",
            style: {
              borderRadius: "50%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

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

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2M2ZTU3YTE3Yjc3Yzc2ZDk2MjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSw0QkFDZjtBQUNFLG1CQUFTLEVBQUMsMEZBRFo7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLHVEQUFBLGlDQUFxQ0ssSUFBSSxDQUFDRSxFQUExQyxFQUFOO0FBQUEsV0FIWDtBQUFBLGtDQUtFO0FBQUEsb0NBQ0U7QUFBQSx5QkFDR0YsSUFBSSxDQUFDRSxFQURSLFFBQ2NGLElBQUksQ0FBQ0csVUFEbkIsT0FDZ0NILElBQUksQ0FBQ0ksU0FEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQSxvQ0FBV0osSUFBSSxDQUFDSyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBV0U7QUFBSyxlQUFHLEVBQUVMLElBQUksQ0FBQ00sTUFBZjtBQUF1QixlQUFHLEVBQUMsRUFBM0I7QUFBOEIsaUJBQUssRUFBRTtBQUFFQyxjQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLFdBRU9QLElBQUksQ0FBQ0UsRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBdkJEOztLQUFNTjtBQXlCTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSw2R0FBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZyhwcm9wcy51c2Vycyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAge3Byb3BzLnVzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvdXNlcnMvW2lkXWAsIGAvdXNlcnMvJHt1c2VyLmlkfWApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmlkfS4ge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gYWx0PVwiXCIgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19IC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJVc2VycyIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwicHVzaCIsImlkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==