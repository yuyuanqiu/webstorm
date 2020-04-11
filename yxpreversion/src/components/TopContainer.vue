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
          class="el-menu-demo"
          mode="horizontal"
          text-color="#000000"
          active-text-color="#03A9F4"
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
          <el-menu-item index="2" @click="toPath('/specialcourse/ls')">
            <el-button>示范课程</el-button>
          </el-menu-item>
          <el-menu-item index="3" @click="toPath('/schools')">
            <el-button>入驻高校</el-button>
          </el-menu-item>
          <el-menu-item index="4"  @click="toPath('/articleall/ls')">
            <el-button>论坛</el-button>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="top-search">
        <el-autocomplete
          v-model="state"
          placeholder="搜索精品课程"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-autocomplete>
      </div>

      <div class="top-login-reg">
        <div class="t-l-opt" v-if="isLogin === 'no'">
          <el-link :underline="false" @click="toPath('/login')">登录</el-link>
          <span class="split">|</span>
          <el-link :underline="false" @click="toPath('/login')">注册</el-link>
        </div>
        <el-link class="t-l-my" v-else-if="isLogin === 'yes'"  :underline="false">
          <div class="t-l-my--inner"  @click="toPath('/student/ls')">
            <div>个人中心</div>
            <el-dropdown>
              <span class="el-dropdown-link">
                <div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>
                </div>
                <i class=""></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>
                  <span  @click="toPath('/shop/ls')">积分商城</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span  @click="toPath('/admin')">后台</span>
                </el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-container",
  data() {
    return {
      state: '',
      isLogin: "yes"
    };
  },
  methods: {
    toPath(path) {
      this.$router.push({ path: path})
    },
    
  },
  
};
</script>

<style lang="scss">
@import "assets/css/TopContainer.scss";
</style>
