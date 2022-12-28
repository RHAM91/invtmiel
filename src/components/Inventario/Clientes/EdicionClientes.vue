<template>
    <div class="contenedor_modal_avgrund">
        <div class="modal_contenedor">
            <div class="cabecera_modal">
                <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
            </div>
            <b-container fluid="">
                <form @submit.prevent="actualizar">
                    <b-row>
                        <b-col sm="12" class="mt-3">
                            <div class="titulo__" style="font-size: 22px;">
                                {{obj.attributes.cliente}} 
                            </div>
                        </b-col>

                        <b-col sm="12" class="mt-3">
                            <label for="">Nombre del cliente</label>
                            <b-form-input type="text" v-model="nombre" required size="sm"></b-form-input>
                        </b-col>

                        <b-col sm="12" class="mt-3">
                            <label for="">Teléfono</label>
                            <b-form-input type="number" v-model="telefono" required size="sm"></b-form-input>
                        </b-col>

                        <b-col sm="12" class="mt-3 d-flex flex-row-reverse">
                            <b-button type="submit" variant="primary" size="sm">Actualizar</b-button>
                        </b-col>
                        
                    </b-row>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'EdicionClientes',
    props:['obj'],
    data() {
        return {
            nombre: '',
            telefono: ''
            
        }
    },
    methods: {
        closeDialog() {
            hide();
            this.$emit('cerrar')
        },
        async actualizar(){

            let f = {
                api: `clientes/${this.obj.id}`,
                formulario: {
                    cliente: this.nombre.trim().toUpperCase(),
                    telefono: this.telefono
                }
            }

            await this.actualizarData(f)
            this.closeDialog()

        },
        ...mapActions(['actualizarData'])
    },
    mounted() {
        this.nombre = this.obj.attributes.cliente
        this.telefono = this.obj.attributes.telefono
    },
}
</script>

<style>

</style>