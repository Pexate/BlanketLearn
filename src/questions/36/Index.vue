<template>
  <div class="color">
    <Navbar class="navbar1" :image="require('../../assets/inndex.jpg')" />
    <div class="outside-wrapper">
        <h1 class="pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #d4c224">3. Računalno razmišljanje i programiranje</h1>
        <div class="div-pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #d4c224">
            <div class="aligning">
                <div class="pitanje">
                    <h3 class="text-pitanja">1. Funkcije u Pythonu također se nazivaju: <input class="answer" type="text"></h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #d4c224">
                <div class="pitanje">
                    <h3 class="text-pitanja">2. Funkcije dijelimo na:
                        <select class="multiple-choice" name="pitanje-2" id="pitanje-2">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">Funkcije koje vraćaju vrijednost i funkcije koje nevraćaju vrijednosti</option>
                            <option value="two">Funkcije koje imaju ulazne vrijednosti i funkcije koje nemaju ulazne vrijednosti</option>
                            <option value="three">Sve od navedenog</option>
                        </select>
                    </h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #d4c224">
                <div class="pitanje">
                    <h3 class="text-pitanja">3. Izbaci uljeza:
                        <select class="multiple-choice" name="pitanje-2" id="pitanje-2">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">print()</option>
                            <option value="two">count()</option>
                            <option value="three">len()</option>
                            <option value="four">input()</option>
                            <option value="five">int()</option>
                        </select>
                    </h3>
                </div>
                <div class="bottom">
                    <button style="box-shadow: 0px 0px 5px 5px #d4c224" v-on:click="provjeriOdgovore()">Provjeri</button>
                    <button class="dalje"><a href="/learningpage">Preskoči</a></button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/NavBar.vue"
const odgovori = [["potprogrami", "potprogram", "podprogrami", "podprogram"]]
const multiple_choice_odgovori = ["three", "two"]
export default {
    name: "question36",
    data() {
        return {
            provjeriOdgovore: () => {
                let questionDiv = document.getElementsByClassName("answer")
                let questionDiv2 = document.getElementsByClassName("multiple-choice")
                for (let i = 0; i < questionDiv.length; i++) {
                    let userInput = questionDiv[i].value.toLowerCase();
                    userInput.trim()
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
                for (let i = 0; i < questionDiv2.length; i++) {
                    let userInput = questionDiv2[i].value
                    if (userInput == multiple_choice_odgovori[i]) {
                        questionDiv2[i].classList.add("green-color");
                        if (questionDiv2[i].classList.length > 2) {
                            questionDiv2[i].classList.remove("red-color");
                        }
                    } else {
                        questionDiv2[i].classList.add("red-color");
                        if (questionDiv2[i].classList.length > 2) {
                            questionDiv2[i].classList.remove("green-color");
                        }
                    } 
                }
                let nastaviButton = document.querySelector(".dalje")
                nastaviButton.innerHTML = '<a style="text-decoration: none; color: white;" href="/learningpage">Nastavi</a>'
                nastaviButton.classList.add("greenishyellow-color")
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

.red-color {
  background: red;
  border: 4px #d32123 solid;
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
}

button {
  width: 300px;
  height: 75px;
  cursor: pointer;
  background: #d4c224;
  border: 5px rgba(23, 23, 23, 0.3) solid;
  border-radius: 10px;
  color: white;
  font-weight: 900;
  font-size: 32px;
}
button:active {
  background: #c4b214;
  border: 5px rgba(23, 23, 23, 0.2) solid;
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