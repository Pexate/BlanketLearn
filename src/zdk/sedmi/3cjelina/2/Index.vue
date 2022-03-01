<template>
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">3. Račualno razmišljanje i programiranje</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>3.2.</span></h1>
                <h2 class="main-title">Funkcije i metode za rad sa znakovnim nizovima</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p>
                    Pri izradi računalnih rješenja jedan je od prvih kooraka promišljanje o vrsti ulaznih podataka te načinu pohranjivanja tih podataka
                    u spremniku računala. Određene varijable u Pythonu možemo funkcijama <span>int()</span>, <span>float()</span> te <span>str()</span> pretvarati u određenu vrstu podataka.
                </p>
                <h3>Mogu li se brojčane vrijednosti pohranjivati ili upotrebljavati kao znakove?</h3>
                <p>
                    Sljedeća slika prikazuje dvije razlike između korištavanja operatora na cijelobrojni broj nasprama znakovnom nizu. U prvom primjeru smo jednostavno
                    zbrojili 2 ista cijelobrojna brojeva, a u drugom primjeru smo, prije zbrajanja, te brojeve koristeči str() funkciju pretvorili u znakovne nizove, što je uzrokovalo
                    spajanju dvaju nizova i dobili smo na kraju '55' umjesto 10.
                </p>
                <div class="imgbox">
                    <img class="code-image3" src="./python9.png" alt="" />
                    <img class="code-image3" src="./python10.png" alt="" />
                </div>
                <p>
                    U sljedećem primjeru možemo vidjeti da funkcija <span>len()</span> izbacuje duljinu zakovnog niza. Važno je napomenuti da se ubraja svaki
                    znak, uključujući razmak, točku, zarez, slova itd.
                </p>
                <div class="align-image">
                    <img class="code-image3" src="./python13.png" alt="" />
                </div>
                <p>
                    Osim operacija i funkcija, u radu sa znakovnim nizovima mogu se koristiti i metode. Neke od metoda koji nudi Python su:
                </p>
                <div class="align-image">
                    <img class="code-image3 code-image border-yellow edit" src="./tablica5.png" alt="" />
                </div>
                <p>
                    Ali koja je razlika između funkcije i metode? Razlika između metoda i funkcija je to što funkcije primaju
                    argumente unutar zagrada, a metode dodajemo na kraju argumenta tako da dodajemo točku pa ime metode. U sljedećem
                    primjeru možemo to vidjeti.
                </p>
                <div class="align-image">
                    <img class="code-image edit" src="./python14.png" alt="" />
                </div>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question2" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/3cjelina/3/" class="button-alignment2 button-alignment">Nastavi</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    flex-direction: column;
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
  width: 60vw;
  height: 20vh;
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
  font-family: Ubuntu, Helvetica, Arial;
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
.edit {
    width: 100%;
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
  .border-yellow {
    outline: 0px solid #d4c224; 
    outline-offset: 0px;
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
}
</style>