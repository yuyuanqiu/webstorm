<template>
  <div class="ad-with-lessons">
    <el-row type="flex">
      <el-col :span="8" v-for="i in 3" :key="i">
        <el-link href="/null" :underline="false">
          <el-image :src="src" lazy>
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("assets/img/lessons-ad3.png")
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/LessonsADColumn3.scss";
</style>