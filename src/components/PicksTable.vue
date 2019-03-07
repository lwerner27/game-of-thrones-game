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
            picks: {
                johnSnow:{
                    name: "John Snow",
                    status: "Alive"
                },
                sansaStark:{
                    name: "Sansa Stark",
                    status: "Alive"
                },
                aryaStark:{
                    name: "Arya Stark",
                    status: "Alive"
                },
                branStark:{
                    name: "Bran Stark",
                    status: "Alive"
                },
                cerseiLannister:{
                    name: "Cersei Lannister",
                    status: "Alive"
                },
                jaimeLannister:{
                    name: "Jaime Lannister",
                    status: "Alive"
                },
                tyrionLannister:{
                    name: "Tyrion Lannister",
                    status: "Alive"
                },
                daenerysTargaryen:{
                    name: "Daenerys Targaryen",
                    status: "Alive"
                },
                yaraGrayjoy:{
                    name: "Yara Greyjoy",
                    status: "Alive"
                },
                melisandre:{
                    name: "Melisandre",
                    status: "Alive"
                },
                jorahMormont:{
                    name: "Jorah Mormont",
                    status: "Alive"
                },
                theHound:{
                    name: "The Hound",
                    status: "Alive"
                },
                theMountain:{
                    name: "The Mountain",
                    status: "Alive"
                },
                samwellTarley:{
                    name: "Samwell Tarley",
                    status: "Alive"
                },
                gilly:{
                    name: "Gilly",
                    status: "Alive"
                },
                lordVarys:{
                    name: "Lord Varys",
                    status: "Alive"
                },
                brienne:{
                    name: "Brienne",
                    status: "Alive"
                },
                davosSeaworth:{
                    name: "Davos Seaworth",
                    status: "Alive"
                },
                bron:{
                    name: "Bronn",
                    status: "Alive"
                },
                podrickPayne:{
                    name: "Podrick Payne",
                    status: "Alive"
                },
                tormundGiantsbane:{
                    name: "Tormund Giantsbane",
                    status: "Alive"
                },
                grayWorm:{
                    name: "Gray Worm",
                    status: "Alive"
                },
                gendry:{
                    name: "Gendry",
                    status: "Alive"
                },
                bericDondarrion: {
                    name: "Beric Dondarrion",
                    status: "Alive"
                },
                euronGrayjoy:{
                    name: "Euron Grayjoy",
                    status: "Alive"
                },
                picksMade: true 
            }
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
        if (this.userPicks.picksMade) {
            this.picks = this.userPicks
        }
    }
}
</script>

<style scoped>
    .save-btn {
        width: 100%;
        text-align: left;
    }
</style>
