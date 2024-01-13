# Learning Javascript

- [Learning Javascript](#learning-javascript)
  - [Core Knowledge](#core-knowledge)
    - [HTTP](#http)
      - [Status code](#status-code)
  - [YARN](#yarn)
    - [Install yarn](#install-yarn)
    - [Add new dependency](#add-new-dependency)
      - [add only in dev](#add-only-in-dev)
    - [Reinstall all dependencies](#reinstall-all-dependencies)
    - [Adding multiple dependencies version](#adding-multiple-dependencies-version)
  - [ESBuild](#esbuild)
    - [Install ESBuild](#install-esbuild)
    - [Implementing building script](#implementing-building-script)
    - [Sophisticate build conditions](#sophisticate-build-conditions)
  - [ESLint](#eslint)
    - [Adding ESlint to the project](#adding-eslint-to-the-project)
      - [With Yarn](#with-yarn)
        - [Interactive configuration](#interactive-configuration)
      - [With NPM](#with-npm)
    - [ESlint basic config](#eslint-basic-config)
      - [To add new rules](#to-add-new-rules)
    - [Run ESLint](#run-eslint)
  - [Stimulus on Vanilla JS with ESBuild](#stimulus-on-vanilla-js-with-esbuild)
    - [Install Stimulus](#install-stimulus)
    - [Config `build.js` file](#config-buildjs-file)
    - [Config application js](#config-application-js)
    - [Stimulus controller](#stimulus-controller)
    - [Stimulus Targets](#stimulus-targets)
    - [Stimulus Actions](#stimulus-actions)
    - [Stimulus Outlets](#stimulus-outlets)
  - [DART SASS](#dart-sass)
    - [Install DART SASS](#install-dart-sass)
    - [Configure SASS processor on ESBuild](#configure-sass-processor-on-esbuild)
      - [Install ESBuild sass plugin](#install-esbuild-sass-plugin)
      - [Setup sass plugin on `build.js`](#setup-sass-plugin-on-buildjs)
  - [Lodash](#lodash)
    - [Configuring with a project](#configuring-with-a-project)
    - [Interesting utilities methods](#interesting-utilities-methods)
      - [`_.assign()`](#_assign)
      - [`_.times()`](#_times)
      - [`_.debounce()`](#_debounce)
      - [`_.find()`](#_find)
      - [`_.filter()`](#_filter)
      - [`_.first()`](#_first)
      - [`_.last()`](#_last)
      - [`_.chunk()`](#_chunk)
      - [`_.get()`](#_get)
      - [`_.set()`](#_set)
  - [ExpressJS](#expressjs)
  - [GPT answers](#gpt-answers)
    - [Node - Require vs Import](#node---require-vs-import)
  - [Snippets](#snippets)
    - [Using ES6 modules in Node](#using-es6-modules-in-node)
  - [References](#references)

## Core Knowledge

### HTTP

[Mozilla HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)

#### Status code

- Informational responses (100 – 199)
- Successful responses (200 – 299)
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)

**Most common codes:**

| Code | Description                 |
| :--- | :-------------------------- |
| 200  | OK/Success                  |
| 201  | Created                     |
| 204  | No content                  |
| 301  | Redirect / Move Permanently |
| 400  | Bad request                 |
| 401  | Unauthorized                |
| 403  | Forbidden                   |
| 404  | Not Found                   |
| 422  | Unprocessable Entity        |
| 500  | Internal Server error       |
| 503  | Service unavailable         |
| 504  | Gateway Timeout             |

## YARN

### Install yarn

> To install yarn you need to have a nodejs installed since we gonna use `NPM` to install

```shell
npm install -g yarn
```

### Add new dependency

```shell
yarn add dependency_name
```

#### add only in dev

```shell
yarn add dependency_name -D
```

### Reinstall all dependencies

```shell
yarn install --check-files
```

### Adding multiple dependencies version

new dependency syntax -> "`dependency-alias`": "npm:`dependency-name@version`"
older dependency syntax -> "`dependency-name`": "`version`"

```json
// package.json
{
  "dependencies": {
    "@analytics": "npm:analytics@^0.6.2",
    "@analytics/google-analytics": "^0.5.2",
    "@apollo/client/updated": "npm:apollo/client@^3.6.2",
    "@apollo/client": "3.5.8"
  }
}
```

## ESBuild

### Install ESBuild

```shell
yarn add esbuild

or

npm install --save-exact esbuild
```

### Implementing building script

```json
// package.json

{
  "scripts": {
    "build": "esbuild index.js --bundle --outfile=out.js"
  }
}
```

### Sophisticate build conditions

As the scrips to build you project might gets specific or more sophisticated it's suggested segregate the script in external config file using esbuild's JavaScript API

```js
// build.js

import { build } from "esbuild";

build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outfile: "./public/out.js",
}).catch(() => process.exit(1));
```

```json
// package.json

{
  // ...
  "scripts": {
    "build": "node ./build.js"
  }
}
```

> note that on the script we use `node` to allow ES6 modules to work properly.

## ESLint

### Adding ESlint to the project

#### With Yarn

```shell
yarn add -D eslint
```

##### Interactive configuration

```shell
eslint --init
```

**Output:**

```mono
You can also run this command directly using 'npm init @eslint/config'.
npx: installed 40 in 8.683s
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · yarn
```

#### With NPM

With you have node installed just initialize eslint using NPM

```shell
npm init @eslint/config
```

### ESlint basic config

```js
// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": [
      "error",
      {
        arrays: "multiline",
        objects: "multiline",
        imports: "multiline",
        exports: "multiline",
        functions: "ignore",
      },
    ],
    "keyword-spacing": ["error"],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "object-curly-spacing": ["error", "always"],
    semi: ["error", "never"],
    "space-in-parens": ["error", "never"],
  },
};
```

#### To add new rules

<https://eslint.org/docs/rules/>

### Run ESLint

```shell
yarn run eslint
```

to for fixes we simple add `--fix` flag

```shell
yarn run eslint --fix
```

## Stimulus on Vanilla JS with ESBuild

### Install Stimulus

```shell
yarn add -D stimulus
```

To allow stimulus to work on esbuild we need to add also a plugin

```shell
yarn add -D esbuild-plugin-stimulus
```

### Config `build.js` file

```js
// ./build.js

import { build } from "esbuild";
import { stimulusPlugin } from "esbuild-plugin-stimulus";

build({
  entryPoints: ["./src/index.js"],
  plugins: [stimulusPlugin()],
  bundle: true,
  outfile: "./public/out.js",
}).catch(() => process.exit(1));
```

### Config application js

> In this example application js is `index.js`

```js
// ./src/libs/index.js

import { Application } from "stimulus";
import DialogController from "./stimulus/controllers/dialog_controller";

const app = Application.start();
app.register("dialog", DialogController);
```

### Stimulus controller

```js
// ./src/libs/stimulus/controllers

import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("connected");
  }
}
```

### Stimulus Targets

### Stimulus Actions

### Stimulus Outlets

## DART SASS

### Install DART SASS

```shell
yarn add sass
```

### Configure SASS processor on ESBuild

#### Install ESBuild sass plugin

```shell
yarn add -D esbuild-sass-plugin
```

#### Setup sass plugin on `build.js`

```js
// ./build.js

import { build } from "esbuild";
// ...
import { sassPlugin } from "esbuild-sass-plugin";

await build({
  entryPoints: ["./src/libs/index.js"],
  plugins: [
    // ...,
    sassPlugin(),
  ],
  bundle: true,
  outfile: "./public/index.js",
}).catch(() => process.exit(1));
```

> To make it works we also need to import the scss file on the `index.js` file, that will produce a scss file within the `outfile` folder

```js
// ./src/libs/index.js

import "../assets/stylesheet/index.scss";
```

## Lodash

Lodash is a library that enhance basic JS, giving it methods to handle data in a ruby like style

### Configuring with a project

```shell
yarn add lodash
```

or

```html
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
></script>
```

it's also possible to import specific methods within an package.json

```json
// package.json
{
  // ...
  "dependencies": {
  "lodash.get" "^4.4.2",
  "lodash.set" "^4.3.2"
  }
}
```

### Interesting utilities methods

#### `_.assign()`

Allows you to add new values to return new object with new assigned properties, it doesn't change the original object

```js
const user = { name: "Lucas", age: 34 };
const updatedUser = _.assign({ surname: "Casanova", age: 35 }, user);
console.log(updatedUser);
```

**Output:**

```mono
{surname: 'Casanova', name: 'Lucas', age: 34}
```

> Note that id doesn't change a property that already has a value, it just adds the new property

#### `_.times()`

it just repeats and map the result of an instruction for `n` times

```js
console.log(
  _.times(3, () => {
    return 2 * 2;
  })
);
```

**Output:**

```mono
 [4, 4, 4]
```

> Note that this is basically the same as:

```js
console.log(
  [1, 2, 3].map(() => {
    return 2 * 2;
  })
);
```

**Output:**

```mono
 [4, 4, 4]
```

#### `_.debounce()`

Basically it just a timeout that resets if an input is trigger before the timeout runs out, for instance if you will make a Ajax request it avoids to make requests every time an user tipping something on an input, if you set a debounce of 5 seconds it will only make that Ajax request after 5 seconds timeout

```html
<!-- index.html -->
<div>
  <h2>Debounce example</h2>
  <input type="text" name="debounce" />
</div>

<script>
  function submit() {
    console.log("Submitted!");
  }

  const input = document.querySelector("input[name='debounce']");
  input.addEventListener("keyup", _.debounce(submit, 5000));
</script>
```

#### `_.find()`

It's basically and enhancement for normal find from JS

```js
const users = [
  { name: "Lucas", age: 35 },
  { name: "Eloina", age: 63 },
  { name: "Camila", age: 40 },
  { name: "Daniel", age: 37 },
];
const result = _.find(users, { name: "Lucas" });
console.log(result);
```

**Output:**

```mono
{name: "Lucas", age: 35}
```

> Note is basically same as:

```shell
const result = users.find(e => {e.name === "Lucas"})
```

#### `_.filter()`

It's basically and enhancement for normal filter from JS

```js
const users = [
  { name: "Lucas", age: 35, gender: "male" },
  { name: "Eloina", age: 63, gender: "female" },
  { name: "Camila", age: 40, gender: "female" },
  { name: "Daniel", age: 37, gender: "male" },
];
const result = _.filter(users, { gender: "male" });
console.log(result);
```

**Output:**

```mono
[{name: "Lucas", age: 35, gender: "male"}, {name: "Daniel", age: 37, gender: "male"}]

```

> Note is basically same as:

```shell
const result = users.filter(e => {e.gender === "male"})
```

#### `_.first()`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.first(numbers));
```

**Output:**

```mono
1
```

#### `_.last()`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.last(numbers));
```

**Output:**

```mono
8
```

#### `_.chunk()`

Break and array or an object into chunks

```js
// Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.chunk(numbers, 2));

// Object
const users = [
  { name: "Lucas", age: 35, gender: "male" },
  { name: "Eloina", age: 63, gender: "female" },
  { name: "Camila", age: 40, gender: "female" },
  { name: "Daniel", age: 37, gender: "male" },
];
console.log(_.chunk(users, 2));
```

**Output:**

```mono
Array
[[1, 2],[3, 4],[5, 6],[7, 8]]

[[{name: "Lucas", age: 35, gender: "male"}, {name: "Eloina", age:63, gender: "female"}],
[{name: "Camila", age: 40, gender: "female"}, {name: "Daniel", age: 37, gender: "male"}]]
```

#### `_.get()`

Mostly use to handle API responses due to the possibility to data inconsistency or variability, mostly what get method does is to try getting the day from a unknown source if the date isn't found or there's an inconsistency it will return a default value instead of throw an exception stopping the application.

Error situation

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"],
    },
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"],
    },
  },
];

// Error due to the fact that dev2 doesn't have a property `using` therefore, there is no array and no index 2
let usingLanguages = devs.map((dev) => {
  return dev.languages.using[2];
});
console.log(usingLanguages);
```

**Output:**

```mono
let usingLanguages = devs.map(dev => { return dev.languages.using[2] })

TypeError: Cannot read properties of undefined (reading '2')
```

Regular attempt to avoid it

```js
let usingLanguages;

try {
  usingLanguages = devs.map((dev) => {
    return dev.languages.using[2];
  });
  console.log(usingLanguages);
} catch (error) {
  console.log("Error", error.message);
}
```

**Output:**

```mono
Error Cannot read properties of undefined (reading '2')
```

Using lodash `get()`

```js
usingLanguages = _.get(
  devs,
  "languages.using[2]",
  "Error due to data inconsistency"
);
console.log(usingLanguages);
```

**Output:**

```mono
Error due to data inconsistency
```

#### `_.set()`

Set is basically to add data to an object that might or might not have a property, it might seems ordinary for simple data, simple objects, however it shines if you will create deeper properties

Attempting to set values for a non existing properties chunk with regular JS

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"],
    },
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"],
    },
  },
];

try {
  devs.forEach((dev) => {
    dev.responsibility.documentation = ["Register", "Report"];
  });
  console.log(devs[1].responsibility.documentation);
} catch (error) {
  console.log("Error", error.message);
}
```

> Note that it handles the exception but it doesn't set the objects

**Output:**

```mono
Error Cannot set properties of undefined (setting 'documentation')
```

Using lodash `set()` to do so

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"],
    },
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"],
    },
  },
];

devs.forEach((dev) => {
  _.set(dev, "responsibility.documentation", ["Register", "Report"]);
});
console.log(devs);
```

**Output:**

```mono
 [
   {
     name: 'Lucas',
     age: 35,
     languages: {
       using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
       learning: ["Java", "Python", "Lua"]
     },
     responsibility: {
       documentation:  ["Register", "Report"]
     }
   },
   {
     name: 'Geovanna',
     age: 17,
     languages: {
       learning: ["Javascript", "CSS"]
     },
     responsibility: {
       documentation:  ["Register", "Report"]
     }
   }
 ]
```

## ExpressJS

Go to [Learning ExpressJS](./LearningExpressJS//README.md)

## GPT answers

### Node - Require vs Import

**Question:**

> In node why would I use `import` statement instead of `require`, what's the benefits if theres any?

**GPT:**

> In Node.js, both `require` and `import` can be used for including modules, but they serve different purposes and have some differences. The `import` statement is part of ECMAScript modules (ESM), introduced in ECMAScript 6 (ES6), while `require` is part of the CommonJS module system, which has been historically used in Node.js.
>
> Here are some benefits of using `import` over `require`:
>
> 1. **Standardized Module System:** > `import` is part of the ECMAScript standard for modules, providing a more standardized and modern approach to module loading. It aligns with the language features introduced in ECMAScript 6 (ES6) and later versions.
>
> 2. **Static Analysis:**
>    One significant advantage of `import` is that it allows for static analysis. Tools like tree shakers, bundlers, and linters can analyze the code more effectively, enabling better optimization and identifying unused exports.
>
> 3. **Named Exports and Imports:**
>    With `import`, you can use named exports and imports, making it clearer which specific items from a module you are using. This can lead to more readable and self-documenting code.
>
>    ```js
>    // Using require
>    const fs = require("fs");
>    const readFile = fs.readFile;
>
>    // Using import
>    import { readFile } from "fs";
>    ```
>
> 4. **Asynchronous Module Loading:** > `import` supports asynchronous module loading, allowing you to load modules dynamically using the `import()` function. This is not a feature available with `require`.
>
>    ```js
>    // Asynchronous module loading with import
>    const module = await import("./module.js");
>    ```
>
> 5. **Default Exports:**
>    While both `require` and `import` support default exports, the syntax for importing default exports is more explicit and consistent with named exports in the `import` statement.
>
>    ```js
>    // Using require
>    const myModule = require("./myModule");
>
>    // Using import
>    import myModule from "./myModule";
>    ```
>
> It's worth noting that, as of my last knowledge update in January 2022, Node.js has been making progress in supporting ECMAScript modules (ESM) alongside CommonJS. You can use either syntax in recent versions of Node.js, but the level of support may depend on your Node.js version and the specific features you are using. Always check the Node.js documentation and your project's requirements when deciding which module system to use.

## Snippets

### Using ES6 modules in Node

To be able to use `import`, `export` statements and other ES6 stuff in Node we just need to add on our `package.json`, the entry `"type": "module"`

```json
{
  "name": "project name",
  "version": "1.0.0",
  "description": "A simple project description",
  "main": "app.js", // App entry
  "author": "Lucas Barretto e Silva",
  "license": "MIT",
  "type": "module", // Entry that allow Node to use ES6 features
  "dependencies": {
    ... // Whatever dependency your project has
  }
}
```

## References

[ESBuild Documentation](https://esbuild.github.io/getting-started/#install-esbuild)
[ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
[Mozilla HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)
