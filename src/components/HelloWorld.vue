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
            let a = await window.api.preferencias()

            this.info = a.IP
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