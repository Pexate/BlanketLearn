<template>
  <div>
    <Navbar class="navbar1" :image="require('../../../../assets/inndex.jpg')" />
    <div class="wrapper">
      <div class="header">
        <!-- {{ prop.title }}} -->
        <h1 class="header-h1">7.r.</h1>
        <h2 class="header-h2">4. Višemedijska posla</h2>
      </div>
      <div class="main">
        <div style="background: none" class="main-header">
          <h1 class="main-subsection"><span>3.1.</span></h1>
          <h2 class="main-title">Strukture i vrste podataka u Pythonu</h2>
          <!-- {{ prop.subtitle }}} -->
        </div>
        <div class="text">
          <h3>Prikaz slike na zaslonu</h3>
          <p>
            Zasloni su posvud oko nas. Zasloni koji se nalaze na našim uređajima
            se dijele na dvije vrste tehnologija zaslona. <br /><br />
            To su:
          </p>
          <ul>
            <li>
              <span>LCD</span> - Zaslon tekučeg kristala (Liquid Crystal
              Display)
            </li>
            <li>
              <span>LED</span> - Zaslon svjetlosnih dioda (Light Emmiting Diode)
            </li>
          </ul>
          <p>
            Zasloni se, osim po tehnologiji izrade, razlikuju i po veličini
            (duljine dijagonale zaslona) te po razlučivosti, a mogu biti i
            osjetljivi na dodir (touch screen).
            <br /><br />
            Duljine dijagonale zaslone mjerimo mjernom jedinicom inč (inch), a
            razlučivost mjerimo brojem piksela u jednom redu i stupcu. Npr.
            standardna razlučivost za zaslone stolnih računala jest 1920px x
            1080px, gdje 1920px označava broj piksela u jednom redu, a 1080px
            označava broj piksela u jednom stupcu. Ukupan broj piksela računamo
            množenjem oba broja. 1920px x 1080px = 2 073 600 px.
          </p>
          <h3>Od čega je izgrađena slika na zaslonu monitora?</h3>
          <p>
            <span>Piksel</span> je najmanji gradivni element slike (picture
            element - pel - piksel). <br /><br />
            On se sastoji od triju podpiksela, crvenoga, zelenoga i plavoga
            (<span style="color: red">R</span
            ><span style="color: green; font-weight: 900">G</span
            ><span style="color: blue">B</span> -
            <span style="color: red">R</span>ed
            <span style="color: green">G</span>reen
            <span style="color: blue">B</span>lue)
          </p>
          <p></p>
          <h3>Što je razlučivost i o čemu ovisi razlučivost zaslona?</h3>
          <p>
            <span>Razlučivost</span> je  definirana ukupnim brojem elemenata slike (piksela) ili brojem piksela
            po jedinici dužine, najčešće piksela po inču
          </p>
          <div class="imgbox"></div>
          <h3>Znakovni niz</h3>
          <p>
            Znakovni niz podataka (string) osnovni je tip podataka u Pythonu za
            pohranjivanje tekstualnih vrijednosti. To je niz znakova koji
            predstavlja riječ, rečenicu, znak ili bilo koju vrijednosti koja
            sadrži iskljućivo znakove. Znakovni niz pišemo unutar zatvorenih
            polunavodnika ('') ili navodnika ("")
          </p>
          <div class="imgbox"></div>
          <p>Također možemo zbrajati i množiti znakovne nizeve.</p>
          <div class="imagebox">
            <div class="divtext">
              <div class="align-image"></div>
              <p>
                Zbrajanjem dvaju znakovnih nizova nastaje novi znakovni niz
                nadovezivanjem jednog niza na drugi
              </p>
            </div>
            <div class="divtext">
              <div class="align-image"></div>
              <p>
                Množenjem znakovnog niza, niz se uvišestručuje. Jedan od
                operatora množenja mora biti cijeli broj.
              </p>
            </div>
          </div>
          <h3>Rad s dijelovima znakovnog niza - indeksiranje znakovnog niza</h3>
          <p>
            Znakovni niz možemo promatrati kao niz znakova koji su poredani
            zadanim redosljedom. Brojčano označavanje položaja unutar nekoga
            niza nazivamo <span>indeksiranje</span>. Tako svakom znaku untutar
            znakovnog niza možemo pridjeliti njegov redni broj tj.
            <span>indeks</span>, počevši od 0 i završavajući do duljine
            znakovnog niza.
          </p>
          <div class="align-image"></div>
          <p>
            Način na koji možemo dohvatiti pojedini znak niza koristeći indeks
            je putem <span>notacije zagrada</span>. Napišemo ime varijable koje
            sadržava znakovni niz i na nju dodamo uglate zagrade, a unutar
            uglatih zagrada dodamo indeks znaka (npr. string[3], tekst[0],
            itd.).
          </p>
          <div class="align-image"></div>
          <h3>Dohvačanje djela znakovnog niza - isječak znakovnog niza</h3>
          <p>
            Ako želimo dohvatiti jedan dio tj. isječak iz nekog znakogvnog niza,
            moramo napisati indeks početenog i kranjeg znaka odabradnog isječka
            odvojenih znakom <span>dvotočke</span> (<span>:</span>).
          </p>
          <div class="align-image"></div>
          <div class="align-image"></div>
          <p>
            Postoji nekoliko različitih načina dohvaćanja pojedinih dijelova
            znakovnog niza ovisno o otomou uključuje li isječak početni ili
            krajnji znak niza. Isječak znakovnog niza koji uključuje početni
            znak može se obilježiti i bez indeksa 0, npr. umesto string[0:3],
            možemo napisati string[:3]. <br /><br />Također, ako isječak niza
            uključuje posljednji znak, tada ga nije potrebno navoditi u isječku,
            npr. string[2:].
          </p>
          <div class="align-image"></div>
        </div>
        <div class="buttons-align">
          <router-link
            to="/sedmi/3cjelina/question1"
            class="button-alignment1 button-alignment"
            >Pitanja</router-link
          >
          <router-link
            to="/sedmi/3cjelina/2/"
            class="button-alignment2 button-alignment"
            >Nastavi</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../../../components/NavBar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.small-height {
  height: 50%;
}
.imgbox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px solid #d47024;
  margin: 30px 0px;
}
.code-image2 {
  width: 33.33333%;
}

.code-image3 {
  width: 50%;
  margin: 10px 0px;
}

.image123123 {
  width: 35%;
  outline: 15px solid #85491c;
  outline-offset: -2.5px;
  margin: 40px 0px;
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
  background-color: #d47024;
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
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70vw;
  height: 27vh;
  margin-top: 15px;
  border: 10px solid #d47024;
  text-align: center;
}
.header-h1 {
  color: #d47024;
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
  color: white;
  font-family: Helvetica, Arial;
  font-size: 1.2em;
  border: 10px solid #d47024;
}
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
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
  margin-bottom: 20px;
}
h3,
a {
  color: #d47024;
}
span {
  color: #d47024;
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
  .buttons-align {
    flex-direction: column;
    align-items: center;
  }
  .image123123 {
    width: 90%;
    outline: 0px solid #854a1c;
    outline-offset: 0px;
  }
  .imgbox {
    flex-direction: column;
  }
  .code-image3 {
    width: 90%;
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
  .header-h2 {
    font-size: 2em;
  }
  .code-image {
    width: 90%;
  }
  li {
    margin-left: -20px;
  }
}
@media only screen and (max-width: 420px) {
  .main {
    margin-left: 50px;
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
