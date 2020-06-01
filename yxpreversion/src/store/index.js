import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 在开始状态时就赋予值
    user_info : {
      role: localStorage.getItem("role"),
      _id: localStorage.getItem("_id"),
      avatar: localStorage.getItem("avatar"),

      class_name: localStorage.getItem("class_name"),
      id: localStorage.getItem("id"),
      school_id: localStorage.getItem("school_id"),
      student_age: localStorage.getItem("student_age"),
      student_name: localStorage.getItem("student_name"),
      student_point: localStorage.getItem("student_point"),
      page_count: localStorage.getItem("page_count"),
    },
    is_login: localStorage.getItem("is_login")

  },
  getters: {
    get_user(state) {
      return state.user_info;
    },
    get_is_login(state) {
      return state.is_login;
    }

  },
  mutations: {
    set_user_info(state, user_info) {
      state.user_info = user_info.user_info;
    },
    set_is_login(state, status) {
      state.is_login = status;
    },
  },
  actions: {


  },
  modules: {}
})