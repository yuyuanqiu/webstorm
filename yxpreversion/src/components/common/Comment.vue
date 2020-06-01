<template>
  <div id="comment">
    <div class="reply-article">
      <transition name="fade">
        <div class="reply-input">
          <el-input placeholder="请输入内容" v-model="reply_input">
            <template slot="append">
              <span @click="submit_reply($event)">评论</span>
            </template>
          </el-input>
        </div>
      </transition>
    </div>
    <div class="article-comment-item" v-for="comment in comments" :key="comment._id">
      <el-row type="flex">
        <el-col>
          <div class="a-c-h-avatar">
            <el-avatar :size="50"  :title="'http://localhost:20020/' + comment.publisher.avatar" :src="'http://localhost:20020/' + comment.publisher.avatar"></el-avatar>
          </div>
        </el-col>
        <el-col class="root-reply">
          <div class="a-c-h-other">
            <div class="author">
              <div>{{ comment.publisher.student_name}}</div>

              <div>{{ comment.publish_time }}</div>
              <div>积分：{{ comment.publisher.student_point}}</div>
            </div>
            <div class="other">
              <p class="comment">{{ comment.note_content }}</p>
              <div>
                <span class="el-icon-thumb">{{ comment.zan }}</span>
                <span class="el-icon-chat-dot-round" @click="click_replay($event, comment)">回复</span>
              </div>
              <transition name="fade">
                <div class="reply-input" v-if="is_expand_input === comment._id">
                  <el-input placeholder="请输入内容" v-model="reply_input">
                    <template slot="append">
                      <span @click="submit_reply($event, comment)">评论</span>
                    </template>
                  </el-input>
                </div>
              </transition>
            </div>
          </div>
          <div class="reply_comment" v-for="reply in comment.comments" :key="reply._id">
            <el-row type="flex">
              <el-col>
                <div class="a-c-h-avatar">
                  <el-avatar :size="50" :title="'http://localhost:20020/' + reply.publisher.avatar" :src="'http://localhost:20020/' + reply.publisher.avatar"></el-avatar>
                </div>
              </el-col>
              <el-col>
                <div class="a-c-h-other">
                  <div class="author">
                    <div>{{ reply.publisher.student_name }}</div>

                    <div>{{ reply.publish_time }}</div>
                    <div>积分：{{ reply.publisher.student_point}}</div>
                  </div>
                  <div class="other">
                    <p class="comment">
                      <span>回复</span>
                      <span>
                        <a href>{{reply.parent_reply. student_name}}</a>
                      </span>
                      {{ reply.note_content }}
                    </p>
                    <div>
                      <span class="el-icon-thumb">{{ reply.zan }}</span>
                      <span class="el-icon-chat-dot-round" @click="click_replay($event, reply)">回复</span>
                    </div>
                    <transition name="fade">
                      <div class="reply-input" v-if="is_expand_input === reply._id">
                        <el-input placeholder="请输入内容" v-model="reply_input">
                          <template slot="append">
                            <span @click="submit_reply($event, comment, reply)">评论</span>
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
import { uuid } from "../../common/uuid";
import axios from "axios";

export default {
  name: "comment",
  data() {
    return {
      loading: true,
      is_expand_input: "",
      reply_input: "",
      click_replay_status: 0,
      user_info: "",
      avator: require("assets/img/people-icon/user_avator.png")
    };
  },
  props: ["comments", "article_id"],
  created() {
    // this.get_info();
  },
  mounted() {},
  methods: {
    // 获取学生信息
    get_info() {
      let url = "http://localhost:20020/get_user";
      axios
        .get(url)
        .then(res => {
          // console.log(res.data)
          this.user_info = res.data;
          // console.log(this.user_info,"user_info");
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击回复,显示输入框输入评论
    click_replay(e, comment) {
      this.is_expand_input = comment._id;
      console.log(e, comment);
      console.log(this.is_expand_input, comment._id);
    },
    // 提交评论
    submit_reply(e, root_node, parent_node) {
      console.log(arguments.length, "参数个数");

      // 提交评论之后，评论框收起
      this.is_expand_input = 0;
      console.log(e, root_node, parent_node);
      let parms_length = arguments.length;

      let _id = uuid();

      let reply_info = {};

      let upload_url = "http://localhost:20020/articles/reply_update";

      if (parms_length === 3) {
        reply_info = {
          _id: _id,
          id: Math.floor(Math.random() * 1000000),
          note_content: this.reply_input,
          publisher_id: this.$store.state.user_info._id,
          publish_time: new Date(),
          parent_node: parent_node._id,
          root_node: root_node._id,
          zan: 0
        };

        root_node.comments.push({
          _id: _id,
          note_content: this.reply_input,
          publish_time: new Date(),
          parent_node: parent_node._id,
          root_node: root_node._id,
          zan: 0,
          parent_reply: {
            student_id: parent_node._id,
            student_name: parent_node.publisher.student_name
          },
          publisher: {
            _id: this.$store.state.user_info._id,
            student_name: this.$store.state.user_info.student_name,
            avatar: this.$store.state.user_info.avatar,
            student_point: this.$store.state.user_info.student_point
          }
        });

        axios
          .post(upload_url, reply_info)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      } else if (parms_length === 2) {
        let local_push_data = {
            _id: _id,
            note_content: this.reply_input,
            publish_time: new Date(),
            parent_node: root_node._id,
            root_node: root_node._id,
            zan: 0,
            parent_reply: {
              student_id: root_node.publisher._id,
              student_name: root_node.publisher.student_name
            },
            publisher: {
              _id: this.$store.state.user_info._id,
              student_name: this.$store.state.user_info.student_name,
              avatar: this.$store.state.user_info.avatar,
              student_point: this.$store.state.user_info.student_point
            }
          },
          reply_info = {
            _id: _id,
            id: Math.floor(Math.random() * 1000000),
            note_content: this.reply_input,
            publisher_id: this.$store.state.user_info._id,
            publish_time: new Date(),
            parent_node: root_node._id,
            root_node: root_node._id,
            zan: 0
          };
        root_node.comments.push(local_push_data);
        console.log(reply_info);

        axios
          .post(upload_url, reply_info)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        let local_push_data = {
          _id: _id,
          note_content: this.reply_input,
          publish_time: new Date(),
          parent_node: null,
          root_node: root_node,
          zan: 0,
          publisher: {
            _id: this.$store.state.user_info._id,
            student_name: this.$store.state.user_info.student_name,
            avatar: this.$store.state.user_info.avatar,
            student_point: this.$store.state.user_info.student_point
          },
          comments: []
        };

        reply_info = {
          _id: _id,
          id: Math.floor(Math.random() * 1000000),
          note_content: this.reply_input,
          publisher_id: this.$store.state.user_info._id,
          publish_time: new Date(),
          parent_node: null,
          root_node: this.article_id,
          zan: 0
        };

        this.comments.push(local_push_data);

        axios
          .post(upload_url, reply_info)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }

      // 在回复完之后，情况输入框的值
      this.reply_input = "";
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/common/Comment.scss";
</style>