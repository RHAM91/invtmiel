<template>
    <div class="conti">
        <aside id="default-popup" class="avgrund-popup">
            Item escondido

            <button @click="closeDialog">Cerrar</button>
        </aside>


    
        <button @click="openDialog">Abrir ventana</button>
        

        <div class="avgrund-cover"></div>
    </div>
</template>

<script>





export default {
    name: 'ListaProductos',
    data() {
        return {
            
        }
    },
    methods: {
        openDialog() {
            show( "#default-popup" );
        },
        closeDialog() {
            hide();
        }
    },
}
</script>

<style>
    .conti{
        width: 100%;
        height: calc(100vh - 150px);
        border: 1px dashed red;
    }
</style>