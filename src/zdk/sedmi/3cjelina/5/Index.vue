<template>
    <div class="wrapper">
        <div class="header"> <!-- {{ prop.title }}} -->
            <h1 class="header-h1">7.r.</h1>
            <h2 class="header-h2">3. Račualno razmišljanje i programiranje</h2>
        </div>
        <div class="main">
            <div class="main-header">
                <h1 class="main-subsection"><span>3.5.</span></h1>
                <h2 class="main-title">Traženje u listama</h2> <!-- {{ prop.subtitle }}} -->
            </div>
            <div class="text">
                <p>
                    Pri rješavanju zadataka često je potrebno pronaći određeni podatak ili njegovo mjesto u znakovnom nizu, 
                    odnosno ispitati sadržava li zadani ni određenu vrijednost.

                    Metodom <span>find()</span> pronalazimo mjesto na kojemu se nalazi neka vrijednost u zadanoj listi. Ona vraća indeks tog
                    elementa kojeg tražimo.

                    U sljedećem primjeru možemo vidjeti primjere u kojima se koristi metoda find():
                </p>
                <div class="align-image">
                    <img class="code-image code-image4 edit2" src="./python26.png" alt="" />
                </div>
                <p>
                    U navedenim primjerima pretraživali smo riječi koje nisu sadržavale zadanu vrijednost ili se ta vrijednost samo jedanput pojavila.
                    No, zadane se vrijednosti vrlo česte pojavljuju više puta unutar znakovnog niza. <br><br> S obzirom na to a metoda <span>find()</span>
                    bilježi samo mjesto prvog pojavljivanja zadane vrijednosti unutar znakovnog niza, moramo pronaći neki drugi način kojim ćemo
                    zabilježiti sva mjesta na kojima se pojavljuje zadana vrijednost. <br><br>Sljedeća slika prikazuje prijedlog rješenja u kojemu se koristi
                    lista podataka za pohranjivanje svih mjesta na kojima se nalazi zadana vrijednost.
                </p>
                <div class="align-image">
                    <img class="code-image code-image4 edit2" src="./python27.png" alt="" />
                </div>
                <p>
                    Također, sva pravila koje vijede za znakovne nizove koristeći metodu find() vrijede i za liste.
                </p>
            </div>
            <div class="buttons-align">
                <router-link to="/sedmi/3cjelina/question5" class="button-alignment1 button-alignment">Pitanja</router-link>
                <router-link to="/sedmi/3cjelina/6/" class="button-alignment2 button-alignment">Nastavi</router-link>
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
  .edit2 {
    height: 130px;
    width: 300px;
  }
}
</style>