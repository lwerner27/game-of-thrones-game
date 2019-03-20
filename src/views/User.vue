<template>
    <div class="main-container">
        <div class="container" v-if="this.username">
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <h3>{{ this.username.toUpperCase() }}</h3>

                    <div class="row">
                        <div class="col s12 m3">
                            <h5>Current Score: {{ this.totalScore }}</h5>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 m3">
                            <router-link 
                                tag="button" 
                                to="/makepicks" 
                                v-if="this.$route.params.id === this.$store.state.userId"
                                class="btn grey darken-4"
                            >
                                UPDATE PICKS
                            </router-link>
                        </div>
                    </div>

                    <hr>

                </div>
                
                <div class="row">
                    <div class="col s12 m6 offset-m3">
                        <table class="highlight striped">

                            <thead>
                                <tr>
                                    <th>Name/Question</th>
                                    <th>Selected Status/Answer</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(pick, key) in picks.characterPicks" v-bind:key="key">
                                    <td><strong>{{ pick.name }}</strong></td>
                                    <td> {{ pick.status }} </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Is Danaerys pregnant:</strong>
                                    </td>
                                    <td>
                                        {{ this.picks.bonusQuestions.isDannyPrego }}
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        <strong>Who kills the Night King:</strong>
                                    </td>
                                    <td>
                                        {{ this.picks.bonusQuestions.nightKingKiller }}
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        <strong>Who holds the iron throne:</strong>
                                    </td>
                                    <td>
                                        {{ this.picks.bonusQuestions.ironThroneSitter }}
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <router-link tag="button" class="btn grey darken-4" to="/user/5c929f1988a1db14484faab3">lwerner</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    data: function() {
        return {
            username: null,
            totalScore: null,
            picks: null
        }
    },
    computed: {
        ...mapState([
            "jwt"
        ])
    },
    mounted: function() {
        if (this.$store.state.userId === this.$route.params.id) {
            console.log("You are logged in as this user.")
            let { username, picks, totalScore } = this.$store.state

            this.username = username
            this.totalScore = totalScore
            this.picks = picks
            
        } else {
            axios.defaults.headers.common['Authorization'] = this.$store.state.jwt
            axios.get("/api/users/test")
            .then(res => {
                console.log(res)
                // this.username = res.data.username
                // this.totalScore = res.data.totalScore
                // this.picks = res.data.picks
            })
        }
    }
}
</script>

<style scoped>
    .btn {
        width: 100%;
    }
</style>
