<template>
  <div id="admin-home">
    <div class="a-h-inner">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </div>

      </el-image>
      <div class="admin-logo-text">
        后台管理系统&#8482;
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      src: require("public/logo_big.png"),
    }
  }
};
</script>

<style lang="scss">

@import "admin/scss/component/AdminHome.scss";

</style>