<template>
  <div class="article-title">
    <div class="article-info">
      <el-link :underline="false">{{ articleTitle.author }}</el-link>

      <el-link :underline="false">{{ articleTitle.course }}</el-link>
      <el-link :underline="false">{{ articleTitle.publishDate }}</el-link>
    </div>
    <el-link :underline="false" class="article-title-body">
      <h3>{{ articleTitle.title }}</h3>
      <div class="article-title-body-des">{{ articleTitle.description }}</div>
      <div class="hudong">
        <div class="dianzan">
          <i class="el-icon-thumb"></i>
          <span>{{ articleTitle.dianzan }}</span>
        </div>
        <div class="pinglun">
          <i class="el-icon-chat-line-round"></i>
          <span>
            {{
            articleTitle.pinglun
            }}
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
    return {};
  }
};
</script>

<style lang="scss">
@import "assets/css/common/ArticleTitle.scss";
</style>