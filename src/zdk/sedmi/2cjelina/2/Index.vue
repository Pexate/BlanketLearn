<template>
    <div>
      <Navbar class="navbar1" :image="require('../../../../assets/inndex.jpg')" />
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">2. Proračunske tablice</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>2.2.</span></h1>
                <h2 class="main-title">Obrada podataka - matematičke formule i funkcije</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p class="little">
                    Excel nam omogućuje računanje s vrijednostima koje se nalaze u ćelijama radnog lista.
                    To se postiže s pomoću formula koje upisujemo u ćelije. Formula obavlja izračune i druge akcije.
                    Iz toga proizlazi da Excel možemo upotrebljavati kao džepno računalo, a može nam poslužiti i za rješavanje
                    matematičkih problema, izračun otplata rata kredita itd.
                </p>
                <h3>Kako upisati formulu?</h3>
                <p>
                    Formule upotrebljavamo za zbrajanje, oduzimanje, množenje, dijeljenje ili uspoređivanje podataka u ćelijama
                    radnog lista. Svaka formula u Excelu počinje znakom jednakosti (=).

                    Elementi formule mogu biti:
                </p>
                <ul>
                    <li>brojevne vrijednosti</li>
                    <li>adrese ćelija</li>
                    <li>operatori</li>
                    <li>funkcije i </li>
                    <li>tekst</li>
                </ul>
                <p>
                    Podatke kojima koristima u Excelovim formulama povezujemo operatorima.
                    Formule upisujemo izravno u označenu ćeliju ili u traku formule (npr. =A1+B2*10)

                    Ako u formulama upotrebljavamo adresu ćelije, onda će se u formulu uvrstiti vrijednost upisana u toj ćeliji.
                </p>
                <img class="image-1" src="./tablica2.png" alt="" />
                <h3>Što su funkcije?</h3>
                <p>
                    Jedan od elemenata u formuli može biti i funkcija.
                    <span>Funkcije</span> su unaprijed definirane formule koje izvode izračune uz pomoć određenih <span>vrijednosti</span>
                    (<span>argumenata</span>), točno zadanim redoslijedom. Argumenti mogu biti:
                </p>
                <ul>
                    <li>brojevne vrijednosti</li>
                    <li>tekstualne vrijednosti</li>
                    <li>adrese ćelija</li>
                    <li>konstante</li>
                    <li>formule ili</li>
                    <li>druge funkcije.</li>
                </ul>
                <h4>Pravilo pisanja funkcije (Sintaksa funkcije)</h4>
                <p>
                    <br>
                    Funkcija se počinje pisati s znakom jednakosti (=), nakon čega slijedi naziv funkcije, otvorena obla zagrada, argumenti odvojeni zarezima ili dvotočkom,
                    te zatvorena obla zagrada.
                    <br><br>
                    Ako pišemo dvotočku između argumenata, funkcija će raditi promjene koristeći samo te adrese, ali ako pišemo dvotočku između
                    argumenata onda će funkcija raditi promjene koristeći sav prostor između tih adresa (uključujući te adrese).
                    Na primjer, ako napišemo "=sum(a1:b3)", ćelija u kojoj smo napisali tu funkciju promjeniti će vrijednost na zbroj adresa A1, A2,
                    A3, B1, B2 i B3.
                    <br><br>
                    Neke od najčešćih funkcija koje ćemo koristiti su:
                </p>
                <img class="image-1" src="./tablica3.png" alt="" />
                <h3>Ostale funkcije Excela</h3>
                <p>
                    U Excelu postoje još veliki broj funkcija.
                    Sve Excelove funkcije možemo naći na kartici Formule, u grupi Biblioteka funkcija.
                    Vrste formula su:
                </p>
                <ul>
                    <li>Zbrojevi</li>
                    <li>Financijske</li>
                    <li>Logičke</li>
                    <li>Tekstne</li>
                    <li>Datum i vrijeme</li>
                    <li>Pretraživanje i reference</li>
                    <li>Matematika i trigonometrija i</li>
                    <li>Ostale (nekategorizirane)</li>
                </ul>
                <h3>Ugnježđivanje funkcija u Excelu</h3>
                <p>
                    Unutar jedne funkcije možemo koristiti druge funkcije kao argumente.
                    Npr.
                    =IF(SUM(A1:D4)>AVERAGE(E1:H4); "Zbroj je veći od prosjeka"; "Zbroj nije veći od prosjeka")
                    U primjeru, unutar funkcije IF su ugrađene funkcije SUM i AVERAGE.
                </p>
                <h3>Nizovi podataka</h3>
                <p>
                    Ako selektiramo odabranu ćeliju, u donjem desnom kutu se nalazi mali crni kvadrat kojeg nazivamo
                    ručica za popunjavanje.
                    Ako držimo ručicu i mičemo miš, odjednom moožem odabrati više ćelija.
                </p>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/2cjelina/question2" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/2cjelina/3/" class="button-alignment2 button-alignment">Nastavi</router-link>
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
.image-1 {
  width: 60%;
  outline: 15px solid #457575; 
  outline-offset: -2.5px;
  margin-top: 25px;
  position: relative;
  left: calc(80% - 60% - 12.5px);
}

.additional {
  margin-bottom: 35px;
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
    background-color: #66919a;
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
  border: 10px solid #66919a;
}
.header-h1 {
  color: #66919a;
  font-size: 2.5em;
  padding: 0;
  margin: 0;
}
.header-h2 {
  color: white;
  font-size: 3.5em;
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
  border: 10px solid #66919a;
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
  text-align: center;
}
h3 {
  color: #66919a;
}
span {
  color: #66919a;
}
.main {
  border-radius: 15px;
}
@media only screen and (max-width: 750px) {
  .image-1 {
    width: 60%;
    outline: 0; 
    margin-top: 25px;
    left: 0;
    width: 100%;
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

@media only screen and (max-width: 650px) {
  .button-alignment {
      font-size: 1.5em;
      width: 100%;
  }
  .buttons-align {
      flex-direction: column;
      align-items: center;
  }
  .main {
    width: 85%;
    padding: 15px;
  }
  .main-title {
    font-size: 2em;
  } 
}

@media only screen and (max-width: 480px) {
  .button-alignment {
    font-size: 1.2em;
  }
  .header-h2 {
    font-size: 2em;
  }
  .header {
    width: 90%;
  }
}
</style>