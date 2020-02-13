<template>
    <div @click="getCurrentComponentInfo" title="点击获取信息">
        <h2>个人档案</h2>
        <div>
            <p>姓名：{{ $route.query.name }}</p>
            <p>年龄：{{ $route.query.age }}</p>
            <p>描述：{{ $route.query.desperation }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    created() {
        console.log("Profile is create")
        console.log(this.$route.query)
    },
    destroyed() {
        console.log("Profile is destroy")
    },
    methods: {
        getCurrentComponentInfo() {
            // $route：表示当前组件
            console.log(this.$route)
            // $router：表示项目中的router组件（即router/index.js）中的文件
            console.log(this.$router)
        }
    },
}
</script>