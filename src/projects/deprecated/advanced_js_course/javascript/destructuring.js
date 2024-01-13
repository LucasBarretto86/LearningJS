console.warn("/destruction.js");
// Constructing
var person = { firstName: "Lucas", lastName: "Silva" };

var firstName = person.name;
var lastName = person.lastName

console.log(firstName);
console.log(lastName);

// Destructuring
// var { name: firstName, surname: lastName } = person;

// console.log(name);
// console.log(surname);


// Constructing
var arr = [1, 2, 3];

// Destructing
var [x, y, z] = arr

console.log(x);
console.log(y);
console.log(z);

// Destructuring parameters
function bloo({ name, lastname }) {
    let fullName = [name, lastname].join(" ");
    console.log(fullName);
}

bloo({ name: "Lucas", lastname: "Silva" })
bloo({ name: "Lucas" })

function dloo(x = "vazio", y = "vazio também"){
    console.log(x);
    console.log(y)
}

dloo();
dloo({x: "Alguma coisa"});