<template>
  <div id="home">
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
@import "assets/css/home/Home.scss";
</style>
