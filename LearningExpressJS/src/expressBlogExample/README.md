# Blog project

In this new practical example we are going to create a simple implementation of a blog,

- [Blog project](#blog-project)
  - [Initial setup](#initial-setup)
    - [Add dependencies](#add-dependencies)
  - [Create `/` route](#create--route)
  - [Create `index.ejs` view](#create-indexejs-view)
  - [Create `/posts/new` route](#create-postsnew-route)
  - [Create `posts/new.ejs` view](#create-postsnewejs-view)
  - [Adjusting and improve our project](#adjusting-and-improve-our-project)
  - [Styling our blog](#styling-our-blog)
  - [Adding logger middleware](#adding-logger-middleware)
  - [Add database persistance with Mongoose](#add-database-persistance-with-mongoose)
  - [Create `/posts/create` route](#create-postscreate-route)

## Initial setup

On this project we will use the basic the flowing structure and code

```tree
.
├── app.js
├── package.json
├── README.md
├── src
│   └── views
│       └── 404.ejs
```

Where our basic app.js starts like this:

```js
// app.js

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//
// Listen for requests
const server = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});


//
// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views/");
```

### Add dependencies

In addition I will use two dependencies to handle ENVS and previews while we are developing the blog

1. [Add `dotenv` to handle my ENVS](../README.md#dotenv)
2. [Add `nodemon` to automatically update my server code as it gets modified](../README.md#nodemon)

## Create `/` route

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

> **Notice:** that we created an object and then we send it as a local variable to our view

## Create `index.ejs` view

Now let's create or adjust our index view that will render a list of posts we are going to create, so that will allows us
to access each of those posts.

```ejs
<!-- index.ejs -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog example - index</title>
  </head>

  <body>
    <header>
      <h1>Blog example Home page</h1>
    </header>

    <nav>
      <div>
        <ul>
          <li>
            <a href="/posts/new">Create new Post</a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <h2>Blog posts</h2>

      <div class="posts">
        <% posts?.forEach(post=> {%>
        <div class="post">
          <h3>#<%= post.id %> - <%= post.title %></h3>
          <p><i> <%= post.snippet %>... </i></p>
          <a href="#" class="post">See post</a>
        </div>
        <% }) %>
      </div>
    </main>
  </body>
</html>

```

> **Notice:** how interesting we use embedded javascript code with `<%-%>` to render the posts

## Create `/posts/new` route

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

## Create `posts/new.ejs` view

Now Let's create our view that will be used to submit creation of new blog posts, for that we are going to use our `index.ejs` as template,
and we will create the file within the `views` folder, but creating a new folder called `posts` where we gonna put our `new.ejs` file:

Our `posts/new.ejs` will have a form element that will trigger the post request for the create route for new posts route

```ejs
<!-- posts/new.ejs -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog example - post/new</title>
  </head>

  <body>
    <header>
      <h1>Blog example Home page</h1>
    </header>

    <nav>
      <div>
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <h2>Creating new blog post</h2>

      <form action="/posts/create" method="post">
        <div>
          <label for="post_title">Title:</label>
          <input
            type="text"
            name="post[title]"
            id="post_title"
            placeholder="Write title here..."
          />
        </div>

        <div>
          <div>
            <label for="post_content">Body:</label>
          </div>

          <textarea
            name="post[body]"
            id="post_body"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input type="submit" value="Create new posts" />
      </form>
    </main>
  </body>
</html>

```

> **Notice:** the form `action` property, that's the route that will handle the post creation itself, notice that we say on the `method` what kind of request it will be

## Adjusting and improve our project

Before go any further lets create some [partials](../../README.md#partials) to organize our project

1. Move head, header and nav elements to partials within the `views/partials` folder
2. Include new partials into the existing views removing the redundant static code
3. Create new partials and move some elements to partials
   1. Create `index/post.ejs`
   2. Render `index/post.ejs` on `index.ejs`
   3. Create `partials/footer.ejs`
   4. Create `posts/new/form.ejs`
4. Add static public folder to enable client access to specific files
5. Adding custom fonts and css to our project
   1. create `style.css`
   2. Adding middleware to define `style.css` client path
6. Add global variable to improve `nav.ejs` behavior while accessing endpoints
   1. Create variable to hold current `path`
   2. Add data properties to nav items

**Create `index/post.ejs`:**

```ejs
<!-- index/post.ejs -->

<div class="post">
  <h3>#<%= id %> - <%= title %></h3>
  <p><i> <%= snippet %>... </i></p>
  <a href="/posts/<%= id%>" class="post">See post</a>
</div>
```

**Render `index/post.ejs` on `index.ejs`:**

```ejs
    <main>
      <% posts?.forEach(post => { %> 
        <%- include("./index/post.ejs", {...post})%>
      <% }) %>
    </main>
```

**Create `partials/footer.ejs`:**

Now lets create and render a new partial for all existing views we got, footer will be like this:

```ejs
<!-- partials/footer.ejs -->

<footer>
  &copy; All rights reserved to Barretto.software 2024.
</footer>
```

> Now our existing and future views will have this basic structure
>
> ```html
><!DOCTYPE html>
><html lang="en">
>  <!-- HTML HEAD  -->
>
>  <body>
>    <!-- HEADER -->
>
>    <!-- NAV -->
>
>    <!-- CONTENT -->
>
>    <!-- FOOTER -->
>  </body>
></html>
>```

**Create `posts/new/form.ejs`:**

## Styling our blog

In order to style the project first we got to setup the [public folder](../../README.md#public-files---static) where we gonna put our `style.css`

**Setup public static folder:**

```js
// app.js

// Public static folder
app.use(express.static("public"));
```

**create style.css:**

First let's add some fonts from `google fonts` on our `head.ejs`, let's add this line:

```ejs
<!-- partials/head.ejs -->

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

Now let's create a `style.css` and put it within in the public folder

```css
@import url("https://fonts.googleapis.com/css2?family=Manjari&family=Roboto+Slab:wght@100;700&display=swap");

*,
*::after,
*:before {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

html {
  font-size: 18px;
  box-sizing: border-box;
  --primary-color: #4c4c4c;
  --secondary-color: #a9a9a9;
  --background-color: #f1f1f1;
}

body {
  display: grid;
  grid-template-rows: max-content max-content auto max-content;
  padding: 2rem 6rem;
  min-height: 100vh;
  max-width: 100vw;
  color: var(--primary-color);
  background-color: var(--background-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", serif;
  font-weight: bold;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2.25rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.75rem;
}

h5 {
  font-size: 1.5rem;
}

h6 {
  font-size: 1.25rem;
}

:not(h1, h2, h3, h4, h5, h6) {
  font-family: "Manjari", sans-serif;
  font-weight: normal;
  text-decoration: none;
}

header h1 {
  font-size: 5rem;
}

main {
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  margin: 0 auto;
  width: 100%;
}

section {
  display: flex;
  flex-direction: column;
  min-width: 50%;
  margin: 0 auto;
}

section h2 {
  margin-bottom: 1rem;
  margin-left: 1rem;
}

/* index.ejs */
section .post-wrapper {
  padding: 0.5rem 0;
}

section .post {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 0.25rem;
  color: inherit;
  text-decoration: none;
  border-left: 0 solid transparent;
  transition: border-width 0.2s ease;
  padding: 0 1rem;
}

section .post h4 {
  min-width: max-content;
}
section .post p {
  text-indent: 0.5ch;
}

section .post:hover {
  border-width: 8px;
  color: darkgray;
  font-style: italic;
}

section .post-wrapper + .post-wrapper {
  border-top: 1px solid darkgray;
}

/* posts/new.ejs */
section form {
  padding: 0.5rem;
}

section form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

section form div {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

section form input,
section form textarea {
  padding: 0.75rem 0.5rem 0.5rem;
  border: 1px solid;
  border-color: var(--secondary-color);
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

section form input:focus,
section form textarea:focus {
  border-color: var(--primary-color);
}

section form label {
  font-weight: 700;
}

section form input {
  min-height: 32px;
}

section form textarea {
  resize: none;
}

section form button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.2rem 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  color: var(--background-color);
  background-color: var(--secondary-color);
}

section form button:hover {
  cursor: pointer;
  background-color: var(--primary-color);
}

nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
  padding: 0.5rem;
}

nav h4 {
  color: var(--secondary-color);
}

nav li {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  column-gap: 0.5rem;
}

nav li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  min-width: 10ch;
}

nav li a,
a:visited {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  text-align: center;
}

nav li a:hover,
nav li a[data-selected="true"] {
  color: grey;
  font-style: italic;
  text-decoration: line-through;
}

nav li a[data-selected="true"] {
  pointer-events: none;
  cursor: unset;
}

footer {
  display: flex;
  align-self: flex-end;
  justify-content: center;
  width: 100%;
}
```

**Adding middleware to define style.css client path:**

Since some of our partials are in under sub-folders we won't be able to reach the public folder simply using `/style.css` in our `head.ejs` because this file is rendered in different places relatively, so we will create a small middleware to define a a variable to keep the client base path for our public folder:

 ```js
//  app.js

app.use((req, res, next) => {
  res.locals.baseURL = req.baseUrl;
  next();
 });
 ```

This simple middleware sets a "global" variable within our response that allow us to know exactly the `baseUrl` or root url from our application

Then, to be able to link our remote path we add this line to our `head.ejs`

 ```ejs
<!-- partials/head.ejs -->

   <link rel="stylesheet" href="<%= baseURL %>/style.css">
```

**Create variable to hold current `path`:**

Let's use our existing middleware to add another variable

 ```js
//  app.js

app.use((req, res, next) => {
  res.locals.baseURL = req.baseUrl;
  res.locals.path = req.path;

  next();
 });
 ```

**Add data properties to nav items:**

Now let's update our `nav.ejs` view:

```ejs
<nav>
  <h4>A Barretto.software website!</h4>

  <ul>
    <li><a href="/" data-selected=<%= path === "/"%>>Home</a></li>
    <li><a href="/posts/new" data-selected=<%= path === "/posts/new"%>>New Post</a></li>
  </ul>
</nav>
```

Now let's add specific style to be applied if the condition for data is true:

```css
nav li a:hover,
nav li a[data-selected="true"] {
  color: grey;
  font-style: italic;
  text-decoration: line-through;
}

nav li a[data-selected="true"] {
  pointer-events: none;
  cursor: unset;
}
```

## Adding logger middleware

Using the concepts of middleware, let's create a [Logger middleware](../../README.md#creating-a-logger-middleware) to our application:

```js
// src/utils/logger.js

module.exports = (req, res, next) => {
  let queries = JSON.stringify(req.query);
  let params = JSON.stringify(req.params);

  let log = ` => ${req.method} ${req.url}, Queries: ${queries}, Parameters: ${params}`;

  console.log(log);

  next();
};
```

> **Notice:** that we used ES5 syntax only to keep it mode Node-like

Now let's setup our middleware in our server file:

```js
// app.js

const logger = require("./src/utils/logger");

....

// Middlewares

// Logger Middleware
app.use(logger);
```

Now as we make requests:

**Output:**

```mono
 => GET /posts/new?test=something, Queries: {"test":"something"}, Parameters: {}
```

## Add database persistance with Mongoose

To be able to move along with this project we need to setup a [MongoDB account](../../README.md#create-mongodb-account-cluster-and-collection) and also setup [Mongoose](../../README.md#mongoose)

After following this steps we must have a middleware to connect to our MongoDB that looks like this:

```js
// app.js
const mongoose = require("mongoose");
const logger = require("./src/utils/logger");
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

//
// Mongoose database connection first, only then starts listening to the server
mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Connected to database!");
      console.log(`Listening on http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.error(error));
```

And a model similar to that:

```js
// models/post.js

const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: false },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Define a method to generate the snippet from the body
postSchema.methods.generateSnippet = (maxLength = 150) => {
  return this.body.length > maxLength
    ? this.body.substring(0, maxLength) + "..."
    : this.body;
};

// Middleware to automatically generate snippet
postSchema.pre("save", (next) => {
  this.snippet = this.generateSnippet();
  next();
});

module.exports = model("Post", postSchema);

```

## Create `/posts/create` route
