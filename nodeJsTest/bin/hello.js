'use strict';
var herName = "Ioiy-Aig";
function hello (name) {
    console.log("hello , " + name);
}

function isHerName() {
    console.log(herName);
}

// 可以导出变量和函数
// 导出变量, 将后者赋值给前者，当其他模块加载该模块时，前者的名字即为后者的别名一样
module.exports.herName = herName;
module.exports.isHerName = isHerName;
// 必须要将该模块输出暴露出去，这样其他模块才能使用该模块
// 变量module是Node在加载js文件前准备的一个变量，并将其传入加载函数，我们在hello.js中可以直接使用变量module原因就在于它实际上是函数的一个参数
module.exports.hello = hello;//暴露hello方法

