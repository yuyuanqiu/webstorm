<template>
  <container-flex :datalist="datalist">
    <template v-slot="{ data }">
      <div>
        {{ data.b }}
      </div>
    </template>
  </container-flex>
</template>

<script>
import ContainerFlex from "components/common/ContainerFlex";

export default {
  components: {
    ContainerFlex
  },
  data() {
    return {
      datalist: {
        one: {
          a: true,
          b: 11
        },
        second: {
          a: false,
          b: 22
        },
        three: {
          a: false,
          b: 33
        }
      }
    };
  }
};
</script>

<style>
</style>