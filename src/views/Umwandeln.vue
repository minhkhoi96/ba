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
        <Modal1 header="Super!" @close="showModal1=false" style="color:green">
        <img src="@/assets/right.png" alt="">
        </Modal1>
      </div>

      <div v-else>
        <Modal1 header="das stimmt noch nicht ganz" @close="showModal1=false" style="color:red">
        <img src="@/assets/wrong.png" alt="">
        </Modal1>

      </div>

    </div>
    <h1>Kartendarstellung</h1>
   
  <h2>Stelle die folgende Zahl mit Karten dar</h2>
  

    <h2>{{val}}</h2>
 
 <button style="width: 70px;height:40px;
    " v-on:click="addzehntausend">
    <strong >10000</strong> 
    </button>&nbsp;
 <button style="width: 70px;height:40px;
    " v-on:click="addtausend">
    <strong>1000</strong> 
    </button>&nbsp;
 <button style="width: 70px;height:40px;
    " v-on:click="addhundert">
    <strong>100</strong> 
    </button>&nbsp;
 <button  style="width: 70px;height:40px;
    " v-on:click="addzehn">
    <strong>10</strong> 
    </button>&nbsp;
 <button style="width: 70px;height:40px; 
    " v-on:click="eins">
    <strong>1</strong> 
    </button>&nbsp;
 <br><br>
 <hr class="linie">
  <!--
  <button v-on:click="addtausend">
    <img src="@/assets/logo.png" style="width:50px;height:60px;">
  </button>
  -->
       <br>
    
  <!--
   WE PRINT ALLL OUR TAUSENDERstyle="margin:auto; width:50%"
   <button style="width: 70px;height:40px;background-color:grey;border: solid black;
    border-width: thin;
    ">1000</button>

     <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;margin-left:10px;margin-right:10px">
 -->
 
    
  <div style="margin-left:37%;">

 <div style="display:flex;;flex-direction: column;float:left;row-gap:10px;">
<div v-if="(lengthZt==0)">
  &nbsp;
                <button class="knopf"  style="width: 70px;height:40px;background-color:grey;border: solid black;
    opacity: 0;" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>10000</strong> 
              </button> 

              </div>
<div v-for='index in lengthZt' :key='index' >
              
              
                <button class="knopf" v-on:click="array[0].pop();lengthZt--;curr-=10000;abgabe=false" style="width: 70px;height:40px" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>10000</strong> 
              </button> 
              &nbsp;
              
            </div>
        <h1> </h1>
 </div>

 <div style="display:flex;flex-direction: column;float:left;row-gap:10px;">
<div v-if="(lengthT==0)">
  &nbsp;
                <button class="knopf"  style="width: 70px;height:40px;background-color:grey;border: solid black;
    opacity: 0;" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>1000</strong> 
              </button> 

              </div>
<div v-for='index in lengthT' :key='index' >
              
              
                <button class="knopf" v-on:click="array[1].pop();lengthT--;curr-=1000;abgabe=false" style="width: 70px;height:40px" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
              <strong>1000</strong> 
              </button> 
              
              &nbsp;
            </div>
        <h1> </h1>
 </div>

   <!--
   WE PRINT ALLL OUR Hunderter
 -->
 
<div style="display:flex;flex-direction: column;float:left;row-gap:10px;">
  <div v-if="(lengthH==0)">
  &nbsp;
                <button class="knopf"  style="width: 70px;height:40px;background-color:grey;border: solid black;
    opacity: 0;" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>100</strong> 
              </button> 

              </div>
<div v-for='index in lengthH' :key='index'>
              
              <button class="knopf" v-on:click="array[2].pop();lengthH--;curr-=100;abgabe=false" style="width: 70px;height:40px"  >
              <!--<img src="@/assets/logo.png" style="width:100px;height:100px;float:left" />-->
              <strong>100</strong> 
              </button>
              &nbsp;
            </div>
</div>

<div style="display:flex;;flex-direction: column;float:left;row-gap:10px;">
 <div v-if="(lengthZ==0)">
  &nbsp;
                <button class="knopf"  style="width: 70px;height:40px;background-color:grey;border: solid black;
    opacity: 0;" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>10</strong> 
              </button> 

              </div>
<div v-for='index in lengthZ' :key='index'>
              <button class="knopf" v-on:click="array[3].pop();lengthZ--;curr-=10;abgabe=false" style="width: 70px;height:40px" >
              <strong>10</strong> 
              </button>
              &nbsp;
            </div>
</div>

<div style="display:flex;;flex-direction: column;float:left;row-gap:10px;">
  <div v-if="(lengthE==0)">
  &nbsp;
                <button class="knopf"  style="width: 70px;height:40px;background-color:grey;border: solid black;
    opacity: 0;" >
              <!--<img src="@/assets/logo.png" style="width:150px;height:150px;float:left" /> -->
             <strong>1</strong> 
              </button> 

              </div>
<div v-for='index in lengthE' :key='index'>
              <button class="knopf" v-on:click="array[4].pop();lengthE--;curr-=1;abgabe=false"  style="width: 70px;height:40px">
              
              <strong>1</strong> 
              </button>
              &nbsp;
            </div>
</div>

 </div>
 
 <h1></h1>
 <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br>
 

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
    
      <img src="@/assets/help.png" alt="" style="height:43%"> 
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
      val: Math.floor(Math.random() * 99999) + 1,
      lengthT: 0,
      lengthH: 0,
      lengthZ: 0,
      lengthE: 0,
      lengthZt: 0,
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
    addzehntausend(){
       if(this.lengthZt==9)
        popup()
      else {
        this.array[0].push(1)
        this.lengthZt++
        this.curr+=10000
      }
    },
    addtausend (){
      if(this.lengthT==9)
        popup()
      else {
        this.array[1].push(1)
        this.lengthT++
        this.curr+=1000
      }
    },
    addhundert (){
      if(this.lengthH==9)
        popup()
      else {
     this.array[2].push(1)
     this.lengthH++
     this.curr+=100
      }
    },
    addzehn (){
      if(this.lengthZ==9)
        popup()
      else{
     this.array[3].push(1)
     this.lengthZ++
     this.curr+=10
      }
    },
    eins (){
       if(this.lengthE==9)
        popup()
        else{
     this.array[4].push(1)
     this.lengthE++
     this.curr+=1
        }
    },
    initArr(){
      this.array.push([])
      this.array.push([])
      this.array.push([])
      this.array.push([])
      this.array.push([])
      console.log(this.array)

    },
    reset(){
this.val= Math.floor(Math.random() * 99999) + 1,
      this.lengthT= 0
      this.lengthH= 0
      this.lengthZ= 0
      this.lengthE= 0
      this.lengthZt= 0
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
  .linie{
    border-color: black;
    width: 50%;
  }
  .knopf{
    width: 70px;height:40px;background-color:white;border: solid black;
    border-width: thin;
  }
 
 
</style>