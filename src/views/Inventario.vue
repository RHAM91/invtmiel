<template>
    <!-- VISTA PRINCIPAL INVENTARIO -->
    <div class="contenedor_inicio">
        <div class="franja_">

        </div>
        <div class="contenedor_secciones">
            <!-- MENU PARA BOTONES -->
            <div class="seccion_menu"> 
                <div class="titulo_moduloX">
                    <!-- TITULO DEL MODULO -->
                    Inventario
                </div>

                <div class="contenedor_menu">
                    <!-- SECCION DONDE VAN LOS BOTONES DEL MENU -->
       
                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-truck-loading"></i>
                        </div>
                        Salidas
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-dolly-flatbed"></i>
                        </div>
                        Entradas
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-boxes"></i>
                        </div>
                        Productos
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-users"></i>
                        </div>
                        Clientes
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        Proveedores
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-th"></i>
                        </div>
                        Inventario
                    </div>

                    <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-cogs"></i>
                        </div>
                        Configuración
                    </div>

                </div>
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
   
</style>