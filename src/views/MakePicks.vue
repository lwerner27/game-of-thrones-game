<template>
    <div class="table-container">
        <div class="container">
            <div class="row">
                <div class="col s12 center">
                    <h3>Make Your Picks</h3>
                </div>
            </div>
            <picks-table></picks-table>
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
    .table-container {
        margin-top: 64px;
    }
</style>