var buffer = new Buffer("waster miss u");
// 将buffer对象数据转换为一个字符串
var str = JSON.stringify(buffer);
console.log(str);
// 将字符串转换为一个数组
var arr = JSON.parse(str);
console.log(arr);

var bufferJson = new Buffer(arr);
console.log(bufferJson.toString());