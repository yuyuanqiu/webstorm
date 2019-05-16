// 判断一个对象是否为buffer对象:isBuffer()
var buffer = new Buffer("为什特", "utf8");
console.log(Buffer.isBuffer(buffer));
console.log(buffer.toString("base64"));
// 计算一个指定字符串的字节长度：byteLength()
console.log(Buffer.byteLength("为什特", "utf8"));
console.log(Buffer.byteLength("为什特", "utf16le"));
console.log(Buffer.byteLength("为什特", "ascii"));
console.log(Buffer.byteLength("为什特", "base64"));
console.log(Buffer.byteLength("为什特", "hex"));
// 将几个buffer对象结合成一个新的buffer对象
var buffer1 = new Buffer("w");
var buffer2 = new Buffer("a");
var buffer3 = new Buffer("s");
var buffer4 = new Buffer("t");
var buffer5 = new Buffer("e");
var buffer6 = new Buffer("r");
var bufferConcat = Buffer.concat([buffer1, buffer2, buffer3, buffer4, buffer5, buffer6], 6);
console.log(bufferConcat.toString());
// 检查一个字符串是否为一个有效的编码格式
console.log(Buffer.isEncoding("utf-8"));  // true
console.log(Buffer.isEncoding("utf-16")); // false

