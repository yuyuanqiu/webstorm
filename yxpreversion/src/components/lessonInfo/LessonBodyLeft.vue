<template>
  <div class="lesson-body-left">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程介绍" name="first">{{ course.summary }}</el-tab-pane>
      <el-tab-pane label="课程目录" name="second">
        <div class="lesson-chapter">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="chapter in course.chapters" :key="chapter">
              <template slot="title">
                <h4>{{ chapter.title_num }}</h4>
                <span>{{ chapter.title_content }}</span>
                <i class="header-icon el-icon-info"></i>
              </template>
              <div v-for="lesson in chapter.lessons" :key="lesson">
                <el-link href="#" target="_blank" :underline="false">
                  <span>{{ lesson.title_num }}</span>
                  <span>{{ lesson.title_content }}</span>
                  <i class="el-icon-video-play"></i>
                </el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
      <el-tab-pane label="参考资料" name="third">
        <div v-for="ref in course.references" :key="ref" class="ref">
          <div class="el-icon-reading">{{ ref }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="课程评价" name="fourth">课程评价</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: ["titles"],
  name: "lesson-body-left",
  data() {
    return {
      activeName: "first",
      activeNames: ["1"],
      course: {
        name: "大数据计算技术",
        times: "3",
        data_start: "2019年11月01日",
        data_end: "2020年02月21日",
        week_now: "16",
        week_total: "16",
        join_people: "10676",
        summary:
          "大数据应用已成为行业热点和产业发展新增长点，数据科学与计算技术也是计算机的前沿领域，其中，大数据计算分析提供了核心的技术支撑。本课程从大数据计算系统的三个层次对数据模型、处理算法、计算模型与架构、开发技术标准等内容进行了综合性的介绍，重点阐述了各类数据分析算法和MapReduce，图并行计算，交互式处理，流计算，内存计算等计算架构。",
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
        },
        references: [
          "在第一次mooc视频学习时，提供了OBE版本的课程教学大纲",
          "在最后一次mooc视频学习时，提供了全套PPT教学课件和《大数据分析与计算》教材习题答案"
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
// ------------若想更改element样式，必须将scoped去掉，并冠以特定的类名/id名之内，防止更改全局-----------------

@import "assets/css/lessonInfo/LessonBodyLeft.scss";
</style>