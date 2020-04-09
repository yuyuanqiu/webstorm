<template>
  <div id="course-online">
    <h2>所有课程状态</h2>
    <div class="course-online-status">
      <el-row type="flex">
        <el-col :span="6" v-for="course in courses" :key="course.id">
          <div class="course-online-info">
            <el-image  style="width: 32%;" :src="course.bg_url" fit="contain"></el-image>
            <div class="course-online-des">
              <h3>课程名称：{{ course.name }}</h3>
              <span>申请时间：{{ course.apply_date }}</span>
            </div>

            
          </div>

          <el-steps :active="2" align-center>
              <el-step title="申请"  icon="el-icon-edit" description=""></el-step>
              <el-step title="待审核"  icon="el-icon-upload" description=""></el-step>
              <el-step v-if="course.current_status.value === '审核未通过'" title="审核未通过" description=""></el-step>
              <el-step v-else title="审核通过" description="">
                <template slot="description">
                <el-input v-model="s" placeholder=""></el-input>

                </template>
              </el-step>
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
      s: '',
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