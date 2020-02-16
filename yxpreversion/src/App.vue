<template>
  <div id="app">


    <!-- 
      系统结构：
        网站头部，网站尾部始终渲染
        main中的内容分 所需情形 渲染
        故而要改动的页面内容为main中的内容
      
    -->
    <el-container>
      <el-header height="64px">
        
        <!-- 网站头部，始终渲染在页面上，因为每个页面都有头部 -->
        <top-container />
      </el-header>

      <el-main>

        <!-- 每个页面的内容都在这里面 -->

        <router-view />
      </el-main>

      <!-- 网站尾部，始终渲染在页面上，因为每个页面都有尾部 -->
      <el-footer height="260px">
        <footer-container />
      </el-footer>
    </el-container>

    <!-- 返回顶部按钮 -->
    <back-top />
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: 微软雅黑, "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
.el-header {
  padding: 0 9%;
}
.el-main {
  padding: 20px 9% !important;
  // width: 100%;
  position: relative;
}

.el-footer {
  width: 100%;
  padding: 50px 9% 0 !important;
  background-color: #333;
}
</style>
