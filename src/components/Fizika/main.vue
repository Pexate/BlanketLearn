<template>
  <div class="wrapper">
      <h1 class="h1">Fizika ⚛️</h1>
      <h2 class="h2">“Ne samo da je Svemir čudniji nego što mislimo, on je čudniji nego što možemo misliti.” <br> - Werner Heisenberg</h2>
      <img class="img" v-bind:src="image" alt="">
  </div>
</template>

<script>

export default {
  name: 'main',
  props: {
      image: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu);
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
    border: 0;
    margin: 0;
}
.wrapper {
    margin: 0px -8px;
    background: rgba(0, 0, 0, 0.8);
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-left: -35px;
}
.img {
    position: relative;
    z-index: 0;
    object-fit: cover;
    width: 100%;
    height: 92vh;
    opacity: 30%;
}
.h1 {
    position: absolute;
    z-index: 1;
    color: white;
    font-size: 7em;
    font-weight: 900;
    text-align: center;
    max-width: 850px;
    top: 40%;
    margin-left: 16px;
}
.h2 {
    position: absolute;
    z-index: 1;
    color: white;
    font-size: 2.5em;
    font-weight: 900;
    text-align: center;
    max-width: 750px;
    top: 55%;
    margin-left: 16px;
}

@media screen and (max-width: 1024px) {
  .h1 { font-size: 5em; }
}
@media screen and (max-width: 720px) {
  .h1 { font-size: 4em; }
}
@media screen and (max-width: 600px) {
  .h1 { font-size: 3em; }
}
@media screen and (max-width: 480px) {
  .h1 { font-size: 5em; }
}
</style>
