//// [tests/cases/compiler/recursiveExportAssignmentAndFindAliasedType3.ts] ////

//// [recursiveExportAssignmentAndFindAliasedType3_moduleDef.d.ts]
declare module "moduleC" {
    import self = require("moduleD");
    export = self;
}
declare module "moduleD" {
    import self = require("moduleE");
    export = self;
}
declare module "moduleE" {
    import self = require("moduleC");
    export = self;
}

//// [recursiveExportAssignmentAndFindAliasedType3_moduleB.ts]
class ClassB { }
export = ClassB;

//// [recursiveExportAssignmentAndFindAliasedType3_moduleA.ts]
/// <reference path="recursiveExportAssignmentAndFindAliasedType3_moduleDef.d.ts"/>
import moduleC = require("moduleC");
import ClassB = require("recursiveExportAssignmentAndFindAliasedType3_moduleB");
export var b: ClassB; // This should result in type ClassB

//// [recursiveExportAssignmentAndFindAliasedType3_moduleA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
