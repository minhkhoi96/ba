<template>

<div v-if="showModal">
    <Modal header="sign me up" @close="toggleModal">
    <img src="@/assets/SetoKaiba-DL.png" style="height:40%;width:40%"/>
    </Modal>

    </div>
    


  <div >
    <h1>Welche Dezimalzahl wird durch folgende binäre Zahl ausgedrückt?</h1>
  </div>

    <!--<h1>{{val}}</h1>  -->
  <h1>{{binary}}<h6 style="display:inline;font-size:12px">2</h6></h1>
<input v-model="result" placeholder="edit me"  />
<p>Message is: {{ result }}</p>
  <button v-on:click="reset">
    <h1>RESET</h1>
  </button>

  <button v-on:click="check">
    <h1>abgeben</h1>
    <h1 v-if="resultat&&abgabe"> richtig</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

    <button  @click="toggleModal" >
    <h1>BEISPIEL</h1>
    </button>

    
</template>


<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {Modal},

  data(){
    return{
    val: Math.floor(Math.random() * 32) + 1,
    binary:0,
    result:0,
    resultat:false,
    abgabe:false,
    showModal:false
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
      if(this.val==this.result)
        this.resultat=true
      else
        this.resultat=false
      this.abgabe=true
    },
    toggleModal(){
      this.showModal= !this.showModal
    }
    
    }
  }


</script>
