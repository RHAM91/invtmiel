<template>
    <!-- ESCRITORIO PARA PROVEEDORES, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO (pestañas)-->

    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Proveedores
                </h3>
            </b-col>
            <b-col sm="12" class="mt-1">
                <b-tabs content-class="mt-3" style="font-size: 14px;">
                    <b-tab title="Lista de proveedores" active @click="set_seccion('ListaProveedores_')"></b-tab>
                    <!-- <b-tab title="Crear proveedor" @click="set_seccion('CrearProveedor_')"></b-tab> -->
                    <!-- <b-tab title="Second"><p>I'm the second tab</p></b-tab> -->
                </b-tabs>
            </b-col>
            <b-col sm="12">
                
                <ListaProveedores v-if="seccion == 'ListaProveedores_'" />

            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import ListaProveedores from './ListaProveedores.vue'

export default {
    name: 'ProveedoresDash',
    components:{
        ListaProveedores
    },
    data() {
        return {
            seccion: 'ListaProveedores_'
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