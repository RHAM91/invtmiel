<template>
    <div class="cuerpo">
        <div class="centro">
            <div class="logo_marco">
                <div class="logo">
                    <img src="@/assets/2629.png" style="width: 100%;" alt="">
                </div>
            </div>
            <div class="formulario_marco">
                <b-container fluid="">
                    <form @submit.prevent="login">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <label for="">Usuario</label>
                                <b-form-input type="text" v-model="usuario" required size="sm"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <label for="">Contraseña</label>
                                <b-form-input type="password" v-model="pass" required size="sm"></b-form-input>
                            </b-col>

                            <b-col sm="12" class="mt-3">
                                <b-button type="submit" variant="success" size="sm" block="">Entrar</b-button>
                            </b-col>
                        </b-row>
                    </form>
                    <b-button type="button" variant="danger" size="sm" @click="gt">obtener token</b-button>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: 'Login',
    computed: {
        ...mapGetters(['ip_api', 'puerto', 'sesion_token'])
    },
    data() {
        return {
            usuario: 'romario',
            pass: '124578asD.$'
        }
    },
    methods: {
        async login(){

            let formulario = {
                identifier: this.usuario,
                password: this.pass
            }


            try {
                let query = await axios.post(`http://${this.ip_api}:${this.puerto}/api/auth/local`, formulario)
                
                window.api.guardar_token(query.data.jwt)
                await console.log('[-]' + this.sesion_token)

            } catch (e) {
                console.log(e)
            }
        },
        async gt(){
            this.obtener_token_sesion()
        },
        ...mapActions(['obtener_token_sesion'])
    },
}
</script>

<style>
    .cuerpo{
        width: 100%;
        height: 100vh;   
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .centro{
            
            width: 400px;
            height: 600px;
        }
            .logo_marco{
                width: 100%;
                height: 300px;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
                .logo{
                    width: 200px;
                    height: 300px;
                
                }
</style>