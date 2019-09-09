## 变量的解构赋值
### 数组写法
- 模式匹配：等号两边的模式相同，左边变量就会赋予相应的值，右边不是数组将会报错
    - `let [a, b, c] = [1, 2, 3];`
    - `let [a, [[b]], c] = [1, [[[2]]], 3];`
    - `let [, , c] = [1, 2, 3];`
    - `let [head, ...tail] = [1, 2, 3];`
    - `let [a, b, ...c] = [1];`输出`a=1;b=undefined;c=[]`，即若左边变量多，则剩余的变量赋予默认值
    - `let [a=1,b=2,c=3] = [4, 5];`，只有当右边元素值为undefine时，默认值才会生效，**当默认值未声明就使用会报错**，比如`let [a=b, b=1] = [3, 4];`，其中b未声明就使用会报错
    - **只要具有iterator接口，就可以使用数组的结构赋值**
### 对象的解构赋值
- **对象的解构赋值的内部机制**：先找到两边同名的属性（模式），再将模式的值赋给变量，真正被赋予值的是变量（后者），而不是模式
    - 比如`let {bar, foo} = {bar: "abc", foo: "sdf"}`中左边表达式是`{bar: bar, foo: foo}`的简写，*所以真正赋予值的是右边的变量bar/foo，而不是左边的模式*
    - `let {foo, bar} = {foo: "aaa", bar: "bbb"};`
    - `let {foo: baz, bar} = {foo: "aaa", bar: "ccc"};`中变量**baz**的值为**aaa，当未找到同名的模式时，值为undefined**
    - `let {foo: baz = "默认值"} = {};`
    - 对象也可以嵌套，注意模式不会被赋值
    - 对象的解构赋值可以取到继承的属性
    - 可以用解构赋值对函数进行重命名
    - 对已声明的变量解构赋值，需要用`()`括起，如`({x} = {x: 1});`，因为不加括号会将`{x}`看成代码块
    - 圆括号不能在声明和函数参数中使用，将模式加上括号也会出错，只能在赋值语句的非模式部分使用圆括号才不会出错，比如`({p : (a)} = {});`
    - 奇怪的写法，等式左边可以不放置任何变量，但等式合法可执行，如`({} = "abc");`
    - 数组的本质是对象，在对象解构赋值中右式可以用数组形式，但应注意数组的属性为**0, 1, ...**
### 其他右式值类型
- set结构也可以使用数组解构，如`let [x,y,z] = new Set([1,2,3])`
- 字符串为类数组对象，所以可以用于**数组解构**（取值）和**对象解构**（还可以取length）
- 原始类型（除undefined/null）外，也可用于右值，将会转为其包装对象形式
- 函数参数也可使用`数组解构`和`对象解构`的所有形式，但记住赋予默认值的形式是`{a: a= "x", b: b="y"} = {}`或`{a= "x", b="y"} = {}`，而不是`{a, b} = {a: "x", b: "y"}`的形式
### 用途
- 交换变量的值
- 若函数想返回多个值，可使用数组/对象解构形式接收
- 函数参数的定义以及默认参数
- 提取json数据（对象）
- 遍历map解构
- 输入模块的指定方法，如`const {get, set} = require("\j");`