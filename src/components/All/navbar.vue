<template>
  <div class="wrapper">
    <div class="image_wrapper">
      <img :src="image" class="image_header" alt="">
      <h1 class="header">BlanketLearn</h1>
    </div>
    <div class="button_wrapper">
      <a href="/index">
        <button class="button pocetna-button" v-on:click="linkButton1();">Početna</button>
      </a>
      <a href="/informatika">
        <button class="button informatika-button">Informatika</button>
      </a>
      <a href="/fizika">
        <button class="button fizika-button">Fizika</button>  
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  props: {
    image: String
  },
  methods: {
    linkButton1() {
      console.log("a")
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu);
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
}
.wrapper {
  background-color: #2D637F;
  margin: -8px -8px 0 -8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 15px 20px 0px;
}
.header {
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
}
.informatika-button {
  background: linear-gradient(0.15turn, #e66465, #9198e5);
  border: 2px solid white;
}
.pocetna-button {
  background: linear-gradient(0.15turn, #1D536F, #9198e5);
  border: 2px solid white;
}
.fizika-button {
  background: linear-gradient(to right, orange, #d15353);
  border: 2px solid white;
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
  .wrapper { flex-direction: column; height: 160px;}
}
@media only screen and (max-width: 550px) {
  .button { width: 120px; height: 75px; border-radius: 10px; font-size: 1em; }
  .image_header { font-size: 1.2em; margin-left: -20px;}
  .header { font-size: 1em; }
  .wrapper { flex-direction: column; height: 200px;}
}
@media only screen and (max-width: 390px) {
  .button { width: 70px; height: 45px; border-radius: 10px; font-size: 1em; margin: 0 5px;}
  .image_header { font-size: 0.8em; }
  .header { font-size: 1em; }
  .wrapper { flex-direction: column; height: 130px;}
}
</style>
