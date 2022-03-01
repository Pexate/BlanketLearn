<template>
  <div class="wrapper123">
    <h1 class="h1">Nauči Informatiku u udobnosti svog prekrivača</h1>
    <div class="wrapper23">
      <img class="imga" :src="source" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
      source: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//db.onlinewebfonts.com/c/1c5965c2b1dcdea439b54c3ac60cee38?family=Ubuntu");
* {
  font-family: 'Ubuntu', Helvetica, Courier, monospace;
}
.wrapper23 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #313131;
  position: relative;
}
.imga {
  object-fit: cover;
  object-position: center;
  height: 91.5vh;
  width: 100vw;
}
.h1 { 
    position: fixed;
    z-index: 99;
    color: white;
    font-size: 3.5em;
    font-weight: 900;
    width: 95%;
    top: 50%;
    text-shadow: 4px 4px #2D637F, 6px 6px #4D839F;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px;
}

.wrapper123 {
  display: flex;
  align-items: center;
  height: 91.5vh;
  width: 100%;
}

@media only screen and (max-width: 720px){
  .h1 { 
    margin-left: -80px;
    top: 45%;
  }
}
@media only screen and (max-width: 660px){
  .h1 { 
    margin-left: -50px;
  }
}
@media only screen and (max-width: 600px){
  .h1 { 
    margin-left: -95px;
  }
}
@media only screen and (max-width: 550px){
  .h1 { 
    margin-left: -80px;
  }
}
@media only screen and (max-width: 540px){
  .h1 { 
    margin-left: -60px;
  }
}
@media only screen and (max-width: 480px){
  .h1 { 
    margin-left: -35px;
    top: 40%;
  }
}
@media only screen and (max-width: 420px){
  .h1 { 
    margin-left: 5px;
    top: 37%;
  }
}
@media only screen and (max-width: 350px){
  .h1 { 
    margin-left: 5px;
    font-size: 3em;
    top: 42.5%;
  }
}
@media only screen and (max-width: 290px){
  .h1 { 
    margin-left: 5px;
    font-size: 2.5em;
  }
}
@media only screen and (max-width: 250px){
  .h1 { 
    margin-left: 0px;
    font-size: 2.3em;
  }
}
</style>