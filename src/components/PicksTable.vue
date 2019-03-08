<template>
    <div class="main-container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Select Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(pick, key) in picks" v-bind:key="key">
                            <td>{{ pick.name }}</td>
                            <td> {{ pick.status }} </td>
                            <td>
                                <button v-on:click.stop.prevent="toggleStatus" :value="key" class="btn waves-effect waves-light black">Toggle Status</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m2 offset-m2">
                <button class="btn waves-effect waves-light black save-btn" type="submit" name="action">
                    <div>
                        Save
                        <i class="material-icons left">save</i>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        "userId",
        "jwt",
        "userPicks",
        "picksLocked"
    ],
    data: function () {
        return {
            picks: {} // Will eventually hold the users picks obtained from the database.
        }
    },
    methods: {
        savePicks: function() {
            // This method will save the user picks to the database.
        },
        toggleStatus: function(event) {
            let character = event.target.value
            let characterStatus = this.picks[character].status
            if (characterStatus === "Alive") {
                this.picks[character].status = "Dead"
            } else if (characterStatus === "Dead") {
                this.picks[character].status = "Whitewalker"
            } else if (characterStatus === "Whitewalker") {
                this.picks[character].status = "Alive"
            }
        }
    },
    mounted() {
        this.picks = this.userPicks
    }
}
</script>

<style scoped>
    .save-btn {
        width: 100%;
        text-align: left;
    }
</style>
