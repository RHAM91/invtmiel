<template>
    <div class="conti">
        <b-container fluid="">
            <b-row>
                <b-col sm="10">
                    <label for="">Buscar</label>
                    <b-form-input type="text" size="sm"></b-form-input>
                </b-col>
                <b-col sm="2" style="margin-top: 32px;" >
                    <b-button type="button" variant="info" v-model="buscar" block size="sm">Buscar</b-button>
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
                            <th style="width: 10%;">
                                Bodega
                            </th>
                            <th style="width: 5%;text-align: center;">
                                ..
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Pc
                                </td>
                                <td>
                                    1
                                </td>
                                <td style="text-align: center;">
                                    <b-button type="button" variant="warning" style="font-size: 10px;" size="sm" @click="openDialog"><i class="fas fa-info-circle"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-container>
        <aside id="default-popup" class="avgrund-popup">
            Item escondido

            <button @click="closeDialog">Cerrar</button>
        </aside>
        <!-- <button @click="openDialog">Abrir ventana</button> -->
        <div class="avgrund-cover"></div>
    </div>
</template>

<script>





export default {
    name: 'ListaProductos',
    data() {
        return {
            buscar: ''
        }
    },
    methods: {
        openDialog() {
            show( "#default-popup" );
        },
        closeDialog() {
            hide();
        }
    },
}
</script>

<style>
    .conti{
        width: 100%;
        height: calc(100vh - 155px);
        
    }
</style>