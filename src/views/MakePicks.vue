<template>
    <div class="table-container">
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
    .save-btn {
        width: 100%;
        text-align: left;
    }
</style>