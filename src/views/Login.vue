<template>
    <div class="cuerpo">
        {{obtener_ip}} : {{puerto}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    name: 'Login',
    computed: {
        ...mapGetters(['obtener_ip', 'puerto'])
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