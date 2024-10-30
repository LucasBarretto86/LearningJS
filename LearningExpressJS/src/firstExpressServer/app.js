const express = require("express");

// Creating express app
const app = express();

// Setup port to listen for requests
const server = app.listen(5501, () => console.log(`Listening http://localhost:5501`));

// Routes, Requests and Responses
app.get("/", (req, res) => {
  // res.send("<p>Simple first response</p>");
  res.sendFile("./src/views/index.html", { root: __dirname });
});

// Redirecting
app.get("/index", (req, res) => {
  res.redirect("/");
});

// Middleware to handler unmatched routes
app.use((req, res) => {
  res.status(404).sendFile("./src/views/404.html", { root: __dirname });
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
