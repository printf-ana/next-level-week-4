/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/styles/components/Countdown.module.css":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/styles/components/Countdown.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Countdown_countdownContainer__3pqLs {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n  flex: 1 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n  flex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background: var(--blue);\\n  color: var(--white);\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n  transition: background-color 0.2s;\\n}\\n\\n.Countdown_countdownButton__2cSHU:hover {\\n  background: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n  background: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:hover {\\n  background: var(--red);\\n  \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAO;EACP,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;;AAExB\",\"sourcesContent\":[\".countdownContainer {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.countdownContainer > div {\\n  flex: 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.countdownContainer > div span {\\n  flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n  width: 100%;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border: 0;\\n  border-radius: 5px;\\n  background: var(--blue);\\n  color: var(--white);\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n  transition: background-color 0.2s;\\n}\\n\\n.countdownButton:hover {\\n  background: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n  background: var(--white);\\n  color: var(--title);\\n}\\n\\n.countdownButtonActive:hover {\\n  background: var(--red);\\n  \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzJkYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLGdGQUFnRixrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsZ0RBQWdELGNBQWMsa0JBQWtCLHdCQUF3QixrQ0FBa0MsNkJBQTZCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLHFEQUFxRCxjQUFjLEdBQUcsaUVBQWlFLG9DQUFvQyxHQUFHLGdFQUFnRSxtQ0FBbUMsR0FBRyxpREFBaUQsdUJBQXVCLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHFCQUFxQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixxQkFBcUIsc0NBQXNDLEdBQUcsNkNBQTZDLGlDQUFpQyxHQUFHLDZDQUE2Qyw2QkFBNkIsd0JBQXdCLEdBQUcsbURBQW1ELDJCQUEyQixPQUFPLE9BQU8sMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLCtDQUErQyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLFlBQVksa0JBQWtCLHdCQUF3QixrQ0FBa0MsNkJBQTZCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLG9DQUFvQyxZQUFZLEdBQUcsZ0RBQWdELG9DQUFvQyxHQUFHLCtDQUErQyxtQ0FBbUMsR0FBRyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixHQUFHLHNCQUFzQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixxQkFBcUIsc0NBQXNDLEdBQUcsNEJBQTRCLGlDQUFpQyxHQUFHLDRCQUE0Qiw2QkFBNkIsd0JBQXdCLEdBQUcsa0NBQWtDLDJCQUEyQixPQUFPLG1CQUFtQjtBQUNwMEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYge1xcbiAgZmxleDogMSAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDguNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW4ge1xcbiAgZmxleDogMSAxO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2Mge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQU87QUFDVDs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCOztBQUV4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiA4LjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/styles/components/Countdown.module.css\n");

/***/ })

});