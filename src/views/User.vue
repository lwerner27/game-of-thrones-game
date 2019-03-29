<template>
    <div class="main-container">
        <div class="container" v-if="this.username">
            <!-- Row #1 -->
            <div class="row-flex">

                <!-- Column #1 -->
                <div class="avatar-col col-flex">
                    <img class="responsive-img circle avatar" :src="`../assets/CharacterImages/${this.avatar}.jpg`"
                        alt="">
                    <router-link tag="div" to="/update/avatar" class="btn grey darken-4 avatar-update"
                        v-if="this.$route.params.id === this.$store.state.userId">update avatar</router-link>
                </div>

                <!-- Column #2 -->
                <div class="col-flex bottom">
                    <p class="text-right flow-text"><strong>{{ this.username.toUpperCase() }}</strong></p>
                    <p class="text-right flow-text">Current Score: {{ this.totalScore }}</p>

                    <!-- Conditional Button if viewing logged in users pages. -->
                    <router-link tag="button" to="/makepicks" v-if="this.$route.params.id === this.$store.state.userId"
                        class="btn grey darken-4 dynamic-btn">
                        UPDATE PICKS
                    </router-link>
                    <!-- Conditional button if viewing friends page. -->
                    <div v-else-if="this.friendStatus" @click="removeFriend" class="btn grey darken-4">
                        Remove Friend
                    </div>

                    <!-- Conditional button if viewing non-friends page. -->
                    <button v-else class="btn grey darken-4 dynamic-btn" @click.stop.prevent="addFriend">Add Friend</button>
                </div>

            </div> 

            <br>
            <hr>
            <br>

            <div class="row">
                <div class="col s12">
                    <view-table :picks="this.picks"></view-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex';
import ViewTable from '../components/ViewTable'
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
    components: {
        ViewTable
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
    p {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .btn {
        width: 100%;
    }

    .dynamic-btn {
        margin-top: 10px;
    }

    .avatar-col {
        max-width: 175px;
    }

    .avatar-update {
        margin-top: 10px;
    }

    .row-flex {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .bottom {
        justify-content: flex-end;
    }

    .col-flex {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .avatar-col {
        max-width: 175px;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }
</style>
