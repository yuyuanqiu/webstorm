## 事件
### 事件侦听和触发
- `eventTarget.addEventListener(event, listener, boolean)`：boolean中true为捕获侦听，false为冒泡，当为true时为捕获，在回调中可使用`event.preventDefault()`阻止默认操作
- 其中第三个参数可为一个属性配置对象，包含的属性有capture（捕获），once（执行一次），passive（不调用preventDefault方法）
- 取消侦听事件使用removeEventListener，参数必须相同（三个参数都要相同），调用dom对象也必须相同，不然无法取消，其中listener必须是指同一个回调函数（匿名函数相当于两个不同函数）
- `el.dispatchEvent(event-type)`可以自动调用元素设置的event-type事件，其中参数必须是一个事件对象，可以通过`new Event("click")`的形式创建
### 事件监听的方式
- 只在事件冒泡时触发
    - 在html标签中定义事件属性`on-=f()`：html与js未分离，不利于代码加工
    - 在js中给元素定义事件`el.onclick = f`：重复声明同一个事件类型会被覆盖
- 可在冒泡/捕获时触发
    - `el.addEventListener(event, f, boolean)`：同一事件可添加多个侦听函数，可冒泡/捕获时触发，dom/window/XMLHTTPRequest事件都有这个监听接口
- **监听函数内部的this指向触发事件的元素节点**
### 事件的传播
- 三个阶段
    - 捕获阶段：从window对象传到目标节点（上到下）
    - 目标阶段：在目标节点触发的事件
    - 冒泡阶段：从目标节点到window对象（下到上）
- 事件代理：由于事件会在冒泡阶段向上传递到祖先节点，所以可以把子节点的监听函数定义到祖先节点上，这样祖先节点就可以监听多个后代节点事件
    - 事件监听的回调函数的参数为`event`对象，由此就可以知道事件的目标节点，`event.target`属性指向目标事件的元素名称
- **阻止事件的传播**
    - 在捕获阶段`第三个参数为false`,若使用`event.stopPropagation();`在捕获过程中的某一元素，则从window到目标事件的捕获和冒泡即**终止于该元素**，下面的元素事件不会捕获，并且也不会冒泡（正常情况下是先捕获再冒泡）
    - 在冒泡阶段`参数为false`使用上述式子，则会正常捕获，但向上冒泡阶段会`终止于该元素`，不再往上冒泡
    - `event.stopPropagation()`只会在设置了这一个事件（比如**click事件**）的元素生效，这个元素其他的同类事件（**click事件**）未设置则同类事件不会生效（不阻止事件传播）
    - 彻底取消元素某一类事件比如**click**事件，设置一个`event.ImmediatePropagation()`即可

### Event对象
- **事件发生之后，会产生一个事件对象传给事件监听的回调函数作为参数**，比如`el.addEventListener(event-type, f(event), false)`中的`f(event)`
- 所有事件都是`Event`对象的实例或者是继承了`Event.prototype`对象
    ```javascript
    // 创建event对象实例时，若不显示表明bubbles为true，则事件不会发生冒泡，只能捕获
    // 若不显示声明cancelable为true，默认不能取消
    // 但是若事件的对象是元素本身，无论是在捕获/冒泡监听，该事件还是有效（会触发），因为是在目标阶段，不是在其他阶段
    var event = new Event(
        "click",
        {
            bubbles: false; // 事件是否冒泡
            cancelable: false; // 事件是否可以用`el.preventDefault()`取消
        }
    )
    ```
- 实例属性
    - event.bubbles，event.cancelable
    - event.type
    - event.eventPhase：表示事件目前所处阶段，0事件未发生，1事件捕获，2到达目标节点，3事件冒泡
    - event.currentTarget表示当前正通过的节点（事件传播过程），event.target表示事件的目标触发节点
    - event.timeStamp表示事件发生相对于网页成功加载后的时间间隔

- 实例方法
    - `event.preventDefault()`：**取消浏览器对当前事件的默认行为**，比如可取消表单元素的输入/选择，超链接的跳转等
    - 阻止事件的传播
        - `event.stopPropagation()`
        - `event.stopImmediatePropagation()`
    - `event.composedPath()`：返回一个数组，数组元素是冒泡过程经过的节点，从目标节点开始往上

### 鼠标事件
- 事件类型
    - 事件触发顺序
        - 按下鼠标`mousedown`->松开鼠标`mouseup`->`click`->`dblclick`
        - 鼠标进入`mouseenter`->进入/移动`mouseover`->离开/移动`mouseout`->离开`mouseleave`
        - 按下键盘`keydown`->按下有值的键`keypress`->松开键盘`keyup`
        - `mouseenter`事件进入元素之后在元素内部移动不会触发该事件，而`mouseover`事件在进入元素之后，在元素内部之间移动会触发事件，但是2种事件从监听元素外部进入则会触发事件
    - contextmenu事件：鼠标右键/按下上下文菜单键触发
    - wheel事件：滚动鼠标滚轮触发（**Wheel事件继承了MouseEvent事件**）
    - 创建MouseEvent对象实例可以配置一个属性对象
- MouseEvent接口的实例属性
    - 事件发生时是否按下对应的键
        - `e.altKey`,`e.ctrlKey`,`e.metaKey`,`e.shiftKey`：返回布尔值
        - 发生时鼠标按下的键：`e.button`返回数值（0左键/1中键/2右键，`e.buttons`返回二进制数值（1左键/2右键/4中键），可同时按下多个键，则相应数值累加
    - 鼠标位置（只读属性）
        - `e.clientX/Y`：表示鼠标相对于浏览器窗口左上角的位置
        - `e.screenX/Y`：表示鼠标相对于屏幕左上角的位置
        - `e.movementX/Y`：返回当前位置与上个鼠标事件的水平/垂直距离
        - `e.offsetX/Y`：表示鼠标据目标节点padding左上角的位置
        - `e.pageX/Y`：鼠标距文档节点左上角的位置
- 实例方法：`e.getModifierState(功能键名)`表示是否同时按下特定的功能键

