<template>
  <div id="teacher-head">
    <el-row :gutter="20">
      <el-col class="teacher-avator">
        <el-avatar :size="96" :src="src" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </el-col>
      <el-col>
        <div class="teacher-jieshao">
          <h2>{{ teacher.name }}</h2>
          <div class="zhicheng">
            <span @click="tiaozhuan">{{ teacher.school }}</span>
            <span>-</span>
            <span v-for="zhicheng in teacher.zhichengs" :key="zhicheng">{{ zhicheng }}</span>
          </div>
          <div class="jianjie">
            <span>{{ teacher.jianjie }}</span>
          </div>
        </div>
      </el-col>
      <el-col class="teacher-school-icon">
        <el-image style="width: 248px; height: 248px" :src="teacher.schoolicon" :fit="fit"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("assets/img/school-icon/teacher-icon.png"),

      teacher: {
        name: "李莉",
        school: "四川大学",
        schoolicon: require("assets/img/school-title-icon.jpg"),
        zhichengs: ["华西医院皮肤科主任", "博士生导师"],
        jianjie:
          "毕业于法国贝桑松大学，于2008年获成都市科学技术协会“成都市科普工作先进个人”。职位名称：华西医院皮肤科、科室副主任重点研究领域：损美性皮肤病（色素性、血管性皮肤病、痤疮等），皮肤老化及光老化，皮肤保健与美容，皮肤美容激光，化妆品咨询等"
      }
    };
  },
  methods: {
    tiaozhuan() {
      this.$router.push({
        path: '/school/' + this.teacher.school
      })
    }
  },
};
</script>

<style lang="scss">
@import 'assets/css/teacher/TeacherHead.scss';
</style>