<template>
  <div class="chacao">
    <ul>
      <li v-for="data in list_data" :key="data">
        <slot :data="data">
          {{ data.b }}
          </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list_data'],
  name: "cha-cao",
  data() {
    return {
      list_data: {
        one: {
          a: true,
          b: 1
        },
        second: {
          a: false,
          b: 2
        },
        three: {
          a: false,
          b: 3
        }
      }
    };
  }
};
</script>

<style>
</style>