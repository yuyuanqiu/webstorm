<template>
  <div id="school-title">
    <div class="bg" :style="'background-image: url(' + school.bg + ')'"></div>
    
    <div class="jianjie">
      <img :src="school.icon" :alt="school.value" :title="school.value" />
      <h2>{{ school.value }}</h2>
      <div>{{ school.jianjie }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: {
        name: "beijingdaxue",
        value: "北京大学",
        icon: require("assets/img/school-title-icon.jpg"),
        bg: require("assets/img/school-title-bg.jpg"),
        jianjie:
          "北京大学创办于1898年，初名京师大学堂，是中国第一所国立综合性大学，也是当时中国最高教育行政机关。辛亥革命后，于1912年改为现名。 学校为教育部直属全国重点大学，国家“211工程”、“985工程”建设大学、C9联盟，以及东亚研究型大学协会、国际研究型大学联盟、环太平洋大学联盟、东亚四大学论坛的重要成员。"
      }
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/school/SchoolTitle.scss";
</style>