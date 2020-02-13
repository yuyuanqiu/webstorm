<template>
  <div class="child">
    <h2>我是child组件，我发生了更新</h2>
    <p>{{ nowDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'child',
  data() {
    return {
      nowDate: new Date(),
    }
  },
}
</script>

<style lang="less" scoped>
  @bgColor: #fff;
  .child {
    background: @bgColor;
  }
</style>