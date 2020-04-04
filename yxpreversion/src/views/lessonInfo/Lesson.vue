<template>
  <div id="lesson">
    <router-view name="lesson-title"></router-view>
    <div class="lesson-body">
      <el-row class="lesson-body-row">
        <el-col :span="12" class="lesson-body-col">
          <router-view name="lesson-body-left"></router-view>
        </el-col>
        <el-col :span="12"  class="lesson-body-col">
          <router-view name="lesson-body-right"></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>

#lesson {
  
  .lesson-body {


    .el-row.lesson-body-row {

      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      margin: 40px 0;

      .el-col.lesson-body-col {

        &:first-child {
          flex: 8;
        }
        
        &:last-child {
          flex: 3;
          margin-left: 20px;
        }
      }
    }

    

  }
}
</style>