//// [tests/cases/compiler/declFileRestParametersOfFunctionAndFunctionType.ts] ////

//// [declFileRestParametersOfFunctionAndFunctionType.ts]
function f1(...args) { }
function f2(x: (...args) => void) { }
function f3(x: { (...args): void }) { }
function f4<T extends (...args) => void>() { }
function f5<T extends { (...args): void }>() { }
var f6 = () => { return [<any>10]; }




//// [declFileRestParametersOfFunctionAndFunctionType.js]
function f1(...args) { }
function f2(x) { }
function f3(x) { }
function f4() { }
function f5() { }
var f6 = () => { return [10]; };


//// [declFileRestParametersOfFunctionAndFunctionType.d.ts]
declare function f1(...args: any[]): void;
declare function f2(x: (...args: any[]) => void): void;
declare function f3(x: {
    (...args: any[]): void;
}): void;
declare function f4<T extends (...args: any[]) => void>(): void;
declare function f5<T extends {
    (...args: any[]): void;
}>(): void;
declare var f6: () => any[];
