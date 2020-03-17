<template>
  <!-- 

  只有将组件根元素设为id，才会引用在router-view中的name上

  -->
  <div id="teacher-body">
    <el-tabs v-model="wenzhang">
      <el-tab-pane
        label="主讲课程"
        name="first"
      >
      <course-list :courses="courses"/>
      </el-tab-pane>
      <el-tab-pane label="文章" name="wenzhang">
        <article-title v-for="articleTitle in articleTitles" :key="articleTitle" :articleTitle="articleTitle"></article-title>
      </el-tab-pane>
      <el-tab-pane label="讨论" name="taolun">讨论</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleTitles: [
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
        {
          author: '宋佳佳',
          course: '论信息战在战争中的作用',
          publishDate: new Date(),
          title: '跨域总结:从CORS到Ngnix',
          description: '同源策略是一个安全策略。所谓的同源,指的是协议,域名,端口相同。浏览器处于安全方面的考虑,只允许本域名下的接口交互,不同源的客户端脚本,在没有明确授权的情况下,不能读写对方的资源。',
          dianzan: 23,
          pinglun: 5,
        },
      ],
      wenzhang: 'wenzhang',
      dialogFormVisible: false,
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
  }
};
</script>

<style lang="scss">
@import "assets/css/teacher/TeacherBody.scss";
</style>