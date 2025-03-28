//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern15.ts] ////

//// [iterableArrayPattern15.ts]
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

function fun(...[a, b]: Bar[]) { }
fun(...new FooIterator);

//// [iterableArrayPattern15.js]
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
function fun(...[a, b]) { }
fun(...new FooIterator);
