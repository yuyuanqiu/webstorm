/*
    使用require函数加载模块时，若只指定了文件名而未指定路径时
    形如：require("yuyuanjs");假设本文件目录为：/home/gia/yio/i/app.js
    因为nodejs将从node_modules目录中加载模块，则此时加载yuyuanjs模块时，
    加载路径依次为：(从本文件开始向上追溯node_modules目录)
    /home/gia/yio/i/node_modules/yuyuanjs.js
    /home/gia/yio/node_modules/yuyuanjs.js
    /home/gia/node_modules/yuyuanjs.js
    /home/node_modules/yuyuanjs.js
    /node_modules/yuyuanjs.js
*/

/*
    比如要引用某些模块时，若不想指定模块名
    1.为该模块创建一个目录（目录名字与模块名字一致），并放在node_modules目录下，此时将自动加载该模块
    2.更灵活方式（改进）：在该目录模块下，创建一个package.json文件，
    {"name": "moduleName", "main": "./lib/moduleName.js"}，此时将自动加载放在该目录下lib子目录的文件
*/
var mytest = require("mytest"); // 将加载同级目录下的node_modules的mytest目录模块

// 当所加载的目录在上述情况下无法加载时，将在设置的path环境变量中查找node_moudles目录
var testformy = require("testformy");

// 模块对象的属性： 只能在模块内部访问
// 当前模块的id，默认为"."，可修改，其他模块id为绝对路径（加载模块时，在console.log的情况下会打印id）
console.log(module.id);
module.id = "模块管理";
console.log(module.id);
// 需要先设置该模块id在mytest其内部
// 结果为：
// Q:\桌面\WebstormProjects\nodeJsTest\routes\studyDemo之nodejs权威指南\node_modules\mytest\lib\mytest.js

// 当前模块文件的文件名
console.log(module.filename);

// 表示模块是否加载完毕
console.log(module.loaded);

// 访问当前模块的父对象
console.log(module.parent);

// 访问当前模块的所有子对象，即当前模块已加载的模块对象
console.log(module.children);

