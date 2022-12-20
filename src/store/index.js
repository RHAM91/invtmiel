import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersist from 'vuex-persist'
import { minix, pregunta } from '../components/functions/alertas'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'kat',
  storage: window.localStorage,
  reducer: state => ({
    token_sesion: state.token_sesion
  }) 
})


export default new Vuex.Store({
  state: {

    // SISTEMA

    token_sesion: '',
    preferencias: {},
    rutas: [
      {api:'categorias?sort=categoria', set: 'set_categorias'},
      {api:'bodegas?sort=bodega', set: 'set_bodegas'},
      {api:'marcas?sort=marca', set: 'set_marcas'},
      {api:'proveedores?sort=proveedor', set: 'set_proveedores'},
    ],

    //PRODUCCION
    categorias: [],
    bodegas: [],
    marcas: [],
    proveedores:[],

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
    },
    sesion_token_formateado: state =>{
      let token_formateado = {
        headers:{
          Authorization: `Bearer ${state.token_sesion}`
        }
      }

      return token_formateado
    }
  },
  mutations: {
    // SISTEMA
    set_preferencias(state, data){
      state.preferencias = data
    },
    set_token_sesion(state, data){
      state.token_sesion = data
    },

    // PRODUCCION

    set_categorias(state, data){
      state.categorias = data
    },
    set_bodegas(state, data){
      state.bodegas = data
    },
    set_marcas(state, data){
      state.marcas = data
    },
    set_proveedores(state, data){
      state.proveedores = data
    }
  },
  actions: {
    // SISTEMA

    async obtener_preferencias({commit, state}){
      const r = await window.api.preferencias()
      commit('set_preferencias', r)
    },
    async guardarData({commit, state, dispatch}, data){
      try {

        const config = {
          method: 'post',
          url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          },
          data: {
            data: data.formulario
          }
        }

        const r = await axios(config)

        if (r.status == 200) {
          minix({icon: 'success', mensaje: 'GUARDADO CON EXITO', tiempo: 3000})
        }else{
          minix({icon: 'info', mensaje: 'HUBO UN ERROR AL GUARDAR', tiempo: 6000})
        }

      } catch (error) {

        if (error.response.status == 400) {
          if (error.response.data.error.message == 'This attribute must be unique') {
            minix({icon: 'error', mensaje: 'Este código ya está en uso', tiempo: 6000})    
          }
        }else{
          minix({icon: 'error', mensaje: error.message, tiempo: 6000})
          console.warn(error)
        }

      }
    },
    async obtenerData({commit, state, dispatch}, data){
      try {
        const config = {
          method: 'get',
          url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          }
        }

        let r = await axios(config)
        
        if (r.status == 200) {

          if (r.data.length == 0) {
            
            minix({icon: 'info', mensaje: 'No hay registros', tiempo: 6000})
            return []

          }else{
            return r.data
          }

        }else{
          return []
        }

      } catch (error) {
        console.log(error)
      }
    },
    async borrarData({commit, state, dispatch}, data){
      try {
        
        const config = {
          method: 'delete',
          url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${data.api}/${data.id}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          }
        }

        pregunta({titulo: 'Seguro que deseas borrarlo?', texto: 'Está acción no se puede revertir', afirmacion: 'Si, borrarlo!'}, async (i) =>{
            if (i) {

              const r = await axios(config)
              
              if (r.status == 200) {
                minix({icon: 'success', mensaje: 'BORRADO :)', tiempo: 3000})
              }else{
                minix({icon: 'info', mensaje: 'HUBO UN ERROR AL BORRAR', tiempo: 6000})
                console.log(r.data)
              }
                
            }
        })


      } catch (error) {
        console.log(error)
      }
    },
    async actualizarData({commit, state, dispatch}, data){
      try {
        const config = {
          method: 'put',
          url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${data.api}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.token_sesion}`
          },
          data: {
            data: data.formulario
          }
        }

        const r = await axios(config)

        if (r.status == 200) {
          minix({icon: 'success', mensaje: 'ACTUALIZADO :)', tiempo: 3000})
        }else{
          minix({icon: 'info', mensaje: 'HUBO UN ERROR AL ACTUALIZAR', tiempo: 6000})
          console.log(r.data)
        }

      } catch (error) {
        
      }
    },

    // ACTUALIZA LOS MODULOS QUE VIENEN POR SOCKET

    async actualizar_modulo({commit, state, dispatch}, modulo){

      const config = {
        method: 'get',
        url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${modulo.api}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token_sesion}`
        }
      }
      
      const d = await axios(config)
      commit(modulo.set, d.data.data)
    },

    // DESCARGA LOS DATOS PREDEFINIDIOS COMO: CATEGORIAS, USUARIOS, PERMISOS, ETC

    async descargar_datos({commit, state, dispatch}){ 

      try {

        for (let i = 0; i < state.rutas.length; i++) {
          const e = state.rutas[i];
        
  
          const config = {
            method: 'get',
            url: `http://${state.preferencias.IP}:${state.preferencias.puerto}/api/${e.api}`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${state.token_sesion}`
            }
          }
          
          const d = await axios(config)
          
          if (d.status == 200) {
            commit(e.set, d.data.data)
          }
  
       }
        
      } catch (error) {
        minix({icon: 'error', mensaje: 'Un error ha ocurrido, revisa la consola :)', tiempo: 3000})

        console.error(error)
      }
      
    }
  },
  plugins: [vuexPersist.plugin],
  modules: {
  }
})
