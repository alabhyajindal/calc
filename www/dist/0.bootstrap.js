(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst btn = document.querySelector('button');\nconst inputA = document.querySelector('#a');\nconst inputB = document.querySelector('#b');\nconst result = document.querySelector('p');\nconst form = document.querySelector('form');\nlet operation = 'multiply';\n\nfunction performOperation() {\n  let valueA = Number(inputA.value);\n  let valueB = Number(inputB.value);\n\n  if (valueA != '' && valueB != '') {\n    const caluculatedResult = operate(valueA, valueB);\n    result.textContent = caluculatedResult;\n  } else {\n    result.textContent = 'Please enter the values you want to add';\n  }\n}\n\nbtn.addEventListener('click', () => {\n  performOperation();\n});\n\nform.addEventListener('click', (e) => {\n  if (e.target.id != '') {\n    operation = e.target.id;\n  }\n});\n\nfunction operate(a, b) {\n  if (operation == 'add') {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(a, b);\n  } else if (operation == 'subtract') {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(a, b);\n  } else if (operation == 'multiply') {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(a, b);\n  } else if (operation == 'divide') {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(a, b);\n  }\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);