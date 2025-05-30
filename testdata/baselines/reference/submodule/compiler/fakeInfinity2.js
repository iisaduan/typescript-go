//// [tests/cases/compiler/fakeInfinity2.ts] ////

//// [fakeInfinity2.ts]
export enum Foo {
    A = 1e999,
    B = -1e999,
}

namespace X {
    type A = 1e999;
    type B = 2e999;

    export function f(): A {
        throw new Error()
    }
}

export const m = X.f();


//// [fakeInfinity2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m = exports.Foo = void 0;
var Foo;
(function (Foo) {
    Foo[Foo["A"] = 1e999] = "A";
    Foo[Foo["B"] = -1e999] = "B";
})(Foo || (exports.Foo = Foo = {}));
var X;
(function (X) {
    function f() {
        throw new Error();
    }
    X.f = f;
})(X || (X = {}));
exports.m = X.f();
