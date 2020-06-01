<template>
  <div id="course-online">
    <h2>所有课程状态</h2>
    <div class="course-online-status">
      <el-row type="flex">
        <el-col :span="6" v-for="course in courses" :key="course.id">
          <div class="course-online-info">
            <div class="el-image-outer">
              <el-image style="width: 100%;height: 112px;" :src="'http://localhost:20020' + course.course_bg" fit="cover"></el-image>
            </div>
            <div class="course-online-des">
              <h3>课程名称：{{ course.course_name }}</h3>
              <span>申请时间：{{ course.apply_date }}</span>
            </div>
          </div>

          <el-steps :active="(course.apply_status == '申请' || course.apply_status == '待审核') ? 2 : 3" align-center>
            <el-step title="申请" icon="el-icon-edit" description></el-step>
            <el-step title="待审核" icon="el-icon-upload" description></el-step>
            <el-step
              v-if="course.apply_status === '审核未通过'"
              title="审核未通过"
              icon="el-icon-error"
              description
            >
              <template slot="description">
                <el-popover
                  placement="top-start"
                  title="审批意见"
                  width="200"
                  trigger="hover"
                  :content="course.apply_comment"
                >
                  <el-link type="primary" slot="reference">查看原因</el-link>
                </el-popover>
              </template>
            </el-step>
            <el-step v-else title="审核通过" icon="el-icon-success" description></el-step>
          </el-steps>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      s: "",
      active: ["待审核", "审核未通过", "审核通过"],
      courses: []
    };
  },
  created() {
    
  },
  created() {
    
    let url = "http://localhost:20020/admin/course_audit";

    axios.post(url, {
      teacher_id: this.$store.state.user_info._id,
    }).then(res => {
      // console.log(res.data)
      this.courses = res.data;
      
    })
  },
};
</script>

<style lang="scss">
@import "admin/scss/component/CourseOnline.scss";
</style>