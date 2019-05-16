'use strict';
// 相对路径若在同一级目录下，也应使用"./moduleName"的形式
// 使用require引入模块
// 这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块
var hello = require('./hello');
var name = "ioiy";

// 引用hello模块的hello方法；
console.log(hello.herName);
hello.hello(name);
// 在下一次事件响应中执行代码
process.nextTick(function () {
    console.log("hahahaha");
});
// 引用hello模块的ishername方法
hello.isHerName();
// Node.js进程本身的事件就由process对象来处理
// 程序即将退出时的回调函数
process.on('exit', function () {
    console.log("will to exit");
});
// 判断执行环境
if (typeof window === "undefined") {
    console.log("nodejs");
}
else {
    console.log("browser");
}

// fs异步读取文件
var fs = require('fs');
/*
// 读取文件内容
// 不传入文件编码时，data返回buffer对象
fs.readFile("bin/example.txt","utf-8",function (error, data) {
    // 当文件不存在时error
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
        console.log(data.length);
        // 当不传入文件编码要将buffer对象转为一个string
        // console.log(data.toString("utf-8"));
        // 将string转为buffer对象
        var buffer = Buffer.from(data, 'utf-8');
        console.log(buffer);
    }
});
*/

// fs同步读取文件
// 使用trycatch捕获错误
try {
    var dataSync = fs.readFileSync("bin/example.txt","utf-8");
    console.log(dataSync);
}
catch (e) {
    console.log(e);
}

// fs写入数据到文件,若文件原有数据，则覆盖原有数据
var writeData = "hello, write data!";
fs.writeFile('bin/example.txt',writeData,function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("write data success")
    }
});

//fs同步写入数据
var dataWriteSync = "Sync data write";
fs.writeFileSync("bin/example.txt", dataWriteSync);

// fs获取文件信息
fs.stat("bin/example.txt",function (err,stats) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("----------");
        console.log(stats);
        console.log("is file: " + stats.isFile());
        console.log("is directory: " + stats.isDirectory());
        if (stats.isFile()) {
            console.log("文件大小：" + stats.size);
            console.log("创建时间：" + stats.birthtime);
            console.log("修改时间：" + stats.mtime);
        }
        console.log("----------")
    }
});

// fs异步获取文件信息
var statSync = fs.statSync("bin/example.txt");
console.log("同步获取文件信息：" );
if (statSync.isFile()) {
    console.log("文件大小：" + statSync.size);
    console.log("创建日期：" + statSync.birthtime);
    console.log("修改日期：" + statSync.mtime);
}
// 反复执行的代码使用异步
// 只执行一次的代码使用同步（例如启动时读取，关闭时写入）

// 以流的形式读取文件
var rs = fs.createReadStream("bin/example.txt","utf-8");
// data事件表示读取文件流
rs.on("data",function (chunk) {
    console.log("chunk: " + chunk);
});
// end事件表示文件流已经到末尾
rs.on("end",function () {
    console.log("end");
});
// error事件表示文件流读取出错
rs.on("error",function (error) {
    console.log("error" + error);
});

// 以流的形式写入文件,调用write方法写入，以end方法结束写入
var writeDataIO = fs.createWriteStream("bin/example.txt","utf-8");
writeDataIO.write("写入001");
writeDataIO.write("写入002","utf-8");
writeDataIO.end();

// pipe,数据自动从Readable流进入Writable流，这种操作叫pipe
var pipeReadData = fs.createReadStream("bin/example.txt");
var pipeWriteData = fs.createWriteStream("bin/examplePipe.txt");
pipeReadData.pipe(pipeWriteData);
// 默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
pipeReadData.pipe(pipeWriteData, {end: false});

