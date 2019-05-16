// 打开文件
var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "/fstext.txt");
// 异步, fd为文件描述符
fs.open(filePath, "r", function (err, fd) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fd);
    }
    // 同步打开
    try {
        var fd = fs.openSync(filePath, "r", "0666");
        console.log(fd);
    }
    catch(err) {
        console.log(err);
    }
});