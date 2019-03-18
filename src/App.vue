<template>
  <div id="app">
    <navbar />
    <custom-side-nav></custom-side-nav>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import CustomSideNav from './components/CustomSideNav'
export default {
  components: {
    Navbar,
    CustomSideNav
  }
}
</script>