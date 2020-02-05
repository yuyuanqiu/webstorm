
// 使用预处理器
<template lang="jade">
div
    <p>{{ greeting }} world!</p>
    other-component
</template>

<script>
import OtherComponent from './01单文件组件hello'
module.exports = {
    data() {
        return {
            greeting: 'hello'
        }
    },
    components: {
        OtherComponent
    }
}
</script>

<style lang="stylus" scoped>
p
    font-size 2em
    text-align  center
</style>