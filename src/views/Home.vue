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
                            <my-text-input v-model="password" inputType="password" inputId="password" labelFor="password">
                                Password
                            </my-text-input>
                        </div>
                        <div class="row input-row">
                            <div class="col s6">
                                <a v-on:click.stop.prevent="attemptLogin" class="waves-effect waves-light btn grey darken-4">LOGIN</a>
                            </div>
                            <div class="col s6">
                                <a href="/user/register" class="waves-effect waves-light btn grey darken-4 right">REGISTER</a>
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
            axios.post("http://localhost:5000/auth/login", {
                    username,
                    password
                })
                .then(
                    res => {
                        let user = {
                            jwt: res.data.token,
                            userId: res.data.userId,
                            picksLocked: res.data.picksLocked,
                            totalScore: res.data.totalScore
                        }
                        this.updateUserInfo(user)
                        this.$router.push("/makepicks");
                    })
                .catch(err => {
                    alert("Username or Password are invalid.")
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
        height: 100vh;
    }
    
    .top-row {
        margin-top: 20px;
    }

    .input-row {
        margin-right: 10px;
        margin-left: 10px;
    }
</style>
