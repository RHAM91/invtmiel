<template>
    <!-- VISTA PRINCIPAL INVENTARIO -->
    <div class="contenedor_inicio">
        <div class="franja_">

        </div>
        <div class="contenedor_secciones">
            <!-- MENU PARA BOTONES -->
            <div class="seccion_menu"> 

            </div>
            
            <!-- CONTENEDOR -->

            <div class="seccion_cuerpo">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VistaInventario',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style>
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
</style>