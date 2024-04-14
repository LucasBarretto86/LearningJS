require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const logger = require("./src/utils/logger");
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Models
const Post = require("./src/models/post");

// Server Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
// Mongoose database connection first, only then starts listening to the server
mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Connected on database and listening on:\nhttp://localhost:${PORT}`
      )
    )
  )
  .catch((error) => console.error(error));

// Middlewares
// Middleware to define local variables
app.use((req, res, next) => {
  res.locals.baseURL = req.baseUrl;
  res.locals.path = req.path;
  next();
});

// Logger Middleware
app.use(logger);

//
// Public static folder
app.use(express.static("public"));

//
// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views/");

//
// Routes
app.get("/", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum",
      snippet: "Lorem ipsum dolor sit amet, consectetur",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      snippet: "Lorem ipsum dolor sit amet, consectetur",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.post("/posts/new", async (req, res) => {
  try {
    // Extract data from the form
    const { title, body } = req.body.post;

    // Create a new Post using the Mongoose model
    const newPost = new Post({
      title,
      body,
    });

    // Save the new post to the database
    await newPost.save();

    // Redirect or send a response as needed
    res.redirect("/"); // Redirect to home page, for example
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use((req, res) => {
  res.status(404).render("404");
});
