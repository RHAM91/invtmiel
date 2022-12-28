<template>
    <div class="contenedor_modal_avgrund">
        <div class="modal_contenedor">
            <div class="cabecera_modal">
                <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
            </div>
            <b-container fluid="">
                <b-row>
                    <b-col sm="12" class="mt-3">
                        <b-input-group size="sm">
                            <b-input-group-prepend is-text>
                                <b-icon icon="search"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="search" v-model="search" size="sm" placeholder="Buscar" autocomplete="off"></b-form-input>
                        </b-input-group>
                    </b-col>

                    <b-col sm="12" class="mt-3">
                        <table class="table table-sm table-striped table-bordered" style="font-size: 11px">
                            <thead>
                                <tr>
                                    <th style="width: 10%;">
                                        ID
                                    </th>
                                    <th style="width: 80%;">
                                        Proveedor
                                    </th>
                                    <th style="width: 10%;text-align: center;">
                                        ...
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in r_clientes" :key="index">
                                    <td>
                                        {{item.id}}
                                    </td>
                                    <td>
                                        {{item.attributes.cliente}}
                                    </td>
                                    <td style="text-align: center">
                                        <b-button type="button" style="font-size: 10px;" variant="success" size="sm" @click="seleccion(item)"><i class="fas fa-check"></i></b-button>
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
    name: 'BuscarCliente',
    computed: {
        search:{
            get(){
                return this.$store.state.filtros.filtro_clientes
            },
            set(val){
                this.$store.commit('set_filtro_clientes', val)
            }
        },
        ...mapGetters({
            r_clientes: 'filtro_clientes_'
        })
    },
    data() {
        return {
            
        }
    },methods: {
        closeDialog() {
            hide();
            this.$emit('cerrar')
        },
        seleccion(i){
            this.$emit('seleccionado', i)
            this.closeDialog()
        }
    },
}
</script>

<style>

</style>