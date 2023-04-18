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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300\\n            \".concat(router.asPath === href ? \"w-full\" : \"w-0 \", \"\\n            dark:bg-light\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst Navbar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between  dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" flex-col item-center justify-center hidden lg;flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-in-out  h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-in-out  h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block  transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 54,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 58,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 62,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3 bg-light rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 56\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 70,\n                            columnNumber: 35\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.InstagramIcon, {}, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 74,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1 \".concat(mode == \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 79,\n                            columnNumber: 35\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                            lineNumber: 79,\n                            columnNumber: 70\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/components/NavBar.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"f1k61DI23yQcO9xBeylSgzAYbZI=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsR0FBRSxDQUFDO3dCQUFDO3dCQUNsQkMsVUFBVTs0QkFBQ0MsT0FBTTt3QkFBRzt3QkFDbkJuQixXQUFVO2tDQUFXLDRFQUFDVixnREFBWUE7Ozs7Ozs7Ozs7a0NBQ25DLDhEQUFDSyxtREFBUTt3QkFBQ0csTUFBSzt3QkFBc0JpQixRQUFRO3dCQUM1Q0MsWUFBWTs0QkFBQ0MsR0FBRSxDQUFDO3dCQUFDO3dCQUNsQkMsVUFBVTs0QkFBQ0MsT0FBTTt3QkFBRzt3QkFDcEJuQixXQUFVO2tDQUFXLDRFQUFDUixpREFBYUE7Ozs7Ozs7Ozs7a0NBRW5DLDhEQUFDbUI7d0JBQ0RDLFNBQVMsSUFBS04sUUFBUUQsU0FBTyxVQUFRLFNBQU8sT0FBTzt3QkFBR0wsV0FBVywwREFBa0gsT0FBeERLLFFBQU0sVUFBUSx1QkFBcUIsb0JBQW9CO2tDQUUxS0EsU0FBTyx1QkFBTyw4REFBQ1osMkNBQU9BOzRCQUFDTyxXQUFXOzs7OztzREFBZSw4REFBQ04sNENBQVFBOzRCQUFDTSxXQUFXOzs7OztxQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUtoRyw4REFBQ29CO2dCQUFJcEIsV0FBVTswQkFDZiw0RUFBQ2YsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7SUFqRU1tQjs7UUFFa0JSLCtEQUFnQkE7OztNQUZsQ1E7QUFtRU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAge1R3aXR0ZXJJY29uLCBHaXRodWJJY29uLCBMaW5rZWRJbkljb24sIERyaWJiYmxlSWNvbiwgUGludGVyZXN0SWNvbiwgSW5zdGFncmFtSWNvbiwgU3VuSWNvbiwgTW9vbkljb259IGZyb20gJy4vSWNvbnMnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB1c2VUaGVtZVN3aXRjaGVyIGZyb20gJy4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlcidcblxuXG5jb25zdCBDdXN0b21MaW5rID0oe2hyZWYsdGl0bGUsY2xhc3NOYW1lPVwiXCJ9KT0+e1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICAgICAgICB7dGl0bGV9XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGgtWzFweF0gaW5saW5lLWJsb2NrICBiZy1kYXJrIGFic29sdXRlIGxlZnQtMCAtYm90dG9tLTAuNSBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1bd2lkdGhdIGVhc2UgZHVyYXRpb24tMzAwXG4gICAgICAgICAgICAke3JvdXRlci5hc1BhdGggPT09IGhyZWYgPyAndy1mdWxsJzondy0wICd9XG4gICAgICAgICAgICBkYXJrOmJnLWxpZ2h0YH0gPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuXG4gICAgY29uc3RbbW9kZSxzZXRNb2RlXT11c2VUaGVtZVN3aXRjaGVyKCk7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSgpPT57XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtMzIgcHktOCBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gIGRhcms6dGV4dC1saWdodCc+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBmbGV4LWNvbCBpdGVtLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoaWRkZW4gbGc7ZmxleCcgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAgaC0wLjUgdy02IHJvdW5kZWQtc20gICR7aXNPcGVuID8ncm90YXRlLTQ1IHRyYW5zbGF0ZS15LTEnOictdHJhbnNsYXRlLXktMC41J31gfT48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICBoLTAuNSB3LTYgcm91bmRlZC1zbSBteS0wLjUgJHtpc09wZW4/J29wYWNpdHktMCc6J29wYWNpdHktMTAwJ31gfT48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgYmxvY2sgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSAgJHtpc09wZW4gPyctcm90YXRlLTQ1IC10cmFuc2xhdGUteS0xJzondHJhbnNsYXRlLXktMC41J31gfT48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiAgICAgICAgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPSdtci00Jy8+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgICAgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT0nbXgtNCcvPlxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHRpdGxlPVwiUHJvamVjdHNcIiBjbGFzc05hbWU9J214LTQnLz5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiAgdGl0bGU9XCJBcnRpY2xlc1wiIGNsYXNzTmFtZT0nbWwtNCcvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICA8L25hdj5cbiAgICAgICAgXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9eydfYmxhbmsnfSBcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItM1wiPjxUd2l0dGVySWNvbi8+PC9tb3Rpb24uYT5cbiAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17J19ibGFuayd9IFxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTowLjl9fSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCI+PEdpdGh1Ykljb24vPjwvbW90aW9uLmE+XG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9eydfYmxhbmsnfSAgXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTNcIj48TGlua2VkSW5JY29uLz48L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXsnX2JsYW5rJ31cbiAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG14LTMgYmctbGlnaHQgcm91bmRlZC1mdWxsXCI+PFBpbnRlcmVzdEljb24vPjwvbW90aW9uLmE+XG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9eydfYmxhbmsnfVxuICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiPjxEcmliYmJsZUljb24vPjwvbW90aW9uLmE+XG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9eydfYmxhbmsnfVxuICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbWwtM1wiPjxJbnN0YWdyYW1JY29uLz48L21vdGlvbi5hPlxuXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCk9PiBzZXRNb2RlKG1vZGU9PT1cImxpZ2h0XCI/XCJkYXJrXCI6XCJsaWdodFwiKX0gY2xhc3NOYW1lPXtgbWwtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgcC0xICR7bW9kZT09XCJsaWdodFwiP1wiYmctZGFyayB0ZXh0LWxpZ2h0XCI6XCJiZy1saWdodCB0ZXh0LWRhcmtcIn1gfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT1cImRhcmtcIj88U3VuSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9Lz46PE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0nPlxuICAgICAgICA8TG9nby8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTG9nbyIsInVzZVJvdXRlciIsIlR3aXR0ZXJJY29uIiwiR2l0aHViSWNvbiIsIkxpbmtlZEluSWNvbiIsIkRyaWJiYmxlSWNvbiIsIlBpbnRlcmVzdEljb24iLCJJbnN0YWdyYW1JY29uIiwiU3VuSWNvbiIsIk1vb25JY29uIiwibW90aW9uIiwidXNlVGhlbWVTd2l0Y2hlciIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2YmFyIiwibW9kZSIsInNldE1vZGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});