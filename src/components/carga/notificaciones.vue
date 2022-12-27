<template>
    <div class="obj_notificacion">
        <div v-if="reload" class="recargar">
            <img src="@/assets/reload.gif" style="width: 90%;" alt="">
        </div>
        <div v-if="actualizacion_disponible" class="recargar cursor_" @click="push_version">
            <img src="@/assets/download.png" style="width: 90%;" alt="">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Notificaciones',
    computed: {
        ...mapState(['reload', 'actualizacion_disponible'])
    },
    data() {
        return {
            
        }
    },
    methods: {
        push_version(){
            window.api.send('instalar_actualizacion', true)
            console.log('ejecutar actualizacion')
        }
    },
}
</script>

<style>
    .obj_notificacion{
        width: auto;
        height: 35px;
        display: flex;
    }
        .recargar{
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cursor_{
            cursor: pointer;
        }
</style>