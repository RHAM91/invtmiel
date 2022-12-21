<template>
    <!-- ESCRITORIO PARA ENTRADAS, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO -->

    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Entradas
                </h3>
            </b-col>
            <b-col sm="12" class="mt-1">
                <b-tabs content-class="mt-3" style="font-size: 14px;">
                    <b-tab title="Nueva entrada" active @click="set_seccion('NuevaEntrada_')"></b-tab>
                    <!-- <b-tab title="Crear producto" @click="set_seccion('CrearProducto_')"></b-tab> -->
                    <!-- <b-tab title="Second"><p>I'm the second tab</p></b-tab> -->
                </b-tabs>
            </b-col>
            <b-col sm="12">
                <NuevaEntrada v-if="seccion == 'NuevaEntrada_'" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import NuevaEntrada from './NuevaEntrada.vue'

export default {
    name: 'ProductosDash',
    components:{
        NuevaEntrada
    },
    data() {
        return {
            seccion: 'NuevaEntrada_'
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