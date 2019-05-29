var path = require("path");
var fs = require("fs");
try {
    // 当直接使用相对路径"./fstext.txt"时，出现错误找不到文件
    // 此时使用path
    var filePath = path.join(__dirname, "./fstext.txt");
    var data = fs.readFileSync(filePath, {encoding: "utf-8", flag: "r",});
    var FileEveryLine = data.split("\r\n");
    var FileLength = FileEveryLine.length;
    var saveFileNotNone = [];
    FileEveryLine.forEach(function (value, index, array) {
        var trimStr = value.trim();
       if (trimStr !== "") {
           console.log(value, index);
           saveFileNotNone.push(trimStr);
       }
    });
    console.log(saveFileNotNone);
}
catch(err) {
    console.log(err);
}
