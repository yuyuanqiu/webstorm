// 导入模块
// 导入原生模块
var http = require("http");
// 导入文件模块
var hello = require("../../bin/hello");
// 当导入同一级的模块一定要加./
var consoleMoudel = require("./2.nodejs的console对象");

// 导出模块
var util = {
    // 数组去重
    noRepeat : function (arr) {
        return arr.filter(function (ele, index) {
            return arr.indexOf(ele) === index;
        });
    },
    // 数组之和
    add: function (arr) {
        return arr.reduce(function (ele1, ele2) {
            return ele1 + ele2;
        });
    }
};
module.exports = util;
