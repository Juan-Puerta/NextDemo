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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "col-md-6 offset-md-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card-header text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: user.avatar,
              alt: user.first_name + " " + user.last_name,
              style: {
                borderRadius: "50%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "card-body text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: [user.id, ". ", user.first_name, " ", user.last_name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW2lkXS5kZGNmMjg5ZjJmYmNiZDBjYTA5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUNBLE1BQVFLLEVBQVIsR0FBZUQsTUFBTSxDQUFDRSxLQUF0QixDQUFRRCxFQUFSO0FBRUEsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNFO0FBQ0UsaUJBQUcsRUFBRUYsSUFBSSxDQUFDSSxNQURaO0FBRUUsaUJBQUcsRUFBRUosSUFBSSxDQUFDSyxVQUFMLEdBQWtCLEdBQWxCLEdBQXdCTCxJQUFJLENBQUNNLFNBRnBDO0FBR0UsbUJBQUssRUFBRTtBQUFFQyxnQkFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRTtBQUFBLHlCQUNHUCxJQUFJLENBQUNFLEVBRFIsUUFDY0YsSUFBSSxDQUFDSyxVQURuQixPQUNnQ0wsSUFBSSxDQUFDTSxTQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBLG9DQUFXTixJQUFJLENBQUNRLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0EzQkQ7O0dBQU1UO1VBQ1dGOzs7QUE0QmpCRSxXQUFXLENBQUNVLGVBQVo7QUFBQSxrVEFBOEIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTFosZ0RBQUEsdUNBQ1VZLEdBQUcsQ0FBQ1AsS0FBSixDQUFVRCxFQURwQixFQURLOztBQUFBO0FBQ3RCVSxZQUFBQSxRQURzQjtBQUk1QjtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQTFCO0FBTDRCLDZDQU1yQjtBQUFFZixjQUFBQSxJQUFJLEVBQUVZLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQTtBQUF0QixhQU5xQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSwrREFBZWhCLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXNlclByb2ZpbGUgPSAoeyB1c2VyIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIGFsdD17dXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmlkfS4ge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxudXNlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICAvL2NvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gIHJldHVybiB7IHVzZXI6IHJlc3BvbnNlLmRhdGEuZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZXJQcm9maWxlIiwidXNlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYm9yZGVyUmFkaXVzIiwiZW1haWwiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJnZXQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==