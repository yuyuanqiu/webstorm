### 运算符类型

- **取反运算符**
  - 不管什么类型使用该运算符之后变为 Boolean 类型
  - 对一个值连续取反，等同于 Boolean()
- **与或运算符**
  - 短路机制
  - 与运算符多个连用时，若所有表达式都为 true，则返回最后一个表达式的值
  - 或运算符通常用于为变量设置默认值
    ```JavaScript
    function saveText(text) {
        text = text || '';
    }
    ```
  -
- **位运算符**
  - &,|,~,^,<<,>>,>>>
  - 位运算优点运行速度快，但不直观
  - 位运算只对整数起作用（二进制），其他类型会自动转为整数后运算，小数会舍去小数部分
  - 逐位比较，二进制采用补码形式表示
  - 一个整数连续两次~~得到自身，否运算是使用 Number()转化
  - 连续对 2 个值进行三次异或可以互换值
  - 左移/右移，乘除 2 的 n 次方
  - 无符号右移：查看负数在计算机内部储存方式最快的方法(-n>>>0)
- **void 运算**
  - 表示方法：void(x)或 void x
  - 主要用途是在浏览器超链接中防止跳转
    ```html
    <!-- 提交表单而使页面不跳转 -->
    <a href="javascript:void(document.form.submit())">提交</a>
    ```
- **逗号运算符**
  - 返回最后一个表达式的值
- **运算符优先级**

### 数据类型

- **强制类型转换**
  - Number()
    - 非数字字符串=>NaN
    - undefined=>NaN
    - 对象=>NaN，但一个数值的数组除外=>该数值
    - 空串、false、null、[]=>0
    - 当 valueOf()值为原始值时，使用 valueOf()，否则使用 toString()
  - String()
    - 原始值转为相对应的值
    - 对象返回一个类型的字符串
    - 数组返回数组的字符串形式(1,2,3...)
    - String 转换原则，先使用 toString，不是原始类型再使用 valueOf
  - Boolean()
    - 6 种 false 值：undefined、null、0、''、false、NaN
- **自动转换**
  - 自动转为布尔值
  - 字符串的拼接
  - 自动转为数值系统会调用 Number 函数，null 为 0，undefined 为 NaN

### 错误处理

- **所有错误都是 new Error(message)的实例**
  - Error 实例对象的属性
    - message：错误提示信息
    - name：错误名称
    - stack：错误堆栈(错误的位置，从内到外)
- **原生错误类型**
  - SyntaxError：解析时发生的语法错误
  - ReferenceError：引用不存在的变量，将一个值分配给无法分配的对象
  - RangeRrror：值超出有效范围，包括数组长度为负数、Number 对象的参数超出范围、函数堆栈超出最大值
  - TypeError：变量/参数不是预期类型，比如 new
  - URIError：当 URI 相关函数参数不正确时发生，有 encodeURI、decodeURI、encodeURIComponent、decodeURIComponent、escape、unescape
  - EvalError：eval 函数未正确执行
- **自定义错误**

  - 实例

    ```javascript
    function UserError(msg) {
      this.msg = msg | "默认错误信息";
      this.name = "自定义错误";
    }

    UserError.prototype = new Error();
    UserError.prototype.constructor = UserError;

    new UserError("哈哈，我出错了");
    ```

- **throw 语句**
  - 手动中断程序
  - 可抛出任何错误（包括自定义错误）
  - 可抛出任意类型的值
- **try...catch**
  - 若有错误，try 代码块抛出错误
  - catch 接受一个参数为 try 抛出的值，进行错误的处理
  - catch 代码块内还可以抛出错误使用 try...catch 嵌套结构
  - 允许添加 finally 代码块，在中断执行之前执行

### 编码风格

- 循环/判断体代码只有一行，可省略，多行不可省略
- 括号的写法
  ```javscript
  // good
  return {
      // ...
  };
  // bad
  return
  {
      // ...
  };
  ```
- 空格的写法
  - 函数调用与定义：函数名与括号无空格
  - 其他情况：与左括号有空格
- 分号
  - while 和 for 循环省略分号，do...while 不能省略
  - if、switch、try 省略分号
  - 函数声明省略分号
  - 除此之外所有语句都应该使用分号
  - 不能省略分号的原因
    - JS 引擎自动添加分号的行为难以预测
    - JS 代码压缩器不会自动添加分号
    - 导致脚本合并出错，所以有些代码首行之前有一个分号
- 全局变量
  - 对于任何代码块都是可读可写
  - 建议使用大写字母表示全局变量
- 变量声明
  - 为了避免出现问题，应该将可能出现的变量声明放在代码块头部
- with：建议不要使用 with 语句
- 建议使用全相等
- 自增自减用+/-=代替
- 用对象代替 switch 结构

### console 对象

- **console.log**：接受多个参数，第一个参数可为格式化字符串，%c 表示 CSS 格式字符串
  ```javascript
  console.log(
    "%cHello, world!",
    "color: red;background-color: yellow; font-size: 36px;"
  );
  ```
- console.info()为 log 的别名
- console.debug()输出信息只有在 verbose 打开时才会显示
- console 所有的方法都可以重写
- console.warn、console.error
- console.table 将复合型数据转为表格显示
- console.count 用于表示调用了多少次
- console.dir(obj)用于对一个对象进行检查，并用易于阅读的形式输出
- console.dirxml()以目录树的形式输出
- console.assert(表达式, info)只有表达式为假时，才输出 info
- **console.time()和 console.timeEnd()用于计算一个操作所花费的时间**
- 控制台命令 API
  - **\$\_**：返回上一个表达式的值
  - **\$(selector)**：返回第一个匹配的元素
  - **\$\$(selector)**：返回选中的 DOM 对象，同 querySelectorAll()
  - keys(object)/values(objcet)：返回包含 key/value 的数组
- debugger 语句：用于设置断点除错，没有除错工具时，不会产生任何影响，chrome 运行到 debugger 时，会自动暂停并打开相应的源码界面

### Object

- Object对象的静态方法定义在Object中，实例方法定义在原型对象Object.prototype中
- Object()函数：将任意值转为对象，其中undefined和null转为空对象，若参数是对象，则不转换
- new Object()：生成一个新对象
- 遍历对象的属性名：Object.keys()（返回可枚举属性）和Object.getOwnPropertyNames()（是否枚举都可返回），返回类型为array
- 控制对象状态的方法，冻结对象的读写状态，由弱到强
  - Object.preventExtensions()：无法添加属性，防止对象扩展
  - Object.seal()：无法添加/删除属性，禁止对象配置
  - Object.freeze()：无法添加/删除/改变属性，冻结一个对象
- 实例方法(Object.prototype)
  - valueOf()：返回对象的值（大多数返回本身）
  - toString()：返回对象的字符串形式
  - hasOwnProperty()：判断是否为本身的属性
  - isPropertyOf(obj)：判断是否为obj的原型
### 属性描述对象
- 6个元属性
  ```javascript
  {
    value: 1,   
    writable: false,  // 是否可写
    /*
      当设置了遍历属性为false时，Object.keys()和for...in和JSON.stringify()不能使用
    */
    enumerable: false, // 是否可遍历
    configurable: false, // 是否可配置描述属性，可决定属性是否可被删除
    get: undefined, // 取值函数
    set: undefined // 存值函数
  }

  obj = {
    get: function() {
      return value;
    },
    set: function(value) {
      value += value;
    }
    // 或
    get a() {
      return value;
    },
    set a(value) {
      value++;
    }
  }
  ```
- Object.getOwnPropertyDescriptor()：获取自身的属性描述对象
- Object.defineProperty(obj, 属性, 属性描述对象)
- Object.defineProperties(obj, 属性对象集)

### 数组
- map函数
  ```javascript
  [1, 2, 3].map(function (value, index, arr){
    // 其中fn中的arr指代数组本身
    // 第二个参数的arr用来绑定回调函数内部的this
    // 使得内部可以用this指代数组
    // 有返回值：array
  }, arr);
  ```
- forEach函数与map类似，但是没有返回值，只是操作数据，forEach无法中断并跳出循环（使用for）
- filter函数参数与上两个类似，用来返回符合条件（true）的函数
- some和every方法，参数与上相同
  - some方法
    ```javascript
    [1, 2, 3].some(function (value, index, arr) {
      // 一个或以上成员符合条件，返回true
    })
    ```
  - every方法，所有成员符合回调函数条件，返回true
  - 空数组，some返回false，every返回true
  - reduce函数：参数为一个回调函数，回调参数有累计变量值（默认第一个成员，当前变量值（默认第二个成员，当前位置，原数组，第二个参数为累积变量的初始值，从左到右处理函数
  - indexOf和lastIndexOf：第一次出现的位置
  - 有些返回数组的方法可以使用链式反应，比如arr.map.filter.forEach...
  ### 包装对象
  - 原始类型转为对象的过程，使用new，变为原始类型使用形如`Number()`的形式
  - 数值参与调用的时候应该带上圆括号，防止将调用当成小数点
  - 原始类型与实例对象在实际运用时可以互相转换的
  - 数值的toString方法可以有一个进制参数，即将其转为相应的进制字符串
  - 数值的toFixed方法指定小数位参数，保留多少位小数
  - 包装对象和其他对象一样可以使用`obj.prototype.method`自定义方法
  - 字符串的concat方法接收参数进行字符串的连接
  - 字符串的trim方法去除首尾空白
  - 字符串的match方法
    ```javascript
    // 返回匹配的第一个字符串或null
    // 返回数组index属性返回匹配的索引和原字符串
    var resultArr = str.match(re/str)
    ```
  - search与match相同，不过返回索引/-1
  - replace(origin/re, now)
  - split分割字符串
  - Math.random() => [0, 1)
  - Date.now()：返回毫秒数
  - Date.parse(str)：解析日期字符串,返回毫秒数/NaN
  - date.valueOf()：返回毫秒数
  - date.getTime()：返回毫秒数
  - date.getFullYear()、date.getMonth()`0-11`、date.getDay()`0-6`
  - 正则表达式
    - 创建：`/abc/igm`或`new RegExp('abc', 'i')`
    - 测试是否匹配模式：re.test(str)
    - 字面量字符：只表示它本身的含义
    - 元字符：特殊含义字符
      - 点字符`.`：匹配除空白之外其他字符
      - 位置字符：`^`和`$`
      - 选择符`|`：表示或的关系
      - `\n`换行，`\r`回车
      - `[]`内的字符表示任选一个
        - 在`[]`内部使用`^`表示内部内容除外，其他的都可选
      - `\d`匹配一个数字，`\D`匹配非数字
      - `\w`匹配字母/数字/下划线，大写同上类似
      - `\s`匹配空白
      - `\b`匹配单词边界
      - `{}`表示重复
      - 贪婪符
        - `?`表示0/1次
        - `+`表示1/n次
        - `*`表示0/n次
      - 非贪婪符：在贪婪符后面加一个`?`即可，一旦满足条件，则不再匹配
      - 修饰符
        - `g`：表示全局匹配，每一次都从上一次匹配成功位置向后匹配
        - `i`：忽略大小写
        - `m`：会识别换行符，将换行符前后内容识别为2行内容
        - 组匹配：括号括起来的re，此时还会匹配括号的内容生成数组，第一个括号位`\1`,以此类推
        - 非捕获组`(?:x)`：不返回括号匹配的内容x
        - 先行断言`x(?=y)`：x只有在y前面才匹配
        - 先行否定断言`x(?!y)`：x只有不在y前面才匹配
- json格式规定
  - 对象只能是数组/对象
  - 原始类型为字符串/十进制数值/bool值/null
  - 键名需要使用双引号
  - 数组/对象最后一个成员不能加逗号
  - JSON.stringify(value)：将值转为字符串，字符串会多加一个双引号，若为对象，则属性不能是undefined、函数、xml对象，且会忽略不可遍历的属性，若对象有toJSON方法，则会使用该方法的返回值作为参数，若为数组，三种值将转为null，
  - JSON.parse(value)：用于将JSON字符串转为对应的值
  - 为了处理解析错误，可将其放在try...catch中
  