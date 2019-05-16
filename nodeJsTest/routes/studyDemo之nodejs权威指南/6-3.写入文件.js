var fs = require("fs");
var path = require("path");
// 异步
var writeData = "waster miss u";
var filePath = path.join(__dirname, "./fstext.txt");
// flag为读写该文件的方式，mode为打开文件的权限，第一位必须是0；
fs.writeFile(filePath, writeData + "异步\n", {flag: "a+", encoding: "utf-8", mode: "0666"}, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("异步写入成功");
    }
    // 同步
    try {
        fs.writeFileSync(filePath, writeData + "同步\n", {flag: "a+"});
        console.log("同步写入成功");
    }
    catch (err) {
        console.log(err);
    }
    
    // 在文件末尾添加数据，flag默认为a；
    fs.appendFile(filePath, writeData + "末尾添加异步\n", function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("异步追加写入成功");
        }
        // 在文件末尾添加数据，同步，flag默认为a；
        try {
            fs.appendFileSync(filePath, writeData + "末尾添加同步\n");
            console.log("同步追加写入成功");
        }
        catch(err) {
            console.log("err");
        }
    });

});

