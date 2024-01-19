# Blog project

In this new practical example we are going to create a simple implementation of a blog,

- [Blog project](#blog-project)
  - [Initial setup](#initial-setup)
    - [Add dependencies](#add-dependencies)
  - [Create `/` route](#create--route)
  - [Create `index.ejs` view](#create-indexejs-view)
  - [Create `/posts/new` route](#create-postsnew-route)
  - [Create `posts/new.ejs` view](#create-postsnewejs-view)
  - [Adjusting and improve views with partials](#adjusting-and-improve-views-with-partials)
  - [Styling our blog](#styling-our-blog)
  - [Adding logger middleware](#adding-logger-middleware)

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

## Adjusting and improve views with partials

Before go any further lets create some [partials](../../README.md#partials) to organize our project

1. Move head, header and nav elements to partials within the `views/partials` folder
2. Include new partials into the existing views removing the redundant static code
3. Create new partials and move some elements to partials
   1. Create `index/post.ejs`
   2. Render `index/post.ejs` on `index.ejs`
   3. Create `partials/footer.ejs`
   4. Create `posts/new/form.ejs`

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

Now let's create a `style.css` and put it within in the public folder

```css

```

> **Trick:** Since my head is a partial that is in a general partial folders, my partials that renders the head under sub-folders won't be able to reach the public folder unless we use a small middleware:
>
> ```js
>app.use((req, res, next) => {
>  res.locals.baseURL = req.baseUrl;
>  next();
> });
> ```
>
> This simple middleware sets a "global" variable within our application that allow us to know exactly the baseUrl from our application
>
> That's how we gonna use on our `head.ejs` partial
>
> ```ejs
>   <link rel="stylesheet" href="<%= baseURL %>/style.css">
>```

## Adding logger middleware
