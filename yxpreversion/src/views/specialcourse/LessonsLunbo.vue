<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li style="cursor: pointer;">
          <img @click="toPath(sliders[sliders.length - 1]._id)" :style="{width:imgWidth+'px'}" :src="'http://localhost:20020' + sliders[sliders.length - 1].big_pic" alt />
        </li >
        <li style="cursor: pointer;" v-for="(item, index) in sliders" :key="index">
          <img @click="toPath(item._id)" :style="{width:imgWidth+'px'}" :src="'http://localhost:20020' + item.big_pic" alt />
        </li>
        <li style="cursor: pointer;">
          <img @click="toPath(sliders[sliders.length - 1]._id)" :style="{width:imgWidth+'px'}" :src="'http://localhost:20020' + sliders[0].big_pic" alt />
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
          style="cursor: pointer;"
        >
          <a>
            {{ dot.course_name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>

import axios from "axios";

export default {
  mounted() {

    this.init();
    let url = "http://localhost:20020/course/course_first";

    axios.post(url, {
      category: this.$route.params.class,
    }).then(res => {
      console.log(res.data);
      this.sliders = res.data;
    })
  },
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
          big_pic: ''
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

  methods: {
    toPath(_id) {
      this.$router.push({path: '/lessoninfo/' + _id})
    },
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
      // console.log(speed);
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
@import "assets/css/specialcourse/LessonsLunbo.scss";
</style>