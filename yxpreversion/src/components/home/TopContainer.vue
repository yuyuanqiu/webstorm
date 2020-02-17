<template>
  <div class="top-container-out">
    <div class="top-container">
      <div class="top-logo">
        <a href="/">
          <img src="~public/logo.png" />
        </a>
      </div>
      <div class="top-nav">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#000000"
          @select="handleSelect"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">课程分类</el-menu-item>
          <el-submenu index="2">
            <template slot="title">精品课程</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">学校</el-menu-item>
          <el-menu-item index="4">论坛</el-menu-item>
        </el-menu>
      </div>

      <div class="top-search">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-autocomplete>
      </div>

      <div class="top-login-reg">
        <div>
          <a @click="dialogVisible = true">登录</a>
          <span class="split">|</span>
          <a href="#">注册</a>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-container",
  
};
</script>

<style lang="scss">
@import "assets/css/TopContainer.scss";
</style>
