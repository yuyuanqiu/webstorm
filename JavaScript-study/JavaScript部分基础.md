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

- Object 对象的静态方法定义在 Object 中，实例方法定义在原型对象 Object.prototype 中
- Object()函数：将任意值转为对象，其中 undefined 和 null 转为空对象，若参数是对象，则不转换
- new Object()：生成一个新对象
- 遍历对象的属性名：Object.keys()（返回可枚举属性）和 Object.getOwnPropertyNames()（是否枚举都可返回），返回类型为 array
- 控制对象状态的方法，冻结对象的读写状态，由弱到强
  - Object.preventExtensions()：无法添加属性，防止对象扩展
  - Object.seal()：无法添加/删除属性，禁止对象配置
  - Object.freeze()：无法添加/删除/改变属性，冻结一个对象
- 实例方法(Object.prototype)
  - valueOf()：返回对象的值（大多数返回本身）
  - toString()：返回对象的字符串形式
  - hasOwnProperty()：判断是否为本身的属性
  - isPropertyOf(obj)：判断是否为 obj 的原型

### 属性描述对象

- 6 个元属性

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

- map 函数
  ```javascript
  [1, 2, 3].map(function(value, index, arr) {
    // 其中fn中的arr指代数组本身
    // 第二个参数的arr用来绑定回调函数内部的this
    // 使得内部可以用this指代数组
    // 有返回值：array
  }, arr);
  ```
- forEach 函数与 map 类似，但是没有返回值，只是操作数据，forEach 无法中断并跳出循环（使用 for）
- filter 函数参数与上两个类似，用来返回符合条件（true）的函数
- some 和 every 方法，参数与上相同
  - some 方法
    ```javascript
    [1, 2, 3].some(function(value, index, arr) {
      // 一个或以上成员符合条件，返回true
    });
    ```
  - every 方法，所有成员符合回调函数条件，返回 true
  - 空数组，some 返回 false，every 返回 true
- reduce 函数：参数为一个回调函数，回调参数有累计变量值（默认第一个成员，当前变量值（默认第二个成员，当前位置，原数组，第二个参数为累积变量的初始值，从左到右处理函数，有返回值，可通过这个设计一个数组求和
- indexOf 和 lastIndexOf：第一次出现的位置
- 有些返回数组的方法可以使用链式反应，比如 arr.map.filter.forEach...

### 包装对象

- 原始类型转为对象的过程，使用 new，变为原始类型使用形如`Number()`的形式
- 数值参与调用的时候应该带上圆括号，防止将调用当成小数点
- 原始类型与实例对象在实际运用时可以互相转换的
- 数值的 toString 方法可以有一个进制参数，即将其转为相应的进制字符串
- 数值的 toFixed 方法指定小数位参数，保留多少位小数
- 包装对象和其他对象一样可以使用`obj.prototype.method`自定义方法
- 字符串的 concat 方法接收参数进行字符串的连接
- 字符串的 trim 方法去除首尾空白
- 字符串的 match 方法

  ```javascript
  // 返回匹配的第一个字符串或null
  // 返回数组
  // index,input属性返回匹配的索引和原字符串
  var resultArr = str.match(re / str);
  ```

- search 与 match 相同，不过返回索引/-1
- replace(origin/re, now)
- split 分割字符串
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
      - `?`表示 0/1 次
      - `+`表示 1/n 次
      - `*`表示 0/n 次
    - 非贪婪符：在贪婪符后面加一个`?`即可，一旦满足条件，则不再匹配
    - 修饰符
      - `g`：表示全局匹配，每一次都从上一次匹配成功位置向后匹配
      - `i`：忽略大小写
      - `m`：会识别换行符，将换行符前后内容识别为 2 行内容
      - 组匹配：括号括起来的 re，此时还会匹配括号的内容生成数组，第一个括号位`\1`,以此类推
      - 非捕获组`(?:x)`：不返回括号匹配的内容 x
      - 先行断言`x(?=y)`：x 只有在 y 前面才匹配
      - 先行否定断言`x(?!y)`：x 只有不在 y 前面才匹配
- json 格式规定
  - 对象只能是数组/对象
  - 原始类型为字符串/十进制数值/bool 值/null
  - 键名需要使用双引号
  - 数组/对象最后一个成员不能加逗号
  - JSON.stringify(value)：将值转为字符串，字符串会多加一个双引号，若为对象，则属性不能是 undefined、函数、xml 对象，且会忽略不可遍历的属性，若对象有 toJSON 方法，则会使用该方法的返回值作为参数，若为数组，三种值将转为 null，
  - JSON.parse(value)：用于将 JSON 字符串转为对应的值
  - 为了处理解析错误，可将其放在 try...catch 中

### 异步操作

- 单线程模型：JavaScript 采用单线程，只在一个线程上运行，后面的任务需排队等待
  - 优势：实现简单，执行环境相对单纯
  - 劣势：任务耗时长，比如可能造成浏览器假死(无响应)
  - 事件循环机制(event loop)：cpu 不管 io 操作，挂起处于等待的任务，执行后面的任务，当 io 操作返回了结果，再回过头将挂起的任务继续执行
- 同步和异步
  - 同步：线性执行，排队
  - 异步：无堵塞效应，异步任务处在多个任务队列中
- 异步操作的几种模式
  - 回调函数：比如定义 2 个函数，使用下列形式`f1(f2)`执行异步，缺点是高度耦合，使程序结构混乱
  - 事件监听：采用事件驱动，只有触发了相应事件，就会执行函数参数，此方法可以绑定多个函数，还可以去耦合
  - 发布-订阅模式（观察者模式）：事件相当于信号，存在一个信号中心，某任务完成之后，会向信号中心发布一个信号，其他任务可以订阅这个信号，从而知道自己什么时候执行
    ```javascript
    // f2向信号中心订阅信号done
    jQuery.subscribe("done", f2);
    // f1执行完成后向信号中心发布信号done
    // 引发f2执行
    function f1() {
      setTimeout(function() {
        jQuery.publish("done");
      }, 1000);
    }
    // f2完成后，可以取消订阅
    jQuery.unsubscribe("done", f2);
    ```
  - 异步操作流程控制
    - 同步执行：执行时间长
    - 异步执行：很容易耗尽资源
    - 同步-异步执行：设置一个限制

### 定时器

- `setTimeout(代码/函数, delay, 回调函数参数1,2...)`：在 delay 毫秒时间后执行函数/代码，若为函数，后面的参数将传入回调函数，除第一个参数外，后面参数可以省略
  - 回调函数内部 this 指向全局环境，若回调是对象方法，使其指向对象
    - 将对象方法放入匿名函数内
    - 使用`obj.m.bind(obj)`的形式
  - 返回一个整数，表示定时器的编号，以后可以用它来取消定时器
- `setInterval()`：参数与上相同，表示循环执行
  - 常用于实现轮询
  - 时间间隔表示两个事件开始执行时的间隔，若事件执行时间大于 delay，则执行完之后继续轮询不等待
  - 返回一个整数，表示定时器的编号，以后可以用它来取消定时器
- setTimeout 和 setInterval 返回的整数值是连续的，利用这一点可以取消所有的定时器
- 防抖动（debounce）：防止用户连续触发相应事件，而产生性能问题，设置一个门槛（间隔时间），在间隔时间内触发事件不执行
  - 使用定时器，在函数开始部分声明定时器（初始化清零）`var timer = null`，这样在每次触发事件时，都会将原来定时器取消而新建定时器
- 定时器的参数（函数）只有在同定时器作用域事件循环中所有同步事件都执行完之后，才会开始执行，即使他们的 delay 为 0，依然需等待
- `事件循环是啥？？？`
- setTimeout(f, 0)可以调整事件发生的顺序，先触发父事件
- setTimeout(f, 0)的作用是让浏览器在最早可得的空闲时间段执行

### Promise 对象

- Promise 是 JavaScript 异步操作解决方案（链式操作）
- 设计思想：所有的异步任务都返回一个 promise 实例
- 构造函数

  ```javascript
  // 回调函数接受两个参数
  // resolve是操作成功，并将结果作为参数传递出去
  // reject是操作失败，将错误作为参数传递出去
  var promise = new Promise(function (resolve, reject){
    if () // 异步操作成功
      resolve(value);
    else {
      reject(new Error("..."));
    }
  });
  // then接受两个回调函数，第一个是异步操作成功执行的，第二个是异步操作失败执行的（可省略）
  // 回调函数的参数是上一个操作的结果
  // 异步操作失败报错具有传递性
  // 即后面的链式操作的失败回调可以捕捉到前面任意一个的失败（可以统一指定报错的处理方法）
  promise.then(f1/代码, f2/代码)
  ```

- promise 回调属于微任务
  - 执行时间顺序：同步任务>微任务>异步任务
