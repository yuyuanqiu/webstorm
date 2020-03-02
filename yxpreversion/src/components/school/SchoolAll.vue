<template>
  <div id="school-all">
    <div class="title">
      <h3>全部学校</h3>
    </div>
    <div class="school-all-list">
      <el-row  :gutter="20" > 
        <el-col v-for="school in schools" :key="school">
          <el-link :title="school.name" :href="'/school/' + school.name" :underline="false">
            <img :src="school.icon" />
          </el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schools: {
        qinghua: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua1: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua2: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua3: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua4: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua5: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua6: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua7: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua8: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua9: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua10: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua11: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua12: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua13: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua14: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua15: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        },
        qinghua16: {
          name: "qinghua",
          icon: require("assets/img/school-icon/北京大学.png")
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import 'assets/css/school/SchoolAll.scss';
</style>