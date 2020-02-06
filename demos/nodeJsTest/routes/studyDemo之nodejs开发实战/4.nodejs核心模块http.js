// 创建一个简单的nodejs服务器
var http = require("http");

var server = http.createServer(function (request, responce) {
    responce.writeHead(200, {"Content-Type": "text/plain"});
    responce.end("server running at http://localhost:3000, hello node.js");
});

server.listen(3000, function () {
    console.log("server running at http://localhost:3000/")
});