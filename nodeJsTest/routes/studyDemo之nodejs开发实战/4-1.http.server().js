var http = require("http");

var server = new http.Server();

server.on("request", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("hello node.js");
});

server.listen(3000, function () {
    console.log("server running port at http://127.0.0.1:3000/");
});