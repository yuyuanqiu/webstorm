<template>
  <div>
    <my-solot>
      <template v-slot:s1>
        <h1>这是s1插槽
        </h1>
      </template>

      <div slot="s">

        <h1>
          这是s3插槽
        </h1>
      </div>
    </my-solot>
  </div>
</template>

<script>

import MySolot from './slot'

export default {
  components: {
    MySolot
  }

}
</script>

<style>

</style>