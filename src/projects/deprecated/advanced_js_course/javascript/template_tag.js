console.warn("/template_tag.js");

// Creating a tag method
function h1(string) {
    return `<h1>My name is ${string}<h1>`;
}

// Using a tag template
console.log(h1`Lucas`);

// Complex tag template string
var place = "World";
var myname = "Lucas";

function p(strings, ...values) {
    let content = "";

    for (var i = 0; i < strings.length; i++) {
        content += strings[i] + (values[i] || "");
    }

    return `<p>${content}</p>`;
}

console.log(p`Hello ${place} my name is ${myname}. Welcome my friends!`); 