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
                        <div class="titulo__">
                            {{obj.attributes.proveedor}} 
                        </div>
                    </b-col>

                    <b-col sm="12" class="mt-3">
                        <label for="">Nombre del proveedor</label>
                        <b-form-input type="text" v-model="proveedor" required size="sm"></b-form-input>
                    </b-col>

                    <b-col sm="12" class="mt-3">
                        <label for="">NIT</label>
                        <b-form-input type="text" v-model="nit" required size="sm"></b-form-input>
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
    name: 'EdicionProveedores',
    props:['obj'],
    data() {
        return {
            proveedor: '',
            nit: '',
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
                api: `proveedores/${this.obj.id}`,
                formulario: {
                    proveedor: this.proveedor.trim().toUpperCase(),
                    nit: this.nit.trim(),
                    telefono: this.telefono
                }
            }

            await this.actualizarData(f)
            this.closeDialog()

        },
        ...mapActions(['actualizarData'])
    },
    mounted() {
        this.proveedor = this.obj.attributes.proveedor
        this.nit = this.obj.attributes.nit
        this.telefono = this.obj.attributes.telefono
    },
}
</script>

<style>

</style>