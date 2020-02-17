<template>
  <div class="home-menu">
    <div class="main-1" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <el-cascader-panel
        :props="props"
        id="cascader-paner-my"
        @change="changes"
        @expand-change="clicks"
        :options="options"
      ></el-cascader-panel>
    </div>
    <div class="main-2">
      <div class="main-2-1">
        <el-carousel height="361px" :interval="50000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main-3">
      <el-row>
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px', height: '360px' }">
            <a href="#" class="el-card-a">
              <img src="~assets/img/广告.png" class="image" />
              <div style="padding: 14px;">
                <div>下了课就来予思MOOC</div>
                <div>嘉狩予思出品</div>
              </div>
            </a>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-menu",
  data() {
    return {
      src: require("assets/img/login.png"),
      props: {
        expandTrigger: "hover"
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  methods: {

    // --------------------------element组件元素不能实现原生事件----此时可以外层嵌套一个div实现事件

    mouseEnter() {
      // this.changes();
      console.log("mouseEnter: ");
    },
    // ----------------鼠标移出，隐藏面板
    mouseLeave(e) {
      this.changes()
      console.log("mouseLeave: ");
    },
    changes(n) {
      console.log("传入的参数：", n);
      let oP = document.querySelector("#cascader-paner-my");
      // console.log(oP);
      let oo = oP.querySelectorAll(".el-cascader-menu");
      console.log("oo.length: ", oo.length);

      // 此处的功能是在点击级联面板时，隐藏打开的子级菜单

      switch (oo.length) {
        case 2: {
          oo[1].style.visibility = "hidden";
          break;
        }
        case 3: {
          oo[1].style.visibility = "hidden";
          oo[2].style.visibility = "hidden";
          break;
        }
        case 4: {
          oo[1].style.visibility = "hidden";
          oo[2].style.visibility = "hidden";
          oo[3].style.visibility = "hidden";
          break;
        }
        case 5: {
          oo[1].style.visibility = "hidden";
          oo[2].style.visibility = "hidden";
          oo[3].style.visibility = "hidden";
          oo[4].style.visibility = "hidden";
          break;
        }
      }
    },
    clicks() {
      let oP = document.querySelector("#cascader-paner-my");

      let oo = oP.querySelectorAll(".el-cascader-menu");

      // 此处的功能是在点击级联面板时，显示之前隐藏的菜单

      switch (oo.length) {
        case 2: {
          oo[1].style.visibility = "visible";
          break;
        }
        case 3: {
          oo[1].style.visibility = "visible";
          oo[2].style.visibility = "visible";
          break;
        }
        case 4: {
          oo[1].style.visibility = "visible";
          oo[2].style.visibility = "visible";
          oo[3].style.visibility = "visible";
          break;
        }
        case 5: {
          oo[1].style.visibility = "visible";
          oo[2].style.visibility = "visible";
          oo[3].style.visibility = "visible";
          oo[4].style.visibility = "visible";
          break;
        }
      }
    }
    // getCheckedNodes(n) {
    //   console.log(n)

    // }
  }
};
</script>

<style lang="scss">
@import "assets/css/HomeMenu.scss";
</style>
