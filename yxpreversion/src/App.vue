<template>
  <div id="app" >
    <router-view/>
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

  // // ------------隐藏滚动条----------
  // // ie10+
  // -ms-overflow-style: none;
  // // Firefox
  // overflow: -moz-scrollbars-none;

  // // webkit
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  overflow: initial !important;
}

#app {
  // .el-header {
  //   padding: 0;
  //   width: 100%;
  //   background: #fff;
  //   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  // }
  // .el-main {
  //   padding: 20px 9%;
  //   // width: 100%;
  //   position: relative;
  //   background: #f5f5f5;
  // }

  // .el-footer {
  //   width: 100%;
  //   padding: 50px 9% 10px;
  //   background-color: #333;
  // }
}
</style>
