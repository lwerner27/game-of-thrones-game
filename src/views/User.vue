<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1>lwerner</h1>
                    <p>current score: 20</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            console.log("You are logged in a different user.")
        }
    }
}
</script>