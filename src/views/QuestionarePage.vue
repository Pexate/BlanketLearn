<template>
  <div class="outside-wrapper">
      <h1 class="pitanja question-wrapper" v-bind:style="string + boja">3. Interet - život na mreži</h1>
      <div class="div-pitanja question-wrapper" v-bind:style="string + boja">
          <div v-for="(pitanje, index) of pitanjaNew" :key="index" class="aligning">
              <div class="pitanje">
                  <h3 class="text-pitanja">{{index+1}}. {{pitanje[0]}} <input type="text"></h3>
              </div>
              <hr v-if="index !== pitanja.length-1"  v-bind:style="string2 + boja">
          </div> 
      </div>
  </div>
</template>

<script>
export default {
    name: "QuestionarePage",
    data() {
        return {
            string: 'box-shadow: 0px 0px 10px 10px ',
            string2: 'background: ',
            //pitanja: pitanjaNew,
        }
    },
    props: {
        pitanjaNew: Array,
        boja: String,
    },
    computed: {
        promjeniBoju(colour) {
            return {
                'box-shadow': `0px 0px 10px 10px ${colour};`,
                'padding': '25px;',
                'background': '#343434;',
                /*box-shadow: 0px 0px 10px 10px rgba(237, 94, 74);*/
                'width': 'auto;',
                'margin': '25px;',
                'max-width': '90%;'
            }
        }
    }
}
</script>

<style scoped>
.pitanja {
    position: relative;
    font-size: 65px;
    color: white;
    z-index: 1;
}
.outside-wrapper {
    background: url(../assets/questionmark.png);
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
}
hr {
    width: 50%;
    height: 2px;
}
input {
    height: 25px;
    margin-left: 5px;

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
}

@media only screen and (max-width: 480px) {
  .pitanja {
    font-size: 45px;
  }
  .text-pitanja { 
      text-align: center;
      font-size: 27px;
  }
  .question-wrapper {
      padding: 20px 0px;
  }
  .pitanje { 
      padding: 5px 0px;
  }
}
</style>