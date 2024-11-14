# Learning Javascript

- [Learning Javascript](#learning-javascript)
  - [Core Knowledge](#core-knowledge)
    - [Legacy Learning project](#legacy-learning-project)
    - [HTTP](#http)
  - [Package Managers](#package-managers)
    - [YARN](#yarn)
  - [Bundlers](#bundlers)
    - [ESBuild](#esbuild)
  - [Linters](#linters)
    - [ESLint](#eslint)
  - [Dependencies](#dependencies)
    - [JQuery](#jquery)
    - [Babel](#babel)
      - [For Bundlers](#for-bundlers)
      - [For Vanilla JS](#for-vanilla-js)
    - [dotenv](#dotenv)
    - [nodemon](#nodemon)
    - [Axios](#axios)
      - [Axios vs Fetch](#axios-vs-fetch)
      - [Axios downside](#axios-downside)
    - [DART SASS](#dart-sass)
    - [Lodash](#lodash)
  - [Frameworks](#frameworks)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Tests](#tests)
    - [Mocha Chai](#mocha-chai)
    - [JEST](#jest)
      - [Issues](#issues)
  - [GPT answers](#gpt-answers)
    - [Node - Require vs Import](#node---require-vs-import)
  - [Snippets](#snippets)
    - [Shutdown server gracefully](#shutdown-server-gracefully)
    - [Using ES6 modules in Node](#using-es6-modules-in-node)
    - [Stimulus on Vanilla JS with ESBuild](#stimulus-on-vanilla-js-with-esbuild)
  - [References](#references)

## Core Knowledge

### Legacy Learning project

[Legacy XTI Course](./src/projects/deprecated/xti/JS/README.md)

### HTTP

[Mozilla HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)

**Status code:**

- Informational responses (100 to 199)
- Successful responses (200 to 299)
- Redirection messages (300 to 399)
- Client error responses (400 to 499)
- Server error responses (500 to 599)

**Most common codes:**

| Code | Description           |
| :--- | :-------------------- |
| 200  | OK/Success            |
| 201  | Created               |
| 204  | No content            |
| 301  | Redirect              |
| 400  | Bad request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 422  | Unprocessable Entity  |
| 500  | Internal Server error |
| 503  | Service unavailable   |
| 504  | Gateway Timeout       |

## Package Managers

### YARN

**Install yarn:**

> To install yarn you need to have a nodejs installed since we gonna use `NPM` to install

```shell
npm install -g yarn
```

> flag `-g` means that it will install Yarn globally

**Update yarn:**

To update yearn we use basically same command as installation

```shell
npm install -g yarn

# OR

npm install --global yarn
```

**Add dependencies:**

```shell
yarn add dependency_name
```

To add the dependency only for dev, use flag `-D`

```shell
yarn add dependency_name -D
```

**Reinstall all dependencies:**

```shell
yarn install --check-files
```

**Adding multiple dependencies version:**

```json
// package.json
{
  "dependencies": {
    "@analytics": "npm:analytics@^0.6.2",
    "@analytics/google-analytics": "^0.5.2",
    "@apollo/client/updated": "npm:apollo/client@^3.6.2", // < New dependency syntax>
    "@apollo/client": "3.5.8" // < Older dependency syntax>
  }
}
```

## Bundlers

### ESBuild

**Install ESBuild:**

```shell
yarn add esbuild

or

npm install --save-exact esbuild
```

**Implementing building script:**

```json
// package.json

{
  "scripts": {
    "build": "esbuild index.js --bundle --outfile=out.js"
  }
}
```

**Sophisticate build conditions:**

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

## Linters

### ESLint

**Adding ESlint to the project:**

```shell
yarn add -D eslint

# OR

npm init @eslint/config
```

**Interactive configuration:**

```shell
npx eslint --init

# OR

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

**ESlint basic config:**

```js
// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
```

[For Eslint Rules](https://eslint.org/docs/rules/)

[Eslint config example](./src/projects/eslint/.eslintrc.js)

**Run ESLint:**

```shell
yarn run eslint

# OR

yarn run eslint --fix
```

> `--fix` to enforce automatic fixes

## Dependencies

### JQuery

jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, animation, and Ajax interactions for rapid web development.

```sh
npm install jquery

# OR

yarn add jquery
```

**Example:**

```js
import $ from 'jquery';

$(document).ready(function() {
  $('#button').click(function() {
    alert('Button clicked!');
  });
});
```

**Legacy Study Project:**

[XTI course](./src/projects//deprecated/xti/JQuery/README.md)

---

### Babel

Babel is a tool that converts modern JavaScript code (like ES6 and newer features) into older code that works in all browsers, even the ones that don't support the latest features.

#### For Bundlers

**Babel installation:**

```sh
npm install --save-dev @babel/core @babel/preset-env

# OR

yarn add -D @babel/core @babel/preset-env
```

> - **Esbuild:** Does not need babel-loader; it has built-in support for transpiling `JS`, `JSX`, and more.
> - **Webpack:** Needs babel-loader to transpile `JS` and `JSX`.
>   - Add also `"@babel/preset-react"` if you intend to you `JSX`

**Babel configuration:**

For every project with babel, regardless of it's a vanilla project or not we need to create `.babelrc` file on the root of the project:

```json
// .babelrc
{
  "presets": 
  [
    "@babel/preset-env",
    "@babel/preset-react" // If you intent to use `JSX` files (Except of ESBuild)
  ]
}
```

**for `ESBuild`:**

```js
// esbuild.config.js

const esbuild = require('esbuild');
const babel = require('@esbuild/plugin-babel');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  plugins: [
    babel({
      filter: /\.js$/,          // Apply Babel to JS files
      configFile: './.babelrc', // Your Babel config
    }),
  ],
  outfile: 'dist/bundle.js',
}).catch(() => process.exit(1));
```

**for `Webpack`:**

```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
      {
        test: /\.jsx$/, // If you're using JSX, add this
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx files
  },
};

```

> This is not necessary on React because it uses `CRA`, which already setup the `webpack.config.js` under the hood.

#### For Vanilla JS

**Babel installation:**

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# OR

yarn add -D @babel/core @babel/cli @babel/preset-env
```

**Babel configuration:**

For every project with babel, regardless of it's a vanilla project or not we need to create `.babelrc` file on the root of the project:

```json
// .babelrc
{
  "presets":  ["@babel/preset-env"]
  }
```

**Add script to run babel on `package.json`:**

Then we need to add a script to use babel to transpile the code:

```json
// package.json
{
  // ...
"scripts": {
  "build": "babel src --out-dir dist"
}
 // ...
}

```

---

### dotenv

`dotenv` is a dependency to allow us to load ambient environment variables  within our project
as it get started, after installing this dependency we use `.env` file on the root folder of our project.

**Installing dotenv:**

```sh
yarn add dotenv

# OR

npm install dotenv
```

**Create `:**.env` file

create the file `.env` on the project root folder

```tree
.
├── .env
├── app.js
├── package.json
├── src/
└── yarn.lock
```

The `.env` file will hold each like `KEY = VALUE`, like this:

```mono
<!-- .env -->

PORT = 5500
```

**dotenv setup:**

Add this few lines on the main js file of your project:

```js
// app.js

require('dotenv').config();

const PORT = process.env.PORT || 3000;

// ...
```

> This code sets the PORT variable to the value defined in the .env file or defaults to 3000 if not specified.

---

### nodemon

**GPT: What is nodemon?**

> nodemon is a development tool for Node.js applications that automatically restarts the server whenever code changes are detected. It simplifies the development process by eliminating the need to manually restart the server after each modification. With its command-line interface and integration with npm scripts, nodemon streamlines the development workflow and enhances the developer experience.

**Installing nodemon:**

```sh
yarn add nodemon -D

# OR

npm install --save-dev nodemon
```

**Setup nodemon:**

To setup nodemon we must add a new script entry into the  `package.json` of our project:

```js
  "scripts": {
    "start": "nodemon app.js"
  },
```

> **Notice:** that `app.js` is the main file where our application starts

**When using Docker:**

```js
  "scripts": {
    "start": "nodemon -L app.js"
  },
```

> The `-L` (or `--legacy-watch`) flag in **nodemon** enables legacy file-watching, which is essential when running in Docker containers because it uses an alternate polling method. Containers often have issues with file system change detection due to limitations in file-notification systems inside virtualized environments, leading to missed changes. The `-L` flag tells **nodemon** to use a polling-based approach instead, which reliably detects changes in files even within containerized setups, ensuring that your app restarts as expected when you modify files.

**Using nodemon:**

Basically we just need to run our start script

```sh
yarn run start

# OR

npm run start
```

After that we don't need to keep shutting down our application and restarting again every time we change `.js` files

---

### Axios

Axios is a promise-based HTTP client for making requests to APIs.

In brief, Axios provides many features like built-in transformations, request and response interceptors, and better error handling which are often more convenient than using the native Fetch API.

**Axios installation:**

```sh
npm install axios

# OR

yarn add axios
```

**Usage example:**

```js
import axios from 'axios';

// Example GET request
axios.get('https://api.example.com/data')
  .then(response => console.log(response))
  .catch(error => console.error(error));

```

#### Axios vs Fetch

- **Syntax:**  
  - **Axios:** Simpler, returns a promise that resolves with the response data directly.  

    ```js
    axios.get('/api/data').then(response => console.log(response.data));
    ```

  - **Fetch:** Returns a promise with the entire response object, so you need to call `.json()` to get the data.  

    ```js
    fetch('/api/data').then(response => response.json()).then(data => console.log(data));
    ```

- **Error Handling:**  
  - **Axios:** Automatically throws an error for HTTP status codes outside the 2xx range (e.g., 404, 500).  
  - **Fetch:** Only throws errors for network issues or invalid requests, not HTTP errors. You need to check `response.ok` or handle status manually.

- **Response Parsing:**  
  - **Axios:** Automatically parses JSON responses.  
  - **Fetch:** You have to manually parse the JSON with `.json()`.

- **Features:**
  - **Axios:** Supports request and response interceptors, automatic JSON parsing, cancellation of requests, and timeout handling.
  - **Fetch:** More lightweight, but lacks built-in features like interceptors and request cancellation.

- **Browser Support:**  
  - **Axios:** Works in all major browsers and older ones (e.g., IE11).  
  - **Fetch:** Supported by modern browsers but requires a polyfill for older browsers.

#### Axios downside

In a nutshell, `Axios` offers a more comprehensive error object, which can be a bit cumbersome to navigate, while `fetch` keeps things simpler but doesn't handle all error cases as automatically.

**Axios Error Structure:**

When an error occurs in an Axios request, the error object includes various properties like:

- `response`: Contains the response data from the server, including status code and headers.
- `request`: Contains the request that was sent.
- `message`: The error message.
- `code`: A specific error code.

For example, an Axios error might look like this:

```javascript
axios.get('https://api.example.com/data')
  .then(response => console.log(response))
  .catch(error => {
    console.error(error.message);        // The error message
    console.error(error.response?.data); // The actual response data
    console.error(error.response?.status); // The HTTP status code
  });
```

**Fetch Error Handling:**

In contrast, `fetch` only rejects on network errors or failures (like no internet connection) but does **not reject on HTTP errors** (like 404 or 500). You'd need to manually check the status code:

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
```

---

### DART SASS

**Install DART SASS:**

```shell
yarn add sass
```

**Configure SASS processor on ESBuild:**

**Install ESBuild sass plugin:**

```shell
yarn add -D esbuild-sass-plugin
```

**Setup sass plugin on `build:**.js`

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

---

### Lodash

Lodash is a library that enhance basic JS, giving it methods to handle data in a ruby like style

[Example project](./src/projects/lodash/index.js)

**Configuring with a project:**

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

**Interesting utilities methods:**

**`_:**.assign()`

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

**`_:**.times()`

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

**`_:**.debounce()`

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

**`_:**.find()`

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

**`_:**.filter()`

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

**`_:**.first()`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.first(numbers));
```

**Output:**

```mono
1
```

**`_:**.last()`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.last(numbers));
```

**Output:**

```mono
8
```

**`_:**.chunk()`

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

**`_:**.get()`

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

**`_:**.set()`

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

---

## Frameworks

### Frontend

[Learning ReactJS](./LearningReactJS/README.md)

### Backend

[Learning ExpressJS](./LearningExpressJS//README.md)

## Tests

### Mocha Chai

[Example project](./src/projects/testing_with_mocha_chai/package.json)

### JEST

#### Issues

JEST from React has trouble using axios, so we need to add this configuration on `package.json`

```json
"jest": {
    "transformIgnorePatterns": [
      "node_modules/(?!axios)"
    ]
  },
```

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

### Shutdown server gracefully

```js
// app.js

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Closing server gracefully.');
    // Perform cleanup tasks and close server connections.
    server.close(() => {
      console.log('Server closed gracefully.');
      process.exit(0);
    });
  });
  
  process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Closing server gracefully.');
    // Perform cleanup tasks and close server connections.
    server.close(() => {
      console.log('Server closed gracefully.');
      process.exit(0);
    });
  })
```

**Close PORT forcefully:**

```sh

kill -9 $(lsof -t -i:5500)
```

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

### Stimulus on Vanilla JS with ESBuild

**Install Stimulus:**

```shell
yarn add -D stimulus
```

To allow stimulus to work on esbuild we need to add also a plugin

```shell
yarn add -D esbuild-plugin-stimulus
```

**Config `build:**.js` file

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

**Config application js:**

> In this example application js is `index.js`

```js
// ./src/libs/index.js

import { Application } from "stimulus";
import DialogController from "./stimulus/controllers/dialog_controller";

const app = Application.start();
app.register("dialog", DialogController);
```

**Stimulus controller:**

```js
// ./src/libs/stimulus/controllers

import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("connected");
  }
}
```

**Stimulus Targets:**

**Stimulus Actions:**

**Stimulus Outlets:**

## References

[ESBuild Documentation](https://esbuild.github.io/getting-started/#install-esbuild)
[ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
[Mozilla HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)
