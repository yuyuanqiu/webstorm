<template>
  <div id="specific-course-nav">
    <el-row  class="row-bg">
      <el-col :span='4' class="course-head">
        <h3>课程</h3>
      </el-col>
      <el-col v-for="i of course_specific" :key="i">
        <el-link href="#">{{i}}</el-link>
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
        '精品课程','精品课程程','程程程程程','程程','程程程','程程','程程程程程','程课程程程','精品课程课程','精品课程程','程程程程程','程课程程','程程程','程程','程程程程程','程程程'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/SpecialCourseNav.scss";
</style>