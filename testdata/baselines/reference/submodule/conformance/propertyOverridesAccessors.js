//// [tests/cases/conformance/classes/propertyMemberDeclarations/propertyOverridesAccessors.ts] ////

//// [propertyOverridesAccessors.ts]
class A {
    get p() { return 'oh no' }
}
class B extends A {
    p = 'yep' // error
}
class C {
    _secret = 11
    get p() { return this._secret }
    set p(value) { this._secret = value }
}
class D extends C {
    p = 101 // error
}


//// [propertyOverridesAccessors.js]
class A {
    get p() { return 'oh no'; }
}
class B extends A {
    p = 'yep'; // error
}
class C {
    _secret = 11;
    get p() { return this._secret; }
    set p(value) { this._secret = value; }
}
class D extends C {
    p = 101; // error
}
