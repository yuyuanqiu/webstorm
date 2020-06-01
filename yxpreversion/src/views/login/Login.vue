<template>
  <div id="login">
    <div class="login-inner">
      <el-row type="flex" class="row-bg">
        <el-col :span="12">
          <div class="outer-welcome">
            <div class="l-welcome">
              <h2 class="l-zh">欢迎来到予思课程</h2>
              <h2 class="l-us">
                <span>Welcome to MissCourse</span>
              </h2>
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
                    <p>查看课程最新资料</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="l-l-login">
            <div class="l-login">
              <h3 v-if="stat === 'login'">登录</h3>
              <h3 v-if="stat === 'register'">注册</h3>
              <el-form :model="login" :label-position="left" v-if="login.role == 'student'">
                <el-form-item v-if="stat === 'register'" label="学校">
                  <el-input type="school" v-model="login.school" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="专业" v-if="stat === 'register'">
                  <el-input v-model="login.major" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                  <el-input type="number" v-model="login.number" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="姓名" v-if="stat === 'register'">
                  <el-input v-model="login.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" v-if="stat === 'register'">
                  <el-input v-model="login.sex" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="login.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                  <el-radio-group v-model="login.role" text-color="#000" fill="#fff">
                    <el-radio-button label="student">学生</el-radio-button>
                    <el-radio-button label="teacher">教师</el-radio-button>
                    <el-radio-button label="admin">管理员</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="l-lo-login">
                  <el-button @click="logins" v-if="stat === 'login'" type="primary" plain>登录</el-button>
                  <el-button v-if="stat === 'register'" type="primary" plain>注册</el-button>

                  <el-link
                    v-if="stat === 'login'"
                    class="qiehuan"
                    @click="qiehuan"
                    :underline="false"
                  >没有账号？点击这里注册</el-link>
                  <el-link v-else class="qiehuan" @click="qiehuan" :underline="false">已有账号？点击这里登录</el-link>
                </el-form-item>
              </el-form>
              <el-form :model="login" :label-position="left" v-else-if="login.role == 'teacher'">
                <el-form-item v-if="stat === 'register'" label="学校">
                  <el-input type="school" v-model="login.school" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学院" v-if="stat === 'register'">
                  <el-input v-model="login.major" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                  <el-input type="number" v-model="login.number" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="姓名" v-if="stat === 'register'">
                  <el-input v-model="login.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" v-if="stat === 'register'">
                  <el-input v-model="login.sex" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="login.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                  <el-radio-group v-model="login.role" text-color="#000" fill="#fff">
                    <el-radio-button label="student">学生</el-radio-button>
                    <el-radio-button label="teacher">教师</el-radio-button>
                    <el-radio-button label="admin">管理员</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="l-lo-login">
                  <el-button @click="logins" v-if="stat === 'login'" type="primary" plain>登录</el-button>
                  <el-button v-if="stat === 'register'" type="primary" plain>注册</el-button>

                  <el-link
                    v-if="stat === 'login'"
                    class="qiehuan"
                    @click="qiehuan"
                    :underline="false"
                  >没有账号？点击这里注册</el-link>
                  <el-link v-else class="qiehuan" @click="qiehuan" :underline="false">已有账号？点击这里登录</el-link>
                </el-form-item>
              </el-form>
              <el-form :model="login" :label-position="left" v-else>
                <el-form-item v-if="stat === 'register'" label="学校">
                  <el-input type="school" v-model="login.school" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                  <el-input type="number" v-model="login.number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="login.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                  <el-radio-group v-model="login.role" text-color="#000" fill="#fff">
                    <el-radio-button label="student">学生</el-radio-button>
                    <el-radio-button label="teacher">教师</el-radio-button>
                    <el-radio-button label="admin">管理员</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="l-lo-login">
                  <el-button @click="logins" v-if="stat === 'login'" type="primary" plain>登录</el-button>
                  <el-button v-if="stat === 'register'" type="primary" plain>注册</el-button>

                  <el-link
                    v-if="stat === 'login'"
                    class="qiehuan"
                    @click="qiehuan"
                    :underline="false"
                  >没有账号？点击这里注册</el-link>
                  <el-link v-else class="qiehuan" @click="qiehuan" :underline="false">已有账号？点击这里登录</el-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    // console.log(to, from, "to  from");

    localStorage.setItem("from_path", from.path);
    next();
  },
  data() {
    return {
      stat: "login",
      left: "left",
      login: {
        school: "",
        number: "",
        name: "",
        pass: "",
        role: "student",
        major: "",
        sex: ""
      }
    };
  },
  methods: {
    logins() {
      let url = "http://localhost:20020/get_user/user_info";

      console.log(this.$route, "route", this.login);

      axios
        .post(url, this.login)
        .then(res => {
          console.log(res, "data");

          if (res.data.length == 0) {
            this.$message({
              type: "error",
              message: "登录失败，请重试"
            });
          } else {
            let role = res.data[0].role;
            this.$store.commit("set_user_info", { user_info: res.data[0] });
            localStorage.setItem("role", role);
            localStorage.setItem("_id", res.data[0]._id);
            localStorage.setItem("avatar", res.data[0].avatar);

            localStorage.setItem("class_name", res.data[0].class_name);
            localStorage.setItem("id", res.data[0].id);
            localStorage.setItem("school_id", res.data[0].school_id);
            localStorage.setItem("student_age", res.data[0].student_age);
            localStorage.setItem("student_name", res.data[0].student_name);
            localStorage.setItem("teacher_name", res.data[0].teacher_name);
            localStorage.setItem("student_point", res.data[0].student_point);

            localStorage.setItem("is_login", true);
            this.$store.commit("set_is_login", true);

            console.log(this.$store.state.user_info, "sss");
            if (role === "student") {
              this.$router.push(localStorage.getItem("from_path"));
            } else {
              this.$router.push({ name: "admin-home" });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
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