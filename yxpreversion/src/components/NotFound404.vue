<template>
  <div class="not-found-404">
    <el-row :gutter="20" type="flex">
      <el-col :span="6" :offset="6">
        <div class="grid-content">
          <el-image :src="src">
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <p class="grid-content">页面虽有限，学海终无涯</p>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <a @click="toPath({name: 'main'})">
            <el-button type="primary">发现课程</el-button>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "not-found-404",
  data() {
    return {
      src: require("../assets/img/not-found-404.png")
    };
  },
  methods: {
    toPath(obj) {
      this.$router.push(obj)
    }
  },
};
</script>

<style lang="scss">
// 导入时记得加上分号---------------------------
@import "assets/css/Not-Found-404.scss";
</style>