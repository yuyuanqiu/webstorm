<template>
  <div class="home-menu">
    <div class="main-1" @mouseleave="shouqi">
      <ul id="home_menu_ul">
        <li :class="icon_arr[index]" v-for="(item, index) in home_category" :key="item.first_level">
          <el-link :underline="false" @click="toPath(item.first_level)">{{ item.first_level }}</el-link>
        </li>
      </ul>
      <div v-if="zhankai" class="el-icon-chat-dot-round" @mouseenter="shouqi">收起</div>
      <div v-else class="el-icon-chat-dot-round" @mouseenter="zhankais">更多</div>
    </div>
    <div class="main-2">
      <div class="main-2-1">
        <el-carousel height="361px" :interval="50000" arrow="always">
          <el-carousel-item v-for="item in lunbo_pic" :key="item._id">
            <!-- <img class="el-image" :src="'http://localhost:20020' + item.big_pic" @click="toPath('/lessoninfo/' + item._id)"> -->
            <el-image
              :title="'http://localhost:20020' + item.big_pic"
              :src="'http://localhost:20020' + item.big_pic"
              @click="toPathss('/lessoninfo/' + item._id)"
            >
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
            <a  class="el-card-a" style="height: 100%;display: inline-block;">
              <el-image :src="src_2" fit="fill"></el-image>
              <!-- <img src="~public/logo_fish.png" class="image" /> -->
              <div style="padding: 14px;">
                <div>下了课就来予思课程</div>
                <div>予思课程MissCourse</div>
                <div>最优质的教学平台</div>
              </div>
            </a>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  created() {
    let url = "http://localhost:20020/get_user/home_categories";

    axios.get(url).then(res => {
      this.home_category = res.data;
    });

    let url2 = "http://localhost:20020/course/home_lunbo";

    axios.get(url2).then(res => {
      console.log(res.data, "lunbo ");
      this.lunbo_pic = res.data;
    });
  },
  name: "home-menu",

  data() {
    return {
      lunbo_pic: [],
      icon_arr: [
        "el-icon-collection",
        "el-icon-news",
        "el-icon-cpu",
        "el-icon-connection",
        "el-icon-video-camera",
        "el-icon-bell",
        "el-icon-service",
        "el-icon-coffee-cup",
        "el-icon-takeaway-box",
        "el-icon-s-management",
        "el-icon-s-open",
        "el-icon-s-marketing",
        "el-icon-copy-document"
      ],
      home_category: [],
      zhankai: false,
      src: "http://localhost:20020/static/images/course_big_pic/3.png",
      src_2: require("public/logo_black.png"),
      props: {
        expandTrigger: "hover"
      }
    };
  },
  methods: {
    toPathss(_id) {
      this.$router.push({path: _id})
    },
    toPath(path) {
      this.$router.push({ path: "/specialcourse/" + path });
    },
    zhankais() {
      let ul = document.getElementById("home_menu_ul");

      ul.className = "zhankai";
      // console.log("zhankai");
      this.zhankai = true;
    },
    shouqi() {
      let ul = document.getElementById("home_menu_ul");
      ul.className = "shouqi";
      // console.log("shouqi");
      this.zhankai = false;
    },

    // --------------------------element组件元素不能实现原生事件----此时可以外层嵌套一个div实现事件

    mouseEnter() {
      // this.changes();
      // console.log("mouseEnter: ");
    },
    // ----------------鼠标移出，隐藏面板
    mouseLeave(e) {
      this.changes();
      // console.log("mouseLeave: ");
    },
    changes(n) {
      // console.log("传入的参数：", n);
      let oP = document.querySelector("#cascader-paner-my");
      // console.log(oP);
      let oo = oP.querySelectorAll(".el-cascader-menu");
      // console.log("oo.length: ", oo.length);

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
@import "assets/css/home/HomeMenu.scss";
</style>
