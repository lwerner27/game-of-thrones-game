<template>
    <div class="main-container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                <table class="responsive-table">

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
                                <span class="helper-text" data-error="wrong" data-success="right">Is Danaerys pregnant? (Yes or No)</span>
                            </div>

                            <div class="input-field col s12">
                                <input placeholder="Schmittywerbenjaegermanjensen" id="nightKingKiller" type="text" v-model.trim="bonusQuestions.nightKingKiller">
                                <span class="helper-text" data-error="wrong" data-success="right">Who kills the Night King? (Names as seen above)</span>
                            </div>

                            <div class="input-field col s12">
                                <input placeholder="Gendry" id="ironThroneSitter" type="text" v-model.trim="bonusQuestions.ironThroneSitter">
                                <span class="helper-text" data-error="wrong" data-success="right">Who will hold the Iron Throne? (Names as seen above)</span>
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
            bonusQuestions: {}, // Will Hold answers to bonus questions.
            characterNames: [] // List of character names for checking spelling.
        }
    },
    methods: {
        checkYesOrNo: function(answer) {
            if (answer === "yes" || answer === "no") {
                return true
            } else {
                return false
            }
        },
        checkName: function(array, name) {
            if (array.includes(name)) {
                return true
            } else {
                return false
            }
        },
        checkBonusQuestions:  function(array, answer, name1, name2) {
            if (this.checkYesOrNo(answer)) {
                if (this.checkName(array, name1) && this.checkName(array, name2)) {
                    return true
                } else {
                    return false 
                }
            } else {
                return false
            }

            
        },
        savePicks: function() {
            axios.defaults.headers.common['Authorization'] = this.jwt
            let reqObj = {
                userId: this.userId,
                picks: {
                    characterPicks: this.picks,
                    bonusQuestions: {
                        isDannyPrego: this.bonusQuestions.isDannyPrego.toLowerCase(),
                        nightKingKiller: this.bonusQuestions.nightKingKiller.toLowerCase(),
                        ironThroneSitter: this.bonusQuestions.ironThroneSitter.toLowerCase(),
                    }
                }
            }

            let { isDannyPrego, nightKingKiller, ironThroneSitter } = reqObj.picks.bonusQuestions

            if (this.checkBonusQuestions(this.characterNames, isDannyPrego, nightKingKiller, ironThroneSitter)) {
                axios.put("/api/picks/updatepicks", reqObj)
                .then(res => {
                    if (res.status === 200) {
                        alert("Your updated picks have been saved.")
                    }
                })
            } else {
                alert("Please check your name spellings.")
            }
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
        for (let key in this.picks) {
            this.characterNames.push(this.picks[key].name.toLowerCase())
        }
    }
}
</script>

<style scoped>
    .save-btn {
        width: 100%;
        text-align: left;
    }
</style>
