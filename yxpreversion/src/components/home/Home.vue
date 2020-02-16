<template>
  <div>
    <router-view name="home-menu"></router-view>
    <router-view name="school-random"></router-view>
    <router-view name="home-lessons"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.el-header {
  padding: 0 9%;
}
.el-main {
  padding: 20px 9%;

  position: relative;
}

.el-footer {
  width: 100%;
  padding: 50px 9% 0;
  background-color: #333;
}
</style>
