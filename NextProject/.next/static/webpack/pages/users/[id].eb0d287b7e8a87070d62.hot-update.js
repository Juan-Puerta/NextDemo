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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();




var userProfile = function userProfile() {
  _s();

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var id = router.query.id;
};

_s(userProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

userProfile.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx) {
    var response;
    return C_Users_Juan_Puerta_Desktop_NextDemo_NextProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get("https://reqres.in/api/users/");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS5lYjBkMjg3YjdlOGE4NzA3MGQ2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHRixrRUFBUyxFQUF4QjtBQUNBLE1BQVFHLEVBQVIsR0FBZUQsTUFBTSxDQUFDRSxLQUF0QixDQUFRRCxFQUFSO0FBQ0QsQ0FIRDs7R0FBTUY7VUFDV0Q7OztBQUlqQkMsV0FBVyxDQUFDSSxlQUFaO0FBQUEsaVRBQThCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLDhCQUFWLENBREs7O0FBQUE7QUFDdEJDLFlBQUFBLFFBRHNCO0FBRTVCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUY0Qiw2Q0FHckI7QUFDTEMsY0FBQUEsS0FBSyxFQUFFSixRQUFRLENBQUNHO0FBRFgsYUFIcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsK0RBQWVYLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxufTtcclxuXHJcbnVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy9cIik7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJzOiByZXNwb25zZS5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZXJQcm9maWxlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==