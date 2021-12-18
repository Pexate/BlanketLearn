<template>
    <div class="wrapper-wrapper">
        <div class="aaaaa">
            <h1 class="h1">Odaberi ⬇️⬇️⬇️</h1>
        </div>
        <div class="wrapper">
            <img :src="source1" class="image" v-on:click="link('informatika')" alt="" />
            <img :src="source2" class="image" v-on:click="link('fizika')" alt="" />
        </div>
  </div>
</template>

<script>
export default {
  name: 'selection',
  props: {
      source1: String,
      source2: String,
      },
  methods: {
      link(predmet) {
          let str = "/" + predmet
          window.location.href = str;
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu);
.wrapper-wrapper {
    margin: -8px 0px;
}
.wrapper { 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 0;
}
.image {
    box-sizing: border-box;
    width: 50%;
    margin: 0px;
    border: 16px solid white;
}
.image:hover {
    cursor: pointer;
}
.aaaaa { display: flex; justify-content: center; width: 98.5%;}
.h1 {
    display: flex;
    position: absolute;
    justify-content: center;
    font-size: 2em;
    width: 100%;
    margin-top: -70px;
    color: white;
    background-color: black;
    padding: 25px;
    font-family: Ubuntu, Arial, Helvetica, sans-serif;
}
.wrapper-wrapper {
    background-color:#437EA7;
}
@media screen and (max-width: 800px)  {
    .h1 { font-size: 2em; padding: 20px; }
}
@media screen and (max-width: 700px)  {
    .h1 { font-size: 1.3em; padding: 15px; margin-top: -50px;}
    .wrapper { flex-direction: column; }
    .image { width: 100%; }
}
</style>