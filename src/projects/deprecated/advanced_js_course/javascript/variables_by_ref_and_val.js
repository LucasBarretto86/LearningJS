"use strict"

console.warn("/variables_by_ref_and_val.js");

// Primitive value as  param
var a = 1;
function foo(a) {
    a = 2;
}

foo(a);
console.log(a);


// Object as  param
var b = {};
function goo(b) {
    b.moo = 2;
}

goo(b);
console.log(b.moo);
