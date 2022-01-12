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
  <h1>Münzen optimieren</h1>
    <h2 >
    Optimiere das Gewicht deiner Brieftasche durch Austauschen der Münzen

       

    </h2>
   

   

   <button @click="wechsel">
       <h3>austauschen</h3>
   </button>
   <div>
    <template v-if="unmatched">
        <p style="color:red">deine zwei Münzen müssen den gleichen Wert haben</p>
    </template>
    <template v-else>
       <p>&nbsp;&nbsp;&nbsp;</p> 
    </template></div>
  <div style="display:flex">

   <div id="container1" class="container" @drop="drop($event)" @dragover="allowDrop($event)">
    <strong><p>Brieftasche</p></strong>
        <template v-for='index in rand1' :key='index'>
       
            <img :id="'one-'+(index)" draggable="true" @dragstart="drag($event)" src="@/assets/one.png" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand2' :key='index'>
       
            <img :id="'two-'+(index)" src="@/assets/two.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand4' :key='index'>
       
            <img :id="'four-'+(index)" src="@/assets/four.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
       </template>

        <template v-for='index in rand8' :key='index'>
       
            <img :id="'eight-'+(index)" draggable="true" @dragstart="drag($event)" src="@/assets/eight.png" style="height:40px;width:40px"/>
       
       </template>
        <template v-for='index in rand16' :key='index'>
       
            <img :id="'sixteen-'+(index)" src="@/assets/sixteen.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand32' :key='index'>
       
            <img :id="'thirtytwo-'+(index)" draggable="true" @dragstart="drag($event)" src="@/assets/thirtytwo.png" style="height:40px;width:40px"/>
       
       </template>

       <template v-for='index in rand64' :key='index'>
       
            <img :id="'sixtyfour-'+(index)" draggable="true" @dragstart="drag($event)" src="@/assets/sixtyfour.png" style="height:40px;width:40px"/>
       
       </template>
    </div>
    
    
        <p>muenze1</p>
  <div id="muenze1" class="muenze" @drop="drop($event)" @dragover="allowDrop($event)" >
      

    </div> <p>muenze2</p>
    <div id="muenze2" class="muenze" @drop="drop($event)" @dragover="allowDrop($event)" >
      

    </div> 
    

    <p>output</p>
    <div id="out" class="muenze"  @dragover="allowDrop($event)" >
      <div v-for='i in create2' :key='i'>
          <img :id="'twon-'+(counter+100)" draggable="true" @dragstart="drag($event)" src="@/assets/two.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create4' :key='i'>
          <img :id="'fourn-'+(counter+200)" draggable="true" @dragstart="drag($event)" src="@/assets/four.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create8' :key='i'>
          <img :id="'eightn-'+(counter+300)" draggable="true" @dragstart="drag($event)" src="@/assets/eight.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create16' :key='i'>
          <img :id="'sixteenn-'+(counter+400)" draggable="true" @dragstart="drag($event)" src="@/assets/sixteen.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create32' :key='i'>
          <img :id="'thirtytwon-'+(counter+500)" draggable="true" @dragstart="drag($event)" src="@/assets/thirtytwo.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create64' :key='i'>
          <img :id="'sixtyfourn-'+(counter+600)" draggable="true" @dragstart="drag($event)" src="@/assets/sixtyfour.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create128' :key='i'>
          <img :id="'maxn-'+(counter+700)" draggable="true" @dragstart="drag($event)" src="@/assets/max.png" style="height:40px;width:40px"/>
      </div>

    </div> 
    
<!--
  <template v-for='i in 10' :key='i' style="display:flex">
    <img :id="'korrekt-'+i" v-if="arr[i-1]==0" src="@/assets/thirtytwo.png" draggable="true" @dragstart="drag($event)"/>
    <img :id="'falsch-'+i" v-else-if="arr[i-1]" src="@/assets/thirtytwo.png" draggable="true" @dragstart="drag($event)" />
    </template>-->
  </div>
<br><br><br>
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
  components:{Modal,Modal1},
  
  data() {
    return {
      arr: [],
           rand1:(Math.floor(Math.random() * 4)),
           rand2:(Math.floor(Math.random() * 4)),
           rand4:(Math.floor(Math.random() * 4)),
           rand8:(Math.floor(Math.random() * 4)),
           rand16:(Math.floor(Math.random() * 4)),
           rand32:(Math.floor(Math.random() * 4)),
           rand64:(Math.floor(Math.random() * 2)),
           
           counter:1000,
           ds:'',

           anzahl1:0,
           create2:0,
           anzahl2:0,
           create4:0,
           anzahl4:0,
           create8:0,
           anzahl8:0,
           create16:0,
           anzahl16:0,
           create32:0,
           anzahl32:0,
           create64:0,
           anzahl64:0,
           anzahl128:0,
           create128:0,
           showModal1:false,
           showModal:false,
           state:false,
           unmatched:false
           
    }
  },
   created: function(){
    this.init()
  },
 
  methods : {
    allowDrop(event) {
      event.preventDefault();
    },
    reset(){
           this.clear();
            var ds3 = document.getElementById("out");
            ds3.innerHTML="";
           this.rand1=(Math.floor(Math.random() * 4)),
           this.rand2=(Math.floor(Math.random() * 4)),
           this.rand4=(Math.floor(Math.random() * 4)),
           this.rand8=(Math.floor(Math.random() * 4)),
           this.rand16=(Math.floor(Math.random() * 4)),
           this.rand32=(Math.floor(Math.random() * 4)),
           this.rand64=(Math.floor(Math.random() * 2)),
           this.counter+=2000,
           this.ds='',
           this.anzahl1=0,
           this.create2=0,
           this.anzahl2=0,
           this.create4=0,
           this.anzahl4=0,
           this.create8=0,
           this.anzahl8=0,
           this.create16=0,
           this.anzahl16=0,
           this.create32=0,
           this.anzahl32=0,
           this.create64=0,
           this.anzahl128=0,
           this.create128=0,
           this.showModal=false,
     
      this.showModal1=false,
      this.state=false,
           this.unmatched=false

    },
    clear(){
      var ds1 = document.getElementById("muenze1");
      ds1.innerHTML="";
      var ds2 = document.getElementById("muenze2");
      ds2.innerHTML="";

      
  },
  wechsel(){
       var ds1 = document.getElementById("muenze1");
       var id1 = ds1.childNodes[0].id;
       var ds2 = document.getElementById("muenze2");
       var id2 = ds2.childNodes[0].id;
       console.log(id1)
       console.log(id2)
        if (id1.startsWith("one") && id2.startsWith("one")){
          this.anzahl1-=2;
          this.anzahl2++;
        this.create2++;
        this.counter++;
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("two") && id2.startsWith("two")){
        this.create4++
        this.counter++
        this.unmatched=false;
         this.anzahl2-=2;
          this.anzahl4++;
        this.clear()}
        else if (id1.startsWith("four") && id2.startsWith("four")){
        this.create8++
        this.counter++
        this.unmatched=false;
         this.anzahl4-=2;
          this.anzahl8++;
        this.clear()}
        else if (id1.startsWith("eight") && id2.startsWith("eight")){
        this.create16++
        this.counter++
        this.unmatched=false;
        this.anzahl8-=2;
          this.anzahl16++;
        this.clear()}
        else if (id1.startsWith("sixteen") && id2.startsWith("sixteen")){
        this.create32++
        this.counter++
        this.unmatched=false;
        this.anzahl16-=2;
          this.anzahl32++;
        this.clear()}
        else if (id1.startsWith("thirtytwo") && id2.startsWith("thirtytwo")){
        this.create64++
        this.counter++
        this.unmatched=false;
        this.anzahl32-=2;
          this.anzahl64++;
        this.clear()}
        else if (id1.startsWith("sixtyfour") && id2.startsWith("sixtyfour")){
        this.create128++
        this.counter++
        this.unmatched=false;
        this.anzahl64-=2;
          this.anzahl128++;
        this.clear()}
        
        else
            this.unmatched=true;
             
       



  },
  toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModal1(){
      this.showModal1=true;
      },
       check(){
         
       var inhalt = ""

      var container1 = document.getElementById("container1")
      this.state=true;
      for(let i = 0; i < container1.childNodes.length; i++){
        for(let j=i+1; j< container1.childNodes.length-1;j++){
          
          if((container1.childNodes[i].id.startsWith("one")&&(container1.childNodes[j].id.startsWith("one")))
             ||(container1.childNodes[i].id.startsWith("two")&&(container1.childNodes[j].id.startsWith("two")))
             ||(container1.childNodes[i].id.startsWith("four")&&(container1.childNodes[j].id.startsWith("four")))
             ||(container1.childNodes[i].id.startsWith("eight")&&(container1.childNodes[j].id.startsWith("eight")))
             ||(container1.childNodes[i].id.startsWith("sixteen")&&(container1.childNodes[j].id.startsWith("sixteen")))
             ||(container1.childNodes[i].id.startsWith("thirtytwo")&&(container1.childNodes[j].id.startsWith("thirtytwo")))
             ||(container1.childNodes[i].id.startsWith("sixtyfour")&&(container1.childNodes[j].id.startsWith("sixtyfour"))))
             this.state=false;
        }
      }
      this.abgabe=true;
      this.this.toggleModal1();
        console.log(container1.childNodes[i].id)
      }
     
       
        
     ,
    drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    },

    drop(event) {
      //if(document.getElementById("muenze1").childNodes.length >= 1)
        //{ return }  
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
    
      
       /* console.log(container1)
      console.log(container1.childNodes)
      console.log(container2)
      console.log(container2.childNodes)
       //console.log(container2)
      */
      
    },
    
    
    init(){
            
               
           
        },
    inhalt_erster_container(){
      var inhalt = ""

      var container1 = document.getElementById("container1")
      for(let i = 0; i < container1.childNodes.length; i++){
        console.log(container1.childNodes[i].id)
      }

      return inhalt
    }
  }
}





</script>


<style scoped>
  
  .container{
    height: 400px;
    width: 400px;
    border: 1px solid black;
    margin: 1em 1em 1em 1em;
    background: white;
  }
  .muenze{
    height: 80px;
    width: 100px;
    border: 1px dashed black;
    margin: 1em 1em 1em 1em;
    background: white;
  }
   .text {
     border-radius: 10px;
    border: solid black; 
    background-color:white ;
  }

  img {
    height: 30px;
    width: 50px;
    margin: 1em 1em 1em 1em;
  }
  .button {
    cursor: pointer;
   
    /*background-color: #ffe5b2;*/
    border-radius: 10px;
    border: solid black;
    border-width: thin;
    
    
  }

</style>
