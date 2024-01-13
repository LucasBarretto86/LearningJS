# Learning ExpressJS

- [Learning ExpressJS](#learning-expressjs)
  - [Basic Node Server example](#basic-node-server-example)
  - [Installing ExpressJS](#installing-expressjs)
  - [Creating an Express app](#creating-an-express-app)
  - [Routing](#routing)
    - [Rendering HTML](#rendering-html)
    - [Redirecting](#redirecting)
    - [Route errors](#route-errors)
  - [View engine EJS](#view-engine-ejs)
    - [Installing EJS](#installing-ejs)
    - [Setup EJS](#setup-ejs)
    - [Creating view file for EJS](#creating-view-file-for-ejs)
    - [Rendering a view](#rendering-a-view)
    - [Utils](#utils)
      - [Shutdown server gracefully](#shutdown-server-gracefully)
      - [Close PORT forcefully](#close-port-forcefully)
  - [References](#references)

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
const express = require('express')
const PORT = 5500 // It should use .env

// Creating express app
const app = express()

// Setup port to listen for requests
// Returns an instance of the server, which would be used if use websocket
const server = app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`)
    console.warn(`http://localhost:${PORT}`)
})

// Routes and endpoints handling
app.get("/", (req, res) => {

  // Same as .write and .end
  res.send('<p>Express home page<p>')
})
```

## Routing

The dumbest way of be able to get multiple endpoints, would be ro repeat the statement `app.get`

```js
// app.js

//...

// Routes and endpoints handling
app.get("/", (req, res) => {

  // Same as .write and .end
  res.send('<p>Home page<p>')
})

app.get("/about", (req, res) => {

  // Same as .write and .end
  res.send('<p>About page<p>')
})

```

### Rendering HTML

On the example above we are sending as response html in a string, however express allow as to send a file not only strings:

```js
// app.js

...

// Routes and endpoints handling
app.get("/", (req, res) => {

  // sending a html file directly
  res.sendFile('./src/views/index.html', {root: __dirname})
})

app.get("/about", (req, res) => {

  // sending a html file directly
  res.sendFile('./src/views/about.html', {root: __dirname})
})

```

> Notice that on the first argument we sent a relative path, however the function `sendFile`, uses absolute paths, so we add an options, as second argument, where we specify the root folder from our project
> Instead of `__dirname`  we could use also the `path` module that node provides.

### Redirecting

To make a redirect using express we will use the function `redirect`:

```js
// app.js

// Routes and endpoints handling

...

app.get("/about-me", (req, res) => {

  // sending a html file directly
  res.redirect('/about')
})
```

### Route errors

In this initial example we will use the `use` function just to handle the error, since our project is small there's no problem,
but the `use` function is used for middleware code, because it's triggered every request.

In our scenario just to ensure it will only send our 404 view when status is 404, we will use a function `status` checking
the status our response has chained with the `sendFile`

Later we will see it done differently

```js
// app.js

// Routes and endpoints handling

...

// rendering error page
app.use((req, res) => {
    res.status(404).sendFile('./src/views/404.html', { root: __dirname })
    
})
```

## View engine EJS

### Installing EJS

```js
yarn add -D ejs
```

### Setup EJS

Within the `app.js` we need to instantiate EJS and put  it to usage

```js
// app.js

// Creating express app

...

// Register view engine
app.set('view engine', 'ejs')

// Routes and endpoints handling

...

```

 By default ejs looks into the project view folder to grab the view files it needs.
 In case you use another folder name or you use some sort of inner folder, then we need to define the name or the path like this:

```js
// app.js

// Creating express app

...

// Register view engine
app.set('view engine', 'ejs')
app.set('views', './src/folder-name/another-folder-name')

// Routes and endpoints handling

...

```

### Creating view file for EJS

To create EJS views, we will use 90% HTML syntax, however the file name will have the extension `ejs`,
the difference is that express will parse the file and if we use `<%= %>` it will allow us to assign variable values:

```ejs
<!-- views/index.ejs -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpressJS example - contact</title>
</head>

<body>
    <main>
        <h1>Contact page example</h1>
        <p>contact.ejs</p>
        <p>
            <%= content %>
        </p>
    </main>

    <nav>
        <ul>
            <li><a href="/index">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</body>

</html>
```

> Notice that the only difference between HTML is really the usage of `<%= content %>`

### Rendering a view

To render a view with express we are going to use within the `get` a function called `render` from the response object we have:

```js
// app.js

...

// Routes and endpoints handling

...

app.get("/contact", (req, res) => {
    res.render('contact', { content: "This content got in as EJS got parsed by express" })
})
```

As use the function `render` has two arguments, 'contact' and an object {}, this object is where we send the variables
that our ejs view will use, so the output will  be like this:

**Output:**

![contact-ejs print](./src/expressAppExample/src/assets/images//contact-ejs.png)

### Utils

#### Shutdown server gracefully

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

#### Close PORT forcefully

```sh

kill -9 $(lsof -t -i:5500)
```

## References

[Express](https://expressjs.com/)
[EJS view engine](https://ejs.co/)
[Express node Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
