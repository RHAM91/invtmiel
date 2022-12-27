<template>
    <!-- TABLERO DONDE SE MUESTRAN TODOS LOS MODULOS -->

    <div class="contenedor_inicio">
        <div class="top_verde_">
            
        </div>
        <div class="cuerpo_inicio_modulos">
            <div class="modulos">

                <div class="modulo" @click="set_ruta('Inventario')">
                    <div class="titulo_modulo">
                        INVENTARIO
                    </div>
                    <div class="cuerpo_modulo">
                        <i class="fas fa-dolly-flatbed"></i>
                    </div>
                </div>

            </div>

            <div  v-if="!load_tiempo" class="cerrar_sesion_btn" @click="salir">
                <i class="fas fa-sign-out-alt"></i>
            </div>


            <div v-if="load_tiempo" class="contenedor_loading_cerrando_ico">
                <div class="loading_cerrando_ico">
                    <img src="@/assets/pacman.gif" style="width: 100%;" alt="">
                </div>
                Cerrando sesión
            </div>

            

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'Main',
    computed: {
        ...mapGetters(['ip_api']),
        ...mapState(['token_sesion', 'info_seteada', 'load_tiempo'])
    },
    data() {
        return {
            cs: true
        }
    },
    methods: {
        set_ruta(ruta){
            this.$router.replace(ruta)
        },
        salir(){
            this.cs = false
            this.cerrar_sesion()
            
        },
        ...mapActions(['descargar_datos','conexion_socket', 'obtener_version', 'cerrar_sesion']),
        ...mapMutations(['set_info_seteada'])
    },
    mounted() {

        if (this.token_sesion != '' || this.token_sesion != null || this.token_sesion != undefined) {

            if (!this.info_seteada) { // esto es para que no se ejecute de manera incremental cuando se retorna a Main, ocurria que cuando regresa a esta ruta se realiza 2,3, 4 veces la conexión
                setTimeout(() => {
                    this.descargar_datos()
                    this.conexion_socket()
                    this.obtener_version()
                }, 1000);

                this.set_info_seteada(true)

            }else{
                console.log('Data ya ha sido seteada')
            }

        }else{
            console.log('No hay token asociado...')
        }

    },
}
</script>

<style>
    .contenedor_inicio{
        width: 100%;
        height: 100vh;
    }
    .top_verde_{
        background-color: #49C466;
        width: 100%;
        height: 35px;
        border-bottom: 1px solid #2ab74a;
    }
    .cuerpo_inicio_modulos{
        width: 100%;
        height: calc(100% - 35px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modulos{
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .modulo{
            width: 200px;
            height: 200px;
            margin-right: 10px;
            border: 1px solid #e9e9e9;
        }
            .titulo_modulo{
                width: 100%;
                height: 25px;
                background-color: #252935;
                color: white;
                text-align: center;
            }
            
            .cuerpo_modulo{
                width: 100%;
                height: calc(100% - 25px);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 70px;
                cursor: pointer;
                transition: .4s ease;
            }
                .cuerpo_modulo:hover{
                    background-color: #252935;
                    color: white;
                }
        .cerrar_sesion_btn{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #e9e9e9;
            position: fixed;
            bottom: 15px;
            left: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            transition: .4s ease;
        }
            .cerrar_sesion_btn:hover{
                background-color: #252935;
                color: white;
            }

            .contenedor_loading_cerrando_ico{
                width: 250px;
                height: 45px;
                display: flex;
                align-items: center;
                position: absolute;
                bottom: 15px;
                left: 15px;
            }


            .loading_cerrando_ico{
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
</style>