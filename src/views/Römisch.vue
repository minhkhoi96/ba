<template>

<div v-if="showModal">
    <Modal header="" @close="toggleModal">
    Zähle wie oft jedes Symbol vorkommt, ersetze das Symbol dann durch ihren Wert in der Tabelle und addiere die Werte zusammen.
    Zum Beispiel ist MDLXXVI = <br>
    1 x 1000 + 1 x 500 + 1 x 50 + 2 x 20 + 1 x 5 + 1 x 1 =
    1000 + 500 + 50 + 20 + 5 + 1  = <br>
    1576
    </Modal>

</div>

<div v-if="showModal1">
      <div v-if="state">
        <Modal1 header="Super!" @close="showModal1=false" style="color:green">
        <img src="@/assets/right.png" alt="">
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="Das stimmt noch nicht ganz" @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>

      </div>

    </div>

    
    
  <h1>Vorrömische Zahlen lesen</h1>
    <h2>welche Dezimalzahl wird durch diese vorrömische Zahl dargestellt?</h2>

   

    <h2> {{roman}} </h2>
    
<input v-model="result" placeholder="Deine Lösung" />
<!--<h1> (lösung ist: {{lösung}}) </h1>-->
<br>

    <br>

     <div>
    <p>Zur Hilfe siehst du hier eine Tabelle mit den römischen Zahlen</p>
   <img src="@/assets/roemisch.png" style="display:inline-block"> 
  </div>
<br><br><br><br><br><br><br><br><br><br><br><br>
 <div style="display:flex;margin-left:40%;">
    <button class="button" v-on:click="check()" style="margin-left:10px;">
      <img src="@/assets/test.png" style="height:40%;width:auto" alt="">
    <p>Überprüfen</p>
    
  </button>

 
 

   <button class="button" v-on:click="reset" style="margin-left:10px;">
     
  <img src="@/assets/reset.png" style="height:40%;width:auto" alt="">
<p>nächste Aufgabe</p>
  </button>

   
<button class="button" @click="toggleModal" style="margin-left:10px;">
    
      <img src="@/assets/help.png" style="height:43%">
       <p>Anleitung</p>
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
     resultat:false,
     showModal:false,
     showModal1:false,
     state:false
     
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
      this.resultat=false,
      this.result=''

    },
    check(){
      if(this.lösung==this.result){
        this.resultat=true;
        this.state=true;

      }
        
      else{
        this.resultat=false;
        this.state=false;
        }
      this.abgabe=true
      this.toggleModal1();
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModal1(){
      this.showModal1=true;
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

.button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
  }
</style>