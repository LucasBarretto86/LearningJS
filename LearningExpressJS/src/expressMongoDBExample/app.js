require("dotenv").config();

const express = require("express");
const logger = require("./src/utils/logger");
const { connect } = require("./src/factories/db");
const app = express();
const PORT = process.env.PORT || 3000;

// Models
const Post = require("./src/models/post");

// Server Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Establishing connection with MongoDB database
let connection;

connect()
  .then((db) => {
    connection = db;

    // Start the server
    app.listen(PORT, () => {
      console.log(
        `Connected on database and listening on:\nhttp://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Error starting the app:", error);
  });

// Middleware to define local variables
app.use((req, res, next) => {
  res.locals.baseURL = req.baseUrl;
  res.locals.path = req.path;
  next();
});

// Logger Middleware
app.use(logger);

// Public static folder
app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views/");

//
// Routes
app.get("/", async (req, res) => {
  const posts = await Post.find(connection);

  if (!posts) {
    res.render("index", { posts });
  } else {
    res.render("index", { posts: [] });
  }
});r e

app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

// Example route to create a post
app.post("/posts/new", async (req, res) => {
  const { post } = req.body;
  const response = await Post.create(connection, post);

  res.json(response);
});

// Middleware to render error views for unmatched endpoints or server errors
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(404).render("404");
  res.status(500).render("500", { error: `Internal Server Error: ${err}` });
});
