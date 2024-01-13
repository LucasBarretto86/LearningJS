console.warn("/for_in_for_of.js");
let arrs = [1,2,3,4];
let persons = {name: "Lucas", surname: "Silva"};

// For in
for(let prop in arrs){
    console.log(prop);
}

for(let prop in persons){
    console.log(prop);
}

// For of
for(let prop of arrs){
    console.log(prop);
}

for(let prop of persons){
    console.log(prop);
}