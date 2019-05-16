var http = require("http");

// 创建服务器
var server = new http.Server();
/*更便捷的方法是：
var server = http.createServer(function (req, res) {

});*/

function testConnection() {
    console.log("使用了connection事件");
}

// 客户端请求到来时触发的事件
// 其中参数request为http.IncomingMessage的实例，response为http.ServerResponse的实例
server.on("request", function (requset, response) {
    // console.log(requset.url);
    /*http.IncomingMessage的三个事件：
        data：请求数据到来时促发
        end：请求数据完成时触发
        close：请求结束时触发，包括强制终止
    */
    console.log("-----------------------------------------");
    console.log(requset.httpVersion);
    console.log(requset.method);
    if (requset.url !== "/favicon.ico"){
        console.log(requset.url);
    }
    console.log(requset.headers);
    console.log("-----------------------------------------");
    response.writeHead(200, {"Content-Type": "text/html"});


    // 怎么当编码为ansi时才连接三次，而且文字乱码？？？
    // 乱码要添加head的meta
    response.write("<head><meta charset='UTF-8'></head>");
    response.write("使用了request事件</br>");
    response.end("hahaha\n");
});
// tcp建立连接时触发的事件

// 为什么请求了2次

server.on("connection", function () {
    testConnection();
});
// 服务器关闭时触发的事件，不是用户断开连接（点击stop按钮）
server.on("close", function () {
    console.log("服务器关闭，使用了close事件");
});

server.listen(3000);
//关闭服务为了触发close事件
// server.close();
