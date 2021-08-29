/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_MainLogin_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/MainLogin.module.scss */ \"./styles/MainLogin.module.scss\");\n/* harmony import */ var _styles_MainLogin_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MainLogin_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/omkaar/Desktop/Projects/unvoid-news-app/pages/index.tsx\";\n\n\n\n\n\n\n\nconst Home = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n    if (session !== null) {\n      router.push(\"/blogs\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_MainLogin_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Join UNVOID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"News that gets you thinking big\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_MainLogin_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loginContainer),\n      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\"Not signed in \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 27\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"google\", {\n            callbackUrl: process.env.NEXTAUTH_URL\n          }),\n          children: \"Sign in google\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"github\", {\n            callbackUrl: process.env.NEXTAUTH_URL\n          }),\n          children: \"Sign in github\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\"Signed in as \", session.user.name || \"Who\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 54\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n          children: \"Sign out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps(ctx) {\n  return {\n    props: {\n      session: await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)(ctx)\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVEsSUFBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ1MsT0FBRCxFQUFVQyxPQUFWLElBQXFCTiw0REFBVSxFQUFyQztBQUNBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJSSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJELE1BQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVYsZ0ZBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssZUFBUyxFQUFFQSxxRkFBaEI7QUFBQSxpQkFDRyxDQUFDUSxPQUFELGlCQUNDO0FBQUEsa0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGhCLGVBRUU7QUFDRSxpQkFBTyxFQUFFLE1BQ1BQLHdEQUFNLENBQUMsUUFBRCxFQUFXO0FBQUVZLFlBQUFBLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQTNCLFdBQVgsQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVNFO0FBQ0UsaUJBQU8sRUFBRSxNQUNQZix3REFBTSxDQUFDLFFBQUQsRUFBVztBQUFFWSxZQUFBQSxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUEzQixXQUFYLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQSxzQkFGSixFQW9CR1IsT0FBTyxpQkFDTjtBQUFBLG9DQUVJQSxPQUFPLENBQUNTLElBQVIsQ0FBYUMsSUFBZCxJQUFpQyxLQUZwQyxvQkFFMkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGM0MsZUFHRTtBQUFRLGlCQUFPLEVBQUUsTUFBTWhCLHlEQUFPLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUEsc0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDRCxDQTdDRDs7QUErQ08sZUFBZWlCLGtCQUFmLENBQWtDQyxHQUFsQyxFQUF1QztBQUM1QyxTQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBRTtBQUNMYixNQUFBQSxPQUFPLEVBQUUsTUFBTUgsNERBQVUsQ0FBQ2UsR0FBRDtBQURwQjtBQURGLEdBQVA7QUFLRDtBQUVELGlFQUFlZCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW52b2lkLW5ld3MtYXBwLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW5Mb2dpbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9ibG9nc1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkpvaW4gVU5WT0lEPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5ld3MgdGhhdCBnZXRzIHlvdSB0aGlua2luZyBiaWdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQ29udGFpbmVyfT5cbiAgICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBzaWduSW4oXCJnb29nbGVcIiwgeyBjYWxsYmFja1VybDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBpbiBnb29nbGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHNpZ25JbihcImdpdGh1YlwiLCB7IGNhbGxiYWNrVXJsOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIGluIGdpdGh1YlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgU2lnbmVkIGluIGFzIHsvKiBAdHMtaWdub3JlICovfVxuICAgICAgICAgICAgeyhzZXNzaW9uLnVzZXIubmFtZSBhcyBTdHJpbmcpIHx8IFwiV2hvXCJ9IDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlc3Npb246IGF3YWl0IGdldFNlc3Npb24oY3R4KSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJIb21lIiwicm91dGVyIiwic2Vzc2lvbiIsImxvYWRpbmciLCJwdXNoIiwiY29udGFpbmVyIiwibG9naW5Db250YWluZXIiLCJjYWxsYmFja1VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJ1c2VyIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/MainLogin.module.scss":
/*!**************************************!*\
  !*** ./styles/MainLogin.module.scss ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"MainLogin_container__1NT95\",\n\t\"loginContainer\": \"MainLogin_loginContainer__tr6xA\",\n\t\"login\": \"MainLogin_login__1bMEA\",\n\t\"signup\": \"MainLogin_signup__1aNQ6\",\n\t\"google\": \"MainLogin_google__1bj0K\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTWFpbkxvZ2luLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnZvaWQtbmV3cy1hcHAvLi9zdHlsZXMvTWFpbkxvZ2luLm1vZHVsZS5zY3NzPzcwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTWFpbkxvZ2luX2NvbnRhaW5lcl9fMU5UOTVcIixcblx0XCJsb2dpbkNvbnRhaW5lclwiOiBcIk1haW5Mb2dpbl9sb2dpbkNvbnRhaW5lcl9fdHI2eEFcIixcblx0XCJsb2dpblwiOiBcIk1haW5Mb2dpbl9sb2dpbl9fMWJNRUFcIixcblx0XCJzaWdudXBcIjogXCJNYWluTG9naW5fc2lnbnVwX18xYU5RNlwiLFxuXHRcImdvb2dsZVwiOiBcIk1haW5Mb2dpbl9nb29nbGVfXzFiajBLXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/MainLogin.module.scss\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();