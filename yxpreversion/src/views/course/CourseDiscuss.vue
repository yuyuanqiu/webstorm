<template>
  <div id="course-discuss">
    <div class="article-comment">
      <div class="comment-input">
        <el-input placeholder="请输入内容" v-model="input2">
          <template slot="prepend">
            <el-avatar :size="36" :src="circleUrl"></el-avatar>
          </template>
          <template slot="append">评论</template>
        </el-input>
      </div>
      <div class="article-comment-item" v-for="comment in article_info.comment" :key="comment.id">
        <el-row type="flex">
          <el-col>
            <div class="a-c-h-avatar">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
          </el-col>
          <el-col class="root-reply">
            <div class="a-c-h-other">
              <div class="author">
                <div>{{ comment.author }}</div>

                <div>{{ comment.publish_date }}</div>
                <div>积分：3</div>
              </div>
              <div class="other">
                <p class="comment">{{ comment.content }}</p>
                <div>
                  <span class="el-icon-thumb">21</span>
                  <span class="el-icon-chat-dot-round">回复</span>
                </div>
              </div>
            </div>
            <div class="reply_comment" v-for="reply in comment.reply" :key="reply.id">
              <el-row type="flex">
                <el-col>
                  <div class="a-c-h-avatar">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </div>
                </el-col>
                <el-col>
                  <div class="a-c-h-other">
                    <div class="author">
                      <div>{{ reply.author }}</div>

                      <div>{{ reply.publish_date }}</div>
                      <div>积分：3</div>
                    </div>
                    <div class="other">
                      <p class="comment">
                        <span>回复</span>
                        <span>
                          <a href>{{comment.author }}</a>
                        </span>
                        {{ reply.content }}
                      </p>
                      <div>
                        <span class="el-icon-thumb">21</span>
                        <span class="el-icon-chat-dot-round">回复</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course-dicuss',
  data() {
    return {
      pingjia: ["1.0分", "2.0分", "3.0分", "4.0分", "5.0分"],
      input2: "",
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],

      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      value: 2.1,
      article_info: {
        id: parseInt(Math.random() * 100000000000000),
        title: "为什么 Vue 中不要用 index 作为 key？（diff 算法详解）",
        content: "看完这篇",
        first_level: "计算机",
        second_level: "程序设计与开发",
        author: "雪鸢xueyuan",
        publish_date: "2020年01月01日",
        read_total: 200,
        mark: 3.2,
        like: 36,
        comment: [
          {
            id: parseInt(Math.random() * 1000000),
            author: "佳蕙jiahui",
            content:
              "根据业务场景判断是否使用index作为key，如果只是展示信息，无需对数据进行变更，完全可以使用index。",
            publish_date: "2020年01月01日",
            like: 12,
          },
          {
            id: parseInt(Math.random() * 1000000),
            author: "茜雪qixue",
            content:
              "我测试了下，对于你的reverse例子，加了key也会走到旧首部和新尾部是sameNode,同样也会patchNode？是么？",
            publish_date: "2020年01月01日",
            like: 12,
            reply: [
              {
                id: parseInt(Math.random() * 1000000),
                author: "琴韵qinyun",
                content:
                  "确实是，删除的场景是最可怕的，之前也试过。随机数作为key带来的组件销毁重建是新的一个知识点，感谢",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "碧痕bihen",
                content: "我想看大佬实现一个diff算法，一路从computed追过来",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "墨雨moyu",
                content: "并不是无脑不用 index 当 key 吧，标题有点误导了",
                publish_date: "2020年01月01日",
                like: 12
              }
            ]
          },
          {
            id: parseInt(Math.random() * 1000000),
            author: "茜雪qixue",
            content:
              "我测试了下，对于你的reverse例子，加了key也会走到旧首部和新尾部是sameNode,同样也会patchNode？是么？",
            publish_date: "2020年01月01日",
            like: 12,
            reply: [
              {
                id: parseInt(Math.random() * 1000000),
                author: "琴韵qinyun",
                content:
                  "确实是，删除的场景是最可怕的，之前也试过。随机数作为key带来的组件销毁重建是新的一个知识点，感谢",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "碧痕bihen",
                content: "我想看大佬实现一个diff算法，一路从computed追过来",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "墨雨moyu",
                content: "并不是无脑不用 index 当 key 吧，标题有点误导了",
                publish_date: "2020年01月01日",
                like: 12
              }
            ]
          },
          {
            id: parseInt(Math.random() * 1000000),
            author: "茜雪qixue",
            content:
              "我测试了下，对于你的reverse例子，加了key也会走到旧首部和新尾部是sameNode,同样也会patchNode？是么？",
            publish_date: "2020年01月01日",
            like: 12,
            reply: [
              {
                id: parseInt(Math.random() * 1000000),
                author: "琴韵qinyun",
                content:
                  "确实是，删除的场景是最可怕的，之前也试过。随机数作为key带来的组件销毁重建是新的一个知识点，感谢",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "碧痕bihen",
                content: "我想看大佬实现一个diff算法，一路从computed追过来",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "墨雨moyu",
                content: "并不是无脑不用 index 当 key 吧，标题有点误导了",
                publish_date: "2020年01月01日",
                like: 12
              }
            ]
          },
          {
            id: parseInt(Math.random() * 1000000),
            author: "茜雪qixue",
            content:
              "我测试了下，对于你的reverse例子，加了key也会走到旧首部和新尾部是sameNode,同样也会patchNode？是么？",
            publish_date: "2020年01月01日",
            like: 12,
            reply: [
              {
                id: parseInt(Math.random() * 1000000),
                author: "琴韵qinyun",
                content:
                  "确实是，删除的场景是最可怕的，之前也试过。随机数作为key带来的组件销毁重建是新的一个知识点，感谢",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "碧痕bihen",
                content: "我想看大佬实现一个diff算法，一路从computed追过来",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "墨雨moyu",
                content: "并不是无脑不用 index 当 key 吧，标题有点误导了",
                publish_date: "2020年01月01日",
                like: 12
              }
            ]
          },
          {
            id: parseInt(Math.random() * 1000000),
            author: "茜雪qixue",
            content:
              "我测试了下，对于你的reverse例子，加了key也会走到旧首部和新尾部是sameNode,同样也会patchNode？是么？",
            publish_date: "2020年01月01日",
            like: 12,
            reply: [
              {
                id: parseInt(Math.random() * 1000000),
                author: "琴韵qinyun",
                content:
                  "确实是，删除的场景是最可怕的，之前也试过。随机数作为key带来的组件销毁重建是新的一个知识点，感谢",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "碧痕bihen",
                content: "我想看大佬实现一个diff算法，一路从computed追过来",
                publish_date: "2020年01月01日",
                like: 12
              },
              {
                id: parseInt(Math.random() * 1000000),
                author: "墨雨moyu",
                content: "并不是无脑不用 index 当 key 吧，标题有点误导了",
                publish_date: "2020年01月01日",
                like: 12
              }
            ]
          }
        ]
      }
    };
  },
  created() {
    this.article_info.content = localStorage.getItem("content");
  }
};
</script>

<style lang="scss">
@import "assets/css/course/CourseDiscuss.scss";
</style>