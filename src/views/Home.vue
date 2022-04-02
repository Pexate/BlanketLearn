<template>
<div class="wrapper2">
    <Navbar class="navbar1" :image="require('../assets/inndex.jpg')" />
    <Quote  class="quote" :source="require('../assets/girllayinginbed.jpg')"/>
</div>
</template>

<script>
import Navbar from "../components/NavBar.vue"
import Quote from "../components/Quote.vue"
export default {
  name: 'Home',
  components: {
      Navbar,
      Quote,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Helvetica, Courier, monospace, Arial;
}

.navbar1 { 
  width: 100vw;
}
</style>