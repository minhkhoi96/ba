<template>
    <div v-if="showModal">
    <Modal header="Hier kommt eine Beispielaufgabe" @close="toggleModal">
    
    </Modal>
    </div>

     <div v-if="showModal1">
      <div v-if="state">
        <Modal1 header="richtig" @close="showModal1=false" style="color:green">
        
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="falsch" @close="showModal1=false" style="color:red">
        
        </Modal1>

      </div>

    </div>

    
    <h2>Hexadezimale Zahlen lesen</h2>
    <!--<p>(lösung ist:{{lösung}})</p>-->
    <p>Wandle folgende hexidezimale Zahl in ihre Dezimalzahl um</p>
    <h3><strong>{{hex}}<h6 style="display:inline;font-size:12px">16</h6></strong></h3>

    <input class="in" v-model="result" placeholder="Deine Lösung" />

    <br>
    <p>Als Hilfe hast du hier eine Tabelle mit den Hexadezimalzahlen </p>

    <img src="@/assets/hex.png" alt="">
    <br><br>
    

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
