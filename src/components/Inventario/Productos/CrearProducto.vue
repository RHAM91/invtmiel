<template>
    <b-container fluid="">
        <form @submit.prevent="guardar">
            <b-row>
                <b-col sm="12" class="mt-2">
                    <label for="">Código</label>
                    <b-form-input type="text" size="sm" id="codigo_producto" v-model="codigo" required></b-form-input>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Descripción</label>
                    <b-form-input type="text" size="sm" v-model="descripcion" required></b-form-input>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Categoria</label>
                    <select class="form-control form-control-sm" v-model="categoria" required>
                        <option value="">Seleccionar</option>
                        <option v-for="(item, index) in categorias" :key="index" :value="item.id">{{item.attributes.categoria}}</option>
                    </select>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Bodega</label>    
                    <select class="form-control form-control-sm" v-model="bodega" required>
                        <option value="">Seleccionar</option>
                        <option v-for="(item, index) in bodegas" :key="index" :value="item.id">{{item.attributes.bodega}}</option>
                    </select>
                </b-col>

                <b-col sm="12" class="mt-2 d-flex flex-row-reverse">
                    <b-button type="submit" variant="success" size="sm">Guardar</b-button>
                </b-col>
            </b-row>
        </form>
    </b-container>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    name: 'CrearProducto',
    computed: {
        ...mapState(['categorias', 'bodegas']),
        ...mapGetters(['sesion_token_formateado'])
    },
    data() {
        return {
            codigo: '',
            descripcion: '',
            categoria: '',
            bodega: ''
        }
    },
    methods: {
        async guardar(){
            let f = {
                api: 'productos',
                formulario: {
                            codigo: this.codigo.trim(),
                            descripcion: this.descripcion,
                            categoria: this.categoria.toString(),
                            bodega: this.bodega.toString()
                }
            }

            await this.guardarData(f)

        },
        ...mapActions(['guardarData'])
    },
    mounted() {
        document.getElementById('codigo_producto').focus()
    },
}
</script>

<style>

</style>