<template>
  <div id="article">
    <div class="article-head">
      <div>文章标题：</div>
      <el-input v-model="input" placeholder="请输入文章标题"></el-input>
    </div>
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="options"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @change="onEditorChange"
    ></quill-editor>
    <div class="other">
      <el-row type="flex">
        <el-col :span="6">
          <div>文章分类：</div>
        </el-col>
        <el-col :span="6">
          <el-cascader :options="kecheng" :show-all-levels="true"></el-cascader>
        </el-col>
        <el-col :span="6">
          <el-button>发布</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
/**
 * 富文本 vue-quill-editor 组件
 * Author: wangkai
 */
import { quillEditor, Quill } from "vue-quill-editor";
import { ImageExtend, QuillWatch } from "quill-image-extend-module";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Quill.register("modules/ImageExtend", ImageExtend);

export default {
  name: "article",
  components: {
    quillEditor
  },
  data() {
    return {
      input: "",
      content: "",
      options: {},
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
      ]
    };
  },
  model: {
    event: "change"
  },

  methods: {
    // 失去焦点事件
    onEditorBlur(...args) {
      // this.$emit("blur", ...args);
      console.log(...args);
    },
    // 获得焦点事件
    onEditorFocus(...args) {
      this.$emit("focus", ...args);
    },
    // 编辑器文本发生变化
    onEditorChange({ html }) {
      this.$emit("change", html);
      // console.log(html)
      localStorage.setItem("content", html); //设置b为"isaac"
      console.log(localStorage.getItem("content"))
    }
  }
};
</script>


<style lang="scss">
@import "assets/css/article/ArticleEditor.scss";
</style>