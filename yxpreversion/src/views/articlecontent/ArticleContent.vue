<template>
  <div id="article-content">
    <div class="article-content-head">
      <el-row type="flex">
        <el-col>
          <div class="a-c-h-avatar">
            <el-avatar
              :size="50"
              :title="article_info.publisher.student_img"
              :src="'http://localhost:20020/' + article_info.publisher.avatar"
            ></el-avatar>
          </div>
        </el-col>
        <el-col>
          <div class="a-c-h-other">
            <div class="author">{{ article_info.publisher.student_name }}</div>
            <div class="other">
              <span>{{ article_info.publish_time }}</span>
              <span>积分：{{ article_info.publisher.student_point }}</span>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="a-c-h-pingfen">
            <div>总评分：</div>
            <el-rate
              v-model="total_score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="article-content-body">
      <h2>{{ article_info.article_title }}</h2>
      <div v-html="article_info.article_content"></div>
      <div class="article-content-footer-info">
        <span class="el-icon-view">{{ article_info.read }}</span>
        <span class="el-icon-thumb" @click="click_like">{{ article_info.zan }}</span>
        <span :plain="true">
          <span>评分</span>
          <el-rate
            v-model="general_score"
            id="reply_to_top"
            :colors="colors"
            :show-text="true"
            :texts="pingjia"
            @change="score_upload"
          ></el-rate>
        </span>
      </div>
    </div>

    <comment
      :comments="comments"
      :article_id="article_id"
      v-loading="loading"
      element-loading-text="评论正在加载中，请先食用文章哦ヾ(≧▽≦*)o"
      element-loading-spinner="el-icon-loading"
    ></comment>
  </div>
</template>

<script>
import Comment from "components/common/Comment";

import axios from "axios";

export default {
  methods: {
    // 计算总评分
    calculate_score(score_arr) {
      let score_total = 0;
      let score_arr_lenth = score_arr.length;
      score_arr.forEach((value, index, arr) => {
        // console.log(typeof value.score);
        if (typeof value.score == "number") {
          score_total += value.score;
        }
      });
      // let average = (score_total / score_arr_lenth).toFixed(2);
      // console.log(average);
      return { score_total: score_total, score_arr_lenth: score_arr_lenth };
    },
    // 操作成功的提示消息
    success_operate(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "success"
      });
    },
    err_operate(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "error"
      });
    },
    // 点赞
    click_like() {
      this.article_info.zan += 1;
      let url = "http://localhost:20020/articles/like_add_one";
      axios
        .post(url, {
          zan: this.article_info.zan,
          article_id: this.article_info._id
        })
        .then(res => {
          console.log(res);
          this.success_operate("点赞成功");
        })
        .catch(err => {
          console.log(err);
          this.err_operate("点赞失败");
        });
    },
    // 评分上传，包含用户id号和用户评分

    score_upload(score) {
      console.log(this.general_score, "score", score);
      let url = "http://localhost:20020/articles/general_score";
      axios
        .post(url, {
          score: score,
          article_id: this.article_info._id,
          // 用户id号
          // 到时候要改正
          user_id: this.article_info.publisher_id
        })
        .then(res => {
          console.log(res);
          // 评分成功的提示消息
          this.success_operate("评分成功");

          let score_info = this.calculate_score(this.article_info.score_arr);
          this.total_score = Number(
            (
              (score_info.score_total + score) /
              (score_info.score_arr_lenth + 1)
            ).toFixed(2)
          );

          this.article_info.score_arr.push({
            score: score
          });
        })
        .catch(err => {
          console.log(err);
          this.err_operate("评分失败");
        });
    },

    // 节流函数，每隔一段时间执行一次
    throttle(fn, delay) {
      var prev = Date.now();
      return function() {
        var now = Date.now();
        if (now - prev > delay) {
          fn();
          prev = Date.now();
        }
      };
    },
    // 侦听阅读数，当滚动到文章末尾时，阅读数+1，
    // 使用侦听器，字段一定不要弄错
    addEventListener_scroll(reply_content, that, is_read_success) {
      addEventListener("scroll", function() {
        // let reply_content = reply_content;
        let scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;

        let is_read = reply_content.offsetTop < scrollTop;
        // console.log(is_read);

        // 计数器：当第一次阅读完之后不做操作

        if (is_read_success && is_read) {
          console.log(that);
          is_read_success = false;
          console.log(is_read_success, "is_read_success");
          that.article_info.read += 1;
          console.log(that.article_info.read);
          let url = "http://localhost:20020/articles/read_add_one";
          axios
            .post(url, {
              read: that.article_info.read,
              article_id: that.article_info._id
            })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  mounted() {
    let that = this;
    let is_read_success = true;
    // console.log(that)
    let reply_content = document.getElementById("reply_to_top");
    if (reply_content) {
      this.addEventListener_scroll(reply_content, that, is_read_success);
    }
  },
  components: {
    Comment
  },
  data() {
    return {
      loading: true,
      comments: [],
      article_id: "",
      total_score: 0,
      pingjia: ["1.0分", "2.0分", "3.0分", "4.0分", "5.0分"],
      input2: "",
      general_score: 0,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],

      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      value: 2.1,
      // 当数据格式不对的时候会出错。。publisher奇怪
      article_info: {
        publisher: {}
      }
    };
  },
  created() {
    console.log(this.$route, "created");

    // 获取路由信息
    // 分清楚this.$route 和 this.$router的区别
    let article_id = this.$route.params.article_id;
    // 传入到comment组件，评论文章时有用
    this.article_id = article_id;

    let url = "http://localhost:20020/articles/article_only/";
    axios
      .get(url + article_id)
      .then(res => {
        console.log(res.data, "article_only");

        // this.article_info.content = res.data[0].article_content;

        this.article_info = res.data[0];
        // console.log("article_info", res.data, this.article_info.score_arr);
        let score_info = this.calculate_score(this.article_info.score_arr);
        if (score_info.score_arr_lenth > 0) {
          this.total_score = Number(
            (score_info.score_total / score_info.score_arr_lenth).toFixed(2)
          );
        } else {
          this.total_score = 0;
        }

        console.log(this.total_score, "score_total");
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:20020/articles/article_reply/" + article_id)
      .then(res => {
        console.log(res.data);
        this.comments = res.data;
        this.loading = false;

        // this.article_info.content = res.data[0].article_content;

        // this.article_info.title = res.data[0].article_title;
      });

    // 测试用数据，旨在将文章信息传到数据库，以便mock
    // let url2 = "http://localhost:20020/articles/get_article";
    // axios
    //   .post(url2, {
    //     article_content: localStorage.getItem("content")
    //   })
    //   .then(res => {
    //     console.log(res, "huhhu");
    //   });
  }
};
</script>

<style lang="scss">
@import "assets/css/articlecontent/ArticleContent.scss";
</style>

