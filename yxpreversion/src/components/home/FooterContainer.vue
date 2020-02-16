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

<style lang="scss" scoped>
.footer-container {
  color: #999;
  font-size: 12px;
  width: 100%;
  height: 100%;

  .el-row {
    height: 90%;
    &:last-child {
      height: 10%;
      .footer-info {
        // 垂直水平居中对齐方式-----------开始-----------实现底部版权信息垂直水平居中 
        position: relative;
        small {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        // 垂直水平居中对齐方式-----------开始
          i {
            font-style: normal !important;
          }
        }
      }
    }
    .el-col {
      height: 100%;
      .logo-bg {
        width: 50%;
        height: 22%;
        background-image: url(~public/logo.png);
        background-repeat: round;
      }
      p {
        text-align: start;
      }
      h3 {
        font-size: 19px;
        font-weight: 500;
      }
    }
  }
}

.aboutme {
  height: 88%;
  text-align: start;
  h3 {
    font-size: 19px;
    font-weight: 500;
  }
  .el-col {
    div {
      height: 30px;
    }
  }
}

.friend-links {
  h3 {
    text-align: start;
  }
  .friend-item {
    height: 50%;
    text-align: start;
    div {
      height: 30%;
    }
  }
}
</style>
