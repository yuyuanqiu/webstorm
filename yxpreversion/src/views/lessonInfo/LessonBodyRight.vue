<template>
  <div class="lesson-body-right">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="header">
        <img :src="'http://localhost:20020/static/' + teacher_info.bigLogo" @click="toPath('/school/' + teacher_info.school_id)">
      </div>
      <div class="teachers">
        <b class="el-icon-s-operation">1位授课教师</b>
        <div>
          <el-link @click="toPath('/teacher/' + teacher_info._id)" :underline="false">
            <img :src="'http://localhost:20020/' + teacher_info.avatar" />
            <div class="teacher_i">
              <span>{{ teacher_info.teacher_name }}</span>
              <span>{{ teacher_info.teacher_job }}</span>
            </div>
          </el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>

import axios from "axios";

export default {
  methods: {
    toPath(path) {
      this.$router.push({
        path: path,
      })
    }
  },
  created() {
    let url = "http://localhost:20020/course/get_course_info";

    let course_id = this.$route.params.lessonname;

    axios
      .post(url, {
        _id: course_id
      })
      .then(res => {
        this.teacher_info = res.data[0].teacher_info[0];
        // console.log(this.teacher_info);

      });
  },
  computed: {
    teachers_num() {
      return this.course.teachers.length;
    }
  },
  data() {
    return {
      teacher_info: [],
      course: {
        school: require("assets/img/school-icon/北京大学.png"),
        avatar: require("assets/img/people-icon/教师头像.png"),
        teachers: [
          {
            name: "林霖",
            job: "副教授"
          },
          {
            name: "夏衍",
            job: "教授"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/lessonInfo/LessonBodyRight.scss";
</style>

