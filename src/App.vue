<template>
  <div id="app">

    <router-view/>


    <div class="version">
        Vxx: {{this.$store.state.version_app.version}}
    </div>


  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Principal',
  computed: {
    ...mapState(['token_sesion'])
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['obtener_preferencias', 'descargar_datos', 'conexion_socket', 'obtener_version']),
  },
  mounted() {
    // TRIGGER
    this.obtener_preferencias()

    if (this.token_sesion == '' || this.token_sesion == null || this.token_sesion == undefined) {
      console.log('Sesión está cerrada')
    }else{
      setTimeout(() => { // DEBEN CARGAR PRIMERO LAS PREFERENCIAS Y YA CUANDO ESTÉN DISPONIBLES SE OCUPAN PARA LAS SIGUIENTES FUNCIONES
  
        this.descargar_datos() // DESCARGA LOS DATOS PREDETERMINADOS AL INICIAR LA APP
        this.conexion_socket() // LLAMA A LA FUNCION PARA INCIAR CONEXIÓN CON EL SEVIDOR
        this.obtener_version() // OBTIENE LA VERSIÓN ACTUAL DE LA APP
  
      }, 1000);
    }

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
        display: flex;
        flex-direction: row-reverse;
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

  /* Estilos de prueba */

  .version{
    width: 160px;
    height: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -80px;
  }
</style>
