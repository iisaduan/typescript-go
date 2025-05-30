//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern3.ts] ////

//// [iterableArrayPattern3.ts]
class Bar { x }
class Foo extends Bar { y }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

var a: Bar, b: Bar;
[a, b] = new FooIterator;

//// [iterableArrayPattern3.js]
class Bar {
    x;
}
class Foo extends Bar {
    y;
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
var a, b;
[a, b] = new FooIterator;
