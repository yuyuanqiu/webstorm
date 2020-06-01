<template>
  <div id="school-all">
    <div class="title">
      <h3>全部学校</h3>
    </div>
    <div class="school-all-list">
      <el-row  :gutter="20" > 
        <el-col v-for="school in schools" :key="school.id">
          <el-link :title="school.name" @click="toPath(school._id)" :underline="false">
            <img :src="'http://localhost:20020/static/' + school.bigLogo" />
          </el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  methods: {
    toPath(school_id) {

// 有的时候一种方法不行，那就要换一种方法，比如使用name和params就是不行的
      this.$router.push({path: '/school/' + school_id})
    }
  },
  created() {
    let url = "http://localhost:20020/course/all_schools";

    axios.get(url).then(res => {
      // console.log(res.data, "school all")
      this.schools = res.data;
    })
  },
  data() {
    return {

      schools: []
    };
  }
};
</script>

<style lang="scss">
@import 'assets/css/school/SchoolAll.scss';
</style>