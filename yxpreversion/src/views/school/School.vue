<template>
  <div id="school">
    <router-view name="school-title"></router-view>
    <router-view name="school-course"></router-view>
    <router-view name="school-teacher"></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/school/School.scss';


</style>