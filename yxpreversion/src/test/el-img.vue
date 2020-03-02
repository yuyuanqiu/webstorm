<template>
  <div class="el-img">
    <div 
      style="width: 100%;height: 1000px;"
    ></div>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        加载中
        <span class="dot">...</span>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('../assets/img/lessongs-icon/yanjiang.png')
    }
  }
};
</script>

<style>
</style>