import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: 'no',
    is: '',
    article_content: '',
  },
  mutations: {
    SETIS(state, playload) {
      state.is = playload
    },

    toLogin(state) {
      state.isLogin = 'yes'
    },
    cancelLogin(state) {
      state.isLogin = 'no'
    }
  },
  actions: {

  },
  modules: {
  }
})
