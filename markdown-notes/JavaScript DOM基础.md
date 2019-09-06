### DOM基础

#### DOM
- 作用：将网页转为JavaScript对象
- 最小单位是节点(node)，所有的节点都继承了Node对象
- 常见节点：document、element、attribute、text
- 节点树
- Node节点属性
    - nodeType：返回整数（节点类型）
        - 元素1，属性2，文本3，document9
    - nodeName：返回节点名称
        - 元素：大写标签
        - 属性：属性名
        - 文本："#text"
        - document："#document"
    - nodeValue：返回节点文本值，只有文本、注释、属性才有，可读写，其他返回null
    - textContent：返回元素内部的文本内容，包括后代节点的文本内容，可读写
    - `document.baseURI`：返回当前网页的绝对路径，由`window.location`决定，可以使用`base`标签改变这个值
    - nextSibling：返回下一个`同级节点`/null，可能是文本/注释节点
    - previousSibling：返回上一个同级节点/null
    - parentNode：返回当前节点的父节点/null
    - parentElement：返回父元素节点/null
    - firstChild/lastChild：返回第一/最后一个子节点（空白字符是文本节点）
    - childNodes：返回当前节点所有子节点的类数组对象
    - document子节点：docType，HTML
- Node实例方法
    - node.appendChild(node2)：在node节点末尾插入子节点
        - 若某节点存在，就相当移动节点
    - node.hasChildNodes()：判断是否有子节点
    - node.cloneNode(bool)
        - 参数表示是否克隆子节点
        - 克隆节点不属于文档
        - 克隆节点没有addEventListener方法和on事件方法
        - 克隆节点可能会导致有2个相同id
    - node.insertBefore(node1, node2)
        - 在父节点node内部将node1插入到node2之前
        - 若node2为null，则插入到末尾
    - node.removeChild(node1)
        - 在node内部移除子节点node1
        - 移除的节点依然可以使用(在内存中)
    - node.replace(new, old)
        - 子节点new替换子节点old
    - node.contains(node1)
        - 返回Boolean值
        - 当node1为当前节点或子/后代节点时返回true
    - node.isEqualNode(node1)
        - 判断节点是否相等（类型、属性、子节点相同）
    - node.isSameNode(node1)
        - 判断2个节点是否是同一个节点（变量地址是否相同）
    - node.normalize()：清除内部的空节点，比如换行，空格等
- NodeList
    - NodeList可以通过node.childNodes属性求出（动态列表），其他方法求出的是静态列表（getElement...）
    - 类数组对象
    - 具有length和forEach方法
    - 遍历器
        - nodelist.keys()：返回键名遍历器
        - nodelist.values()：返回键值遍历器
        - nodelist.entries()：返回键值对数组遍历器
- ParentNode接口
    - 只有元素节点/文档(片段)节点拥有子节点并继承ParentNode接口
    - ParentNode.children属性：返回HTMLcollection实例/0（所有元素子节点），只能用for遍历
    - pn.first(last)ElementChild：返回第一/最后一个元素子节点/null
    - pn.childElementCount：返回元素子节点数量/0
    - pn.append(n1,n2...)：在当前节点内部末尾追加节点n1,n2...，可为文本节点
    - pn.prepend(n1,n2...)：与上类似
- ChildNode接口
    - cn.remove()：删除节点cn
    - cn.before(n1,n2..)：在该元素之前插入多个同级节点，可为文本节点
    - cn.after(n1,n2..)：同上
    - cn.replaceWith(n1)：用节点n1替换节点cn
### document
- 节点集合属性（返回HTMLcollection实例）
    - document.links：返回文档所有链接
    - document.forms：返回所有表单(form)节点，可以使用`.id`或`.name`引用表单元素
- 文档静态属性
    - document.(document)URI：返回当前网址字符串
    - document.domain：返回域名，不包含协议和端口
    - document.lastModified：返回文档最后修改时间
    - document.tittle：返回标题
    - document.open()：清除当前文档所有内容，使文档处于可编辑状态，使用document.close()关闭open打开的文档
    - document.write(str)：写入内容在文档末尾，若在文档解析之后写入，会擦除原有内容(open方法)，document.writeln(str)
    - el.querySelector(css选择器)：返回元素/null
    - el.querySelectorAll(css选择器)：返回nodelist对象，包含符合条件的元素
        - 两者不支持伪类/伪元素，获取的是静态集合，不能获取动态创建的
    - el.getElementsByTagName("")
    - el.getElementsByClassName("")
    - el.getElementsByName("")
    - el.getElementById("")：只能在document中使用
    - 创建节点
        - document.createElement("tagname")
        - document.createTextNode("str")
        - document.createAttribute()
            ```javascript
            var attr = document.createAttribute("my_attr");
            attr.value = "new_value";
            var node = document.getElementById("div1");
            // 设置属性
            node.setAttributeNode(attr);
            // 或者
            node.setAttriibuteNode("my_attr", "new_value");
            ```
### element
- 属性：id，tagName，hidden（是否可见），attributes（属性对象），className，classList（类对象），innerHTML(设置节点内容，参数为空则清空节点内容)，outerHTML(返回元素节点html代码包括本身，可读写)
    - classList对象的方法
        ```javascript
        var div = document.getElementById("div1");
        var classList = div.classList;
        classList.add("class1");
        classList.remove("class1");
        classList.contains("class1");
        // true为添加属性，false为删除属性
        classList.toggle("class1", true);
        ```
- 属性
    - el.clientHeight/clientWidth：返回元素节点的css高度，包括padding部分，减去滚动条的高度
    - el.scrollHeight/Width：返回元素总高度，包括溢出部分和不可见部分，以及伪元素的高度，和滚动条的高度
    - el.scrollLeft/Top：表示滚动条滚动的距离
    - el.offsetHeight/Width：表示高度，包括元素本身高度，padding，border，滚动条
    - el.first/lastElementChild：返回第一/最后元素子节点/null
    - el.next(previous)ElementSibling：
- 实例方法
    - el.get/set/has/removeAttribute(attr)
    - el.hasAttributes()：当前元素是否有一个/以上属性
    - el.matches(css选择器)：表示当前元素是否匹配选择器
    - el.focus(boolean)：使元素获取焦点，并判断是否留在原位置，el.blur()移除焦点
    - el.click()：模拟鼠标事件
### Text节点
- 浏览器提供一个原生构造函数，返回文本节点实例
    ```javascript
    // 空节点
    var t = new Text();
    // 非空节点
    var t2 = new Text("this is a textnode");
    ```
- 属性：data，等同nodeValue属性，设置/获取文本节点内容
- 方法
    - appendData(str)
    - deleteData(index, length)
    - insertData(index, str)
    - replaceData(index, length, str)
    - subStringData(index, length)：获取子字符串
    - remove()：移除节点
    - splitText(index)：分割成相邻字符串，以index为界
### 使用JavaScript操作CSS
- 操作CSS样式（内联style）：使用xxxAttribute()方法
- style本身是一个对象，返回行内样式，直接操作属性用`el.style.xxx`，属性名应该使用驼峰写法如`el.style.backgroundColor`
- `window.getComputedStyle()`获取元素的所有样式
- `el.style.cssText`读写所有内联样式，设置为空字符串则清除内联样式
- `el.style.length`获取内联样式的属性个数
- 方法
    - `el.style.getPropertyValue(property-name)`由属性名获取属性值
    - `el.style.item(index)`返回style属性相对应位置的属性名
    - `el.style.removeProperty(property-name)`移除相应的属性
    - `el.style.setProperty(property-name, property-value, 优先级(important))`
- css模块侦测：判断浏览器是否支持某个属性
    - 如果支持某属性，则typeof判断为str
    - 否则判断为undefined
    - 或者使用`in`判断某属性是否在对象sytle内
- 转义选择器特殊字符`CSS.escape(属性值)`
- 判断是否支持写法：`CSS.supports(property,value)`或`CSS.supports('dispaly: none')`
- `window.getComputedStyle(el, 伪元素表示:before)`：返回所有的样式的css对象实例（包括元素的伪元素），并且是动态的，可直接引用`s.height`
    - 返回的实例为绝对单位，颜色为rgb(a)
    - 属性不能合写，margin的四个方向
    - 有些短横线属性使用方括号读取
