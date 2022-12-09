<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Principal',
  data() {
    return {
      
    }
  },
  methods: {
    
    ...mapActions(['obtener_preferencias']),
  },
  mounted() {
    this.obtener_preferencias()
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
            padding-left: 15px;
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

</style>
