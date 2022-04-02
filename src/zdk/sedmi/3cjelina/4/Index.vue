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
                <h1 class="main-subsection"><span>3.4.</span></h1>
                <h2 class="main-title">Ugrađene funkcije i metode za rad s listama</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <h3>Ugrađene funkcije za rad s listama</h3>
                <p>
                    Uporabom nizova za pohranjivanje različitih podataka sa zajedničkim obilježjima omogućili smo jednostavniji pristup te pregledavanje
                    ulaznih poodataka. Python ima puno funkcija koje nam pomažu u radu s listama. To su:
                </p>
                <ul>
                    <li>
                        <p><b>len(a)</b> - Kao rezultat vraća duljinu liste</p>
                    </li>
                    <li>
                        <p><b>min(a)</b> - Kao rezultat vraća najmanji element liste</p>
                    </li>
                    <li>
                        <p><b>max(a)</b> - Kao rezultat vraća najveći element liste</p>
                    </li>
                    <li>
                        <p><b>sum(a)</b> - Kao rezultat vraća sumu svih elemenata liste</p>
                    </li>
                    <li>
                        <p><b>del(a[i])</b> - Briše element iz liste a sa indeksom i iz liste a</p>
                    </li>
                </ul>
                <h3>Ugrađene metode za rad s listama</h3>
                <p>
                    Osim operacija i funkcija, u radu s listama koriste se i <span>metode</span>. Ponovimo, metode su uvijek pridružene nekom objektu
                    (varijabli, listi...) i pozivaju se nakon objekta kojem su pridružene. Neke od metoda koje možemo upotrijebiti u Pythonu nalaze se u sljedećoj tablici:
                </p>
                <div class="align-image">
                    <img class="code-image code-image4 border-yellow" src="./python15.png" alt="" />
                </div>
                <p>
                    Na nekoliko primjera rada s listama prikazat ćemo uporabu navedenih metoda. 
                </p>
                <div class="imgbox">
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python16.png" alt="" />
                  </div>
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python17.png" alt="" />
                  </div>
                </div>
                <div class="imgbox">
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python18.png" alt="" />
                  </div>
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python19.png" alt="" />
                  </div>
                </div>
                <div class="imgbox">
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python20.png" alt="" />
                  </div>
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python21.png" alt="" />
                  </div>
                </div>
                <div class="imgbox">
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python22.png" alt="" />
                  </div>
                  <div class="align-image">
                    <img class="code-image code-image4" src="./python23.png" alt="" />
                  </div>
                </div>
                <h3>Stvaranje liste od ulaznih vrijednosti</h3>
                <p>
                    U prethodnom smo zadatku prikazali stvaranje lista podataka od zadanog broja ulaznih vrijednosti, ali što ako želimo pitati korisnika 
                    za ulazne vrijednosti i pretvoriti ih u listu? To ćemo napraviti s funkcijama <span>input()</span> i <span>split()</span>. Funkcija input() prima
                    ulaz od korisnika u obliku znakovnog niza, a metoda split() kreira listu na način da dijeli elemente u različite elemente liste ako su odvojeni razmakom.
                    Npr. ako pozovemo metodu split() na znakovni niz vrijednosti 'Miš Tipkovnica Slušalice', dobijemo listu znakovnih nizova ["Miš", "Tipkovnica", "Slušalice"]
                </p>
                <div class="align-image">
                    <img class="code-image code-image4" src="./python24.png" alt="" />
                </div>
                <p>
                    Ako u prošlom zadatku unosimo brojeve, oni će zapravo biti znakovni nizovi, a ako ih želimo pretvoriti u cijelobrojni broj, moramo koristiti
                    <span>for</span> petlju. Ako niste upoznati s for petljom, <a href="http://os-strozanac-podstrana.skole.hr/upload/os-strozanac-podstrana/newsattach/1014/Pythonfor.pdf">kliknite ovdje</a>. To ćemo napraviti na sljedeći način: 
                </p>
                <div class="align-image">
                    <img class="code-image code-image4" src="./python25.png" alt="" />
                </div>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question4" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/3cjelina/5/" class="button-alignment2 button-alignment">Nastavi</router-link>
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
</style>