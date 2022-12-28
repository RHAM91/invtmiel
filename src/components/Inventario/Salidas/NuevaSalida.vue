<template>
    <div class="conti">
        <b-container fluid="">
            <form @submit.prevent="guardar">
                <b-row>
                    <b-col sm="10">
                        <label for="">Cliente</label>
                        <b-form-input type="text" required readonly v-model="cliente" size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="2">
                        <b-button type="button" variant="outline-info" block style="margin-top: 32px;" size="sm" @click="openDialog"><i class="fas fa-search"></i></b-button>
                    </b-col>
                </b-row>
            </form>
        </b-container>
        <aside id="popup-detalle-buscar-clientes" class="avgrund-popup">
            <BuscarCliente v-if="ventana_buscar" v-on:cerrar="cerrarModal" v-on:seleccionado="set_data" />
        </aside>
        
        <div class="avgrund-cover"></div>
    </div>
</template>

<script>
import moment from 'moment'

import BuscarCliente from './BuscarClientes.vue'

export default {
    name: 'NuevaSalida',
    components: {
        BuscarCliente
    },
    data() {
        return {
            cliente: '',
            id_cliente: '',
            ventana_buscar: false,
            fecha: moment(Date.now()).format('YYYY-MM-DD')
        }
    },
    methods: {
         openDialog() {
            this.ventana_buscar = true
            show( "#popup-detalle-buscar-clientes" );

        },
        cerrarModal(){
            this.ventana_buscar = false
        },
        set_data(i){
            this.cliente = i.attributes.cliente
            this.id_cliente = i.id
        },
        async guardar(){

        }
    },
}
</script>

<style>

</style>