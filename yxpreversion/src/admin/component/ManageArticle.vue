<template>
  <div id="manage-article">
    <h2>文章列表：{{ this.courses.length }}</h2>
    <div class="course-audit-list">
      <el-table
        :header-cell-style="{    background: '#03A9F4', color: 'white'}"
        :data="courses"
        height="565"
        style="width: 100%"
        highlight-current-row
        :default-sort="{prop: 'apply_date', order: 'ascending'}"
      >
        <el-table-column align="center" type="index" width="100">
          <template slot="header">总计：{{ this.courses.length }}</template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="apply_date"
          label="发布日期"
          :sortable="true"
          sort-by="apply_date"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" prop="id" label="文章标识" :sortable="true" sort-by="id"></el-table-column>

        <el-table-column align="center" prop="title" label="文章标题" sort-by="title" :sortable="true"></el-table-column>

        <el-table-column
          align="center"
          prop="content"
          label="文章内容"
          sort-by="content"
          :sortable="true"
        >
          <template slot-scope="scope" sort-by="content">
            <span>类型：{{typeof scope.row.content}}</span>
          </template>
        </el-table-column>

        <el-table-column type="expand">
          <template slot-scope="scope" sort-by="content">
            <span>{{scope.row.content }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" prop="name" label="发布者" :sortable="true">
          <template slot-scope="scope" sort-by="name">
            <span>{{scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>




<script>
import { autoCreatedCourse } from "admin/common.js";

import axios from "axios";

import {
  applyers,
  article_title,
  setDate,
  article_content
} from "admin/common.js";

export default {
  data() {
    return {
      courses: []
    };
  },
  created() {
    let backend_data = null;
    

    for (let i = 0; i < 256; i++) {
      let course = {};
      course.date = setDate();
      course.id = Math.floor((Math.random() + 1) * 1000000000);
      course.title =
        article_title[Math.floor(Math.random() * article_title.length)];
      course.name = applyers[Math.floor(Math.random() * applyers.length)];
      // course.content =
      //   article_content[Math.floor(Math.random() * article_content.length)];

      new Promise((resolve, reject) => {
        axios.get("http://localhost:20020/users/a").then(res => {
      // console.log(res);  
      backend_data = res.data;
      course.content = backend_data[Math.floor(Math.random() * backend_data.length)].content;

    });
      })
      

      this.courses.push(course);
      console.log(this.courses)
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    sortDate(a, b) {
      return a.apply_date - b.apply_date;
    },
    sortId(a, b) {
      return a.id - b.id;
    },
    sortName(a, b) {
      return a.name - b.name;
    },
    sortApplyer(a, b) {
      return a.applyer - b.applyer;
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    open() {
      this.$prompt("请输入审核不通过原因", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "审核意见: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/ManageArticle.scss";
</style>



