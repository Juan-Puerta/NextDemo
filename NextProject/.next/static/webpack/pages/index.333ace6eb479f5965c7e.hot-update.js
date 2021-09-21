"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Juan Puerta\\Desktop\\NextDemo\\NextProject\\components\\Users.js",
    _this = undefined;



var Users = function Users(props) {
  //console.log(props.users);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "list-group",
      children: props.users.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "list-group-item d-flex justify-content-between align-items-center list-group-item-action",
          onClick: function onClick() {
            return Router.push("/users/[id]", "/users/".concat(user.id));
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: [user.id, ". ", user.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this)
        }, user.id, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMzYWNlNmViNDc5ZjU5NjVjN2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDdkI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSxnQkFDR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUNmO0FBQ0UsbUJBQVMsRUFBQywwRkFEWjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsTUFBTSxDQUFDQyxJQUFQLGlDQUFxQ0YsSUFBSSxDQUFDRyxFQUExQyxFQUFOO0FBQUEsV0FIWDtBQUFBLGlDQUtFO0FBQUEsb0NBQ0U7QUFBQSx5QkFDR0gsSUFBSSxDQUFDRyxFQURSLFFBQ2NILElBQUksQ0FBQ0ksSUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQSxvQ0FBV0osSUFBSSxDQUFDSyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsV0FFT0wsSUFBSSxDQUFDRyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0F0QkQ7O0tBQU1QO0FBd0JOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKHByb3BzLnVzZXJzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICB7cHJvcHMudXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC91c2Vycy9baWRdYCwgYC91c2Vycy8ke3VzZXIuaWR9YCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAge3VzZXIuaWR9LiB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iXSwibmFtZXMiOlsiVXNlcnMiLCJwcm9wcyIsInVzZXJzIiwibWFwIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJpZCIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=