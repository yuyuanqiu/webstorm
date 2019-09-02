# 第四章 变量、作用域、内存问题
## 1
    1. 基本数据类型（5种）按值访问
    2. 给基本类型添加属性无效
    3. JavaScript中函数参数是按值传递的
    ```JavaScript
    function setName (obj) {
        obj.name = "Gia";
        obj = new Object();
        obj.name = "Ioiy Aig";
        return obj;
    }
    var person = new Object();
    var person2 = setName(person);
    // {name: "Gia"} {name: "Ioiy Aig"}
    // 对象的参数传递/传值只能够修改内部的内容，但是不能全部颠覆（重新赋值等）
    // 若是按引用传递，则最后person.name == "Ioiy Aig"
    console.log(person, person2);
    ```
    

