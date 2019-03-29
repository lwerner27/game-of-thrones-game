<template>
    <div class="main-container valign-wrapper">
        <div class="container">

            <div class="row">
                <br>
                
                <div class="col s12 m4 offset-m1 character-col">
                    <div class="characters-container">
                        <img class="character-img responsive-img" v-for="character in this.characters" :key="character"
                            :src="`../assets/CharacterImages/${character}.jpg`" :data-value="character"
                            @click="changeAvatar">
                    </div>
                </div>

                <div class="col s8 m6 offset-s2 avatar-col">
                    <img :src="`../assets/CharacterImages/${this.avatar}.jpg`" class="center responsive-img avatar" alt="">
                    <div class="btn grey darken-4">
                        Save
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import characters from "../shared/characters.js"
import axios from "axios"
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState([
            "avatar"
        ])
    },
    data: function() {
        return {
            characters: characters
        }
    },
    methods: {
        ...mapMutations([
            "UPDATE_AVATAR"
        ]),
        changeAvatar: function(event) {
            this.UPDATE_AVATAR(event.target.dataset.value)
        }
    }
}
</script>

<style scoped>
 .main-container {
     height: 100vh;
     margin-top: -64px;
 }

 .characters-container {
     max-height: 500px;
     margin-top: 5px;
     overflow-y: scroll;
 }

 .btn {
     width: 100%;
 }

 .character-img {
     margin-bottom: 10px;
 }

 @media screen and (max-width: 600px) {
     .main-container {
         height: auto;
     }
     .characters-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: auto;
     }

     .character-img {
     margin-right: 10px;
     max-height: 175px;
    }

    .character-col {
        margin-bottom: 10px;
        margin-top: 64px;
    }

 }
</style>



