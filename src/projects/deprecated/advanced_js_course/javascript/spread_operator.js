console.warn("/spread_operator.js");

// Merging Arrays
var arr1 = [4,5,6];
var arr2 = [1,2,3, ...arr1];

console.log(arr2);


// Copying Array
var originals = [1,3,4];
var copies = [...originals];

console.log(originals);
console.log(copies);

// Spreading arguments
var meth = "facebook"
var opts = ["key", "callbackUrl"];

function login(method, ...options) {
   console.log(method);
   console.log(options);     
}

login(meth, ...opts);
