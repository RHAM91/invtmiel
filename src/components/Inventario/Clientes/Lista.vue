<template>
    <div class="conti">
        <b-container fluid="">
            <form @submit.prevent="guardar">
                <b-row>
                    <b-col sm="6">
                        <label for="">Nombre</label>
                        <b-form-input type="text" v-model="nombre" required size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="4" >
                        <label for="">Teléfono</label>
                        <b-form-input type="number" v-model="telefono" size="sm"></b-form-input>
                    </b-col>
                    <b-col sm="2" style="margin-top: 32px;" >
                        <b-button type="submit" variant="info" block size="sm">Guardar</b-button>
                    </b-col>

                    <b-col sm="12" class="mt-4" >
                        <table class="table table-sm table-striped table-bordered" border="1" style="font-size: 11px;">
                            <thead>
                                <th style="width: 75%;">
                                    Cliente
                                </th>
                                <th style="width: 15%;">
                                    Teléfono
                                </th>
                                
                                <th style="width: 10%;text-align: center;">
                                    ..
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in clientes" :key="index">
                                    <td>
                                        {{item.attributes.cliente}}
                                    </td>
                                    <td>
                                        {{item.attributes.telefono}}
                                    </td>
                                    <td style="text-align: center;">
                                        <b-button type="button" variant="primary" style="font-size: 10px;margin-right: 5px;" size="sm" @click="openDialog(item)"><i class="fas fa-pen"></i></b-button>
                                        <b-button type="button" variant="danger" style="font-size: 10px;" size="sm" @click="eliminar(item.id)"><i class="fas fa-trash-alt"></i></b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
            </form>
        </b-container>
         <aside id="popup-detalle-clientes" class="avgrund-popup">
            <EdicionClientes v-if="ventana_edicion" :obj="obj" v-on:cerrar="cerrarModal" />
        </aside>
        
        <div class="avgrund-cover"></div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EdicionClientes from './EdicionClientes.vue'

export default {
    name: 'ListaClientes',
    components:{
        EdicionClientes
    },
    computed: {
        ...mapState(['clientes'])
    },
    data() {
        return {
            nombre: '',
            telefono: '',
            ventana_edicion: false,
            obj: {}
        }
    },
    methods: {
         openDialog(o) {
           
            this.obj = o
            this.ventana_edicion = true
            show( "#popup-detalle-clientes" );

        },
        cerrarModal(){
            this.ventana_edicion = false
        },
        async guardar(){
            let f = {
                api: 'clientes',
                formulario:{
                    cliente: this.nombre.trim().toUpperCase(),
                    telefono: this.telefono.trim()
                }
            }

            await this.guardarData(f)
            this.nombre = ''
            this.telefono = ''

        },
        async eliminar(id){
            let f = {
                api: 'clientes',
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