<template>
  <div  class="container-flex">
    <el-row type="flex" justify="space-between"  class="container-flex-row">
      <el-col class="container-flex-row-col" v-for="data in datalist" :key="data">
        <slot :data="data">
        </slot>
      </el-col>
    </el-row>

  </div>
</template>


<script>

/**
 * 元素包裹模块：现在主要作用是用来包括课程卡片
 */

export default {
  props: ['datalist'],
  name: 'container-flex',


}
</script>

<style lang="scss">
@import 'assets/css/common/ContainerFlex.scss';
</style>