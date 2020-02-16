<template>
  <div>
    <div class="home-lessons" v-for="i in 12" :key="i">
      <h2 class="card-head">经济学</h2>
      <div class="card-lessons">
        <div class="card-aside">
          <el-card :body-style="{ padding: '0px', height: 'inherit' }">
            <img src="~assets/img/shouye-kecheng-datu.jpg" class="image" />
            <div class="el-card-divs">
              <a href="#" v-for="i in 3" :key="i">
                <span>统计量抽样分布</span>
                <span>时间</span>
              </a>
            </div>
          </el-card>
        </div>
        <div class="card-body">
          <el-row :gutter="20" type="flex">
            <el-col :span="6" v-for="i in 12" :key="i">
              <a href="#" class="grid-content bg-purple">
                <img src="../../assets/img/lessongs-icon/yanjiang.png" />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-lessons"
};
</script>

<style lang="scss" scoped>
@import "assets/css/HomeLessons.scss";
</style>
