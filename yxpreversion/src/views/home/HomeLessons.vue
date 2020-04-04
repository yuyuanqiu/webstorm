<template>
  <div>
    <div class="home-lessons" v-for="i in 12" :key="i">
      <h2 class="card-head">{{ level }}</h2>
      <div class="card-lessons">
        <div class="card-aside">
          <el-card :body-style="{ padding: '0px', height: 'inherit' }">
            <!-- 添加element image组件 -->

            <div class="h-l-img" @mouseenter="imgenter" @mouseleave="imgleave">
              <img :src="src" />
              <el-link href="/home/ls">
                <div>
                  <i class="el-icon-video-play"></i>
                </div>
              </el-link>
              <div class="h-l-inner">
                <div class="h-l-hx"></div>
                <h3>{{ course_big.title }}</h3>
                <h4>{{ course_big.chapter.one.name }}</h4>
                <span>[课时]&nbsp;&nbsp;{{ course_big.chapter.one.time }}</span>
              </div>
            </div>
            <!-- 添加element image组件 -->
            <!-- <img src="~assets/img/shouye-kecheng-datu.jpg" class="image" /> -->
            <div class="el-card-divs">
              <el-link href="#" v-for="chapter in course_big.chapter.others" :key="chapter"
              :underline="false">
                <span>{{chapter.name }}</span>
                <span>{{ chapter.time }}</span>
              </el-link>
              
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
      level: "经济学",
      src: require("public/home_lesson_bigpic/a.png"),
      course_big: {
        title: "建筑结构与设计建筑结构与设计建筑结构与设计",

        chapter: {
          one: {
            name: "桁架结构体系、 拱式结构体系",
            time: "12'13\""
          },
          others: {
            one1: {
              name: "网架结构体系",
              time: "12'13\""
            },
            one2: {
              name: "概率极限状态设计方法设计方法",
              time: "12'13\""
            },
            one3: {
              name: "单向板与双向板",
              time: "12'13\""
            }
          }
        }
      },
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
        course1112: {
          icon: require("assets/img/lessongs-icon/yanjiang.png"),
          name: "信息素养：效率提升与终身学习的新引擎",
          teacher: {
            name: "苏筱洪",
            school: "中国科学技术大学"
          },
          people: "14164",
          week_now: "3"
        },
        course112: {
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
    },
    imgenter(event) {
      let img = event.target.getElementsByTagName("i")[0];
      img.classList.add("video-hover");
    },
    imgleave(event) {
      let img = event.target.getElementsByTagName("i")[0];
      img.classList.remove("video-hover");
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "assets/css/home/HomeLessons.scss";
</style>
