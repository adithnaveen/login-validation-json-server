/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/actions.js":
/*!***************************!*\
  !*** ./script/actions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.registerUserAction = (url, obj) => {\n    fetch(url, {\n        method:\"POST\",\n        body : JSON.stringify(obj),\n        headers: {\n            \"Content-Type\" :\"application/json\"\n        }\n    })\n        .then(resp => resp.json())\n        .then(data =>  {\n            console.log(data)\n            window.location.href = \"../index.html\"\n        })\n        .catch(err => console.error(\"Error Registring \" + err));\n\n}\n\n//# sourceURL=webpack://app/./script/actions.js?");

/***/ }),

/***/ "./script/app.js":
/*!***********************!*\
  !*** ./script/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { registerUserAction } = __webpack_require__(/*! ./actions */ \"./script/actions.js\");\nconst {sayHi, validateRegisterUser} = __webpack_require__(/*! ./util */ \"./script/util.js\");\n\n\nconst initApp = () => {\n    const registerBtn = document.querySelector(\"#regBtn\"); \n    registerBtn.addEventListener(\"click\", registerUser);\n}\n\nconst registerUser = (event) => {\n    event.preventDefault()\n    console.log(\"i'm in registeruser\");\n    \n    let obj = {}\n    obj.userName = document.querySelector(\"#user-name\").value\n    obj.email = document.querySelector(\"#email\").value; \n    obj.password = document.querySelector(\"#password\").value;\n\n    if(!validateRegisterUser(obj))\n        return false; \n    \n    registerUserAction(\"http://localhost:3000/users\", obj);\n}\n\ninitApp()\n\n//# sourceURL=webpack://app/./script/app.js?");

/***/ }),

/***/ "./script/util.js":
/*!************************!*\
  !*** ./script/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.sayHi = (name) => {\n    return \"hi \" + name\n}\n\nexports.validateRegisterUser = (registerObj) => {\n    console.log(registerObj);\n    return registerObj.userName.length>6;\n}\n\n//# sourceURL=webpack://app/./script/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/app.js");
/******/ 	
/******/ })()
;