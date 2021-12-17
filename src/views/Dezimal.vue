<template>
<div v-if="showModal">
    <Modal header="sign me up" @close="toggleModal">
    <img src="@/assets/SetoKaiba-DL.png" style="height:40%;width:40%"/>
    </Modal>

    </div>
  
    <h1>Wandle folgende Zahlen in ihre Binäre Darstellung um</h1>

    <h1> {{dec}} </h1>
    <h1>(lösung ist: {{lösung}} )</h1>
    
    <input v-model="result" placeholder="edit me"  />
<p>Message is: {{ result }}</p>

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

  

  <a class="container">
       Tabelle
    </a>
</template>


<script>
import Modal from '@/components/Modal.vue'

export default {
  components:{Modal},
  data(){
    return {
      dec: Math.floor(Math.random() * 500) + 1,
      result:'',
      abgabe:false,
      resultat:false,
      lösung:'',
      showModal:false
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
    reset(){
      this.dec =Math.floor(Math.random() * 1000) + 1,
      this.lösung=this.dec.toString(2),
      this.result=''
    },
    check(){
      if(this.result==this.lösung)
        this.resultat=true
      else 
        this.resultat=false
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
</style>




