<template>
    <div class="contenedor_modal_avgrund">
        <b-button type="button" variant="danger" @click="closeDialog">Cerrar</b-button>

        {{obj}}
    </div>
</template>

<script>
export default {
    name: 'DetalleDeProducto',
    props:['obj'],
    data() {
        return {
            
        }
    },
    methods: {
        closeDialog() {
            hide();
        }  
    },
}
</script>

<style>
    
</style>