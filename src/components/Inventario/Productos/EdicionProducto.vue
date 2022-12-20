<template>
    <div class="contenedor_modal_avgrund">
        <div class="modal_contenedor">
        <div class="cabecera_modal">
            <b-button type="button" variant="outline-danger" size="sm" @click="closeDialog">Cerrar</b-button>
        </div>
        <b-container fluid="">
            <form @submit.prevent="actualizar">
                <b-row>
                    <b-col sm="12" class="mt-3">
                        <div class="titulo__">
                            {{obj.descripcion}} 
                        </div>
                    </b-col>
                    <b-col sm="12" class="mt-3">
                        <label for="">Código</label>
                        <b-form-input type="text" v-model="codigo" readonly required size="sm"></b-form-input>
                    </b-col>

                    <b-col sm="12" class="mt-3">
                        <label for="">Nombre del producto</label>
                        <b-form-input type="text" v-model="descripcion" required size="sm"></b-form-input>
                    </b-col>

                    <b-col sm="12" class="mt-3">
                        <label for="">Descripción</label>
                        <b-form-textarea
                            v-model="info_producto"
                            placeholder="Escribe algo..."
                            rows="3"
                            max-rows="6"
                            required
                        ></b-form-textarea>
                    </b-col>

                    <b-col sm="6" class="mt-3">
                        <label for="">Categoría</label>
                        <select class="form-control form-control-sm" v-model="categoria" required>
                            <option value="">Selecionar</option>
                            <option v-for="(item, index) in categorias" :key="index" :value="item.id">{{item.attributes.categoria}}</option>
                        </select>
                    </b-col>

                    <b-col sm="6" class="mt-3">
                        <label for="">Marca</label>
                        <select class="form-control form-control-sm" v-model="marca" required>
                            <option value="">Selecionar</option>
                            <option v-for="(item, index) in marcas" :key="index" :value="item.id">{{item.attributes.marca}}</option>
                        </select>
                    </b-col>


                    <b-col sm="12" class="mt-3 d-flex flex-row-reverse">
                        <b-button type="submit" variant="primary" size="sm">Actualizar</b-button>
                    </b-col>
                    
                </b-row>
            </form>
        </b-container>
    </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'EdicionProducto',
    props:['obj'],
    computed: {
        ...mapState(['marcas', 'categorias'])
    },
    data() {
        return {
            codigo: '',
            descripcion: '',
            info_producto: '',
            categoria: '',
            marca: ''
            
        }
    },
    methods: {
        closeDialog() {
            hide();
            this.$emit('cerrar')
        },
        async actualizar(){

            let f = {
                api: `productos/${this.obj.id}`,
                formulario: {
                    codigo: this.codigo,
                    descripcion: this.descripcion.trim().toUpperCase(),
                    info_producto: this.info_producto.trim().toUpperCase(),
                    categoria: this.categoria,
                    marca: this.marca
                }
            }

            await this.actualizarData(f)
            this.closeDialog()

        },
        ...mapActions(['actualizarData'])
    },
    mounted() {
        this.codigo = this.obj.codigo
        this.descripcion = this.obj.descripcion
        this.info_producto = this.obj.info_producto
        this.categoria = this.obj.categoria
        this.marca = this.obj.marca
    },
}
</script>

<style>

</style>