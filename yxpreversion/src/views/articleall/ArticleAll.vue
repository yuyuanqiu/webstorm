<template>
  <div id="article-all">
    <el-tabs v-model="activeName" @tab-click="get_default_data">
      <el-tab-pane
        :label="title.first_level"
        class="student-body-article"
        v-for="title in new_title"
        :key="title.id"
        :name="title.first_level"
        @tab-click="get_article(null, title, title.second_level[0])"
      >
        <div class="leibie">
          <el-button round v-for="i in title.second_level" :key="i.id">
            <span @click="get_article($event, title.first_level, i)">{{ i }}</span>
          </el-button>
          <el-button icon="el-icon-edit" @click="toPaths('/article/ls')">写文章</el-button>
        </div>
        <!-- <article-title
          v-infinite-scroll="load"
          style="overflow:auto"
          v-for="articleTitle in articleTitles"
          :key="articleTitle.id"
          :articleTitle="articleTitle"
        ></article-title>-->

        <div id="article-title-outer">
          <div
            class="article-title"
            v-for="articleTitle in articleTitles"
            :key="articleTitle.id"
            @click="to_article_content(articleTitle._id)"
          >
            <div class="article-info">
              <el-link :underline="false">{{ articleTitle.student_name }}</el-link>

              <el-link :underline="false">{{ articleTitle.course }}</el-link>
              <el-link :underline="false">{{ articleTitle.publish_time }}</el-link>
            </div>
            <el-link :underline="false" class="article-title-body">
              <h3>{{ articleTitle.article_title }}</h3>
              <!-- <div class="article-title-body-des">{{ articleTitle.description }}</div> -->
              <div class="hudong">
                <div class="dianzan">
                  <i class="el-icon-thumb"></i>
                  <span>{{ articleTitle.zan }}</span>
                </div>
                <div class="pinglun">
                  <i class="el-icon-view"></i>
                  <span>{{ articleTitle.read }}</span>
                </div>
              </div>
            </el-link>
          </div>

          <!-- 按钮加载 -->
          <div class="loading" @click="get_article($event, first_level, second_level)">
            <el-button>{{ loading }}</el-button>
          </div>
        </div>

        <!-- <ul v-infinite-scroll="load" infinite-scroll-distance="50" class="infinite-list" style="overflow:auto; ">
          <li v-for="i in test" :key="i.id" class="infinite-list-item">{{ i }}</li>
        </ul>-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";

import UserProfile from "components/common/UserProfile";

export default {
  data() {
    return {
      loading: "加载更多",
      test: 2,
      new_title: [],
      activeName: "",
      articleTitles: [],
      // 请求的次数：分数据返回，数据处理更快
      count: 0,
      first_level: "",
      second_level: ""
    };
  },
  components: {},
  methods: {
    load() {
      this.test += 2;
    },
    get_article(event, first_level, second_level) {
      // console.log(first_level, second_level, "传入的参数，新的值");

      if (
        first_level != this.first_level ||
        (first_level == this.first_level && second_level != this.second_level)
      ) {
        // 重置计数器，便于计算跳过的文档数
        this.count = 0;

        // 更新分类信息
        this.first_level = first_level;
        this.second_level = second_level;
      } else {
        this.count += 1;
      }
      let url = "http://localhost:20020/articles/get_second_level_article";
      axios
        .get(url, {
          params: {
            course_first: first_level,
            course_second: second_level,
            count: this.count
          }
        })
        .then(res => {
          // console.log(this.first_level, this.second_level, "旧的值");

          // 当前的一级和二级分类不同时，重置计数器
          if (this.count == 0) {
            // 当无匹配数据时，写入一个提示性文字
            if (res.data.length == 0) {
              this.loading = "没有更多了";
              // 数值结构一定要写对，不然数据不会更改
              this.articleTitles = [
                {
                  student_name: "该分类无数据",
                  course: "该分类无数据",
                  publish_time: new Date(),
                  article_title: "该分类无数据",
                  zan: 0,
                  read: 0
                }
              ];
            } else {
              this.loading = "加载更多";
              this.articleTitles = res.data;
            }
          } else {
            // this.count += 1;
            // console.log("长度", res.data.length);

            this.loading = "加载更多";

            if (res.data.length !== 0) {
              // this.articleTitles.push(res.data);
              // console.log(res.data instanceof Array);
              res.data.forEach(item => {
                this.articleTitles.push(item);
              });
            } else {
              this.loading = "没有更多了";
            }
          }
          // console.log(res.data, this.count);
          // console.log(this.first_level, this.second_level, "this");
        })
        .catch(err => {
          console.log(err);
        });
    },
    toPaths(path) {
      this.$router.push({ path: path });
    },
    to_article_content(article_id) {
      // this.$router.push({ path: `/articlecontent/${article_id}` }) // -> /user/123

      /**
       * v参数需要一一对应，
       * router中：
       *    name: 'article-content',
       *    path: "/articlecontent/:article_id"
       * push方式
       *    name: "article-content",
       *    params: {article_id}    // 即path中的:article_id
       */

      this.$router.push({ name: "article-content", params: { article_id } }); // -> /user/123
    },
    // 切换tab时获取默认第一个子级的数据
    get_default_data(res) {
      // console.log(res)
      this.get_article(null, this.activeName, res.$children[0].$el.innerText);
    },
    get_title() {
      let that = this;
      axios
        .get("http://localhost:20020/articles/title")
        .then(res => {
          // console.log(res.data)
          that.new_title = res.data;
          // console.log(this.new_title[0].first_level);

          this.activeName = this.new_title[0].first_level;

          this.get_article(
            null,
            this.activeName,
            this.new_title[0].second_level[0]
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get_title();
    // console.log(this.$router, "router")
    // console.log(this.$route, "route")
  }
};
</script>

<style lang="scss">
@import "assets/css/articleall/ArticleAll.scss";
</style>
