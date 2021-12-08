<template>
  <div >
    <h1>Addiere die beiden binäre Zahlen und gib ihre Summe als binäre Zahl</h1>
   
    <h2 > {{bin1}}</h2>
    
    
  <h2 style="display: inline">+ </h2><h2 style="display: inline">  {{ bin2}}</h2>
 
 <h1></h1>
 
   <input v-model="result" placeholder="0" style="width:1%;height:20px" />
    <input v-model="result1" placeholder="0" style="width:1%;height:20px" />
    <input v-model="result2" placeholder="0" style="width:1%;height:20px" />
    <input v-model="result3" placeholder="0" style="width:1%;height:20px" />
    <input v-model="result4" placeholder="0" style="width:1%;height:20px" />

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
    return{
      val1: Math.floor(Math.random() * 32) + 1,
      val2: Math.floor(Math.random() * 32) + 1,
      bin1:0,
      bin2:0,
      result:'',
      result1:'',
      result2:'',
      result3:'',
      result4:'',
      lösung:0,
      resultat:false,
      abgabe:false
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
    reset(){
      this.val1=Math.floor(Math.random() * 32) + 1,
      this.val2=Math.floor(Math.random() * 32) + 1,
      this.bin1 = (this.val1).toString(2),
      this.bin2 = (this.val2).toString(2),
      this.lösung= ((this.val1)+(this.val2)).toString(2);
      this.result='',
      this.abgabe=false
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
