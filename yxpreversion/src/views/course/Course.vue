<template>
  <div id="course">
    <router-view name="course-player"></router-view>
    <div class="course-footer">
      <router-view name='course-discuss'></router-view>
      <router-view name="course-homework"></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>