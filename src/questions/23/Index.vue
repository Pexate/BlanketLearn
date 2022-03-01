<template>
    <div class="outside-wrapper">
        <h1 class="pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #66919a">3. Internet - život na mreži</h1>
        <div class="div-pitanja question-wrapper"  style="box-shadow: 0px 0px 10px 10px #66919a">
            <div class="aligning">
                <div class="pitanje">
                    <h3 class="text-pitanja">1. Ako želimo poredati popis naziva po abecednom redu koristimo:
                        <select class="multiple-choice" name="pitanje-1" id="pitanje-1">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">Filtriranje</option>
                            <option value="two">Sortiranje</option>
                            <option value="three">Filtriranje i sortiranje</option>
                            <option value="four">Grafikon</option>
                        </select>
                    </h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #66919a">
                <div class="pitanje">
                    <h3 class="text-pitanja">2. Navedi neku vrstu grafikona: <input class="answer" type="text"></h3>
                </div>
                <hr style="box-shadow: 0px 0px 5px 5px #66919a">
                <div class="pitanje">
                    <h3 class="text-pitanja">3. Grafikone koji koristimo za uspoređivanje unesenih vrijednosti zove se
                        <select class="multiple-choice" name="pitanje-1" id="pitanje-1">
                            <option value="odaberi">Odaberi</option>
                            <option value="one">linijski i površinski</option>
                            <option value="two">usporedni</option>
                            <option value="three">tortni i prstenasti</option>
                            <option value="four">stupčasti i trakasti</option>
                        </select>
                    </h3>
                </div>
                <div class="bottom">
                    <button style="box-shadow: 0px 0px 5px 5px #66919a" v-on:click="provjeriOdgovore()">Provjeri</button>
                    <button class="dalje"><a href="/learningpage">Preskoći</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const odgovori = [["stupčasti", "stupcasti", "stupćasti", "stupčasti grafikon", "stupcasti grafikon", "stupćasti grafikon", "trakasti", "trakasti grafikon", "linijski", "linijski grafikon", "površinski", "povrsinski", "površinski grafikon", "povrsinski grafikon", "tortni", "tortni grafikon", "prstenasti", "prstenasti grafikon"]]
const multiple_choice_odgovori = ["two", "four"]

export default {
    name: "question23",
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
  background: #56818a;
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