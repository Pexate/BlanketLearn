<template>
  <div id="app">
    <Navbar :image="require('../../assets/inndex.jpg')"/>
    <Quote  :source="require('../../assets/girllayinginbed.jpg')"/>
    <Selection :source1="require('../../assets/informatika.png')" :source2="require('../../assets/fizika.png')"/>
 </div>
</template>

<script>
import Navbar from "../All/navbar"
import Quote from './quote.vue'
import Selection from './selection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Quote,
    Selection,
  }
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
