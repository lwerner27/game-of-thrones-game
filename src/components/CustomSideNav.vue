<template>
    <ul class="sidenav" id="mobile-demo">
        <router-link  v-if="this.$store.state.userId" tag="li" :to="'/user/' + userId"><a><i class="material-icons">account_circle</i>MY ACCOUNT</a></router-link>
        <router-link  v-if="userId" tag="li" to="/search"><a><i class="material-icons">search</i>SEARCH</a></router-link>
        <router-link tag="li" to="/rules">
            <a><i class="material-icons grey-text text-darken-4">format_list_numbered</i>RULES</a>
        </router-link>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState([
            "userId"
        ])
    }
}
</script>
