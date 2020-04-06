<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  


}
</script>

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
  /*修改滚动条样式*/

  // ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
  // ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）

  // ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

  //   ::-webkit-scrollbar 滚动条整体部分

  &::-webkit-scrollbar {
    width: 6px;
    // height: 10px;
  }
  // ::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
  &::-webkit-scrollbar-track {
    background: #333;
    // border-radius: 2px;
  }
  // ::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
  &::-webkit-scrollbar-thumb {
    background: #409EFF;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: pink;
  }
  // ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
  &::-webkit-scrollbar-corner {
    background: pink;
  }

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
