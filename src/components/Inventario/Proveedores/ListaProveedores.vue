<template>
    <div class="conti">
        <b-container fluid="">
            <form @submit.prevent="guardar">
                <b-row>
                    <b-col sm="5" class="mt-2">
                        <label for="">Nombre proveedor</label>
                        <b-form-input type="text" v-model="proveedor" required size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="2" class="mt-2">
                        <label for="">NIT</label>
                        <b-form-input type="text" v-model="nit" required size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="3" class="mt-2">
                        <label for="">Teléfono</label>
                        <b-form-input type="number" v-model="telefono" required size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="2" class="mt-4" >
                        <b-button type="submit" variant="success" style="margin-top: 15px;" block size="sm">Guardar</b-button>
                    </b-col>
                    <b-col sm="12" class="mt-3" >
                        <table class="table table-sm table-striped table-bordered" border="1" style="font-size: 11px;">
                            <thead>
                                <th style="width: 70%;">
                                    Proveedor
                                </th>
                                <th style="width: 10%;text-align: center;">
                                    NIT
                                </th>
                                <th style="width: 10%;text-align: center;">
                                    Teléfono
                                </th>
                                
                                <th style="width: 10%;text-align: center;">
                                    ..
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in proveedores" :key="index">
                                    <td>
                                        {{item.attributes.proveedor}}
                                    </td>
                                    <td style="text-align: center;">
                                        {{item.attributes.nit}}
                                    </td>
                                    <td style="text-align: center;">
                                        {{item.attributes.telefono}}
                                    </td>
                                    <td style="text-align: center;">
                                        <b-button type="button" variant="primary" style="font-size: 10px;margin-right: 5px;" size="sm" @click="openDialog(item)"><i class="fas fa-pen"></i></b-button>
                                        <b-button type="button" variant="danger" style="font-size: 10px;" size="sm" @click="borrar(item.id)"><i class="fas fa-trash-alt"></i></b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </form>
        </b-container>
        <aside id="popup-detalle-proveedores" class="avgrund-popup">
            <EdicionProveedor v-if="ventana_edicion" :obj="obj" v-on:cerrar="cerrarModal" />
        </aside>
        
        <div class="avgrund-cover"></div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import EdicionProveedor from './EdicionProveedores.vue'

export default {
    name: 'ListaProveedores',
    computed: {
        ...mapState(['proveedores'])
    },
    components:{
        EdicionProveedor
    },
    data() {
        return {
            obj:{},
            proveedor: '',
            nit: '',
            telefono: '',
            ventana_edicion: false
        }
    },
    methods: {
        openDialog(o) {
           
            this.obj = o
            this.ventana_edicion = true
            show( "#popup-detalle-proveedores" );

        },
        cerrarModal(){
            this.ventana_edicion = false
        },
        async guardar(){
            let f = {
                api: 'proveedores',
                formulario: {
                    proveedor: this.proveedor.trim().toUpperCase(),
                    nit: this.nit.trim(),
                    telefono: this.telefono
                }
            }

            await this.guardarData(f)
            this.proveedor = ''
            this.nit = ''
            this.telefono = ''

        },
        async borrar(id){
            let f = {
                api: 'proveedores',
                id
            }

            await this.borrarData(f)
        },
        ...mapActions(['guardarData', 'borrarData'])
    },
}
</script>

<style>

</style>