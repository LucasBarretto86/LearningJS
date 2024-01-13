# Advanced JS Course

## Template Strings
Template string it's a new feature since ECS6, template string allows you to use string interpolation for variables or expressions and allows you to create multline strings. To create a template string we use double (`) insteado of single or double quotes 

### Variable interpolation
~~~
    let name = "Lucas";
    console.log(`My name is ${name}`);
~~~
##### Output:
~~~
    My name is Lucas
~~~

###  Expressions interpolation
~~~
    let isBold = true;
    console.log(`My name is ${ isBold ? "<b>Lucas</b>" : "Lucas"}`);
~~~
##### Output:
~~~
    My name is <b>Lucas</b>
~~~



### Multline string
~~~
    console.log(`
    first line
    second line
    third line
    ...`
    );
~~~
##### Output:
~~~

    first line
    second line
    third line
    ...

~~~

## Tag template
In ECS6 was also implemented tag functions, this functions allow us to create and use small functions to handle with strings in a most simplified way. tags templates works getting a template string as argument.
TRIVIA: Most common use case it's for internationalization using i18n

~~~
    function h1(string){
        return `<h1>My name is ${string}<h1>`;
    }

    console.log(h1`Lucas`);
~~~
###### Output
~~~
    <h1>My name is Lucas</h1>
~~~

##### complex tag templates
Using tags we are also able to create some complex string composition using the rest operator, but it's kinda tricky

~~~
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
~~~
###### Output
~~~
    <p>Hello World my name is Lucas. Welcome my friends!</p>
~~~

## Global variables
In JS during runtime whenever you define a value for a variable that hasn't been declared it will automatically an attribute associeted to a global object, in a browser they are associated to the global object `window`.

~~~
    name = "Lucas";
    console.log(window.name);
~~~
##### Output
~~~
    Lucas
~~~

## eval method
`eval` is a method that allow us to check if a particular instructions are valid passed on string it's valid or not. If valid the instruction sent will be processed, if invalid our browser will throw an expection. 

##### valid string
~~~
    eval("var a = 1");
    console.log(a);
        
    eval("var = 1");  
~~~
###### Output
~~~
    1
~~~

##### invalid string
~~~        
    eval("var = 1");  
~~~
###### Output
~~~
    Uncaught SyntaxError: missing variable name
~~~

## Strict mode

To enable the strict mode we must inform on the first line of our JS file `"use strict"` by doing that errors that would be bypass in runtime now will throw exceptions. 
IMPORTANT: Specifically on `eval` use strict mode will also prevent  even valid instructions to be processed.

#### Misspelling Variables
##### not strict
~~~
    var myValue = 1;

    mValue = 0;

    if (myValue == 0) {
        console.log("The value is correct!");
    } else {
        console.log("The value is wrong!");
    }
~~~ 
###### Output
~~~
    The value is wrong!
~~~

As you can see in the code above there's a mistake on the line 76 `mValue = 0`, that variable haven't been preveiously declared, however, instead of given us an exception, our the browser will simply go on and then instantiate a new global variable named `mValue` and that mistake won't be caught. That's why the strict mode is important to force our browser to throw various exceptions making these kind of mistakes and making easier to debug our code.

##### strict
~~~
    "use strict"

    var myValue = 1;

    mValue = 0;

    if (myValue == 0) {
        console.log("The value is correct!");
    } else {
        console.log("The value is wrong!");
    }
~~~ 
###### Output
~~~
    Uncaught ReferenceError: assignment to undeclared variable mValue
~~~

##### Usage of reserved keywords
~~~
    var let = 1;
    console.log(let);
~~~ 
###### Output
~~~
    1
~~~

##### Example - Strict mode
~~~
    "use strict"

    var let = 1;
    console.log(let);
~~~ 

###### Output
~~~
    Uncaught SyntaxError: let is a reserved identifier
~~~

#### eval
##### not stricted 
~~~
    var a = 2;
    eval(var a = 1)
    console.log(a);
~~~ 
###### Output
~~~
    1
~~~

##### strict
~~~
    var a = 2;
    eval(var a = 1)
    console.log(a);
~~~ 
###### Output
~~~
    2
~~~

## Does JS pass arguments by reference and  by value?
In javascript primitive values are passed by value and object are passed by reference

### Passing primitive values
 Since a primitive values has no refecerence or pointer for a memory address, whenever you send a primitive as argument you are kinda sending a copy of a value, therefore the value will work only inner scoped by the method itself, it can't change anything outsite the method.

~~~
    function foo(a) {
        a = 2;
    }

    foo(a);
    console.log(a);
~~~
###### Output
~~~
    1
~~~

### Passing by reference
However when you send pass an object as argument, actually you are sending the pointer address of that object, therefore, any change that you do inside that pointed address will effect the object itself.

IMPORTANT: When you send a object referecen naturally you cant reallocate the object in another place in memory, so any change will be scoped by the pointer and it can't be changed.

~~~
    var b = {};
    function goo(b) {
        b.moo = 2;
    }

    goo(b);
    console.log(b.moo);
~~~

###### Output
~~~
    2
~~~

## Rest operator
The rest operator was implemented on ECS6, this operator give us the ability to create methods that has a variable number of parameters, to use the rest operator we use the keyword `...`

~~~
    function sum (...values){
        let sum = 0;
        
        values.forEach(value => {
            sum += value
        });

        return sum;
    }

    console.log(sum(1, 2, 3));
~~~

###### Output
~~~
    6
~~~

TRIVIA : Even before the rest operator be implemented inside every function exists a hidden variable called `arguments` that variable holds every argument we sent but only uses the correct number of arguments we defined on the function implementation.

~~~
    function test(a, b){
        console.log(arguments);
    }

    test("Carlos", "Magno", "João", "Paulo");
~~~
###### Output
~~~
Arguments(4) ["Carlos", "Magno", "João", "Paulo", callee: ƒ, Symbol(Symbol.iterator): ƒ]
~~~

As you see above the variable `arguments`  holds the values just like an Array, however it doesn't really operates alike, to make it assume properties from one Array we would have to cast it using `Array.prototype`, would feels odd that's why The rest operator was implemented to allow us to have a variaty of argument in a proper array.

## Spread operator
The spread operator also use the same keyword `...`  as the `rest operator`, however, it came to deal with a variaty of arguments or values in a different way, mostly the spread operator is used to deal with arrays. There's three most common use cases for it; to merge two arrays; to copy one array to another; and to spread array values as arguments.

### Merging Arrays
~~~
    var arr1 = [4,5,6];
    var arr2 = [1,2,3, ...arr1];

    console.log(arr2);
~~~
###### Output
~~~
    (6) [1,2,3,4,5,6]
~~~

### Copying Arrays
~~~
    var originals = [1,3,4];
    var copies = [...originals];

    console.log(originals);
    console.log(copies);
~~~
###### Output
~~~
    (3) [1,3,4]
    (3) [1,3,4]
~~~

### To spread an arrays of arguments
~~~
    var meth = "facebook"
    var opts = ["key", "callbackUrl"];
    
    function login(method, ...options) {
       console.log(method);
       console.log(options);     
    }

    login(meth, ...opts);
~~~
###### Output
~~~
facebook
(2) ["key", "callbackUrl"]
~~~

### Scopes
Scopes kinda means the lifetime from a variable and whether a variable is acessiable or not on a specific point of your code.

#### Global scope
In JS global scope correspond to the function or variables that we create directly into the JS file, directly under main global object, in browsers for instance it will be the `window` object.

~~~
    window.name = "Lucas";
    var myName = "Lucas";

    console.log(window.name);
    console.log(myName);
    console.log(window.myName);
~~~
###### Output
~~~
    Lucas
    Lucas
    Lucas
~~~

The `var` keyword is used to create variables that will be globally available whenever the variable is created under the main global object or inside a code block `{}`, for instance a `for-loop`. 
~~~
for (var i = 0; i < 2; i++) {
}
console.log(i)
~~~
###### Output
~~~
    2
~~~ 

#### Function scope
However any variable created inside a function only will be acessable within the function itself, they will scoped by the function.
~~~
function functionScoped(){
    var c = "Lucas";
    console.log(c);
}

functionScoped();
console.log(c);
~~~
###### Output
~~~
Lucas
Uncaught ReferenceError: c is not defined
~~~

#### Block scopes - let, const
On ECS6 was introduzed two new keywords `let` and `const` there are two allow us to create variables that will only exists inside a code block `{}` (it does includes functions), `let` is defines a variable that can be used and reassigned within a block, while `const` can only be used inside a block and it also can't be reassingned.

##### let
~~~
{
    let z = 1;
    console.log(z);
}

console.log(z);
~~~
###### Output
~~~
 Uncaught ReferenceError: z is not defined
~~~

##### const
~~~
{
    const w = 3;
    console.log(w);
    w = 5;
}
~~~
###### Output
~~~
3
Uncaught TypeError: invalid assignment to const 'w'
~~~

#### scope chain
A scope chain, means that js methods allow a "child" scope to work with variables and methods from it's "parent" scope.

~~~
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
~~~

###### Output
~~~
    cof cof
    meow
~~~
However an outer scope can't work with a inner scope variable

~~~
    function boo() {
        function goo() {
            var l = "Gyahahah";
        }

        console.log(l);
    }

    boo();
~~~

###### Output
~~~
Uncaught ReferenceError: l is not defined
~~~

### variables and functions hoisting
Normally most languages requires you to declare a variable prior to the usage of it, for instance in Java we need to declare every variable on the top of the document to be able to use it throughtout the code, however in javascript every variable declaration is automatically hoisted to the top of the documento wherever you clear it, however it's that all variables are correctly put on the top of the document.

~~~
    function woo(){
        console.log(t);
    }

    woo();

    var t = "hoisted";
~~~

###### Output
~~~
    undefined
~~~
As you may see the result of that example is undefined, it didn't throw a error. What happens is that the JS hoisted the variable upwards however the value still were attributed only after the method call, it's hard to see but in another language the method woo would be in erro because it wouldn't find the variable at all.
~~~
    function woo(){
        console.log(t);
    }

    var t = "hoisted too";
    
    woo();
~~~

###### Output
~~~
    hoisted too
~~~

To understand what is going on it's important to see that eventhough the `var` declaration was made after the function instruction JS hoisted the variable above all the instructions, therefore the function foo could idenitife the existance of the t variable, however the varlue to that variable was declated only afterwards, but still the method was call only after.

~~~
    function woo(){
        console.log(t);
    }

    var t = "hoisted too";
    
    woo();
~~~

#### It's same as

~~~
   var t

    function woo(){
        console.log(t);
    }

    t = "hoisted too";
    
    woo();
~~~

In runtime Javascript hoisted the variable declaration upwards.


## Immediatiable Invoked Function Expression (IIFE)
It's function that is set and call at same time on runtime

~~~
    (function(){
        console.log("pipi")
    })();

    (() =>{
        console.log("xixi")
    })();
~~~

##### Output
~~~
    pipi
    xixi
~~~

## Clousers
in js a function scoped variable only exists inside the function itself if you try to use a function scoped variable out the function it won't work
~~~
    function baa(name){
        var a = name
        console.log(name);
    }

    baa("Lucas");
    console.log(a);
~~~

##### Output
~~~
    Lucas
    Uncaught ReferenceError: pupu is not defined
~~~

However a function the `return` keyword inside function creates a way out for variables "breaking" the function scope, these are called clousers, that means that even though a function was finished it keeps a reference to the last value from a function scoped variable.

~~~
    function baa(name) {
        var pupu = name
        return pupu;
    }

    console.log(baa("Lucas"));
~~~

##### Output
~~~
    Lucas
~~~

Since JS allow to return function we can even create functions that return another function that also uses it's parent function scoped variable and still we can access the value
~~~
    function naa(name) {
        var papa = name
        console.log(name);

        return function () {
            return papa;
        }
    }

    var nana = naa("Lucas");
    console.log(nana());
~~~

###### Output
~~~
    Lucas
~~~

This is possible because the clouser it's a kind of registry of the last value from a variable that is being returned

~~~
    var noo = [];
    
    for (var i = 0; i < 5 ; i ++){
        noo[i] = function() {return i}
    }

    console.log(noo[0]());
    console.log(noo[1]());
    console.log(noo[2]());
~~~

###### Output
~~~
    5
    5
    5
~~~
That happens because the clouser keeps track from the last value from a scoped variable, the only way to work around it would be using IIFE

## Destructuring
Destructuring was implemented on ECS6, it basically allow you o split arrays or objects into separated variables in only one instruction

~~~
    // Constructing
    var person = {firstName: "Lucas", lastName: "Silva"};

    var firstName = person.name;
    var lastName = person.lastName

    console.log(firstName);
    console.log(lastName);

    // Destructuring
    var {name: firstName, surname: lastName} = person;

    console.log(name);
    console.log(surname);
~~~

##### Output
~~~
    Lucas
    Silva
    Lucas
    Silva
~~~
To destructuring and object or an array we basically do the opposite process of declaration, the only diference, this allow you to break the content into separeted variables.

~~~
    // Constructing
    var arr = [1,2,3];

    // Destructing
    var [x,y,x] = arr

    console.log(x);
    console.log(y);
    console.log(z);
~~~

##### Output
~~~
    1
    2
    3
~~~

#### Destructuring parameters
One of the best use case for destructuring is the possibility to create functions that has optional parameters, something extremely simular to the named parameters from ruby.

~~~
    function bloo({name, lastname}){
        let fullName = [name, lastname].join();
        console.log(fullName);
    }

    console.log(bloo({name: "Lucas", lastname: "Silva"}));
    console.log(bloo({name: "Lucas"}));
~~~

#### destructured parameters with default values
~~~
    function dloo(x = "vazio", y = "vazio também"){
        console.log(x);
        console.log(y)
    }

    dloo();
    dloo({x: "Alguma coisa"});
~~~

###### Output
~~~
    vazio
    vazio também
    Alguma coisa
    vazio também
~~~

## For-in and For-of
In Js for-in is a structure to loop "inside" objects, it loops on the properties from and object, while for-of it's used to loop in arrays. Tecnically `for in` iterate over keys and attributes and `for of` iterates only over an array values.

### For-in
~~~
    let arr = [1,2,3,4];

    for(let prop in arr){
        console.log(prop);
    }

    let person = {name: "Lucas", surname: "Silva"};

    for(let prop in person){
        console.log(prop);
    }
~~~
###### Output
~~~
    0
    1
    2
    3 
    name
    surname
~~~

### For-of
~~~
    let arr = [1,2,3,4];

    for(let prop of arr){
        console.log(prop);
    }

    let person = {name: "Lucas", surname: "Silva"};

    for(let prop of person){
        console.log(prop);
    }
~~~
###### Output
~~~
    1
    2
    3
    4
    Uncaught TypeError: persons is not iterable
~~~

## this keyword
The `this` keyword in JS it's one of the it's really a tricky thing.  Because this object will references based on the `calling context` from the point your is app calling `this`.
~~~
    console.log(this);
~~~
###### Output
~~~
    Window http://127.0.0.1:5500/index.html
~~~
So basically calling `this` directly on the main global object will references to the global object itself

~~~
    function abb(){
        console.log(this);
    }

    abb();
~~~

###### Output
~~~
    Window http://127.0.0.1:5500/index.html
~~~
calling a global scoped function will also references the global object, that happens because again `this` is called from the global object

~~~
    var thisObj = {
        func: function(){
            console.log(this);
        }
    }

    this.func();
~~~
##### Output
~~~
    Object { func: func() }
~~~
Therefore when we use `this` inside another object this will references the object that did the call itself and not the global object `window` anynmore.

~~~
    var anotherObj = {
        func: function(){
            console.log(this);

            function duu(){
                console.log(this);
            }

            duu();
        }
    }

    anotherObj.func();
~~~
##### Output
~~~
Object { func: func()}
Window http://127.0.0.1:5500/index.html
~~~
On the example above you see that first time `this` is printed it has been called from the object will created, which means the `calling context` from  `this` referes to the object itself, however inside the method we have another function that also uses `this` but to use this method we need to call without use `this`, and so by doing it the browser can't determineted the correct context for this function, then calling it will references to the global object `window`.
Summarizing `this` will always referes to the calling context from the function or variable that will be uses, so `this` means "this who is calling the function or method"

A good way to debug this behavior would be using `strict mode` inside the function in development, by doing it our code will throw exceptions when a function tries to call a method or variable from a global scope.

Another good way to get around it is to stabilize our `this` reference using a variable to hold it:

~~~
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
~~~

##### Output
~~~
Object { func: func() }
Object { func: func() }
~~~

## Apply and Bind

