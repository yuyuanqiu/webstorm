<template>
  <div class="lesson-title" id="lesson-title">
    <el-row type="flex">
      <el-col :span="12">
        <img :src="'http://localhost:20020' +course_info.course_bg" class="el-image" />
        <!-- <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
        </div>-->
      </el-col>
      <el-col :span="12">
        <div class="lesson-title-right">
          <h3>{{ course_info.course_name }}</h3>
          <div class="lesson-title-right-time">
            <el-card class="box-card" shadow="never">
              <div slot="header">
                <span>第{{course_info.course_success_times + 1}}次开课</span>
                <i class="el-icon-circle-check"></i>
              </div>
              <div class="lesson-title-right-time-s">
                <div>
                  <span>开课时间： {{ course_info.start_date}} ~ {{ (course_info.end_date)}}</span>
                  <span v-if="is_end_up == 2">进行至第{{now_week}}周，共{{total_week}}周</span>
                  <span v-else-if="is_end_up == 3">课程已结束</span>
                  <span v-else>课程未开始</span>
                </div>
                <div>学时安排： {{course_info.course_plan}}</div>
              </div>
            </el-card>
          </div>
          <div class="lesson-title-right-join">
            <div class="lesson-title-join-people">已有{{total_count}}人参加</div>
            <div v-if="not_join" class="lesson-title-join-to">
              <transition v-if="is_end_up == 3">
                <el-button type="warning" @click="toPath('/course/' + course_info._id)">查看课程内容</el-button>
              </transition>
              <transition v-else>
                <el-button type="primary" @click="join">立即参加</el-button>
              </transition>
            </div>
            <div v-else class="lesson-title-join-to">
              <el-button type="success" @click="toPath('/course/' + course_info._id)">进入学习</el-button>
            </div>
            <p class="el-icon-warning-outline">怕错过精彩内容？ 那就赶快参与吧！</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import axios from "axios";

export default {
  computed: {
    total_count() {
      return this.course_info.study_people.length;
    } 
  },
  created() {
    let url = "http://localhost:20020/course/get_course_info";

    let course_id = this.$route.params.lessonname;

    axios
      .post(url, {
        _id: course_id
      })
      .then(res => {
        this.course_info = res.data[0];
        // console.log(this.course_info);
        this.total_week = Math.ceil(
          (new Date(this.course_info.end_date) -
            new Date(this.course_info.start_date)) /
            (1000 * 3600 * 24 * 7)
        );

        this.now_week = Math.ceil(
          (new Date() - new Date(this.course_info.start_date)) /
            (1000 * 3600 * 24 * 7)
        );
        if (new Date() > new Date(this.course_info.end_date)) {
          this.is_end_up = 3;
        } else if (new Date() < new Date(this.course_info.start_date)) {
          this.is_end_up = 1;
        } else {
          this.is_end_up = 2;
        }

        let that = this;

        this.course_info.study_people.forEach(function(value, index, arr) {
          if (that.$store.state.user_info._id === value) {
            that.not_join = false;
          }
        });
      });
  },
  data() {
    return {
      course_info: {
        study_people: []
      },
      total_week: 0,
      now_week: 0,
      is_end_up: 0,
      not_join: true,
      src: require("assets/img/lesson-info/lesson-title.png")
    };
  },
  methods: {
    toPath(path) {
      this.$router.push({ path: path });
    },
    join() {
      // console.log(this.$store.state.user_info._id, "_id");
      if (this.$store.state.user_info._id != null) {
        // 加入课程
        let url = "http://localhost:20020/course/update_people";
        axios
          .post(url, {
            _id: this.course_info._id,
            user_id: this.$store.state.user_info._id
          })
          .then(res => {
            // console.log(res.data);
            this.not_join = false;
          });
      } else {
        this.$message.error("您未登录，请登录后操作！");
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/lessonInfo/LessonTitle.scss";
</style>

<style lang="scss">
</style>