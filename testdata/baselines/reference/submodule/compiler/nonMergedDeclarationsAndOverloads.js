//// [tests/cases/compiler/nonMergedDeclarationsAndOverloads.ts] ////

//// [nonMergedDeclarationsAndOverloads.ts]
class A {
    m1: string;
    f() {}
    m1 (a: string): void;
    m1 (a: number): void;
    m1 (a: any): void {
    }
}

//// [nonMergedDeclarationsAndOverloads.js]
class A {
    m1;
    f() { }
    m1(a) {
    }
}
