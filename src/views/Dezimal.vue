<template>
  <div >
    <h1>Wandle folgende Zahlen in ihre Binäre Darstellung um</h1>

    <h1> {{dec}} </h1>
    <h1> {{lösung}} </h1>
    
    <input v-model="result" placeholder="edit me"  />
<p>Message is: {{ result }}</p>

  <div>
  <button v-on:click="reset">
    <h1>RESET</h1>
  </button>

   <button v-on:click="check">
    <h1>abgeben</h1>
    <h1 v-if="resultat&&abgabe"> Your aweee</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>

  <button >
    <h1>BEISPIEL</h1>
    </button>
  </div>

  </div>
</template>


<script>


export default {
  data(){
    return {
      dec: Math.floor(Math.random() * 500) + 1,
      result:'',
      abgabe:false,
      resultat:false,
      lösung:''
    }
  },
   created: function(){
    this.init()
  },

  methods:{
    init(){
      this.lösung = this.dec.toString(2)
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




