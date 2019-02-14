import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from "./views/User"
import League from './views/League'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
    {
      path: "/league",
      name: "league",
      component: League
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
})
