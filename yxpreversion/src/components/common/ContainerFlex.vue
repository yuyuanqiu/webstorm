<template>
  <div  class="container-flex">
    <el-row type="flex" justify="space-between" class="container-flex-row">
      <!-- 注意：在使用该组件时，slot插槽传值的数据也必须定义为data才能生效 -->
      <el-col class="container-flex-row-col" v-for="data in datalist" :key="data.id">
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