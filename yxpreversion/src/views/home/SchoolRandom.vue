<template>
  <div class="school-random">
    <el-row type="flex" justify="space-around">
      <!-- <el-col :schools="schools" v-for="school in schools" :key="school" 
      :span=4>
      <div>
        <a>
          <img src="../../assets/img/school-icon/南京大学.png">
        </a>
      </div>

      </el-col>-->
      <el-col :span="4" v-for="random_school in school_random" :key="random_school.id">
        <div class="el-col-div-1">
          <a href="#">
            <img :src="random_school.url" />
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "school-random",
  data() {
    return {
      school_random: [
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
        {
          url: require("assets/img/school_huibiao/" + Math.ceil(Math.random() * 12) + ".png")
        },
      ],
      schools: [
        "../../assets/img/school-icon/北京大学.png",
        "../../assets/img/school-icon/南京大学.png",
        "../../assets/img/school-icon/哈尔滨工业大学.png",
        "../../assets/img/school-icon/武汉大学.png",
        "../../assets/img/school-icon/浙江大学.png"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.school-random {
  clear: both;
  width: 100%;
  height: 63px;
  // background: yellowgreen;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  margin: 20px 0;

  background: #fff;
}

.el-row {
  // margin-bottom: 20px;
  width: 100%;
  height: 100%;
  &:last-child {
    margin-bottom: 0;
  }

  .el-col {
    width: 52%;

    &-div-1 {
      width: 100%;
      height: 100%;
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: relative;
        img {
          width: 75%;
          height: 75%;
          // 水平垂直居中对齐
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>