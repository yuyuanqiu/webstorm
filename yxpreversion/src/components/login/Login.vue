<template>
  <div id="login">
    <div class="login-inner">
      <el-row type="flex" class="row-bg">
        <el-col :span="12">
          <div class="l-welcome">
            <h2 class="l-zh">欢迎来到予思课程</h2>
            <h2 class="l-us">Welcome to MissCourse</h2>
            <div class="l-info">
              <div class="l-info-1">
                <i class="el-icon-s-opportunity"></i>
                <div>
                  <p>灵活自由</p>
                  <p>无时无刻享受精品课程</p>
                </div>
              </div>
              <div class="l-info-1">
                <i class="el-icon-s-data"></i>
                <div>
                  <p>随时交流</p>
                  <p>无时无刻与老师同学讨论学习</p>
                </div>
              </div>
              <div class="l-info-1">
                <i class="el-icon-s-flag"></i>
                <div>
                  <p>实时更新</p>
                  <p>下载课程最新资料</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="l-login">
            <h3 v-if="stat === 'login'">登录</h3>
            <h3 v-if="stat === 'register'">注册</h3>
            <el-form :model="login" :label-position="left">
              <el-form-item v-if="stat === 'register'" label="学校">
                <el-input type="school" v-model="login.school" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学号">
                <el-input type="number" v-model="login.number" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="login.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item class="l-lo-login">
                <el-button v-if="stat === 'login'" type="primary" plain>登录</el-button>
                <el-button v-if="stat === 'register'" type="primary" plain>注册</el-button>

                <el-link v-if="stat === 'login'" class="qiehuan" @click="qiehuan">没有账号？请点击注册</el-link>
                <el-link v-else class="qiehuan" @click="qiehuan">已有账号？请点击登录</el-link>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stat: "register",
      left: "left",
      login: {
        school: "",
        number: "",
        pass: ""
      }
    };
  },
  methods: {
    qiehuan() {
      if (this.stat === "login") {
        this.stat = "register";
      } else {
        this.stat = "login";
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/login/Login.scss";
</style>