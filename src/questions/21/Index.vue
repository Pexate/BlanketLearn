<template>
  <div class="color">
      <Navbar class="navbar1" :image="require('../../assets/inndex.jpg')" />
      <div class="outside-wrapper">
        <h1 class="pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #66919a">2. Proračunske tablice</h1>
        <div class="div-pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #66919a">
            <div class="aligning">
                <div class="pitanje">
                    <h3 class="text-pitanja">1. Što su proračunske tablice:
                        <select class="multiple-choice" name="pitanje-1" id="pitanje-1">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">Stranica na kojoj možemo obraditi različite podatke u obliku tablica</option>
                            <option value="two">Stranica na kojoj možemo prikazivati i obrađivati određene podatke u obliku tablica i grafikona</option>
                            <option value="three">Programi na kojima možemo obraditi i prikazivati određene podatke u obliku tablica i grafikona</option>
                            <option value="four">Programi na kojima možemo obraditi i prikazivati određene podatke u obliku grafikona</option>
                        </select>
                    </h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #66919a">
                <div class="pitanje">
                    <h3 class="text-pitanja">2. Redci u Microsoft Excelu označeni su:
                        <select class="multiple-choice" name="pitanje-2" id="pitanje-2">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">Numeričnom vrijednošću</option>
                            <option value="two">Tekstualnom vrijednošću</option>
                            <option value="three">Numeričnom vrijednošću i tekstualnom vrijednošću</option>
                            <option value="four">Određenim znakom engleske abecede</option>
                        </select>
                    </h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #66919a">
                <div class="pitanje">
                    <h3 class="text-pitanja">3. Ćelija koju smo označili u Microsoft Excelu zove se <input class="answer" type="text"></h3>
                </div>
                <div class="bottom">
                    <button style="box-shadow: 0px 0px 5px 5px #66919a" v-on:click="provjeriOdgovore()">Provjeri</button>
                    <button class="dalje"><router-link to="/sedmi/2cjelina/2/">Preskoči</router-link></button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from "../../components/NavBar.vue"
const odgovori = [["aktivna", "aktivna ćelija", "aktivna čelija", "aktivna celija"]]
const multiple_choice_odgovori = ["three", "one"]
export default {
    name: "question21",
    data() {
        return {
            provjeriOdgovore: () => {
                let questionDiv = document.getElementsByClassName("answer")
                let questionDiv2 = document.getElementsByClassName("multiple-choice")
                for (let i = 0; i < questionDiv.length; i++) {
                    let userInput = questionDiv[i].value.toLowerCase();
                    questionDiv[i].classList.add("color-white")
                    if (odgovori[i].includes(userInput)) {
                        console.log("tocno", questionDiv[i])
                        questionDiv[i].classList.add("green-color");
                        if (questionDiv[i].classList.length > 2) {
                            questionDiv[i].classList.remove("red-color123");
                        }
                    } else {
                        console.log("netocno" ,questionDiv[i])
                        questionDiv[i].classList.add("red-color123");
                        if (questionDiv[i].classList.length > 2) {
                            questionDiv[i].classList.remove("green-color");
                        }
                    } 
                }
                for (let i = 0; i < questionDiv2.length; i++) {
                    let userInput = questionDiv2[i].value
                    if (userInput == multiple_choice_odgovori[i]) {
                        questionDiv2[i].classList.add("green-color");
                        if (questionDiv2[i].classList.length > 2) {
                            questionDiv2[i].classList.remove("red-color123");
                        }
                    } else {
                        questionDiv2[i].classList.add("red-color123");
                        if (questionDiv2[i].classList.length > 2) {
                            questionDiv2[i].classList.remove("green-color");
                        }
                    } 
                }
                let nastaviButton = document.querySelector(".dalje")
                nastaviButton.innerHTML = '<router-lnk style="text-decoration: none; color: white;" to="/sedmi/2cjelina/2/">Nastavi</router-link>'
                nastaviButton.classList.add("greenishyellow-color")
                /*
                if (correct) {
                    prikazi("#tocno")
                } else {
                    prikazi("#netocno")
                }
                */
            }
        }
    },
  components: {
    Navbar,
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

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
  font-family: Helvetica, Arial;
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
}

.red-color123 {
  background: rgba(255, 0, 0, 0.75);
  border: 4px red solid;
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
  background: #74d300;
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
  color: black;
}

button {
  width: 300px;
  height: 75px;
  cursor: pointer;
  background: #66919a;
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
  background: #86b1ba;
  border: 5px rgba(23, 23, 23, 0.2) solid;
  border-radius: 10px;
  color: white;
  font-weight: 900;
  font-size: 32px;
}

.text-pitanja {
  text-align: left;
}
.aligning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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