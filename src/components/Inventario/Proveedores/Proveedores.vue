<template>
    <!-- ESCRITORIO PARA PRODUCTOS, AQUI SE SELECCIONA EL MODULO PARA HACER ALGO -->

    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-2">
                <h3>
                    Proveedores
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
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

7

export default {
    name: 'ProveedoresDash',
    components:{
        
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