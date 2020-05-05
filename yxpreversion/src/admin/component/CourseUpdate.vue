<template>
  <div id="course-update">
    <el-card class="box-card" v-for="course in courses" :key="course.id">
      <div slot="header" class="clearfix">
        <h2>{{ course.name }}</h2>

        <el-popover width="800" trigger="click" popper-class="course-update-popover">
          <el-form
            :model="course"
            :rules="rules"
            ref="course"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="授课时间" required>
              <el-date-picker
                v-model="course.time_range"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="学时安排" prop="time_week" required>
              <el-select
                v-model="course.time_week"
                filterable
                allow-create
                default-first-option
                placeholder="请选择"
              >
                <el-option
                  v-for="item in course.time_week_all"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="参考资料">
              <el-input placeholder="请输入内容" v-model="course.resource">
                <template slot="append">
                  <span @click="get($event,course)">添加</span>
                </template>
              </el-input>
              <ul>
                <li v-for="i in course.resources" :key="i">{{ i }}</li>
              </ul>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('course')">立即创建</el-button>
              <el-button @click="resetForm('course')">重置</el-button>
            </el-form-item>
          </el-form>
          <el-link type="primary" :underline="false" slot="reference">添加课程开课信息</el-link>
        </el-popover>
      </div>
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="课程名称">
          <span>{{ course.name }}</span>
        </el-form-item>
        <el-form-item label="课程编号">
          <span>{{ course.id }}</span>
        </el-form-item>
        <el-form-item label="课程一级类目">
          <span>{{ course.top_level }}</span>
        </el-form-item>
        <el-form-item label="课程二级类目">
          <span>{{ course.second_level }}</span>
        </el-form-item>
        <el-form-item label="课程简述">
          <span>{{ course.des }}</span>
        </el-form-item>
        <el-form-item label="授课教师">
          <span>{{ course.applyer }}</span>
        </el-form-item>
        <el-form-item label="授课日期">
          <span>{{ course.time_range[0] }}</span>
          <span>至</span>
          <span>{{ course.time_range[0] }}</span>
        </el-form-item>
        <el-form-item label="课程学时">
          <span>{{ course.time_week }}</span>
        </el-form-item>
        <el-form-item label="参考资料">
          <ul>
            <li v-for="res in course.resources" :key="res">{{ res }}</li>
          </ul>
        </el-form-item>
      </el-form>
      <el-collapse>
        <el-collapse-item
          v-for="chapter in course.chapters"
          :key="chapter.title_num"
          :title="chapter.title_num"
          :name="chapter.name"
        >
          <template slot="title">
            {{ chapter.title_num }}: {{ chapter.title_content }}
            <i class="header-icon el-icon-info"></i>
          </template>
          
          <el-collapse v-for="lesson in chapter.lessons" :key="lesson.title_num">
            <el-collapse-item>
              <template slot="title">{{ lesson.title_num }}: {{ lesson.title_content }}</template>
            </el-collapse-item>
          </el-collapse>

          <div class="add_lesson">
            <h2>添加小节信息</h2>
            <el-form
              label-position="left"
              :model="lesson"
              ref="lesson"
              label-width="100px"
            >
              <el-form-item label="小节编号">
                <el-select v-model="lesson.title_num" placeholder="请选择">
                  <el-option
                    v-for="chapter in bchapter"
                    :key="chapter"
                    :label="chapter"
                    :value="chapter"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="小节名称">
                <el-input v-model="lesson.title_content" type="text" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="视频课件">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/"
                  :file-list="lesson.urls"
                  :auto-upload="false"
                >
                  <el-button slot="trigger" size="small" type="success">选取文件</el-button>
                </el-upload>
              </el-form-item>

              <el-form-item style="width: 100%">
                <el-button size="small" type="primary" @click="getLesson($event, chapter, lesson)">上传到服务器</el-button>
                <el-button size="small" type="primary">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>

        <div class="add_chapter">
          <h2>添加章节信息</h2>
          <el-form label-position="left" :model="add_chapter" ref="add_chapter" label-width="100px">
            <el-form-item label="章节编号">
              <el-select v-model="add_chapter.title_num" placeholder="请选择">
                <el-option
                  v-for="a in achapter"
                  :key="a"
                  :label="a"
                  :value="a"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="章节名称">
              <el-input v-model="add_chapter.title_content" type="text" autocomplete="off"></el-input>
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
import { autoCreatedCourse } from "admin/common.js";

export default {
  created() {
    this.courses = autoCreatedCourse(3);
  },
  data() {
    return {
      fileList: [],
      achapter: ["第一章","第二章","第三章","第四章","第五章","第六章","第七章","第八章","第九章","第十章","第十一章","第十二章",],
      bchapter: ["第一小节","第二小节","第三小节","第四小节","第五小节","第六小节","第七小节","第八小节","第九小节","第十小节","第十一小节","第十二小节",],
      // 新添课程小节信息
      lesson: {
        title_num: '',
        title_content: '',
        urls: [],
      },
      add_chapter: {
        title_num: "",
        title_content: "",
        name: 0,
        url: "",
        lesson: "",
        lesson_content: "",
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
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {

    // 置换原先的值，防止输入多个小节/章节内容时，所有的内容跟着一起变化
    get_copy(lesson) {

      let lesson_co = {}
      for (let key in lesson) {
        // console.log(key)
        lesson_co[key] = lesson[key]
      }
      // 彻底情况该值，防止在其他输入框中再次出现
      lesson = {}
      return lesson_co
    },
    // 增加小节课程信息，并添加到该章节所有小节的末尾
    getLesson(e, chapter, lesson) {
      console.log("getLesson: ", chapter, lesson)
      
      chapter.lessons.push(this.get_copy(lesson))
    },
    // 增加章节，并添加到课程所有章节末尾
    getChapter(e, course, chapter) {
      console.log("getChapter: ", course, chapter)
      course.chapters.push(this.get_copy(chapter))
    },

    /**
     * get函数参数获取到的是当前课程信息，
     * 将输入信息push到参考资料列表
     */
    get(e, r) {
      console.log(r);
      r.resources.push(r.resource);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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


