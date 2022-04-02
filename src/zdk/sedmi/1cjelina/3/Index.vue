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
                <h1 class="main-subsection"><span>1.3.</span></h1>
                <h2 class="main-title">Sigurnost na mreži</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <h3>IKT i kako su odabrano poslovi poboljšani razvojem informatike</h3>
                <p>U većini današnjih institucija, najvjerojatnije možete naći zaposlenika koji radi na računalu.
                Računala se koriste u velikom broju zanimanja vezanima za različite sektore.
                Informatičar je zanimanje koja se bavi aktivnostima vezanima za računalnu i komunikacijsku tehnologiju, prilagođavanjem
                sustava strojne i programske opreme po potrebama tvrtke u kojoj rade, pisanje računalnih programa prilagođenim potrebama
                korisnika...            
                </p>
                <h3>Suradnja među članovima virtualne zajednice</h3>
                <p>U današnje se vrijeme institucije često koriste višekorisničkim sustavima gdje su računala zaposlenika spojena u mrežu.
                Poslovni uspjeh institucije uvelike ovisi o uspješnosti suradnje među članovima zajednice.
                
                Rijedak je slučaj da jedan posao obavlja jedna osoba. Zato je vrlo važna raspodjela poslova unutar zajednice ili
                razredima.
            
                Neke od platforma za umrežavanje osoba unutar neke zajednice ili razreda su:</p>
                <div class="images-right">
                  <ul>
                      <li><span>Whatsapp</span></li>
                      <li><span>Yammer</span></li>
                      <li><span>Teams</span></li>
                      <li><span>Discord</span></li>
                      <li><span>Slack...</span></li>
                  </ul>
                  <div class="images">
                      <img class="image-1 image" src="./WhatsApp.svg.png" alt="" />
                      <img class="image-2 image" src="./yammer-logo-C753733585-seeklogo.com.png" alt="" />
                      <img class="image-3 image" src="./Microsoft_Office_Teams_(2018–present).svg" alt="" />
                  </div>
                </div>
                <p class="aligning-top">
                    Sve nabrojane platforme spadaju u <span>IKT</span> <br><br>
                    <span>IKT</span> (<span>informacijske i komunikacijske tehnologije</span>) su tehnologije kojima je svrha umrežavanje, komunikacija ili razmjena
                    informacija)
                </p>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/1cjelina/question3" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/learningpage" class="button-alignment2 button-alignment">Na odabir cjeline</router-link>
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

<style>

.aligning-top {
  margin-top: -35px;
}

.image {
  filter: drop-shadow(2.5px 2.5px 0px white) drop-shadow(5px 5px 4px #ed5e4a);
  width: 125px;
  margin: 20px 25px;
}

.images {
    margin-top: -20px;
    margin-bottom: 30px;
}

.images-right {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.button-alignment {
  color: white;
  border-radius: 15px;
  width: 36%;
  height: 100px;
  font-size: 1.5em;
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
  margin: 40px 0px;
}

ul, ol {
  margin: 10px 0px;
}

span {
  color: #ed5e4a;
}
.main {
  border-radius: 15px;
}

@media only screen and (max-width: 850px) {
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
  .button-alignment {
    font-size: 1.2em;
  }
}

@media only screen and (max-width: 700px) {
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
  .images-right {
    flex-direction: column;
  }
  .image {
    width: 100px;
  }
}

@media only screen and (max-width: 550px) {
  .button-alignment {
    font-size: 1.2em;
  }
  .header-h2 {
    font-size: 2em;
  }
  .header {
    width: 90%;
  }
  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
}
</style>