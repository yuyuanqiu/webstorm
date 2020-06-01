<template>
  <div class="good-course-body">
    <el-row :gutter="20" type="flex">
      <el-col :span="6" v-for="course in courses" :key="course.id" >
        <el-link @click="toPath(course._id)" :underline="false" class="grid-content">
          <el-image :src="'http://localhost:20020' + course.icon" lazy>
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>

          <div class="lesson-bottom">
            <div class="lesson-name">
              <b>{{ course.name }}</b>
              <div class="school">{{ course.school.name }}</div>
              <div class="name">{{ course.teacher_name }}</div>
            </div>
            <div class="lesson-info">
              <span class="el-icon-user-solid">{{ course.people }}</span>

              <span v-if="new Date() > new Date(course.end_date)" class="el-icon-pie-chart">课程已结束</span>

              
              <span v-else-if="new Date() < new Date(course.start_date)" class="el-icon-pie-chart">课程未开始</span>

              <span v-else class="el-icon-pie-chart">进行至第{{ Math.ceil((new Date() - new Date(course.start_date)) / (1000 * 3600 * 24 * 7)) }}周</span>
            </div>
          </div>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    toPath(_id) {
      this.$router.push({path: '/lessoninfo/' + _id})
    },
  },
  name: "course-list",
  // 子级组件定义props，props里面的被成为子级特有的属性，该属性可绑定父级组件传递的值
  props: ["courses"],
  data() {
    return {
      // courses: {
      //   course1: {
      //     icon: require('assets/img/lessongs-icon/yanjiang.png'),
      //     name: '信息素养：效率提升与终身学习的新引擎',
      //     teacher: {
      //       name: '苏筱洪',
      //       school: '中国科学技术大学',
      //     },
      //     people: '14164',
      //     week_now: 3,
      //   },
      //   course2: {
      //     icon: require('assets/img/lessongs-icon/yanjiang.png'),
      //     name: '信息素养：效率提升与终身学习的新引擎',
      //     teacher: {
      //       name: '苏筱洪',
      //       school: '中国科学技术大学',
      //     },
      //     people: '14164',
      //     week_now: 3,
      //   },
      //   course5: {
      //     icon: require('assets/img/lessongs-icon/yanjiang.png'),
      //     name: '信息素养：效率提升与终身学习的新引擎',
      //     teacher: {
      //       name: '苏筱洪',
      //       school: '中国科学技术大学',
      //     },
      //     people: '14164',
      //     week_now: 3,
      //   },
      //   course4: {
      //     icon: require('assets/img/lessongs-icon/yanjiang.png'),
      //     name: '信息素养：效率提升与终身学习的新引擎',
      //     teacher: {
      //       name: '苏筱洪',
      //       school: '中国科学技术大学',
      //     },
      //     people: '14164',
      //     week_now: 3,
      //   },
      //   course3: {
      //     icon: require('assets/img/lessongs-icon/yanjiang.png'),
      //     name: '信息素养：效率提升与终身学习的新引擎',
      //     teacher: {
      //       name: '苏筱洪',
      //       school: '中国科学技术大学',
      //     },
      //     people: '14164',
      //     week_now: 3,
      //   }
      // }
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/common/CourseList.scss";
</style>