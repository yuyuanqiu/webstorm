<template>
  <div class="special-course-all">
    <h3>全部课程</h3>
    <div>展示类别</div>
    <div class="good-course-body">
      <el-row :gutter="20" type="flex">
        <el-col :span="6" v-for="i in 20" :key="i">
          <a href="#" class="grid-content bg-purple">
            <el-image :src="src1" lazy>
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
              <!-- <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>-->
            </el-image>
            <div>
              <div class="lesson-name">
                <span>信息素养：效率提升与终身学习的新引擎</span>
              </div>
              <div class="lesson-info">
                <span>四川大学</span>
                <span>学习人数</span>
              </div>
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/SpecialCourseGood.scss";
</style>