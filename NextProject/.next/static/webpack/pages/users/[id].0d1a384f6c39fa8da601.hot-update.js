"use strict";
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Juan Puerta\\Desktop\\NextDemo\\NextProject\\pages\\users\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var userProfile = function userProfile(_ref) {
  _s();

  var user = _ref.user;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var id = router.query.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
    children: "Nada"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, _this);
};

_s(userProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

userProfile.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx) {
    var response;
    return C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://reqres.in/api/users/".concat(ctx.query.id));

          case 2:
            response = _context.sent;
            //const res = await response.json();
            console.log(response.data.data);
            return _context.abrupt("return", {
              user: response.data.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (userProfile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS4wZDFhMzg0ZjZjMzlmYThkYTYwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUNBLE1BQVFLLEVBQVIsR0FBZUQsTUFBTSxDQUFDRSxLQUF0QixDQUFRRCxFQUFSO0FBRUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBTEQ7O0dBQU1IO1VBQ1dGOzs7QUFNakJFLFdBQVcsQ0FBQ0ssZUFBWjtBQUFBLGtUQUE4QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMUCxnREFBQSx1Q0FDVU8sR0FBRyxDQUFDRixLQUFKLENBQVVELEVBRHBCLEVBREs7O0FBQUE7QUFDdEJLLFlBQUFBLFFBRHNCO0FBSTVCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBMUI7QUFMNEIsNkNBTXJCO0FBQUVWLGNBQUFBLElBQUksRUFBRU8sUUFBUSxDQUFDRyxJQUFULENBQWNBO0FBQXRCLGFBTnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLCtEQUFlWCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICByZXR1cm4gPGgxPk5hZGE8L2gxPjtcclxufTtcclxuXHJcbnVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgLy9jb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICByZXR1cm4geyB1c2VyOiByZXNwb25zZS5kYXRhLmRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiYXhpb3MiLCJ1c2VyUHJvZmlsZSIsInVzZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=