<template>
  <div class="top-container-out">
    <div class="top-container">
      <div class="top-logo">
        <a href="/">
          <img src="~public/logo_black.png" />
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
          <el-menu-item index="1">
            <template slot="title">
              <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <el-button slot="reference">课程分类</el-button>
              </el-popover>
            </template>
            
          </el-menu-item>
          <el-menu-item index="2">
            <el-button>示范课程</el-button>
          </el-menu-item>
          <el-menu-item index="3">
            <el-button>入驻高校</el-button>
          </el-menu-item>
          <el-menu-item index="4">
            <el-button>积分商城</el-button>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="top-search">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="搜索精品课程"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-autocomplete>
      </div>

      <div class="top-login-reg">
        <div class="t-l-opt" v-if="status === 'unlogin'">
          <a @click="dialogVisible = true">登录</a>
          <span class="split">|</span>
          <a href="#">注册</a>
        </div>
        <div class="t-l-my" v-else>
          <el-link>个人中心</el-link>
          <el-dropdown>
            <span class="el-dropdown-link">
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-container",
  data() {
    return {
      status: "login"
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/TopContainer.scss";
</style>
