"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0 dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst Navbar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 41,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 45,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 49,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 53,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 57,\n                            columnNumber: 35\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.InstagramIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 61,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\",\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 35\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 70\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"Jsm3K56dEzj9VtDgVEBGu1dxC7s=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs0QkFBQ08sV0FBVzs7Ozs7c0RBQWUsOERBQUNOLDRDQUFRQTs0QkFBQ00sV0FBVzs7Ozs7cUNBQWM7Ozs7Ozs7Ozs7OzswQkFLaEcsOERBQUNpQjtnQkFBSWpCLFdBQVU7MEJBQ2YsNEVBQUNmLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0lBckRNbUI7O1FBRWtCUiwrREFBZ0JBOzs7TUFGbENRO0FBdUROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICB7VHdpdHRlckljb24sIEdpdGh1Ykljb24sIExpbmtlZEluSWNvbiwgRHJpYmJibGVJY29uLCBQaW50ZXJlc3RJY29uLCBJbnN0YWdyYW1JY29uLCBTdW5JY29uLCBNb29uSWNvbn0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHVzZVRoZW1lU3dpdGNoZXIgZnJvbSAnLi9ob29rcy91c2VUaGVtZVN3aXRjaGVyJ1xuXG5cbmNvbnN0IEN1c3RvbUxpbmsgPSh7aHJlZix0aXRsZSxjbGFzc05hbWU9XCJcIn0pPT57XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT5cbiAgICAgICAgICAgIHt0aXRsZX1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC1bMXB4XSBpbmxpbmUtYmxvY2sgIGJnLWRhcmsgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41IGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLVt3aWR0aF0gZWFzZSBkdXJhdGlvbi01MDBcbiAgICAgICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnOid3LTAgZGFyazpiZy1saWdodCd9YH0gPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuXG4gICAgY29uc3RbbW9kZSxzZXRNb2RlXT11c2VUaGVtZVN3aXRjaGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1saWdodCc+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiICAgICAgICB0aXRsZT1cIkhvbWVcIiBjbGFzc05hbWU9J21yLTQnLz5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYWJvdXRcIiAgICB0aXRsZT1cIkFib3V0XCIgY2xhc3NOYW1lPSdteC00Jy8+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT0nbXgtNCcvPlxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hcnRpY2xlc1wiICB0aXRsZT1cIkFydGljbGVzXCIgY2xhc3NOYW1lPSdtbC00Jy8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICBcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17J19ibGFuayd9IFxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTowLjl9fSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci0zXCI+PFR3aXR0ZXJJY29uLz48L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXsnX2JsYW5rJ30gXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIj48R2l0aHViSWNvbi8+PC9tb3Rpb24uYT5cbiAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17J19ibGFuayd9ICBcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiPjxMaW5rZWRJbkljb24vPjwvbW90aW9uLmE+XG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9eydfYmxhbmsnfVxuICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiPjxQaW50ZXJlc3RJY29uLz48L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXsnX2JsYW5rJ31cbiAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19XG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIj48RHJpYmJibGVJY29uLz48L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXsnX2JsYW5rJ31cbiAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1sLTNcIj48SW5zdGFncmFtSWNvbi8+PC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gc2V0TW9kZShtb2RlPT09XCJsaWdodFwiP1wiZGFya1wiOlwibGlnaHRcIil9IGNsYXNzTmFtZT0nbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT1cImRhcmtcIj88U3VuSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9Lz46PE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0nPlxuICAgICAgICA8TG9nby8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkxvZ28iLCJ1c2VSb3V0ZXIiLCJUd2l0dGVySWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJEcmliYmJsZUljb24iLCJQaW50ZXJlc3RJY29uIiwiSW5zdGFncmFtSWNvbiIsIlN1bkljb24iLCJNb29uSWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdmJhciIsIm1vZGUiLCJzZXRNb2RlIiwiaGVhZGVyIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});