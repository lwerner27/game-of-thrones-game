<template>
    <nav class="grey darken-4">
        <div class="nav-wrapper container">
            <a class="flow-text">The Game of Game of Thrones</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link tag="li" to="/rules">
                    <a>Rules</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<style>
    nav {
        position: fixed;
        top: 0;
        z-index: 900;
    }
</style>
