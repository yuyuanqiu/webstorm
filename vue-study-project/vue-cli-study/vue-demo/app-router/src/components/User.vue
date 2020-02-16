<template>
    <div @click="getCurrent">
        <!-- 获取当前路由的信息  $route.params -->
        <h2>用户：{{ userID }}</h2>
        <p>哈哈哈</p>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: ["userID"],
    created() {
        console.log("User is create")
    },
    destroyed() {
        console.log("User is destroy")
    },
    methods: {
        getCurrent(){
            console.log(this.$route)
        }
    },
}

</script>