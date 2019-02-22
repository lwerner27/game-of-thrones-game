<template>
    <div class="main-container">
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Alive</th>
                    <th>White Walker</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(pick, index) in userPicks" v-bind:key="index">
                    <td>{{ pick.name }}</td>
                    <td>
                        <label>
                            <input v-if="pick.alive === true" type="checkbox" class="filled-in" checked="checked" />
                            <input v-else type="checkbox" class="filled-in" checked="unchecked" />
                            <span></span>
                        </label>
                    </td>
                    <td>
                        <label>
                            <input v-if="pick.whiteWalker === true" type="checkbox" class="filled-in" checked="checked" />
                            <input v-else type="checkbox" class="filled-in" checked="unchecked" />
                            <span></span>
                        </label>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            "userPicks"
        ])
    }
}
</script>

<style>
    input, span {
        z-index: -1;
    }
</style>

