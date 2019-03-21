<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1>{{ this.searchTerm }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            "jwt"
        ])
    },
    data: function() {
        return {
            users: null,
            searchTerm: this.$route.params.searchTerm,
        }
    },
    mounted: function() {
        axios.defaults.headers.common['Authorization'] = this.jwt
        axios.get("/api/users/search/" + this.searchTerm)
        .then(res => {
            console.log(res.data)
        })
    }
}
</script>
