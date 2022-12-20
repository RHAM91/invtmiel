<template>
    <b-container fluid="">
        <form @submit.prevent="guardar">
            <b-row>
                <b-col sm="4" class="mt-2">
                    <label for="">Código</label>
                    <b-form-input type="text" size="sm" id="codigo_producto" v-model="codigo" required></b-form-input>
                </b-col>

                <b-col sm="8" class="mt-2">
                    <label for="">Nombre del producto</label>
                    <b-form-input type="text" id="descripcion__" size="sm" v-model="descripcion" required></b-form-input>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Descripción</label>
                    <b-form-textarea
                        v-model="info_producto"
                        placeholder="Escribe algo..."
                        rows="3"
                        max-rows="6"
                        required
                    ></b-form-textarea>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Categoria</label>
                    <select class="form-control form-control-sm" v-model="categoria" required>
                        <option value="">Seleccionar</option>
                        <option v-for="(item, index) in categorias" :key="index" :value="item.id">{{item.attributes.categoria}}</option>
                    </select>
                </b-col>

                <b-col sm="12" class="mt-2">
                    <label for="">Marca</label>
                    <select class="form-control form-control-sm" v-model="marca" required>
                        <option value="">Seleccionar</option>
                        <option v-for="(item, index) in marcas" :key="index" :value="item.id">{{item.attributes.marca}}</option>
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
import { minix } from '@/components/functions/alertas'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    name: 'CrearProducto',
    computed: {
        ...mapState(['categorias', 'bodegas', 'marcas']),
        ...mapGetters(['sesion_token_formateado'])
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
        async guardar(){

            if (this.descripcion.length > 25) {
                minix({icon: 'info', mensaje: 'El nombre no puede ser mayor a 25 caracteres', tiempo: 6000})
                document.getElementById('descripcion__').select()
            }else{

                let f = {
                    api: 'productos',
                    formulario: {
                                codigo: this.codigo.trim(),
                                descripcion: this.descripcion.toUpperCase(),
                                info_producto: this.info_producto,
                                categoria: this.categoria.toString(),
                                marca: this.marca.toString()
                    }
                }
    
                await this.guardarData(f)
    
                this.codigo = ''
                this.descripcion = ''
                this.info_producto = ''
                this.categoria = ''
                this.marca = ''
            }

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