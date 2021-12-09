<template>
  <div >
    <h1>welche Dezimalzahl wird durch diese Vorrömische Zahl dargestellt?</h1>

    <h1> {{roman}} </h1>
<input v-model="result" placeholder="edit me" />
<h1> (lösung ist: {{lösung}}) </h1>
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
      roman:'',
      randI:Math.floor(Math.random() * 5),
      randV:Math.floor(Math.random() * 2),
      randX:Math.floor(Math.random() * 5),
      randL:Math.floor(Math.random() * 2),
      randC:Math.floor(Math.random() * 5),
      randD:Math.floor(Math.random() * 2),
      randM:Math.floor(Math.random() * 5),
     result:'',
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
     
      this.add('M',this.randM);
      this.add('D',this.randD);
      this.add('C',this.randC);
      this.add('L',this.randL);
      this.add('X',this.randX);
      this.add('V',this.randV);
      this.add('I',this.randI);
       // this.roman=add('M',this.randM)+add('D',this.randD)+add('C',this.randC)+add('L',this.randL)+add('X',this.randX)+add('V',this.randV)+add('I',this.randO);
      
    },
     add(letter,number){
       
       let pre = '';
       switch (letter) {

          case 'M':
          this.lösung+=number*1000;
          break;

          case 'D':
          this.lösung+=number*500;
          break;

          case 'C':
          this.lösung+=number*100;
          break;

          case 'L':
          this.lösung+=number*50
          break;

          case 'X':
          this.lösung+=number*10;
          break;

          case 'V':
          this.lösung+=number*5;
          break;

          case 'I':
          this.lösung+=number*1;
          break;

          default:
          this.lösung+=0;
          }
       for(let i =0; i<number;i++){
         

         pre+=letter
       }
       this.roman+=pre;
    },
    reset(){
      this.roman='';
      this.lösung=0;
       this.randI=Math.floor(Math.random() * 5),
      this.randV=Math.floor(Math.random() * 2),
      this.randX=Math.floor(Math.random() * 5),
     this.randL=Math.floor(Math.random() * 2),
     this.randC=Math.floor(Math.random() * 5),
      this.randD=Math.floor(Math.random() * 2),
      this.randM=Math.floor(Math.random() * 5)
      this.add('M',this.randM);
      this.add('D',this.randD);
      this.add('C',this.randC);
      this.add('L',this.randL);
      this.add('X',this.randX);
      this.add('V',this.randV);
      this.add('I',this.randI);
      this.abgabe=false,
      this.resultat=false

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
