<template>
    <div class="table-container">
        <div class="container">
            <div class="row">
                <div class="col s12 center">
                    <h3>Make Your Picks</h3>
                </div>
            </div>
            <picks-table 
                :userPicks="this.picks" 
                :userId="this.userId" 
                :jwt="this.jwt" 
                :picksLocked="this.picksLocked" 
                :picksMade="this.picksMade" >
            </picks-table>
        </div>
    </div>
</template>

<script>
import PicksTable from '../components/PicksTable'
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    components: {
        PicksTable
    },
    computed: {
        ...mapState([
            "userId",
            "picks",
            "jwt",
            "picksLocked",
            "picksMade"
        ])
    }
}
</script>

<style scoped>
    .table-container {
        margin-top: 64px;
    }
</style>