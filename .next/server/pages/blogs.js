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
exports.id = "pages/blogs";
exports.ids = ["pages/blogs"];
exports.modules = {

/***/ "./pages/blogs.tsx":
/*!*************************!*\
  !*** ./pages/blogs.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Blogs.module.scss */ \"./styles/Blogs.module.scss\");\n/* harmony import */ var _styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/omkaar/Desktop/Projects/unvoid-news-app/pages/blogs.tsx\";\n\n\n\n\n\n/* @ts-ignore */\n\nconst Blogs = ({\n  posts\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    if (session === null) {\n      router.push(\"/\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Blogs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"News that gets you thinking big\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().posts),\n      children: [session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\"Signed in as \", session.user.name || \"Who\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 54\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signOut)(),\n          children: \"Sign out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true), posts ? posts.map((post, idx) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogPreviewContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image),\n            src: post.imgUrl,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 19\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              children: [\"By \", post.author]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: [post.content.substring(0, 400), \"...\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 21\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 19\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, undefined);\n      }) : \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Blogs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().createPostSection),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: e => {\n          router.push(\"/create\");\n          e.preventDefault();\n        },\n        children: \"Create Post\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps(context) {\n  const res = await fetch(\"http://localhost:3000/api/blogs\");\n  const posts = await res.json();\n  return {\n    props: {\n      session: await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.getSession)(context),\n      posts: posts\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXZCO0FBQ0EsUUFBTXhCLEtBQUssR0FBRyxNQUFNdUIsR0FBRyxDQUFDRSxJQUFKLEVBQXBCO0FBQ0EsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTHhCLE1BQUFBLE9BQU8sRUFBRSxNQUFNTiw0REFBVSxDQUFDMEIsT0FBRCxDQURwQjtBQUVMdEIsTUFBQUEsS0FBSyxFQUFFQTtBQUZGO0FBREYsR0FBUDtBQU1EO0FBRUQsaUVBQWVELEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnZvaWQtbmV3cy1hcHAvLi9wYWdlcy9ibG9ncy50c3g/M2E1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Jsb2dzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbi8qIEB0cy1pZ25vcmUgKi9cbmNvbnN0IEJsb2dzOiBOZXh0UGFnZSA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vzc2lvbiA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmV3cyB0aGF0IGdldHMgeW91IHRoaW5raW5nIGJpZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxuICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFNpZ25lZCBpbiBhcyB7LyogQHRzLWlnbm9yZSAqL31cbiAgICAgICAgICAgIHsoc2Vzc2lvbi51c2VyLm5hbWUgYXMgU3RyaW5nKSB8fCBcIldob1wifSA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7cG9zdHNcbiAgICAgICAgICA/IHBvc3RzLm1hcCgocG9zdCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e3N0eWxlcy5ibG9nUHJldmlld0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e3Bvc3QuaW1nVXJsfSBhbHQ9XCJcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Qnkge3Bvc3QuYXV0aG9yfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDQwMCl9Li4uPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVQb3N0U2VjdGlvbn0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY3JlYXRlXCIpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9nc1wiKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZXNzaW9uOiBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpLFxuICAgICAgcG9zdHM6IHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJnZXRTZXNzaW9uIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJCbG9ncyIsInBvc3RzIiwicm91dGVyIiwic2Vzc2lvbiIsImxvYWRpbmciLCJwdXNoIiwiY29udGFpbmVyIiwidXNlciIsIm5hbWUiLCJtYXAiLCJwb3N0IiwiaWR4IiwiYmxvZ1ByZXZpZXdDb250YWluZXIiLCJpbWFnZSIsImltZ1VybCIsInRpdGxlIiwiYXV0aG9yIiwiY29udGVudCIsInN1YnN0cmluZyIsImNyZWF0ZVBvc3RTZWN0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs.tsx\n");

/***/ }),

/***/ "./styles/Blogs.module.scss":
/*!**********************************!*\
  !*** ./styles/Blogs.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Blogs_container__ISow6\",\n\t\"posts\": \"Blogs_posts__1bTpq\",\n\t\"createPostSection\": \"Blogs_createPostSection__1O7Nt\",\n\t\"blogPreviewContainer\": \"Blogs_blogPreviewContainer__2tXYB\",\n\t\"image\": \"Blogs_image__3MUj0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ3MubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Vudm9pZC1uZXdzLWFwcC8uL3N0eWxlcy9CbG9ncy5tb2R1bGUuc2Nzcz80Y2JhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJsb2dzX2NvbnRhaW5lcl9fSVNvdzZcIixcblx0XCJwb3N0c1wiOiBcIkJsb2dzX3Bvc3RzX18xYlRwcVwiLFxuXHRcImNyZWF0ZVBvc3RTZWN0aW9uXCI6IFwiQmxvZ3NfY3JlYXRlUG9zdFNlY3Rpb25fXzFPN050XCIsXG5cdFwiYmxvZ1ByZXZpZXdDb250YWluZXJcIjogXCJCbG9nc19ibG9nUHJldmlld0NvbnRhaW5lcl9fMnRYWUJcIixcblx0XCJpbWFnZVwiOiBcIkJsb2dzX2ltYWdlX18zTVVqMFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Blogs.module.scss\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blogs.tsx"));
module.exports = __webpack_exports__;

})();