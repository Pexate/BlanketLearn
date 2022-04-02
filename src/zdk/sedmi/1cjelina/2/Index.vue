<template>
  <div>
     <Navbar class="navbar1" :image="require('../../../../assets/inndex.jpg')" />
  <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">1 . Internet - život na mreži</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>1.2.</span></h1>
                <h2 class="main-title">Mrežne komponente</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
            <p class="little">
                Koje su nam komponente potrebne za uspješno povezivanje računala na računalnu mrežu? Koja je od mrežnih komponenti
                najzaposlenija?
                Koje mrežne resurse najčešće dijelimo na mreži? Mogu li se ispisivati dokumenti s našeg pametnog telefona na Wi-Fi
                mrežni pisač? Na koje se načine možemo povezati s internetom? Što nam je najvažnije pri povezivanju?
                <br><br>
                Najvažnije <span>mrežne kompenente</span> za lokalnu mrežu (LAN):
            </p>
            <ul>
                <li>
                    <span>Mrežna kartica (NIC - Network Interface Card):</span>
                    <ul>
                        <li>Za žičane kartice:
                            <ul>
                                <li>Integrirana na matičnu ploču ili na mrežnoj kartici u PCI-E otvoru</li>
                                <li>Povezuje se sa <span>UTP</span> kabelom</li>
                            </ul>
                        </li>
                        <li>Za bežične kartice:
                            <ul>
                                <li>Ugrađena u pametne telefone, tablete, prijenosnike..., a i također se može dodati putem USB priključka na stolnim računalima</li>
                                <li>Povezuje se s <span>radiovalovima</span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Preklopnik (switch):</span>
                    <ul>
                        <li>uređaj koji mrežnim UTP kabelom povezuje sva računala i ostale uređaje u lokalnoj mreži</li>
                        <li>omogućuje da se više uređaja istodobno neometano koristi mrežom</li>
                        <li>upravlja svim prometom na mreži, dijeli promet svim povezanim uređajima i šalje ga</li>
                        <li>pakete čije je odredište izvan lokalne mreže šalje na usmjernik (router)</li>
                    </ul>
                </li>
                <li>
                    <span>Usmjernik (router):</span>
                    <ul>
                        <li>Povezan je <span>UTP kabelom s preklopnikom</span></li>
                        <li><span>Spaja više račulnalnih mreža </span>(npr. LAN s internetom) i<span> usmjerava pakete iz jedne u drugu mrežu</span></li>
                        <li>U njemu je često integrirano više uređaja, najčešće:
                            <ul>
                                <li>poslužitelj IP (Internet Protocol) adresa - <span>DHCP</span> (Dynamic Host Configuration Protocol) <span>server</span> -
                                    <span>automatski dodjeljuje IP adrese povezanim uređajima</span></li>
                                <li><span>pristupna točka </span>(<span>Access Point</span>) koja <span>emitira Wi-Fi signal bežične mreže</span> (<span>WLAN</span>) na koju se spajaju uređaji
                                    s bežičnim mrežnim karticama</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <span>UTP (Unshielded twisted pair) kabeli</span> - Neoklopljene upletene parice, služe za spajanje dvaju uređaja, jedan koji šalje podatke, a drugi koji prima.
                <br><br>
                <span>TCP/IP</span> (Transmission Control Protocol, Internet Protocol) - Protokoli s kojima se odvija mrežna komunikacija i razmjena
                paketa.
            </ul>
            <div class="align-images">
                <img src="./router.png" alt="" class="image-border image2" />
                <img src="./switch.png" alt="" class="image-border image1" />
            </div>
            <h3>Pristup internetu</h3>
            <p>
                Pristup internetu omogućuju nam tvrtke koje nazivamo <span> pružatelji internetskih usluga </span>(<span>ISP</span> - Internet Service Provider).    
                Svaki pružatelj internetskih usluga nakon prijave na njihove usluge nam daje korisnički račun. Uz korisnički račun dobivamo:
            </p>
            <ul>
                <li>Korisničko ime i zaporku</li>
                <li>Adresu E-pošte</li>
                <li>Prostor na poslužitelju za smještaj osobnih stranica (ne nude svi poslužitelji)</li>
            </ul>
            <p>
                Pristup internetu možemo ostvariti uporabom:
            </p>
            <ul>
                <li><span>DSL</span> (Digital Subscriber Line) ili digitalne pretplatničke linije</li>
                <li><span>Kabelske veze</span> (gdje postoji kabelska televizija)</li>
                <li><span>Optičke veze</span> (gdje postoji optička infrastruktura, najčešće koriste napredni korisnici, poduzeća, ustanove...)</li>
                <li><span>Mobilne mreže</span> (podatkovna i SIM kartica)</li>
                <li><span>Javne mreže</span></li>
            </ul>
            <h3>
                Brzina pristupa internetu
            </h3>  
            <p> 
                Jeste li ikada doživjeli da kada želite koristiti neke internetske servise kao što su YouTube, Google, Instagram, Tiktok,
                Facebook... ponekad se sve prestane učitavati?
                To je zato što je mreža opterečena i prima previše paketa.
                <br><br>
                Svaka mreža ima svoje <span>vrijeme odazivanja</span> (<span>span</span>), <span>brzinu preuzimanja</span> (<span>download speed</span>) i <span>brzinu slanja</span> (<span>upload speed</span>) koje
                fluktuiraju.
                <br><br>
                Kada mreža prima više paketa nego što može podnijeti, mreža se usporava da može procesirati sve svoje pakete i slati ih
                na svoju destinaciju ili se ugasi.
                <br><br>
                <span>Vrijeme odazivanja (ping) </span>mreže mjeri koliko milisekundi treba od slanja paketa vanjskosm poslužiteljom do primanja istog
                paketa natrag.
                <br><br>
                <span>Brzina preuzimanja (download) </span>mreže mjeri koliko megabita u sekundi (Mbps) treba da mreža preuzme datoteku.
                <br><br>
                <span>Brzina slanja (upload) </span>mreže mjeri koliko megabita u sekundi treba da mreža šalje datoteku.
            </p> 
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/1cjelina/question2" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/1cjelina/3/" class="button-alignment2 button-alignment">Nastavi</router-link>
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

.align-images {
  display: flex;
  height: 300px;
  width: 100%;
  justify-content: space-around;
}

.image-border {
  border: 15px #ed5e4a solid;
  width: calc(50% - 50px);
  margin: 10px 0px;
}

.image1 {
  width: 66%;
}

.image2 {
  width: 33%;
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
  border: 10px solid #ed5e4a;
}
.header-h1 {
  color: #ed5e4a;
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
  border: 10px solid #ed5e4a;
  text-align: left;
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
h3 {
  color: #ed5e4a;
  padding: 20px 0px;
}
span {
  color: #ed5e4a;
}
.main {
  border-radius: 15px;
}

.little {
  font-size: 16px;
}

li {
    padding: 2px 0;
}

@media only screen and (max-width: 1080px) {
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
  .header987 {
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
  .align-images {
    height: 160px;
  }
  .image1 {
    width: 200px;
  }
  .image2 {
    width: 100px;
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