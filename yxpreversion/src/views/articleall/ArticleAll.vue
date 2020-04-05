<template>
  <div id="article-all">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="first_level.name" class="student-body-article" v-for="first_level in total_level" :key="first_level" :name="first_level.name">
        <div class="leibie">
          
              <el-button round  v-for="i in first_level.children" :key="i">
                {{ i }}
              </el-button>

              <el-button icon="el-icon-edit" @click="toPaths('/article/ls')">写文章</el-button>
            
        </div>
        <article-title
          v-for="articleTitle in articleTitles"
          :key="articleTitle"
          :articleTitle="articleTitle"
        ></article-title>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserProfile from "components/common/UserProfile";

export default {
  data() {
    return {
      activeName: "外语",
      total_level: {
        waiyu: {
          name: "外语",
          children: [
            "听力口语",
            "语法阅读",
            "写作翻译",
            "文学与语言学",
            "专门用途英语",
            "综合语种",
            "跨文化交际",
            "对外汉语",
            "大学英语"
          ]
        },
        jisuanji: {
          name: "计算机",
          children: ['程序设计与开发', '数据库', '计算机网络', '算法', 'web安全']
        },
        lixue: {
          name: "理学",
          children: [
            "数据分析",
            "数学",
            "物理",
            "化学",
            "天文学",
            "地理科学",
            "生物科学",
            "大气与海洋"
          ]
        },
        jijingguanli: {
          name: "经济管理",
          children: [
            "经济",
            "金融",
            "电商与贸易",
            "会计",
            "管理",
            "图书情报",
            "创新创业",
            "思维力"
          ]
        },
        wenshizhe: {
          name: "文史哲",
          children: ["文字文化", "新闻传播", "哲学", "历史"]
        },
        yishusheji: {
          name: "艺术设计",
          children: [
            "设计",
            "艺术学",
            "美术学",
            "戏剧与影视",
            "设计学",
            "音乐与舞蹈"
          ]
        },
        xinlixue: {
          name: "心理学",
          children: [
            '基础心理学',
            '生理心理学',
            '认知心理学',
            '比较心理学',
            '社会心理学',
            '应用心理学'
          ]
        },
        yiyaoweisheng: {
          name: "医药卫生",
          children: [
            "基础医学",
            "临床医学",
            "公共卫生",
            "口腔医学",
            "中医医药学",
            "药学",
            "护理学",
            "健康"
          ]
        },
        faxue: {
          name: "法学",
          children: ["法学", "思政", "社会"]
        },
        jiaoyujiaoxue: {
          name: "教育教学",
          children: [
            "教学方法",
            "教学能力",
            "信息化教学",
            "职业素养",
            "学科教育",
            "素质教育",
            "体育教育",
            "学前教育"
          ]
        },
        nonglinyuanyi: {
          name: "农林园艺",
          children: ["植物", "动物", "生态"]
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
      },
      articleTitles: [
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        },
        {
          author: "宋佳佳",
          course: "信息安全",
          publishDate: new Date(),
          title: "跨域总结:从CORS到Ngnix",
          description:
            "同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。",
          dianzan: 23,
          pinglun: 5
        }
      ]
    };
  },
  components: {
  },
  methods: {
    toPaths(path) {
      this.$router.push({ path: path})
    },
  }
};
</script>

<style lang="scss">
@import "assets/css/articleall/ArticleAll.scss";
</style>