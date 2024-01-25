const express = require("express");

// Creating express app
const app = express();

// Setup port to listen for requests
const server = app.listen(5502, () => console.log(`Listening port: 5502`));

// Register view engine
app.set("view engine", "ejs");
app.set("views", "./src/views/");

// Static files
app.use(express.static('public'))

// Logger Middlewares
app.use((req, res, next) => {
  let log = ` => ${req.method} ${req.url}, Parameters: ${JSON.stringify(req.params)}`;

  console.log(log);
  next();
});

// Routes and endpoints handling
app.get("/", (req, res) => {
  res.sendFile("./src/views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./src/views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    content: "This content got in as EJS got parsed by express",
  });
});

// Only will be reached if no response has been sent
app.use((req, res) => {
  res.status(404).sendFile("./src/views/404.html", { root: __dirname });
});

// Util commands to be able to shutdown server gracefully
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
