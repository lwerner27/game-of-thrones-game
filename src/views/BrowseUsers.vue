<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="row">
                        <div class="col s12">
                            <h2>Browse Users</h2>
                            <hr>
                        </div>
                    </div>
                    <div class="row user-row" v-for="user in this.users" :key="user._id">
                        <div class="col s3 m2">
                            <div class="btn grey darken-4">
                                <i class="fas fa-user-plus"></i>
                            </div>
                        </div>
                        <div class="col s9 m10">
                            <router-link tag="a" :to="'/user/' + user._id">
                                <h6>{{ user.username }}</h6>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            users: null,
        }
    },
    methods: {
        getUsers: function() {
            axios.defaults.headers.common['Authorization'] = this.$store.state.jwt
            axios.get("/api/users/browse/all")
            .then(res => {
                this.users = res.data
            })
        }
    },
    mounted: function() {
        this.getUsers()
    }
}
</script>

<style scoped>
    a {
        color: black;
        text-decoration: none;
    }

    .user-row {
        margin: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .hr-row {
        margin: 0px;
    }

    .user-row:hover {
        background-color: #efefef
    }
</style>