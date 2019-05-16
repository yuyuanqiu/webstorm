var path = require("path");
var fs = require("fs");
try {
    // 当直接使用相对路径"./fstext.txt"时，出现错误找不到文件
    // 此时使用path
    var filePath = path.join(__dirname, "./fstext.txt");
    var data = fs.readFileSync(filePath, {encoding: "utf-8", flag: "r"});
    console.log(data);
}
catch(err) {
    console.log(err);
}
