<template>
  <div class="footer-container">
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="logo-bg"></div>
        <p>由各大高校联手推出，让每一个有提升愿望的用户能够学到中国知名高校的课程，并获得认证。</p>
      </el-col>
      <el-col :span="6">
        <div class="aboutme">
          <h3>关于我们</h3>
          <el-row :gutter="20">
            <el-col :span="12">
              <div>关于我们</div>
              <div>联系我们</div>
              <div>意见反馈</div>
            </el-col>
            <el-col :span="12">
              <div>学校云</div>
              <div>常见问题</div>
              <div>法律条款</div>
            </el-col>
          </el-row>
          <!-- 友情链接
网易卡搭编程
网易云课堂
          网易100分-->
        </div>
      </el-col>
      <el-col :span="4" class="friend-links">
        <h3>友情链接</h3>
        <div class="friend-item">
          <div>中国大学MOOC</div>
          <div>慕课网</div>
          <div>腾讯课堂</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="footer-info">
        <small>
          ©2020
          <i>嘉狩予思教育有限公司出品</i>
        </small>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import 'assets/css/FooterContainer.scss';
</style>
