<template>
    <div v-if="showModal">
    <Modal header="" @close="toggleModal">
    
    <p>Du kannst durch Klicken die entsprechende Karte hinzufügen.
       Wenn du eine Karte löschen willst, klicke auf die Karte!
    </p>

  <video src="@/assets/karten.mp4" id="video-container" style="width:70%;height:auto" controls></video>
    </Modal>

    </div>
    
    
    <div v-if="showModal1">
      <div v-if="state">
        <Modal1 header="richtig" @close="showModal1=false" style="color:green">
        
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="falsch" @close="showModal1=false" style="color:red">
        
        </Modal1>

      </div>

    </div>
    <h2>Stelle die folgende Zahl mit den folgenden Karten dar:</h2>
   
  
 

    <h1>{{val}}</h1>
<button v-on:click="addtausend">1000</button>

 <button v-on:click="addhundert">100</button>
 <button v-on:click="addzehn">10</button>
 <button v-on:click="eins">1</button>
 
 
  <!--
  <button v-on:click="addtausend">
    <img src="@/assets/logo.png" style="width:50px;height:60px;">
  </button>
  -->
       <h1> </h1>
    
  <!--
   WE PRINT ALLL OUR TAUSENDERstyle="margin:auto; width:50%"
 -->
 
    
    <div style="margin-left:35%">
 <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
<div v-for='index in lengthT' :key='index' >
              
              <button v-on:click="array[0].pop();lengthT--;curr-=1000;abgabe=false" style="width: 70px;height:40px" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
              1000
              </button>
            </div>
        <h1> </h1>
 </div>

   <!--
   WE PRINT ALLL OUR Hunderter
 -->
<div style="display:flex;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
<div v-for='index in lengthH' :key='index'>
              
              <button v-on:click="array[1].pop();lengthH--;curr-=100;abgabe=false" style="width: 70px;height:40px"  >
              <!--<img src="@/assets/logo.png" style="width:100px;height:100px;float:left" />-->
              100
              </button>
            </div>
</div>

<div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
<div v-for='index in lengthZ' :key='index'>
              <button v-on:click="array[2].pop();lengthZ--;curr-=10;abgabe=false" style="width: 70px;height:40px" >
              10
              </button>
            </div>
</div>

<div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
<div v-for='index in lengthE' :key='index'>
              <button v-on:click="array[3].pop();lengthE--;curr-=1;abgabe=false"  style="width: 70px;height:40px">
              
              1
              </button>
            </div>
</div>

 </div>
 
 <h1></h1>
 <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
 

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
    
      <img src="@/assets/help.png" alt="">
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
      val: Math.floor(Math.random() * 9999) + 1,
      lengthT: 0,
      lengthH: 0,
      lengthZ: 0,
      lengthE: 0,
      array: [],
      curr: 0,
      resultat: false,
      abgabe:false,
      showModal:false,
      showModal1:false,
      state:false

    }
  },
  created: function(){
    this.initArr()
  },
  methods : {
    randomNumber (){
      this.val =  Math.floor(Math.random() * 9999) + 1;
      
    },
    check(){
      this.abgabe=true
      if (this.val==this.curr){
        this.resultat = true;
        this.state = true;
      }

      else {
        this.resultat = false;
        this.state = false;
      } this.toggleModal1();
    },
    popup(){
      
    },
    addtausend (){
      if(this.lengthT==9)
        popup()
      else {
        this.array[0].push(1)
        this.lengthT++
        this.curr+=1000
      }
    },
    addhundert (){
      if(this.lengthH==9)
        popup()
      else {
     this.array[1].push(1)
     this.lengthH++
     this.curr+=100
      }
    },
    addzehn (){
      if(this.lengthZ==9)
        popup()
      else{
     this.array[2].push(1)
     this.lengthZ++
     this.curr+=10
      }
    },
    eins (){
       if(this.lengthE==9)
        popup()
        else{
     this.array[3].push(1)
     this.lengthE++
     this.curr+=1
        }
    },
    initArr(){
      this.array.push([])
      this.array.push([])
      this.array.push([])
      this.array.push([])
      console.log(this.array)

    },
    reset(){
this.val= Math.floor(Math.random() * 9999) + 1,
      this.lengthT= 0
      this.lengthH= 0
      this.lengthZ= 0
      this.lengthE= 0
      this.array= []
      this.curr= 0
      this.resultat= false
      this.abgabe=false
      this.initArr()
    },
    toggleModal(){
      this.showModal= !this.showModal
    },
    toggleModal1(){
      this.showModal1= true;
    }
  }
  

  }
 


</script>

<style scoped>
.cards {                     /*cards to pull*/
   padding: 150px 10;
   width: 600px;
   text-align: left;
   background: white;
   margin: 20px;
   display: inline-block
   

 }
 .video-container{
   height: 10px;
   width: 10px
   
 }
  .button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
    
  }
 
 
</style>