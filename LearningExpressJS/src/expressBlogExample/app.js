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

  res.render("index", { posts: posts });
});

app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.use((req, res) => {
  res.status(404).render("404");
});

// Server gracefully shutdown
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
