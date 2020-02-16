import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import TopContainer from 'components/home/TopContainer.vue'
import FooterContainer from 'components/home/FooterContainer.vue'
import BackTop from 'components/home/BackTop.vue'

Vue.component('top-container', TopContainer)
Vue.component('footer-container', FooterContainer)
Vue.component('back-top', BackTop)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
