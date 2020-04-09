<template>
  <div id="shop">
    <div class="shop-title">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
      <div>
        <h2>{{ user.name }}</h2>
        <span>总积分：{{ user.jifen_total }}</span>
        <span>10积分相当于1鱼丝</span>
      </div>
    </div>
    <div class="jifen-card">
      <el-row>
        <el-col class="outer" v-for="i in 2" :key="i">
          <h2>通用</h2>
          <el-row type="flex">
            <el-col class="inner" :span="6" v-for="data in jifen_card" :key="data.name">
              <div class="card">
                <div>
                  <h3>{{ data.name }}</h3>
                </div>
                <el-image style="width: 100px;" :src="data.bg" :fit="cover"></el-image>

                <div class="des">{{ data.desc }}</div>

                <el-button size="small" type="primary" class="el-icon-shopping-cart-2">3鱼丝</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
        
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      user: {
        name: "檀云chanyun",
        jifen_total: 500,
        course_jifen: [
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          },
          {
            course_name: "计算机网络",
            course_jifen: 26
          }
        ]
      },
      jifen_card: [
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共14天"
        },
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共14天"
        },
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共14天"
        },
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共14天"
        },
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共14天"
        },
        {
          name: "背景装饰",
          price: 20,
          bg:
            require("assets/img/shop_item_bg.png"),
          desc:
            "背景装饰特权景进行更改，更改特效持续时间共14天"
        },
        
      ]
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/shop/Shop.scss";
</style>