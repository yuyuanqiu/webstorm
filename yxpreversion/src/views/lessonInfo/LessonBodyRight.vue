<template>
  <div class="lesson-body-right">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="header">
        <el-image :src="course.school">
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <div class="teachers">
        <b class="el-icon-s-operation">{{ course.teachers.length }}位授课教师</b>
        <div v-for="teacher in course.teachers" :key="teacher.id">
          <el-link href="/teacher/ls" :underline="false">
            <img :src="course.avatar" />
            <div class="teacher_i">
              <span>{{ teacher.name }}</span>
              <span>{{ teacher.job }}</span>
            </div>
          </el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    teachers_num() {
      return this.course.teachers.length;
    }
  },
  data() {
    return {
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

