# Learning ExpressJS

- [Learning ExpressJS](#learning-expressjs)
  - [Basic Node Server example](#basic-node-server-example)
  - [Installing ExpressJS](#installing-expressjs)
  - [Creating an Express app](#creating-an-express-app)

## Basic Node Server example

On the link below you can see a very basic server implementation using only Node, that will allow you to understand better how express works under the hood.

[Basic Node Server](/specifics/LearningJS/src/projects/basicNodeServerExample/server.js)

## Installing ExpressJS

```sh
yarn add express

# OR

npm install express
```

## Creating an Express app

Express doesn't require setup or anything, however you need to have a initial JS file that will instantiate the express on the project root folder, normally this file is called `app.js` or `server.js`, here is a simple example how to use express on this file:

```js
// app.js
const express = require("express");

// Creating express app
const app = express();

// Setup port to listen for requests
app.listen(5500);

// Routes and endpoints handling
app.get("/", (req, res) => {
  // Same as .write and .end
  app.send("<p>Express home page<p>");
});
```
