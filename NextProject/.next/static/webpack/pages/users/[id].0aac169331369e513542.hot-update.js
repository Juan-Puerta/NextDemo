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
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();




var userProfile = function userProfile() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var id = router.query.id;
};

_s(userProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

userProfile.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx) {
    var response;
    return C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get("https://reqres.in/api/users/" + [ctx.query.id]);

          case 2:
            response = _context.sent;
            console.log(response.data);
            return _context.abrupt("return", {
              users: response.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS4wYWFjMTY5MzMxMzY5ZTUxMzU0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUF4QjtBQUNBLE1BQVFHLEVBQVIsR0FBZUQsTUFBTSxDQUFDRSxLQUF0QixDQUFRRCxFQUFSO0FBQ0QsQ0FIRDs7R0FBTUY7VUFDV0Q7OztBQUlqQkMsV0FBVyxDQUFDSSxlQUFaO0FBQUEsaVRBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xDLEtBQUssQ0FBQ0MsR0FBTixDQUNyQixpQ0FBaUMsQ0FBQ0YsR0FBRyxDQUFDRixLQUFKLENBQVVELEVBQVgsQ0FEWixDQURLOztBQUFBO0FBQ3RCTSxZQUFBQSxRQURzQjtBQUk1QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFKNEIsNkNBS3JCO0FBQ0xDLGNBQUFBLEtBQUssRUFBRUosUUFBUSxDQUFDRztBQURYLGFBTHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBLCtEQUFlWCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB1c2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbn07XHJcblxyXG51c2VyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBcImh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy9cIiArIFtjdHgucXVlcnkuaWRdXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlclByb2ZpbGUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9