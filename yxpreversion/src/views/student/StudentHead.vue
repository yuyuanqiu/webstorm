<template>
  <div id="student-head">
    <el-row type="flex" class="s-h-head">
      <el-col :span="1">
        <el-avatar :size="68" :src="student.icon" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </el-col>
      <el-col :span="23">
        <div class="s-h-other">
          <h2>{{ student.name }}</h2>
          <i v-if="student.sex == '男'" class="el-icon-male"></i>
          <i v-else class="el-icon-female"></i>
        </div>
        <div class="s-h-input">
          <el-input placeholder="请输入内容" v-model="student.qianming" ></el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        icon: require('assets/img/people-icon/教师头像.png'),
        name: '谕爰',
        sex: '男',
        qianming: '学习不是为了让你爽，是让你变得牛逼。而成长的过程，都有阵痛期。为了消磨时间而读书，跟刷抖音打游戏没区别，都是浪费精力。'
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/student/StudentHead.scss";
</style>