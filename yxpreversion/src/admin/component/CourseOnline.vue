<template>
  <div id="course-online">
    <h2>所有课程状态</h2>
    <div class="course-online-status">
      <el-row type="flex">
        <el-col :span="6" v-for="course in courses" :key="course.id">
          <div class="course-online-info">
            <div class="el-image-outer">
              <el-image style="width: 100%;height: 112px;" :src="course.bg_url" fit="cover"></el-image>
            </div>
            <div class="course-online-des">
              <h3>课程名称：{{ course.name }}</h3>
              <span>申请时间：{{ course.apply_date }}</span>
            </div>
          </div>

          <el-steps :active="course.current_status.active" align-center>
            <el-step title="申请" icon="el-icon-edit" description></el-step>
            <el-step title="待审核" icon="el-icon-upload" description></el-step>
            <el-step
              v-if="course.current_status.value === '审核未通过'"
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
                  content="课程内容不规范，请重新撰写。"
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
import { autoCreatedCourse } from "admin/common.js";

export default {
  data() {
    return {
      s: "",
      courses: []
    };
  },
  created() {
    this.courses = autoCreatedCourse(5);
    console.log(this.courses);
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/CourseOnline.scss";
</style>