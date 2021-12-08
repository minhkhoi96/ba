<template>
 
    <h1>Die folgenen Zahlen sind in 3-adischer Darstellung</h1>
    <h1>Drücke sie als Dezimalzahl aus!</h1>
    
      <h1>{{binary}}<h6 style="display:inline;font-size:12px">3</h6> </h1>
      <h1>lösung ist {{val}}</h1>
<input v-model="result" placeholder="edit me" />
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
  
</template>

<script>
export default {
  data(){
    return{
    val: Math.floor(Math.random() * 81) + 1,
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
      this.binary=(this.val).toString(3); 
    },
    reset(){
      this.val=Math.floor(Math.random() * 32) + 1,
      this.binary=(this.val).toString(3),
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


