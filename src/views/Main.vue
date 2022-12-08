<template>
    <h1>
        Main
        {{sesion_token_formateado}}
    </h1>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Escritorio',
    computed: {
        ...mapGetters(['sesion_token_formateado'])
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>