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
        :default-sort="{prop: 'course.apply_date', order: 'descending'}"
      >
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="课程名称">
                <span>{{ scope.row.course.course_name }}</span>
              </el-form-item>
              <el-form-item label="课程编号">
                <span>{{ scope.row.course.id }}</span>
              </el-form-item>
              <el-form-item label="课程一级类目">
                <span>{{ scope.row.course.course_first }}</span>
              </el-form-item>
              <el-form-item label="课程二级类目">
                <span>{{ scope.row.course.course_second }}</span>
              </el-form-item>
              <el-form-item label="课程简述">
                <span>{{ scope.row.course.course_des }}</span>
              </el-form-item>
              <el-form-item label="课程当前状态">
                <span>{{ scope.row.course.apply_status }}</span>
              </el-form-item>
              <el-form-item label="申请日期">
                <span>{{ scope.row.course.apply_date }}</span>
              </el-form-item>
              <el-form-item label="申请教师">
                <span>{{ scope.row.teacher_name }}</span>
              </el-form-item>
              <el-form-item label="审核课程状态" required>
                <el-select v-model="scope.row.course.apply_status" placeholder="请选择">
                  <el-option
                    v-for="status in statuss"
                    :key="status.value"
                    :label="status.value"
                    :value="status.value"
                    :disabled="status.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="scope.row.course.apply_status  === '审核未通过'" label="审批意见" required>
                <el-input placeholder="请输入内容" v-model="scope.row.course.apply_comment" class="input-with-select">
                  <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                </el-input>
              </el-form-item>

              <el-form-item label="提交">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, scope.row)"
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

        <el-table-column
          prop="course.apply_date"
          label="申请日期"
          :sortable="true"
          sort-by="course.apply_date"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.course.apply_date }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="course.id" label="课程编号" :sortable="true" sort-by="id"></el-table-column>

        <el-table-column prop="course.course_name" label="课程名称" sort-by="name" :sortable="true"></el-table-column>

        <!-- <el-table-column label="课程类目">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.top_level }}</el-tag>
            <el-tag size="medium">{{ scope.row.second_level }}</el-tag>
          </template>
        </el-table-column>-->

        <el-table-column prop="teacher_name" label="申请教师" :sortable="true">
          <template slot-scope="scope" sort-by="teacher_name">
            <span>{{scope.row.teacher_name }}</span>
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
// import {autoCreatedCourse} from 'admin/common.js'
import axios from "axios";

export default {
  created() {
    let url = "http://localhost:20020/course/course_audits";

    axios
      .post(url, {
        school_id: localStorage.getItem("school_id")
      })
      .then(res => {
        console.log(res.data);
        this.courses = res.data;
      });
  },
  data() {
    return {
      statuss: [
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
      courses: [
        {
          course: {}
        }
      ]
    };
  },

  methods: {

    deleteRow(index, course) {
      console.log(index, course, "rows");
      

      let indexs = 0;

      for(let i = 0; i < this.courses.length; i++) {
        if(this.courses[i] == course) {
          indexs = i;
          this.courses.splice(indexs, 1);
        }
      }

      let url = "http://localhost:20020/course/course_audit_submit";

      axios.post(url, {
        _id: course.course.course_id,
        apply_status: course.course.apply_status,
        apply_comment: course.course.apply_comment,
      }).then(res => {
        console.log(res);
      })
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