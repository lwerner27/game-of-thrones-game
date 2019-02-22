import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    userId: null,
    leagueId: null,
    picksLocked: false,
    userPicks: {
      johnSnow: {
        name: 'John Snow',
        alive: true,
        whiteWalker: false
      },
      sansaStark: {
        name: "Sansa Stark",
        alive: true,
        whiteWalker: false
      },
      aryaStark: {
        name: "Arya Stark",
        alive: true,
        whiteWalker: false
      },
      branStark: {
        name: "Bran Stark",
        alive: true,
        whiteWalker: false
      },
      cerseiLannister: {
        name: "Cersei Lannister",
        alive: true,
        whiteWalker: false
      },
      jaimeLannister: {
        name: "Jaime Lannister",
        alive: true,
        whiteWalker: false
      },
      tyrionLannister: {
        name: "Tyrion Lannister",
        alive: true,
        whiteWalker: false
      },
      daenerysTargaryen: {
        name: "Daenerys Targaryen",
        alive: true,
        whiteWalker: false
      },
      yaraGreyjoy: {
        name: "Yara Greyjoy",
        alive: true,
        whiteWalker: false
      },
      melisandre: {
        name: "Melisandre",
        alive: true,
        whiteWalker: false
      },
      jorahMormont: {
        name: "Jorah Mormont",
        alive: true,
        whiteWalker: false
      },
      theHound: {
        name: "The Hound",
        alive: true,
        whiteWalker: false
      },
      theMountain: {
        name: "The Mountain",
        alive: true,
        whiteWalker: false
      },
      samwellTarley: {
        name: "Samwell Tarley",
        alive: true,
        whiteWalker: false
      },
      gilly: {
        name: "Gilly",
        alive: true,
        whiteWalker: false
      },
      lordVarys: {
        name: "Lord Varys",
        alive: true,
        whiteWalker: false
      },
      brienne: {
        name: "Brienne",
        alive: true,
        whiteWalker: false
      },
      davosSeaworth: {
        name: "Davos Seaworth",
        alive: true,
        whiteWalker: false
      },
      bronn: {
        name: "Bronn",
        alive: true,
        whiteWalker: false
      },
      podrickPayne: {
        name: "Podrick Payne",
        alive: true,
        whiteWalker: false
      },
      tormundGiantsbane: {
        name: "Tormund Giantsbane",
        alive: true,
        whiteWalker: false
      },
      greyWorm: {
        name: "Gray Worm",
        alive: true,
        whiteWalker: false
      },
      gendry: {
        name: "Gendry",
        alive: true,
        whiteWalker: false
      },
      bericDondarrion: {
        name: "Beric Dondarrion",
        alive: true,
        whiteWalker: false
      },
      euronGrayjoy: {
        name: "Euron Grayjoy",
        alive: true,
        whiteWalker: false
      },
    },
    role: null,

  },
  mutations: {

  },
  actions: {

  }
})
