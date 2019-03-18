<template>
    <div class="main-container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Select Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(pick, key) in picks" v-bind:key="key">
                            <td>{{ pick.name }}</td>
                            <td> {{ pick.status }} </td>
                            <td>
                                <button v-on:click.stop.prevent="toggleStatus" :value="key" class="btn waves-effect waves-light black">Toggle
                                    Status</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

        <div class="row">
            <div class="col s12 m8 offset-m2">
                <h4>Bonus Questions:</h4>
                <hr>
                <div class="row">
                    <div class="col s12">
                        <form-container>
                            <div class="input-field col s12">
                                <input placeholder="Yes or No" id="isDannyPrego" type="text" v-model.trim="bonusQuestions.isDannyPrego">
                                <span class="helper-text" data-error="wrong" data-success="right">Is Danaerys pregnant?</span>
                            </div>

                            <div class="input-field col s12">
                                <input placeholder="Schmittywerbenjaegermanjensen" id="nightKingKiller" type="text" v-model.trim="bonusQuestions.nightKingKiller">
                                <span class="helper-text" data-error="wrong" data-success="right">Who kills the Night King?</span>
                            </div>

                            <div class="input-field col s12">
                                <input placeholder="Gendry" id="ironThroneSitter" type="text" v-model.trim="bonusQuestions.ironThroneSitter">
                                <span class="helper-text" data-error="wrong" data-success="right">Who will hold the Iron Throne?</span>
                            </div>
                        </form-container>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12 m2 offset-m2">
                <button v-on:click.stop.prevent="savePicks" class="btn waves-effect waves-light black save-btn" type="submit"
                    name="action">
                    <div>
                        Save
                        <i class="material-icons left">save</i>
                    </div>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import LoginForm from './LoginForm'
import MyTextInput from './MyTextInput'
import axios from 'axios'
export default {
    components: {
        FormContainer: LoginForm,
    },
    props: [
        "userId",
        "jwt",
        "userPicks",
        "picksLocked"
    ],
    data: function () {
        return {
            picks: {}, // Will eventually hold the users picks obtained from the database.
            bonusQuestions: {} // Will Hold answers to bonus questions.
        }
    },
    methods: {
        savePicks: function() {
            axios.defaults.headers.common['Authorization'] = this.jwt
            let reqObj = {
                userId: this.userId,
                picks: {
                    characterPicks: this.picks,
                    bonusQuestions: this.bonusQuestions
                }
            }
            axios.put("http://localhost:5000/api/picks/updatepicks", reqObj)
            .then(res => {
                if (res.status === 200) {
                    alert("Your updated picks have been saved.")
                }
            })
        },
        toggleStatus: function(event) {
            let character = event.target.value
            let characterStatus = this.picks[character].status
            if (characterStatus === "Alive") {
                this.picks[character].status = "Dead"
            } else if (characterStatus === "Dead") {
                this.picks[character].status = "Whitewalker"
            } else if (characterStatus === "Whitewalker") {
                this.picks[character].status = "Alive"
            }
        }
    },
    mounted() {
        this.picks = this.userPicks.characterPicks
        this.bonusQuestions = this.userPicks.bonusQuestions
    }
}
</script>

<style scoped>
    .save-btn {
        width: 100%;
        text-align: left;
    }
</style>
