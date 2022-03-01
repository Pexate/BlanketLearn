<template>
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">3. Račualno razmišljanje i programiranje</h2>
        </div>
        <div class="main">
            <div style="background: none;" class="main-header">
                <h1 class="main-subsection"><span>3.1.</span></h1>
                <h2 class="main-title">Strukture i vrste podataka u Pythonu</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p>
                    Programski jezik Python razlikuije nekoliko vrsta jednostavih podataka. Neki od najbitnijih vrsta
                    podataka u Pythonu su:
                </p>
                <ul>
                    <li>Brojčani tipovi podataka: <span>cjelobrojni</span> (engl. Integer) i <span>decimalni</span> (engl. Float)</li>
                    <li><span>Znakovni niz</span> (engl. String)</li>
                    <li><span>Logički tip podataka</span> (engl. Boolean)</li>
                </ul>
                <h3>Brojčani tip podataka</h3>
                <p>
                    U Pythonu postoje dvije vrste brojčanih tipova podataka, a to su <span>cijelobrojni</span> (<span>Integer</span>) i <span>decimalni brojevi</span> (<span>Float</span>).
                    Cjelobrojne vrijednosti pišu se kao sami broj bez ikojeg nastavka (1, 0, 999, -100 itd.).
                    Decimalne vrijednosti se, kao i u matematici, prikazuju kao dvije vrijednosti odvojene točkom (3.1415, 1.00, -13.5 itd.)
                </p>
                <h4>Koje operacije možemo primjenjivati na decimalnim i cjelobrojnim vrijednostima?</h4>
                <p>
                    Operacije koje možemo primjenjivati na decimalne vrijednosti i cjelobrojne vrijednosti su:
                </p>
                <div class="align-image">
                    <img class="image123123" src="./tablica4.png" alt="" />
                </div>
                <h4>Kako decimalni broj pretvoriti u cijeli broj i obrnuto?</h4>
                <p>
                    <div class="box">
                        Funkcija int() u Pythonu pretvara decimalni broj u cijeli tako da odbaci decimalni dio broja i
                        vraća vrijednost cijelog djela broja
                        <div class="align-image">
                             <img class="code-image" src="./python1.png" alt="" />
                        </div>
                    </div>
                    <div class="box">
                        Funkcija float() u Pythonu pretvara cijeli broj u decimalni broj tako da mu pridruži toču te nulu
                        kao decimalni dio broja.
                        <div class="align-image">
                             <img class="code-image" src="./python2.png" alt="" />
                        </div>
                    </div>
                
                <h3>Logički tip podataka</h3>
                <p>
                    Logički tip podataka najčešće rabimo u naredbama grananja pri ispitivanju vrijednosti logičkih uvjeta.
                    Ponovimo, logički uvjet uvijek je neki logički izraz kojim nešto provjeravamo te koji može imati samo
                    dvije vrijedosti, <span>True</span> (istina) ili <span>False</span> (laž). U naredbama grananja (naredbe
                    <span>if, if...else, if...elif...else</span>) te ubijetnog ponavljanja (naredba <span>while</span>).
                    Također varijablama možemo pridružiti vrijednost logičkih izraza. Ako spremamo vrijednost relativanog uvijeta tj. logičkog
                    (više od, manje od, jednako...), uvijek će vrijednost biti True ili False.
                </p>
                <div class="imgbox">
                    <img class="code-image2" src="./python3.png" alt="">
                    <img class="code-image2" src="./python4.png" alt="">
                    <img class="code-image2" src="./python5.png" alt="">
                </div>
                <h3>Znakovni niz</h3>
                <p>
                    Znakovni niz podataka (string) osnovni je tip podataka u Pythonu za pohranjivanje tekstualnih vrijednosti.
                    To je niz znakova koji predstavlja riječ, rečenicu, znak ili bilo koju vrijednosti koja sadrži iskljućivo znakove.
                    Znakovni niz pišemo unutar zatvorenih polunavodnika ('') ili navodnika ("")
                </p>
                <div class="imgbox">
                    <img class="code-image3" src="./python6.png" alt="" />
                    <img class="code-image3" src="./python7.png" alt="" />
                </div>
                <p>
                    Također možemo zbrajati i množiti znakovne nizeve.
                </p>
                <div class="imagebox">
                    <div class="divtext">
                        <div class="align-image">
                            <img class="code-image3" src="./python8.png" alt="" />
                        </div>
                        <p>
                            Zbrajanjem dvaju znakovnih nizova nastaje novi znakovni niz nadovezivanjem jednog niza na drugi
                        </p>
                    </div>
                    <div class="divtext">
                        <div class="align-image">
                            <img class="code-image3" src="./python9.png" alt="" />
                        </div>
                        <p>
                            Množenjem znakovnog niza, niz se uvišestručuje. Jedan od operatora množenja mora biti cijeli broj.
                        </p>
                    </div>
                </div>
                <h3>Rad s dijelovima znakovnog niza - indeksiranje znakovnog niza</h3>
                <p>
                    Znakovni niz možemo promatrati kao niz znakova koji su poredani zadanim redosljedom. Brojčano označavanje položaja unutar
                    nekoga niza nazivamo <span>indeksiranje</span>. Tako svakom znaku untutar znakovnog niza možemo pridjeliti njegov redni broj
                    tj. <span>indeks</span>, počevši od 0 i završavajući do duljine znakovnog niza. 
                </p>
                <div class="align-image">
                    <img class="code-image3" src="./str.png" alt="" />
                </div>
                <p>
                    Način na koji možemo dohvatiti pojedini znak niza koristeći indeks je putem <span>notacije zagrada</span>. Napišemo ime varijable
                    koje sadržava znakovni niz i na nju dodamo uglate zagrade, a unutar uglatih zagrada dodamo indeks znaka (npr. string[3], tekst[0], itd.).
                </p>
                <div class="align-image">
                    <img class="code-image3" src="./index.png" alt="" />
                </div>
                <h3>Dohvačanje djela znakovnog niza - isječak znakovnog niza</h3>
                <p>
                    Ako želimo dohvatiti jedan dio tj. isječak iz nekog znakogvnog niza, moramo napisati indeks početenog i kranjeg znaka odabradnog
                    isječka odvojenih znakom <span>dvotočke</span> (<span>:</span>).
                </p>
                <div class="align-image">
                    <img class="code-image3" src="./pockra.png" alt="" />
                </div>
                <div class="align-image">
                    <img class="code-image3" src="./slice.png" alt="" />
                </div>
                <p>
                    Postoji nekoliko različitih načina dohvaćanja pojedinih dijelova znakovnog niza ovisno o otomou uključuje li isječak početni ili krajnji znak niza.
                    Isječak znakovnog niza koji uključuje početni znak može se obilježiti i bez indeksa 0, npr. umesto
                    string[0:3], možemo napisati string[:3]. <br><br>Također, ako isječak niza uključuje posljednji znak, tada ga nije potrebno navoditi u isječku, npr. string[2:].
                </p>
                                <div class="align-image">
                    <img class="code-image3" src="./slicenotdone.png" alt="" />
                </div>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question1" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/3cjelina/2/" class="button-alignment2 button-alignment">Nastavi</router-link>
            </div>
        </div>
    </div> 
</template>

<script>
export default {

}
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
    outline: 5px solid #d4c224; 
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
  outline: 15px solid #b2a002; 
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
  .buttons-align {
      flex-direction: column;
      align-items: center;
  }
  .image123123 {
    width: 90%;
    outline: 0px solid #b2a002; 
    outline-offset: 0px
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
</style>