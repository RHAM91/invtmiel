<template>
    <b-container fluid="">
        <b-row>
            <b-col sm="12" class="mt-3">
                <h3>
                    Configuración
                </h3>
                <hr>
            </b-col>
            <b-col sm="12" class="mt-3">

                <div class="seccion_configurarcion">
                    <div class="titulo_configuracion">
                        Categorias
                    </div>
                    <b-button v-if="sub_categoria == false" type="button" variant="outline-info" size="sm" @click="expandir_config('categoria')">Ver</b-button>
                    <b-button v-if="sub_categoria == true" type="button" variant="outline-danger" size="sm" @click="expandir_config('categoria')">Ocultar</b-button>
                </div>


                <!-- CATEGORIAS -->

                <div v-if="sub_categoria == true" class="contenido_oculto">
                    <b-container fluid="">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <label for="">Nombre categoría</label>
                                <b-form-input type="text" v-model="categoria" id="campo_categoria" placeholder="Crea una nueva categoría aquí" size="sm" @keydown.enter="guardar_categoria"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <div class="marco_config">
                                    <table class="table table-sm table-striped table-bordered" style="font-size: 11px;">
                                        <thead>
                                            <th style="width: 90%;">
                                                Categoría
                                            </th>
                                            <th style="width: 10%;text-align: center;">
                                                ...
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in categorias" :key="index">
                                                <td>
                                                    {{item.attributes.categoria}}
                                                </td>
                                                <td style="text-align: center;">
                                                    <b-button type="button" style="font-size: 11px;margin-right: 5px;" variant="danger" size="sm" @click="eliminar(item.id, 'categorias')"><i class="far fa-trash-alt"></i></b-button>
                                                    <b-button type="button" style="font-size: 11px;" variant="info" size="sm" @click="openDialog(item, 'categorias')"><i class="fas fa-pen"></i></b-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>

                <!-- BODEGAS -->


                <div class="seccion_configurarcion">
                    <div class="titulo_configuracion">
                        Bodegas
                    </div>
                    <b-button v-if="sub_bodega == false" type="button" variant="outline-info" size="sm" @click="expandir_config('bodega')">Ver</b-button>
                    <b-button v-if="sub_bodega == true" type="button" variant="outline-danger" size="sm" @click="expandir_config('bodega')">Ocultar</b-button>
                </div>

                <div v-if="sub_bodega == true" class="contenido_oculto">
                    <b-container fluid="">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <label for="">Nombre bodega</label>
                                <b-form-input type="text" v-model="bodega" id="campo_bodega" placeholder="Crea una nueva bodega aquí" size="sm" @keydown.enter="guardar_bodega"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <div class="marco_config">
                                    <table class="table table-sm table-striped table-bordered" style="font-size: 11px;">
                                        <thead>
                                            <th style="width: 90%;">
                                                Bodega
                                            </th>
                                            <th style="width: 10%;text-align: center;">
                                                ...
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in bodegas" :key="index">
                                                <td>
                                                    {{item.attributes.bodega}}
                                                </td>
                                                <td style="text-align: center;">
                                                    <b-button type="button" style="font-size: 11px;margin-right: 5px;" variant="danger" size="sm" @click="eliminar(item.id, 'bodegas')"><i class="far fa-trash-alt"></i></b-button>
                                                    <b-button type="button" style="font-size: 11px;" variant="info" size="sm" @click="openDialog(item, 'bodegas')"><i class="fas fa-pen"></i></b-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>

                <hr>
            </b-col>
        </b-row>


        <aside id="popup-detalle-categorias" class="avgrund-popup" style="margin: -300px 0 0 -300px;">
            <ModalEditarCategorias v-if="ventana_categoria" :obj="obj_categoria" v-on:cerrar="cerrar_modal('categorias')" />
            <ModalEditarBodegas v-if="ventana_bodega" :obj="obj_bodega" v-on:cerrar="cerrar_modal('bodegas')" />
        </aside>

        <!-- <aside id="popup-detalle-bodegas" class="avgrund-popup" style="margin: -300px 0 0 -300px;">
            <ModalEditarBodegas v-if="ventana_bodega" :obj="obj_bodega" v-on:cerrar="cerrar_modal_bodega" />
        </aside> -->
        
        <div class="avgrund-cover"></div>
    </b-container>
    
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex'
import { minix, pregunta } from '@/components/functions/alertas'

import ModalEditarCategorias from './ModalCategorias.vue'
import ModalEditarBodegas from './ModalBodegas.vue'

export default {
    name: 'ConfiguracionInventario',
    components:{
        ModalEditarCategorias,
        ModalEditarBodegas
    },
    computed: {
        ...mapState(['categorias', 'bodegas'])
    },
    data() {
        return {
            sub_categoria: false, // false
            sub_bodega: false, // false

            obj_categoria: '',
            obj_bodega: {},
            categoria: '',
            bodega: '',
            ventana_categoria: false,
            ventana_bodega: false
        }
    },
    methods: {
        openDialog(o, modulo) {
            switch (modulo) {
                case 'categorias':
                    this.obj_categoria = o
                    this.ventana_categoria = true
                    show( "#popup-detalle-categorias" );
                    break;
                case 'bodegas':
                    this.obj_bodega = o
                    this.ventana_bodega = true
                    show( "#popup-detalle-categorias" );
                    break;
                default:
                    console.log('No se encuentra conicidencia')
                    break;
            }
        },
        cerrar_modal(modulo){
            switch (modulo) {
                case 'categorias':
                    this.ventana_categoria = false
                    break;
                case 'bodegas':
                    this.ventana_bodega = false
                    break
                default:
                    console.log('No se encuentra conicidencia')
                    break;
            }
        },
        expandir_config(modulo){
        
            switch(modulo){
                case 'categoria':
                    this.sub_categoria = !this.sub_categoria
                    break;
                case 'bodega':
                    this.sub_bodega = !this.sub_bodega
                    break;
                default:
                    console.log('No se encuentran coincidencias')
                    break;
            }
        },
        async guardar_categoria(){

            if (this.categoria == '' || this.categoria == null) {
                minix({icon: 'error', mensaje: 'Debe estar lleno el campo', tiempo: 3000})
                document.getElementById('campo_categoria').focus()
            }else{
                let f = {
                    api: 'categorias',
                    formulario: {
                        categoria: this.categoria.toUpperCase().trim()
                    }
                }
    
                await this.guardarData(f)
                this.categoria = ''
            }
            
        },
        async guardar_bodega(){

            if (this.bodega == '' || this.bodega == null) {
                minix({icon: 'error', mensaje: 'Debe estar lleno el campo', tiempo: 3000})
                document.getElementById('campo_bodega').focus()
            }else{
                let f = {
                    api: 'bodegas',
                    formulario: {
                        bodega: this.bodega.toUpperCase().trim()
                    }
                }
    
                await this.guardarData(f)
                this.bodega = ''
            }
            
        },
        async eliminar(id, modulo){

            await this.borrarData({api: modulo, id})
            
        },
        ...mapActions(['guardarData', 'borrarData']),
        ...mapMutations(['set_ovm'])
    },
}
</script>

<style>
    .seccion_configurarcion{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
        .titulo_configuracion{
            width: 150px;
            height: 35px;
            font-size: 20px;
        }

        .contenido_oculto{
            width: 100%;
            height: 300px;
            margin-bottom: 25px;
        }
            .marco_config{
                width: 100%;
                height: 200px;
                overflow: auto;
            }
</style>