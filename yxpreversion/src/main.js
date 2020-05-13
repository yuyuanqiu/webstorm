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


// 暂时存储一个用户信息
// import UserInit from "mocks/user_init";
// Vue.prototype.UserInit = UserInit;
import axios from "axios";

// console.log("UserInit", UserInit.user_info)
// 全局导航守卫 动态配置 title
router.beforeEach((to, from, next) => {

  console.log("to, from", to, from)


  if(to.meta.title === "文章内容") {
    let url = "http://localhost:20020/get_user/get_article_name"
    axios.post(url, {
      article_id: to.params.article_id
    }).then(res => {
      console.log(res.data, "文章内容")
      document.title = "予思课程 | " + res.data[0].article_title
    }).catch(err => {
      console.log(err)
    })

  } else if(to.meta.title) {

    // if(t) {}
    document.title = "予思课程 | " + to.meta.title
  }
  next()
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')