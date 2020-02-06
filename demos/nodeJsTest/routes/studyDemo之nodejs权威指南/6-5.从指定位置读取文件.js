var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "./fstext.txt");

//打开文件
fs.open(filePath, "r", "0666", function (err, fd) {
    if (err) {
        console.log(err);
    }
    else {
        // 创建缓存区
        var buffer = new Buffer(128);
        // read(文件描述符，开始存入位置，存入长度，文件读取位置，回调函数（err，实际读取的字节数，缓存区对象)
        fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(bytesRead);
                console.log(buffer.slice(0,100).toString());
            }
        });

                                        //       error 还是从头开始读取？？？

       /* // 如果文件读取位置为null，则从文件当前读取位置开始读取文件
        fs.read(fd, buffer, 0, 3, null, function(err, bytesRead, buffer) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(bytesRead);
                console.log(buffer.toString());
            }
        });*/
        // 同步方式读取
        try {
            var bytesRead = fs.readSync(fd, buffer, 0, 3, 9);
            console.log(buffer.slice(0, bytesRead).toString());
        }
        catch (err) {
            console.log(err);
        }
        // 从缓存区写入数据到文件
        fs.write(fd, buffer, 0, bytesRead, 15, function (err, written, buffer) {
            console.log(buffer.slice(0, written).toString() + "waster");
        })
    }

});