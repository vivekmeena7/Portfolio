"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./public/images/articles/form validation in reactjs using custom react hook.png":
/*!***************************************************************************************!*\
  !*** ./public/images/articles/form validation in reactjs using custom react hook.png ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/form validation in reactjs using custom react hook.b1a35b31.png\",\"height\":720,\"width\":1280,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fform+validation+in+reactjs+using+custom+react+hook.b1a35b31.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":5});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2Zvcm0gdmFsaWRhdGlvbiBpbiByZWFjdGpzIHVzaW5nIGN1c3RvbSByZWFjdCBob29rLnBuZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQyx5UkFBeVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9mb3JtIHZhbGlkYXRpb24gaW4gcmVhY3RqcyB1c2luZyBjdXN0b20gcmVhY3QgaG9vay5wbmc/Njc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvZm9ybSB2YWxpZGF0aW9uIGluIHJlYWN0anMgdXNpbmcgY3VzdG9tIHJlYWN0IGhvb2suYjFhMzViMzEucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGZm9ybSt2YWxpZGF0aW9uK2luK3JlYWN0anMrdXNpbmcrY3VzdG9tK3JlYWN0K2hvb2suYjFhMzViMzEucG5nJnc9OCZxPTcwXCIsXCJibHVyV2lkdGhcIjo4LFwiYmx1ckhlaWdodFwiOjV9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/articles/form validation in reactjs using custom react hook.png\n"));

/***/ }),

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/pagination component in reactjs.jpg */ \"./public/images/articles/pagination component in reactjs.jpg\");\n/* harmony import */ var _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading screen in react js.jpg */ \"./public/images/articles/create loading screen in react js.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_form_validation_in_reactjs_using_custom_react_hook_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/form validation in reactjs using custom react hook.png */ \"./public/images/articles/form validation in reactjs using custom react hook.png\");\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst Article = (param)=>{\n    let { img , title , date , ink  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Article;\nconst FeaturedArticles = (param)=>{\n    let { img , title , time , summary , link: link1  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"col-span-1 w-full p-4 bg-light border relative border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl\"\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 31,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link1,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 32,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link1,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2  mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-bold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = FeaturedArticles;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Vivek Meena | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticles, {\n                                    title: \"Build A Custom Pagination Component In Reactjs From Scratch\",\n                                    summary: \"Learn how to build a custom pagination component in ReactJS from scratch.  Follow this step-by-step guide to integrate Pagination component in your ReactJS project.\",\n                                    time: \"9 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_pagination_component_in_reactjs_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticles, {\n                                    title: \"Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens\",\n                                    summary: \"Learn how to create stunning loading screens in React with 3 different methods.  Discover how to use React-Loading, React-Lottie & build a custom loading screen.  Improve the user experience.\",\n                                    time: \"10 min read\",\n                                    link: \"/\",\n                                    img: _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling\",\n                                date: \" March 22, 2023\",\n                                link: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vivekmeena/Documents/NExt/src/pages/articles.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"Article\");\n$RefreshReg$(_c2, \"FeaturedArticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1o7QUFDWjtBQUNFO0FBQ0Y7QUFDSDtBQUM2RDtBQUNFO0FBQ3JEO0FBQ3VFO0FBRzFHLE1BQU1VLGNBQWNGLHNEQUFNQSxDQUFDTCxtREFBS0E7S0FBMUJPO0FBR04sTUFBTUMsVUFBUyxTQUF3QjtRQUF2QixFQUFDQyxJQUFHLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFDQyxJQUFHLEVBQUM7SUFDaEMscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ1osa0RBQUlBO2dCQUFDYSxNQUFNQztnQkFBTUMsUUFBTzswQkFDcEJOOzs7Ozs7MEJBRUwsOERBQUNPOzBCQUFNTjs7Ozs7Ozs7Ozs7O0FBR25CO01BVE1IO0FBWU4sTUFBTVUsbUJBQWlCLFNBQWlDO1FBQWhDLEVBQUNULElBQUcsRUFBQ0MsTUFBSyxFQUFDUyxLQUFJLEVBQUNDLFFBQU8sRUFBQ0wsTUFBQUEsTUFBSSxFQUFDO0lBQ2pELHFCQUNJLDhEQUFDRjtRQUFHUSxXQUFVOzswQkFDVCw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ3BCLGtEQUFJQTtnQkFBQ2EsTUFBTUM7Z0JBQU1DLFFBQU87Z0JBQVNLLFdBQVU7MEJBQ3pDLDRFQUFDZDtvQkFBWWdCLEtBQUtkO29CQUFLZSxLQUFLZDtvQkFBT1csV0FBVTtvQkFDN0NJLFlBQVk7d0JBQUNDLE9BQU07b0JBQUk7b0JBQ3ZCQyxZQUFZO3dCQUFDQyxVQUFTO29CQUFHOzs7Ozs7Ozs7OzswQkFHekIsOERBQUMzQixrREFBSUE7Z0JBQUNhLE1BQU1DO2dCQUFNQyxRQUFPOzBCQUNyQiw0RUFBQ2E7b0JBQUdSLFdBQVU7OEJBQTREWDs7Ozs7Ozs7Ozs7MEJBRTlFLDhEQUFDb0I7Z0JBQUVULFdBQVU7MEJBQ1JEOzs7Ozs7MEJBRUwsOERBQUNIO2dCQUFLSSxXQUFVOzBCQUNYRjs7Ozs7Ozs7Ozs7O0FBSXJCO01BckJNRDtBQXVCTixNQUFNYSxXQUFXLElBQU07SUFDckIscUJBQ0U7OzBCQUNJLDhEQUFDaEMsa0RBQUlBOztrQ0FDTCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ3NCO3dCQUFLQyxNQUFLO3dCQUFhQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQztnQkFBS2QsV0FBVTswQkFDWiw0RUFBQ3ZCLDBEQUFNQTtvQkFBQ3VCLFdBQVU7O3NDQUNkLDhEQUFDeEIsZ0VBQVlBOzRCQUFDdUMsTUFBSzs0QkFBOEJmLFdBQVU7Ozs7OztzQ0FDM0QsOERBQUNnQjs0QkFBR2hCLFdBQVU7OzhDQUNWLDhEQUFDSDtvQ0FDRFIsT0FBTTtvQ0FDTlUsU0FBUTtvQ0FFUkQsTUFBSztvQ0FDTEosTUFBSztvQ0FDTE4sS0FBS04sbUdBQVFBOzs7Ozs7OENBSWIsOERBQUNlO29DQUNEUixPQUFNO29DQUNOVSxTQUFRO29DQUdSRCxNQUFLO29DQUNMSixNQUFLO29DQUNMTixLQUFLTCxxR0FBUUE7Ozs7Ozs7Ozs7OztzQ0FJakIsOERBQUN5Qjs0QkFBR1IsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FHbEUsOERBQUNnQjtzQ0FDRyw0RUFBQzdCO2dDQUNERSxPQUFNO2dDQUNOQyxNQUFLO2dDQUNMSSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekI7QUFFQSwrREFBZWdCLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXJ0aWNsZTEgZnJvbVwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9wYWdpbmF0aW9uIGNvbXBvbmVudCBpbiByZWFjdGpzLmpwZ1wiXG5pbXBvcnQgYXJ0aWNsZTIgZnJvbVwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9jcmVhdGUgbG9hZGluZyBzY3JlZW4gaW4gcmVhY3QganMuanBnXCJcbmltcG9ydCB7bW90aW9ufWZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBhcnRpY2xlMyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9hcnRpY2xlcy9mb3JtIHZhbGlkYXRpb24gaW4gcmVhY3RqcyB1c2luZyBjdXN0b20gcmVhY3QgaG9vay5wbmdcIlxuXG5cbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcblxuXG5jb25zdCBBcnRpY2xlID0oe2ltZyx0aXRsZSxkYXRlLGlua30pPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5cbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZXM9KHtpbWcsdGl0bGUsdGltZSxzdW1tYXJ5LGxpbmt9KT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nY29sLXNwYW4tMSB3LWZ1bGwgcC00IGJnLWxpZ2h0IGJvcmRlciByZWxhdGl2ZSBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGwnPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDElXSBoLVsxMDMlXSByb3VuZGVkLVsyLjVyZW1dIGJnLWRhcmsgcm91bmRlZC1ici0zeGwnLz5cbiAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9J3ctZnVsbCBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgIDxGcmFtZXJJbWFnZSBzcmM9e2ltZ30gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1hdXRvJ1xuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tzY2FsZToxLjA1fX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC4yfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSB0ZXh0LTJ4bCBmb250LWJvbGQgbXktMiAgbXQtNCBob3Zlcjp1bmRlcmxpbmUnPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gbWItMic+XG4gICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBmb250LWJvbGQnPlxuICAgICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5jb25zdCBhcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpdmVrIE1lZW5hIHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJ2NvbnRlbnQ9J2FueSBkZXNjcmlwdGlvbicvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0ndy1mdWxsIG1iLTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTYnPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDaGFuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT0nbWItMTYgJy8+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTYnPlxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlc1xuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJ1aWxkIEEgQ3VzdG9tIFBhZ2luYXRpb24gQ29tcG9uZW50IEluIFJlYWN0anMgRnJvbSBTY3JhdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeT1cIkxlYXJuIGhvdyB0byBidWlsZCBhIGN1c3RvbSBwYWdpbmF0aW9uIGNvbXBvbmVudCBpbiBSZWFjdEpTIGZyb20gc2NyYXRjaC4gXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB0aGlzIHN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnRlZ3JhdGUgUGFnaW5hdGlvbiBjb21wb25lbnQgaW4geW91ciBSZWFjdEpTIHByb2plY3QuXCJcbiAgICAgICAgICAgICAgICAgICAgdGltZT1cIjkgbWluIHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTF9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZXMgXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRpbmcgU3R1bm5pbmcgTG9hZGluZyBTY3JlZW5zIEluIFJlYWN0OiBCdWlsZCAzIFR5cGVzIE9mIExvYWRpbmcgU2NyZWVuc1wiXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk9XCJMZWFybiBob3cgdG8gY3JlYXRlIHN0dW5uaW5nIGxvYWRpbmcgc2NyZWVucyBpbiBSZWFjdCB3aXRoIDMgZGlmZmVyZW50IG1ldGhvZHMuIFxuICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBob3cgdG8gdXNlIFJlYWN0LUxvYWRpbmcsIFJlYWN0LUxvdHRpZSAmIGJ1aWxkIGEgY3VzdG9tIGxvYWRpbmcgc2NyZWVuLiBcbiAgICAgICAgICAgICAgICAgICAgSW1wcm92ZSB0aGUgdXNlciBleHBlcmllbmNlLlwiXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW4gcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC00eGwgdy1mdWxsIHRleHQtY2VudGVyIG15LTE2IG10LTMyJz5cbiAgICAgICAgICAgICAgICAgICAgQWxsIEFydGljbGVzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcm0gVmFsaWRhdGlvbiBJbiBSZWFjdGpzOiBCdWlsZCBBIFJldXNhYmxlIEN1c3RvbSBIb29rIEZvciBJbnB1dHMgQW5kIEVycm9yIEhhbmRsaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIiBNYXJjaCAyMiwgMjAyM1wiXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L21haW4+XG4gICAgXG4gICAgXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXNcbiJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJhcnRpY2xlMSIsImFydGljbGUyIiwibW90aW9uIiwiYXJ0aWNsZTMiLCJGcmFtZXJJbWFnZSIsIkFydGljbGUiLCJpbWciLCJ0aXRsZSIsImRhdGUiLCJpbmsiLCJsaSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0Iiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZXMiLCJ0aW1lIiwic3VtbWFyeSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImgyIiwicCIsImFydGljbGVzIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsInRleHQiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});