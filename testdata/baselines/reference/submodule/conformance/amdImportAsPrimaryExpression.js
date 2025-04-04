//// [tests/cases/conformance/externalModules/amdImportAsPrimaryExpression.ts] ////

//// [foo_0.ts]
export enum E1 {
	A,B,C
}

//// [foo_1.ts]
import foo = require("./foo_0");
if(foo.E1.A === 0){
	// Should cause runtime import - interesting optimization possibility, as gets inlined to 0.
}


//// [foo_0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E1 = void 0;
var E1;
(function (E1) {
    E1[E1["A"] = 0] = "A";
    E1[E1["B"] = 1] = "B";
    E1[E1["C"] = 2] = "C";
})(E1 || (exports.E1 = E1 = {}));
//// [foo_1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo = require("./foo_0");
if (foo.E1.A === 0) {
    // Should cause runtime import - interesting optimization possibility, as gets inlined to 0.
}
