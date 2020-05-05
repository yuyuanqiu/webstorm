<template>
  <div id="comment">
    <div class="article-comment-item" v-for="comment in comments" :key="comment.id">
      <el-row type="flex">
        <el-col>
          <div class="a-c-h-avatar">
            <el-avatar :size="50" :src="avator"></el-avatar>
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
                <span class="el-icon-chat-dot-round" @click="click_replay($event, comment)">回复</span>
              </div>
              <transition name="fade">
                <div class="reply-input" v-if="click_replay_status === comment.id">
                  <el-input placeholder="请输入内容" v-model="reply_input">
                    <template slot="append">
                      <span @click="submit_reply">评论</span>
                    </template>
                  </el-input>
                </div>
              </transition>
            </div>
          </div>
          <div class="reply_comment" v-for="reply in comment.reply" :key="reply.id">
            <el-row type="flex">
              <el-col>
                <div class="a-c-h-avatar">
                  <el-avatar :size="50" :src="avator"></el-avatar>
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
                      <span class="el-icon-chat-dot-round" @click="click_replay($event, reply)">回复</span>
                    </div>
                    <transition name="fade">
                      <div class="reply-input" v-if="click_replay_status === reply.id">
                        <el-input placeholder="请输入内容" v-model="reply_input">
                          <template slot="append">
                            <span @click="submit_reply($event, comment.reply)">评论</span>
                          </template>
                        </el-input>
                      </div>
                    </transition>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let get_;
  },
  methods: {
    click_replay(e, comment) {
      console.log(e, comment);
      this.click_replay_status = comment.id;
    },
    submit_reply(e, r) {
      console.log(e, r, "sss")
      r.push({
        id: parseInt(Math.random() * 1000000),
        author: "",
        content: this.reply_input,
        publish_date: "2020年01月01日",
        like: 12
      });
      this.reply_input = ''
      this.click_replay_status = ''
    }
  },
  name: "comment",
  data() {
    return {
      reply_input: "",
      click_replay_status: 0,
      avator: require("assets/img/people-icon/user_avator.png"),

      comments: [
        {
          id: parseInt(Math.random() * 1000000),
          author: "佳蕙jiahui",
          content:
            "根据业务场景判断是否使用index作为key，如果只是展示信息，无需对数据进行变更，完全可以使用index。",
          publish_date: "2020年01月01日",
          like: 12
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
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/common/Comment.scss";
</style>