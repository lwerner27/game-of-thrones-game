import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    userId: null,
    picksLocked: false,
    totalScore: 0
  },
  mutations: {
    UPDATE_USER_INFO: function(state, userObj) {
      state.jwt = userObj.jwt
      state.userId = userObj.userId
      state.picksLocked = userObj.picksLocked
      state.totalScore = userObj.totalScore
    }
  },
  actions: {

  }
})
