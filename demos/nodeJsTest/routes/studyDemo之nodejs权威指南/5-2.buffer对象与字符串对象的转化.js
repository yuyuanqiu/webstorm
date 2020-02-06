// 将buffer对象转换为字符串
var str = "面向对象";
var buffer = new Buffer(str, "utf8");
// utf8编码占3位，buffer中是以字节为单位，所以取3个
// buffer.toString("encoding", [start],[end]);
var bufferToStr = buffer.toString("utf-8", 0,3);
console.log(bufferToStr);

// 修改buffer对象的字符串内容，注意此时只能更改原有值，但不能增加值,utf8每个中文字长3位
// buffer.write("string", index, length, "encoding");
buffer.write("方法", 6, 6, "utf-8");
console.log(buffer.toString());

// StringDecoder对utf8支持性更优，返回一个已解码的字符串，比tostring更好

// 需先加载模块
console.log(buffer);/*<Buffer e9 9d a2 e5 90 91 e6 96 b9 e6 b3 95>*/
var StringDecoder = require("string_decoder").StringDecoder;
var decoder = new StringDecoder("utf-8");// 默认utf-8
// 特殊之处在于，当传入的buffer不完整（比如三个字节的字符，只传入了两个），内部会维护一个internal buffer将不完整的字节cache住，等到使用者再次调用stringDecoder.write(buffer)传入剩余的字节，来拼成完整的字符。这样可以有效避免buffer不完整带来的错误，对于很多场景，比如网络请求中的包体解析等，非常有用。
console.log(decoder.write(Buffer.from([0xe9,0x9d]))); // 先传了2个，不输出，保留在cache
console.log(decoder.write(Buffer.from([0xa2]))); // 又传了一个，完整3位，此时输出
// 当decoder.end([buffer])被调用时，内部剩余的buffer会被一次性返回。如果此时带上buffer参数，那么相当于同时调用decoder.write(buffer)和decoder.end()。
console.log(decoder.write(Buffer.from([0xe5, 0x90, 0x91, 0xe6, 0x96, 0xb9, 0xe6])));
// 当utf8码点无效时，替换成ef bf bd（�）。
// 此时因为只传了e6,b3,剩下95没传，所以码点无效，返回�
console.log(decoder.end(Buffer.from([0xb3])));

