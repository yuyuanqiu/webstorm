<template>
  <div id="course-audit">
    <h2>本校全部待审核课程：{{ this.courses.length }}</h2>
    <div class="course-audit-list">
      <el-table
        :header-cell-style="{    background: '#03A9F4', color: 'white'}"
        :data="courses"
        height="565"
        style="width: 100%"
        highlight-current-row
        :default-sort="{prop: 'apply_date', order: 'ascending'}"
      >
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="课程名称">
                <span>{{ scope.row.name }}</span>
              </el-form-item>
              <el-form-item label="课程编号">
                <span>{{ scope.row.id }}</span>
              </el-form-item>
              <el-form-item label="课程一级类目">
                <span>{{ scope.row.top_level }}</span>
              </el-form-item>
              <el-form-item label="课程二级类目">
                <span>{{ scope.row.second_level }}</span>
              </el-form-item>
              <el-form-item label="课程简述">
                <span>{{ scope.row.des }}</span>
              </el-form-item>
              <el-form-item label="课程当前状态">
                <span>{{ scope.row.current_status.value }}</span>
              </el-form-item>
              <el-form-item label="申请日期">
                <span>{{ scope.row.apply_date }}</span>
              </el-form-item>
              <el-form-item label="申请教师">
                <span>{{ scope.row.applyer }}</span>
              </el-form-item>
              <el-form-item label="修改课程状态" required>
                <el-select v-model="scope.row.current_status.value" placeholder="请选择">
                  <el-option
                    v-for="status in scope.row.status"
                    :key="status.value"
                    :label="status.value"
                    :value="status.value"
                    :disabled="status.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="scope.row.current_status.value === '审核未通过'" label="修改意见" required>
                <el-input placeholder="请输入内容" v-model="scope.row.comment" class="input-with-select">
                  <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                </el-input>
              </el-form-item>

              <el-form-item label="提交">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, courses)"
                  type="text"
                  size="medium"
                >提交更改</el-button>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column type="index" width="100">
          <template slot="header">总计：{{ this.courses.length }}</template>
        </el-table-column>

        <el-table-column prop="apply_date" label="申请日期" :sortable="true" sort-by="apply_date">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.apply_date }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="id" label="课程编号" :sortable="true" sort-by="id"></el-table-column>

        <el-table-column prop="name" label="课程名称" sort-by="name" :sortable="true"></el-table-column>

        <!-- <el-table-column label="课程类目">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.top_level }}</el-tag>
            <el-tag size="medium">{{ scope.row.second_level }}</el-tag>
          </template>
        </el-table-column>-->

        <el-table-column prop="applyer" label="申请教师" :sortable="true">
          <template slot-scope="scope" sort-by="applyer">
            <span>{{scope.row.applyer }}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="课程简介" width="100">
          <template slot-scope="scope">
            <el-popover
              placement="bottom"
              title="课程简介"
              width="200"
              trigger="hover"
              :content="scope.row.des"
            >
              <el-button size="small" slot="reference">点击查看</el-button>
            </el-popover>

          </template>
        </el-table-column>-->

        <!-- <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <el-select v-model="scope.row.current_status" placeholder="请更改课程状态">
              <el-option v-for="item in scope.row.status" :key="item" :label="item" :value="item"></el-option>  
            </el-select>
            <el-button v-if="scope.row.current_status == '审核未通过'" type="text" @click="open">请输入审核意见</el-button>
          </template>
        </el-table-column>-->
      </el-table>
    </div>
  </div>
</template>




<script>

import {autoCreatedCourse} from 'admin/common.js'

export default {
  data() {
    return {
      courses: [
        {
          id: 212121,
          name: "计算机网络",
          status: "待审核",
          top_level: "计算机",
          second_level: "信息科学与技术",
          bg_url: "",
          des: "哈哈哈",
          applyer: "yuyuan",
          apply_date: "2020-01-01",
          current_status: "待审核",
          status: [
            {
              value: "申请",
              comment: "",
              disabled: false
            },
            {
              value: "审核通过",
              comment: "",
              disabled: false
            },
            {
              value: "待审核",
              comment: "",
              disabled: false
            },
            {
              value: "审核未通过",
              comment: "",
              disabled: false
            }
          ],
          comment: ""
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.courses = autoCreatedCourse(100);
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
@import "admin/scss/component/CourseAudit.scss";
</style>