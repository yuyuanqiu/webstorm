<template>
  <div id="course-audit">
    <h2>本校全部待审核课程</h2>
    <div class="course-audit-list">
      <el-table :data="courses" style="width: 100%" highlight-current-row>
        <el-table-column type="index" width="50"></el-table-column>

        <el-table-column label="申请日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.apply_date }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="id" label="课程编号"></el-table-column>

        <el-table-column prop="name" label="课程名称"></el-table-column>

        <el-table-column label="课程类目">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.top_level }}</el-tag>
            <el-tag size="medium">{{ scope.row.second_level }}</el-tag>
          </template>
        </el-table-column>

        
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 212121,
          name: "计算机网络",
          status: "待审核",
          top_level: "计算机",
          second_level: '信息科学与技术',
          bg_url: "",
          des: "哈哈哈",
          applyer: "yuyuan",
          apply_date: "2020-01-01",

          address: "上海市普陀区金沙江路 1518 弄"
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
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/CourseAudit.scss";
</style>