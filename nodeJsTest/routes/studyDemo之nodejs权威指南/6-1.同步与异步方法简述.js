var fs = require("fs");
var path = require("path");
/*
    fs模块中，对文件与目录存在同步（含sync）与异步方法。
    同步方法执行时，其后续代码需等待
    异步方法执行时，将操作结果作为回调函数的参数进行返回，可立即执行后续代码（返回顺序可能会不一致）
    若要确保某文件读取完后读取另一个文件的顺序不变，使用下述方法：
*/

// 当直接使用相对路径"./fstext.txt"时，出现错误找不到文件
// 此时使用path
var filePath = path.join(__dirname, "./fstext.txt");
fs.readFile(filePath,  function (err,  data) {
    // 第一个回调代码
    if (err) {
        console.log(err);
    }
    else {
        // 读取到的内容为二进制内容，需转换
        console.log(data.toString());
    }

    // flag的值有：
    // r(不存在抛出异常)
    // r+(不存在抛出异常，读写)
    // rs(不存在抛出异常, 以同步方式读取文件并忽略文件缓存，建议在网络系统下使用，对性能有影响
    // w, wx(以排他方式写入), w+(不存在创建，存在清空），wx+;
    // a, ax, a+, ax+;
    // 回调函数callback
    fs.readFile(filePath,{encoding: "utf-8", flag: "r"},function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
});
// 只有少数情况（读取配置文件启动服务器等）需使用同步方法
