<template>
  <div >
    <h1>Welche Dezimalzahl wird durch folgende hexadezimalzahl dargestellt?</h1>
    <p>{{lösung}}</p>
    <h1>{{hex}}<h6 style="display:inline;font-size:12px">16</h6></h1>

    <input v-model="result" placeholder="edit me" />

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
      hex:'',
      result:0,
      lösung:0,
      abgabe:false,
      resultat:false
    }
  },

  created: function(){
    this.init()
  },

  methods: {
    init(){
      this.genHexString();
    },
    genHexString() {
      this.hex='';
      let pre =0;
      for (let i = 0; i < 3; ++i) {
        pre = (Math.floor(Math.random() * 16));
        this.lösung=this.lösung+pre*Math.pow(16,i);
        this.hex = pre.toString(16).toUpperCase()+this.hex;
      }
      
    },
    reset(){
      this.lösung=0;
      this.genHexString()

    },
    check(){
      if(this.lösung==this.result)
        this.resultat=true
      else  
        this.resultat=false
      this.abgabe=true
    }

  }
}
</script>
