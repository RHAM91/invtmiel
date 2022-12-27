<template>
    <div class="contenedor_cargando">
        hola mundo
    </div>
</template>

<script>
export default {
    name:'CargandoDatos'
}
</script>

<style>
    .contenedor_cargando{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>