<template>
  <div>
    <div class="home-lessons" v-for="i in 12" :key="i">
      <h2 class="card-head">经济学</h2>
      <div class="card-lessons">
        <div class="card-aside">
          <el-card :body-style="{ padding: '0px', height: 'inherit' }">
            <!-- 添加element image组件 -->
            <el-image :src="src" lazy>
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
              <!-- <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>-->
            </el-image>
            <!-- 添加element image组件 -->
            <!-- <img src="~assets/img/shouye-kecheng-datu.jpg" class="image" /> -->
            <div class="el-card-divs">
              <a href="#" v-for="i in 3" :key="i">
                <span>统计量抽样分布</span>
                <span>时间</span>
              </a>
            </div>
          </el-card>
        </div>
        <div class="card-body">
          <container-flex :datalist="courses" v-slot="{ data }">
            <!-- 给事件传回调时，不能使用() -->
            <a
              href="/home"
              class="container-flex-a"
              @mouseenter="mouseEnter"
              @mouseleave="mouseLeave"
            >
              <div class="container-flex-img">
                <img :src="data.icon" />
              </div>
              <div class="course_info_body">
                <h3>{{ data.name }}</h3>
                <span>{{ data.teacher.school }}</span>
                <span class="el-icon-user">{{ data.people }}</span>
              </div>
            </a>
          </container-flex>
          <!-- <course-list :courses="courses"/> -->
          <!-- <el-row :gutter="20" type="flex">
            <el-col :span="6" v-for="i in 8" :key="i">
              <a href="#" class="grid-content bg-purple">
                <el-image :src="src1" lazy>
                  <div slot="placeholder" class="image-slot">
                    加载中
                    <span class="dot">...</span>
                  </div>
                  
                </el-image>
                <div>
                  <div class="lesson-name">
                    <span>信息素养：效率提升与终身学习的新引擎</span>
                  </div>
                  <div class="lesson-info">
                    <span>四川大学</span>
                    <span>学习人数</span>
                  </div>
                </div>
              </a>
            </el-col>
          </el-row>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-lessons",
  data() {
    return {
      src: require("assets/img/shouye-kecheng-datu.jpg"),
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courses: {
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
        }
      }
    };
  },
  methods: {
    // 添加移除类名，放大缩小图片

    mouseEnter(event) {
      let img = event.target.getElementsByTagName("img")[0];
      // console.log(img);

      img.classList.add("enter_img");
    },
    mouseLeave(event) {
      let img = event.target.getElementsByTagName("img")[0];
      // console.log(img);

      img.classList.remove("enter_img");
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "assets/css/HomeLessons.scss";
</style>
