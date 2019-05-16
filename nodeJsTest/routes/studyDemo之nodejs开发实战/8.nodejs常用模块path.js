var path = require("path");
// 将所有参数连接起来，返回一个路径
var outputPath = path.join(__dirname, "Aig", "Ioiy.js");
// console.log(outputPath);

// 返回路径的扩展名，没有则返回空串
var pathEnd = path.extname(outputPath);
console.log(pathEnd);

// 将路径解析成一个对象
var pathObj = path.parse(outputPath);
console.log(pathObj);

// 将路径对象返回一个地址
var pathStr = path.format(pathObj);
console.log(pathStr);