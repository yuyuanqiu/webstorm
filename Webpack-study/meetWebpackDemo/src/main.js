const {add, mul} = require('./js/mathUtils')

console.log(add(1, 2))
console.log(mul(2, 3))


import  './css/basic.css'
import './css/special.less'

import Vue from 'vue';

// 为了便于开发，进行代码分离，分离成一个个组件
import app from './vue/app.vue';

new Vue({
  el: '#app',
  // 如果同时有el和template时，el元素的内容最终会被template替换，
  template: `<app/>`,
  components: {
    app,
  }
})