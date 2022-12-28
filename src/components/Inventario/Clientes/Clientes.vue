<template>
    <!-- ESCRITORIO PARA ENTRADAS, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO -->

     <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Clientes
                </h3>
            </b-col>
            <b-col sm="12" class="mt-1">
                <b-tabs content-class="mt-3" style="font-size: 14px;">
                    <b-tab title="Lista de clientes" active @click="set_seccion('Lista_')"></b-tab>
                    
                    <!-- <b-tab title="Second"><p>I'm the second tab</p></b-tab> -->
                </b-tabs>
            </b-col>
            <b-col sm="12">
                <!-- <NuevaEntrada v-if="seccion == 'NuevaEntrada_'" /> -->

                <Lista v-if="seccion == 'Lista_'" />
                
            </b-col>
        </b-row>
    </b-container>

</template>

<script>

import Lista from './Lista.vue'

export default {
    name: 'Clientes',
    components:{
        Lista,
    },
    data() {
        return {
            seccion: 'Lista_'
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