<template>
  <div id="admin">
    <el-container>
      <el-aside width="210px">
        <h1 @click="toPathss({id: 'admin', name: '首页'})"></h1>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409eff"
        >
          <!-- 
            index必须使用v-bind，并且是唯一值
          -->
          <template v-for="nav in navs">
            <el-submenu :index="nav.id" :key="nav.id" v-if="nav.children">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ nav.name }}</span>
              </template>
              <el-menu-item
                :index="subnav.id"
                v-for="subnav in nav.children"
                :key="subnav.id"
                @click="toPathss(subnav)"
              >{{ subnav.name }}</el-menu-item>
            </el-submenu>

            <el-menu-item :index="nav.id" :key="nav.id" v-else @click="toPathss(nav)">
              <i class="el-icon-setting"></i>
              <span slot="title">{{ nav.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="el-header-content">

            <el-page-header :content="header_nav"></el-page-header>
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                shape="square"
                :size="40"
                :src="src"
              ></el-avatar>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="24px">
          <div>
          <small>©2020 嘉狩予思教育有限公司出品</small>

          </div>
        </el-footer>
      </el-container>
    </el-container>
    <back-top />
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      src: require('assets/img/people-icon/user_avator.png'),

      header_nav: '首页',
      navs: [
        {
          name: "首页",
          id: "admin",
          auth: ["root", 'teacher', 'school']
        },
        {
          name: "入驻申请",
          auth: ["root"],
          id: "apply",
          children: [
            {
              name: "学校申请",
              id: "apply_school"
            },
            {
              name: "教师申请",
              id: "apply_teacher"
            },
            {
              name: "学生申请",
              id: "apply_student"
            }
          ]
        },
        {
          name: "学校管理",
          id: "manage_school",
          auth: ["root"]
        },
        {
          name: "教师管理",
          id: "manage_teacher",
          auth: ["school"]
        },
        {
          name: "学生管理",
          id: "manage_student",
          auth: ["school", "teacher"]
        },
        {
          name: "课程管理",
          id: "manage_course",
          auth: ["school", "teacher"],
          children: [
            {
              name: "课程申请",
              id: "course_apply",
              auth: ["teacher"]
            },
            {
              name: "课程审核",
              id: "course_audit",
              auth: ["teacher"]
            },
            {
              name: "课程状态",
              id: "course_online",
              auth: ["teacher", "school", "root"]
            },
            {
              name: "课程更新",
              id: "course_update",
              auth: ["teacher"]
            }
          ]
        },
        {
          name: "文章管理",
          id: "manage_article",
          auth: ["root", "teacher", "school"]
        },
        {
          name: "讨论帖管理",
          id: "manage_post",
          auth: ["root", "teacher", "school"]
        },
        {
          name: "道具管理",
          id: "manage_props",
          auth: ["root", "school"]
        }
      ]
    };
  },
  methods: {
    toPathss(path) {

      // push时应该使用name参数，而不是path参数，否则会有意想不到的后果
      this.$router.push({name: path.id});

      this.header_nav = path.name
    }
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/home.scss";
</style>