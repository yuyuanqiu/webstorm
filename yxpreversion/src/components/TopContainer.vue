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
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <div class="t-c-o-cate">
                  <span
                    @click="toPath('/specialcourse/' + cate.first_level)"
                    v-for="cate in home_category"
                    :key="cate.id"
                  >{{ cate.first_level }}</span>
                </div>
                <el-button slot="reference" @click="test">课程分类</el-button>
              </el-popover>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="toPath('/specialcourse/示范课程')">
            <el-button>示范课程</el-button>
          </el-menu-item>
          <el-menu-item index="3" @click="toPath('/schools')">
            <el-button>入驻高校</el-button>
          </el-menu-item>
          <el-menu-item index="4" @click="toPath('/articleall/ls')">
            <el-button>论坛</el-button>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="top-search">
        <el-autocomplete
          v-model="state"
          placeholder="搜索精品课程"
          :fetch-suggestions="querySearchAsync"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
          <template slot-scope="{ item }">
            <!-- <div class="name">{{ item._id }}</div> -->
            <div  @click="toPath( '/lessoninfo/' + item._id)">
              <span class="o-search_t">{{ item.course_name }}</span>
              <span class="o-search_t">{{ item.teacher.teacher_name }}</span>
            </div>
          </template>
        </el-autocomplete>
      </div>

      <div class="top-login-reg">
        <!-- 判断if时必须把所有条件列出来比较，不可直接置空，不然无效 -->
        <div class="t-l-opt" v-if="!user_info">
          <el-link :underline="false" @click="toPath('/login')">登录</el-link>
          <span class="split">|</span>
          <el-link :underline="false" @click="toPath('/login')">注册</el-link>
        </div>
        <el-link class="t-l-my" v-else :underline="false">
          <div class="t-l-my--inner" @click="toPath('/student/ls')">
            <div>个人中心</div>
            <el-dropdown>
              <span class="el-dropdown-link">
                <div>
                  <el-avatar
                    :title="bg"
                    :src="'http://localhost:20020/' + this.$store.state.user_info.avatar"
                  ></el-avatar>
                </div>
                <i class></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>
                  <span @click="toPath('/shop/ls')">积分商城</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span @click="toPath('/admin')">后台</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span @click="exit">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    user_info() {
      return this.$store.state.is_login;
    },
    bg() {
      return (
        "http://localhost:20020/static/images/avatar/" +
        this.$store.state.user_info.avatar
      );
    }
  },
  name: "top-container",
  data() {
    return {
      state: "",
      isLogin: "no",
      home_category: [],
      search_course_all: [],
      timeout: null
    };
  },
  methods: {
   
    // 远程搜索
    querySearchAsync(queryString, cb) {
      var restaurants = this.search_course_all;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : [];

      // console.log(results);

      if (results.length > 0) {
        cb(results);
      }
    },
    createStateFilter(queryString) {
      return state => {
        // console.log(state)
        return (
          state.course_name.toLowerCase().indexOf(queryString.toLowerCase()) !=
            -1 ||
          state.teacher.teacher_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) != -1
        );
      };
    },
    handleSelect(item) {
      // console.log(item, "item");
    },
    toPath(path) {
      this.$router.push({ path: path });
    },
    test() {},
    exit() {
      this.$store.commit("set_is_login", false);

      if (this.$store.state.user_info.role == "teacher") {
        this.$router.push({ name: "login" });
      }
      localStorage.clear();
    }
  },
  created() {
    let url = "http://localhost:20020/get_user/home_categories";

    axios.get(url).then(res => {
      this.home_category = res.data;
    });

    let url_search = "http://localhost:20020/course/for_search";

    axios.get(url_search).then(res => {
      this.search_course_all = res.data;
      // console.log(this.search_course_all);
    });
    if (
      localStorage.getItem("role") &&
      localStorage.getItem("role").length > 0
    ) {
      axios
        .post("http://localhost:20020/get_user/user_infos", {
          role: localStorage.getItem("role"),
          _id: localStorage.getItem("_id")
        })
        .then(res => {
          // console.log(res.data, "rsda");
        });
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/TopContainer.scss";
</style>
