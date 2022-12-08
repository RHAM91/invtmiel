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
    ip_api: state =>{ // es para obtener un dato de forma directa
      return state.preferencias.IP
    },
    puerto: state =>{
      return state.preferencias.puerto
    },
    puerto_dev: state =>{
      return state.preferencias.puerto_dev
    },
    sesion_token: state =>{
      return state.token_sesion
    }
  },
  mutations: {
    // SISTEMA
    set_preferencias(state, data){
      state.preferencias = data
    },
    set_token_sesion(state, data){
      state.token_sesion = data
    }
  },
  actions: {
    // SISTEMA

    async obtener_preferencias({commit, state}){
      const r = await window.api.preferencias()
      commit('set_preferencias', r)
    },
    async obtener_token_sesion({commit, state}){

      window.api.send('get_token', '')
      window.api.receive('get_token_', (args)=>{
        commit('set_token_sesion', args)
      })

    }
  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
