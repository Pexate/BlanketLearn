<template>
    <div class="outside-wrapper">
        <h1 class="pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px rgba(255, 0, 0, 0.75)">3. Internet - život na mreži</h1>
        <div class="div-pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px rgb(255, 0, 0, 0.75)">
            <div class="aligning">
                <div class="pitanje">
                    <h3 class="text-pitanja">1. Najkorišteniji komunikacijski model na web-stranicama naziva se <input class="answer" type="text"></h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.75)">
                <div class="pitanje">
                    <h3 class="text-pitanja">2. Navedeni model ukljućuje dvije vrste uređaja neravnopravnog odnosa, to su <input class="answer" type="text"></h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.75)">
                <div class="pitanje">
                    <h3 class="text-pitanja">3. Tri kljućna dijela komunikacije između uređaja navedenog modela su <input class="answer" type="text"></h3>
                </div>
                <div class="bottom">
                    <button style="box-shadow: 0px 0px 5px 5px rgb(255, 0, 0, 0.5)" v-on:click="provjeriOdgovore">Provjeri</button>
                    <button class="dalje"><a href="/sedmi/1cjelina/2/">Preskoći</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const odgovori = [["korisničko-poslužiteljski model", "korisničko poslužiteljski model", "korisnicko-posluziteljski model", "korisničko-posluziteljski model", "korisnicko-poslužiteljski model", "korisnicko poslužiteljski model", "korisnicko posluziteljski", "korisnik posluzitelj", "korisničko poslužiteljski", "korisnik poslužiteljski"],
                  ["korisnik i poslužitelj", "korisnik poslužitelj", "korisnik posluzitelj", "korisnik i posluzitelj", "posluzitelj i korisnik", "poslužitelj i korisnik", "posluzitelj korisnik", "client i server", "client server", "server client", "server, client", "posluzitelj, korisnik", "server i client", "korisnik i server", "server i korisnik", "korisnik, server", "server, korisnik", "client i posluzitelj", "client i poslužitelj", "client, poslužitelj", "poslužitelj, client"],
                  ["upit, obrada, odgovor", "upit obrada odgovor", "upit, obrada i odgovor", "upit obrada i odgovor", "upit i obrada i odgovor"]]

export default {
  name: "question11",
  data() {
    return {
        provjeriOdgovore: () => {
          let questionDiv = document.getElementsByClassName("answer")
          for (let i = 0; i < questionDiv.length; i++) {
              let userInput = questionDiv[i].value.toLowerCase();
              questionDiv[i].classList.add("color-white")
              if (odgovori[i].includes(userInput)) {
                  console.log("tocno", questionDiv[i])
                  questionDiv[i].classList.add("green-color");
                  if (questionDiv[i].classList.length > 2) {
                      questionDiv[i].classList.remove("red-color");
                  }
              } else {
                  console.log("netocno" ,questionDiv[i])
                  questionDiv[i].classList.add("red-color");
                  if (questionDiv[i].classList.length > 2) {
                      questionDiv[i].classList.remove("green-color");
                  }
              } 
          }
                  
            let nastaviButton = document.querySelector(".dalje")
            nastaviButton.innerHTML = '<a style="text-decoration: none; color: white;" href="/sedmi/1cjelina/2/">Nastavi</a>'
            nastaviButton.classList.add("greenishyellow-color")
      }
    }
  }
}
</script>

<style scoped>
template {
  margin: 0;
  padding: 0;
  border: 0;
}
.pitanja {
  position: relative;
  font-size: 65px;
  color: white;
  z-index: 1;
}
.outside-wrapper {
  background: url(../questionmark.png) repeat-y;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
.question-wrapper {
  padding: 25px;
  background: #343434;
  /*box-shadow: 0px 0px 10px 10px rgba(237, 94, 74);*/
  width: auto;
  margin: 25px;
  max-width: 90%;
}
.small-text {
  font-size: 40px;
  padding: 15px;
  width: auto;
  margin-top: -10px;
}
* {
  font-family: Ubuntu, Helvetica, Arial;
}
.pitanje {
  color: white;
  font-size: 20px;
  display: flex;
  align-items: space-between;
  margin: 25px;
  justify-content: center;
  flex-direction: row;
  background: #343434;
  padding: 10px;
  transition: background 1s;
}

.bottom {
  width: 70%;
  display: flex;
  justify-content: center;
}

.dalje {
  margin-left: 25px;
  background: #cccc23;
  transition: background 1s;
  box-shadow: 0px 0px 5px 5px#cccc23;
}

.red-color {
  background: red;
  outline: 4px #d32123 solid;
  outline-offset: -4px;
  border-radius: 15px;
  color: white;
}

.green-color {
  background: green;
  border: 4px #215623 solid;
  border-radius: 15px;
  color: white;
}

.greenishyellow-color {
  background: #94d300;
}

.color-white {
  color: white;
}

hr {
  width: 50%;
  height: 0px;
  border: 0;
}
input,
option,
select {
  height: 32px;
  margin-left: 5px;
  background: white;
  transition: background 1s, color 1s, border-radius 1s;
  padding: 0px 15px;
  margin-top: 5px;
}

button {
  width: 300px;
  height: 75px;
  cursor: pointer;
  background: rgba(255, 0, 0, 0.75);
  border: 5px rgba(23, 23, 23, 0.3) solid;
  border-radius: 10px;
  color: white;
  font-weight: 900;
  font-size: 32px;
}
button:active {
  width: 300px;
  height: 75px;
  cursor: pointer;
  background: rgba(255, 0, 0, 0.5);
  border: 5px rgba(23, 23, 23, 0.2) solid;
  border-radius: 10px;
  color: white;
  font-weight: 900;
  font-size: 32px;
}

.text-pitanja {
  text-align: left;
  color: white;
}
.aligning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
}
@media only screen and (max-width: 720px) {
  .pitanja {
    font-size: 52px;
  }
  input,
  select {
      width: 90%;
  }
}

@media only screen and (max-width: 480px) {
  .pitanja {
    font-size: 25px;
    width: auto;
    text-align: center;
  }
  .text-pitanja {
    text-align: center;
    font-size: 20px;
  }
  .question-wrapper {
    padding: 20px 0px;
    width: 100%;
  }
  .pitanje {
    padding: 5px 0px;
  }
  .bottom {
    flex-direction: column;
    height: 172px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  button {
    width: 80%;
    font-size: 0.9em;
    margin-bottom: 8px;
  }
  input,
  select {
      width: 70%;
      margin-top: 8px;
  }
  .dalje {
    margin-left: 0px;
  }
}


</style>