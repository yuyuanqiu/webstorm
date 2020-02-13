<template>
  <div class="comp">
    <h1>这个vue组件</h1>
    <child/>
  </div>
</template>

<script>

import child from "./child";

export default {
  name: 'app',
  components: {
    child,
  },
  data() {
    return {
      message: '这是vue组件',
    }
  },
  methods: {
    
  },

}
</script>

<style scoped>
  .comp {
    font-size: 56px;
  }
</style>