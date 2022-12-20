<template>
    <div class="modal_contenedor">
        <div class="cabecera_modal">
            <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
        </div>
        <b-container fluid="">
            <b-row>
                <b-col sm="9" class="mt-3">
                    <label for="">Nuevo nombre</label>
                    <b-form-input type="text" id="campo_edit_nombre_marca" v-model="nuevo_nombre_" size="sm"></b-form-input>
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
    name: 'ModalMarcas',
    props:['obj'],
    data() {
        return {
            nuevo_nombre_: '',
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
                api: `marcas/${this.id_obj}`,
                formulario: {
                    marca: this.nuevo_nombre_.trim().toUpperCase()
                }
            }

            await this.actualizarData(f)
            this.closeDialog()

        },
        ...mapActions(['actualizarData'])
    },
    mounted() {
        document.getElementById('campo_edit_nombre_marca').select()
        this.nuevo_nombre_ = this.obj.attributes.marca
        this.id_obj = this.obj.id
    },
}
</script>

<style>
    
</style>