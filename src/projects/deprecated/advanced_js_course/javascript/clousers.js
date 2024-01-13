console.warn("/clousers.js");


function baa(name) {
    var pupu = name
    return pupu;
}

baa("Lucas");
// console.log(pupu);
console.log(baa("Lucas"));

var lala = baa("Lucas");
console.log(lala);


function naa(name) {
    var papa = name
    console.log(name);

    return function () {
        return papa;
    }
}

var nana = naa("Lucas");
console.log(nana());


var noo = [];

for (var i = 0; i < 5; i++) {
    noo[i] = function () { return i }
}

console.log(noo[0]());
console.log(noo[1]());
console.log(noo[2]());


var doo = [];

for (var x = 0; x < 5; x++) {
    (function (y) {
        doo[y] = function () {
            return y
        };
    })(x);
}

console.log(doo[0]());
console.log(doo[1]());
console.log(doo[2]());
