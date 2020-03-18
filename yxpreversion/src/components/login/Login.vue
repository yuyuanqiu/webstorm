<template>
  <div id="login">
    <el-card>
      <el-row type="flex" class="row-bg">
        <el-col :span="12">
          <div class="l-welcome">
            <h2 class="l-zh">欢迎来到予思课程</h2>
            <h2 class="l-us">Welcome to MissCourse</h2>
            <div class="l-info">
              <div class="l-info-1">
                <i class="el-icon-s-flag"></i>
                <div>
                  <h3>灵活自由</h3>
                  <p>无时无刻享受精品课程</p>
                </div>
              </div>
              <div class="l-info-1">
                <i class="el-icon-s-flag"></i>
                <div>
                  <h3>随时交流</h3>
                  <p>无时无刻与老师同学讨论学习</p>
                </div>
              </div>
              <div class="l-info-1">
                <i class="el-icon-s-flag"></i>
                <div>
                  <h3>实时更新</h3>
                  <p>下载课程最新资料</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="login"></div>
          <div class="registe"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/css/login/Login.scss";
</style>