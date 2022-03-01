<template>
    <div class="outside">
        <Navbar :image="require('../assets/inndex.jpg')" />
        <div class="wrapperrr">
            <h1 class="h111">Informatika 🖥️</h1>
            <h2 class="h222">"Testiranje vodi do neuspjeha, a neuspjeh vodi do razumijevanja." <br> - Burt Rutan</h2>
            <img class="imggg" src="../assets/cfghjhjkfgzj.png" alt="">
            <router-link class="btn" to="/learningpage">Nastavi →</router-link>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/NavBar";
export default {
  name: "Learn",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
    border: 0;
    margin: 0;
}
.wrapperrr {
    margin: 0px -8px;
    background: rgba(0, 0, 0, 1);
    border: 0;
    padding: 0;
    height: 92vh;
    width: 101%;
}
.imggg {
    position: relative;
    z-index: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 70%;
}
.h111 {
    position: absolute;
    z-index: 1;
    color: black;
    padding: 30px;
    font-size: 6em;
    font-weight: 900;
    text-align: center;
    max-width: 850px;
    top: 15%;
    left: 5%;
    background-color: white;
    border-radius: 25px;
}
.h222 {
    position: absolute;
    z-index: 1;
    color: white;
    font-size: 2.5em;
    font-weight: 900;
    text-align: center;
    max-width: 750px;
    top: 35%;
    left: 2.5%;
}
.btn { 
    position: absolute;
    top: 75%;
    right: 15%;
    font-size: 50px;
    border-radius: 20px;
    width: 200px;
    background: white;
    color: black;
    text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .h1 { font-size: 5em; }
  .h2 { font-size: 2.5em; max-width: 500px; top: 34%; left: 10%; }
}
@media screen and (max-width: 720px) {
  .h1 { font-size: 4em; left: 14%; }
  .h2 { left: 14%; top: 32.5%; }
  .btn { left: 36%; }
}
@media screen and (max-width: 660px) {
  .h1 { font-size: 4em; left: 10%; }
  .h2 { left: 10%; top: 32.5%; }
  .btn { left: 36%; }
}
@media screen and (max-width: 600px) {
  .h1 { font-size: 3em; left: 17.5%; top: 35%; }
  .h2 { font-size: 2.5em; left: 7%; top: 50%; }
  .btn { top: 90%; left: 23.75%; width: 50%; height: 65px;}
}
@media screen and (max-width: 540px) {
  .h1 { font-size: 3em; left: 13%; top: 35%; }
  .h2 { font-size: 2.5em; left: 2%; top: 50%; }
  .btn { top: 90%; left: 23.75%; width: 50%; height: 65px;}
}
@media screen and (max-width: 480px) {
  .h1 { font-size: 3em; top: 42.5%; left: 10%; }
  .h2 { font-size: 2.2em; top: 57%; left: 0%;}
  .btn { left: 27%; }
  .img { margin-left: -37px; }
}
@media screen and (max-width: 420px) {
  .h1 { font-size: 3em; top: 42.5%; left: 1%; }
  .h2 { font-size: 2.2em; top: 57%; left: 0%;}
  .btn { left: 11%; width: 80%; margin-bottom: 100px; }
  .img { margin-left: -37px; }
}
</style>