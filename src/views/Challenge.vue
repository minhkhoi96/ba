<template>
    <p class="text">
      <img src="@/assets/alice.png" alt="" style="display:flex;flex-direction: column;margin-left:48%;height:4%;width:4%">
        Alice hat folgende Münzen in Ihrer Brieftasche.
        Weil die Tasche ihr zu schwer wird möchte sie gerne
        weniger Münzen mit sich herumschleppen aber trotzdem noch gleich
        viel Geld dabei haben. Zum Glück besitzt sie eine Geldmaschine,
        die zwei gleiche Münzen gegen eine gleichwertige Münze umtauscht.
        Kannst du Alice dabei helfen ihre Brieftasche so leicht wie möglich zu
        machen?

    </p>
   

   

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
    <p>Brieftasche</p>
        <template v-for='index in rand1' :key='index'>
       
            <img :id="'one-'+index" draggable="true" @dragstart="drag($event)" src="@/assets/one.png" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand2' :key='index'>
       
            <img :id="'two-'+(index+5)" src="@/assets/two.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand4' :key='index'>
       
            <img :id="'four-'+(index+10)" src="@/assets/four.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
       </template>

        <template v-for='index in rand8' :key='index'>
       
            <img :id="'eight-'+(index+15)" draggable="true" @dragstart="drag($event)" src="@/assets/eight.png" style="height:40px;width:40px"/>
       
       </template>
        <template v-for='index in rand16' :key='index'>
       
            <img :id="'sixteen-'+(index+20)" src="@/assets/sixteen.png" draggable="true" @dragstart="drag($event)" style="height:40px;width:40px"/>
       
        </template>

        <template v-for='index in rand32' :key='index'>
       
            <img :id="'thirtytwo'+(index+100)" draggable="true" @dragstart="drag($event)" src="@/assets/thirtytwo.png" style="height:40px;width:40px"/>
       
       </template>

       <template v-for='index in rand64' :key='index'>
       
            <img :id="'sixtyfour-'+(index+3000)" draggable="true" @dragstart="drag($event)" src="@/assets/sixtyfour.png" style="height:40px;width:40px"/>
       
       </template>
    </div>
    
    
        <p>muenze1</p>
  <div id="muenze1" class="muenze" @drop="drop($event)" @dragover="allowDrop($event)" >
      

    </div> <p>muenze2</p>
    <div id="muenze2" class="muenze" @drop="drop($event)" @dragover="allowDrop($event)" >
      

    </div> 
    

    <p>output</p>
    <div id="out" class="muenze" @drop="drop($event)" @dragover="allowDrop($event)" >
      <div v-for='i in create2' :key='i'>
          <img :id="'two-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/two.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create4' :key='i'>
          <img :id="'four-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/four.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create8' :key='i'>
          <img :id="'eight-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/eight.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create16' :key='i'>
          <img :id="'sixteen-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/sixteen.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create32' :key='i'>
          <img :id="'thirtytwo-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/thirtytwo.png" style="height:40px;width:40px"/>
      </div>
      <div v-for='i in create64' :key='i'>
          <img :id="'sixtyfour-'+counter" draggable="true" @dragstart="drag($event)" src="@/assets/sixtyfour.png" style="height:40px;width:40px"/>
      </div>

    </div> 
    
<!--
  <template v-for='i in 10' :key='i' style="display:flex">
    <img :id="'korrekt-'+i" v-if="arr[i-1]==0" src="@/assets/thirtytwo.png" draggable="true" @dragstart="drag($event)"/>
    <img :id="'falsch-'+i" v-else-if="arr[i-1]" src="@/assets/thirtytwo.png" draggable="true" @dragstart="drag($event)" />
    </template>-->
  </div>
  
</template>

<script>



export default {
  
  
  data() {
    return {
      arr: [],
            rand1:(Math.floor(Math.random() * 4)),
           rand2:(Math.floor(Math.random() * 4)),
           rand4:(Math.floor(Math.random() * 4)),
           rand8:(Math.floor(Math.random() * 4)),
           rand16:(Math.floor(Math.random() * 4)),
           rand32:(Math.floor(Math.random() * 4)),
           rand64:(Math.floor(Math.random() * 4)),
           rand128:(Math.floor(Math.random() * 2)),
           counter:4000,
           ds:'',
           create2:0,
           create4:0,
           create8:0,
           create16:0,
           create32:0,
           create64:0,
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
        this.create2++;
        this.counter++;
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("two") && id2.startsWith("two")){
        this.create4++
        this.counter++
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("four") && id2.startsWith("four")){
        this.create8++
        this.counter++
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("eight") && id2.startsWith("eight")){
        this.create16++
        this.counter++
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("sixteen") && id2.startsWith("sixteen")){
        this.create32++
        this.counter++
        this.unmatched=false;
        this.clear()}
        else if (id1.startsWith("thirtytwo") && id2.startsWith("thirtytwo")){
        this.create64++
        this.counter++
        this.unmatched=false;
        this.clear()}
        
        else
            this.unmatched=true;
             
       



  },
    drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    },

    drop(event) {
      //if(document.getElementById("muenze1").childNodes.length >= 1)
       // { return }  
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
      var container1 = document.getElementById("muenze1")
      var container2 = document.getElementById("muenze2")
      
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
    height: 100px;
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

</style>
