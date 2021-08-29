"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET,\n    scope: \"read:user\"\n  })],\n  site: process.env.NEXTAUTH_URL,\n  database: process.env.MONGODB_URI + \"nextauth\",\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      session.works = \"works\";\n      return Promise.resolve(session);\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSxnREFBUSxDQUFDO0FBQ3RCO0FBQ0FFLEVBQUFBLFNBQVMsRUFBRSxDQUNURCxpRUFBQSxDQUFpQjtBQUNmRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURQO0FBRWZDLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlgsR0FBakIsQ0FEUyxFQUtUUixpRUFBQSxDQUFpQjtBQUNmRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxTQURQO0FBRWZILElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlNLGFBRlg7QUFHZkMsSUFBQUEsS0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FMUyxDQUZXO0FBYXRCQyxFQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxZQWJJO0FBY3RCQyxFQUFBQSxRQUFRLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxXQUFaLEdBQTBCLFVBZGQ7QUFldEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxPQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7QUFDaENELE1BQUFBLE9BQU8sQ0FBQ0UsRUFBUixHQUFhRCxJQUFJLENBQUNDLEVBQWxCO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csS0FBUixHQUFnQixPQUFoQjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkwsT0FBaEIsQ0FBUDtBQUNEO0FBTFE7QUFmVyxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW52b2lkLW5ld3MtYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXG4gICAgfSksXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCIsXG4gICAgfSksXG4gIF0sXG4gIHNpdGU6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJICsgXCJuZXh0YXV0aFwiLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xuICAgICAgc2Vzc2lvbi5pZCA9IHVzZXIuaWQ7XG4gICAgICBzZXNzaW9uLndvcmtzID0gXCJ3b3Jrc1wiO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiR2l0SHViIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsInNjb3BlIiwic2l0ZSIsIk5FWFRBVVRIX1VSTCIsImRhdGFiYXNlIiwiTU9OR09EQl9VUkkiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlciIsImlkIiwid29ya3MiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();