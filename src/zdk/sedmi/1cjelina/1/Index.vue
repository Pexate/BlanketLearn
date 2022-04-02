<template>
  <div>
    <Navbar class="navbar1" :image="require('../../../../assets/inndex.jpg')" />
  <div class="wrapper987">
        <div class="header987"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1987">7.r.</h1>
            <h2 class="header-h2987">1 . Internet - život na mreži</h2>
        </div>
        <div class="main987">
            <div class="main-header987">
                <h1 class="main-subsection987"><span>1.1.</span></h1>
                <h2 class="main-title987">Jezik mreže, protokoli</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text987">
                <p class="little987">Svaki dan, internet raste i dobiva sve više korisnika. Velik broj korisnika katkad prouzroči zagušenje mreže što
                usporava ili čak privremeno onemogućuje korištenje pojedinih internetskih usluga. U svođenju opterećenja mreže na
                najmanju mjeru, najučinkovitijim se pokazao korisničko-poslužiteljski model.</p>
                <h3>KORISNIČKO POSLUŽITELJSKI MODEL</h3>
                <p>Najkorišteniji komunikacijski model korišten na web-stranicama je <span>KORISNIČKO-POSLUŽITELJSKI MODEL.</span>
                    U korisničko-poslužiteljskom modelu postoje dvije vrste uređaja koja su utemeljena na neravnopravnom odnosu:
                </p>
                <ul>
                    <li><span>Korisnik (client)</span>
                        <ul>
                            <li>uvijek počinje komunikaciju sa poslužiteljem</li>
                            <li>uloga je traženje podataka, usluga ili obavljanja nekog zadatka</li>
                        </ul>
                    </li>
                    <li><span>Poslužitelj (server)</span>
                        <ul>
                            <li>uvijek čeka zahtjev korisnika</li>
                            <li>uloga je obavljanje nekog zadatka ili usluge na zahtjev korisnika</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    Poslužitelji moraju imati veliku neprekidnu računalnu snagu zbog mogućnosti povezivanja većeg broja korisnika odjednom.
                    Posebni operativni sustavi računala poslužitelja namijenjeni su istodobnoj komunikaciji s velikim brojem korisnika.
                
                    U računalnoj mreži, žično ili bežično, povezuje se računalo korisnik s računalom poslužiteljem, čime međusobno
                    komuniciraju.
                </p>
                <h3>PROPUSTNOST MREŽE (BANDWITH)</h3>
                <p>Zamislimo jednu vrlo slabu mrežu, na kojoj je povezano više računala koja odjednom zahtjevljuju nešto od mreže.
                    Naravno, mreža se usporava i sporija je "brzina".
                    Tu "brzinu" mreže nazivamo propusnost veze (bandwith) i s njom izražujemo koliko treba paketu (informaciji) da se vrati
                    korisniku nakon slanja. Propusnost veze mjeri se najčešće u megabitovima po sekundi (Mbps), ali ponekad i u bitovima po
                    sekundi (bps).
                    Što je propusnost veća, to više računala mogu biti povezana odjednom.
                </p>
                <h3>KOMUNIKACIJA KORISNIKA I POSLUŽITELJA</h3>
                <p>Kada korisnik zatražuje nešto od poslužitelja, događa se proces koji se dijeli na 3 ključna dijela:</p>
                <ol>
                    <li><span>upit</span> - korisnik šalje zahtjev za obavljanje usluge</li>
                    <li><span>obrada</span> - poslužitelj obrađuje zahtjev korisnika</li>
                    <li><span>odgovor</span> - poslužitelj odgovara na zahtjev korisnika</li>
                </ol>
                <p>Nakon odgovora, poslužitelj prilazi u stanje čekanja i kada sljedeći korisnik šalje upit, proces se ponavlja.
                   Promet podataka i usluga teče prema unaprijed zadanim pravilima koja se nazivaju <span>PROTOKOLI</span>.
                </p>
                <h3>VRSTE POSLUŽITELJA I PROTOKOLA</h3>
                <p>Poslužitelje razvrstavamo po vrsti usluga koju pružaju korisnicima. Usluge i podatci su univerzalno prenošeni držeći
                se unaprijed definiranih pravila normi tj. protokola.
                Protokol je svojezvrsni jezik s pomoću kojega komuniciraju računala na mreži. 
                Neki od najkorištenijih protokola su:
                </p>
                <ul>
                    <li>
                        <span>HTTP / HTTPS</span> - koristi se za web stranice
                    </li>
                    <li>
                        <span>FTP</span> - koristi se za prijenos datoteka, jedino može postupiti autorizirani korisnik s adresom, korisničkim imenom i
                        šifrom
                    </li>
                    <li>
                        <span>SMTP</span> i <span>POP3</span> - koristi se za dostavljanje e-poruka, SMTP služi se za prijenos e-poruke sa pošiljatelja na poslužitelje, a
                        POP3 za dostavu e-poruke do primatelja
                    </li>
                </ul>
                <img src="./pog.png" alt="" class="image-border" />
                <img src="./tablica.png" alt="" class="image-border2">
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/1cjelina/question1" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/1cjelina/2/" class="button-alignment2 button-alignment">Nastavi</router-link>
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

.image-border {
  border: 15px #ed5e4a solid;
  width: calc(100% - 30px);
  height: auto;
  margin: 10px 0px;
}

.image-border2 {
  border: 15px #2d637f solid;
  width: calc(100% - 30px);
  height: auto;
  margin: 10px 0px;
}

.button-alignment {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  border-radius: 15px;
  width: 36%;
  height: 100px;
  font-size: 2em;
  font-weight: 900;
  margin-top: 10px;
  cursor: pointer;
  border: 5px white solid;
}

.button-alignment1 {
    background-color: #ed5e4a;
}

.button-alignment2 {
    background-color: #2d637f;
}

.buttons-align {
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.wrapper987 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d637f;
}
.header987 {
  background-color: #313131;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60vw;
  height: 25vh;
  margin-top: 15px;
  border: 10px solid #ed5e4a;
}
.header-h1987 {
  color: #ed5e4a;
  font-size: 2.5em;
  padding: 0;
  margin: 0;
}
.header-h2987 {
  color: white;
  font-size: 3em;
  padding: 0;
  margin: 0;
  text-decoration: underline;
}
.main987 {
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
  border: 10px solid #ed5e4a;
  text-align: left;
}
.main-header987 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #313131;
  color: white;
  border-radius: 15px;
  padding: 15px;
}

.main-subsection987,
.main-title987 {
  padding: 0;
  margin: 0;
}
.main-title987 {
  text-decoration: underline;
  font-size: 45px;
}
h3 {
  color: #ed5e4a;
  margin: 20px 0px
}
span {
  color: #ed5e4a;
}
ol, ul {
  margin: 5px 0px;
}
.main987 {
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
  .main-title987 {
    text-align: center;
  }
  .header987 {
    width: 80%;
  }
  .header-h2987 {
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
  .main987 {
    width: 85%;
    padding: 15px;
  }
}

@media only screen and (max-width: 480px) {
  .button-alignment {
    font-size: 1.2em;
  }
  .header-h2987 {
    font-size: 2em;
  }
  .header987 {
    width: 90%;
  }
}

</style>