var http = require("http");
// 从服务端获取数据
var requestData = "";

// 返回一个http.ClientRequest()实例
http.request({
    "host": "127.0.0.1",
    "port": "3000",
    "method": "get"
},function (response) {
    response.on("data", function (chunk) {
        requestData += chunk;
    });
    response.on("end", function () {
        console.log(requestData);
    });
}).end();