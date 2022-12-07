<template>
    <div class="contenedor">
        #: {{info}}
    </div>
</template>

<script>

// import { a } from '../config/parametros'

export default {
    data() {
        return {
            info: ''
        }
    },
    methods: {
        async incio(){
            console.log(await window.api.preferencias())
        }
    },
    mounted() {
    //    this.info = a.IP
        this.incio()
    },
}
</script>

<style>

</style>