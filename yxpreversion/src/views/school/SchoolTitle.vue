<template>
  <div id="school-title">
    <div class="bg" :style="'background-image: url(http://localhost:20020/static/' + school.bgPhoto + ')'"></div>
    
    <div class="jianjie">
      <img :src="'http://localhost:20020/static/' + school.smallLogo" :alt="school.name" :title="school.name" />
      <h2>{{ school.name }}</h2> 
      <div>{{ school.discription }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {

    // console.log(this.$route, "school info")
    let url = "http://localhost:20020/course/school_title";

    axios.post(url, {
      school_id: this.$route.params.school_id
    }).then(res => {
      // console.log(res.data[0])

      this.school = res.data[0];
    })
  },
  data() {
    return {
      school: {}
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/school/SchoolTitle.scss";
</style>