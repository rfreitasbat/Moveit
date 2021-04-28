webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/Contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Ramon_Desktop_nlw_react_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "C:\\Users\\Ramon\\Desktop\\nlw_react-main\\src\\Contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  var children = _ref.children,
      rest = Object(C_Users_Ramon_Desktop_nlw_react_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengesCompl = rest.challengesCompletedes) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),
      challengesCompletedes = _useState3[0],
      setChallengesCompletedes = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      levelUpModalOpen = _useState5[0],
      setLevelUpModalOpen = _useState5[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompletedes', String(challengesCompletedes));
  }, [level, currentExperience, challengesCompletedes]);

  function levelUp() {
    setLevel(level + 1);
    setLevelUpModalOpen(true);
  }

  function closeLevelUpModel() {
    setLevelUpModalOpen(false);
  }

  function startNewChallege() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio !!!', {
        body: "Valendo ".concat(challenge.amount, "XP!!!")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallange() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperiece = currentExperience + amount;

    if (finalExperiece >= experienceToNextLevel) {
      finalExperiece = finalExperiece - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperiece);
    setActiveChallenge(null);
    setChallengesCompletedes(challengesCompletedes + 1);
  }

  function resetCookie() {
    setLevel(1);
    setChallengesCompletedes(0);
    setCurrentExperience(0);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengesCompletedes: challengesCompletedes,
      experienceToNextLevel: experienceToNextLevel,
      activeChallenge: activeChallenge,
      levelUp: levelUp,
      startNewChallege: startNewChallege,
      resetChallenge: resetChallenge,
      completeChallange: completeChallange,
      closeLevelUpModel: closeLevelUpModel,
      resetCookie: resetCookie
    },
    children: [children, levelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUoModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 34
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "7Iffu5jmXVn4MdbZyQAh1TDITLQ=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZGVzIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZGVzIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwibGV2ZWxVcE1vZGFsT3BlbiIsInNldExldmVsVXBNb2RhbE9wZW4iLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWUiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kZWwiLCJzdGFydE5ld0NoYWxsZWdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGFuZ2UiLCJmaW5hbEV4cGVyaWVjZSIsInJlc2V0Q29va2llIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUE2QkEsU0FBU0Msa0JBQVQsT0FBNkU7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBakNDLElB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Q0FGLDRCQUF3QixDQUFDRCxxQkFBcUIsR0FBRyxDQUF6QixDQUF4QjtBQUVIOztBQUVELFdBQVNnQyxXQUFULEdBQXVCO0FBQ25CbkMsWUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNBSSw0QkFBd0IsQ0FBQyxDQUFELENBQXhCO0FBQ0FGLHdCQUFvQixDQUFDLENBQUQsQ0FBcEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFDL0JILFdBQUssRUFBTEEsS0FEK0I7QUFFL0JFLHVCQUFpQixFQUFqQkEsaUJBRitCO0FBRy9CRSwyQkFBcUIsRUFBckJBLHFCQUgrQjtBQUkvQk0sMkJBQXFCLEVBQXJCQSxxQkFKK0I7QUFLL0JKLHFCQUFlLEVBQWZBLGVBTCtCO0FBTS9CYSxhQUFPLEVBQVBBLE9BTitCO0FBTy9CRSxzQkFBZ0IsRUFBaEJBLGdCQVArQjtBQVEvQlksb0JBQWMsRUFBZEEsY0FSK0I7QUFTL0JDLHVCQUFpQixFQUFqQkEsaUJBVCtCO0FBVS9CZCx1QkFBaUIsRUFBakJBLGlCQVYrQjtBQVcvQmdCLGlCQUFXLEVBQVhBO0FBWCtCLEtBQW5DO0FBQUEsZUFhS3ZDLFFBYkwsRUFlS1csZ0JBQWdCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBL0ZlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVhN2M3YjY4YjNkNDNiY2I4MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIlxuaW1wb3J0IHsgTGV2ZWxVb01vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleERhdGEpO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZGVzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlcjtcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyOyBcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkZXM6IG51bWJlcjtcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICAgIHN0YXJ0TmV3Q2hhbGxlZ2U6ICgpID0+IHZvaWQ7XG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gICAgY29tcGxldGVDaGFsbGFuZ2U6ICgpID0+IHZvaWQ7XG4gICAgY2xvc2VMZXZlbFVwTW9kZWw6ICgpID0+IHZvaWQ7XG4gICAgcmVzZXRDb29raWU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIgKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbIGxldmVsLCBzZXRMZXZlbCBdID0gdXNlU3RhdGUoIHJlc3QubGV2ZWwgPz8gMSApO1xuICAgIGNvbnN0IFsgY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlIF0gPSB1c2VTdGF0ZSggcmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwICk7XG4gICAgY29uc3QgWyBjaGFsbGVuZ2VzQ29tcGxldGVkZXMsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRlcyBdID0gdXNlU3RhdGUoIHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZGVzID8/IDAgKTtcblxuICAgIGNvbnN0IFsgYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2UgXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgIGxldmVsVXBNb2RhbE9wZW4sIHNldExldmVsVXBNb2RhbE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIENvb2tpZS5zZXQoJ2xldmVsJywgU3RyaW5nKGxldmVsKSk7XG4gICAgICAgIENvb2tpZS5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgICAgIENvb2tpZS5zZXQoJ2NoYWxsZW5nZXNDb21wbGV0ZWRlcycsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkZXMpKTtcbiAgICB9LFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRlc10pO1xuXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gICAgICBzZXRMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGVsKCkge1xuICAgICAgICBzZXRMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZWdlKCkge1xuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCApXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXG5cbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcblxuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PSAgJ2dyYW50ZWQnICkge1xuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvICEhIScsIHtcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9WFAhISFgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxhbmdlKCkge1xuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVjZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50OyAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCBmaW5hbEV4cGVyaWVjZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwgKSB7XG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVjZSA9IGZpbmFsRXhwZXJpZWNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgICAgICAgbGV2ZWxVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllY2UpO1xuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWRlcyhjaGFsbGVuZ2VzQ29tcGxldGVkZXMgKyAxKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Q29va2llKCkge1xuICAgICAgICBzZXRMZXZlbCgxKTtcbiAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZGVzKDApO1xuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZSgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICAgICAgICBsZXZlbCwgXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSwgXG4gICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkZXMsXG4gICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsIFxuICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICAgICAgbGV2ZWxVcCxcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlZ2UsXG4gICAgICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hhbGxhbmdlLFxuICAgICAgICAgICAgY2xvc2VMZXZlbFVwTW9kZWwsXG4gICAgICAgICAgICByZXNldENvb2tpZVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICAgICAge2xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVW9Nb2RhbC8+fVxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9