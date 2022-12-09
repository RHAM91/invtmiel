<template>
    <b-container fluid="">
        <form @submit.prevent="">
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
                <b-form-input type="text" size="sm" v-model="categoria" required></b-form-input>
                </b-col>

                <b-col sm="12" class="mt-2">
                <label for="">Bodega</label>
                <b-form-input type="text" size="sm" v-model="bodega" required></b-form-input>
                </b-col>

                <b-col sm="12" class="mt-2 d-flex flex-row-reverse">
                <b-button type="submit" variant="success" size="sm">Guardar</b-button>
                </b-col>
            </b-row>
        </form>
    </b-container>
</template>

<script>
export default {
    name: 'CrearProducto',
    data() {
        return {
            codigo: '',
            descripcion: '',
            categoria: '',
            bodega: ''
        }
    },
    methods: {
        
    },
    mounted() {
        document.getElementById('codigo_producto').focus()
    },
}
</script>

<style>

</style>