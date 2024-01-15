# Learning ExpressJS

- [Learning ExpressJS](#learning-expressjs)
  - [What is ExpressJS?](#what-is-expressjs)
  - [Basic plain node Server](#basic-plain-node-server)
  - [Getting starr with ExpressJS](#getting-starr-with-expressjs)
    - [Installing ExpressJS](#installing-expressjs)
    - [Creating first Express server](#creating-first-express-server)
  - [Handling routes, requests and responses](#handling-routes-requests-and-responses)
    - [Rendering HTML](#rendering-html)
    - [Redirecting](#redirecting)
    - [Route errors](#route-errors)
  - [View engine EJS](#view-engine-ejs)
    - [Installing EJS](#installing-ejs)
    - [Setup EJS](#setup-ejs)
    - [Creating view file for EJS](#creating-view-file-for-ejs)
    - [Rendering a view](#rendering-a-view)
  - [Blog project](#blog-project)
    - [Additional dependencies](#additional-dependencies)
    - [Adding blog routes and views](#adding-blog-routes-and-views)
      - [Create blog index route and views](#create-blog-index-route-and-views)
      - [Create posts route and views](#create-posts-route-and-views)
  - [References](#references)

---

## What is ExpressJS?

**GPT: What is ExpressJS?**

> Express.js, commonly known as Express, is a minimal and flexible web application framework for Node.js. It provides a set of features for building web and mobile applications quickly and efficiently. Express is widely used in the Node.js community and is known for its simplicity, ease of use, and robust set of features
>
> **Key features**:
>
> 1. **Routing:** Simple and efficient route handling for various HTTP methods.
> 2. **Middleware:** Modular functions to handle aspects of the request-response cycle.
> 3. **Template Engines:** Support for various template engines like EJS, Pug, and Handlebars.
> 4. **Static File Serving:** Built-in middleware for serving static files easily.
> 5. **HTTP Utility Methods:** Simplifies working with HTTP requests and responses.
> 6. **RESTful API Development:** Ideal for designing and implementing RESTful APIs.
> 7. **Flexibility:** Minimalistic and unopinionated, allowing developers to structure applications as they prefer.
> 8. **Widely Adopted:** Popular and widely used in the Node.js community.
> 9. **Performance:** Lightweight and fast, suitable for building scalable applications.
> 10. **Ecosystem:** Large and vibrant ecosystem with numerous third-party middleware and extensions.

## Basic plain node Server

Below you can see a very basic server implementation using only Node, that will allow you to understand better how express works under the hood.

```js
//./src/basicNodeServerExample/server.js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // Request object
    console.log(req.url, req.method);

    // Response object
    res.setHeader("Content-Type", "text/html");


    // Simple router implementation
    let path = "./views"

    switch (req.url) {
        case "/":
            // Success example
            statusCode = 200
            path += "/index.html"
            break;
        case "/about":
            // Success example
            res.statusCode = 200
            path += "/about.html"
            break;
        case "/about-me":
            // Redirect example
            res.statusCode = 301
            res.setHeader("Location", "/about")
            break;
        default:
            // Not existing endpoint example
            res.statusCode = 404
            path += "/404.html"
            break;
    }

    // Simple view engine implementation
    fs.readFile(path, (error, data) => {
        try {
            res.write(data)
        } catch (e) {
            console.log(e, error)
        } finally {
            res.end()
        }
    })
});

server.listen(5500, "localhost", () => {
    console.log("Listening for requests on port 5500");
});
```

> See an example project on: `./src/basicNodeServerExample/`

## Getting starr with ExpressJS

### Installing ExpressJS

```sh
yarn add express

# OR

npm install express
```

### Creating first Express server

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
    console.log(`Listening for requests on port ${PORT}`)
})

// Basic routes handling
app.get('/', (req, res) => {
  // Same as .write and .end
  res.send('Hello, Express!');
})
```

> I also added two functions to handle server process as we close it, look at [Closing server gracefully](../README.md#shutdown-server-gracefully)

## Handling routes, requests and responses

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

app.get("/about-us", (req, res) => {

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
app.set('views', './src/views')

// Routes and endpoints handling

```

> Notice that in our case we added a second statement because our `views` folder isn't directly on the root folder, so we need to specify the relative path where our `views` folder is

### Creating view file for EJS

To create EJS views, we will use 90% HTML syntax, however the file name will have the extension `ejs`,
the difference is that express will parse the file and if we use `<% %>` it will allow us run javascript
on the server side, which means we can make our view more dynamic, most parte of the we just want use it for variables
or simple scripts that our server needs to handle specific aspects from our view,

```html
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
          <p><%= content %></p>
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

> Notice that the only difference between HTML is really the usage of embedded Javascript `<%= content %>`

| Embed              | Description                                                                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<% code_here %>`  | Executes JavaScript code without rendering it on the final HTML. Use for control flow or logic.                                                   |
| `<%= code_here %>` | Executes JavaScript code and renders its output on the final HTML. HTML-escapes the output to prevent XSS.                                        |
| `<%- code_here %>` | Executes JavaScript code and renders its output on the final HTML. Does not HTML-escape the output. Use when you trust the source of the content. |
| `<%# code_here %>` | Comments that won't render in the final HTML. Useful for adding comments within your EJS template.                                                |

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

## Blog project

In this new practical example we are going to create a simple implementation of a blog,
to go along you can create new project or move along with the same we used on the topics above since the basis will be same

I will choose to create a separate the [project](./src/expressBlogExample/app.js) and also add few more dependencies that are very
often used in real life apps

### Additional dependencies

1. [Add `dotenv` to handle my ENVS](../README.md#dotenv)
2. [Add `nodemon` to automatically update my server code as it gets modified](../README.md#nodemon)

### Adding blog routes and views

#### Create blog index route and views

**Adjust our get index route:**

First on the file `app.js` let's add a new route to handle how we gonna create our blog posts

```js
// app.js

app.get("/", (req, res) => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum",
            snippet: "Lorem ipsum dolor sit amet, consectetur",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            title: "Lorem ipsum",
            snippet: "Lorem ipsum dolor sit amet, consectetur",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    res.render('index', { posts: posts })
})

```

> Notice that we created an object and then we send it as a local variable to our view

**Create `index.ejs` view:**

Now let's create or adjust our index view that will render a list of posts we are going to create, so that will allows us
to access each of those posts.

```html
<!-- index.ejs -->
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blog example - index</title>

      <style>
          /* reset */
          html {
              font-size: 16px;
              box-sizing: border-box;
          }

          *,
          *::after,
          *::before {
              margin: 0;
              padding: 0;
              box-sizing: inherit;
          }

          body {
              display: grid;
              grid-template-rows: minmax(0, max-content);
              grid-template-columns: minmax(8rem, max-content) auto;
              gap: 1rem;
              height: 100vh;
          }

          header {
              grid-column: 1 / -1;
          }

          nav {
              padding: 1rem .5rem;
          }

          main {
              padding: 1.25rem 1rem 2rem;
          }

          h2 {
              margin-bottom: 1rem;
          }

          .posts {
              display: flex;
              flex-direction: column;
          }

          a.post {
              display: flex;
              column-gap: .5rem;
              text-decoration: none;
              color: gray;
              padding: .5rem .25rem;
          }

          a.post:hover {
              filter: brightness(0);
          }

          .post+.post {
              border-top: 1px solid black;
          }
      </style>
  </head>

  <body>
      <header>
          <h1>Blog example Home page</h1>
      </header>

      <nav>
          <ul>
              <li><a href="/posts/new">Create new Post</a></li>
          </ul>
      </nav>

      <main>
          <h2>Blog posts</h2>
          <div class="posts">
              <%- 
                  posts?.map((post)=> {
                      return `<a href="#" class="post"><b>#${post.id} - ${post.title}:</b><i>${post.snippet}...</i></a>`
                  }).join('')
              %>
          </div>
      </main>
  </body>
</html>
```

> Notice how interesting we use embedded javascript code with `<%-%>` to render the posts

#### Create posts route and views

**Create new route:**

On `app.js` let's add the new route we need:

```js
// app.js

...

// Routes

...

app.get("/posts/new", (req, res) => {
    res.render('posts/new')
})
```

**Create `posts/new.ejs` view:**

Now Let's create our view that will be used to submit creation of new blog posts, for that we are going to use our `index.ejs` as template,
and we will create the file within the `views` folder, but creating a new folder called `posts` where we gonna put our `new.ejs` file:

Our `posts/new.ejs` will have a form element that will trigger the post request for the create route for new posts route

```html
<!-- posts/new.ejs -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog example - post/new</title>

    <style>
        /* reset */
        html {
            font-size: 16px;
            box-sizing: border-box;
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        body {
            display: grid;
            grid-template-rows: minmax(0, max-content);
            grid-template-columns: minmax(8rem, max-content) auto;
            gap: 1rem;
            height: 100vh;
        }

        header {
            grid-column: 1 / -1;
        }

        nav {
            padding: 1rem .5rem;
        }

        main {
            padding: 1.25rem 1rem 2rem;
        }

        fieldset {
            max-width: max-content;
            border-radius: .5rem;
            padding: 1rem .5rem 1.25rem;
        }

        fieldset>legend>h2 {
            margin: 0 auto;
        }

        .form {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            max-width: 20rem;
        }

        .form>.field {
            display: flex;
            flex-direction: column;
            row-gap: .25rem;
        }

        form>.field>label {
            font-weight: 600;
        }

        .form>.field>textarea {
            padding: .25rem;
            resize: none;
            text-indent: -20ch;
        }
    </style>
</head>

<body>
    <header>
        <h1>Blog example Home page</h1>
    </header>

    <nav>
        <ul>
            <li><a href="/">Home Page</a></li>
        </ul>
    </nav>

    <main>
        <fieldset>
            <legend>
                <h2>Creating new blog post</h2>
            </legend>

            <form class="form" action="/posts/create" method="post">
                <div class="field">
                    <label for="post_title">Title:</label>
                    <input type="text" name="post[title]" id="post_title" placeholder="Write title here...">
                </div>

                <div class="field">
                    <label for="post_content">Post body:</label>
                    <textarea name="post[body]" id="post_body" cols="30" rows="10" placeholder="Write body here...">
                    </textarea>
                </div>
                <input type="submit" value="Create new posts">
            </form>
        </fieldset>
    </main>
</body>

</html>
```

> Notice the form `action` property, that's the route that will handle the post creation itself, notice that we say on the `method` what kind of request it will be

## References

[Express](https://expressjs.com/)
[EJS view engine](https://ejs.co/)
[Express node Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
