//// [tests/cases/compiler/nameCollisionsInPropertyAssignments.ts] ////

//// [nameCollisionsInPropertyAssignments.ts]
var x = 1
var y = { x() { x++; } }; 

//// [nameCollisionsInPropertyAssignments.js]
var x = 1;
var y = { x() { x++; } };
