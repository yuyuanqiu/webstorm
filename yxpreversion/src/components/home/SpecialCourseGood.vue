<template>
  <div id="special-course-good">
    <h3>最新好课推荐</h3>
    <div class="good-course-body">
      <el-row :gutter="20" type="flex">
        <el-col :span="6" v-for="i in 5" :key="i">
          <a href="#" class="grid-content bg-purple">
            <el-image :src="src1" lazy>
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
              <!-- <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>-->
            </el-image>
            <div>
              <div class="lesson-name">
                <span>信息素养：效率提升与终身学习的新引擎</span>
              </div>
              <div class="lesson-info">
                <span>四川大学</span>
                <span>学习人数</span>
              </div>
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="paomadeng">
      <h3>名师专栏</h3> -->

      <!-- // ----------------------------------此功能是在轮播图中一次一次的展示5张图片----------------------------------------------- -->
      <!-- <el-carousel height="270px" :autoplay="false" :loop="false" trigger="click" arrow="always">
        <el-carousel-item v-for="course in 4" :key="course">
          <div class="good-course-body">
            <el-row :gutter="20" type="flex">
              <el-col :span="6" v-for="i in 5" :key="i">
                <a href="/null" class="grid-content bg-purple">
                  <el-image :src="src1">
                    <div slot="placeholder" class="image-slot">
                      加载中
                      <span class="dot">...</span>
                    </div>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <div>
                    <div class="lesson-name">
                      <span>信息素养：效率提升与终身学习的新引擎</span>
                    </div>
                    <div class="lesson-info">
                      <span>四川大学</span>
                      <span>学习人数</span>
                    </div>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      src1: require("assets/img/lessongs-icon/yanjiang.png"),
      courseTotal: [{ a: 5 }, { a: 5 }, { a: 5 }, { a: 5 }, { a: 1 }]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/SpecialCourseGood.scss";
</style>

<style lang="scss">
// ---------------------------强制更改element样式的方法，新建一个style标签，并且不要使用scoped属性即可覆盖
.el-carousel__arrow {
  background-color: rgba(31, 45, 61, 0.3) !important;
}
.el-carousel__indicators,
.el-carousel__indicators--horizontal {
  display: none !important;
  z-index: -1000;
}
</style>