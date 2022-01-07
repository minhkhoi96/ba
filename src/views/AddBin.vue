<template>
    <div v-if="showModal">
    <Modal header="Hier kommt ein Beispiel vorgelöst" @close="toggleModal">
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
    <h2>Binäre Addition</h2>
    <p class="text" >
       <img src="@/assets/alice.png" alt="" style="height:5%;width:5%">
        Kannst du Bob dabei helfen die beiden binären Zahlen schriftlich zu addieren?<br>
        Falls das Resultat mehr als vier Ziffern benötigen würde, setze einfach einen Tick
        auf das Überschuss Kästchen!
      </p>

    
 <br><br>

  <div class="container" >
    <br>
    &nbsp;&nbsp;
  <template v-for='i in 4' :key='i' >
    <strong class="zahl">{{list1[i-1]}} </strong>&nbsp;
  </template>
  
  <br>
  +
  <template v-for='i in 4' :key='i'  >
    <strong class="zahl">{{list2[i-1]}}</strong>&nbsp;
  </template>
  <hr style="height:1px;width:80px;background-color:black;">
    &nbsp;&nbsp;
 

 <input class="in" v-model="msg0" placeholder="" style="width:7px;margin-right:05px">
 <input class="in" v-model="msg1" placeholder="" style="width:7px;margin-right:5px">
 <input class="in" v-model="msg2" placeholder="" style="width:7px;margin-right:5px">
 <input class="in" v-model="msg3" placeholder="" style="width:7px;margin-right:5px">

<br><br>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">Überschuss</label>
<br>

  </div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!--{{l0+l1+l2+l3}}-->

 <div style="display:flex;margin-left:39%;">
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
     
      list1:[0,0,0,0],
      list2:[0,0,0,0],
      msg1:'',
      msg2:'',
      msg3:'',
      msg0:'',
      l1:'',
      l2: '',
      l3:'',
      l0:'',
      final:'',
      lösung:'',
      resultat:false,
      abgabe:false,
      showModal:false,
      länge:0,
      showModal1:false,
      state:false,
      of:false,
      checked:false
    }
  },
  created: function(){
    this.init()
  },

  methods: {
    init(){
     //0 1 2 3 

     //letztes bit
      this.list1[3]= this.rand();
      this.list2[3]=this.rand();
      if(this.list1[3]==1 && this.list2[3]==1){
        this.of=true
        this.l3="0"
      }else if(this.list1[3]==1 || this.list2[3]==1)
        this.l3=1;
        else this.l3=0;
        
      //zweit letztes bit
      this.list1[2]= this.rand();
      this.list2[2]=this.rand();
     if(this.list1[2]==1 && this.list2[2]==1 && this.of){
        this.of=true
        this.l2="1"
      }else if(this.list1[2]==1 && this.list2[2]==1){
        this.l2="0";
        this.of=true;}
        else if ((this.list1[2]==1 || this.list2[2]==1) && this.of){
          this.l2="0";
          this.of=true;
        } else if(this.list1[2]==1 || this.list2[2]==1){
          this.l2="1";
          this.of=false;
        }
         else if(this.of){
           this.l2="1";
           this.of=false
         }
         else{
          this.l2="0"
         }
         
      

      //erstes bit
      this.list1[1]= this.rand();
      this.list2[1]=this.rand();
      if(this.list1[1]==1 && this.list2[1]==1 && this.of){
        this.of=true
        this.l1="1"
      }else if(this.list1[1]==1 && this.list2[1]==1){
        this.l1="0";
        this.of=true;}
        else if ((this.list1[1]==1 || this.list2[1]==1) && this.of){
          this.l1="0";
          this.of=true;
        } else if(this.list1[1]==1 || this.list2[1]==1){
          this.l1="1";
          this.of=false;
        }
         else if(this.of){
           this.l1="1";
           this.of=false;
         }
         else{
          this.l1="0"; 
         }
         

        
      //0tes bit
      this.list1[0]= this.rand();
      this.list2[0]=1-this.list1[0];

       if(this.list1[0]==1 && this.list2[0]==1 && this.of){
        this.of=true
        this.l0="1"
      }else if(this.list1[0]==1 && this.list2[0]==1){
        this.l0="0";
        this.of=true;}
        else if ((this.list1[0]==1 || this.list2[0]==1) && this.of){
          this.l0="0";
          this.of=true;
        } else if(this.list1[0]==1 || this.list2[0]==1){
          this.l0="1";
          this.of=false;
        }
         else if(this.of){
           this.l0="1";
           this.of=false;
         }
         else{
          this.l0="0"; 
         }

     

      
      
    },
    rand(){
      var y = Math.random();
          if (y < 0.5)
            y = 0
        else
        y= 1  
      return y;
    },
    toggleModal(){
      this.showModal=!this.showModal
    },
    reset(){
      
      this.msg1='',
      this.msg2='',
      this.msg3='',
      this.msg0='',
      this.l1='',
      this.l2= '',
      this.l3='',
      this.l0='',
      
      
      
      
      this.showModal=false,
     
      this.showModal1=false,
      this.state=false,
      this.of=false,
      this.checked=false
     this.init();


    },
    check(){
     
      if(this.msg0==this.l0 &&this.msg1==this.l1&&this.msg2==this.l2 &&this.msg3==this.l3&&this.of==this.checked){
        
        this.state=true;
        }
      else{
        
        this.state=false;}
      this.abgabe=true
      this.toggleModal1();
    },
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModal1(){
      this.showModal1=true;
      }
  }
}
</script>

<style scoped>
.container{
  background-color: white;
  margin: auto;
  width: 200px;
  height: 175px;
  border-radius: 10px;
  border: solid black;
    
}
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
    height: 10%;
  }
  .zahl{
    color:black;
    
  }
  .text {
     border-radius: 10px;
    border: solid black; 
    background-color:white ;
    margin-left:20%;
    margin-right: 20%;
    
  }
 
</style>