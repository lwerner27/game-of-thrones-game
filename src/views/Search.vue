<template>
    <div class="main-container valign-wrapper">
        <div class="container">
            <div class="row">
                <div class="col s12 m4 offset-m4 z-depth-2">
                    <div class="row top-row">
                        <cust-text-input v-model="searchText" inputType="text" inputId="searchText" labelFor="searchText">
                            Search Usernames
                        </cust-text-input>
                        <div class="col s12">
                            <button @click="searchDatabase" class="btn grey darken-4">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyTextInput from '../components/MyTextInput';
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    data: function() {
        return {
            searchText: ""
        }
    },
    methods: {
        searchDatabase: function() {
            axios.defaults.headers.common['Authorization'] = this.jwt
            axios.get(`/api/users/username/${this.searchText.toLowerCase()}`)
            .then(res => {
                this.$router.push("/user/" + res.data._id)
            })
        }
    },
    computed: {
        ...mapState([
            "jwt"
        ])
    },
    components: {
        CustTextInput: MyTextInput
    }
}
</script>

<style scoped>
    .main-container {
        margin-top: -64px;
        height: 100vh;
    }
    button {
        margin: 0px;
        width: 100%;
    }
    .top-row {
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>