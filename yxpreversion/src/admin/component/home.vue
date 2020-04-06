<template>
  <div id="admin">
    <el-container>
      <el-aside width="210px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          
          background-color="#304156"
          text-color="#eee"
          active-text-color="#fff"
          
        >
          
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ['nav'],
  data() {
    return {
      navs: [
        {
          name: "入驻申请",
          id: "apply",
          children: [
            {
              name: "学校申请",
              id: "apply_school"
            },
            {
              name: '教师申请',
              id: 'apply_teacher',
            },
            {
              name: '学生申请',
              id: 'apply_student',
            }
          ]
        },
        {
          name: "学校管理",
          id: "manage_school",
          
        },
        {
          name: "教师管理",
          id: "manage_teacher",
          
        },
        {
          name: "学生管理",
          id: "manage_student",
          
        },
        {
          name: "课程管理",
          id: "manage_course",
          children: [
            {
              name: "课程申请",
              id: "apply",
            },
            {
              name: '课程审核',
              id: 'audit',
            },
            {
              name: '课程上线',
              id: 'online',
            },
            {
              name: '课程更新',
              id: 'update',
            }
          ]
        },
        {
          name: "文章管理",
          id: "manage_article",
          
        },
        {
          name: "讨论帖管理",
          id: "manage_post",
          
        },
        {
          name: "道具管理",
          id: "manage_props",
          
        },

      ],
      
    };
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/home.scss";
</style>