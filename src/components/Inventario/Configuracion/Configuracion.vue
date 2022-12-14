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
                <div v-if="sub_categoria == true" class="contenido_oculto">
                    <b-container fluid="">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <label for="">Nombre categoría</label>
                                <b-form-input type="text" v-model="categoria" id="campo_categoria" size="sm" @keydown.enter="guardar"></b-form-input>
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
                                                    <b-button type="button" style="font-size: 11px;margin-right: 5px;" variant="danger" size="sm" @click="eliminar(item.id)"><i class="far fa-trash-alt"></i></b-button>
                                                    <b-button type="button" style="font-size: 11px;" variant="info" size="sm"><i class="fas fa-pen"></i></b-button>
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
    </b-container>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import { minix, pregunta } from '@/components/functions/alertas'
export default {
    name: 'ConfiguracionInventario',
    computed: {
        ...mapState(['categorias'])
    },
    data() {
        return {
            sub_categoria: true, // false


            categoria: ''
        }
    },
    methods: {
        expandir_config(modulo){
            if (modulo == 'categoria') {
                this.sub_categoria = !this.sub_categoria
            }
        },
        async guardar(){

            if (this.categoria == '' || this.categoria == null) {
                minix({icon: 'error', mensaje: 'Debe estar lleno el campo', tiempo: 3000})
                document.getElementById('campo_categoria').focus()
            }else{
                let f = {
                    api: 'categorias',
                    formulario: {
                        categoria: this.categoria.toUpperCase()
                    }
                }
    
                await this.guardarData(f)
            }
            
        },
        async eliminar(id){

            let f = {
                api: 'categorias',
                id
            }

            await this.borrarData(f)
            
        },
        ...mapActions(['guardarData', 'borrarData'])
    },
}
</script>

<style>
    .seccion_configurarcion{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }
        .titulo_configuracion{
            width: 150px;
            height: 35px;
            font-size: 20px;
        }

        .contenido_oculto{
            width: 100%;
            height: 300px;
        }
            .marco_config{
                width: 100%;
                height: 200px;
                
                overflow: auto;
            }
</style>