<template>
  <div>
    <div class="home-lessons" v-for="sub_course_list in newCourseList" :key="sub_course_list.id">
      <h2 class="card-head">{{ sub_course_list.top_level }}</h2>
      <div class="card-lessons">
        <div class="card-aside" @click=toPath(sub_course_list.big_course._id)>
          <el-card :body-style="{ padding: '0px', height: 'inherit' }">
            <!-- 添加element image组件 -->

            <div class="h-l-img" @mouseenter="imgenter" @mouseleave="imgleave">
              <img :src="'http://' + sub_course_list.title_big_big" />
              <el-link>
                <div>
                  <i class="el-icon-video-play"></i>
                </div>
              </el-link>
              <div class="h-l-inner">
                <div class="h-l-hx"></div>
                <h3>{{ sub_course_list.big_course.name }}</h3>
                <h4>{{ sub_course_list.big_course.first_lesson.title }}</h4>
                <span>[课时]&nbsp;&nbsp;{{ sub_course_list.big_course.first_lesson.time }}</span>
              </div>
            </div>
            <!-- 添加element image组件 -->
            <!-- <img src="~assets/img/shouye-kecheng-datu.jpg" class="image" /> -->
            <div class="el-card-divs">
              <el-link
                v-for="chapter in sub_course_list.big_course.others_lesson"
                :key="chapter.id"
                :underline="false"
              >
                <span>{{chapter.title }}</span>
                <span>{{ chapter.time }}</span>
              </el-link>
            </div>
          </el-card>
        </div>
        <div class="card-body" @mouseenter="mouseEnter($event, sub_course_list.course_list)">
          <container-flex :datalist="sub_course_list.course_list" v-slot="{ data }">
            <!-- 给事件传回调时，不能使用() -->
            <a
              class="container-flex-a"
              :title="data.name"
              @mouseenter="mouseEnter($event, data)"
              @mouseleave="mouseLeave"
              @click="toPath(data._id)"
              style="cursor: pointer;"
            >
              <div class="container-flex-img">
                <img :src=" 'http://localhost:20020' + data.title_bg" />
              </div>
              <div class="course_info_body">
                <h3>{{ data.name }}</h3>
                <span>{{ data.school }}</span>
                <span class="el-icon-user">{{ data.people }}</span>
              </div>
            </a>
          </container-flex>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { home_lessons } from "admin/common.js";

import axios from "axios";

export default {
  created() {
    let url = "http://localhost:20020/get_user/home_course";

    axios.get(url).then(res => {
      this.newCourseList = res.data;
    });
  },
  name: "home-lessons",
  data() {
    return {
      newCourseList: [],
      level: "经济学",
      course_big: {},
      courses: {}
    };
  },
  methods: {
    // 添加移除类名，放大缩小图片

    mouseEnter(event, data) {
      let img = event.target.getElementsByTagName("img")[0];
      // console.log(img);
      // console.log(data);

      img.classList.add("enter_img");
    },
    mouseLeave(event) {
      let img = event.target.getElementsByTagName("img")[0];
      // console.log(img);

      img.classList.remove("enter_img");
    },
    imgenter(event) {
      let img = event.target.getElementsByTagName("i")[0];
      img.classList.add("video-hover");
    },
    imgleave(event) {
      let img = event.target.getElementsByTagName("i")[0];
      img.classList.remove("video-hover");
    },
    toPath(path) {
      this.$router.push({ path: "lessoninfo/" + path });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "assets/css/home/HomeLessons.scss";
</style>

