<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Principal',
  data() {
    return {
      
    }
  },
  methods: {
    
    ...mapActions(['obtener_preferencias', 'obtener_token_sesion']),
  },
  mounted() {
    this.obtener_preferencias()
    this.obtener_token_sesion()
  },
}
</script>
<style>
</style>
