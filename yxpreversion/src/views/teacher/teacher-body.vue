<template>
  <!-- 

  只有将组件根元素设为id，才会引用在router-view中的name上

  -->
  <div id="teacher-body">
    <el-tabs v-model="wenzhang">
      <el-tab-pane label="主讲课程" name="first">
        <el-row :gutter="20" type="flex">
          <el-col :span="6" v-for="course in course_info" :key="course._id">
            <el-link
              @click="toPath(course._id)"
              :underline="false"
              class="grid-content"
            >
              <img class="el-image" :src="'http://localhost:20020' + course.course_bg" />

              <div class="lesson-bottom">
                <div class="lesson-name">
                  <b>{{ course.course_name }}</b>
                  <div class="name">{{ course.teacher.teacher_name }}</div>
                </div>
                <div class="lesson-info">
                  <span class="el-icon-user-solid">{{ course.study_people.length }}</span>
                  <span
                    v-if="new Date() > new Date(course.end_date)"
                    class="el-icon-pie-chart"
                  >课程已结束</span>
                  <span
                    v-else-if="new Date() < new Date(course.start_date)"
                    class="el-icon-pie-chart"
                  >课程未开始</span>
                  <span
                    v-else
                    class="el-icon-pie-chart"
                  >进行至第{{ Math.ceil((new Date() - new Date(course.start_date)) / (1000 * 3600 * 24 * 7)) }}周</span>
                </div>
              </div>
            </el-link>
          </el-col>
        </el-row>
      </el-tab-pane>

      <!-- --------------------------------------使用v-infinite-scroll无限加载 -->
      <el-tab-pane label="文章" name="wenzhang">文章内容</el-tab-pane>
      <el-tab-pane label="讨论" name="taolun">讨论</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import axios from "axios";

export default {

  created() {
    let url = "http://localhost:20020/course/teacher_course";

// console.log(this.$route.params.teacher)
    axios.post(url, {
      teacher_id: this.$route.params.teacher
    }).then(res => {
      console.log(res.data)
      this.course_info = res.data;
    })
  },
  data() {
    return {
      course_info: [],
      articleTitles: [
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "论信息战在战争中的作用",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        }
      ],
      wenzhang: "first",
      dialogFormVisible: false,
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courses: {
        course1: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course2: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course5: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course4: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course3: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        }
      }
    };
  },
  methods: {
    toPath(path) {
      this.$router.push({ path: "/lessoninfo/" + path });
    },
    load() {
      // setTimeout(function() {
      this.articleTitles.push({
        author: "宋佳佳",
        course: "论信息战在战争中的作用",
        publishDate: new Date(),
        title: "跨域总结:从CORS到Ngnix",
        description:
          "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
        dianzan: 23,
        pinglun: 5
      });
      // }, 2000);
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/teacher/TeacherBody.scss";
</style>