import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入公共css样式：去除浏览器默认样式
import 'assets/css/common/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import TopContainer from 'components/TopContainer.vue'
import FooterContainer from 'components/FooterContainer.vue'
import BackTop from 'components/common/BackTop.vue'

import CourseList from 'components/common/CourseList.vue'
import ArticleTitle from 'components/common/ArticleTitle'

import ContainerFlex from 'components/common/ContainerFlex'

Vue.component('top-container', TopContainer)
Vue.component('footer-container', FooterContainer)
Vue.component('back-top', BackTop)

Vue.component('course-list', CourseList)
Vue.component('article-title', ArticleTitle)

Vue.component('container-flex', ContainerFlex)





Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
