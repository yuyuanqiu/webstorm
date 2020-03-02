<template>
  <el-link :underline="false" class="grid-content">
    <el-image :src="course.icon" lazy>
      <div slot="placeholder" class="image-slot">
        加载中
        <span class="dot">...</span>
      </div>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>


    <template slot="ls">
      
    </template>

    <div class="lesson-bottom">
      <div class="lesson-name">
        <b>{{ course.name }}</b>
        <div class="school">{{ course.teacher.school }}</div>
        <div class="name">{{ course.teacher.name }}</div>
      </div>
      <div class="lesson-info">
        <span class="el-icon-user-solid">{{ course.people }}</span>
        <span
          v-if="Number(course.week_now) > 0"
          class="el-icon-pie-chart"
        >进行至第{{ course.week_now }}周</span>
        <span v-else-if="Number(course.week_now) <= 0" class="el-icon-pie-chart">课程未开始</span>
        <span v-else class="el-icon-pie-chart">课程已结束</span>
      </div>
    </div>
  </el-link>
</template>

<script>
export default {};
</script>

<style>
</style>