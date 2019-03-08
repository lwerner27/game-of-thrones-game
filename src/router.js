import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from "./views/User"
import Rules from "./views/Rules"
import Register from './views/Register'
import MakePicks from './views/MakePicks'
import Store from './store'

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
      path: "/user/register",
      name: "userRegistration",
      component: Register
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules
    },
    {
      path: "/makepicks",
      name: "Make Picks",
      component: MakePicks,
      beforeEnter: (to, from, next) => {
        if (Store.state.jwt) {
          next() 
        } else {
          next("/")
        }
      }
    }
  ]
})
