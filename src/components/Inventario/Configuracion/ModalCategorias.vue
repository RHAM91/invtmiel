<template>
    <div class="modal_contenedor">
        <div class="cabecera_modal">
            <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalCategorias',
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