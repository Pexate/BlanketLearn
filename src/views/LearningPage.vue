<template>
  <div>
      <Navbar class="quote" :image="require('../assets/inndex.jpg')"/>
      <div class="wrapper123">
          <div class="sedmi-razred razred color-red2">
              <h2 class="wrapper-h2 color-red">1. Internet - život na mreži</h2>
              <div class="section_alignment">
                  <Section class="highlight-element1" name="1.1. Jezik mreže, protokoli" link="/sedmi/1cjelina/1/" colour="this.style.boxShadow = '0px 0px 10px 10px #ed5e4a'" colour1="#ed5e4a"/>
                  <Section class="highlight-element1" name="1.2. Mrežne komponente" link="/sedmi/1cjelina/2/" colour="this.style.boxShadow = '0px 0px 10px 10px #ed5e4a'" colour1="#ed5e4a"/>
                  <Section class="highlight-element1" name="1.3. Sigurnost i suradnja na mreži" link="/sedmi/1cjelina/3/" colour="this.style.boxShadow = '0px 0px 10px 10px #ed5e4a'" colour1="#ed5e4a"/>
              </div>
          </div>
          <div class="sedmi-razred razred color-green2">
              <h2 class="wrapper-h2 color-green">2. Proračunske tablice</h2>
              <div class="section_alignment">
                  <Section class="highlight-element2" name="2.1. Osnove rada u programu, prikupljanje i unos podataka" link="/sedmi/2cjelina/1/" colour="this.style.boxShadow = '0px 0px 10px 10px #66919a'" colour1="#66919a"/>
                  <Section class="highlight-element2" name="2.2. Obrada podataka - matematičke formule i funkcije" link="/sedmi/2cjelina/2/" colour="this.style.boxShadow = '0px 0px 10px 10px #66919a'" colour1="#66919a" />
                  <Section class="highlight-element2" name="2.3. Analiza i prikaz podataka" link="/sedmi/2cjelina/3/" colour="this.style.boxShadow = '0px 0px 10px 10px #66919a'" colour1="#66919a" />
              </div>
          </div>
          <div class="sedmi-razred razred color-green-yellow2">
              <h2 class="wrapper-h2 color-green-yellow">3. Računalno razmišljanje i programiranje</h2>
              <div class="section_alignment">
                  <Section class="highlight-element3" name="3.1. Strukture i vrste podataka u Pythonu" link="/sedmi/3cjelina/1/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224"/>
                  <Section class="highlight-element3" name="3.2. Funkcije i metode za rad sa znakovnim nizovima" link="/sedmi/3cjelina/2/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224"/>
                  <Section class="highlight-element3" name="3.3. Nizovi podataka - liste" link="/sedmi/3cjelina/3/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224"/>
                  <Section class="highlight-element3" name="3.4. Ugrađene funkcije i metode za rad s listama" link="/sedmi/3cjelina/4/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224" />
                  <Section class="highlight-element3" name="3.5. Traženje u listama" link="/sedmi/3cjelina/5/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224" />
                  <Section class="highlight-element3" name="3.6. Funkcije u Pythonu (potprogrami)" link="/sedmi/3cjelina/6/" colour="this.style.boxShadow = '0px 0px 10px 10px #d4c224'" colour1="#d4c224" />
              </div>
          </div>
          <div class="sedmi-razred razred color-orange2">
              <h2 class="wrapper-h2 color-orange">4. Višemedijska posla</h2>
              <div class="section_alignment">
                  <Section class="highlight-element4" name="4.1. Obilježja kvalitete grafičkog zapisa na zaslonu i pisaču" link="/sedmi/4cjelina/1/" colour="this.style.boxShadow = '0px 0px 10px 10px #d47024'" colour1="#d47024"/>
                  <Section class="highlight-element4" name="4.2. Grafički, zvučni i videoformati datoteka" link="/sedmi/3cjelina/2/" colour="this.style.boxShadow = '0px 0px 10px 10px #d47024'" colour1="#d47024"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
import Section from '../components/Section.vue'
export default {
    components: {
        Navbar,
        Section
    },
    data () {
        return {
            publicPath: process.env.BASE_URL,
            string: process.env.BASE_URL + "zdk/sedmi/1cjelina/1/index.html"
        }
    }
}
</script>

<style>
.wrapper123 { 
    background: #3D738F;
    display: flex;
    flex-direction: column;
}
.lekcije-h1 {   
    font-size: 3.5em;
    margin-top: 50px;
}
.razred {
    padding: 60px;
    background: #343434;
    color: white;
    margin: 50px;
    transition: all 0.15s ease;
}
.section_alignment {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.wrapper-h2 {
    margin-bottom: 10px;
    font-size: 45px;
}
.color-red {
    color: #ed5e4a;
}
.color-green {
    color: #66919a;
}
.color-green-yellow {
    color: #d4c224;
}
.color-orange {
    color: #d47024;
}
.color-red2 {
    box-shadow: 0px 0px 10px 10px #ed5e4a;
}
.color-red2:hover {
    box-shadow: 0px 0px 20px 20px #ed5e4a;
}
.color-green2 {
    box-shadow: 0px 0px 15px 15px #66919a;
}
.color-green2:hover {
    box-shadow: 0px 0px 20px 20px #66919a;
}
.color-green-yellow2 {
    box-shadow: 0px 0px 10px 10px #d4c224;
}
.color-green-yellow2:hover {
    box-shadow: 0px 0px 20px 20px #d4c224;
}
.color-orange2 {
    box-shadow: 0px 0px 10px 10px #d47024;
}
.color-orange2:hover {
    box-shadow: 0px 0px 20px 20px #d47024;
}
.highlight-element1:hover {
    box-shadow: 0px 0px 10px 10px #ed5e4a;
    transition: all 0.07s ease;
}
.highlight-element2:hover {
    box-shadow: 0px 0px 10px 10px #66919a;
    transition: all 0.07s ease;
}
.highlight-element3:hover {
    box-shadow: 0px 0px 10px 10px #d4c224;
    transition: all 0.07s ease;
}
.highlight-element4:hover {
    box-shadow: 0px 0px 10px 10px #d47024;
    transition: all 0.07s ease;
}
/*:onMouseEnter="colour" onMouseOut="this.style.boxShadow='0 0 0 0 rgba(0,0,0,0)'"*/
@media only screen and (max-width: 480px) {
    .razred {
        padding: 20px;
        margin: 40px 15px;
    }
    .wrapper-h2 {
        font-size: 35px;
    }
}

@media only screen and (max-width: 278px) {
    .razred {
        padding: 10px;
        margin: 40px 5px;
    }
    .wrapper-h2 {
        font-size: 30px;
    }
}


</style>