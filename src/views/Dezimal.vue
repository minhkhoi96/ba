<template>
<div v-if="showModal">
    <Modal header="" @close="toggleModal">
   
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
  
    <h2>Dezimal zu Binär</h2>
    <p>Wandle folgende Zahlen in ihre binäre Stellendarstellung um</p>

    
     <h3><strong>{{dec}}</strong></h3>
    
    <input v-model="result" placeholder="Deine Lösung" style="width:10%"  />

<br>
    <p>Als Hilfe hast du hier eine Tabelle mit den Zweierpotenzen </p>

    <img src="@/assets/potenz.png" alt="">
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
  components:{Modal,Modal1},
  data(){
    return {
      dec: Math.floor(Math.random() * 500) + 1,
      result:'',
      abgabe:false,
      resultat:false,
      lösung:'',
      showModal:false,
      showModal1:false,
      state:false
    }
  },
   created: function(){
    this.init()
  },

  methods:{
    init(){
      this.lösung = this.dec.toString(2)
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModal1(){
      this.showModal1=true;
    },
    reset(){
      this.dec =Math.floor(Math.random() * 1000) + 1,
      this.lösung=this.dec.toString(2),
      this.result=''
    },
    check(){
      if(this.result==this.lösung){
        this.resultat=true
        this.state=true
      }
        
      else 
        this.state=false
      this.toggleModal1();

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
</style>




