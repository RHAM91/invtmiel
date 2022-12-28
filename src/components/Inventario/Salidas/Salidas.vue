<template>
    <!-- ESCRITORIO PARA SALIDAS, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO -->

    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Salidas
                </h3>
            </b-col>
            <b-col sm="12" class="mt-1">
                <b-tabs content-class="mt-3" style="font-size: 14px;">
                    <b-tab title="Nueva salida" active @click="set_seccion('NuevaSalida_')"></b-tab>
                    <!-- <b-tab title="Crear producto" @click="set_seccion('CrearProducto_')"></b-tab> -->
                    <!-- <b-tab title="Second"><p>I'm the second tab</p></b-tab> -->
                </b-tabs>
            </b-col>
            <b-col sm="12">
                <NuevaSalida v-if="seccion == 'NuevaSalida_'" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import NuevaSalida from './NuevaSalida.vue'

export default {
    name: 'ProductosDash',
    components:{
        NuevaSalida
    },
    data() {
        return {
            seccion: 'NuevaSalida_'
        }
    },
    methods: {
        set_seccion(seccion){
            this.seccion = seccion
        }
    },
}
</script>

<style>

</style>