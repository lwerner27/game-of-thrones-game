<template>
    <div class="main-container valign-wrapper">
        <div class="container">
            <div class="row">
                <div class="col s12 m4 offset-m4">
                    <login-form>
                        <div class="row input-row top-row">
                            <my-text-input v-model="username" inputType="text" inputId="username" labelFor="username">
                                Username
                            </my-text-input>
                        </div>
                        <div class="row input-row">
                            <my-text-input v-model="password" v-on:submit-login="attemptLogin" inputType="password" inputId="password" labelFor="password">
                                Password
                            </my-text-input>
                        </div>
                        <div class="row input-row">
                            <div class="col s12">
                                <a v-on:click.stop.prevent="attemptLogin" class="waves-effect waves-light btn grey darken-4 login-btn">LOGIN</a>
                            </div>
                        </div>
                        <div class="row input-row">
                            <div class="col s12">
                                <a href="/register" class="waves-effect waves-light btn grey darken-4 register-btn">REGISTER</a>
                            </div>
                        </div>
                    </login-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import MyTextInput from '../components/MyTextInput'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
    data: () => ({
        username: "",
        password: "",
    }),
    components: {
        LoginForm,
        MyTextInput
    },
    methods: {
        ...mapMutations([
            'UPDATE_USER_INFO'
        ]),
        attemptLogin: function () {
            let {
                username,
                password
            } = this
            axios.post("/auth/login", {
                    username,
                    password
                })
                .then(
                    res => {
                        let user = {
                            jwt: res.data.token,
                            userId: res.data.userId,
                            username: res.data.username,
                            picksLocked: res.data.picksLocked,
                            totalScore: res.data.totalScore,
                            picks: res.data.picks,
                            friends: res.data.friends
                        }
                        this.updateUserInfo(user)
                        this.$router.push("/makepicks");
                    })
                .catch(err => {
                    alert("Username or Password are invalid.")
                    throw(err)
                })
        },
        updateUserInfo: function (userObj) {
            this.UPDATE_USER_INFO(userObj)
        }
    }
}
</script>


<style scoped>
    .main-container {
        margin-top: -64px;
        height: 100vh;
    }
    
    .top-row {
        margin-top: 20px;
    }

    .input-row {
        margin-right: 10px;
        margin-left: 10px;
    }

    .register-btn, .login-btn {
        width: 100%
    }
</style>
