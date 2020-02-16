# 概要

元素和对应类名均以el-开头
如果一个属性无效果，试试删除/使用其他属性
md太多不好查找，使用ctrl+f查找同名属性，有些属性描述只写一处

## 布局

el-row：行布局，内部使用el-col，表示一行多少列
  使用gutter属性指定行内 列间隔
  使用type属性赋值为flex，启动flex布局
  flex: 使用justify/align属性指定子元素水平/垂直对齐方式：start，center，end。。。
el-col：
  使用span属性指定行内 某列宽度占比，默认总和为24
  使用offset指定偏移比（距离），距原有位置向后偏移，与span总和24，
  响应式布局：同时使用xs,sm,md,lg,xl五个属性对应五个尺寸(768,992,1200,1920px)
  push/pull：栅格向右/左移动格数（距离）


可在某种尺寸条件下隐藏元素的类名：hidden-尺寸-[only | and-[down | up]]

## 布局容器

el-container：外层容器（可自身嵌套），只能有的子元素是下面4个，当包含el-header/footer时，全部子元素垂直排列，否则水平排列，所有组件采用flex布局
  属性：direction：子元素排列方向，默认值如上，horizontal/vertical


  1. el-header：顶栏容器
     1. 属性：height：顶栏高度
  2. el-aside：侧边栏容器
     1. 属性width：侧栏宽度
  3. el-main：主要区域容器
  4. el-footer：底栏
     1. height：底栏高度

## 颜色值，字体，边框值，图标

使用图标：在元素中插入相应class：el-icon-*

## 按钮

el-button：
  1. 属性：
     1. type定义不同场景的深色，primary / success / warning / danger / info
        1. 值为text表示文字按钮
     2. plain：无值，定义场景浅色
     3. round：圆角，无值
     4. circle：圆形，无值
     5. disabled：禁用，无值，可接受bool
     6. size：按钮尺寸：medium，small，mini
     7. icon：图标按钮，值为图标类名
     8. autofocus：是否默认聚焦
     9. native-type：原生type属性，button，submit，reset
     10. 绑定属性：loading：布尔值，加载中 **注意：如果属性设置无效，请绑定**
  2. 
  
el-button-group：嵌套按钮容器

## 文字链接

el-link：
  1. 属性：
     1. type：与按钮相同
     2. disabled
     3. underline：是否有下划线，bool
     4. 内部定义元素（在该元素内容之后）或自身（在该元素内容之前）带图标icon类名
     5. icon：图标类名

## 单选框

el-radio：设置v-model绑定变量（绑定的是value即label属性），变量的值为label属性值（string，number，Boolean）
  1. disabled：接受bool
  2. v-model='xxx'
  3. label：radio的值
  4. border
  5. size
  6. name：原生name属性

事件：change：绑定值变化时触发，回调函数参数：选中的radio label值

el-radio-group：单选（按钮）框组（多个选框时必须使用的），v-model**绑定**的值即el-radio元素label属性的值（即选中的值），v-model发生变化，相应label发生变化
  1. v-model
  2. size
  3. disabled
  4. text-color：按钮radio激活时文本颜色
  5. fill：按钮radio激活时的填充色和边框色

事件：change


el-radio-button：单选按钮，
  1. 属性：
     1. size
     2. border：无值，带有边框
     3. label
     4. disabled
     5. name：原生

## 多选框

el-checkbox：单独使用表示两种状态的切换，内部内容为按钮后的介绍
  1. v-model：单一checkbox默认绑定bool
  2. disabled
  3. label：选中状态的值（在checkgroup/v-model=arr时有效）
  4. true-label：选中时的值
  5. false-label：未选中时的值
  6. border
  7. size
  8. name：原生
  9. checked：是否勾选
  10. indeterminate：表示是全选的按钮

事件：
  1. change：绑定值变化时触发，回调函数参数是更新后的值

el-checkbox-group：多选组
  1. v-model：绑定数组类型变量，值为选中多选的label值，label与数组相应元素对应，label值是数组存在的值，表示选中
  2. 绑定min/max：可选个数的最大最小值
  3. size
  4. disabled
  5. text-color：
  6. fill

事件：change

el-check-button：按钮多选
  1. size
  2. border：无值，带有边框
  3. label
  4. true-label
  5. false-label
  6. disabled
  7. name
  8. checked

## 输入框

总会显示vue绑定值，应该处理input事件并更新绑定值，否则值将不会改变，不支持v-model修饰符

el-input：
  1. 属性：
     1. v-model 
     2. label
     3. placeholder
     4. disabled
     5. clearable：可清空的输入框（有一个x掉的图标），无值
     6. show-password：可切换显隐的密码框，无值
     7. prefix/suffix-icon：前/后添加图标，为类名
        1. 通过slot属性（prefix/suffix）插入头部/尾部内容，比如图标，并添加class为icon的名字
     8. type：指定textarea表示多行，属性rows控制高度
        1. 自适应文本高度的多行：autosize（设置一个对象指定可适应的最小/大行数{minRows, maxRows}
     9. 通过指定slot属性（prepend/append）指定前后置内容（可用元素有很多，可自己试，比如template，el-input。。。）
        1. 系统类名：el-input-group_prepend
     10. size：large，small，mini，和默认
     11. 限制输入长度max/minlength，可设置show-word-limit属性展示字数统计（在text/textarea有效）
     12. autocomplete：自动补全，原生
     13. resize：是否可缩放，none/both/horizontal/vertical
     14. validate-event：输入时触发表单校验，默认true

事件：
  blur，focus，change，input，clear（点击有clearable属性生成的清空按钮时触发）

方法：
  focus获取焦点，blur，select（选中文字）

el-autocomplete：带输入建议的输入框
  1. fetch-suggestions：返回输入建议的方法属性，当输入建议准备好时通过参数返回到该组件
  2. 边输入边显示符合的结果，可结合scoped slot自定义输入的模板，scoped的参数是item，表示当前输入对象
  3. 从服务器搜索数据：在数据返回前有加载动画
  4. placeholder
  5. disabled
  6. value，必填，输入绑定值
  7. debounce：去抖延时
  8. placement：菜单弹出的位置，top/start/end/...
  9. trigger-on-focus：是否在输入框聚焦时显示建议列表（菜单），true
  10. select-when-unmatched：无匹配建议按回车触发select事件，bool
  11. label
  12. perfix/suffix-icon
  13. hide-loading：是否隐藏远程加载时的图标
  14. proper-append-to-body：是否加菜单插入到body元素，出现定位问题时可设置为false
  15. highlight-first-item：是否默认突出显示远程搜索建议的第一项，false

事件：select，点击选中建议项时触发，回调函数参数选中建议项

方法：focus

## 计数器：类似购物车中的商品数量加减

el-input-number：使用v-model绑定变量，初始值即默认值
  1. 属性：
     1. disabled
     2. min/max：控制范围
     3. step：步长，可改动输入框的值，改动之后会重新计算初始值，然后进行步长
     4. step-strictly：bool，表示只能输入step的倍数
     5. precision：精度值（控制小数位数，非负整数，不能小于step的小数位数）
     6. size：medium，small，mini
     7. controls-position：控制按钮位置，right
     8. name
     9. label：输入框关联的label
     10. placeholder

事件：
  change，blur，focus

方法：
  focus，select

## select选择器

el-select：v-model值为选中的el-option的value
  1. disabled
  2. 可清空单选：clearable，无值
  3. 多选：multiple，此时vmodel绑定的是数组，设置collapse-tags属性合并为一段文字（即在输入框中之后显示一个内容，有数量加号）
  4. filterable：启用搜索功能，无值，默认会根据输入实时匹配结果，可传入filter-method实现其他搜索逻辑（参数为当前输入）
  5. 远程搜索：同时设置filterable和remote，同时传入一个remote-method（参数为当前输入），需为el-option添加key
  6. 输入创建并选中不存在的条目：allow-create，filterable需为真
  7. default-first-option：按下回车可选中第一项
  8. value-key：唯一标识，当select绑定对象时使用
  9. size
  10. clearable
  11. collapse-tags：多选时是否将选中值按文字展示
  12. multiple-limit：限制个数
  13. placeholder
  14. filter-method
  15. remote-method
  16. loading：是否远程获取数据
  17. loading-text：加载时显示的文字
  18. no-match-text：无匹配时显示的文字
  19. no-data-text：选项为空显示的文字，可使用插槽slot=empty设置
  20. reserve-keyword：多选时将之前选中的内容保留关键字
  21. popper-append-to-body
  22. automatic-dropdown：在输入框获取焦点自动弹出选项菜单

事件：
change，visible-change：下拉框出现/隐藏触发（回调参数出现为true），remove-tag，clear，blur，focus

slot：
  prefix，empty

el-option：
  1. disabled
  2. 在内部插入slot可自定义内部内容
  3. label
  4. value

focus，blur（失去焦点并隐藏下拉框）

el-option-group：对el-option分组，label属性为分组名
  1. label
  2. disabled

## 级联选择器

el-cascader：
  1. 属性：
     1. v-model：选中项绑定值
     2. 绑定options：指定选项数组即可渲染出一个级联（多级菜单）
     3. 通过props.expandTrigger定义展开子菜单触发方式，hover（需绑定props）
     4. props.multiple：设置为true表示多选
     5. props.checkStrictly：可选择任一级选项
     6. props.lazy开启动态加载，配合props.lazyload设置加载数据方法（参数：当前点击节点，数据加载完成时回调）
     7. 在options选项数组中，指定某级设置disabled:true表示禁用，这里也可指定value，label，children（子级）
     8. 设置clearable属性：无值，表可清空输入框
     9. show-all-levels：是否显示完整路径
     10. collapse-tags：折叠多个选项变为一个
     11. size：medium，small，mini
     12. placeholder
     13. separator：选项分隔符
     14. filterable
     15. filter-method
     16. debounce：去抖延迟

事件：change，expand-chanage：展开节点变化触发
  flur，focus，visible-change（下拉框出现/隐藏触发），remove-tag（移除tag触发）

方法：  getCheckedNodes：获取选中节点


级联面板：el-cascader-panel，通过设置props加载功能
  1. 属性：
     1. v-model，options，props
  2. 事件：change，expand-change
  3. 方法：get/clearCheckedNodes

props：
  1. expandTrigger：次级菜单展开方式
  2. multiple
  3. checkStrictly
  4. emitPath
  5. lazy
  6. lazyLoad
  7. label
  8. children
  9. disabled
  10. leaf

