import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      jwt: null,
      userId: null,
      picksLocked: false
    }
  },
  mutations: {

  },
  actions: {

  }
})
