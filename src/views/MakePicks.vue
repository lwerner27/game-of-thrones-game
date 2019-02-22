<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12 center">
                    <h3>Make Your Picks</h3>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <picks-table></picks-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PicksTable from '../components/PicksTable'
export default {
    components: {
        PicksTable
    }
}
</script>


<style scoped>
    .main-container {
        margin-top: 64px;
    }
</style>

