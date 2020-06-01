<template>
  <div id="school-teacher">
    <h2>老师列表</h2>
    <el-row>
      <el-col :span="6" v-for="teacher in teachers" :key="teacher._id">
        <a class="outer" @click="toPath(teacher._id)">
          <div class="img">
            <img :src="'http://localhost:20020/' + teacher.avatar" />
          </div>
          <div>
            <h3>{{ teacher.teacher_name }}</h3>
            <span>{{ teacher.teacher_job }}</span>
          </div>
        </a>
      </el-col>
    </el-row>

    <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="teachers.length"
        :page-size="5"
        prev-text="上一页"
        next-text="下一页 "
        @current-change="get_next_teacher"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.get_teacher()
  },
  methods: {
    toPath(path) {
      this.$router.push({ path: "/teacher/" + path });
    },
    get_next_teacher(page) {
      this.get_teacher(page - 1);
    },
    get_teacher(skip) {
      axios
        .post("http://localhost:20020/course/teacher_count", {
          school_id: this.$route.params.school_id,
          skip: skip,
        })
        .then(res => {
          // console.log(res.data);

          this.teachers = res.data;
        });
    }
  },
  data() {
    return {
      skip: 0,
      teachers: []
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/school/SchoolTeacher.scss";
</style>