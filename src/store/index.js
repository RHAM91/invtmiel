import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'kat',
  storage: window.localStorage,
  reducer: state => ({

  }) 
})


export default new Vuex.Store({
  state: {

    // SISTEMA

    token_sesion: '',
    preferencias: {}

  },
  getters: {
    obtener_ip: state =>{ // es para obtener un dato de forma directa
      return state.preferencias.IP
    },
    puerto: state =>{
      return state.preferencias.puerto
    },
    puerto_dev: state =>{
      return state.preferencias.puerto_dev
    }
  },
  mutations: {
    // SISTEMA
    set_preferencias(state, data){
      state.preferencias = data
    }
  },
  actions: {
    // SISTEMA
    
    async obtener_preferencias({commit, state}){
      const r = await window.api.preferencias()
      commit('set_preferencias', r)
    }
  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
