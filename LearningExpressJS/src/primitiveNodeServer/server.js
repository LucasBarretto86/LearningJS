const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Response object
  res.setHeader("Content-Type", "text/html");

  // Simple router implementation
  let path = "./views";

  switch (req.url) {
    case "/":
      // Success example
      statusCode = 200;
      path += "/index.html";
      break;
    case "/about":
      // Success example
      res.statusCode = 200;
      path += "/about.html";
      break;
    case "/about-me":
      // Redirect example
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      // Not existing endpoint example
      res.statusCode = 404;
      path += "/404.html";
      break;
  }

  // Simple view engine implementation
  fs.readFile(path, (error, data) => {
    try {
      res.write(data);
    } catch (e) {
      console.log(e, error);
    } finally {
      res.end();
    }
  });
});

server.listen(5500, "localhost", () => {
  console.log("Listening for requests on port 5500");
});
