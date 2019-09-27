// 私有变量
var _name;
var _age;
// 公有变量
var name = "";
var age = 0;

// 模块对象的构造函数
var foo = function (name, age) {
    _name = name;
    _age = age;
};
//h获取私有变量_name的值
foo.prototype.GetName = function () {
    return _name;
};
// 设置私有变量_name的值
foo.prototype.SetName = function(name) {
    _name = name;
};
//获取私有变量_age的值
foo.prototype.GetAge = function () {
    return _age;
};
// 设置私有变量_age的值
foo.prototype.SetAge = function (age) {
    _age = age;
};

// 添加类变量（静态变量）
foo.staticName = "";
// 添加类函数
foo.staticFunc = function() {
    console.log(foo.staticName);
};

// 实例变量
foo.prototype.name = name;
foo.prototype.age = age;

module.exports = foo;
