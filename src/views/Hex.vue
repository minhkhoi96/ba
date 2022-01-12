<template>
    <div v-if="showModal">
    <Modal header="" @close="toggleModal">
    Bei hexadeziale Zahlen steht jede Stelle für eine sechzehner Potenz, also
     <var>16<sup>0</sup></var> = 1, <var>16<sup>1</sup></var> = 16, <var>16<sup>2</sup></var> = 256 und so weiter.
     Ausserdem gibt sie an wie oft diese Potenz vorhanden ist. <br>
     Zum Beispiel lässt sich <strong>8F0<h6 style="display:inline;font-size:9px">16</h6></strong> wie folgt berechnen: <br>
     8 x <var>16<sup>2</sup></var> + F x <var>16<sup>1</sup></var> + 0 x <var>16<sup>0</sup></var> =<br>
     8 x <var>16<sup>2</sup></var> + 15 x <var>16<sup>1</sup></var> + 0 x <var>16<sup>0</sup></var> = <br>
     8 x 256 + 15 x 16 + 0 = <br>
     2048 + 240 = <br>
     2288
     
    </Modal>
    </div>

     <div v-if="showModal1">
      <div v-if="state">
        <Modal1 header="Super!" @close="showModal1=false" style="color:green">
        <img src="@/assets/right.png" alt="">
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="Das stimmt noch nicht ganz" @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>

      </div>

    </div>

    
    <h1>Hexadezimale Zahlen lesen</h1>
    <!--<p>(lösung ist:{{lösung}})</p>-->
    <h2>Wandle folgende hexadezimale Zahl in ihre Dezimaldarstellung um</h2>
    <h2><strong>{{hex}}<h6 style="display:inline;font-size:12px">16</h6></strong></h2>

    <input class="in" v-model="result" placeholder="Deine Lösung" />

    <br>
    <p>Als Hilfe hast du hier eine Tabelle mit den Hexadezimalzahlen </p>

    <img src="@/assets/hex.png" alt="">
    <br><br><br><br><br><br><br><br><br><br>
    

     <div style="display:flex;margin-left:40%;">
    <button class="button" v-on:click="check()" style="margin-left:10px;">
      <img src="@/assets/test.png" style="height:40%;width:auto" alt="">
    <p>Überprüfen</p>
    
  </button>

 
 

   <button class="button" v-on:click="reset" style="margin-left:10px;">
     
  <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
<p>nächste Aufgabe</p>
  </button>

   
<button class="button" @click="toggleModal" style="margin-left:10px;">
    
      <img src="@/assets/help.png" style="height:43%">
       <p>Anleitung</p>
      </button>
   </div>
  
    
  
</template>



<script>
import Modal from '@/components/Modal.vue'
import Modal1 from '@/components/Verifier.vue'

export default {
  components: {Modal,Modal1},
  data(){
    return{
      hex:'',
      result:'',
      lösung:0,
      abgabe:false,
      resultat:false,
      showModal:false,
      showModal1:false,
      state:false
    }
  },

  created: function(){
    this.init()
  },

  methods: {
    init(){
      this.genHexString();
    },
    genHexString() {
      this.hex='';
      let pre =0;
      for (let i = 0; i < 3; ++i) {
        pre = (Math.floor(Math.random() * 16));
        this.lösung=this.lösung+pre*Math.pow(16,i);
        this.hex = pre.toString(16).toUpperCase()+this.hex;
      }
      
    },
    reset(){
      this.lösung=0;
      this.genHexString()

    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModal1(){
      this.showModal1=true
    },
    check(){
      if(this.lösung==this.result){
        this.resultat=true,
        this.state=true

      }
        
      else  {
        this.state = false
        this.resultat=false
      } 
      this.toggleModal1();  
      this.abgabe=true
    }

  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  flex-direction: column;
  align-items:center;
    min-height: 200px;
    width: 200px;
    border: 1px solid black;
    margin: 0 10px 10px 200px;
    background: white;
    
}

.button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
  }
  .in{
    color: black;
    font-weight: bold;
    width: 10%;
  }
  
</style>
