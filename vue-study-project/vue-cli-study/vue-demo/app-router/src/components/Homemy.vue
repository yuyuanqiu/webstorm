<template>
  <div class="homes">
    <div class="homes nav">
      <h2>首页</h2>
      <p>内容区域</p>

      <router-link to="/homemy/news">新闻</router-link>
      <span>|</span>
      <router-link to="/homemy/reports">报道</router-link>
      <router-view></router-view>
    </div>

    <!-- 使用嵌套命名视图 -->

    <router-view class="homes news" name="news"></router-view>
    <router-view class="homes reports" name="reports"></router-view>
  </div>
</template>

<script>
export default {
  name: "Homemy",
  data() {
      return {
        //   path: '',
          thiss: this,
      }
  },
  created() {
    console.log("homemy is create");
  },
  destroyed() {
    console.log("homemy is destroy");
  },
  // 使用路由导航守卫配合keep-alive去保持组件的状态
  // 只有当使用了keep-alive时actived和deactivated才有效
  // 在路由离开之前赋值当前路由path给上级路由
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    console.log("路由离开之前：", this.thiss)
    next();
  },
  // 当路由组件激活时，返回离开时保存的路由path
  activated() {
      console.log("当前激活的路径：", this)
    this.$router.push(this.path).catch(e => e);
  }
};
</script>

<style scoped>
/* span {
  margin: 0 20px;
} */

/* .homes {
    display: flex;
  flex-direction: column-reverse;

}

.nav {
    content: 2;
}

.news,
.reports {
    content: 1;
} */
</style>
