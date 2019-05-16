// 可以明确类型
// 将buffer对象的数据读取为Number型数据:0,16,32,48
var buffer = new Buffer([0x00, 0x10, 0x20, 0x30]);
console.log(buffer.readUInt8(0));
console.log(buffer.readUInt8(1));
// 超出缓存区长度将引发RangeError
// console.log(buffer.readUInt8(4));

// 向缓存区写入数据
buffer.writeUInt8(128, 0);
console.log(buffer);
// 超出缓存区长度引发RangeError
buffer.writeUInt8(128, 4);
// 超出类型的数值范围引发RangeError
buffer.writeUInt8(256, 0);