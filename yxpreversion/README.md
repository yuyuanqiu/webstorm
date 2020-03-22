# yxpreversion 项目开发日志

## 予思课程 口号：

花费更少的时间，学到更多的知识。

## 论文需求

1. 实现课程视频可以反复观看
2. 可随时与老师进行互动交流问题（课下课堂时间限制）
   1. 老师和学生解决问题，可获取相应的积分
   2. 老师可通过学生参与互动的情况，给学生进行相应的积分奖励
   3. 积分可兑换道具卡（注意，兑换线下课堂缺席道具卡时，必须通过相关考核）
   4. 积分最终可折算成平时成绩


### 衍生需求

1. 满足学生突发事件而无法上课的情况，可在线上通过老师的课程考核
   1. 出现问题：考核过程中学生通过网络作弊：
   2. 解决问题：JS如何监听浏览器页面窗口的获得焦点与失去焦点事件？（当浏览器窗口失去焦点时，考试结束）
   3. 资料：
      1. https://segmentfault.com/q/1010000009302485
      2. https://blog.csdn.net/huangzhenkun94/article/details/73772728?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
      3. https://www.google.com/search?newwindow=1&ei=UsJ1XtK3L4L_wAP05rjgAg&q=%E7%9B%91%E5%90%AC%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A1%B5%E9%9D%A2%E7%AA%97%E5%8F%A3%E7%9A%84%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E4%B8%8E%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9%E4%BA%8B%E4%BB%B6&oq=%E7%9B%91%E5%90%AC%E6%B5%8F%E8%A7%88%E5%99%A8%E9%A1%B5%E9%9D%A2%E7%AA%97%E5%8F%A3%E7%9A%84%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E4%B8%8E%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9%E4%BA%8B%E4%BB%B6&gs_l=psy-ab.3...561372.561372..561625...0.0..0.486.486.4-1......0....1..gws-wiz.oEkfaN7LKP0&ved=0ahUKEwjSqI7jhavoAhWCP3AKHXQzDiwQ4dUDCAs&uact=5
      4. 
2. 记录用户在网站的浏览记录和停留时间
   1. https://blog.csdn.net/canglingyue/article/details/52409265
   2. https://blog.csdn.net/lihefei_coder/article/details/79759145
   3. 

## 拉取GitHub中某仓库时，若下载速度太慢，可先将其拉取到gitee中，然后从gitee下载即可

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