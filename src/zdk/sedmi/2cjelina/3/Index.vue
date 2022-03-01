<template>
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">2. Proračunske tablice</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>2.3.</span></h1>
                <h2 class="main-title">Analiza i prikaz podataka</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
               <h3>Kako analizirati podatke u Excelu?</h3>
               <p>
                   Često je potrebno analizirati podatke koje smo prikupili u Excelovim tablicama. Za 
                   analiziranje podataka možemo se koristiti alatima na kartici <span>Sortiranje i filtriranje. </span>
                   <br><br><span>Sortiranje</span> podataka je sastavni dio analize podataka. Koristimo se njime ako želimo
                   popis naziva poredati po abecednom redu (od A do Ž ili od Ž do A), složiti popis ocjena od najviše
                   do najniže, poredati datume od najstarijih do najnovijih itd.
                   <br><br>
                   <span>Filtriranje</span> podataka je izdvajanje podataka iz skupa podataka prema zadanom kriteriju
                   (primjerice, veći od 10, počinje slovom M itd.). Nakon filtriranja prikazuju se samo oni redci koji
                   zadovoljavaju kriterije koje smo naveli, a ostali redci skriveni.
                   <br><br>
                   Ako želimo „očistiti” sortiranja i filtriranja koja smo primjenili nad podatcima, odabiremo naredbu očisti.
               </p>
               <h3>Umetanje komentara</h3>
               <p>
                   Katkad je potrebno dodati bilješke u ćelijama kako bismo dodatno objasnili upisane podatke. Bilješke 
                   možemo dodavati umetanjem <span>komentara</span> kao što je prikazano na sljedećoj slici.
               </p>
               <div class="align-image">
                  <img class="image-1" src="./umetanjekomentara.png" alt="" />
               </div>
               <div class="align-image">
                  <img class="image-1" src="./komentar.png" alt="" />
               </div>
               <p>
                   Čelije koje sadržavaju komentar dobivaju u gornjem-desnom kutu oznaku, crveni trokutić, a sadržaj 
                   komentara prikazat će se kada postavimo pokazivač miša na tu ćeliju.
               </p>
               <h3>Kako prikazati podatke?</h3>
               <p>
                    U poslovnom svijetu vrlo je bitno prikazivati podatke na zanimljive, edukativne i lako razumljive
                    načine. Jedan od najboljih načina kako možemo prikazivati podatke je putem <span>grafikona</span>. 
                    <span>Grafikoni</span> su grafički prikaz brojčanih podataka, a upotrebljavamo ih kako bismo lakše mogli usporediti
                    odrađene podatke.
                    Kako bismo napravili grafikon, moramo imati tabliu s podatcima. Nakon što označimo ćelije s podatcima. 
                    Nakon što označimo ćelije s podatcima, odabeemo vrstu grafikona kojim želimo prikazati podatke. Uđemo u 
                    karticu Insert (Umetanje) i odabramo određeni grafikon ili stisnemo gumb „Preporučeni grafikoni” gdje će 
                    nam Excel preporučiti određeni grafikon.
               </p>
               <h3>Koji grafikon odabrati?</h3>
               <p>
                   Postoji nekoliko vrsta grafikona, a svaka je namijenjena prikazu određenih vrsta podataka. <br><br>Tako postoje:
               </p>
               <ul>
                   <div>
                   <li><span>stupčasti i trakasti grafikoni</span> za uspoređavanje unesenih vrijednosti</li>
                   <li><span>linijski i površinski grafikoni</span> za prikaz trendova, tj. rasta ili pada pojedine vrijednosti</li>
                   <li><span>tortni i prstenasti grafikoni</span> za prikaz udjela pojedinih podataka u grupi podataka</li>
                   <li>itd.</li>
                   </div>
               </ul>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/2cjelina/question3" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/learningpage" class="button-alignment2 button-alignment">Na odabir cjeline</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.image-1 {
  width: 40%;
  outline: 15px solid #66919a; 
  outline-offset: -2.5px;
  margin: 25px 0px;
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
  font-size: 1.5em;
  text-align: center;
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
  font-family: Ubuntu, Helvetica, Arial;
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
  margin: 15px;
}
span {
  color: #66919a;
}
.main {
  border-radius: 15px;
}

ul {
  display: flex;
  justify-content: space-between;
  width: 115%;
}

li {
  margin: 10px 0px;
  width: 80%;
}

@media only screen and (max-width: 750px) {
  .image-1 {
    width: 60%;
    outline: 0; 
    margin-top: 25px;
    left: 0;
    width: 100%;
  }
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
  .main-title987 {
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