import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is: ''
  },
  mutations: {
    SETIS(state, playload) {
      state.is = playload
    }
  },
  actions: {
  },
  modules: {
  }
})
