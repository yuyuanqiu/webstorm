<template>
  <div id="school-teacher">
    <h2>老师列表</h2>
    <el-row>
      <el-col :span="6" v-for="teacher in teachers" :key="teacher">
          <a :href="'/teacher/' + teacher.name" class="outer">
            <div class="img">
            <img :src="teacher.icon" />
          </div>
          <div>
            <h3>{{ teacher.name }}</h3>
            <span>{{ teacher.job }}</span>
          </div>
          </a>
      </el-col>
    </el-row>

    <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        page-size="20"
        prev-text="上一页"
        next-text="下一页 "
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers: {
        teacher1: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher2: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher3: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher4: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher5: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher6: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher7: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher8: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        },
        teacher9: {
          name: "冯菲",
          job: "高级工程师",
          icon: require("assets/img/school-icon/teacher-icon.png")
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/school/SchoolTeacher.scss";
</style>