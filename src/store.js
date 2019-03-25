import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    userId: null,
    username: null,
    picksLocked: false,
    totalScore: 0,
    picks: null,
    friends: []
  },
  mutations: {
    UPDATE_USER_INFO: function(state, userObj) {
      state.jwt = userObj.jwt
      state.userId = userObj.userId
      state.username = userObj.username
      state.picksLocked = userObj.picksLocked
      state.totalScore = userObj.totalScore
      state.picks = userObj.picks
      state.friends = userObj.friends
    },
    ADD_FRIEND: function(state, userId) {
      state.friends.push(userId)
    } 
  },
  actions: {

  }
})
