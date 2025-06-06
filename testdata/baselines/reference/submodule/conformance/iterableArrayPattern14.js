//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern14.ts] ////

//// [iterableArrayPattern14.ts]
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

function fun(...[a, ...b]) { }
fun(new FooIterator);

//// [iterableArrayPattern14.js]
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
function fun(...[a, ...b]) { }
fun(new FooIterator);
