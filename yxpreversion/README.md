# yxpreversion 项目开发日志

mooc页面：
  - 首页
  - 一级分类页（国家精品，计算机。。。）
  - 课程详情页（未登录状态），不含视频界面
  - 课程视频播放页
  - 所有学校页
  - 学校页面
  - 教师页面
  - 学生页面
  - 404页面

  - 登录注册页
  - 用户设置页

common：表示公共的JS文件，比如常量
components：公共组件（可复用）
  common：表示可以在所有项目中使用的，不单在这个项目
  content：当前项目的业务公共组件

使用element-ui时，Backtop 回到顶部组件出现错误，去掉出错的内容即可显示

使用vue封装一个tab栏切换的左侧导航栏的公共组件
  首先看最终效果图：https://www.cnblogs.com/leileilei/p/10303549.html
使用element ui会出现级联面板选中之后不能隐藏-------该问题已解决


## 20200216总结：

使用flex布局
  1. flex布局自适应列数 
  2. 使用element布局时，不要指定span，可使用自适应

this.$router：指代的是router.js中的router对象

##

使用element中的el-image组件，会在点击之后页面固定不动
  - 初步解决：使用img替换
  - **终极解决：在body中设置css属性overflow:initial !important;即可**

ps制作透明图标只能保存为png才能透明效果

## 20200302总结：

- element-ui使用属性和事件时，当出现属性出错，可将其转换：page-size <=> pageSize 
- 