## php知识点概要
### 基础知识
- 文件格式
    ```php
    <?php
    // 注释与JavaScript相同
    ?>
    ```
- 变量：每个变量标识符最好使用美元符号`$`开头，变量命名与JavaScript相同，且无需声明变量类型
- 字符串连接符使用点号`.`连接
- 输出/打印：使用`echo $i`（非集合类型），或使用`print_r($i)`（集合类型）
- 定义数组：`array(1, 2, 3...)`，定义字典/对象：`array("key1"=>"value1", "key2"=>"value2")`或多元对象`array("key1"=>array("key11"=>"value11"), "key2"=>"value2")`，获取数组/对象长度使用`count($arr)`
- php中的全局变量
    - `$_GET`：获取前台get提交的数据
    - `$_POST`：获取前台post提交的数据
    - `$_FILES`：获取上传文件提交的信息，为一个字典类型，`input`上传文件时需要使用entype属性为`multipart/form-data`
- get提交与post提交异同
    - 相同：都是将数据提交到远程服务器
    - 不同
        - 提交数据的存储位置不同，get在url中，使用形如`name=a&age=23`的形式，post在请求头中
        - 提交数据的大小不同，get只能在2000字符以下，而post提交无限制

- 文件上传
    - php获取本地文件数据：使用`file_get_content(file_path)`
    - 上传大文件需要更改服务器路径下的**php.ini**文件，才能摆脱服务器上传文件的限制
    - 请求成功：[200, 300) || 304
    - 后台获取上传的二进制信息：使用`$_FILES`
    - 服务器获取的文件保存在临时文件夹中，可能会随时删除，所以需要移动到其他路径，使用方法`move_uploaded_file(filename, newPath)`
- php的普通循环/选择（包括switch）/判断与JavaScript相同
- php可以识别html字符，在字符串内部使用标签可以打印，比如`echo "<br/>"`
- 后端代码需要放在服务器中才能在浏览器运行，不能直接在浏览器中运行

### Ajax基础
- Ajax的步骤
    1. 创建异步对象`XMLHttpRequest`
    2. 设置请求方式和请求地址`open(type, url, async)`
    3. 发送请求`send()`
    4. 监听状态变化`onreadystatechange`
    5. 获取处理响应数据（在第四个内部）
- Ajax兼容IE：在IE中，通过Ajax发送的get请求，如果请求的地址为同一个，则更新后台数据不会刷新结果
    - 解决方案：每次get请求时，让请求的url增加一行对地址无关的字符串(query)，在地址后面增加`"?" + 其他可变数据`，比如日期对象/随机数，这样就使每次请求地址不一样
- ajax函数的优化
    - 将五个基本步骤封装到一个函数内部
    - 设置一个超时连接处理函数，使用定时器和`xhr.abort()`
    - php使用休眠时间：`sleep(seconds)`，在这行代码后的内容需要等待`secodes秒`后运行
    - 提交请求地址时，url不能出现中文，可使用`encodeURIComponent()`编码为字符串
    - 封装函数时，若参数过于多，可使用对象，类似jQuery中的Ajax
- Ajax发送post请求
    1. `xhr.open(...)`
    2. `xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")`
    3. `xhr.send(data)`
- jQuery中的Ajax：`$.ajax(options)`
    - `options`包括url，data，success，error，timeout等

### XML基础
- 格式
    ```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <root>
        <江西>
            <省会>南昌</省会>
        </江西>
        <福建>
            <省会>福州</省会>
        </福建>
    </root>
    ```
- php若要接收xml形式数据，在首行表明`header("content-type: text/xml; charset=utf-8");`
- 前台获取xml数据`xhr.responseXML`，并使用querySelector等html获取标签的方式，注意要兼容IE