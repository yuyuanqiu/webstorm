<template>
  <div id="app">
    <router-link to="/homemy">首页</router-link>
    <router-link :to="'/user/' + userID">用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: 'xia', age: 23, desperation: '我是嘻嘻嘻' }}">档案</router-link>
    <router-link to="/aboutmy">关于</router-link> 

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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
