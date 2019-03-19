<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2 top-padding">
                    <custom-form>

                        <div class="row input-row top-row">
                            <my-text-input v-model="username" inputType="text" inputId="username" labelFor="username">
                                Username
                            </my-text-input>
                        </div>
                        
                        <div class="row input-row top-row">
                            <my-text-input v-model="email" inputType="text" inputId="email" labelFor="email">
                                Email
                            </my-text-input>
                        </div>

                        <div class="row input-row">
                            <my-text-input v-model="password" inputType="password" inputId="password" labelFor="password">
                                Password
                            </my-text-input>
                        </div>
                        
                        <div class="row input-row">
                            <my-text-input v-model="confirmPassword" inputType="password" inputId="confirmPassword" labelFor="confirmPassword">
                                Confirm Password
                            </my-text-input>
                        </div>

                        <div class="row input-row">
                            <div class="col s6">
                                <a v-on:click="this.onSubmit" class="waves-effect waves-light btn grey darken-4">SUBMIT</a>
                            </div>
                        </div>

                    </custom-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import MyTextInput from '../components/MyTextInput'
import axios from 'axios'
export default {
    components: {
        CustomForm: LoginForm,
        MyTextInput
    },
    data: function() {
        return {
            username: "",
            email: "",
            password: "",
            confirmPassword:""
        }
    },
    methods: {
        onSubmit: function() {
            let { username, password, email, confirmPassword } = this
            if (password === confirmPassword) {
                axios.post('/auth/register', { username, password, email })
                .then(res => {
                    if (res.status === 200) {
                        alert("You account has been created.")
                        this.$router.push("/");
                    } else {
                        alert("There was an error creating your account please try again later.")
                    }
                })
            } else {
                alert("Your passwords do not match.")
            }
        }
    }
}
</script>

<style scoped>
    .main-container {
        height: 100vh
    }
    .input-row {
        margin-right: 10px;
        margin-left: 10px;
    }

    .top-row {
        margin-top: 20px;
    }

    .top-padding {
        padding-top: 80px;
    }
</style>