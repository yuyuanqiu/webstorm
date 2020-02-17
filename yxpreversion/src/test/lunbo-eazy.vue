<template>
  <div>
    <div class="img">
      <img :src="datalist[currentindex]" />
    </div>
    <div class="ctr-img">
      <div>
        <div class="pre" @click="gopage(prei)">&lt;</div>
        <div class="next" @click="gopage(nexti)">&gt;</div>
      </div>
      <div>
        <div
          v-for="(item, index) in datalist"
          :key="index"
          @click="gopage(index)"
          :class="{'current':currentindex == index}"
        >{{index + 1}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentindex: 0,
      datalist: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
      ]
    };
  },
  computed: {
    prei() {
      if (this.currentindex == 0) return this.datalist.length - 1;
      else return this.currentindex - 1;
    },
    nexti() {
      if (this.currentindex == this.datalist.length - 1) return 0;
      else return this.currentindex + 1;
    }
  },
  methods: {
    gopage(index) {
      this.currentindex = index;
    }
  }
};
</script>

<style lang="scss">
.img {
  img {
    width: 600px;
    height: 400px;
  }
}
</style>