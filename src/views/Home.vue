<template>
    <div class="main-container valign-wrapper">
        <div class="container">
            <div class="row">
                <div class="col s12 m4 offset-m4">
                    <login-form />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
    data: () => (
        {
            username: "",
            password: ""
        }
    ),
    components: {
        LoginForm
    }
}
</script>


<style scoped>
    .main-container {
        height: 100vh;
    }
</style>
