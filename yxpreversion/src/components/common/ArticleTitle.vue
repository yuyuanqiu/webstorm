<template>
  <div class="article-title" @click="toArticle">
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
          <i class="el-icon-chat-line-round"></i>
          <span>
            <!-- {{
            articleTitle.pinglun
            }} -->
            12
          </span>
        </div>
      </div>
    </el-link>
  </div>
</template>

<script>
export default {
  props: ["articleTitle"],
  data() {
    return {
    };
  },
  methods: {
    toArticle() {
      this.$router.push({path: '/articlecontent/ls'})
    }
  },
  created() {
    
  },
};
</script>

<style lang="scss">
@import "assets/css/common/ArticleTitle.scss";
</style>