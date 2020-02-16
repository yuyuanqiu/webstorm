# yxpreversion 项目开发日志

common：表示公共的JS文件，比如常量
components：公共组件（可复用）
  common：表示可以在所有项目中使用的，不单在这个项目
  content：当前项目的业务公共组件

使用element-ui时，Backtop 回到顶部组件出现错误，去掉出错的内容即可显示

使用vue封装一个tab栏切换的左侧导航栏的公共组件
  首先看最终效果图：https://www.cnblogs.com/leileilei/p/10303549.html
使用element ui会出现级联面板选中之后不能隐藏


## 20200216总结：

使用flex布局
  1. flex布局自适应列数
  2. 