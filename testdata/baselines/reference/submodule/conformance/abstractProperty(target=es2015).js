//// [tests/cases/conformance/classes/propertyMemberDeclarations/abstractProperty.ts] ////

//// [abstractProperty.ts]
abstract class A {
    protected abstract x: string;
    public foo() {
        console.log(this.x);
    }
}

class B extends A {
    protected x = 'B.x';
}

class C extends A {
    protected get x() { return 'C.x' };
}


//// [abstractProperty.js]
class A {
    x;
    foo() {
        console.log(this.x);
    }
}
class B extends A {
    x = 'B.x';
}
class C extends A {
    get x() { return 'C.x'; }
    ;
}
