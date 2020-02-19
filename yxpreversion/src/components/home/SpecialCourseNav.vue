<template>
  <div id="specific-course-nav">
    <el-row  class="row-bg">
      <el-col :span='4' class="course-head">
        <h3>国家精品</h3>
      </el-col>
      <el-col v-for="i of course_specific" :key="i" class="lesss">
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
  },
  mounted() {
    let nav = document.getElementById('specific-course-nav')

    nav.addEventListener('click', function(e) {
      console.log(e)
      let li = nav.getElementsByClassName('el-link');
      console.log(li)
      let li_arr = Array.from(li);
      console.log(li_arr.indexOf(e.path[0]))
    },true)
  },
};
</script>


<style lang="scss">
@import "assets/css/SpecialCourseNav.scss";
</style>