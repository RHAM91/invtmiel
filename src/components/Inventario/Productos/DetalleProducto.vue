<template>
    <div class="contenedor_modal_avgrund">
        <div class="modal_contenedor">
        <div class="cabecera_modal">
            <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
        </div>
        <b-container fluid="">
            <b-row>
                <b-col sm="12" class="mt-3">
                    <div class="titulo__">
                        {{obj.descripcion}} 
                    </div>
                    <!-- <h3>
                        {{obj.descripcion}} 
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </h3> -->
                </b-col>
                <b-col sm="12" class="">
                    <h4 style="color: #68676c">
                        Código: {{obj.codigo}}
                    </h4>
                </b-col>
                <b-col sm="12" class="mt-3">
                    <div class="texto_descripcion">
                        Descripcion: {{obj.info_producto}}
                    </div>
                </b-col>
                <b-col sm="12" class="mt-3">
                    <label for="">Existencias</label>
                    <table class="table table-sm table-striped table-bordered" style="font-size: 10px;">
                        <thead>
                            <td style="width: 70%">
                                Bodega
                            </td>
                            <td style="width: 20%; text-align: center;">
                                Cantidad
                            </td>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in bodegas" :key="index">
                                <td>
                                    {{item.attributes.bodega}}
                                </td>
                                <td style="text-align: center;">
                                    0
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
                <b-col sm="12" class="mt-3">
                    <label for="">Historial de movimientos</label>
                    <div class="historial_">

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'DetalleDeProducto',
    props:['obj'],
    computed: {
        ...mapState(['bodegas'])
    },
    data() {
        return {
            
        }
    },
    methods: {
        closeDialog() {
            hide();
            this.$emit('cerrar')
        }  
    },
}
</script>

<style>
    .texto_descripcion{
        width: 100%;
        height: 65px;
        color: #68676c;
    }

    .titulo__{
        border: 1px solid black;
        width: 100%;
        height: 45px;
        font-weight: bold;
        font-size: 32px;
    }

    .historial_{
        width: 100%;
        height: 160px;
        border: 1px solid #68676c;
    }
</style>