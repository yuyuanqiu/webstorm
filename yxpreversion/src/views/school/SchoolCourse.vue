<template>
  <div id="school-course">
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

    <el-row :gutter="20" type="flex">
      <el-col :span="6" v-for="course in course_info" :key="course.course._id">
        <el-link @click="toPath(course.course.course_id)" :underline="false" class="grid-content">
          <img class="el-image" :src="'http://localhost:20020' + course.course.course_bg" />

          <div class="lesson-bottom">
            <div class="lesson-name">
              <b>{{ course.course.course_name }}</b>
              <div class="name">{{ course.teacher_name }}</div>
            </div>
            <div class="lesson-info">
              <span class="el-icon-user-solid">{{ course.course.study_people.length }}</span>
              <span
                v-if="new Date() > new Date(course.course.end_date)"
                class="el-icon-pie-chart"
              >课程已结束</span>
              <span
                v-else-if="new Date() < new Date(course.course.start_date)"
                class="el-icon-pie-chart"
              >课程未开始</span>
              <span
                v-else
                class="el-icon-pie-chart"
              >进行至第{{ Math.ceil((new Date() - new Date(course.course.start_date)) / (1000 * 3600 * 24 * 7)) }}周</span>
            </div>
          </div>
        </el-link>
      </el-col>
    </el-row>

    <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="course_count"
        :page-size="5"
        prev-text="上一页"
        next-text="下一页 "
        @current-change="get_next_course"
      ></el-pagination>
    </div>
  </div>
</template>


<script>

import axios from "axios";

export default {
  methods: {
    toPath(path) {
      this.$router.push({ path: "/lessoninfo/" + path });
    },
    
    get_next_course(page) {
      // console.log(page)
      this.get_course(page -1 , this.url1)
    },
    get_course(skip, url) {
      axios
        .post(url, {
          school_id: this.$route.params.school_id,
          skip: skip
        })
        .then(res => {
          // console.log(res.data);

          this.course_info = res.data;
        });
    },

    get_course_count(url) {
      axios
        .post(url, {
          school_id: this.$route.params.school_id,
        })
        .then(res => {
          // console.log(res.data);

          this.course_count = res.data.length;

        });
    },
   
  },

  created() {
    // console.log(this.$route.params.school_id, "course ...");
    this.get_course(this.skip, this.url1);
    this.get_course_count(this.url2);
    // this.get_teacher();

    
  },

  data() {
    return {
      skip: 0,
      teachers: [],
      url1: "http://localhost:20020/course/school_course",
      url2: "http://localhost:20020/course/course_count",
      course_info: [],
      course_count: 0,
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/school/SchoolCourse.scss";

</style>