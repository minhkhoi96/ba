<template>
    <div v-if="showModal">
    <Modal header="Hier kommt ein Beispiel vorgelöst" @close="toggleModal">
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
    <h2>Addiere die beiden binäre Zahlen und gib ihre Summe als binäre Zahl</h2>

    <div style="display:flex;flex-direction:column;">
     <p>{{bin1}}</p> 
     + {{bin2}}
    </div>
 <h1></h1>
 
   <input v-model="result0" placeholder="" style="width:1%;height:20px" />
    <input v-model="result1" placeholder="" style="width:1%;height:20px" />
    <input v-model="result2" placeholder="" style="width:1%;height:20px" />
    <input v-model="result3" placeholder="" style="width:1%;height:20px" />
    <input v-model="result4" placeholder="" style="width:1%;height:20px" />
     <input v-model="result5" placeholder="" style="width:1%;height:20px" />
     <br><br><br><br><br>

    <div style="display:flex;margin-left:40%;">
    <button v-on:click="reset" style="margin-left:10px;">
    <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
    <p>nächste Aufgabe</p>
  </button>

<button v-on:click="check" style="margin-left:10px;">
    <p>Überprüfen</p>
   
  </button>

  <button @click="toggleModal" style="margin-left:10px;">
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
      val1: Math.floor(Math.random() * 32) ,
      val2: Math.floor(Math.random() * 32) ,
      bin1:0,
      bin2:0,
      result0:'',
      result1:'',
      result2:'',
      result3:'',
      result4:'',
      result5:'',
      final:'',
      lösung:'',
      resultat:false,
      abgabe:false,
      showModal:false,
      länge:0,
      showModal1:false,
      state:false
    }
  },
  created: function(){
    this.init()
  },

  methods: {
    init(){
      this.bin1 = (this.val1).toString(2);
      this.bin2 = (this.val2).toString(2);
      this.lösung= ((this.val1)+(this.val2)).toString(2);
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    reset(){
      this.val1=Math.floor(Math.random() * 32) + 1,
      this.val2=Math.floor(Math.random() * 32) + 1,
      this.bin1 = (this.val1).toString(2),
      this.bin2 = (this.val2).toString(2),
      this.lösung= ((this.val1)+(this.val2)).toString(2);
      this.final='',
      this.result='',
      this.abgabe=false,
      this.result0='',
      this.result1='',
      this.result2='',
      this.result3='',
      this.result4='',
      this.result5=''

    },
    check(){
      this.final='';
      this.final=this.final.concat(this.result0,this.result1,this.result2,this.result3,this.result4,this.result5);
      while(this.lösung.length<6)
        this.lösung='0'.concat(this.lösung)
      if(this.final==this.lösung){
        this.resultat=true
        this.state=true;
        }
      else{
        this.resultat=false;
        this.state=false;}
      this.abgabe=true
      this.toggleModal1();
    },
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModal1(){
      this.showModal1=true;
      }
  }
}
</script>
