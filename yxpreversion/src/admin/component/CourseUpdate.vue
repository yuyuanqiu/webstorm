<template>
  <div id="course-update">
    <el-card class="box-card" v-for="course in courses" :key="course.id">
      <div slot="header" class="clearfix">
        <h2>{{ course.course_name }}</h2>

        <el-popover width="800" trigger="click" popper-class="course-update-popover">
          <el-form
            :model="course"
            ref="course"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="授课时间" required>
              <el-date-picker
                v-model="time_range"
                format="yyyy 年 MM 月 dd 日"
                @change="select_date(course)"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="学时安排" prop="course_plan" required>
              <el-select
                v-model="course.course_plan"
                filterable
                allow-create
                default-first-option
                placeholder="请选择"
              >
                <el-option
                  v-for="item in time_week_all"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="参考资料">
              <el-input placeholder="请输入内容" v-model="reference">
                <template slot="append">
                  <span @click="get($event,course)" style="cursor: pointer;">添加</span>
                </template>
              </el-input>
              <ul>
                <li v-for="i in course.reference" :key="i">{{ i }}</li>
              </ul>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(course)">立即更新</el-button>
              <el-button @click="resetForm('course')">重置</el-button>
            </el-form-item>
          </el-form>
          <el-link type="primary" :underline="false" slot="reference">添加课程开课信息</el-link>
        </el-popover>
      </div>
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="课程名称">
          <span>{{ course.course_name }}</span>
        </el-form-item>
        <el-form-item label="课程编号">
          <span>{{ course.id }}</span>
        </el-form-item>
        <el-form-item label="课程一级类目">
          <span>{{ course.course_first }}</span>
        </el-form-item>
        <el-form-item label="课程二级类目">
          <span>{{ course.course_second }}</span>
        </el-form-item>
        <el-form-item label="课程简述">
          <span>{{ course.course_des }}</span>
        </el-form-item>
        <el-form-item label="授课教师">
          <span>{{ course.publisher[0].teacher_name }}</span>
        </el-form-item>
        <el-form-item label="授课日期">
          <span>{{ course.start_date }}</span>
          <span>至</span>
          <span>{{ course.end_date }}</span>
        </el-form-item>
        <el-form-item label="课程学时">
          <span>{{ course.course_plan }}</span>
        </el-form-item>
        <el-form-item label="参考资料">
          <ul>
            <li v-for="res in course.reference" :key="res">{{ res }}</li>
          </ul>
        </el-form-item>
      </el-form>
      <el-collapse>
        <el-collapse-item
          v-for="chapter in course.chapter_info"
          :key="chapter._id"
          :title="chapter.title"
          :name="chapter.title"
        >
          <template slot="title">
            {{ chapter.id }}: {{ chapter.title }}
            <i class="header-icon el-icon-info"></i>
          </template>

          <el-collapse v-for="lesson in chapter.lessons" :key="lesson._id">
            <el-collapse-item>
              <template slot="title">{{ lesson.id }}: {{ lesson.title }}: {{ lesson.lesson_video }}</template>
            </el-collapse-item>
          </el-collapse>

          <div class="add_lesson">
            <h2>添加小节信息</h2>
            <el-form label-position="left" :model="lesson" ref="lesson" label-width="100px">
              <el-form-item label="小节编号">
                <el-select v-model="lesson.id" placeholder="请选择">
                  <el-option
                    v-for="chapter in bchapter"
                    :key="chapter"
                    :label="chapter"
                    :value="chapter"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="小节名称">
                <el-input v-model="lesson.title" type="text" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="视频课件">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="http://localhost:20020/course/update_video"
                  :file-list="uploadList"
                  :auto-upload="true"
                  accept="video/*"
                  :on-success="getSuccess"
                >
                  <el-button slot="trigger" size="small" type="success">选取文件</el-button>
                </el-upload>
              </el-form-item>

              <el-form-item style="width: 100%">
                <el-button
                  size="small"
                  type="primary"
                  @click="getLesson($event,course, chapter, lesson)"
                >上传到服务器</el-button>
                <el-button size="small" type="primary">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>

        <div class="add_chapter">
          <h2>添加章节信息</h2>
          <el-form label-position="left" :model="add_chapter" ref="add_chapter" label-width="100px">
            <el-form-item label="章节编号">
              <el-select v-model="add_chapter.id" placeholder="请选择">
                <el-option v-for="a in achapter" :key="a" :label="a" :value="a"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="章节名称">
              <el-input v-model="add_chapter.title" type="text" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="getChapter($event,course, add_chapter)">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
// import { autoCreatedCourse } from "admin/common.js";

import axios from "axios";

export default {
  created() {
    // this.courses = autoCreatedCourse(3);

    let url = "http://localhost:20020/admin/course_update";

    axios
      .post(url, {
        teacher_id: this.$store.state.user_info._id
      })
      .then(res => {
        console.log(res.data, this.$store);
        this.courses = res.data;
      });
  },
  data() {
    return {
      reference: '',
      time_range: [],
      time_week_all: ['每周1-2课时', '每周2-3课时', '每周3-4课时', '每周4-5课时', '每周1-3课时', '每周2-4课时', '每周2-5课时', '每周1-5课时'],
      uploadList: [],
      fileList: [],
      achapter: [
        "第一章",
        "第二章",
        "第三章",
        "第四章",
        "第五章",
        "第六章",
        "第七章",
        "第八章",
        "第九章",
        "第十章",
        "第十一章",
        "第十二章"
      ],
      bchapter: [
        "第一小节",
        "第二小节",
        "第三小节",
        "第四小节",
        "第五小节",
        "第六小节",
        "第七小节",
        "第八小节",
        "第九小节",
        "第十小节",
        "第十一小节",
        "第十二小节"
      ],
      // 新添课程小节信息
      lesson: {
        id: "",
        title: "",
        lesson_video: ""
      },
      add_chapter: {
        id: "",
        title: "",
        // name: 0,
        // url: "",
        // lesson: "",
        // lesson_content: "",
        lessons: []
      },
      activeName: 2,
      course_resource: "",
      courses: {},
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
     
    };
  },
  methods: {
    select_date(course) {
      console.log( course, this.time_range);

      course.start_date = this.time_range[0];
      course.end_date = this.time_range[1];

    },
    getSuccess(res) {
      console.log(res)

      this.lesson.lesson_video = '/static/videos/' + res;
    },
    
    upload_video() {
      const formData = new FormData();
        const file = this.$refs.upload.uploadFiles[0];
        const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        if (!file) { // 若未选择文件
          alert('请选择文件');
          return;
        }
        formData.append('file', file.raw);
        
        this.$http.post('/api/upload', formData, headerConfig).then(res => {
          console.log(res);
        })

    },
    // 置换原先的值，防止输入多个小节/章节内容时，所有的内容跟着一起变化
    get_copy(lesson) {
      let lesson_co = {};
      for (let key in lesson) {
        // console.log(key)
        lesson_co[key] = lesson[key];
      }
      // 彻底情况该值，防止在其他输入框中再次出现
      lesson = {};
      return lesson_co;
    },
    // 增加小节课程信息，并添加到该章节所有小节的末尾
    getLesson(e,course, chapter, lesson) {
      console.log("getLesson: ", chapter, lesson);

      chapter.lessons.push(this.get_copy(lesson));

      let url = "http://localhost:20020/course/update_xiaojie";

      axios.post(url, {
        _id: course._id,
        chapter_info: course.chapter_info,
      }).then(res => {
        console.log(res)
        this.$message.success("课程上传成功")
      })
    },
    // 增加章节，并添加到课程所有章节末尾
    getChapter(e, course, chapter) {
      console.log("getChapter: ", course, chapter);
      course.chapter_info.push(this.get_copy(chapter));


      let url = "http://localhost:20020/course/update_xiaojie";

      axios.post(url, {
        _id: course._id,
        chapter_info: course.chapter_info,
      }).then(res => {
        console.log(res)
        this.$message.success("章节添加成功")
      })
    },

    /**
     * get函数参数获取到的是当前课程信息，
     * 将输入信息push到参考资料列表
     */
    get(e, course) {
      course.reference.push(this.reference);
    },
    submitForm(course) {
      let url = "http://localhost:20020/course/add_course_date";

      axios.post(url, {
        _id: course._id,
        reference: course.reference,
        start_date: course.start_date,
        end_date: course.end_date,
        course_plan: course.course_plan
      }).then(res => {
        console.log(res);
        this.$message.success("更新成功")
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/CourseUpdate.scss";
</style>


