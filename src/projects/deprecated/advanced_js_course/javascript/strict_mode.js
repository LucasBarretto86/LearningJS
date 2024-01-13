// "use strict"

console.warn("/strict_mode.js");

// Misspelling of variables
var myValue = 1;

mValue = 0; // Intentional mistake to show the strict mode in action

if (myValue == 0) {
    console.log("The value is correct!");
} else {
    console.log("The value is wrong!");
}

// Wrong usage of keywords
var let = 1;
console.log(let);

// Eval
var a = 2;
eval("var a = 1");
console.log(a);
