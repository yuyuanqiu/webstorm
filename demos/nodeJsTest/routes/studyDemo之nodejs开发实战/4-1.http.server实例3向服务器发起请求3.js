var http = require("http");
var requestData = "";
var option = {
    "host": "127.0.0.1",
    "port": "3000"
};

// request方法同get方法，都返回一个http.ClientRequest实例
// 主要事件：response，当受到响应时触发
// 主要方法request.write()，发送请求数据
// response.end()，发送请求数据完毕
var request = http.request(option/*, function (response) {
    response.on("data", function (chunk) {
        requestData += chunk;
    });
    response.on("end", function () {
        console.log(requestData);
    });
}*/);

request.on("response", function (response1) {
    response1.on("data", function (chunk) {
        requestData += chunk;
    });
    response1.on("end", function () {
        console.log(requestData);
    });
}).end();
// 一定要添加end()不然没有输出内容

