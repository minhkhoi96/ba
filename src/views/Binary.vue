<template>

<div v-if="showModal">
    <Modal header="hier kommt ein Beispiel vorgelöst" @close="toggleModal">
      
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
    


  <div >
    <h1>Welche Dezimalzahl wird durch folgende binäre Zahl ausgedrückt?</h1>
  </div>

    <!--<h1>{{val}}</h1>  -->
  <h1>{{binary}}<h6 style="display:inline;font-size:12px">2</h6></h1>
<input v-model="result" placeholder="edit me"  />
<br><br><br>

  
   <div>
     <p>Als Hilfe hast du unten eine Tabelle mit den Werten
        zu den Zweierpotenzen
     </p>
     <img src="@/assets/binaer.png" alt="">
     </div>

<br><br><br>
     <div style="display:flex;margin-left:40%;">
  <button v-on:click="reset" style="margin-left:10px;">
    <img src="@/assets/reset.png" alt="">
  </button>

  <button v-on:click="check()" style="margin-left:10px;">
    <p>Überprüfen</p>
    <h1 v-if="resultat&&abgabe"> </h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

    <button  @click="toggleModal" style="margin-left:10px;">
    <img src="@/assets/help.png" alt="">
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
    val: Math.floor(Math.random() * 32) + 1,
    binary:0,
    result:0,
    resultat:false,
    abgabe:false,
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
      this.binary=(this.val).toString(2); 
    },
    reset(){
      this.val=Math.floor(Math.random() * 32) + 1,
      this.binary=(this.val).toString(2),
      this.abgabe=false,
      this.result=0
    },
    check(){
      if(this.val==this.result){
        this.resultat=true
        this.state=true
        }
        
      else{
        this.resultat=false
        this.state=false
      }this.toggleModal1();
        
      
    },
    toggleModal(){
      this.showModal= !this.showModal
    },
    toggleModal1(){
      this.showModal1=true;
    }
    
    }
  }


</script>
