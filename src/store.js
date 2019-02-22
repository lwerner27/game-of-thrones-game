import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    userId: null,
    leagueId: null,
    picksLocked: false,
    userPicks: [
      {
        name: 'John Snow',
        alive: true,
        whiteWalker: false
      },
      {
        name: "Sansa Stark",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Arya Stark",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Bran Stark",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Cersei Lannister",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Jaime Lannister",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Tyrion Lannister",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Daenerys Targaryen",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Yara Greyjoy",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Melisandre",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Jorah Mormont",
        alive: true,
        whiteWalker: false
      },
      {
        name: "The Hound",
        alive: true,
        whiteWalker: false
      },
      {
        name: "The Mountain",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Samwell Tarley",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Gilly",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Lord Varys",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Brienne",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Davos Seaworth",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Bronn",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Podrick Payne",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Tormund Giantsbane",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Gray Worm",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Gendry",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Beric Dondarrion",
        alive: true,
        whiteWalker: false
      },
      {
        name: "Euron Grayjoy",
        alive: true,
        whiteWalker: false
      },
    ],
    role: null,

  },
  mutations: {

  },
  actions: {

  }
})
