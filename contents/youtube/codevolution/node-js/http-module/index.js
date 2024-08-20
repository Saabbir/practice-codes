const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // handle homepage
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  }

  // handle api endpoint
  else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "Saabbir Hossain" }));
  }

  // handle about page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  }

  // handle me endpoint
  else if (req.url === "/me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("./me.html", { encoding: "utf-8" });
    html = html.replace(/\{\{name\}\}/g, "Saabbir Hossain");
    res.end(html);
  }

  // handle lorem endpoint
  else if (req.url === "/lorem") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/lorem.html").pipe(res);
  }

  // handle 404 page
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
