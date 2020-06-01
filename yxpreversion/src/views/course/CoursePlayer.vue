<template>
  <div id="course-player">
    <div class="c-p-title">
      <h2>{{ title }}</h2>
      <div class="fenlei">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >{{ first_level }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ second_level }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ lesson_title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <span class="c-p-date">{{ publish_date }}</span>
      </div>
    </div>
    <el-row type="flex" class="row-bg" :gutter="36">
      <el-col :span="12">
        <div class="v-p-inner">
          <video-player
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            customEventName="customstatechangedeventname"
          ></video-player>
        </div>
      </el-col>
      <!-- 

        ---------------设置点击右侧导航栏，实现路由跳转-----
            :router="true"
            :default-active="$route.path"
            <el-menu-item index="/path">选项2</el-menu-item>

      -->
      <el-col :span="2">
        <div class="v-p-right">
          <h3 class="el-icon-s-grid">视频选集</h3>
          <div class="v-p-chapter">
            <el-menu
              :router="false"
              :unique-opened="true"
              class="el-menu-outer"
            >
              <el-submenu
                :index="chapter.title"
                v-for="chapter in course_info.chapter_info"
                :key="chapter.id"
              >
                <template slot="title">
                  <i class="el-icon-s-unfold"></i>
                  <span>{{ chapter.id + '：' + chapter.title }}</span>
                </template>
                <el-menu-item v-for="lesson in chapter.lessons" :key="lesson.id" :index="lesson.title">
                  <span @click="click_change_url(lesson)">{{ lesson.id + '：' + lesson.title }}</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>



<script>
/**
 * -------------------------------------------------------------------------------------------------------------
 * 动态路由下切换视频资源
 * 1. playeroptions使用计算属性，
 * 2. 视频资源使用data
 * 3. playeroptions引用视频资源实行动态刷新
 * 4. 使用组件更新导航守卫beforeRouteUpdate请求视频资源信息
 * 5. 更新
 */
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";

import axios from "axios";

export default {
  created() {
    // console.log(this.$route, "route-video");

    let url = "http://localhost:20020/course/video_info";
    axios
      .post(url, {
        course_id: this.$route.params.coursename
      })
      .then(res => {
        // console.log(res.data[0]);

        this.course_info = res.data[0];

        this.title = this.course_info.chapter_info[0].lessons[0].title;
        this.first_level = this.course_info.course_first;
        this.second_level = this.course_info.course_second;
        this.lesson_title = this.course_info.course_name;
        this.publish_date = this.course_info.start_date;
        this.res_url =
          "http://localhost:20020" +
          this.course_info.chapter_info[0].lessons[0].lesson_video;
      });
  },
  name: "course-player",
  data() {
    return {
      course_info: {
        apply_comment: "",
        apply_date: "",
        apply_status: "",
        chapter_info: [],
        chapter_total_score: 0,
        course_bg: "",
        course_des: "",
        course_first: "",
        course_is_jingpin: false,
        course_name: "",
        course_plan: "",
        course_second: "",
        course_status: "",
        course_success_times: 0,
        end_date: "",
        id: "",
        reference: [],
        run_week: 0,
        start_date: "",
        study_people: [],
        teacher_id: "",
        _id: ""
      },
      title_id: 12123,
      title: "课程简介",
      first_level: "计算机",
      second_level: "程序设计与开发",
      lesson_title: "大数据计算技术",
      publish_date: "2020年02月20日",
      res_url: "example.mp4",
      video_info: {
        title_id: 12123,
        title: "课程简介",
        first_level: "计算机",
        second_level: "程序设计与开发",
        lesson_title: "大数据计算技术",
        publish_date: "2020年02月20日",
        // res_url: require("public/video/video-a.mp4"),
        chapters: {
          chapter1: {
            title_num: "第一章",
            title_content: "大数据计算技术概述",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "课程简介"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "大数据计算概论（上）"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "大数据计算概论（下）"
              }
            }
          },
          chapter2: {
            title_num: "第二章",
            title_content: "大数据计算系统",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "大数据计算系统"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "数据存储系统"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "数据处理系统"
              },
              lesson4: {
                title_num: "第四小节",
                title_content: "数据处理系统（续）"
              },
              lesson5: {
                title_num: "第五小节",
                title_content: "数据应用系统"
              }
            }
          },
          chapter3: {
            title_num: "第三章",
            title_content: "数据采集方法",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "系统日志数据采集"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "网络数据采集"
              }
            }
          },
          chapter4: {
            title_num: "第四章",
            title_content: "数据清洗与规约方法",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "脏数据类型及处理方法"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "数据噪声处理方法"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "数据集成方法"
              },
              lesson4: {
                title_num: "第四小节",
                title_content: "数据规约方法"
              },
              lesson5: {
                title_num: "第五小节",
                title_content: "数据建模方法"
              }
            }
          },
          chapter5: {
            title_num: "第五章",
            title_content: "数据分析算法",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "C4.5算法"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "K-均值算法"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "SVM算法"
              },
              lesson4: {
                title_num: "第四小节",
                title_content: "Apriori算法"
              },
              lesson5: {
                title_num: "第五小节",
                title_content: "kNN算法"
              },
              lesson6: {
                title_num: "第六小节",
                title_content: "PageRank算法"
              }
            }
          },
          chapter6: {
            title_num: "第六章",
            title_content: "文本读写技术",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "读取文本文件"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "读取CSV文件"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "写入文本文件"
              },
              lesson4: {
                title_num: "第四小节",
                title_content: "其他操作"
              }
            }
          },
          chapter7: {
            title_num: "第七章",
            title_content: "数据处理技术",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "数据合并技术"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "数据转换技术"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "数据转换技术(续)"
              }
            }
          },
          chapter8: {
            title_num: "第八章",
            title_content: "数据分析技术",
            lessons: {
              lesson1: {
                title_num: "第一小节",
                title_content: "Numpy工具包"
              },
              lesson2: {
                title_num: "第二小节",
                title_content: "Numpy工具包：基本运算"
              },
              lesson3: {
                title_num: "第三小节",
                title_content: "Pandas工具包"
              },
              lesson4: {
                title_num: "第四小节",
                title_content: "Python Scikit-learn"
              },
              lesson5: {
                title_num: "第五小节",
                title_content: "Python NLTK 自然语言处理入门"
              }
            }
          }
        }
      },
      beisuh: [0.5, 1.0, 1.5, 2.0]
    };
  },
  components: {
    videoPlayer
  },
  mounted() {
    // console.log("this is current player instance object", this.player);
  },

  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player;
    // },
    playerOptions() {
      return {
        // width: 200,
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        languages: {
          Play: "播放",
          Pause: "Pausa",
          "Current Time": "Tiempo reproducido",
          Duration: "Duración total",
          "Remaining Time": "Tiempo restante"
        },
        // aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src: this.res_url // url地址
          }
        ],
        // poster: require("public/img/student-title-bg-1.jpg"), // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: true, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      };
    }
  },
  methods: {
    click_change_url(lesson) {
      this.res_url = "http://localhost:20020" + lesson.lesson_video;

      this.title = lesson.title;
    },
    handleClose() {}
  }
};
</script>


<style lang="scss">
@import "assets/css/course/CoursePlayer.scss";
</style>

