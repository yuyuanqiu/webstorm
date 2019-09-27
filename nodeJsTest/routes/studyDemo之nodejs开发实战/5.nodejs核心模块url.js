var url = require("url");
var urlParse = "https://pan.baidu.com/disk/home?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=#/all?vmode=list&path=%2F%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC39%E6%9C%9F%E3%80%90%E5%89%8D%E7%AB%AF%E3%80%91";
// 解析一个url地址，返回一个url对象
var urlObj = url.parse(urlParse);
console.log(urlObj + "\n");

// 接受一个url对象，返回一个完整的url地址
var urlAddress = url.format(urlObj);
console.log(urlAddress + "\n");

// 接受一个base url对象和一个href url对象，返回一个完整地址
var urlAddress2 = url.resolve("https://pan.baidu.com", "disk/home?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=#/all?vmode=list&path=%2F%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC39%E6%9C%9F%E3%80%90%E5%89%8D%E7%AB%AF%E3%80%91");
console.log(urlAddress2);