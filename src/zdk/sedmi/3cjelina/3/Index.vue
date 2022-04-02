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
                <h1 class="main-subsection"><span>3.3.</span></h1>
                <h2 class="main-title">Nizovi podataka - liste</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p>
                    Sljedeća vrsta podataka koju ćemo učiti je niz podataka to jest <span>lista</span>. <br><br>
                    <span>Lista</span> je struktura podataka koju možemo iskoristiti za pohranjivanje bilo kakvih podataka u bilo kojim količinama.
                    Liste se ponašaju kao redovi ljudi.  <br><br>Kada dodajemo element u listu, on dođe na kraj liste tj. reda. Svaki element u listi se ponaša
                    kao karakter u znakovnom nizu.  <br><br>Elemente liste možemo dohvatiti <span>indeksom</span> određenog elementa tako da napišemo
                    ime varijable (liste) i pokraj nje unutar uglatih zagrada napišemo indeks određenog elementa. Elementi liste mogu biti različite
                    vrste podataka, a pišu se unutar uglatih zagrada ([ ]) i odvojeni su zarezom. Npr. [1, 2, 3] ili ["zovem", "se", "Tonči"]. 
                     <br><br>U Pythonu također možemo <span>zbrajati (+)</span>, i <span>množiti (*)</span> liste.  Kada zbrajamo liste, uvijek zbrajamo dvije 
                    liste, a kada množimo jedan faktor mora biti lista, a drugi cijeli broj.
                </p>
                <div class="align-image">
                    <img class="code-image code-image4" src="./python30.png" alt="" />
                </div>
                <h3>Isječak liste</h3>
                <p>
                    Kao i kod znakovnog niza, isječak se definira upisivanjem indeksa početnog i završnog elementa isječka odvojenog dvotočkom.
                </p>
                <div class="align-image">
                    <img class="code-image code-image4 edit" src="./pockra2.png" alt="" />
                </div>
                <div class="align-image">
                    <img class="code-image code-image4" src="./python31.png" alt="" />
                </div> 
                <p>   
                    Kako znati koliko elementa zadržava lista? Prisjetimo se funkcije <span>len()</span> koju smo koristili za određivanje duljine 
                    znakovnog niza, a u listi je također možemo koristiti da dobijemo duljinu liste.
                </p>
                <div class="align-image">
                    <img class="code-image code-image3" src="./python32.png" alt="" />
                </div> 
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question3" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/3cjelina/4/" class="button-alignment2 button-alignment">Nastavi</router-link>
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
  outline: 10px solid #d4c224; 
  outline-offset: -2.5px;
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
    width: 95%;
  }
  .code-image3 {
      width: 95%;
  }
  .code-image2 {
      width: 95%;
  }
  .edit {
    height: 75px;
    width: 300px;
  }
}
@media only screen and (max-width: 300px) {
  .header {
    height: 32vh;
    width: 100vw;
    font-size: 0.9em;
  }
}
</style>