<template>
    <!-- ESCRITORIO PARA PRODUCTOS, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO -->

    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Productos
                </h3>
            </b-col>
            <b-col sm="12" class="mt-1">
                <b-tabs content-class="mt-3" style="font-size: 14px;">
                    <b-tab title="Lista de productos" active @click="set_seccion('ListaProductos_')"></b-tab>
                    <b-tab title="Crear producto" @click="set_seccion('CrearProducto_')"></b-tab>
                    <!-- <b-tab title="Second"><p>I'm the second tab</p></b-tab> -->
                </b-tabs>
            </b-col>
            <b-col sm="12">
                <ListaProductos v-if="seccion == 'ListaProductos_'" />
                <CrearProducto v-if="seccion == 'CrearProducto_'" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import CrearProducto from '@/components/Inventario/Productos/CrearProducto.vue'
import ListaProductos from '@/components/Inventario/Productos/ListaProductos.vue'

export default {
    name: 'ProductosDash',
    components:{
        CrearProducto,
        ListaProductos
    },
    data() {
        return {
            seccion: 'ListaProductos_'
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