<template>
    <table class="striped">

        <thead>
            <tr>
                <th>Name/Question</th>
                <th>Selected Status/Answer</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(pick, key) in picks.characterPicks" v-bind:key="key">
                <td><strong>{{ pick.name }}</strong></td>
                <td> {{ pick.status }} </td>
            </tr>
            <tr>
                <td>
                    <strong>Is Danaerys pregnant:</strong>
                </td>
                <td>
                    {{ this.picks.bonusQuestions.isDannyPrego }}
                </td>
            </tr>
            <tr>
                <td>
                    <strong>Who kills the Night King:</strong>
                </td>
                <td>
                    {{ this.picks.bonusQuestions.nightKingKiller }}
                </td>
            </tr>
            <tr>
                <td>
                    <strong>Who holds the iron throne:</strong>
                </td>
                <td>
                    {{ this.picks.bonusQuestions.ironThroneSitter }}
                </td>
            </tr>
        </tbody>

    </table>
</template>

<script>
export default {
    props: [
        "picks"
    ]
}
</script>

