// 控制台输出
console.log("Welcome to Node.JS");/*Welcome to Node.JS*/
console.log("Welcome", "to", "Node.JS");/*Welcome to Node.JS*/
console.log("%s%s", "Welcome", "to", "Node.JS");/*Welcometo Node.JS*/
console.log("%s%s%s", "Welcome", "to", "Node.JS");/*WelcometoNode.JS*/
console.log("%s%s%s%s", "Welcome", "to", "Node.JS");/*WelcometoNode.JS%s*/
console.log("%d", "Ioiy-Aig");/*NaN*/
// 四者的异同点？？？
console.info("info同log");
console.warn("warn同log");
console.error("error同log");

var nodeJsInfo = {
    name: "node.js",
    creatTime: function () {
        console.log(new Date());
    },
    getName: function () {
        console.log(this.name);
    }
};
// 将对象信息输出到控制台
console.dir(nodeJsInfo);

// 统计一段代码运行的时间
console.time("time1");
var sum = 0;
for (var i = 0; i < 100; i++) {
    sum += i;
}
console.log(sum);
console.timeEnd("time1");
/*time1: 0.360ms*/

// 输出当前位置的栈信息
console.trace("traceInformation");
