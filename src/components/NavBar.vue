<template>
  <div class="wrapper12345">
    <div class="image_wrapper">
      <router-link class="" to="/"><img :src="image" class="image_header" alt=""></router-link>
      <router-link class="" to="/"><h1 class="header123123">BlanketLearn</h1></router-link>
    </div>
    <div class="button_wrapper">
      <router-link class="button pocetna-button" to="/">Početna</router-link>
      <router-link class="button informatika-button" to="/learningpage">Kreni</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  props: {
    image: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu);
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
}
.wrapper12345 {
  background-color: #2D637F;
  margin: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100vw;
}
.header123123 {
  color: white;
  font-size: 2em;
}
.image_header {
  width: 5em;
}
.image_wrapper {
  display: flex;
  align-items: center;
  border: 0;
  margin: 0;
}
.button_wrapper {
  display: flex;
  justify-content: space-evenly
}
.button {
  border-radius: 15px;
  color: white;
  height: 50px;
  width: 130px;
  font-size: 1em;
  margin: 0 10px;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.informatika-button {
  background: linear-gradient(0.15turn, #e66465, #9198e5);
  border: 2px solid white;
}
.pocetna-button {
  background: linear-gradient(0.15turn, #1D536F, #9198e5);
  border: 2px solid white;
}
a {
  text-decoration: none;
}

@media only screen and (max-width: 1024px) {
  .button { width: 120px; }
}
@media only screen and (max-width: 720px) {
  .button { width: 85px; font-size: 0.85em;}
  .image_header { font-size: 0.8em; }
  .header { font-size: 1.7em; }
}
@media only screen and (max-width: 600px) {
  .button { width: 150px; font-size: 1.3em }
  .image_header { font-size: 0.8em; }
  .header { font-size: 1.2em; }
  .wrapper12345 { flex-direction: column; height: 160px;}
}
@media only screen and (max-width: 520px) {
  .button { width: 40vw; height: 42.5px; border-radius: 10px; font-size: 1em; margin: 0 5px; margin-bottom: 5px;}
  .image_header { font-size: 0.8em; }
  .header123123 { font-size: 1.5em; }
  .wrapper12345 { flex-direction: column; height: 120px; }
}
</style>