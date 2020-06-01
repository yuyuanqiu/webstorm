<template>
  <div id="specific-course-nav">
    <el-row class="row-bg">
      <el-col :span="4" class="course-head">
        <h3>
          {{ $route.params.class }}
        </h3>
      </el-col>
      <el-col v-for="i of course_specific" :key="i.id" class="lesss">
        <el-link @click="SCNtiaozhuan" :underline="false">{{i.first_level}}</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>


import axios from "axios";

export default {
  
  name: "special-course-nav",
  data() {
    return {
      idFixed: true,
      offsetTop: 0,
      course_specific: []
    };
  },
  mounted() {

    let url = "http://localhost:20020/course/categories";

    axios.post(url, {
      category: this.$route.params.class,
    }).then(res => {
      
      if (this.$route.params.class == "示范课程") {
        console.log(res.data)
      this.course_specific = res.data

      } else {
        console.log(res.data[0])
        this.course_specific = res.data
      }
    })
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll,true);

    this.$nextTick(function() {
      // 这里fixedHeaderRoot是吸顶元素的ID
      let header = document.getElementById("specific-course-nav"); // 这里要得到top的距离和元素自身的高度
      this.offsetTop = header.offsetTop;
      this.offsetHeight = header.offsetHeight;
      console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    });
  },
  methods: {
    handleScroll() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 判断页面滚动的距离是否大于吸顶元素的位置
      this.isFixed = scrollTop > this.offsetTop - this.offsetHeight * 2;
    },

    /**
     * 实现当前页面跳转功能：SCNtiaozhuan()
     * 搜索关键词：锚点定位和跳转；吸顶锚点
     */
    SCNtiaozhuan() {
    const returnEle = document.querySelector(".btn-prev");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
  }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<style lang="scss">
@import "assets/css/specialcourse/SpecialCourseNav.scss";
</style>