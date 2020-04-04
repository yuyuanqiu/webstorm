<template>
  <el-table
    :data="courseApplyInfo"
    style="width: 100%">
    <el-table-column v-for="course in courseApplyInfo" :key="course"
      label="course.title"
      width="210">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.titleName }}</span>
      </template>
    </el-table-column>
    <el-table-column label="审核处理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="success(scope.$index, scope.row)">通过审核</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="failed(scope.$index, scope.row)">退回</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
methods: {
  success(index, row) {
    console.log(index, row);
  },
  failed(index, row) {
    console.log(index, row);
  }
}
</script> 