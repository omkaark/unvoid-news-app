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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst postSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  author: {\n    type: String,\n    required: true\n  },\n  imgUrl: {\n    type: String,\n    required: true\n  },\n  content: {\n    type: String,\n    required: true\n  },\n  viewCount: {\n    type: Number,\n    default: 0\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  }\n});\nmodule.exports = mongoose.models.Posts || mongoose.model(\"Posts\", postSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBYixDQUFvQjtBQUNyQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMQyxJQUFBQSxRQUFRLEVBQUUsSUFGTDtBQUdMQyxJQUFBQSxNQUFNLEVBQUU7QUFISCxHQUQ4QjtBQU1yQ0MsRUFBQUEsTUFBTSxFQUFFO0FBQ05KLElBQUFBLElBQUksRUFBRUMsTUFEQTtBQUVOQyxJQUFBQSxRQUFRLEVBQUU7QUFGSixHQU42QjtBQVVyQ0csRUFBQUEsTUFBTSxFQUFFO0FBQ05MLElBQUFBLElBQUksRUFBRUMsTUFEQTtBQUVOQyxJQUFBQSxRQUFRLEVBQUU7QUFGSixHQVY2QjtBQWNyQ0ksRUFBQUEsT0FBTyxFQUFFO0FBQ1BOLElBQUFBLElBQUksRUFBRUMsTUFEQztBQUVQQyxJQUFBQSxRQUFRLEVBQUU7QUFGSCxHQWQ0QjtBQWtCckNLLEVBQUFBLFNBQVMsRUFBRTtBQUNUUCxJQUFBQSxJQUFJLEVBQUVRLE1BREc7QUFFVEMsSUFBQUEsT0FBTyxFQUFFO0FBRkEsR0FsQjBCO0FBc0JyQ0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RWLElBQUFBLElBQUksRUFBRVcsSUFERztBQUVURixJQUFBQSxPQUFPLEVBQUVFLElBQUksQ0FBQ0M7QUFGTDtBQXRCMEIsQ0FBcEIsQ0FBbkI7QUE0QkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFFBQVEsQ0FBQ29CLE1BQVQsQ0FBZ0JDLEtBQWhCLElBQXlCckIsUUFBUSxDQUFDc0IsS0FBVCxDQUFlLE9BQWYsRUFBd0JwQixVQUF4QixDQUExQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vudm9pZC1uZXdzLWFwcC8uL21vZGVscy9Qb3N0LmpzPzM4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IHBvc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBhdXRob3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGltZ1VybDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdmlld0NvdW50OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUG9zdHMgfHwgbW9uZ29vc2UubW9kZWwoXCJQb3N0c1wiLCBwb3N0U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJwb3N0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJhdXRob3IiLCJpbWdVcmwiLCJjb250ZW50Iiwidmlld0NvdW50IiwiTnVtYmVyIiwiZGVmYXVsdCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUG9zdHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Post.js\n");

/***/ }),

/***/ "./pages/api/blogs.ts":
/*!****************************!*\
  !*** ./pages/api/blogs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Post = __webpack_require__(/*! ../../models/Post */ \"./models/Post.js\");\n\nif (mongoose.connection.readyState != 1) {\n  mongoose.connect(\"mongodb://localhost:27017/blogs\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  mongoose.connection.once(\"open\", () => {\n    console.log(\"Connected to Database!\");\n  });\n  mongoose.connection.on(\"error\", error => {\n    console.log(\"Database connection error:\", error);\n  });\n  mongoose.connection.on(\"disconnected\", () => {\n    console.log(\"Database disconnected\");\n  });\n}\n\nasync function handler(req, res) {\n  let session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n\n  try {\n    if (req.method == \"GET\") {\n      const posts = await Post.find().skip(0).limit(10);\n      res.json(posts);\n    }\n  } catch (e) {\n    res.status(404).json({\n      error: e\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYmxvZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLDJDQUFELENBQXBCOztBQUVBLElBQUlELFFBQVEsQ0FBQ0csVUFBVCxDQUFvQkMsVUFBcEIsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDdkNKLEVBQUFBLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQixpQ0FBakIsRUFBb0Q7QUFDbERDLElBQUFBLGVBQWUsRUFBRSxJQURpQztBQUVsREMsSUFBQUEsa0JBQWtCLEVBQUU7QUFGOEIsR0FBcEQ7QUFJQVAsRUFBQUEsUUFBUSxDQUFDRyxVQUFULENBQW9CSyxJQUFwQixDQUF5QixNQUF6QixFQUFpQyxNQUFNO0FBQ3JDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEdBRkQ7QUFHQVYsRUFBQUEsUUFBUSxDQUFDRyxVQUFULENBQW9CUSxFQUFwQixDQUF1QixPQUF2QixFQUFpQ0MsS0FBRCxJQUFXO0FBQ3pDSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0UsS0FBMUM7QUFDRCxHQUZEO0FBR0FaLEVBQUFBLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQlEsRUFBcEIsQ0FBdUIsY0FBdkIsRUFBdUMsTUFBTTtBQUMzQ0YsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxHQUZEO0FBR0Q7O0FBRWMsZUFBZUcsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxNQUFNakIsNERBQVUsQ0FBQztBQUFFZSxJQUFBQTtBQUFGLEdBQUQsQ0FBOUI7O0FBQ0EsTUFBSTtBQUNGLFFBQUlBLEdBQUcsQ0FBQ0csTUFBSixJQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCLFlBQU1DLEtBQUssR0FBRyxNQUFNaEIsSUFBSSxDQUFDaUIsSUFBTCxHQUFZQyxJQUFaLENBQWlCLENBQWpCLEVBQW9CQyxLQUFwQixDQUEwQixFQUExQixDQUFwQjtBQUNBTixNQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBU0osS0FBVDtBQUNEO0FBQ0YsR0FMRCxDQUtFLE9BQU9LLENBQVAsRUFBVTtBQUNWUixJQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUNuQlYsTUFBQUEsS0FBSyxFQUFFVztBQURZLEtBQXJCO0FBR0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Vudm9pZC1uZXdzLWFwcC8uL3BhZ2VzL2FwaS9ibG9ncy50cz9lNTBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgUG9zdCA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvUG9zdFwiKTtcblxuaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSAhPSAxKSB7XG4gIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2Jsb2dzXCIsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB9KTtcbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKFwib3BlblwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gRGF0YWJhc2UhXCIpO1xuICB9KTtcbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImVycm9yXCIsIChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICB9KTtcbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImRpc2Nvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBkaXNjb25uZWN0ZWRcIik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgdHJ5IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PSBcIkdFVFwiKSB7XG4gICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCgpLnNraXAoMCkubGltaXQoMTApO1xuICAgICAgcmVzLmpzb24ocG9zdHMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgIGVycm9yOiBlLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIlBvc3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJvbmNlIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXJyb3IiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsIm1ldGhvZCIsInBvc3RzIiwiZmluZCIsInNraXAiLCJsaW1pdCIsImpzb24iLCJlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/blogs.ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/blogs.ts"));
module.exports = __webpack_exports__;

})();