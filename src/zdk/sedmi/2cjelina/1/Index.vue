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
                <h1 class="main-subsection"><span>2.1.</span></h1>
                <h2 class="main-title">Osnove rada u programu, prikupljanje i unos podataka</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <h3>Što su proračunske tablice?</h3>
                <p>
                    <span>Proračunske tablice</span> su programi za prikaz i obradu različitih podataka u tablicama i grafovima radi
                    organizacije ili boljeg razumijevanja.
                    
                    Program koji ćemo koristiti za kreiranje proračunskih tablica također je najpopularniji program za rađenje proračunskih
                    tablica i to je <span>Microsoft Excel</span> koji se nalazi u Microsoft Office-u.
                    Također se naziva <span>tablični kalkulator</span>.
                </p>
                <h3>Što je radna knjiga?</h3>
                <p>
                    Excelova datoteka naziva se <span>radna knjiga</span> i u nju upisujemo, obrađujemo i spremamo podatke. Nakon prvog pokretanja Excela
                    otvara se početna radna knjiga s nazivom "Knjiga1", no pri prvom spremanju datoteke možemo promjeniti naziv knjige.
                    <br><br>
                    Kao što se prava knjiga sastoji od listova, tako se i Excelova radna knjiga sastoji od <span>radnih listova</span>. Njih možemo
                    dodavati pritiskom na gumb "+" koji se nalazi pokraj kartice s nazivom radnog lista.
                    <br><br>
                    Radni se list sastoji od <span>ćelija složenih u retke i stupce</span>.
                    <br><br>
                    Stupci su označeni <span>tekstualnom vrijednošću</span> duljinom jednog znaka (A, B, C itd.), dva znaka (AA, AB, AC itd.) ili tri
                    znaka (AAA, AAB, AAC itd.) prolazeći kroz svaki <span>znak u engleskoj abecedi</span>.
                    <br><br>
                    Redci su označeni <span>numeričkom vrijednošću</span> (1, 2, 3 itd.), počinje se brojiti <span>od 1 do 1,048,576 ili 2²⁰ </span>(dva na dvadesetu
                    potenciju)
                    <br><br>
                    Ćelije su odvojene okomitim i vodoravnim crtama koje nisu vidljive pri ispisu na papir, osim ako drugačije ne odredimo.
                    <br><br>
                    Svaka ćelija ima svoju <span>adresu</span>, to jest vrijednost stupca i redka u kojem se ćelija nalazi (npr. stupac A i redak 3 će
                    biti A3). Adresu ćelije možemo naći u <span>Okviru naziva</span>.

                </p>
                <h3>Kako upisujemo podatke u ćelije?</h3>
                <p>
                    Kada pritisnemo na određenu ćeliju, zeleni okvir se pojavi označavajući koju smo ćeliju označili. Tada postaje <span>aktivna
                    ćelija</span>.
                    
                    U aktivnu ćeliju možemo unijeti podatak tipkajući na tipkovnici određeni podatak.
                    
                    Osnovne vrste podataka koje koristimo u Excelu su:
                </p>
                <ul>
                    <li><span>Brojevi</span> (cijeli, decimalni, datum, vrijeme, postotak)</li>
                    <li><span>Tekst</span> (slova, kombinacija slova i brojeva)</li>
                    <li><span>Formule</span></li>
                </ul>
                <p>
                    Excel automatski poravnava numeričke vrijednosti uz desni, a tekstualne uz lijevi rub aktivne ćelije.
                </p>
                <h3>Kako urediti tablice?</h3>
                <p>
                    Nakon što smo upisali podatke u tablicu, možemo ih urediti.
                    <br><br>
                    Ako se u ćeliji ne vidi sav napisani tekst, tada je potrebno <span>promijeniti visinu retka ili širinu stupca</span>.
                    <br><br>
                    Najprije moramo <span>označiti</span> (<span>selektirati</span>) stupac ili redak, a zatim odabrati gumb <span>Oblikovanje</span> (<span>Format</span>), koji se nalazi u
                    grupi <span>Ćelije</span> (<span>Cells</span>) na kartici <span>Polazno</span> (<span>Home</span>) te izabrati odgovarajuću naredbu na padajućem izborniku.
                    <br><br>
                    Ostala oblikovanja ćelija možemo pronaći u dijaloškom okviru Oblikovanje ćelija do kojeg dolazimo odabirom Pokretača
                    dijaloškog okvira (Dialog box launcher) u grupi Font.
                    <br><br>
                    Dijaloški okvir Oblikovanje ćelija omogućuje nam odabir:
                </p>
                <ul>
                    <li><span>Poravnavanje</span> - poravnanje, kontrolu i smjer, te usmjerenje teksta</li>
                    <li><span>Font</span> - vrstu, stil, veličinu i boju fonta</li>
                    <li><span>Obrub</span> - vrstu, širinu i boje obruba</li>
                    <li><span>Ispuna</span> - boju pozadine, efekata ispune, te boju i stil uzroka</li>
                </ul>
                <p>
                    Naredbom <span>Spremi kao</span> također možemo spremiti radnu knjigu pod nekim nazivom.
                </p>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/2cjelina/question1" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/2cjelina/2/" class="button-alignment2 button-alignment">Nastavi</router-link>
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