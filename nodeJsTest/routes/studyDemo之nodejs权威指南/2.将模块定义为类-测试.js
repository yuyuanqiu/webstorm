// foo即代表导入的模块
var foo = require("./2.将模块定义为类");

// 创建对象并初始化
var myclass =new foo("Gia", 22);
console.log(myclass.GetName());
console.log(myclass.GetAge());

myclass.SetName("Ioiy Aig");
myclass.SetAge(21);
console.log(myclass.GetName());
console.log(myclass.GetAge());
// name和age为公有变量
// 修改之前的name和age；
console.log("修改之前的name和age；");
console.log(myclass.name);
console.log(myclass.age);
// 修改之后的name和age；
console.log("修改之后的name和age；");
myclass.name = "xxx";
myclass.age = 18;
console.log(myclass.name);
console.log(myclass.age);

// 设置和获取类变量
console.log("获取类变量和类方法");
foo.staticName = "学霸";
foo.staticFunc();