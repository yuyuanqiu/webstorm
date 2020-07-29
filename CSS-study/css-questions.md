# CSS 相关问题

> 参考：
> 1. https://juejin.im/post/5ee0cf335188254ec9505381#heading-47

## at-rules 规则`@identifier`

### 定义

- 指示 css 行为的语句
- 以@开头，后跟一个标识符，包括直到下一个分号/css 块的所有内容
  - `@identifier (rule)`

### 常用的@规则

#### @charset

定义：

- 指定样式表中使用的字符编码
- 必须是样式表的第一个元素，且前面不能有任意字符
- 不能被嵌套，多个该规则只使用第一个
- 不能在 html 元素或 style 中使用
- 在某些 css 属性使用非 ASCII 字符时非常有用，比如 content
- 大小写不敏感
- 语法：`@charset "utf-8";`：必须使用双引号，且 charset 和"之间只能空一个空格

#### @import

定义：

- 用于导入其他样式表
- 必须先于除@charset 规则之外的所有规则之前导入
- 语法：
  - `import url;`
    - url 表示一个 string 或者 uri
    - eg:
      - `@import 'common.css';`
      - `@improt url('common.css') print and (orientation: landscape)`
  - `import url list-of-media-queries;`
    - list-of-media-queries 表示一个可用逗号分隔的媒体查询列表

#### @namespace

定义：

- 可以将通配、元素、属性选择器限制在指定的命名空间里的元素
- 只有在包含多个 namespace 的文档时才有用（html 中的 svg、mathml 等）
- 必须在@charset 和@import 之后，在样式表中位于其他样式声明之前
- 可用于定义默认命名空间
- 可用于定义命名空间前缀

#### @media（可嵌套）

> 可嵌套@规则：表示可作为样式表的语句，也可用在条件规则组中

条件规则组：

- 可嵌套语句、规则、@规则
- 所指向的条件值为 Boolean 值，当为 true 时内部的语句生效

媒体查询：

- 用处：
  - 用于根据设备的大致类型和特征参数（屏幕分辨率/视窗宽度）修改网站/app
  - 通过@media/@import 规则装饰样式
  - 用`media=`属性为 style、link、source 等元素指定特定的媒体类型
- 语法：
  - 每个媒体查询语句由一个可选的`媒体类型`和任意数量的`媒体特征`表达式构成
  - 可使用多个逻辑操作符合并多条媒体查询语句
  - 媒体查询语句不区分大小写
- 注意：
  - 附加到 link 元素的媒体查询条件即使为 false，仍将下载该样式表（但不使用）

##### 媒体类型：

- 定义：
  - 描述设备的类别，可省略（除非使用 not/only 逻辑操作符修饰）
  - 隐式应用 all 类型
- 分类：
  - `all`：适用所有设备
  - `print`：适用于在打印预览模式下在屏幕上查看的分页材料和文档（打印机），此类型表示在打印的时候应用的样式
  - `screen`：适用于屏幕
  - `speech`：用于语音合成器

##### 媒体特性：

- 定义：
  - 描述了用户代理、输出设备、浏览环境的具体特征
  - 可选，负责测试特性是否存在、特性的值，
  - 每条媒体特性表达式必须用括号括起来
  - `某些查询特性是可以使用max/min前缀的，某些查询特性的值必须带有单位`
    - 为了更好的访问性，当使用长度时，应使用 em（更好的调整文本大小）
  - 形式：`特性：特性值`，`特性`
  - 语法改进（第四版本）：
    - 对现代浏览器的支持，改进了 max/min 的语法
      - 除使用 max/min 前缀，也可直接使用 `<=`（max 前缀），`>=`（min 前缀）
      - 合并两个范围查询：`(30em <= width <= 50em)`：`(min-width: 30em) and (max-width: 50em)`
    - 使用 not 否定某个媒体特性：`(not(hover))`
    - 使用 or（类似逗号）
    -
- 分类：
  - `aspect-ratio`：视窗的宽高比
    - eg: media (aspect-ratio: 2/1)：视窗宽高比为 2:1
  - `height`：视窗的高
    - eg：media (max-height: 1000px)：当视窗的高在 1000 以内时
  - `device-height`：设备的高
    - eg: media (max-device-height: 1000px)：设备的高在 1000px 内
  - `grid`：网格屏幕（1）还是点阵屏幕（0）
    - eg：media (gird: 1)：当设备为网格屏幕时
  - `orientation`：屏幕的方向，纵向（portrait，高度>宽度），横向（landscape，宽度 > 高度）
  - `resolution`：像素密度（分辨率，dpi）
    - eg：media (max-resolution: 1000dpi)：设备的分辨率为 1000 以内时

逻辑操作符：

- 定义：
  - 使用 not、and、only 用于联合构造复杂的媒体查询，或使用逗号分隔多个媒体查询并组合成一个规则
- 分类：
  - `and`：每个查询都为真才执行，还用于将媒体特性和媒体类型结合在一起
  - `not`：
    - 用于否定媒体查询，不满足查询条件返回 true
    - 在逗号分隔的查询列表中将否定应用了该查询的特定查询
    - 必须指定媒体类型
  - `only`：
    - 仅在整个查询匹配时才应用整个样式，对较早防止浏览器应用所选样式很有用，对现代浏览器无影响
    - 不使用 only 时，旧浏览器会直接忽略后面的查询
    - 必须指定媒体类型
  - `逗号`：
    - 将多个媒体查询合并为一个规则
    - 各个查询互不干扰（某查询为 true，某查询为 false 时，为 true 的查询将应用样式）
    - 类似于 or（或 css 选择器中的逗号）

@meida 定义：

- 基于一个/多个`媒体查询`的结果来应用样式表的一部分
- 可以指定一个媒体查询和一个 css 块
- 仅当媒体查询匹配时，该 css 块才会应用在文档中

##### 语法

#### @document（可嵌套）

## 居中对齐

> 参考：
>
> 1. https://louiszhai.github.io/2016/03/12/css-center/#%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD
> 2. https://www.w3cplus.com/css/centering-css-complete-guide.html

### 水平居中对齐

1. 块级父元素让非块级元素居中，在父元素中使用`text-align: center;`
2. 块元素相对于上级元素居中：块元素需要设置`margin: 0 auto; width: ...px;`，未设置宽度则块元素宽度会拉伸成父级容器的宽度
3. 多个水平排列的块级元素一起水平居中：
   1. 它们的父级元素使用`text-align: center;`，它们使用`display: inline-block;`(和 1 类似)
   2. 它们的父级元素使用 flex 布局，`display: flex; justify-content: center;`
4. 多个垂直排列的块级元素水平居中：块级元素需要设置`margin: xxx auto; width: ...px;`(和 2 类似)
5. 子元素是浮动元素实现**居中**（`float: left;`），此时父元素需要设置：`width: fit-content; margin: ...px auto;`
6. 子元素使用 transform 属性实现子元素水平居中：`position: absolute; left: 50%; transform: translate(-50%, 0);`
7. 子元素实现居中（宽度固定），父子元素使用绝对定位：父元素设置：`width: xxx; position: relative;`
   1. 子元素设置 margin-left 为宽度的一半，且 left 为 50%：`position: absolute; width: 100px; left: 50%; margin-left: -50px;`
   2. 子元素的 left 和 right 为 0，且 margin 为 0 和 auto：`position: absolute; width: 100px; left: 0; right: 0; margin: 0 auto;`

### 垂直居中对齐

1. 单行文本：设置`height_value === light-height_value`
2. 父元素高确定的情况，设置父伪元素和子元素：`display: inline-block; vertical-align: middle;`，再设置父伪元素的高度为 100%：`content: ''; height: 100%:`
3. 元素高度不固定的情况，使用 vertical-align 属性：父元素设置：`display: table;`，子元素设置：`display: talbe-cell; vertical-align: middle;`
4. 使用 flex：父元素：`display: flex; align-items: center;`
5. 使用 transform：父元素设置相对定位：`display: relative;`
   1. 子元素设置绝对定位加 transform：`display: position; top: 50%; transform: translate(0, -50%);`
   2. 子元素设置高度，绝对定位加 margin-top：`display: position; top: 50%; margin-top: -50px; height: 100px;`
   3. 子元素设置：`display: position; height: 100px; top: 0; bottom: 0; margin: auto 0;`

### 垂直水平居中（上面结合）

1. 父元素使用相对定位：`position: relative;`
   1. 子元素使用绝对定位+相应的 margin 为宽高的一半：`position: absolute; width: 100px; height: 100px; top: 50%; left: 50%; margin: -50px 0 0 -50px;`，若子元素还设置了 padding，则相应的 margin 值为宽高的一半+padding 值
   2. 子使用 transform：`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`，若此时元素模糊，可在父元素上设置：`transform-style: preserve-3d;`
2. 父元素使用 flex 布局：`display: flex; aligh-items: center; justify-content: center;`

## link 和@import 的区别

> 参考：
>
> 1. https://zhuanlan.zhihu.com/p/85631641

1. 从属关系：
   1. link 是 html 标签，不仅可加载 css，还可以定义 rss 和 rel
   2. @import 是 css 语法，只有导入样式表的作用
2. 加载顺序：
   1. 页面被加载时，link 会和 html 同时加载
   2. @import 引入的样式将在页面加载完毕后加载
3. 兼容性
   1. @import 是 css2.1 引入的，只能识别 IE5 以上的浏览器
   2. link 不存在兼容性问题
4. DOM 可控性：
   1. 可以通过 js 操作 dom 引入 link 标签来改变样式
   2. @import 不能通过 dom 控制
5. 权重：
   1. link 样式的权重高于@Import 的权重
6. @import 适用于引入公共样式或第三方样式，link 适用于自己写的动态修改的样式
7. 当使用@import 导入 css 样式时，会导致某些页面在 IE 中出现样式瞬间闪烁（文档样式暂时失效，FOUC）
   1. 原因：样式表晚于结构性 html 加载时，加载到此样式表页面将停止渲染，等待样式下载完成解析后重新渲染，这期间将导致短暂的花屏现象
   2. 解决：在 head 元素之间加入一个 link 或 script 标签即可

## 盒子模型

标准盒模型：width === content(内容宽度)
IE 盒模型：width === content + padding + border

### box-sizing的属性

> 参考：
> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing

定义：box-sizing定义了用户代理（浏览器）如何计算一个元素的宽高

属性：
1. content-box：默认值，表示设置的宽就是实际的宽
2. border-box：表示设置的宽包括内容宽度 + border + padding

### border: none；和border: 0; 的区别

1. none：表示border-style为none，表示无边框，可能不兼容某些IE
2. 0：设置为0像素，虽然看不到，但是浏览器依然对齐进行了渲染，占用了内存，但兼容某些IE

## 选择器

### 分类

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity
> 2. https://juejin.im/post/5be3d07be51d457d4932b043

1. 对优先级无影响的：
   1. 通配符(\*)
   2. 关系选择器
      1. 或关系：(div, p4)
      2. 包含关系：(div p)
      3. 父子关系：(div>p)
      4. 相邻关系：(div+p)：紧跟着 div 的 p 元素
      5. 兄弟关系：(div~p)：div 后面所有的 p 元素
      6. `:not()`（css3）
         1. `div:not(:first-child)`：表示除了最后一个 div 其他全部匹配
         2. `E:not(s)`：匹配不含有 s 选择符的 E 元素
2. 对优先级有影响的（优先级递增）：
   1. **壹**：权重`(0, 0, 1)`
      1. 元素/标签选择器(p)
      2. 伪元素选择器(div::before)
         1. div:before/div::before
         2. div:after/div::after
         3. div::placeholder(**css3**)
         4. div::selection(**css3**, 只能设置颜色属性)
         5. ::first-letter：选中块级元素的第一行的第一个字母
         6. ::first-line：选中块级元素的第一行
   2. **貳**：权重`(0, 1, 0)`
      1. 类选择器(.class)
      2. 属性选择器(div[class="abc"])
         1. div[class]
         2. div[class="xxy"]
         3. div[class~="xyy"]：class 列表中含有一个为 xyy 的 class
         4. div[class|="xyy"]：class 为一个`xyy-`开头的 class
         5. div[class^="xyy"]：一个`xyy`开头的 class(**css3**)
         6. div[class$="xyy"]：一个`xyy`结尾的 class(**css3**)
         7. div[class*="xyy"]：该 class 名含有`xyy`(**css3**)
      3. 伪类选择器(div:hover)
         1. 鼠标类
            1. 书写顺序(`:focus` > `:hover` > `active`)
            2. `:link`, `:visited`顺序无所谓，但需要在三者之前
         2. `子元素`类型（css3）：与同类型的子元素相比较
            1. `div:first-of-type`：
               1. div 必须要有父元素
               2. 匹配父元素中第一个出现的 div 元素（相对于 div 本身而言的父元素，他是父元素中第一个出现的，例如：`.parent div:first-of-type`中`.parent`内部子元素含有 div，子元素也有父元素；后代元素也含有 div，后代元素也有父元素；则子元素的第一个 div 和后代各级的第一个 div 都被选中）
            2. `div:last-of-type`
            3. `div:nth-of-type(n)`：
               1. 匹配父元素中第 n 个出现的 div 元素，其他顺序出现的 div 元素不被匹配
            4. `div:nth-last-of-type(n)`
            5. `div:only-of-type`：
               1. div 若没有其他兄弟为 div 的元素则被匹配
         3. 子元素（不同类型的都一起比较，css3）：
            1. `div:first-child`
            2. `div:last-child`
            3. `div:only-child`
            4. `div:nth-child(n)`
            5. `div:nth-last-child(n)`
         4. 其他（css3）
            1. `html:root`：匹配根元素，只能作用于 html，可直接`:root`
            2. `div:empty`：匹配不含任何子元素的 div
            3. `input:checked`：匹配处于选中状态的 input
            4. `input:disabled`：匹配处于禁用状态的 input，即设置了 disabled 属性的 input
            5. `div:target`：当点击某链接访问到 div 这个锚点时，相应样式被选中
   3. **叁**：权重`(1, 0, 0)`
      1. ID 选择器(#id)
3. 内联样式优先级高于外部样式
4. `!important`优先级最高
5.

### 伪类和伪元素的区别

> 参考：
> 1. https://www.jianshu.com/p/7936a592f1af

1. 伪类：用来选择那些不容易被普通选择器选中的文档之外的元素
   1. 用单冒号表示
2. 伪元素：创建不存在于文档中的元素
   1. css3使用双冒号表示，使用单冒号兼容ie


## CSS 属性

> 参考：
>
> 1. https://www.jianshu.com/p/c57fa52fecf8

### 不可继承的属性

1. 盒子模型属性
   1. width,height,padding,border,margin 及其相关属性
2. display,float,clear,position,top 等,background,overflow,z-index,vertical-align 等相关属性

### 可继承属性

1. 所有元素可继承：visibility, cursor.
2. 内联样式可继承：font 及其他文本属性
3. 块状元素可继承：text-align,text-indent（首行缩进）
4. 列表元素：list-开头属性可继承
5. 表格元素可继承：border-collapse

### 继承属性和不可继承属性区别

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance#%E7%BB%A7%E6%89%BF%E5%B1%9E%E6%80%A7

继承属性：当一个继承属性没有指定值时，则取父元素的同属性的计算值，否则取它自身设置的值

非继承属性：当一个非继承属性没有指定值时，将取属性的初始值

**inherit**关键字允许显式声明继承性，对所有属性都有效
**all**属性：一次性控制该元素所有属性的继承情况，将应用于该元素所有属性

### display 的属性值

> 参考：https://segmentfault.com/a/1190000006047872

- css3 新增属性值：
  - flex
  - inline-flex
  - grid
  - inline-grid
- 全局属性值（任何属性都有的）
  - inherit：表示从父元素继承
  - initial
  - unset
- 其他
  - none
  - inline
  - inline-block
  - block
  - list-item：类似列表，但需加上其他 list-属性
  - table
  - inline-table
  - table-cell：类似 td
  - table-column：类似 col
  - table-row：类似 tr
  - table-caption：类似 caption

### position 定位

> 参考：
>
> 1. https://www.cnblogs.com/coco1s/p/6402723.html

- relative：相对于元素本身左上角定位
- absolute：相对于最近的设置为 relative/absolute 的祖先元素左上角定位
- fix：相对于浏览器窗口左上角进行绝对定位
- static：默认值，无定位，会忽略四个方向属性和 z-index
- sticky：粘性布局，在子元素中:`position: sticky; top: ...;`
  - 必须指定方向
  - 父节点（祖先？）的 overflow 属性必须为 visibility（为 hidden 时父元素无法滚动）
  - 若父节点（祖先？）设置了定位，则其相对于父节点（祖先？）定位，而非视口定位
  -
- inherit：继承父元素的

### overflow属性如何处理溢出内容

1. scroll：出现滚动条
2. auto：自适应，子元素内容大于父元素内容出现滚动条
3. visible：溢出的内容出现在父元素之外
4. hidden：隐藏溢出的内容



### CSS3 新增的特性有哪些？

> 参考：
>
> 1. https://segmentfault.com/a/1190000010780991
> 2. https://juejin.im/entry/595f1e3c5188250d914dd53c

1. CSS3 新增的选择器：属性选择器、子元素选择器(xx-of-type, xx-child)、:root, :enabled, :disabled, :checked, :empty, :target, :not, ::placeholder, ::selection
2. 动画相关特性：transform(转换), transition(过渡，css属性的变换), animation(动画)
   1. transform：translate（2d平移），rotate（旋转），scale（缩放），skew（扭曲，类似正方形 => 平行四边形）
3. 新增的边框属性：border-radius, border-image, box-shadow
4. 新增的背景属性：background-clip, background-origin, background-size, background-break
5. 新增的文字效果：word-wrap, text-shadow, text-shadow, text-decoration,
6. 新增的渐变效果：linear-gradient, radial-gradient
7. @font-face：使用自定义字体，
8. 媒体查询@media
9.  新增的用户界面特性：resize, box-sizing, outline-offset
10. 滤镜：filter
11. 新增的布局值：弹性布局, 栅格布局，多列布局
    1. 多列布局：column-count, colume-gap, column-rule

### 网页字体使用奇数还是偶数？

1. 偶数字体更容易和 web 设计的其他部分构成`比例关系`，常用的是 12px、14px
2. 奇数字体可能让段落无法对齐

### 让chrome支持小于12px的文字

使用缩小：
```css
.shrink {
    -webkit-transform: scale(0.8);
    -o-transform: scale(1);
    display: inilne-block;
}
```

### 外边距重叠 margin

> 参考：
>
> 1. https://segmentfault.com/a/1190000012265930#item-3
> 2. https://www.jianshu.com/p/0bd5b112123f

定义：属于同一个 BFC 内的两个以上盒子（相邻、嵌套等）的相邻边界重合在一起形成一个单一边界，它们之间没有任何的非空内容、补白、边框

场景：

1. 父子元素边界重叠
2. 兄弟元素边界重叠
3. 空元素边界重叠：有外边距，但没边框，这种情况上下边距发生合并

计算：

1. 全部都为正值，取最大的
2. 不全为正值，都取绝对值，然后用正值减去最大值
3. 全为负值，取绝对值，用 0 减去最大值

解决方法：创建 BFC

1. 外层使用 padding 或 border
2. 内层使用透明 border 或 padding
3. 使用绝对定位
4. 外层使用 overflow: hidden
5. 内层使用浮动+行内块元素

### padding和margin的使用场景

> 参考：
> 1. https://www.dazhuanlan.com/2019/12/09/5dedc19ac578f/

1. padding：
   1. 在边框内侧添加空白时
   2. 空白处需要背景时
   3. 上下相邻的盒子空白等于两者之和时（消除外边距折叠）
2. margin：
   1. 需要在border外侧添加空白时
   2. 空白不需要背景时
   3. 上下相邻的盒子空白折叠时（外边距折叠）

### 使用 CSS 创建三角形

> 参考：
>
> 1. https://juejin.im/post/5d3909425188254f277db4e8

1. 利用盒子的均分原理，将盒子划成 4 等分，保证盒子是块级元素，设置盒子的边框，不需要的边框使用透明色(transparent)，宽高置为 0
2. 气泡对话框的三角形：两个子元素均设置为三角形，且相对于它们的父元素定位
   1. 两个三角形某边框位置大小需要一致
   2. 分别使用不同颜色

### rgba()和 opacity 的透明效果有什么不同？

- rgba()设置透明效果时，只作用于该元素本身的内容文本，对子元素的内容文本不会有影响
  - 比如：`<p>哈哈哈<code>呵呵呵</code></p>`，当作用到 p 元素时，哈哈哈会变为透明，但是子元素中的呵呵呵不会透明
- opacity 是将**元素以及元素内部的所有内容**都变透明

### display: none 和 visibility: hidden 的区别？

> 参考：
>
> 1. https://zhuanlan.zhihu.com/p/37221519

1. 是否占据空间
   1. display: none 不占据任何空间
   2. visibility: hidden 占据原有的空间
2. 是否渲染
   1. display: none 会触发回流/重排，进行渲染
   2. visibility: hidden 只会触发重绘，因没有发生位置变化，不进行渲染
3. 是否是继承属性
   1. display 是非继承属性，设置之后元素及其子元素都会消失
   2. visibility 是继承属性，只要后代元素设置了 visibility，则继承属性被覆盖
4. 读屏器是否读取：只会读取 visibility: hidden 的内容，不会读取 display: none 的内容
5. transition 支持 visibility 属性（可配合实现延迟显示效果），但不支持 display 属性

### display: inline-block 存在的问题

> 参考：
>
> 1. https://www.cnblogs.com/zhuzhenwei918/p/6406377.html

注：下面是多个同级元素同时设置 inline-block 的情况

1. 设置了该属性的元素之间存在间隙，怎么解决
   1. 间隙是 inline、inline-block 公有的问题
   2. 通过给父元素 font-size: 0 解决，由于 font-size 是继承属性，所以可以再给子元素设置字体大小
2. 设置了该属性的元素之间默认底对齐，父元素的高度由最高子元素高度决定
   1. 可通过定位解决底对齐的问题
3. 将设置了该属性的元素中最高的一个元素通过定位移动，不会改变父元素的高度和位置
4. 给父元素设置高度是没有用处的，可设置 padding

### 隐藏元素的方法

1. visibility 为 hidden
2. opacity 为 0
3. position 定位加上负的方向属性让其在可见区域之外
4. display 为 none
5. transform 设置 scale(0)，无限缩小
6. height 为 0，且隐藏边距/边框
7. html 元素设置 hidden 属性
8. filter: blur(0)：括号内数值越大，图像越模糊，一定程度可使得图像消失

### li 之间看不见的空白是什么引起的

原因：受到中间空白字符的影响，会被样式占据一定空间，产生间隔

解决：

1. 设置父元素 font-size: 0 , 使用 letter-space: -3px;
2. 使用浮动 float

### 浏览器解析 css 选择器的过程

> 参考
>
> 1. https://blog.csdn.net/qq_21397815/article/details/72874932
> 2. https://juejin.im/entry/5a123c55f265da432240cc90

定义：浏览器的 css 模块负责解析 css 脚本，并为每个元素计算成样式

css 模块的特点：css 对象多，计算频繁（如何高效计算样式是浏览器设计重点）

解析顺序：从右往左

1. css 解析完毕后将解析结果于 dom 树一起建立成一个渲染树，渲染树的元素与 dom 元素相对应
2. 正向解析需要回溯若干次才能确定是否匹配，效率很低
3. 逆向解析可以较早的过滤一些无关的样式元素和规则

### 浏览器内核的理解

> 参考
>
> 1. https://www.jianshu.com/p/f4bf35898719

内核分类：常见的有下面这些，还有其他的小的内核

1. trident`['traɪd(ə)nt]`内核：IE
2. gecko 内核`['ɡekoʊ]`：Firefox
3. presto 内核`['prestoʊ]`：opera，后转至 blink 内核
4. webkit 内核：safari
5. blink 内核：chrome

内核理解：

1. 渲染引擎：负责取得网页内容（html，xml，图像），整理讯息（css），计算网页的显式方式；不同的内核对网页语法的解释会有不同，所以渲染效果也不同
2. js 引擎：解析 JavaScript，执行 JavaScript 来实现网页动态效果

### web 标准

> 参考：
>
> 1. https://juejin.im/entry/5ab5f229518825558a069304
> 2. https://juejin.im/post/5deef409f265da33c24fe5a8#heading-1

定义：web 标准是网页结构（html，xml），表现（css），行为（js）的标准的集合，也就是要遵循这三个标准定义的规范

w3c 标准：

1. 声明 doctype
2. 定义语言编码 charset
3. JavaScript 脚本引入规范
4. css 引入规范
5. 注释规范
6. 标签需要有结束标签
7. 标签和属性名小写
8. 属性名需用括号括起
9. 属性必须要有属性值
10. 特殊符号用 Unicode 编码表示
11. 图片需要添加有意义的alt属性
12. form表单添加label，增加用户友好度

优点（**为什么要遵循 w3c 标准，对 web 语义化的理解**）：

1. 易于维护：**结构与表现分离**比如 css 样式与 html 的分离，少用行内样式表
2. 页面响应快：使用外联 css 和 js，三者分离减小了 html 的体积，缩减了响应时间
3. 可访问性：没有 css 的时候也容易阅读，更容易被屏幕阅读器识别
4. 设备兼容性：针对不同的设备设置多个 css
5. 搜索引擎优化 SEO：良好的**html 语义化**（标签语义化，合理运用标签）更容易被搜索引擎识别，利于提升排名

### 浏览器兼容性

> 参考：
> 1. https://segmentfault.com/a/1190000019304397
> 2. https://juejin.im/post/59a3f2fe6fb9a0249471cbb4


定义：不同浏览器对同一段代码有不同的解析，导致页面显示效果不统一，兼容性就是要使得同一段代码在不同浏览器显示效果相同

浏览器兼容性分类：
1. 样式兼容性
   1. 不同浏览器默认样式不全相同，可使用第三方的normalize.css或自定义一个reset.css
   2. 浏览器前缀兼容（-o-, -ms-, -moz-, -webkit-）
   3. 链接标签a的鼠标伪类出现顺序：(link(初始状态), visited(访问后), hover(鼠标覆盖), active(鼠标按下的瞬间))
2. 交互兼容性
   1. dom时间处理程序兼容
   2. new date()参数兼容，'2018/01/23'
   3. 滚动高度兼容， 
3. 浏览器hack
   1. ie浏览器对新增的html5标签不支持的情况下，可在html头部为这些浏览器设置不同的样式表，（使用ie条件注释，csshack的部分）
   2. 不同浏览器使用不同的字符进行样式控制（`\0`, `\9`, `+`, `*`等

### 重绘和回流

> 参考：
>
> 1. https://juejin.im/post/5a9923e9518825558251c96a

**渲染树**：浏览器把 html 解析成 dom，把 css 解析成 cssom，dom+cssom = render tree

注意：浏览器使用流式布局，对渲染树通常只需遍历一次就能完成，但 table 系列元素除外，它们通常需要花费 3 倍时间（避免使用 table 布局的原因）

**回流必将引起重绘，重绘不一定引起回流**

回流：当渲染树中部分/全部元素的尺寸、结构或某些属性发生改变时，浏览器重新渲染部分/全部文档的过程

1. 页面首次渲染
2. 浏览器窗口大小发生变化
3. 元素尺寸、位置发生改变
4. 元素内容变化（文字数量、图片大小）
5. 元素字体大小变化
6. 添加/删除可见的 DOM 元素
7. 激活 CSS 伪类
8. 查询某些属性（client-系列、offset-系列、scroll-系列）、调用某些方法（滚动方法、获取计算样式）

重绘：页面元素的样式改变但不影响它在文档流中的位置时，浏览器将赋予元素新样式并重绘它的过程

1. color
2. background-color
3. visibility

性能影响：

1. 回流比重绘的代价更高
2. 现代浏览器会对回流和重绘优化，维护一个队列，当达到一个阈值时，就情况该队列，进行一次批处理（将多次回流/重绘变成一次）

避免

1. css
   1. 避免使用 table 布局
   2. 尽可能在 DOM 树的最末端改变 CSS（避免大范围重绘/回流）
   3. 避免设置多层内联样式
   4. 将动画效果应用到定位元素上
   5. 避免使用 css 表达式
2. JavaScript
   1. 避免频繁操作样式，最好一次性重写
   2. 避免频繁操作 DOM
   3. 对具有复杂动画的元素使用定位，使其脱离文档流，避免引起频繁回流

### css2和css3的区别

总结：
1. css3代码更简洁、结构更合理、兼顾了性能和效果
   1. 加强了功能：增加了新标签和属性，删除了一些冗余的标签，布局方面减少了代码量
   2. 加入了更多的效果（动画，阴影，圆角），改进了盒子模型和列表
2. css3兼容性不高，新属性需要加上浏览器前缀

### css精灵图（css sprites）

定义：把一堆小的图片合成一张大的图片，利用css背景的image、repeat、position组合进行背景定位，目前精灵图/字体库直接使用云端存储的，而不是用本地的

优点：
1. 减少网络请求，减轻服务器的请求压力，提高页面性能
2. 减少图片的大小：合起来的图片大小小于分开的图片大小

缺点：
1. 必须确保图片有序，需要借助ps
2. 维护较为困难，少许改动就要改动合并的图片




## CSS 单位 长度单位 length

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/length#pc

相对长度单位：

1. 字体长度单位
   1. em：根据元素本身 font-size 属性计算，元素本身的 font-size 也使用该单位则根据继承的 font-size 计算
   2. rem：根据根元素的 font-size 大小计算，用在根元素时，代表了它的初始值
2. 视口比例的长度
   1. vw：1vw 代表视口宽度的 1%
   2. vh
   3. vmin：表示 min(vw, vh)
   4. vmax
      绝对长度单位：
3. 注意：
   1. 对于低 dpi（分辨率）设备，单位 px 表示**物理参考像素**，其他单位相对于它定义，故而 1in = 96px = 72pt，造成的后果是此类设备以 in、cm、mm 表示尺寸的单位不需要与同名的物理尺寸大小相等
   2. 高 dpi 设备，in、cm、mm 单位与物理设备相同，因此 px 单位是相对于它们定义的：例如 1px = 1/96 in
4. px：
   1. 对于普通屏幕，表示一个设备像素点；
   2. 对于打印机/高 dpi 屏幕。一个 css 像素往往占据多个设备像素，一般来说：1px = 1/96 in
5. cm，mm
6. in：一英寸
   1. 1in = 2.54cm = 96px

## 响应式布局

> 参考：
>
> 1. https://juejin.im/post/5caaa230e51d452b672f9703

原理：一套代码可以兼容多个终端，同一个页面在不同屏幕尺寸下有不同布局
缺点：css 比较重复
场景：

1. 最首先需要在 meta 元素中设置 viewport 以兼容低版本：`<meta name="’viewport’" content="”width=device-width," initial-scale="1." maximum-scale="1,user-scalable=no”"/>`
2. 使用媒体查询@media，针对不同的媒体类型定义不同的样式
   1. 确定媒体查询分割点（不同类型的分辨率进行分割）
   2. **移动优先**：即媒体类型使用 min-width，相应的像素递增
   3. **PC 优先**：媒体类型使用 max-width，相应的像素递减
3. 媒体查询+百分比布局：使组件的宽高随着浏览器宽高变化
   1. 当有顶栏、侧栏、主体部分时，根据不同的设备分辨率为不同的区域设置不同的百分比
   2. 缺点：
      1. 计算困难，所有单位均要换成百分比
      2. width、height 的百分比相对于父元素，padding、margin 相对于父元素的 width
      3. border-radius、translate、background-size 相对于自身的宽高
      4. top 等四大方向相对于最近定位祖先元素
4. 媒体查询+rem 布局+js：主要用于设置整个网站的字体大小，值相对于根元素的 font-size 大小
   1. 一般不给元素设置具体宽度，对小图标可设置具体宽度
   2. 所有的固定值都要用 rem
   3. js 获取屏幕真实宽度，除以设计稿宽度，得出新的比例，便于自适应
   4. 缺点：
      1. 必须通过 js 动态控制根元素的 font-size 大小，css 样式和 js 代码有耦合
      2. 必须将改变的 font-size 代码放在 css 样式之前，即设置好根元素的 font-size（比如设置 font-size 为 100%，再通过 js 得出根元素具体的 font-size 大小
5. 媒体查询+视口单位 vw/vh/vmin/vmax：1vh 相当于视口高度的 1%
   1. **1 物理像素线**：即普通屏幕下 1px，在高清屏幕下为 0.5px，可在高清屏中配合媒体查询+transform 实现：`transform: scaleY(0.5); transfrom-origin: 50% 0;`
   2. 保持宽高比的元素应使用 padding-top 元素
   3. 结合媒体查询+视口+rem 实现
6. 弹性布局
7. 网格布局
8. 栅格布局（特定的框架才有）

图片的响应式：
原理：大小自适应（保证不会出现拉伸/压缩的情况），根据不同分辨率选择不同图片（高清图/普通图/缩略图）
场景：

1. 使用`max-width: xxx%; height: auto`自适应，其中 auto 保证图片等比缩放，不使用 width 是防止图片拉伸，背景图应利用 background-size 属性
2. 结合媒体查询+background-image 进行多个分辨率下图片的加载
3. 在 img 元素中使用 srcset 属性定义多个不同分辨率的选项，最后加一个 src 属性加载普通视图`<img srcset="photo_w350.jpg 1x, photo_w640.jpg 2x" src="photo_w350.jpg" alt="">`
4. 使用 picture 元素+（source 元素+media 属性）+img 元素：其中必须要有 img 元素

## 弹性盒模型 flexible box 以及适用场景

> 参考：
>
> 1. https://segmentfault.com/a/1190000017309863

知识点：

1. 任何元素都可设置 flex 布局
2. 设置弹性布局之后，子元素的 float、clear、vertical-align 属性将失效
3. flex 布局的元素称为容器（flex-container），它的所有子元素叫做项目（flex-item）
4. flex 布局容器默认有水平主轴、垂直的交叉轴
5. 项目默认沿着主轴排列
6. 轴开始叫做 start，结束叫做 end

适用场景：解决各种页面布局问题，比如响应式布局

属性：

1. 容器属性
   1. flex-direction：决定主轴方向（项目排列方向）
   2. flex-wrap：定义当轴线排列不下的时候换行方式
   3. flex-flow: flex-direction flex-wrap;
   4. justify-content：定义项目在主轴的对齐方式
   5. align-items：定义项目在交叉轴的对齐方式
   6. align-content：定义多根轴线的对齐方式
2. 项目属性
   1. order：项目排列顺序，数值越小越靠前
   2. flex-grow：项目的放大比例，用于剩余空间的分配，默认为 0
   3. flex-shrink：项目的缩小比例，空间不足时将缩小，为 0 时不缩小，默认为 1
   4. flex: flex-grow flex-shrink flex-basis;
   5. align-self: 允许单个项目有不同于其他项目的对齐方式，可覆盖 align-items 属性

## 网格模型`grid`

定义：grid即网格布局，是唯一的css二维布局，擅长将一个页面划分为几个主要区域，和定义这些区域的大小、位置、层次等。

组成：
1. 容器
2. 项目
3. 网格轨道：划分项目（网格单元）的轨道线，如图所示，m x n列的网格项目有m+1, n+1根轨道线，从左往右/从上往下编号：1,2,3...，从右往左/从下往上编号：-1,-2,-3
4. grid布局：![容器展示](img/css-grid容器.png 'gird布局')

容器属性：
1. display：grid, inline-grid(可和其他元素同处一行)
2. grid-template-columns/rows：设置列宽/行高，这是显示定义的，用法如下：
   1. `grid-template-columns: 200px 100px 200px;`：设置三列和对应的列宽
   2. `grid-template-columns: repeat(3, 200px);`：重复，设置三列和每列宽度
   3. `grid-template-columns: repeat(auto-fill, 200px);`：列宽200，**auto-fill关键字表示列数不固定，根据容器宽度自动响应**
   4. `grid-template-columns: 200px 1fr 2fr;`：第一个列宽设为200px，剩余的分成3等份，第二个列宽占据剩余1/3，**fr**关键字表示容器**可用空间**的一等分，**fr可实现等分**
   5. `grid-template-columns: 1fr 1fr minmax(300px, 2fr);`：表示第三个列宽至少200px，最多是其他列的2倍，**minmax()函数**定义网格元素的最大最小尺寸，**minmax函数可去掉右侧留有的空白**
   6. `grid-template-columns: 100px auto 100px;`：**auto**关键字表示中间列的宽度由浏览器决定
3. grid-auto-columns/rows：设置超出显式定义的网格（多余的网格）的列宽/行高，值和上者一致
   1. `grid-auto-columns: 200px;`：表示超出了三列之后，多余列的宽度
4. grid-gap：设置行间距和列间距
   1. grid-row-gap
   2. grid-column-gap
5. grid-template-areas：定义区域，一个区域由一个或多个单元格组成，结合项目（网格）属性`grid-area`一起使用
   1. 容器：`grid-template-areas: ". header header"  "sidebar content content";`：划分成6个单元格，其中`.`表示空的单元格
   2. 项目：`grid-area: header;`：将设置了该属性的元素放在header区域
6. grid-auto-flow：指定网格元素的排列顺序（从左往右row，从上往下column），
   1. `grid-auto-flow: row dense;`：其中**dense**关键字表示若一行后面存在空白，则让**后面合适这个空白的网格**填满这个空白
7. justify-items：设置单元格内容相对于单元格的水平对齐方式
   1. start，end，center，stretch
8. align-items：设置单元格内容相对于单元格的垂直对齐方式
9. justify-content：整个内容区域相对于容器的水平对于方式
10. align-content

项目（网格属性）：
1. 定义项目的位置：根据网格线定义的
   1. grid-column/row-start/end：值为网格线数字，参考上图
2. grid-area：项目所处区域
3. justify-self：设置网格的水平位置，仅作用于设置的网格，和justify-items一致
4. align-self：垂直，align-items一致

## 一个高度自适应的 div，里面有两个 div，其中一个固定高度 100px，另一个怎么填满剩余空间

1. 使用 calc 属性：
   1. `.content {height: calc(100% = 100px)}`
2. 定位：
   1. `.content {position: absolute; top: 100px; bottom: 0}`
3. flex 布局
   1. `.container {display: flex; flex-direction: column;}`
   2. `.content {flex: 1}`

## 为什么要进行 css 样式初始化

原因：不同浏览器对同一标签的默认样式是不同的（兼容性），没有进行初始化会导致不同浏览器显示有差异

## 浮动 float

> 参考：
>
> 1. http://snailsky.me/2014/08/20/%E6%B5%AE%E5%8A%A8%E5%92%8C%E5%AE%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%EF%BC%9F%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%8A%80%E5%B7%A7%EF%BC%9F/#%E9%97%AD%E5%90%88%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%9A

原理：

1. 浮动元素脱离文档流，不占据空间（可引起高度塌陷），且该元素的display自动变为block
2. 浮动元素碰到它的边框/另一浮动元素边框将停留

问题：

1. 引起高度塌陷：父元素高度无法撑开，影响与父元素同级的元素
2. 与浮动元素的其他非浮动元素将紧跟其后

清除浮动：

1. 使用伪元素（**最优**）：在浮动元素后面添加一个伪元素
   1. `display: block`: 让元素块级显示，占满剩余空间
   2. `height: 0;`： 避免生成的内容破坏原有的布局高度
   3. `visibillity: hidden;`：让生成的内容不可见，并且其盖住的内容可以点击交互
   4. `content: ' ';`：
   5. `zoom: 1;`
2. 设置父元素的高度
3. 浮动元素的后面增加一个标签，在该标签上使用 clear 属性（例如左浮动使用 clear: left）
   1. 通俗易懂，但会添加很多无意义标签，后期维护将变得困难
4. 添加一个 br 标签，利用其自身的 clear 属性清除浮动（非 css 中的 clear）
5. 父元素设置`overflow: hidden/both`，但是 IE6 需使用`zoom: 1`属性
   1. 内容增多可能不会自动换行导致多余内容隐藏
6. 父元素设置浮动，此将影响父元素相邻元素布局
7. 父元素设置`display: table`布局：此将改变盒模型

## 块级格式上下文 BFC, block formatting context

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
> 2. https://juejin.im/post/5909db2fda2f60005d2093db#heading-2

定义：

1. 规定了内部的块级盒子如何布局，并且与外面的区域毫不相干（相当于一个封闭了的盒子）
2. 同时是浮动元素与其他元素交互的区域
3. BFC 包含创建它的元素内部的所有内容

创建 BFC：

1. 根元素 html
2. 浮动元素 float 不为 none
3. 定位 position 为 absolute 或 fixed
4. display 为 inline-block、table-cell、table-caption、table、table-row、table-row-group、table-header-group、table-footer-group、inline-table、flow-root
5. overflow 值不为 visible 的元素
6. 弹性元素的直接子元素
7. 网格元素的直接子元素
8. 多列布局 column-count、column-width 不为 auto
9. column-span 为 all 的元素

使用场景：

1. BFC 对浮动(float：会产生文本环绕现象)和清除浮动(使用 clear 的情况下)很重要
2. **浮动不会影响其他 BFC 元素的布局**
   1. 浮动定位和清除浮动时只会应用于同一个 BFC 的元素
   2. 避免覆盖，可以将覆盖的元素设置为 BFC
   3. 外边距折叠发生在同一个 BFC 的元素之间
   4. 实现两栏自适应布局（其中一栏固定：使用 float 且定宽/高），另一栏可使用 BFC
   5. 三栏自适应（技巧：两个浮动 div 在前（左右浮动），自适应元素在最后（BFC）

### 其他格式上下文（FC，formatting context）

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
> 2. https://segmentfault.com/a/1190000009308818#item-2

分类：

1. 块格式化上下文
2. 内联格式化上下文：存在于其他上下文中，类似为一个段落中的内容，在水平书写模式中，只有水平方向的 padding、border、margin 应用于元素
   1. Inline formatting context
3. 灵活格式化上下文
   1. flex formatting context
   2. GFC

## 文档流

### 标准文档流（正常流，normal flow）

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Introduction
> 2. https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow

定义：表示不对页面进行任何布局控制时，浏览器的默认布局模式，即默认情况下元素的布局排布，比如：

1. 块级元素内容宽度是其父元素的 100%，高度与内容一致
2. 块级元素垂直排列，行内元素水平排列
3. 行内元素宽高与内容一致
4.

脱离文档流场景：

1. display：当为 relative 时，不会脱离文档流，只是它自身相对移动，不会影响到其他元素的布局
2. float
3. position
4. 多列布局

恢复文档流：解决元素脱离文档流给布局带来的影响

## css 优化，提高性能的方法有那些

> 参考：
>
> 1. https://www.zhihu.com/question/19886806

优化的场景：主要就是正确使用 css 属性和一些规范

1. 加载性能：主要是减少文件体积、减少阻塞加载、提高并发
   1. 合并多个 css，尽量减少 http 请求
   2. 尽量少使用`!important`
   3. 属性值为 0 时，不加单位
   4. 属性值为小数时，可去掉首位的 0
   5. css 文件放在页面最上面
   6. 移除空的 css
   7. 抽取公共样式，避免不必要的重复（样式抽离）
   8. 尽可能合并不同类的重复规则
2. 选择器性能：选择器的规范化，可维护性
   1. 避免后代选择符、过度约束、链式选择符（层级太深）
3. 渲染性能：页面的文本、动画等渲染
   1. **尽量减少重排/重绘**，
      1. 重绘比如能使用 background-color 就不要使用 background
      2. 重排按照 css 书写顺序
4. 可维护性、健壮性
   1. 使用语义化命名，便于维护
   2. 使用紧凑的语法
   3. 遵守盒子模型
   4. 正确使用 display 属性
   5. 不适用的@import 导入
   6. 不滥用浮动
   7. **css 书写顺序**：
      1. 位置属性：position、display、float 及其相关联属性
      2. 盒模型属性：width、height、padding、margin
      3. 文字属性
      4. 边框、背景属性
      5. 其他属性
      6. 功能属性放在一块
   8. 可扩展和模块化的 css 架构（SMACSS）：将样式分类
      1. base：基础样式表
      2. layout：布局样式
      3. module：不同模块的样式（可重用）
      4. state：状态样式，与 js 配合使用的，表示某组件/功能的交互样式
      5. theme：皮肤样式
   9. BEM 命名规范(常用于类名，[参考](https://juejin.im/post/5b925e616fb9a05cdd2ce70d)
      1. 中划线(-)：某类名的连接符，比如`.parent-of-me`
      2. 双下划线(`__`)：表示子元素，比如`.parent__sub1`
      3. 双中划线(--): 表示不同的状态/版本（比如成功：`.outer--success`

## css 样式抽离

思路：css 拆分成两部分：公共样式，业务样式

1. 公共样式：不涉及具体业务，比如配色、字体、交互等
2. 业务样式：应该有合理的命名

## css 预处理器

### css 预处理器是什么

> 参考：
>
> 1. https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_preprocessor

定义：是一个通过预处理器语法生成 css 的程序，它们有原生 css 不具备的属性（像代码混合、嵌套选择器、继承选择器等），这些特性让 css 更加可读和可维护
使用：需要先安装 css 编译工具
特性：

1. 结构清晰，便于扩展
2. 可以方便屏蔽浏览器私有语法的差异，无需考虑浏览器的兼容问题
3. 实现多重继承
4. 完美兼容 css 代码

分类：

1. Sass、SCSS
2. Less
3. Stylus
4. Postcss

### 预处理器的异同

> 参考：
>
> 1. https://zhuanlan.zhihu.com/p/23382462

1. 变量：
   1. Sass 必须使用\$开头，变量值和变量名需要用冒号分隔
   2. Less 必须使用@开头，其他和 Sass 类似
   3. Stylus 不要使用@开头（不会编译），其他没有限定
2. 作用域：css 预处理器给变量赋予作用域，存在生命周期
   1. Sass：不存在全局变量，故而不要定义相同的变量
   2. Less 变量类似 JS，向上逐级查找
   3. Stylus：等同于 Less
3. 选择器嵌套：三者无差别，但 Sass 还提供了属性嵌套，比如`font { size: 12px; }`
4. 继承：
   1. Sass 和 Stylus 把选择器的样式继承到另一个选择器，使用@extend
   2. Less 是将 Mixins 中的样式嵌套到每个选择器里面，缺点是每个选择器将出现重复样式
5. 导入@import
   1. 当相互引入不同 css 时，可能产生命名冲突，故应该单独一个文件用于定义变量
   2. Less 扩展了@import 语法

## 伪元素:before 和 :after

> 参考：
>
> 1. https://www.webhek.com/post/understanding-pseudo-element-before-and-after.html
> 2. https://www.cnblogs.com/polk6/p/8058468.html

伪元素作用：避免由于实现某个效果而添加多余的 html 标记

定义：最初的伪元素是一个冒号的，但在 css3 中，为了与伪类区别，故而伪元素的前缀改为 2 个冒号

用法：

1. 结合 content 属性在元素前后插入内容（比如图标、引号）
2. 表现行为和真正元素无区别，故可以给它们进行样式设置
3. 缺省情况下是内联元素，指定宽高需设置 display 属性
4. 实现各种特效
5. 清除浮动
6. 生成进度线和时间线（线条形式，利用宽高属性和定位）
7. 创建几何图形（三角形，多边形，五角星）

## 动画

### 手写动画的最小间隔时间是多久?

多数显示器默认频率为 60hz，即一秒刷新 60 次，所以理论间隔时间为 1/60 \* 1000 = 16.7ms



## 图片格式有哪些，它们的区别是什么

图片格式：

1. png：
   1. 无损压缩，支持透明、半透明、不透明（多用于图标设计）
   2. 仅支持 rgb 色彩
   3. 不支持矢量、动画
2. jpg：
   1. 有损压缩，色彩还原度较好
   2. 不支持透明、矢量、动画
3. jpeg：除了比 jpg 大，其他的 jpg 类似
4. bmp：
   1. 支持无损压缩（Windows 特有，图片较大，色彩度较高）
   2. 不支持透明、矢量、动画
5. gif
   1. 支持有损压缩、半透明、动画（用于小图标、网页背景、动图）
   2. 不支持全透明、矢量
6. webp：
   1. 支持有损、无损压缩，
   2. 压缩时间久，兼容性不高

## browser hacks

> 参考：
>
> 1. http://browserhacks.com/

用处：

1. 通过某些浏览器的怪异特性解决一些功能问题

注意：

1. 在做低的浏览器版本适配时 hack 十分有用

### CSS hacks

> 参考
>
> 1. https://www.w3cplus.com/css/browser-hacks.html
> 2. https://www.cnblogs.com/wzzkaifa/p/6893749.html

原理：不同的浏览器对 css 的支持和解析程度不一样，并且由于 CSS 优先级的关系，这将导致生成的页面效果不同（主要针对 IE 浏览器）

分类：

1. 类内部 hack
   1. 属性名 IE6 可识别前缀添加了`_`或`*`的样式：比如`_background: red;` => 颜色为 red
   2. 属性名 IE7 可识别前缀添加了`*`或`+`的样式：比如`*background: red;` => 颜色为 red、
   3. 属性的书写顺序应该是识别能力强的放在前面，比如 Firefox > IE6 > IE7
   4. IE 中只有 IE6 不能识别`!important`
   5. 后缀加`\9`（IE6-10）
   6. 后缀加`\0`(IE8-10)
   7. 后缀加`\9\0`(IE9-10)
2. 选择器 hack(前缀可添加)
   1. IE6 可加`*`
   2. IE7 可加`*+`
   3. IE9 可加`:root`
3. 媒体查询 hack：比如后缀加`\0`, `\9`
4. html 头部引用 hack(指在 html 头部中引用 css)
   1. 使用`<!-[if (lte/gte/lt/gt, 可选) IE num]> 引用样式表link <![endif]->`
5. 行内块元素会有3px的间隙（比如图片）


## 行内元素、块元素、空元素

1. 行内元素：文本相关的
   1. b、span、strong、em
   2. img、input、button、select
2. 块元素：表格、表单、列表、标题
3. 空元素：无实际内容的元素
   1. meta、link
   2. br、hr

## style标签写在body前和body后的区别

1. 页面加载顺序是自上而下的，置于之前方便加载样式
2. 浏览器是逐行解析的，解析到文档尾部的样式表时，会导致停止之前的渲染，待加载完之后重新渲染（IE会出现闪烁现象，FOUC）

## 什么是critical CSS？

定义：是一种提取首屏css的技术，以便尽快将内容呈现给用户（快速加载网页首屏的方法）

思路：
1. 抽取出首页的css
2. 用内联css样式加载这部分css
3. 页面加载完之后再加载其他css