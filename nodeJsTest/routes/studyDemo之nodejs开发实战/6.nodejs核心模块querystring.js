var querystring = require("querystring");

var str = "firstName=qiu&lastName=yuyuan";
// 将字符串反序列化为对象，类似Json.parse()
var strObj = querystring.parse(str);
console.log(strObj);

// 将对象序列化为一个字符串
var strOrigin = querystring.stringify(strObj);
console.log(strOrigin);