<template>
    <!-- VISTA PRINCIPAL INVENTARIO -->
    <div class="contenedor_inicio">
        <div class="franja_">
            <Notificaciones />
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

                    <div class="btn_menu" @click="set_modulo('entradas')">
                        <div class="icono_boton">
                            <i class="fas fa-dolly-flatbed"></i>
                        </div>
                        Entradas
                    </div>

                    <div class="btn_menu" @click="set_modulo('productos')">
                        <div class="icono_boton">
                            <i class="fas fa-boxes"></i>
                        </div>
                        Productos
                    </div>

                    <!-- <div class="btn_menu">
                        <div class="icono_boton">
                            <i class="fas fa-users"></i>
                        </div>
                        Clientes
                    </div> -->

                    <div class="btn_menu" @click="set_modulo('proveedores')">
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

                    <div class="btn_menu" @click="set_modulo('configuracion')">
                        <div class="icono_boton">
                            <i class="fas fa-cogs"></i>
                        </div>
                        Configuración
                    </div>

                    <div class="retornar_a_main btn_menu" @click="retornar">
                        <div class="icono_boton">
                            <i class="fas fa-bars"></i>
                        </div>
                        Escritorio
                    </div>


                </div>
            </div>

            <!-- CONTENEDOR -->

            <div class="seccion_cuerpo">

                <Productos v-if="modulo == 'productos'" />
                <Configuracion v-if="modulo == 'configuracion'" />
                <Proveedores v-if="modulo == 'proveedores'" />
                <Entradas v-if="modulo == 'entradas'" />

            </div>
        </div>
    </div>
</template>

<script>

import Productos from '@/components/Inventario/Productos/Productos.vue'
import Configuracion from '@/components/Inventario/Configuracion/Configuracion.vue'
import Proveedores from '@/components/Inventario/Proveedores/Proveedores.vue'
import Entradas from '@/components/Inventario/Entradas/Entradas.vue'

import Notificaciones from '@/components/carga/notificaciones.vue'

export default {
    name: 'VistaInventario',
    components:{
        Productos,
        Configuracion,
        Proveedores,
        Entradas,

        Notificaciones
    },
    data() {
        return {
            modulo: ''
        }
    },
    methods: {
        set_modulo(modulo){
            this.modulo = modulo
        },
        retornar(){
            this.$router.replace('Main')
            //this.$router.push('Main')

        }
    },
}
</script>

<style>
    .retornar_a_main{
        width: 150px;
        height: 35px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>