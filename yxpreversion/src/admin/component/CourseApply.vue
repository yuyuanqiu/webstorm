  <template>
  <div id="course-apply">
    <h2>课程申请表</h2>
    <div class="course-apply-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small"
      >
        <el-form-item label="课程名称" prop="course_name">
          <el-input v-model="ruleForm.course_name"></el-input>
        </el-form-item>
        <el-form-item label="课程编号" prop="id" required>
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="课程分类" prop="category" required>
          <el-cascader
            placeholder="请选择课程分类"
            v-model="ruleForm.category"
            :options="kecheng"
            :props="{ expandTrigger: 'hover' }"
            @change="getCheckedNode"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="课程封面" required>
          <el-upload
            class="upload-demo"
            action="http://localhost:20020/course/update_course_bg"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="ruleForm.fileList"
            list-type="picture"
            :auto-upload="true"

                  accept="image/*"
                  :on-success="getSuccess"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="课程状态" prop="apply_status">
          <el-select v-model="ruleForm.apply_status" placeholder="请输入课程状态">
            <el-option
              v-for="status in ruleForm.statusList"
              :key="status.value"
              :label="status.value"
              :value="status.value"
              :disabled="status.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程简述" prop="course_des" :required="false">
          <el-input type="textarea" v-model="ruleForm.course_des"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">提交申请</el-button>
          <el-button @click="resetForm('ruleForm')">重置申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { uuid } from "../../common/uuid";

export default {
  created() {
    let url = "http://localhost:20020/course/fenlei_zhengli";

    axios.get(url).then(res => {
      this.kecheng = res.data;
    });
  },
  data() {
    return {
      kecheng: [],

      ruleForm: {
        _id: "course_" + uuid(),
        id: "",
        teacher_id: localStorage.getItem("_id"),
        course_name: "",
        course_is_jingpin: false,
        course_des: "",
        course_bg: "",
        apply_status: "",
        apply_comment: "",
        course_status: "",
        reference: [],
        apply_date: new Date(),
        start_date: new Date(),
        end_date: new Date(),
        run_week: 12,
        course_plan: "",
        chapter_info: [],
        course_success_times: 0,
        chapter_total_score: {
          score: 0,
          people: 0
        },
        study_people: [],
        big_pic: "",
        category: [],
        course_first: "",
        course_second: "",
        fileList: [],
        bgUrl: "",
        dialogImageUrl: "",
        dialogVisible: false,
        statusList: [
          {
            value: "申请",
            comment: "",
            disabled: false
          },
          {
            value: "审核通过",
            comment: "",
            disabled: true
          },
          {
            value: "待审核",
            comment: "",
            disabled: true
          },
          {
            value: "审核未通过",
            comment: "",
            disabled: true
          }
        ],
      },
      rules: {
        name: [
          { required: true, message: "请输入课程名称", trigger: "blur" },
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
        desc: [{ required: false, message: "请输入描述", trigger: "blur" }]
      }
    };
  },
  methods: {
    getSuccess(res) {
      console.log(res)

      this.ruleForm.course_bg = "/static/images/course_cover/" + res;
    },
    getCheckedNode(arr) {
      console.log(arr);
      this.ruleForm.course_first = arr[0];
      this.ruleForm.course_second = arr[1];
      console.log(this.ruleForm);
    },
    handleRemove(file) {},
    handlePreview(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    submitForm(formName) {
      let url = "http://localhost:20020/course/submit_course";
      axios.post(url, {
        formName: formName,
      }).then(res => {
        console.log(res);
        this.$message.success("提交成功")
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
@import "admin/scss/component/CourseApply.scss";
</style>