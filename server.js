const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secretdata") {
    res.end("no secret data");
  }
  res.end("hello");
});
server.listen(5555);