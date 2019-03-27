<template>
    <div class="main-container">
        <div class="container" v-if="this.username">
            <div class="row">
                <div class="col s6 m6 avatar-col">
                    <img class="responsive-img circle avatar" :src="`../assets/CharacterImages/${this.avatar}.jpg`" alt="">
                    <router-link tag="div" to="/avatar" class="btn grey darken-4" v-if="this.$route.params.id === this.$store.state.userId">update avatar</router-link>
                </div>
                <div class="col s6 m6 right">
                    <h3 class="right-align flow-text"><strong>{{ this.username.toUpperCase() }}</strong></h3>
                    <h6 class="right-align flow-text">Current Score: {{ this.totalScore }}</h6>
                    <br>
                    <div class="row">
                        <div class="col s12 m9 l6 right">
                            <!-- Conditional Button if viewing logged in users pages. -->
                            <router-link 
                                tag="button" 
                                to="/makepicks" 
                                v-if="this.$route.params.id === this.$store.state.userId"
                                class="btn grey darken-4 dynamic-button"
                            >
                                UPDATE PICKS
                            </router-link>
                            <!-- Conditional button if viewing friends page. -->
                            <button 
                                v-else-if="this.friendStatus" 
                                @click="removeFriend" 
                                class="btn grey darken-4"
                            >
                                Remove Friend
                            </button>
                            <!-- Conditional button if viewing non-friends page. -->
                            <button v-else class="btn grey darken-4" @click.stop.prevent="addFriend">Add Friend</button>
                        </div>
                    </div>

                </div>
                
                <div class="row">
                    <div class="col s12">
                        <hr>
                        <table class="striped">

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
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex';
export default {
    data: function() {
        return {
            username: null,
            totalScore: null,
            picks: null,
            friendStatus: null,
            avatar: "Unknown"
        }
    },
    computed: {
        ...mapState([
            "userId",
            "jwt",
            "friends"
        ]),
    },
    methods: {
        ...mapMutations([
            "ADD_FRIEND",
            "REMOVE_FRIEND"
        ]),

        addFriend: function() {
            this.ADD_FRIEND(this.$route.params.id)
            axios.defaults.headers.common['Authorization'] = this.jwt
            let url = `/api/users/add/friend`
            
            axios.put(url, {
                userId: this.userId,
                friendId: this.$route.params.id
            })
            .then(res => {
                if (res.status === 200) {
                    this.friendStatus = true
                    alert (res.data.msg)
                } else {
                    alert("There was a problem following this user. Please try again later.")
                }
            })

        },

        removeFriend: function() {
            this.REMOVE_FRIEND(this.$route.params.id)
            axios.defaults.headers.common['Authorization'] = this.jwt
            axios.put("/api/users/remove/friend", {
                userId: this.userId,
                friendId: this.$route.params.id
            })
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.msg)
                    this.friendStatus = false
                } else {
                    alert("There was a problem unfollowing this user. Please try again later.")
                }
            })
        },

        getPageInfo: function(state, route) {
            if (state.userId === route.params.id) {
                let { username, picks, totalScore, avatar } = state

                this.username = username
                this.totalScore = totalScore
                this.picks = picks
                this.avatar = avatar
                
            } else {
                axios.defaults.headers.common['Authorization'] = state.jwt
                axios.get("/api/users/user/" + route.params.id)
                .then(res => {
                    this.username = res.data.username
                    this.totalScore = res.data.totalScore
                    this.picks = res.data.picks
                    if (res.data.avatar) {
                        this.avatar = res.data.avatar
                    }
                })
            } 
        }
    },
    mounted: function() {
        this.getPageInfo(this.$store.state, this.$route)

        if (this.$store.state.friends.includes(this.$route.params.id)) {
            this.friendStatus = true
        } else {
            this.friendStatus === false
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.getPageInfo(this.$store.state, to)
        window.scrollTo(0,0);
        next()
    }
}
</script>

<style scoped>
    .btn {
        width: 100%;
    }

    .dynamic-btn {
        width: 100%;
    }
    .avatar {
        margin-top: 1.94667rem;
    }
    .avatar-col {
        max-width: 175px;
    }
</style>
