console.warn("/scopes.js");

//Global scope
window.name = "Lucas";
var myName = "Lucas";

console.log(window.name);
console.log(myName);
console.log(window.myName);


for (var i = 0; i < 2; i++) {
}
console.log(i)

//Function scoped
function functionScoped() {
    var c = "Lucas";
    console.log(c);
}

functionScoped();
// console.log(c);


// Block scoped
{
    let z = 1;
    console.log(z);
}

// console.log(z);

const w = 3;
console.log(w);
// w = 5;

// Scope chain

var j = "cof cof";

function moo() {
    var h = "meow";

    function goo() {
        console.log(j);
        console.log(h);
    }
    goo();
}

moo();


function boo() {
    function goo() {
        var l = "Gyahahah";
    }

    console.log(l);
}

// boo();


//Variable hoist
function woo(){
    console.log(t);
}

woo();

var t = "hoisted";