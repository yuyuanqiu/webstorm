<template>
  <div class="special-course-all">
    <h3>全部课程</h3>
    <div class="options-lesson">
      <el-row>
        <el-col :span="12" type="flex">
          <div>
            <span>全部</span>
            <span>正在进行</span>
            <span>即将开始</span>
            <span>已结束</span>
          </div>
        </el-col>
        <el-col :span="12" type="flex">
          <div>
            <span>综合</span>
            <span>热门</span>
            <span>最新</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <course-list :courses="courses">
      
    </course-list>

    <div class="options-lesson-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        :page-size="20"
        prev-text="上一页"
        next-text="下一页 "
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.courses = {
        course1: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course2: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course5: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course4: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course3: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course11: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course12: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course15: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course41: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course31: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        }
      };
    }, 1000);
  },
  data() {
    return {
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courses: {}
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/specialcourse/SpecialCourseGood.scss";
@import "assets/css/specialcourse/SpecialCourseAll.scss";
</style>