<template>
    <div class="main-container">
        <div class="container">
            
            <div class="row top-row">
                <div class="col s12">
                    <h4>Select an Avatar</h4>
                    <span>Scroll Right for more characters.</span>
                </div>
                <br>
                <div class="col s12 characters-container">
                    <img 
                    class="character-img" 
                    v-for="character in this.characters" 
                    :key="character"
                    :src="`../assets/CharacterImages/${character}.jpg`"
                    :data-value="character"
                    @click="changeAvatar"
                >
                </div>
            </div>

            <div class="row">
                <div class="col s12 m2">
                    <img :src="`../assets/CharacterImages/${this.selectedAvatar}.jpg`" alt="" class="responsive-img">
                </div>
                <div class="col s12 m8">
                    <custom-form>

                        <div class="row input-row bottom-row">
                            <my-text-input v-model="username" inputType="text" inputId="username" labelFor="username">
                                Username
                            </my-text-input>
                            <my-text-input v-model="password" inputType="password" inputId="password"
                                labelFor="password">
                                Password
                            </my-text-input>
                            <my-text-input v-model="confirmPassword" inputType="password" inputId="confirmPassword"
                                labelFor="confirmPassword">
                                Confirm Password
                            </my-text-input>
                        </div>

                        <div class="row bottom-row input-row">
                            <div class="col s6">
                                <a v-on:click="this.onSubmit"
                                    class="waves-effect waves-light btn grey darken-4">SUBMIT</a>
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
import characters from "../shared/characters.js"

export default {
    components: {
        CustomForm: LoginForm,
        MyTextInput
    },
    data: function() {
        return {
            username: "",
            password: "",
            confirmPassword:"",
            selectedAvatar: "Unknown",
            characters: characters
        }
    },
    methods: {
        onSubmit: function() {
            let { username, password, confirmPassword, selectedAvatar } = this
            if (password === confirmPassword) {
                axios.post('/auth/register', { username, password, selectedAvatar })
                .then(res => {
                    if (res.data.success) {
                        alert("You account has been created.")
                        this.$router.push("/");
                    } else {
                        alert(res.data.msg)
                    }
                })
            } else {
                alert("Your passwords do not match.")
            }
        },
        changeAvatar: function(event) {
            this.selectedAvatar = event.target.dataset.value
        }
    },
}
</script>

<style scoped>
    .characters-container {
        margin-top: 5px;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .container {
        margin-top: 0px;
    }

    .character-img {
        max-height: 175px;
        margin: 5px;
    }
    
    h4 {
        margin: 0px;
    }

    .input-row {
        margin-right: 10px;
        margin-left: 10px;
    }
    .bottom-row {
        margin-bottom: 0px;
    }
    .top-row {
        margin-top: 0px;
        padding-top: 10px;
    }
</style>