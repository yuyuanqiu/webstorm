<template>
  <div id="teacher-head">
    <el-row :gutter="20">
      <el-col class="teacher-avator">
        <el-avatar :size="96" :src="'http://localhost:20020/' + teacher_info.avatar">
        </el-avatar>
      </el-col>
      <el-col>
        <div class="teacher-jieshao">
          <h2>{{ teacher_info.teacher_name }}</h2>
          <div class="zhicheng">
            <span style="cursor: pointer; color: #6fcaff;" @click="tiaozhuan">{{ school_name }}</span>
            <span>-</span>
            <span>{{ teacher_info.teacher_job }}</span>
          </div>
          <div class="jianjie">
            <span>{{ teacher_info.teacher_des }}</span>
          </div>
        </div>
      </el-col>
      <el-col class="teacher-school-icon">
        <el-image style="width: 248px; height: 248px" :src="'http://localhost:20020/static/' + teacher_info.school.logo" fit="fit"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import axios from "axios";

export default {
  computed: {
    school_name() {
      return this.teacher_info.school.name
    }
  },
  created() {

    // console.log(this.$route);
    let url  = "http://localhost:20020/course/teacher_page";

    axios.post(url, {
      teacher_id: this.$route.params.teacher,
    }).then(res => {
      console.log(res.data[0]);

      this.teacher_info = res.data[0];
    })

  },
  data() {
    return {
      teacher_info: {
        school: {}
      },
      src: require("assets/img/school-icon/teacher-icon.png"),

    };
  },
  methods: {
    tiaozhuan() {
      this.$router.push({
        path: '/school/' + this.teacher_info.school._id
      })
    }
  },
};
</script>

<style lang="scss">
@import 'assets/css/teacher/TeacherHead.scss';
</style>