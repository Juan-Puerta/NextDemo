"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
              lineNumber: 15,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: user.avatar,
            alt: "",
            style: {
              borderRadius: "50%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzlhNjlkMTJkODI4ZDM2OGM1ZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSw0QkFDZjtBQUNFLG1CQUFTLEVBQUMsMEZBRFo7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLHVEQUFBLGlDQUFxQ0ssSUFBSSxDQUFDRSxFQUExQyxFQUFOO0FBQUEsV0FIWDtBQUFBLGtDQUtFO0FBQUEsb0NBQ0U7QUFBQSx5QkFDR0YsSUFBSSxDQUFDRSxFQURSLFFBQ2NGLElBQUksQ0FBQ0csVUFEbkIsT0FDZ0NILElBQUksQ0FBQ0ksU0FEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQSxvQ0FBV0osSUFBSSxDQUFDSyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBV0U7QUFBSyxlQUFHLEVBQUVMLElBQUksQ0FBQ00sTUFBZjtBQUF1QixlQUFHLEVBQUMsRUFBM0I7QUFBOEIsaUJBQUssRUFBRTtBQUFFQyxjQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLFdBRU9QLElBQUksQ0FBQ0UsRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBdkJEOztLQUFNTjtBQXlCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xyXG4gIC8vY29uc29sZS5sb2cocHJvcHMudXNlcnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL3VzZXJzL1tpZF1gLCBgL3VzZXJzLyR7dXNlci5pZH1gKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5pZH0uIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGFsdD1cIlwiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fSAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsIlVzZXJzIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJwdXNoIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9