var util = require("util");
var obj = {
    firstName: "Gia",
    lastName: "Yioi",
};

// 将对象反序列化为一个字符串，在调试时很有用，可以区分数据类型，只需添加json参数即可
var str = util.inspect(obj, {"color": true,});
console.log(str);

// 格式化字符串，和console.log相同，见 2
var strFormat = util.format("%s %s", "She", "is", "Ioiy-Aig");
console.log(strFormat);
