<template>
    <div class="conti">
        <b-container fluid="">
            <b-row>
                <b-col sm="10">
                    <label for="">Buscar</label>
                    <b-form-input type="text" id="criterio_busqueda" v-model="criterio_busqueda" size="sm" @keydown.enter="buscar_"></b-form-input>
                </b-col>
                <b-col sm="2" style="margin-top: 32px;" >
                    <b-button type="button" variant="info" block size="sm" @click="buscar_">Buscar</b-button>
                </b-col>

                <b-col sm="12" class="mt-4" >
                    <table class="table table-sm table-striped table-bordered" border="1" style="font-size: 11px;">
                        <thead>
                            <th style="width: 15%;">
                                Código
                            </th>
                            <th style="width: 70%;">
                                Descripción
                            </th>
                            <th style="width: 10%;text-align: center;">
                                Bodega
                            </th>
                            <th style="width: 5%;text-align: center;">
                                ..
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in lista" :key="index">
                                <td>
                                    {{item.codigo}}
                                </td>
                                <td>
                                    {{item.descripcion}}
                                </td>
                                <td style="text-align: center;">
                                    {{item.bodega}}
                                </td>
                                <td style="text-align: center;">
                                    <b-button type="button" variant="warning" style="font-size: 10px;" size="sm" @click="openDialog(item)"><i class="fas fa-info-circle"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-container>
        <aside id="popup-detalle-productos" class="avgrund-popup">
            <DetalleDeProducto v-if="modal_detalle" :obj="obj" v-on:cerrar="cerrarModal" />
        </aside>
        
        <div class="avgrund-cover"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'


import DetalleDeProducto from './DetalleProducto.vue'


export default {
    name: 'ListaProductos',
    components:{
        DetalleDeProducto
    },
    data() {
        return {
            obj: {},
            criterio_busqueda: '',
            lista: [],
            modal_detalle: false
        }
    },
    methods: {
        openDialog(o) {
            this.obj = o
            this.modal_detalle = true
            show( "#popup-detalle-productos" );
        },
        cerrarModal(){
            this.modal_detalle = false
        },
        async buscar_(){

            let recv = await this.obtenerData({api: `productos/b/buscar/?value=${this.criterio_busqueda.trim().toUpperCase()}`})
            this.lista = recv

            document.getElementById('criterio_busqueda').focus()

        },
        ...mapActions(['obtenerData'])
    },
}
</script>

<style>
    .conti{
        
        width: 100%;
        height: calc(100vh - 155px);
        
    }
</style>