var buffer = new Buffer("waster miss u");
var copyBuffer = new Buffer(128);
// 复制buffer对象数据至另一个buffer对象
// buffer.copy(目标buffer, 目标buffer的起始位置, 元buffer的起始位置, 元buffer的结束位置);
buffer.copy(copyBuffer, 0, 0, buffer.length);
console.log(copyBuffer);