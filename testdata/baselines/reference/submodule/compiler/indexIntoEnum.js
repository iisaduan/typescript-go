//// [tests/cases/compiler/indexIntoEnum.ts] ////

//// [indexIntoEnum.ts]
module M {

    enum E { }

    var x = E[0];
}

//// [indexIntoEnum.js]
var M;
(function (M) {
    let E;
    (function (E) {
    })(E || (E = {}));
    var x = E[0];
})(M || (M = {}));
