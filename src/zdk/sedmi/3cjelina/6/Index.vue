<template>
    <div>
      <Navbar class="navbar1" :image="require('../../../../assets/inndex.jpg')" />
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">3. Računalno razmišljanje i programiranje</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>3.6.</span></h1>
                <h2 class="main-title">Funkcije u Pythonu (potprogrami)</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p>
                    U računalnim programima svaki slijed naredbi ima svoju ulogu. Jedan je dio naredbi zadužen za rad s ulaznim podatcima, neki je 
                    drugi dio zadužen za oblikovanje i prikazivanje rješenja, a dio naredbi bavi se obradom podataka prema zadanim uputama. Niz
                    naredbi koji čine neku funkcionalnu cjelinu dobro je izdvojiti kao neovisni dio programa. Takav niz naredbi nazivamo 
                    <span>funkcijom</span> ili <span>potprogramom</span>. 
                    <br><br>
                    Do sada smo se upoznali s nekoliko ugrađenih funkcija koje nudi Python kao što su <span>input()</span>,<span> print()</span>,
                    <span> int()</span>,<span> len()</span>..., ali također možemo samostalno napraviti naše funkcije.
                    <br><br>
                    Funkcije u Pythonu radimo tako da pišemo ključnu riječ <span>def</span>, ime funkcije i zagrade unutar kojih se nalaze
                    <span>parametri</span>. <span>Parametri</span> su varijable koje se isključivo mogu koristiti unutar funkcije.
                    <br><br>
                    Unutar funkcije pišemo naš blok koda, a na kraju možemo, ali i ne moramo <span>vratiti vrijednost</span>. 
                    <br><br>
                    <span>Vraćanje vrijednosti</span> radi na način
                    da ako unutar varijable pozovemo funkciju, vrijednost varijable nakon izvršavanja funkcije biti će jednaka onoj vrijednosti koju 
                    smo vratili. Vrijednost vraćamo tako na napišemo riječ <span>return</span> i nakon nje napišemo vrijednost koju vraćamo.
                </p>  
                <div class="align-image">
                    <img class="code-image code-image4" src="./python28.png" alt="" />
                </div>
                <p>
                    Funkcije dijelimo gledajući dva uvijeta: vraćaju li vrijednost nakon izvršavanja i imaju li ulaznih parametara.
                </p>
                <div class="align-image">
                    <img class="code-image code-image4" src="./python29.png" alt="" />
                </div>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question6" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/learningpage" class="button-alignment2 button-alignment">Na odabir cjeline</router-link>
            </div>
        </div>
    </div> 
    </div> 
</template>

<script>
import Navbar from "../../../../components/NavBar.vue"
export default {
  components: {
    Navbar,
  }
}
</script>

<style scoped>
.border-yellow {
  outline: 6px solid #d4c224; 
  outline-offset: -7px;
}

.imgbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 5px solid #d4c224; 
    margin: 30px 0px;
}
.code-image2 {
    width: 33.33333%;
}

.code-image4 {
    width: 100%;
    margin-bottom: 25px;
}

.code-image3 {
    width: 50%;
    margin: 10px 0px;
}

.code-image {
    margin-top: 25px;
}

.align-image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-alignment {
  color: white;
  border-radius: 15px;
  width: 36%;
  height: 100px;
  font-size: 2em;
  font-weight: 900;
  margin-top: 20px;
  cursor: pointer;
  border: 5px white solid;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.button-alignment1 {
    background-color: #d4c224;
}

.button-alignment2 {
    background-color: #2d637f;
}

.buttons-align {
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d637f;
}
.header {
  background-color: #313131;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70vw;
  height: 27vh;
  margin-top: 15px;
  border: 10px solid #d4c224;
  text-align: center;
}
.header-h1 {
  color: #d4c224;
  font-size: 2.5em;
  padding: 0;
  margin: 0;
}
.header-h2 {
  color: white;
  font-size: 3em;
  padding: 0;
  margin: 0;
  text-decoration: underline;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25px 50px;
  padding: 25px;
  background: #313131;
  color: white;
  font-family: Helvetica, Arial;
  font-size: 1.2em;
  border: 10px solid #d4c224;
}
@media only screen and (max-width: 300px) {
  .header {
    height: 32vh;
    width: 100vw;
    font-size: 0.9em;
  }
}
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #313131;
  color: white;
  border-radius: 15px;
  padding: 15px;
}

.main-subsection,
.main-title {
  padding: 0;
  margin: 0;
}
.main-title {
  text-decoration: underline;
  font-size: 45px;
}
h3,
a {
  color: #d4c224;
}
span {
  color: #d4c224;
}
.main {
  border-radius: 15px;
}
@media only screen and (max-width: 750px) {
  .image-border {
    border: 0px #ed5e4a solid;
    width: calc(100%);
    height: auto;
    margin: 10px 0px;
  }

  .image-border2 {
    border: 0px #ed5e4a solid;
    width: calc(100%);
    height: auto;
    margin: 10px 0px;
  }
  .main-title {
    text-align: center;
  }
  .header {
    width: 80%;
  }
  .header-h2 {
    font-size: 2.5em;
  }
}

@media only screen and (max-width: 750px) {
  .image-border {
    border: 0px #ed5e4a solid;
    width: calc(100%);
    height: auto;
    margin: 10px 0px;
  }

  .image-border2 {
    border: 0px #ed5e4a solid;
    width: calc(100%);
    height: auto;
    margin: 10px 0px;
  }
  .main-title {
    text-align: center;
  }
  .header {
    width: 80%;
  }
  .header-h2 {
    font-size: 2.5em;
  }
  .code-image {
    width: 90%;
  }
  .code-image3 {
      width: 90%;
  }
  .code-image2 {
      width: 90%;
  }
  .buttons-align {
      flex-direction: column;
      align-items: center;
  }
  .image123123 {
    width: 90%;
    outline: 0px solid #b2a002; 
    outline-offset: 0px
  }
}

@media only screen and (max-width: 650px) {
  .button-alignment {
      font-size: 1.5em;
      width: 100%;
  }
  .main {
    width: 85%;
    padding: 25px;
  }
}
@media only screen and (max-width: 480px) {
  .text {
      text-align: center;
      max-width: 100%;
  }
  .main {
    width: 95%;
    font-size: 20px;
    margin-left: -5px;
    margin-right: 0px;
  }
  .header-h2 {
    font-size: 2em;
  }
  li {
    margin-left: -20px;
  }
  .border-yellow {
    outline: 0px solid #d4c224; 
    outline-offset: 0px;
  }
  .code-image {
    width: 100%;
  }
  .code-image3 {
      width: 98%;
  }
  .code-image2 {
      width: 98%;
  }
  .edit2 {
    height: 130px;
    width: 300px;
  }
}
</style>