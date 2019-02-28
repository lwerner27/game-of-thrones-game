import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    userId: null,
    picksLocked: false,
    role: null,
  },
  mutations: {

  },
  actions: {

  }
})
