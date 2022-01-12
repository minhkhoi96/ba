<template>
 <div v-if="showModal">
    <Modal header="" @close="toggleModal">
     Bei 3-adischen Zahlen steht jede Stelle für eine dreier Potenz, also
     <var>3<sup>0</sup></var> = 1, <var>3<sup>1</sup></var> = 3, <var>3<sup>2</sup></var> = 9 und so weiter.
     Ausserdem gibt sie an wie oft diese Potenz vorhanden ist. <br>
     Zum Beispiel lässt sich <strong>122<h6 style="display:inline;font-size:9px">3</h6></strong> wie folgt berechnen: <br>
    <strong>1</strong>  x <var>3<sup>2</sup></var> + <strong>2</strong>  x <var>3<sup>1</sup></var> + <strong>2</strong>  x <var>3<sup>0</sup></var> = <br>
     <strong>1</strong>  x 9 + <strong>2</strong>  x 3 + <strong>2</strong>  x 1 = <br>
     9 + 6 + 2 = <br>
     17

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
<h1>3-adische Zahlen lesen</h1>
    <h2>Die folgende Zahl ist in 3-adischer Stellendarstellung.
      Drücke sie als Dezimalzahl aus.
    </h2>
    
      <h2><strong>{{binary}}<h6 style="display:inline;font-size:12px">3</h6></strong> </h2>
     <!-- <h1>(lösung ist: {{val}})</h1> -->
     <input class="in" v-model="result" placeholder="Deine Lösung" style="width:8%"/>
     <br>
     <p>Als Unterstützung hast du hier eine Tabelle mit den Dreierpotenzen:</p>
      <br>
     <img src="@/assets/drei.png" alt="">
     <br> <br> <br> <br> <br>


<br><br><br><br>
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
  components:{
    Modal,Modal1
  },
  data(){
    return{
    val: Math.floor(Math.random() * 81) + 1,
    binary:0,
    result:'',
    resultat:false,
    abgabe:false,
    state:false,
    showModal:false,
    showModal1:false
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
      this.result=''
    },
    check(){
      if(this.val==this.result)
        this.state=true
      else
        this.state=false
      this.abgabe=true
      this.toggleModal1();
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    toggleModal1(){
      this.showModal1=true
    }
    
    }
  }


</script>

<style scoped>
.button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
  }
  .in{
    color: black;
    font-weight: bold;
    width: 10%;
  }
</style>


