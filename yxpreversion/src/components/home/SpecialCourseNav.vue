<template>
  <div id="specific-course-nav">
    <el-row  class="row-bg">
      <el-col :span='4' class="course-head">
        <h3>国家精品</h3>
      </el-col>
      <el-col v-for="i of course_specific" :key="i">
        <el-link href="#" :underline="false">{{i}}</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "special-course-nav",
  data() {
    return {
      course_specific: [
        '全部','外语','计算机','理学','工学','经济管理','文史哲','艺术设计','心理学','医药卫生','法学','教育教学','农林园艺'
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/css/SpecialCourseNav.scss";
</style>