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
        size='small'
      >
        <el-form-item label="课程名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
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
          ></el-cascader>
        </el-form-item>
        <el-form-item label="课程封面" required>
          <el-upload
            class="upload-demo"
            action="/home"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="ruleForm.fileList"
            list-type="picture"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="课程状态" prop="status">
          <el-steps :active="ruleForm.status" align-center >
            <el-step v-for="status in ruleForm.statusList" :key="status.index" :title="status.title"></el-step>
            
          </el-steps>
        </el-form-item>
        <el-form-item label="课程简介" prop="desc" :required="false">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
          <el-button @click="resetForm('ruleForm')">重置申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kecheng: [
        {
          value: "jisuanji",
          label: "计算机",
          children: [
            {
              value: "yizhi",
              label: "程序设计与开发"
            },
            {
              value: "fankui",
              label: "计算机基础与应用"
            },
            {
              value: "xiaolv",
              label: "软件工程"
            },
            {
              value: "kekong",
              label: "网络与安全技术"
            },
            {
              value: "yingruanj",
              label: "硬软件系统及原理"
            },
            {
              value: "yingruanj",
              label: "算法"
            }
          ]
        },
        {
          value: "jisuanji",
          label: "计算机",
          children: [
            {
              value: "yizhi",
              label: "程序设计与开发"
            },
            {
              value: "fankui",
              label: "计算机基础与应用"
            },
            {
              value: "xiaolv",
              label: "软件工程"
            },
            {
              value: "kekong",
              label: "网络与安全技术"
            },
            {
              value: "yingruanj",
              label: "硬软件系统及原理"
            },
            {
              value: "yingruanj",
              label: "算法"
            }
          ]
        },
        {
          value: "jisuanji",
          label: "计算机",
          children: [
            {
              value: "yizhi",
              label: "程序设计与开发"
            },
            {
              value: "fankui",
              label: "计算机基础与应用"
            },
            {
              value: "xiaolv",
              label: "软件工程"
            },
            {
              value: "kekong",
              label: "网络与安全技术"
            },
            {
              value: "yingruanj",
              label: "硬软件系统及原理"
            },
            {
              value: "yingruanj",
              label: "算法"
            }
          ]
        },
        {
          value: "jisuanji",
          label: "计算机",
          children: [
            {
              value: "yizhi",
              label: "程序设计与开发"
            },
            {
              value: "fankui",
              label: "计算机基础与应用"
            },
            {
              value: "xiaolv",
              label: "软件工程"
            },
            {
              value: "kekong",
              label: "网络与安全技术"
            },
            {
              value: "yingruanj",
              label: "硬软件系统及原理"
            },
            {
              value: "yingruanj",
              label: "算法"
            }
          ]
        }
      ],
      ruleForm: {
        name: "",
        id: "",
        category: "",
        fileList: [],
        bgUrl: "",
        dialogImageUrl: "",
        dialogVisible: false,
        status: 0,
        statusList: [
          {
            title: "课程申请",index: 1
          },
          { title: "课程待审核", index: 2 },
          { title: "课程审核通过", index: 3 }
        ],
        desc: '',
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ruleForm.status = 1
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
@import "admin/scss/component/CourseApply.scss";
</style>