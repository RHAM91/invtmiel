<template>
    <div class="contenedor_modal_avgrund">
        <div class="modal_contenedor">
            <div class="cabecera_modal">
                <b-button type="button" variant="outline-danger" size="sm" @click="salir">Cerrar</b-button>
            </div>
            <b-container fluid="">
                <b-row>
                    <b-col sm="12" class="mt-3">
                        <b-input-group size="sm">
                            <b-input-group-prepend is-text>
                                <b-icon icon="search"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="search" v-model="search" id="campo_busqueda_proveedores" size="sm" placeholder="Buscar" autocomplete="off"></b-form-input>
                        </b-input-group>

                    </b-col>
                    <b-col sm="12" class="mt-3">
                        <table class="table table-sm table-striped table-bordered" style="font-size: 11px;">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">
                                        NIT
                                    </th>
                                    <th style="width: 65%;">
                                        Proveedor
                                    </th>
                                    <th style="width: 15%;text-align: center;">
                                        ...
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in r_proveedores" :key="index">
                                    <td>
                                        {{item.attributes.nit}}
                                    </td>
                                    <td>
                                        {{item.attributes.proveedor}}
                                    </td>
                                    <td style="text-align: center;">
                                        <b-button type="button" variant="success" style="font-size: 9px;" size="sm" @click="seleccionar(item)"><i class="fas fa-check"></i></b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
                   
            </b-container>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ModalBusquedaProveedores',
    computed: {
        search:{
            get(){
                return this.$store.state.filtros.filtro_proveedores
            },
            set(val){
                this.$store.commit('set_filtro_proveedores', val)
            }
        },
        ...mapGetters({
            r_proveedores: 'filtro_proveedores_'
        })
    },
    data() {
        return {
            
        }
    },
    methods: {
        salir(){
            hide();
            this.$emit('cerrar')
        },
        seleccionar(obj){
            this.$emit('seleccionado', obj)
            this.search = ''
            this.salir()
        }
    },
    mounted() {
        document.getElementById('campo_busqueda_proveedores').focus()
        console.log('ola')
        
    },

}
</script>

<style>

</style>