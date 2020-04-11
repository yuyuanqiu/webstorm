<template>
  <div class="lesson-title" id="lesson-title">
    <el-row type="flex">
      <el-col :span="12">
        <img :src="src" class="el-image"/>
          <!-- <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div> -->
      </el-col>
      <el-col :span="12">
        <div class="lesson-title-right">
          <h3>大数据计算技术</h3>
          <div class="lesson-title-right-time">
            <el-card class="box-card" shadow="never">
              <div slot="header">
                <span>第3次开课</span>
                <i class="el-icon-circle-check"></i>
              </div>
              <div class="lesson-title-right-time-s">
                <div>
                  <span>开课时间： 2019年11月01日 ~ 2020年02月21日</span>
                  <span>进行至第16周，共16周</span>
                </div>
                <div>学时安排： 1-3小时每周</div>
              </div>
            </el-card>
          </div>
          <div class="lesson-title-right-join">
            <div class="lesson-title-join-people">已有10676人参加</div>
            <div class="lesson-title-join-to">
              <el-button type="primary" @click="tiaozhuan">立即参加</el-button>
            </div>
            <p class="el-icon-warning-outline">怕错过精彩内容？ 那就赶快参与吧！</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("assets/img/lesson-info/lesson-title.png")
    };
  },
  methods: {
    tiaozhuan() {
      console.log(this)

      this.$router.push('login')
    }
  },
};
</script>

<style lang="scss">
@import "assets/css/lessonInfo/LessonTitle.scss";
</style>

<style lang="scss">

</style>