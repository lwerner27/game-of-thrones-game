<template>
    <div class="main-container">
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Select Status</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(pick, key) in picks" v-bind:key="key">
                    <td>{{ pick.name }}</td>
                    <td>
                        <div class="input-field col-s12">
                            <select id="select" v-model="picks[key].status">
                                <option class="option-color" value="Alive">Alive</option>
                                <option class="option-color" value="Dead">Dead</option>
                                <option class="option-color" value="White Walker">White Walker</option>
                            </select>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>

export default {
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
            }
        }
    }
}
</script>