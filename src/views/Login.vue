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
                    
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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


                if (query.data.message == 'Invalid identifier or password') {

                    alert('USUARIO O CONTRASEÑA INVALIDOS')

                }else if(query.data.user.blocked){

                    alert('USUARIO BLOQUEADO')

                }else{

                    this.set_token_sesion(query.data.jwt)
                    this.$router.replace('Main')
                }
                
                

            } catch (e) {
                console.log(e)
            }
        },
        ...mapMutations(['set_token_sesion', 'set_load_tiempo'])
    },
    mounted() {
        this.set_load_tiempo(false)
    },
}
</script>

<style scoped>
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