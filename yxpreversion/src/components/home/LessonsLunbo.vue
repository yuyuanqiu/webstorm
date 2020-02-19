<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt />
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px'}" :src="item.img" alt />
        </li>
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt />
        </li>
      </ul>
    </div>
    <div class="dots-div">
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{dotted: i === (currentIndex-1)}"
          @click="jump(i+1)"
        >
          <a href="#">21设计考研系列公开直播</a>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      sliders: [
        {
          img: require("assets/img/lessons-lunbo.png")
        },
        {
          img: require("assets/img/lessons-lunbo.png")
        },
        {
          img: require("assets/img/lessons-lunbo.png")
        },
        {
          img: require("assets/img/lessons-lunbo.png")
        },
        {
          img: require("assets/img/lessons-lunbo.png")
        }
      ],
      imgWidth: 840,
      currentIndex: 1,
      distance: -840,
      transitionEnd: true,
      speed: this.initialSpeed
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      console.log(speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 840)
        : (this.currentIndex -= offset / 840);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -4200) this.distance = -840;
          if (des > -840) this.distance = -3000;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 840;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(840, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/LessonsLunbo.scss";
</style>