var http = require("http");
// 导入文件模块并对数组进行去重
var arrMoudle = require("./3.模块加载1");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("hello world! Welcome to Node.js." + arrMoudle.noRepeat([1,2,1,1,1,2,33,55,6,6,9,0,1]));
}).listen(3000);

console.log("server running at http://localhost:3000/");