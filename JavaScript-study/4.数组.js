var arr = [];
console.log(arr.length);
//在结尾删除pop，结尾添加push
arr.push('yuyuan', 22, 'Ioiy-Aig', 21);
arr.pop();
console.log(arr.join('~'));
console.log(arr.length);
console.log(arr[0].toUpperCase());
console.log(arr[2].toLowerCase());
//开头添加unshift，删除shift
arr.unshift('number', 15);
console.log(arr);
arr.shift();
console.log(arr);
//查找值的索引，没有则返回-1
console.log(arr.indexOf(15));
console.log(arr.lastIndexOf(2));
//slice切片返回一个范围数组
console.log(arr.slice(2,4));
// concat表示拼接两个数组
console.log([12,12,12].concat(arr));
// trim用于删除开头结尾的空白
console.log('\n   Ioiy Aig  \t'.trim());
//每当函数被调用时，就会在函数体内添加一个特殊的变量arguments，该变量指向所有的入参的对象
//JavaScript中每个传递第参数数量可以大于定义的参数数量
function f() {
    console.log('you gave me ' + arguments.length + " arguments");
}
f(1,'yuyuan','aig');