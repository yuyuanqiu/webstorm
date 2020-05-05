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
        <el-col class="outer" v-for="jifen in jifen_card_tongyong" :key="jifen.key">
          <h2>{{ jifen.name }}</h2>
          <el-row type="flex">
            <el-col class="inner" :span="6" v-for="data in jifen.jifen_card" :key="data.id">
              <div class="card">
                <div>
                  <h3>{{ data.name }}</h3>
                </div>
                <el-image style="width: 100px;" :src="data.bg" fit="cover"></el-image>

                <div class="des">{{ data.desc }}</div>
                <!-- <el-button type="text" >点击打开 Message Box</el-button> -->
                <el-button
                  size="small"
                  @click="duihuan(data, $event)"
                  type="primary"
                  class="el-icon-shopping-cart-2"
                >{{ data.price }}鱼丝</el-button>
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
      jifen_card_tongyong: [
        {
          name: "通用特权",
          jifen_card: [
            {
              name: "背景装饰",
              price: 5,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共3天"
            },
            {
              name: "背景装饰",
              price: 10,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共7天"
            },
            {
              name: "背景装饰",
              price: 20,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "背景装饰特权可以对个人空间的背景进行更改，更改特效持续时间共15天"
            },
            {
              name: "个性签名",
              price: 5,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "个性签名特权可以对个人空间的签名进行更改，更改特效持续时间共3天"
            },
            {
              name: "个性签名",
              price: 10,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "个性签名特权可以对个人空间的签名进行更改，更改特效持续时间共7天"
            },
            {
              name: "个性签名",
              price: 20,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "个性签名特权可以对个人空间的签名进行更改，更改特效持续时间共15天"
            }
          ]
        },
        {
          name: "课程专属特权",
          jifen_card: [
            {
              name: "免到堂上课",
              price: 20,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用1次之后失效"
            },
            {
              name: "免到堂上课",
              price: 36,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用2次之后失效"
            },
            {
              name: "免到堂上课",
              price: 49,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用3次之后失效"
            },
            {
              name: "免到堂上课",
              price: 60,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用4次之后失效"
            },
            {
              name: "免到堂上课",
              price: 70,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用5次之后失效"
            },
            {
              name: "免到堂上课",
              price: 80,
              bg: require("assets/img/shop_item_bg.png"),
              desc:
                "免到堂上课特权在通过课程考核之后可不用到教室上课，此特权使用6次之后失效"
            }
          ]
        }
      ]
    };
  },
  methods: {
    duihuan(data, event) {
      console.log(data, event);
      this.$confirm(data.desc, "兑换" + data.name, {
        distinguishCancelAndClose: true,
        confirmButtonText: "兑换",
        cancelButtonText: "取消"
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "兑换成功"
          });
        })
        .catch(action => {
          this.$message({
            type: "info",
            message: action === "cancel" ? "取消兑换" : "取消兑换"
          });
        });
    }
  }
};


</script>

<style lang="scss">
@import "assets/css/shop/Shop.scss";
</style>