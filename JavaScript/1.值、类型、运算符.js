var a = -Infinity;
var b = Infinity;
var e = a + b;
var c = NaN;
//当定义了一个变量而未赋值，其值为undefined
var d;
console.log(a,b,c,d,e);
//由下可知-Infinity,Infinity,NaN均为数值类型；
//typeof只能算出六种基本类型：number，string，boolean，object，function，undefined；
console.log(typeof e);
console.log(typeof a);
console.log(typeof c);
console.log(typeof d);
//字符串的比较是基于Unicode编码排序的
//在JavaScript中只有NaN不等于它本身
//因为不同的非法运算的结果并不会相等
console.log("NaN==NaN:",NaN==NaN);
//未定义值：null，undefined
//强制转换：当运算符作用在错误类型的值上，会自动将它转换为它所期盼的值;
console.log(8*null);//0
console.log('8' - 1);//7
console.log('5' + 1);//51
console.log('five' * 2);//NaN
//javascript会将0、NaN、""视为false
//判断值是否严格相等===，！==
console.log(0=="");//true
console.log(0==="");//false
//||和&&:返回左值或右值（短路特性）
console.log(null || "Aig");//"Aig"
console.log("Yuyuan" || "Aig");//"Yuyuan"
console.log(null && "Aig");//null
//表达式为代码片段：如22，"Aig"等，而语句由表达式和分号组成
22;
"Aig";//均为表达式
//一条var语句可以同时定义多个变量
var one = 1, two = 2;
//弹出对话框
// alert(one);
// console.log()将值传至控制台上，在浏览器中右击检查可得到
//prompt函数：弹出窗口叫用户输入值
prompt("Tell me everything about you:","no thing");
//confirm函数：询问用户问题：回答是/否
confirm("This is your girlfriend of Aig?");
//返回值
console.log(Math.max(1,2,3,4,5,6,7,12,1111));//求最大值
//JavaScript语句是从上往下按序执行的
var theNumber = Number(prompt("Input a number:"));
//isNaN()是标准函数，当参数为NaN时返回true
if (!isNaN(theNumber))//当为数字时才输出
    alert("your input the number's square is:" + theNumber * theNumber);
else
    alert("This is not a number");
//循环语句while,do{}while;和for循环
while (!null) {
    alert(theNumber);
    theNumber += 1;
    if(theNumber===5)
        break;
}
for (var i = 0,result = 1; i<10;i++) {
    result = 2 * result;
    alert(result);
}
//break与continue跳出循环
//JavaScript可以使用形如-=，+=的形式
//switch分支配合case，break使用
