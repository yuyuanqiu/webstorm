<template>
  <el-backtop :bottom="80" :right="20" :visibility-height="50">
    <div>
      <i class="el-icon-caret-top"></i>
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: "back-top"
};
</script>

<style lang="scss" scoped>
.el-backtop {
  width: 50px;
  div {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
  }
}
</style>