//// [tests/cases/conformance/statements/for-inStatements/for-inStatementsArrayErrors.ts] ////

//// [for-inStatementsArrayErrors.ts]
let a: Date[];

for (let x in a) {
    let a1 = a[x + 1];
    let a2 = a[x - 1];
    if (x === 1) {
    }
    let a3 = x.unknownProperty;
}

var i: number;
for (var i in a ) {
}

var j: any;
for (var j in a ) {
}


//// [for-inStatementsArrayErrors.js]
let a;
for (let x in a) {
    let a1 = a[x + 1];
    let a2 = a[x - 1];
    if (x === 1) {
    }
    let a3 = x.unknownProperty;
}
var i;
for (var i in a) {
}
var j;
for (var j in a) {
}
