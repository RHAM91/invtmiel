<template>
    <b-container fluid="">
        
        <b-row>
            <b-col sm="8" class="mt-2">
                <label for="">No. Documento</label>
                <b-form-input type="text" v-model="no_documento" size="sm"></b-form-input>
            </b-col>
            <b-col sm="4" class="mt-2">
                <label for="">Fecha documento</label>
                <b-form-input type="date" v-model="fecha_hoy" size="sm"></b-form-input>
            </b-col>
            <b-col sm="4" class="mt-2">
                <label for="">Código proveedor</label>
                <b-form-input type="text" id="codigo_proveedor__" placeholder="F2 para buscar" v-model="codigo_proveedor" size="sm" @keydown.113="openDialog" @keydown.tab="buscar_proveedor_por_nit"></b-form-input>
            </b-col>
            <b-col sm="8" class="mt-2">
                <label for="">Proveedor</label>
                <b-form-input type="text" readonly v-model="nombre_proveedor" size="sm"></b-form-input>
            </b-col>


            <b-col sm="12" class="mt-1">
                <hr>
            </b-col>

            <b-col sm="2" class="mt-2">
                <label for="">Código</label>
                <b-form-input type="text" id="codigo_producto" placeholder="F2 (buscar)" @keydown.113="abrir_modal" @keydown.tab="buscar_producto" v-model="codigo_producto" size="sm"></b-form-input>
            </b-col>

            <b-col sm="5" class="mt-2">
                <label for="">Producto</label>
                <b-form-input type="text" readonly v-model="nombre_producto" size="sm"></b-form-input>
            </b-col>

            <b-col sm="2" class="mt-2">
                <label for="">Precio compra</label>
                <b-form-input type="number" id="precio_compra" step="0.01" v-model="precio_compra" size="sm"></b-form-input>
            </b-col>

            <b-col sm="2" class="mt-2">
                <label for="">Cantidad</label>
                <b-form-input type="number" v-model="cantidad" id="cantidad__" size="sm"></b-form-input>
            </b-col>

            <b-col sm="1" class="mt-4">
                <b-button type="button" block variant="primary" style="margin-top: 15px;" size="sm" @click="agregar_elemento"><i class="fas fa-plus"></i></b-button>
            </b-col>

            <b-col sm="12" class="mt-2">
                <div class="lista_productos_adds">
                    <table class="table table-sm table-striped table-bordered" style="font-size: 10px;">
                        <thead>
                            <tr>
                                <th style="width: 15%;text-align: center;">
                                    Código
                                </th>
                                <th style="width: 35%;">
                                    Nombre
                                </th>
                                <th style="width: 15%;text-align: center;">
                                    Precio unitario
                                </th>
                                <th style="width: 15%;text-align: center;">
                                    Cantidad
                                </th>
                                <th style="width: 15%;text-align: center;">
                                    Sub total
                                </th>
                                <th style="width: 5%;text-align: center;">
                                    ...
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in bolsa" :key="index">
                                <td style="text-align: center;">
                                    {{item.codigo}}
                                </td>
                                <td>
                                    {{item.nombre}}
                                </td>
                                <td style="text-align: center;">
                                    Q{{item.precio_unitario}}
                                </td>
                                <td style="text-align: center;">
                                    {{item.cantidad}}
                                </td>
                                <td style="text-align: center;">
                                    Q{{item.sub_total}}
                                </td>
                                <td>
                                    <b-button type="button" variant="danger" style="font-size: 9px;text-align: center;" size="sm" @click="eliminar_elementos(index)"><i class="fas fa-trash-alt"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </b-col>
            <b-col sm="6" class="mt-3">
                <div class="pie_formulario_">
                    Total: Q{{contador}}
                </div>
            </b-col>
            <b-col sm="6" class="mt-3 d-flex flex-row-reverse">
                <b-button type="button" variant="success" size="sm">Guardar</b-button>
            </b-col>

        </b-row>

        <ModalBusquedaProducto v-if="modal" v-on:cerrar="cerrar_modal" v-on:seleccion="setear_seleccion" />

        <aside id="popup-detalle-proveedores" class="avgrund-popup">
            <ModalBusquedaProveedores v-if="modal_proveedores" v-on:cerrar="cerrarDialogo" v-on:seleccionado="imprimirSeleccion" />
        </aside>
        
        <div class="avgrund-cover"></div>

    </b-container>
</template>

<script>

import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import { minix } from '@/components/functions/alertas'

import ModalBusquedaProducto from './ModalBusqueda.vue'
import ModalBusquedaProveedores from './ModalBusquedaProveedores.vue'

export default {
    name: 'NuevaEntrada',
    components:{
        ModalBusquedaProducto,
        ModalBusquedaProveedores
    },
    computed: {
        ...mapState(['proveedores'])
    },
    data() {
        return {
            modal: false,
            modal_proveedores: false,
            bolsa: [],

            no_documento: '',
            codigo_proveedor: '',
            nombre_proveedor: '',
            codigo_producto: '',
            nombre_producto:'',
            precio_compra: 0,
            cantidad: 0,
            fecha_hoy: moment(Date.now()).format('YYYY-MM-DD'),
            contador: 0

        }
    },
    methods: {
        openDialog() {
            this.modal_proveedores = true
            show( "#popup-detalle-proveedores" );
        },
        cerrarDialogo(){
            this.modal_proveedores = false
        },
        imprimirSeleccion(i){
            this.codigo_proveedor = i.attributes.nit
            this.nombre_proveedor = i.attributes.proveedor
            document.getElementById('codigo_producto').focus()
        },
        buscar_proveedor_por_nit(){
            let f = this.proveedores.filter(proveedor => proveedor.attributes.nit == this.codigo_proveedor)
            if (f.length == 0) {
                minix({icon: 'error', mensaje: 'No existe proveedor con este NIT', tiempo: 3000})
                this.nombre_proveedor = ''
            }else{
                this.nombre_proveedor = f[0].attributes.proveedor
            }

        },
        agregar_elemento(){

            if (this.codigo_producto == '' || this.codigo_producto == null) {
                minix({icon: 'error', mensaje: 'Elige un artículo', tiempo: 3000})
                document.getElementById('codigo_producto').select()
            }else if(this.precio_compra == '' || this.precio_compra == null){
                minix({icon: 'error', mensaje: 'Ingresa el precio', tiempo: 3000})
                document.getElementById('precio_compra').select()
            }else if(this.cantidad == '' || this.cantidad == null){
                minix({icon: 'error', mensaje: 'Ingresa la cantidad', tiempo: 3000})
                document.getElementById('cantidad__').select()
            }else{
                let f = {
                    codigo: this.codigo_producto,
                    nombre: this.nombre_producto,
                    precio_unitario: this.precio_compra / this.cantidad,
                    cantidad: this.cantidad,
                    sub_total: (this.precio_compra / this.cantidad) * this.cantidad,
                }
    
    
                this.bolsa.unshift(f)
                this.suma_subtotales()

                this.codigo_producto = ''
                this.nombre_producto = ''
                this.precio_compra = 0
                this.cantidad = 0

                document.getElementById('codigo_producto').select()
            }


        },
        abrir_modal(){
            this.modal = true
        },
        cerrar_modal(){
            this.modal = false
        },
        setear_seleccion(obj){
            this.codigo_producto = obj.codigo
            this.nombre_producto = obj.nombre
            document.getElementById('precio_compra').select()
        },
        eliminar_elementos(id){
            this.bolsa.splice(id, 1)
            this.suma_subtotales()
        },
        suma_subtotales(){

            let cont = 0

            for (let i = 0; i < this.bolsa.length; i++) {
                const e = this.bolsa[i];
                
                cont += e.sub_total

            }

            this.contador = cont
        },
        async buscar_producto(){
            let recv = await this.obtenerData({api: `productos/?filters[codigo][$eq]=${this.codigo_producto}`})
            this.nombre_producto = recv.data[0].attributes.descripcion
        },
        ...mapActions(['guardarData', 'obtenerData'])
    },
}
</script>

<style>
    .lista_productos_adds{
        width: 100%;
        height: 350px;
        border: 1px solid #d9dee2;
        overflow: auto;
    }

    .pie_formulario_{
        width: 100%;
        height: 100%;
    }
</style>