<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h3>Rules of the Game</h3>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col s12 flow-text">
                    <ol class="browser-default">
                        <li>
                            <strong>Earn Points By:</strong>
                            <ul class="browser-default">
                                <li>Correctly guessing the status of each listed character at the end of the show.</li>
                                <li>10 points for correctly guessing alive or dead.</li>
                                <li>20 points for correctly guessing White Walker.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Bonus Questions and Point Values:</strong>
                            <ul class="browser-default">
                                <li>Is Danaerys pregnant? (10 Points)</li>
                                <li>Who Kills the Night King? (20 Points)</li>
                                <li>Who sits on the Iron Throne? (40 Points)</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="row" v-if="this.jwt">
                <div class="col s12">
                    <router-link tag="button" to="/makepicks" class="btn black">
                        Make Your Picks
                    </router-link>
                </div>
            </div>
            <div class="row" v-if="!this.jwt">
                <div class="col s12 m8 offset-m2">
                    <router-link tag="button" to="/" class="btn black">
                        Login
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState([
            "jwt"
        ])
    }
}
</script>