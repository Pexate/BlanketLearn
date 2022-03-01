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
@import url("//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu");
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
}

.navbar1 { 
  width: 100vw;
}
</style>