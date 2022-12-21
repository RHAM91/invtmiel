<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { io } from 'socket.io-client'

export default {
  name: 'Principal',
  computed: {
    ...mapGetters(['ip_api', 'puerto'])
  },
  data() {
    return {
      
    }
  },
  methods: {
    async iniciar_conexion_socket(){
      const SERVER_URL = `http://${this.ip_api}:${this.puerto}`
      const socket = io(SERVER_URL, { transports : ['websocket'] })

      socket.on("connect", ()=>{
        socket.on("message:bienvenida", (data)=>{
          console.log(data)
        })

        socket.on("action:update",(data)=>{
          this.actualizar_modulo(data)
        })
      })

    },
    ...mapActions(['obtener_preferencias', 'descargar_datos','actualizar_modulo']),
  },
  mounted() {
    // TRIGGER
    this.obtener_preferencias()
    setTimeout(() => { // DEBEN CARGAR PRIMERO LAS PREFERENCIAS Y YA CUANDO ESTÉN DISPONIBLES SE OCUPAN PARA LAS SIGUIENTES FUNCIONES

      this.descargar_datos() // DESCARGA LOS DATOS PREDETERMINADOS AL INICIAR LA APP
      this.iniciar_conexion_socket() // ACTUALIZA EN TIEMPO REAL LOS CAMBIOS QUE SE PRODUZCAN 

    }, 1000);
  },
}
</script>
<style>
  /* Estilos de plantilla */
  .contenedor_inicio{
        width: 100%;
        height: 100vh;
    }

    .franja_{
        width: 100%;
        height: 35px;
        background-color: #6a43b0;
    }

    .contenedor_secciones{
        width: 100%;
        height: calc(100% - 35px);
        display: flex;
    }
        .seccion_menu{
            width: 150px;
            height: 100%;
            border-right: 1px solid #e6e6e6;
            background-color: #faf9fd;
        }

        .seccion_cuerpo{
            width: calc(100% - 150px);
            height: 100%;
            
        }

/* Estilos de menu */

    .contenedor_menu{
        width: 100%;
        height: auto;
        padding: 5px;
        color: #555459;
    }
        .btn_menu{
            width: 100%;
            height: 30px;
            font-size: 14px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            border-radius: 5px;
            cursor: pointer;
            user-select: none;
            transition: .4s ease;
            
        }

        .btn_menu:hover{
            background-color: #e8e7ec;
        }

        .titulo_moduloX {
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #e6e6e6;
        }

        .icono_boton{
          width: 20px;
          height: 20px;
          margin-right: 7px;
          margin-left: 7px;
        }

  /* Estilos de la ventana modal avgrund */

  .contenedor_modal_avgrund{
        width: 100%;
        height: 100%;
    }

    /* Estilos dentro modal avgrund */

    .modal_contenedor{
        width: 100%;
        height: auto;
    }
        .cabecera_modal{
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            padding-right: 10px;
        }

  
  
</style>
