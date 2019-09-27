var http = require("http");
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"content-type": "text/html"});
    // 必须给文本写入编码，否则乱码
    response.write("<head><meta charset='UTF-8'></head>");
    response.write("<h1>欢迎来到IOIY-AIG的应用程序</h1>");
    response.end(console.log("http://localhost:3000"));

}).listen(3000);
