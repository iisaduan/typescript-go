//// [tests/cases/compiler/functionDeclarationWithArgumentOfTypeFunctionTypeArray.ts] ////

//// [functionDeclarationWithArgumentOfTypeFunctionTypeArray.ts]
function foo(args: { (x): number }[]) {
    return args.length;
}


//// [functionDeclarationWithArgumentOfTypeFunctionTypeArray.js]
function foo(args) {
    return args.length;
}
