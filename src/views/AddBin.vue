<template>
    <div v-if="showModal">
    <Modal header="sign me up" @close="toggleModal">
    <img src="@/assets/SetoKaiba-DL.png" style="height:40%;width:40%"/>
    </Modal>

    </div>
    <p>Addiere die beiden binäre Zahlen und gib ihre Summe als binäre Zahl</p>
  
    <h2 > {{bin1}}</h2>
    
    
  <h2 style="display: inline">+ </h2><h2 style="display: inline">  {{ bin2}}</h2>
 
 <h1></h1>
 
   <input v-model="result0" placeholder="" style="width:1%;height:20px" />
    <input v-model="result1" placeholder="" style="width:1%;height:20px" />
    <input v-model="result2" placeholder="" style="width:1%;height:20px" />
    <input v-model="result3" placeholder="" style="width:1%;height:20px" />
    <input v-model="result4" placeholder="" style="width:1%;height:20px" />
     <input v-model="result5" placeholder="" style="width:1%;height:20px" />

    <div>
    <button v-on:click="reset">
    <h1>RESET</h1>
  </button>

<button v-on:click="check">
    <h1>abgeben</h1>
    <h1 v-if="resultat&&abgabe"> richtig</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

  <button @click="toggleModal">
    <h1>BEISPIEL</h1>
    </button>
  </div>
  
  
</template>




<script>

import Modal from '@/components/Modal.vue'

export default {
  components: {Modal},

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
      länge:0
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
      if(this.final==this.lösung)
        this.resultat=true
      else
        this.resultat=false
      this.abgabe=true
    }
  }
}
</script>
