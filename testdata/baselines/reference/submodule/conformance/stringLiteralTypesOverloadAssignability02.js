//// [tests/cases/conformance/types/stringLiteral/stringLiteralTypesOverloadAssignability02.ts] ////

//// [stringLiteralTypesOverloadAssignability02.ts]
function f(x: "foo"): number;
function f(x: "foo"): number {
    return 0;
}

function g(x: "bar"): number;
function g(x: "bar"): number {
    return 0;
}

let a = f;
let b = g;

a = b;
b = a;

//// [stringLiteralTypesOverloadAssignability02.js]
function f(x) {
    return 0;
}
function g(x) {
    return 0;
}
let a = f;
let b = g;
a = b;
b = a;


//// [stringLiteralTypesOverloadAssignability02.d.ts]
declare function f(x: "foo"): number;
declare function g(x: "bar"): number;
declare let a: typeof f;
declare let b: typeof g;
