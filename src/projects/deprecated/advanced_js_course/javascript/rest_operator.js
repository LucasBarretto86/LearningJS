console.warn("/rest_operator.js");

// Rest operator
function sum(...value) {
    let sum = 0;

    value.forEach(value => {
        sum += value
    });

    return sum;
}

console.log(sum(1, 2, 3));



// arguments variable
function test(a, b){
    console.log(arguments);
}

test("Carlos", "Magno", "João", "Paulo");