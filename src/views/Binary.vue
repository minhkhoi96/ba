<template>

<div v-if="showModal">
    <Modal header="" @close="toggleModal">
      <p>Bei einer binären Zahl gibt jede Ziffer an, ob die dazugehörige Zweierpotenz dabei ist oder nicht.
        
        Dabei steht die Ziffer ganz links für <var>2<sup>0</sup></var> = 1,
        die zweite Ziffer von links für <var>2<sup>1</sup></var> = 2 und so weiter.
        <br>

        Die binäre Zahl <strong>1001<h6 style="display:inline;font-size:10px">2</h6></strong> lässt
        sich somit berechnen durch <strong> 1</strong> x <var>2<sup>3</sup> + <strong>0</strong> x <var>2<sup>2</sup> +
         </var> </var><strong>0</strong> x <var>2<sup>1</sup></var> +<strong> 1</strong> x <var>2<sup>0</sup></var> = <br>
         8 + 0 + 0 + 1 = 9
      </p>
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
    


  <div >
    <h1>Binäre Zahlen interpretieren</h1>
    <h2>Wandle folgende binäre Zahl in ihre Dezimalzahl um</h2>
  </div>

    <!--<h1>{{val}}</h1>  -->
  <h2><strong>{{binary}}<h6 style="display:inline;font-size:12px">2</h6></strong></h2> 
<input class="in" v-model="result" placeholder="Deine Lösung" style="width:7%"  />
<br><br><br>

  
   <div>
     <p>Als Hilfe hast du unten eine Tabelle mit den Werten
        zu den Zweierpotenzen
     </p>
     <img src="@/assets/binaer.png" alt="">
     </div>

<br><br><br>
    

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
    val: Math.floor(Math.random() * 30) + 1,
    binary:0,
    result:'',
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
      this.result=''
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

<style scoped>
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
    height: 10%;
  }
</style>
