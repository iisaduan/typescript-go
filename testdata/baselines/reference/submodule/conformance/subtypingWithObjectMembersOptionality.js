//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithObjectMembersOptionality.ts] ////

//// [subtypingWithObjectMembersOptionality.ts]
// Derived member is not optional but base member is, should be ok

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

// S is a subtype of a type T, and T is a supertype of S, if one of the following is true, where S' denotes the apparent type (section 3.8.1) of S:
//   - S' and T are object types and, for each member M in T, one of the following is true:
//      - M is a property and S' contains a property N where
//          M and N have the same name,
//          the type of N is a subtype of that of M,
//          M and N are both public or both private, and
//          if M is a required property, N is also a required property.
//      - M is an optional property and S' contains no property of the same name as M.
interface T {
    Foo?: Base;
}

interface S extends T {
    Foo: Derived
}

interface T2 {
    1?: Base; 
}

interface S2 extends T2 {
    1: Derived;
}

interface T3 {
    '1'?: Base;
}

interface S3 extends T3 {
    '1.': Derived;
}

// object literal case
var a: { Foo?: Base; };
var b = { Foo: <Derived>null };
var r = true ? a : b;

module TwoLevels {
    interface T {
        Foo?: Base;
    }

    interface S extends T {
        Foo: Derived2 
    }

    interface T2 {
        1?: Base;
    }

    interface S2 extends T2 {
        1: Derived2;
    }

    interface T3 {
        '1'?: Base;
    }

    interface S3 extends T3 {
        '1.': Derived2;
    }

    // object literal case
    var a: { Foo?: Base; };
    var b = { Foo: <Derived2>null };
    var r = true ? a : b;
}

//// [subtypingWithObjectMembersOptionality.js]
// object literal case
var a;
var b = { Foo: null };
var r = true ? a : b;
var TwoLevels;
(function (TwoLevels) {
    // object literal case
    var a;
    var b = { Foo: null };
    var r = true ? a : b;
})(TwoLevels || (TwoLevels = {}));
