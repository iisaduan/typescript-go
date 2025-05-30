//// [tests/cases/conformance/decorators/class/method/decoratorOnClassMethodOverload1.ts] ////

//// [decoratorOnClassMethodOverload1.ts]
declare function dec<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;

class C {
    @dec
    method()
    method() { }
}

//// [decoratorOnClassMethodOverload1.js]
class C {
    method() { }
}
