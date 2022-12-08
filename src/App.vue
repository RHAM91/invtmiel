<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Principal',
  data() {
    return {
      
    }
  },
  methods: {
    
    ...mapActions(['obtener_preferencias']),
  },
  mounted() {
    this.obtener_preferencias()
  },
}
</script>
<style>
</style>
