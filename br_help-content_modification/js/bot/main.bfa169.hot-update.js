webpackHotUpdatederiv_bot("main",{

/***/ "./src/scratch/hooks/toolbox.js":
/*!**************************************!*\
  !*** ./src/scratch/hooks/toolbox.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/samyong/Documents/Source_code/deriv-app/packages/bot/src/scratch/hooks/toolbox.js: Identifier 'search_term' has already been declared (66:10)\n\n\u001b[0m \u001b[90m 64 | \u001b[39m\u001b[33mBlockly\u001b[39m\u001b[33m.\u001b[39m\u001b[33mToolbox\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mshowSearch_ \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m (search_term) {\u001b[0m\n\u001b[0m \u001b[90m 65 | \u001b[39m    let flyout_content \u001b[33m=\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 66 | \u001b[39m    \u001b[36mconst\u001b[39m search_term \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'search_input'\u001b[39m)\u001b[33m.\u001b[39mvalue\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 67 | \u001b[39m    \u001b[36mconst\u001b[39m all_variables \u001b[33m=\u001b[39m \u001b[33mBlockly\u001b[39m\u001b[33m.\u001b[39mderivWorkspace\u001b[33m.\u001b[39mgetVariablesOfType(\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 | \u001b[39m    \u001b[36mconst\u001b[39m all_procedures \u001b[33m=\u001b[39m \u001b[33mBlockly\u001b[39m\u001b[33m.\u001b[39m\u001b[33mProcedures\u001b[39m\u001b[33m.\u001b[39mallProcedures(\u001b[33mBlockly\u001b[39m\u001b[33m.\u001b[39mderivWorkspace)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 69 | \u001b[39m\u001b[0m\n    at Object.raise (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:6325:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:3759:12)\n    at ScopeHandler.declareName (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:3725:12)\n    at Object.checkLVal (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8021:22)\n    at Object.parseVarId (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10502:10)\n    at Object.parseVar (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10477:12)\n    at Object.parseVarStatement (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10299:10)\n    at Object.parseStatementContent (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9896:21)\n    at Object.parseStatement (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Object.parseBlockBody (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Object.parseBlock (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10376:10)\n    at Object.parseFunctionBody (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9424:24)\n    at Object.parseFunctionBodyAndFinish (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9394:10)\n    at withTopicForbiddingContext (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10535:12)\n    at Object.withTopicForbiddingContext (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9702:14)\n    at Object.parseFunction (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10534:10)\n    at Object.parseFunctionExpression (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8877:17)\n    at Object.parseExprAtom (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8790:21)\n    at Object.parseExprAtom (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseMaybeAssign (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8226:25)\n    at Object.parseExpression (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Object.parseStatementContent (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9958:23)\n    at Object.parseStatement (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Object.parseBlockBody (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Object.parseTopLevel (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:9758:10)\n    at Object.parse (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:11270:17)\n    at parse (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/parser/lib/index.js:11306:38)\n    at parser (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/samyong/Documents/Source_code/deriv-app/packages/bot/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)");

/***/ })

})
//# sourceMappingURL=main.bfa169.hot-update.js.map