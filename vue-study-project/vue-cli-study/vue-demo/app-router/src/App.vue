<template>
  <div id="app">
    <!-- <router-link to="/homemy">首页</router-link>
    <router-link :to="'/user/' + userID">用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: 'xia', age: 23, desperation: '我是嘻嘻嘻' }}">档案</router-link>
    <router-link to="/aboutmy">关于</router-link> 
    <button @click="tiaozhuan">jf</button> -->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      userID: Math.floor(Math.random() * 100000000),
      query: { name: 'xia', age: 23, desperation: '我是嘻嘻嘻' }
    }
  },
  components: {
  },
  methods: {
    // 编程式导航，在一个元素中调用一个方法
    // 定义方法时使用this.$router.push({name: 'xxx'})
    // 然后在路由rules规则中为跳转的路由定义name即可
    tiaozhuan(){
      this.$router.push({
        name: 'user'
      })
    }
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
