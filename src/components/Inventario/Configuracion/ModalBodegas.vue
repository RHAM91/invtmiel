<template>
    <div class="modal_contenedor">
        <div class="cabecera_modal">
            <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
        </div>
        <b-container fluid="">
            <b-row>
                <b-col sm="9" class="mt-3">
                    <label for="">Nuevo nombre</label>
                    <b-form-input type="text" id="campo_edit_nombre_bodega" v-model="nuevo_nombre" size="sm"></b-form-input>
                </b-col>
                <b-col sm="3" class="mt-5">
                    
                    <b-button type="button" block variant="info" size="sm" @click="u">Actualizar</b-button>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'ModalBodegas',
    props:['obj'],
    data() {
        return {
            nuevo_nombre: '',
            id_obj: ''
        }
    },
    methods: {
        closeDialog() {
            hide();
            this.$emit('cerrar')
        },
        async u(){

            let f = {
                api: `bodegas/${this.id_obj}`,
                formulario: {
                    bodega: this.nuevo_nombre.trim().toUpperCase()
                }
            }

            await this.actualizarData(f)
            this.closeDialog()

        },
        ...mapActions(['actualizarData'])
    },
    mounted() {
        document.getElementById('campo_edit_nombre_bodega').focus()
        this.nuevo_nombre = this.obj.attributes.bodega
        this.id_obj = this.obj.id
    },
}
</script>

<style>
    
</style>