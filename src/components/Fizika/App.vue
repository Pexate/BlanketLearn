<template>
  <div id="app">
      <Navbar :image="require('../../assets/inndex.jpg')" />
      <Main :image="require('../../assets/fizikabanner.png')" />
 </div>
</template>

<script>
import Navbar from "../All/navbar"
import Main from "./main"
export default {
  name: 'App3',
  components: {
    Navbar,
    Main
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
