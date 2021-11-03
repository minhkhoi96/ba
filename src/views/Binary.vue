<template>
  <div >
    <h1>Welche Dezimalzahl wird durch folgende binäre Zahl ausgedrückt?</h1>
  </div>

   <!--  <h1>{{val}}</h1>  -->
  <h1>{{binary}}</h1>
<input v-model="result" placeholder="edit me" />
<p>Message is: {{ result }}</p>
  <button v-on:click="reset">
    <h1>RESET</h1>
  </button>

  <button v-on:click="check">
    <h1>abgeben</h1>
    <h1 v-if="resultat&&abgabe"> Your aweee</h1>
 <h1 v-else-if="abgabe"> Nope</h1>
  </button>
</template>


<script>


export default {
  data(){
    return{
    val: Math.floor(Math.random() * 32) + 1,
    binary:0,
    result:0,
    resultat:false,
    abgabe:false
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
    }
    
    }
  }


</script>
