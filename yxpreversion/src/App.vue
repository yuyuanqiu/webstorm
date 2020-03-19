<template>
  <div id="app">
    <!-- 
      系统结构：
        网站头部，网站尾部始终渲染
        main中的内容分 所需情形 渲染
        故而要改动的页面内容为main中的内容
      
    -->
    <el-container>
      <!-- 网站头部，始终渲染在页面上，因为每个页面都有头部 -->
      <el-header height="64px">
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

// --------------------------------------解决点击el-image时会出现页面固定不动的现象，该现象不知何时引入的------------------------------
body {

  // ------------隐藏滚动条----------
  // ie10+
  -ms-overflow-style: none;
  // Firefox
  overflow: -moz-scrollbars-none;

  // webkit
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: initial !important;
}

#app {
  .el-header {
    padding: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  }
  .el-main {
    padding: 20px 9%;
    // width: 100%;
    position: relative;
    background: #f5f5f5;
  }

  .el-footer {
    width: 100%;
    padding: 50px 9% 10px;
    background-color: #333;
  }
}
</style>
