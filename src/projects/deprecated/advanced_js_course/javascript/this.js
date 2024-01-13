console.warn("/this.js");

//Calling this from the global object
console.log(this);

console.warn("Inside object");
var thisObj = {
    func: function () {
        console.log(this);
    }
}

thisObj.func();

console.warn("Using a function inside an object");
var anotherObj = {
    func: function () {
        console.log(this);

        function duu() {
            console.log(this);
        }

        duu();
    }
}

anotherObj.func();


console.warn("Stabilizing using self variable");
var selfObject = {
    func: function () {
        const self = this;

        console.log(self);

        function moo() {
            console.log(self);
        }

        moo();
    }
}

selfObject.func();