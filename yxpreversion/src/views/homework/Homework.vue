<template>
  <div id="homework">
    <el-row type="flex">
      <el-col>
        <h2>课程考核作业</h2>
        <div class="homework-des">
          <h3>第1题</h3>
          <p>
            根据不同的业务需求来建立数据模型，抽取最有意义的向量，决定选取哪种方法的数据分析角色人员是
            <span>{{ radio }}</span>
          </p>

          <el-radio-group v-model="radio">
            <el-radio label="A">A：数据管理人员</el-radio>
            <el-radio label="B">B：数据分析员</el-radio>
            <el-radio label="C">C：研究科学家</el-radio>
            <el-radio label="D">D：软件开发工程师</el-radio>
          </el-radio-group>
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </el-col>
      <el-col class="homework-others">
        <div>提交：
          <el-button size="mini" type="primary">提交</el-button>
        </div>
        <h3>
          分数：
          <span v-if="success"></span>
          <span v-else>您尚未提交作业</span>
        </h3>
        
        <div>
          <div>答案解析：</div>
          <el-button size="mini" type="primary">点击查看</el-button>
          <div class="el-icon-warning">查看答案前请提交作业</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      success: false
    };
  }
};
</script>

<style lang="scss">
#homework {
  .el-row {
    flex-flow: row wrap;

    min-height: 613px;
    .el-col {
      flex: 1;

      background: #fff;
      padding: 24px 36px;

      &:first-child {
        flex: 3;
        line-height: 1.5;

        h2 {
          font-size: 24px;
          font-weight: 600;
        }

        .homework-des {
          height: 90%;

          position: relative;
          h3 {
            line-height: 3;
          }

          p {
            margin-bottom: 18px;

            span {
              font-weight: 900;
              display: inline-block;
              padding: 0 20px;
              border-bottom: 1px solid black;
            }
          }

          .el-radio-group {
            .el-radio {
              padding: 12px 0;
              display: block;
            }
          }

          .el-pagination {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }

      &.homework-others {
        h3 {
          font-size: 18px;
          line-height: 2;
          margin-bottom: 18px;

          span {
            font-size: 14px;
          }
        }

        & > div {
          font-size: 18px;
          line-height: 2;

          div:last-child {
            display: block;
            font-size: 12px;
            color: #909090;
            padding: 8px 0;
          }
        }
      }
    }
  }
}
</style>


