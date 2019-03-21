<template>
    <div class="navbar-fixed">
        <nav class="nav-extended grey darken-4">
            <div class="nav-wrapper container">
                <a class="hide-on-small-only brand-logo">THE GAME OF GAME OF THRONES</a>
                <a class="show-on-small hide-on-med-and-up brand-logo center">T.G.O.G.O.T.</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link  v-if="userId" tag="li" to="/search"><a><i class="material-icons">search</i></a></router-link>
                    <router-link  v-if="userId" tag="li" :to="'/user/' + userId">
                        <a><i class="material-icons">account_circle</i></a>
                    </router-link>
                    <router-link tag="li" to="/rules"><a>RULES</a></router-link>
                </ul>
            </div>
        </nav>
    </div>
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