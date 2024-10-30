const express = require("express");

// Creating express app
const app = express();

// Setup port to listen for requests
const server = app.listen(5502, () => console.log(`Listening http://localhost:5502`));

// Register view engine
app.set("view engine", "ejs");
app.set("views", "./src/views/");

// Static files
app.use(express.static("public"));

// Global variables
app.use((req, res, next) => {
  res.locals.baseURL = req.baseUrl;
  next();
})

// Logger Middleware
app.use((req, res, next) => {
  let log = ` => ${req.method} ${req.url}, Parameters: ${JSON.stringify(
    req.params
  )}`;

  console.log(log);
  next();
});

// Routes, Requests and Responses
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Redirecting
app.get("/index", (req, res) => {
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    content: "This content got in as EJS got parsed by express",
  });
});

// Middleware to handler unmatched routes
app.use((req, res) => {
  res.status(404).render("404");
});

// Gracefully shutdown
process.on("SIGTERM", () => {
  console.log("Received SIGTERM signal. Closing server gracefully.");
  // Perform cleanup tasks and close server connections.
  server.close(() => {
    console.log("Server closed gracefully.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Closing server gracefully.");
  // Perform cleanup tasks and close server connections.
  server.close(() => {
    console.log("Server closed gracefully.");
    process.exit(0);
  });
});
