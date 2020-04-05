<template>
  <div id="article-content">
    <div class="article-content-head">
      <el-row type="flex">
        <el-col>
          <div class="a-c-h-avatar">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
        </el-col>
        <el-col>
          <div class="a-c-h-other">
            {{ artitle_info.id }}
          </div>
        </el-col>
        <el-col>
          <div class="a-c-h-pingfen">

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artitle_info: {
        id: parseInt(Math.random() * 100000000000000),
        title: '看完这篇 Session、Cookie、Token，和面试官扯皮就没问题了',
        content: '',
        first_level: '计算机',
        second_level: '程序设计与开发',
        author: '雪鸢xueyuan',
        publish_date: '2020年01月01日',
        read_total: 200,
        mark: 3.2,
        like: '',
        comment: [
          
        ]


      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/articlecontent/ArticleContent.scss";
</style>