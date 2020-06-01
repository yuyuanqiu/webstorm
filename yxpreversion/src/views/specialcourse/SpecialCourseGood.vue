<template>
  <div id="special-course-good">
    <h3>最新好课推荐</h3>
    <course-list :courses="courses"></course-list>
    <!-- <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        :page-size="20"
        prev-text="上一页"
        next-text="下一页 "
      ></el-pagination>
    </div> -->
  </div>
</template>


<script>
// import { spe_course } from "admin/common.js"

import axios from "axios";

export default {
  mounted() {
    let url  = "http://localhost:20020/course/course_new";

    axios.post(url, {
      category: this.$route.params.class,
    }).then(res => {
      console.log(res.data, "good course");
      this.courses = res.data;
    })
  },
  data() {
    return {
      dialogFormVisible: false,
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courses: []
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/specialcourse/SpecialCourseGood.scss";
</style>

<style lang="scss">
// ---------------------------强制更改element样式的方法，新建一个style标签，并且不要使用scoped属性即可覆盖
</style>