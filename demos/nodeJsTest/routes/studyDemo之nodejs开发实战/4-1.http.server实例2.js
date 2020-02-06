var http = require("http");

// 创建服务器
var server = http.createServer(function (request, response) {
    var data = "";
    request.on("data", function (chunk) {
        data += chunk;
    });

    request.on("end", function () {
        var method = request.method;
        var url = request.url;

        // http.ServerResponse返回信息到客户端
        var headers = JSON.stringify(request.headers);
        var httpVersion = request.httpVersion;
        // 向客户端发送请求头
        response.writeHead(200, {"content-type": "text/html"});
        // 向客户端发送内容：write();
        var dataHtml= "<p>data: " + data + "</p>";
        var methodHtml = "<p>method: " + method + "</p>";
        var urlHtml = "<p>url: " + url + "</p>";
        var headersHtml = "<p>headers: " + headers + "</p>";
        var httpVersionHtml = "<p>httpVersion: " + httpVersion + "</p>";
        var responseData = dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml;
        // 结束请求
        response.end(responseData);
    });
});

server.listen(3000, function () {
    console.log("listening port at http://localhost:3000/");
});