//// [tests/cases/compiler/moduleOuterQualification.ts] ////

//// [moduleOuterQualification.ts]
declare module outer {
  interface Beta { }
  module inner {
    // .d.ts emit: should be 'extends outer.Beta'
    export interface Beta extends outer.Beta { }
  }
}


//// [moduleOuterQualification.js]
