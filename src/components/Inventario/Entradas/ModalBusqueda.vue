<template>
    <div class="contenedor_modal__">
        <div class="cabecera_modal__">
            <b-button type="button" variant="danger" size="sm" @click="salir">Cerrar</b-button>
        </div>
        <div class="cuerpo_contenedor__">
            <div class="formulario_modal__">
                <b-container fluid="">
                    <b-row>
                        <b-col sm="12" class="mt-3">
                            <label for="">Buscar</label>
                            <b-form-input type="text" size="sm" id="busqueda_formulario" placeholder="Escribe algo y presiona enter para buscar" v-model="criterio_busqueda" @keydown.enter="buscar"></b-form-input>
                        </b-col>
                        <b-col sm="12" class="mt-3">
                            <table class="table table-sm table-striped table-bordered" style="font-size: 10px;">
                                <thead>
                                    <tr>
                                        <th style="width: 20%;">
                                            Código
                                        </th>
                                        <th style="width: 65%;">
                                            Nombre
                                        </th>
                                        <th style="width: 15%;text-align: center;">
                                            ...
                                        </th>
                                    </tr>
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
                                            <b-button type="button" style="font-size: 9px;" variant="success" size="sm" @click="seleccionar_elemento(item)"><i class="fas fa-check"></i></b-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ModalBusquedaProducto',
    data() {
        return {
            criterio_busqueda: '',
            lista: []
        }
    },
    methods: {
        salir(){
            this.$emit('cerrar')
        },
        async buscar(){

            let recv = await this.obtenerData({api: `productos/b/buscar/?value=${this.criterio_busqueda.trim().toUpperCase()}`})
            this.lista = recv

        },
        seleccionar_elemento(obj){
            let r = {
                codigo: obj.codigo,
                nombre: obj.descripcion
            }


            this.$emit('seleccion', r)
            this.lista = []
            this.salir()
        },
        ...mapActions(['obtenerData'])
    },
    mounted() {
        document.getElementById('busqueda_formulario').focus()
    },
}
</script>

<style>
    .contenedor_modal__{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0, .4);
    }
        .cabecera_modal__{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            padding-right: 10px;
        }

        .cuerpo_contenedor__{
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .formulario_modal__{
            width: 550px;
            height: 500px;
            background-color: white;
        }
</style>