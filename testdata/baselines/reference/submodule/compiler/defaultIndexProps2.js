//// [tests/cases/compiler/defaultIndexProps2.ts] ////

//// [defaultIndexProps2.ts]
class Foo {
	public v = "Yo";
}

var f = new Foo();

// WScript.Echo(f[0]);

var o = {v:"Yo2"};

// WScript.Echo(o[0]);

1[0];
var q = "s"[0];


//// [defaultIndexProps2.js]
class Foo {
    v = "Yo";
}
var f = new Foo();
// WScript.Echo(f[0]);
var o = { v: "Yo2" };
// WScript.Echo(o[0]);
1[0];
var q = "s"[0];
