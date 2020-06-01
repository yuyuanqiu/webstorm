<template>
  <div class="special-course-all">
    <h3>全部课程</h3>
    <div class="options-lesson">
      <el-row>
        <el-col :span="12" type="flex">
          <div>
            <span>全部</span>
            <span>正在进行</span>
            <span>即将开始</span>
            <span>已结束</span>
          </div>
        </el-col>
        <el-col :span="12" type="flex">
          <div>
            <span>综合</span>
            <span>热门</span>
            <span>最新</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <course-list :courses="courses"></course-list>

    <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="count"
        :page-size="10"
        prev-text="上一页"
        next-text="下一页 "
        @current-change="request_course"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    
    request_course(skip) {
      let url = "http://localhost:20020/course/course_all";
      axios
        .post(url, {
          category: this.$route.params.class,
          skip: skip - 1
        })
        .then(res => {
          console.log(res.data, "course all");
          this.courses = res.data;
        });
    }
  },
  mounted() {
    let url = "http://localhost:20020/course/course_all";
    let url2 = "http://localhost:20020/course/course_pagess";
    axios
      .post(url, {
        category: this.$route.params.class,
        skip: this.skip
      })
      .then(res => {
        console.log(res.data, "course all");
        this.courses = res.data;
      });

    axios.post(url2, {
      category: this.$route.params.class,
    }).then(res => {
      console.log(res.data, "pagesss")
      let count = localStorage.setItem("count_page", res.data[0].number)
      this.count = Number(localStorage.getItem("count_page"));
    })
  },

  data() {
    return {
      skip: 0,
      count: 0,
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courses: []
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/specialcourse/SpecialCourseGood.scss";
@import "assets/css/specialcourse/SpecialCourseAll.scss";
</style>