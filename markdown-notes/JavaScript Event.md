## 事件
### 侦听器
- `eventTarget.addEventListener(event, listener, boolean)`：boolean中true为捕获侦听，false为冒泡，当为true时，使用`event.preventDefault()`阻止默认操作
- 取消侦听事件使用removeEventListener，参数必须相同，对象也必须相同，不然无法取消，其中listener必须是指同一个回调函数
