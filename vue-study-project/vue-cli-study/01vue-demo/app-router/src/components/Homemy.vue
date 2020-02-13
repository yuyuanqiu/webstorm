<template>
    <div>
        <h2>首页</h2>
        <p>内容区域</p>
        <router-link to="/homemy/news">新闻</router-link>
        <span>|</span>
        <router-link to="/homemy/reports">报道</router-link>
        <router-view></router-view>
        
    </div>
</template>

<script>
export default {
    name: 'Homemy',
    created() {
        console.log("homemy is create")
    },
    destroyed() {
        console.log("homemy is destroy")
    },
    // 使用路由导航守卫配合keep-alive去保持组件的状态
    // 只有当使用了keep-alive时actived和deactivated才有效
    // 在路由离开之前赋值当前路由path给上级路由
    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path
        next()
    },
    // 当路由组件激活时，返回离开时保存的路由path
    activated() {
        this.$router.push(this.path).catch(e => e);
    },
}
</script>

<style scoped>
    span {
        margin: 0 20px;
    }
</style>
