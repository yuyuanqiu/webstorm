var http = require("http");

var requestData = "";
http.get({
    "host": "127.0.0.1",
    "method": "get",
    "port": "3000"
},function (response) {
    response.on("data", function (chunk) {
        requestData += chunk;
    });
    response.on("end", function () {
        console.log(requestData);
    });
}).end();