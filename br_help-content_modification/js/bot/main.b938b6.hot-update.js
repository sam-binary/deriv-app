webpackHotUpdatederiv_bot("main",{

/***/ "./src/scratch/help-content/help-string lazy recursive ^\\.\\/.*\\.json$":
/*!***********************************************************************************!*\
  !*** ./src/scratch/help-content/help-string lazy ^\.\/.*\.json$ namespace object ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./math_arithmetic.json": [
		"./src/scratch/help-content/help-string/math_arithmetic.json",
		3,
		0
	],
	"./math_change.json": [
		"./src/scratch/help-content/help-string/math_change.json",
		3,
		1
	],
	"./math_number.json": [
		"./src/scratch/help-content/help-string/math_number.json",
		3,
		2
	],
	"./math_random_float.json": [
		"./src/scratch/help-content/help-string/math_random_float.json",
		3,
		3
	],
	"./math_random_int.json": [
		"./src/scratch/help-content/help-string/math_random_int.json",
		3,
		4
	],
	"./procedures_defnoreturn.json": [
		"./src/scratch/help-content/help-string/procedures_defnoreturn.json",
		7,
		6
	],
	"./variables_get.json": [
		"./src/scratch/help-content/help-string/variables_get.json",
		3,
		5
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[2]).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/scratch/help-content/help-string lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=main.b938b6.hot-update.js.map