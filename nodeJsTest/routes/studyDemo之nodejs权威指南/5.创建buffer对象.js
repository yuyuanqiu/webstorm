// 三种形式的构造函数
// 1，构造函数参数为该对象缓存区的大小，以字节作为单位
var buffer1 = new Buffer(128);
console.log(buffer1.length);
// 使用fill方法初始化缓存区所有内容：
buffer1.fill(10);
buffer1.fill(20, 20);
buffer1.fill(255, 21,22);
// 缓存区内容为16进制
console.log(buffer1);
// 2，使用数组初始化缓存区
var array = [1, 11, 111];
var buffer2 = new Buffer(array);
console.log(buffer2);
// 3，使用字符串初始化缓存区，第二个值为字符编码（nodejs自动执行str的输入/出时的编码/解码处理，默认utf8；
// 其他编码有：ascii，utf16le，ucs2，base64，hex；不同的编码格式，缓存区数据也可能会不同
// 非ascii码串使用ascii码格式时，将保留低7位数据
var str = "你好一二";
// 此处表明字符串一旦创建就不能修改，修改无效
str[2] = "1";
console.log(str);/*你好一二*/
var buffer3 = new Buffer(str, "ascii");
// buffer对象可以修改值，例如：
buffer3[0] = 255;
console.log(buffer3);
// buffer对象的slice方法，切片（但与元数据共享内存，改变值将跟着改变）
var subBuffer3 = buffer3.slice(0, 2);
subBuffer3[0] = 10;
console.log(buffer3); // buffer3也跟着改变值